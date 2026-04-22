import { NextResponse } from "next/server";
import { backendFetch } from "@/lib/backend";
import {
  clearAuthCookieOnResponse,
  getAuthToken,
  type SessionUser,
} from "@/lib/auth";

type MeResponse =
  | SessionUser
  | { data?: SessionUser; user?: SessionUser };

export async function GET() {
  const token = await getAuthToken();

  if (!token) {
    return NextResponse.json({ user: null }, { status: 401 });
  }

  // Le backend Laravel expose généralement /user ou /auth/me.
  // On tente /user d'abord (Laravel Sanctum/Breeze standard).
  const result = await backendFetch<MeResponse>("/user", {
    method: "GET",
    token,
  });

  if (!result.ok) {
    // Token invalide ou expiré côté backend : on purge le cookie.
    const res = NextResponse.json({ user: null }, { status: 401 });
    clearAuthCookieOnResponse(res);
    return res;
  }

  const raw = result.data as MeResponse | null;
  const user =
    (raw && "email" in (raw as SessionUser) ? (raw as SessionUser) : null) ||
    (raw as { data?: SessionUser })?.data ||
    (raw as { user?: SessionUser })?.user ||
    null;

  if (!user) {
    return NextResponse.json({ user: null }, { status: 401 });
  }

  return NextResponse.json({ user });
}
