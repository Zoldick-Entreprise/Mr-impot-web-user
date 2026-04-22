import { NextResponse } from "next/server";
import { backendFetch } from "@/lib/backend";
import { setAuthCookieOnResponse, type SessionUser } from "@/lib/auth";

type RegisterPayload = {
  name?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  password_confirmation?: string;
};

type RegisterBackendResponse = {
  user?: SessionUser;
  access_token?: string;
  token_type?: string;
  // Certains backends enveloppent tout dans `data`
  data?: {
    user?: SessionUser;
    token?: string;
    access_token?: string;
  };
  message?: string;
};

export async function POST(request: Request) {
  let payload: RegisterPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { message: "Corps de requête invalide." },
      { status: 400 },
    );
  }

  // Le backend attend `name`. Si le frontend envoie firstName/lastName
  // (legacy ou multi-étapes), on concatène.
  const name =
    payload.name ??
    [payload.firstName, payload.lastName].filter(Boolean).join(" ").trim();

  const { email, password, password_confirmation } = payload;

  if (!name || !email || !password) {
    return NextResponse.json(
      { message: "Nom, email et mot de passe sont requis." },
      { status: 400 },
    );
  }

  const result = await backendFetch<RegisterBackendResponse>("/auth/register", {
    method: "POST",
    body: {
      name,
      email,
      password,
      password_confirmation: password_confirmation ?? password,
    },
  });

  if (!result.ok) {
    return NextResponse.json(
      {
        message:
          result.data?.message ||
          result.error ||
          "Impossible de créer le compte.",
      },
      { status: result.status || 400 },
    );
  }

  const token =
    result.data?.access_token ||
    result.data?.data?.token ||
    result.data?.data?.access_token;

  const user = result.data?.user || result.data?.data?.user;

  if (!token || !user) {
    return NextResponse.json(
      { message: "Réponse backend inattendue." },
      { status: 502 },
    );
  }

  const res = NextResponse.json({ user });
  setAuthCookieOnResponse(res, token);
  return res;
}
