import { NextResponse } from "next/server";
import { BACKEND_URL, backendFetch } from "@/lib/backend";

/**
 * Récupère l'URL d'autorisation Google auprès du backend.
 *
 * Le backend Laravel (Socialite) expose /auth/google/redirect qui renvoie
 * soit un JSON { url: "https://accounts.google.com/..." }, soit une redirection
 * HTTP 302 directe vers Google.
 *
 * On gère les deux cas et on renvoie toujours au client un JSON { url } pour
 * que le frontend puisse faire `window.location.href = url`.
 */
export async function GET() {
  // 1) On tente d'abord en mode "ne pas suivre la redirection" pour
  //    capturer un éventuel Location header si le backend répond 302.
  try {
    const res = await fetch(`${BACKEND_URL}/auth/google/redirect`, {
      method: "GET",
      headers: { Accept: "application/json" },
      redirect: "manual",
      cache: "no-store",
    });

    // Cas 1 : redirection 3xx → on récupère le header Location
    if (res.status >= 300 && res.status < 400) {
      const location = res.headers.get("location");
      if (location) {
        return NextResponse.json({ url: location });
      }
    }

    // Cas 2 : JSON { url }
    const contentType = res.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      const data = (await res.json().catch(() => null)) as
        | { url?: string; data?: { url?: string } }
        | null;
      const url = data?.url || data?.data?.url;
      if (url) {
        return NextResponse.json({ url });
      }
    }
  } catch (err) {
    console.error("[google/redirect] fetch failed, retrying with follow:", err);
  }

  // Fallback : si le mode "manual" ne marche pas dans l'environnement,
  // on refait un appel normal et on espère récupérer un JSON.
  const result = await backendFetch<{ url?: string; data?: { url?: string } }>(
    "/auth/google/redirect",
  );

  const url = result.data?.url || result.data?.data?.url;

  if (!url) {
    return NextResponse.json(
      {
        message:
          "Impossible d'obtenir l'URL d'authentification Google depuis le backend.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ url });
}
