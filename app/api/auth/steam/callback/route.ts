import { NextResponse } from "next/server";
import {
  SESSION_COOKIE,
  fetchSteamProfile,
  signSession,
  steamId64ToAccountId,
  verifySteamCallback,
} from "@/lib/steamAuth";

// Steam regresa aquí tras autenticar. Verificamos la aserción contra Steam,
// emitimos la cookie de sesión firmada y volvemos a la app.
export async function GET(request: Request) {
  const url = new URL(request.url);
  const origin = url.origin;

  const steamId64 = await verifySteamCallback(url.searchParams);
  if (!steamId64) {
    return NextResponse.redirect(`${origin}/?auth=error`);
  }

  const profile = await fetchSteamProfile(steamId64);
  const session = {
    steamId64,
    accountId: steamId64ToAccountId(steamId64),
    name: profile.name,
    avatar: profile.avatar,
  };

  const response = NextResponse.redirect(`${origin}/?auth=ok`);
  response.cookies.set(SESSION_COOKIE, signSession(session), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 días
  });
  return response;
}
