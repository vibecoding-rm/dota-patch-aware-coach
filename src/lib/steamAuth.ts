// Login con Steam vía OpenID 2.0 (Steam no soporta OAuth). El flujo:
//   1. Redirigimos al usuario a Steam con un return_to a nuestro callback.
//   2. Steam vuelve con parámetros openid.* firmados por ellos.
//   3. Verificamos la aserción reenviándola a Steam (check_authentication).
//      NUNCA confiamos en los parámetros sin este paso: sería un bypass de auth.
//   4. Extraemos el SteamID64 y emitimos una cookie de sesión firmada (HMAC).
//
// No requiere ninguna librería: es un par de fetch + crypto del runtime de Node.

import { createHmac, timingSafeEqual } from "node:crypto";

const STEAM_OPENID_ENDPOINT = "https://steamcommunity.com/openid/login";
const STEAM_ID_OFFSET = BigInt("76561197960265728"); // SteamID64 - offset = Steam32 (account_id)

function authSecret(): string {
  return process.env.AUTH_SECRET || "dev-insecure-secret-change-me";
}

/** URL a la que mandamos al usuario para que Steam lo autentique. */
export function buildSteamLoginUrl(origin: string): string {
  const params = new URLSearchParams({
    "openid.ns": "http://specs.openid.net/auth/2.0",
    "openid.mode": "checkid_setup",
    "openid.return_to": `${origin}/api/auth/steam/callback`,
    "openid.realm": origin,
    "openid.identity": "http://specs.openid.net/auth/2.0/identifier_select",
    "openid.claimed_id": "http://specs.openid.net/auth/2.0/identifier_select",
  });
  return `${STEAM_OPENID_ENDPOINT}?${params.toString()}`;
}

/**
 * Verifica con Steam que los parámetros del callback son auténticos y devuelve
 * el SteamID64. Devuelve null si la firma no valida.
 */
export async function verifySteamCallback(query: URLSearchParams): Promise<string | null> {
  // Reenviamos exactamente lo recibido pero con mode=check_authentication.
  const body = new URLSearchParams(query);
  body.set("openid.mode", "check_authentication");

  const res = await fetch(STEAM_OPENID_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body.toString(),
    cache: "no-store",
  });
  if (!res.ok) return null;
  const text = await res.text();
  if (!/is_valid\s*:\s*true/i.test(text)) return null;

  const claimedId = query.get("openid.claimed_id") ?? "";
  const match = claimedId.match(/^https?:\/\/steamcommunity\.com\/openid\/id\/(\d{17})$/);
  return match ? match[1] : null;
}

export function steamId64ToAccountId(steamId64: string): number {
  return Number(BigInt(steamId64) - STEAM_ID_OFFSET);
}

export type SteamSession = {
  steamId64: string;
  accountId: number;
  name?: string;
  avatar?: string;
};

function base64url(input: Buffer | string): string {
  return Buffer.from(input).toString("base64url");
}

/** Cookie de sesión firmada: payload.firma. Sin DB; el HMAC garantiza integridad. */
export function signSession(session: SteamSession): string {
  const payload = base64url(JSON.stringify(session));
  const sig = createHmac("sha256", authSecret()).update(payload).digest("base64url");
  return `${payload}.${sig}`;
}

export function verifySession(cookie: string | undefined): SteamSession | null {
  if (!cookie) return null;
  const [payload, sig] = cookie.split(".");
  if (!payload || !sig) return null;
  const expected = createHmac("sha256", authSecret()).update(payload).digest("base64url");
  const a = Buffer.from(sig);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) return null;
  try {
    return JSON.parse(Buffer.from(payload, "base64url").toString()) as SteamSession;
  } catch {
    return null;
  }
}

/** Enriquecimiento opcional del perfil (nombre/avatar). Requiere STEAM_API_KEY. */
export async function fetchSteamProfile(
  steamId64: string,
): Promise<{ name?: string; avatar?: string }> {
  const key = process.env.STEAM_API_KEY;
  if (!key) return {};
  try {
    const url = `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=${key}&steamids=${steamId64}`;
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) return {};
    const data = (await res.json()) as {
      response?: { players?: Array<{ personaname?: string; avatarfull?: string }> };
    };
    const player = data.response?.players?.[0];
    return { name: player?.personaname, avatar: player?.avatarfull };
  } catch {
    return {};
  }
}

export const SESSION_COOKIE = "dpac_session";
