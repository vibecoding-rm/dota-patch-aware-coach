import { NextResponse } from "next/server";
import { buildSteamLoginUrl } from "@/lib/steamAuth";

// Redirige al usuario a Steam para autenticarse. El origin se deriva de la
// petición, así funciona igual en localhost y en producción sin configurar nada.
export async function GET(request: Request) {
  const origin = new URL(request.url).origin;
  return NextResponse.redirect(buildSteamLoginUrl(origin));
}
