/**
 * Helpers d'authentification côté serveur.
 *
 * Le token JWT est stocké dans un cookie HttpOnly pour éviter les attaques XSS.
 * Ce fichier est importé uniquement par les route handlers (app/api/**) et par
 * les Server Components qui ont besoin de lire l'utilisateur courant.
 */

import { cookies } from "next/headers";
import type { NextResponse } from "next/server";

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
