import { NextResponse } from "next/server";
import { backendFetch } from "@/lib/backend";
import {
  clearAuthCookieOnResponse,
  getAuthToken,
} from "@/lib/auth";

export async function POST() {
  const token = await getAuthToken();

  // On essaie d'invalider le token côté backend, mais on ne bloque pas
  // la déconnexion locale si ça échoue (le cookie est retiré de toute façon).
  if (token) {
    await backendFetch("/auth/logout", {
      method: "POST",
      token,
    }).catch(() => null);
  }

  const res = NextResponse.json({ ok: true });
  clearAuthCookieOnResponse(res);
  return res;
}
