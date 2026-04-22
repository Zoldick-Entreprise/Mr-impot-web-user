import { NextResponse } from "next/server";
import { setAuthCookieOnResponse } from "@/lib/auth";

/**
 * Callback final du flux Google OAuth.
 *
 * Le backend Laravel doit être configuré pour rediriger, après authentification
 * Google réussie, vers :
 *
 *     ${FRONTEND_URL}/api/auth/google/callback?token=<JWT>
 *
 * (et optionnellement &error=... en cas d'échec).
 *
 * Cette route pose le token dans un cookie HttpOnly puis redirige l'utilisateur
 * vers le dashboard.
 */
export async function GET(request: Request) {
  const url = new URL(request.url);
  const token = url.searchParams.get("token");
  const error = url.searchParams.get("error");

  const origin = url.origin;

  if (error) {
    const loginUrl = new URL("/login", origin);
    loginUrl.searchParams.set("error", error);
    return NextResponse.redirect(loginUrl);
  }

  if (!token) {
    const loginUrl = new URL("/login", origin);
    loginUrl.searchParams.set("error", "missing_token");
    return NextResponse.redirect(loginUrl);
  }

  const res = NextResponse.redirect(new URL("/dashboard", origin));
  setAuthCookieOnResponse(res, token);
  return res;
}
