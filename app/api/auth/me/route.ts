import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { SESSION_COOKIE, verifySession } from "@/lib/steamAuth";

// Devuelve la sesión actual (o null). El cliente la usa para mostrar el usuario
// y autorrellenar su Account ID en el análisis de replays.
export async function GET() {
  const cookieStore = await cookies();
  const session = verifySession(cookieStore.get(SESSION_COOKIE)?.value);
  return NextResponse.json({ user: session });
}
