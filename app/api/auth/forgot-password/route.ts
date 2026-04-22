import { NextResponse } from "next/server";
import { backendFetch } from "@/lib/backend";

type ForgotPayload = { email?: string };

export async function POST(request: Request) {
  let payload: ForgotPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { message: "Corps de requête invalide." },
      { status: 400 },
    );
  }

  if (!payload.email) {
    return NextResponse.json(
      { message: "Email requis." },
      { status: 400 },
    );
  }

  const result = await backendFetch<{ status?: string; message?: string }>(
    "/auth/forgot-password",
    {
      method: "POST",
      body: { email: payload.email },
    },
  );

  if (!result.ok) {
    return NextResponse.json(
      {
        message:
          result.data?.message ||
          result.error ||
          "Impossible d'envoyer l'email de réinitialisation.",
      },
      { status: result.status || 400 },
    );
  }

  return NextResponse.json({
    status: result.data?.status || "ok",
    message:
      result.data?.message ||
      "Si cet email existe, un lien de réinitialisation a été envoyé.",
  });
}
