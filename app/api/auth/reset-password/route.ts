import { NextResponse } from "next/server";
import { backendFetch } from "@/lib/backend";

type ResetPayload = {
  token?: string;
  email?: string;
  password?: string;
  password_confirmation?: string;
};

export async function POST(request: Request) {
  let payload: ResetPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { message: "Corps de requête invalide." },
      { status: 400 },
    );
  }

  const { token, email, password, password_confirmation } = payload;

  if (!token || !email || !password) {
    return NextResponse.json(
      { message: "Token, email et mot de passe sont requis." },
      { status: 400 },
    );
  }

  const result = await backendFetch<{ status?: string; message?: string }>(
    "/auth/reset-password",
    {
      method: "POST",
      body: {
        token,
        email,
        password,
        password_confirmation: password_confirmation ?? password,
      },
    },
  );

  if (!result.ok) {
    return NextResponse.json(
      {
        message:
          result.data?.message ||
          result.error ||
          "Impossible de réinitialiser le mot de passe.",
      },
      { status: result.status || 400 },
    );
  }

  return NextResponse.json({
    status: result.data?.status || "ok",
    message: result.data?.message || "Mot de passe réinitialisé avec succès.",
  });
}
