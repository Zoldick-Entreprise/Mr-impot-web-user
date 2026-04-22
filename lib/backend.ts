/**
 * Client HTTP serveur pour appeler le backend Laravel.
 *
 * Utilisé UNIQUEMENT côté serveur (Route Handlers dans app/api/**),
 * jamais importé dans un composant "use client".
 *
 * L'URL du backend est lue depuis l'env (BACKEND_API_URL). Elle n'est PAS
 * exposée au navigateur : le client appelle toujours des routes internes
 * /api/... qui proxy vers le backend.
 */

export const BACKEND_URL =
  process.env.BACKEND_API_URL?.replace(/\/$/, "") ||
  "https://mr-impots-back.onrender.com/api";

export type BackendResponse<T = unknown> = {
  ok: boolean;
  status: number;
  data: T | null;
  error?: string;
};

type FetchOptions = {
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  body?: unknown;
  token?: string | null;
  headers?: Record<string, string>;
  // Pour les endpoints type /auth/google/redirect, le backend peut renvoyer
  // une redirection 302. On veut pouvoir lire la location au lieu de suivre.
  redirect?: "follow" | "manual";
};

/**
 * Appel HTTP authentifié vers le backend.
 * Gère l'ajout du Bearer token et la désérialisation JSON.
 * Si `body` est un FormData, il est transmis tel quel (multipart/form-data).
 */
export async function backendFetch<T = unknown>(
  path: string,
  opts: FetchOptions = {},
): Promise<BackendResponse<T>> {
  const { method = "GET", body, token, headers = {}, redirect = "follow" } = opts;

  const url = path.startsWith("http") ? path : `${BACKEND_URL}${path}`;

  const isFormData =
    typeof FormData !== "undefined" && body instanceof FormData;

  const finalHeaders: Record<string, string> = {
    Accept: "application/json",
    ...headers,
  };

  // Ne pas forcer Content-Type pour FormData : fetch définit la boundary.
  if (body !== undefined && !isFormData) {
    finalHeaders["Content-Type"] = "application/json";
  }

  if (token) {
    finalHeaders["Authorization"] = `Bearer ${token}`;
  }

  const fetchBody: BodyInit | undefined =
    body === undefined
      ? undefined
      : isFormData
        ? (body as FormData)
        : JSON.stringify(body);

  try {
    const res = await fetch(url, {
      method,
      headers: finalHeaders,
      body: fetchBody,
      redirect,
      cache: "no-store",
    });

    const contentType = res.headers.get("content-type") || "";
    let data: unknown = null;

    if (contentType.includes("application/json")) {
      data = await res.json().catch(() => null);
    } else {
      const text = await res.text().catch(() => "");
      data = text || null;
    }

    if (!res.ok) {
      const errorMessage =
        (data as { message?: string } | null)?.message ||
        `Backend responded with status ${res.status}`;
      return {
        ok: false,
        status: res.status,
        data: data as T | null,
        error: errorMessage,
      };
    }

    return { ok: true, status: res.status, data: data as T };
  } catch (err) {
    console.error("[backendFetch] Network error:", err);
    return {
      ok: false,
      status: 0,
      data: null,
      error: err instanceof Error ? err.message : "Network error",
    };
  }
}
