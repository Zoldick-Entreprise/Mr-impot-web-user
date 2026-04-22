import { NextResponse } from "next/server";
import { backendFetch } from "@/lib/backend";
import {
  clearAuthCookieOnResponse,
  getAuthToken,
  type SessionUser,
} from "@/lib/auth";

export async function GET() {
  const token = await getAuthToken();

  if (!token) {
    return NextResponse.json({ user: null }, { status: 401 });
  }

  // Le backend expose GET /profile pour l'utilisateur courant.
  // Réponse : { data: UserResource }
  const result = await backendFetch<{ data?: SessionUser }>("/profile", {
    method: "GET",
    token,
  });

  if (!result.ok) {
    // Token invalide/expiré : on purge le cookie.
    const res = NextResponse.json({ user: null }, { status: 401 });
    clearAuthCookieOnResponse(res);
    return res;
  }

  const user = result.data?.data ?? null;
  if (!user) {
    return NextResponse.json({ user: null }, { status: 401 });
  }

  return NextResponse.json({ user });
}
