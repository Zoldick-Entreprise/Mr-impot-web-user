import { NextResponse } from "next/server";
import { backendFetch } from "@/lib/backend";
import { setAuthCookieOnResponse, type SessionUser } from "@/lib/auth";

type LoginPayload = {
  email?: string;
  password?: string;
};

type LoginBackendResponse = {
  message?: string;
  data?: {
    token: string;
    user: SessionUser;
  };
};

export async function POST(request: Request) {
  let payload: LoginPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { message: "Corps de requête invalide." },
      { status: 400 },
    );
  }

  const { email, password } = payload;

  if (!email || !password) {
    return NextResponse.json(
      { message: "Email et mot de passe requis." },
      { status: 400 },
    );
  }

  const result = await backendFetch<LoginBackendResponse>("/auth/login", {
    method: "POST",
    body: { email, password },
  });

  if (!result.ok || !result.data?.data?.token) {
    return NextResponse.json(
      {
        message:
          result.data?.message ||
          result.error ||
          "Identifiants invalides.",
      },
      { status: result.status || 401 },
    );
  }

  const { token, user } = result.data.data;

  const res = NextResponse.json({ user });
  setAuthCookieOnResponse(res, token);
  return res;
}
