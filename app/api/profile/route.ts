import { NextResponse, type NextRequest } from "next/server";
import { backendFetch } from "@/lib/backend";
import { getAuthToken, type SessionUser } from "@/lib/auth";

/**
 * GET /api/profile
 * Alias pratique pour récupérer l'utilisateur courant
 * (équivalent à /api/auth/me).
 */
export async function GET() {
  const token = await getAuthToken();
  if (!token) {
    return NextResponse.json({ message: "Non authentifié." }, { status: 401 });
  }

  const result = await backendFetch<{ data?: SessionUser }>("/profile", {
    token,
  });

  if (!result.ok || !result.data?.data) {
    return NextResponse.json(
      { message: result.error ?? "Impossible de charger le profil." },
      { status: result.status || 500 },
    );
  }

  return NextResponse.json({ user: result.data.data });
}

/**
 * PATCH /api/profile
 *
 * Met à jour le profil de l'utilisateur connecté.
 * Forwarde le FormData reçu du navigateur directement au backend Laravel
 * (champs supportés : name, preferred_language, avatar).
 *
 * Le backend attend multipart/form-data pour permettre l'upload de l'avatar.
 */
export async function PATCH(req: NextRequest) {
  const token = await getAuthToken();
  if (!token) {
    return NextResponse.json({ message: "Non authentifié." }, { status: 401 });
  }

  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return NextResponse.json(
      { message: "Requête invalide (multipart/form-data attendu)." },
      { status: 400 },
    );
  }

  // Laravel n'accepte pas toujours PATCH en multipart ; on utilise
  // l'astuce standard _method=PATCH sur une requête POST.
  form.append("_method", "PATCH");

  const result = await backendFetch<{
    data?: SessionUser;
    message?: string;
    errors?: Record<string, string[]>;
  }>("/profile", {
    method: "POST",
    body: form,
    token,
  });

  if (!result.ok) {
    return NextResponse.json(
      {
        message: result.error ?? "Impossible de mettre à jour le profil.",
        errors: (result.data as { errors?: Record<string, string[]> } | null)
          ?.errors,
      },
      { status: result.status || 500 },
    );
  }

  const user = (result.data as { data?: SessionUser } | null)?.data ?? null;
  return NextResponse.json({ user });
}
