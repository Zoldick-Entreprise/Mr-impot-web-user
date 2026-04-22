/**
 * Helpers d'authentification côté serveur.
 *
 * Le token JWT est stocké dans un cookie HttpOnly pour éviter les attaques XSS.
 * Ce fichier est importé uniquement par les route handlers (app/api/**) et par
 * les Server Components qui ont besoin de lire l'utilisateur courant.
 */

import { cookies } from "next/headers";
import type { NextResponse } from "next/server";
import { backendFetch } from "@/lib/backend";

export const AUTH_COOKIE = "auth_token";
/** 30 jours */
export const AUTH_COOKIE_MAX_AGE = 60 * 60 * 24 * 30;

export type SessionUser = {
  id: number | string;
  name: string;
  email: string;
  avatar?: string | null;
  preferred_language?: string | null;
  created_at?: string;
};

/** Lit le token depuis le cookie HttpOnly (server-side uniquement). */
export async function getAuthToken(): Promise<string | null> {
  const store = await cookies();
  return store.get(AUTH_COOKIE)?.value ?? null;
}

/**
 * Récupère l'utilisateur connecté côté serveur.
 * Utilisé dans les Server Components (ex : dashboard layout).
 * Retourne null si non authentifié ou si le token est invalide.
 */
export async function getCurrentUser(): Promise<SessionUser | null> {
  const token = await getAuthToken();
  if (!token) return null;

  type MeResponse =
    | SessionUser
    | { data?: SessionUser; user?: SessionUser };

  const result = await backendFetch<MeResponse>("/user", {
    method: "GET",
    token,
  });

  if (!result.ok || !result.data) return null;

  const raw = result.data;
  const user =
    (raw && typeof raw === "object" && "email" in raw
      ? (raw as SessionUser)
      : null) ||
    (raw as { data?: SessionUser })?.data ||
    (raw as { user?: SessionUser })?.user ||
    null;

  return user;
}

/**
 * Pose le cookie d'auth sur une NextResponse.
 * À utiliser dans les route handlers qui renvoient une NextResponse.
 */
export function setAuthCookieOnResponse(res: NextResponse, token: string) {
  res.cookies.set({
    name: AUTH_COOKIE,
    value: token,
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: AUTH_COOKIE_MAX_AGE,
  });
}

/** Supprime le cookie d'auth sur une NextResponse. */
export function clearAuthCookieOnResponse(res: NextResponse) {
  res.cookies.set({
    name: AUTH_COOKIE,
    value: "",
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 0,
  });
}
