import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  // 🔐 1. Récupérer le token
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    return NextResponse.json(
      { message: "Non authentifié" },
      { status: 401 }
    );
  }

  try {
    // 🔗 2. Récupérer les query params (pagination + filtres)
    const queryString = request.nextUrl.searchParams.toString();

    const url = queryString
      ? `https://mr-impots-back.onrender.com/api/documents?${queryString}`
      : `https://mr-impots-back.onrender.com/api/documents`;

    // 📡 3. Appel backend Laravel
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store", // 🔥 évite cache (important pour données dynamiques)
    });

    // ❌ 4. Si erreur backend
    if (!response.ok) {
      const errorData = await response.json().catch(() => null);

      return NextResponse.json(
        {
          message: errorData?.message || "Erreur serveur backend",
          errors: errorData?.errors || null,
        },
        { status: response.status }
      );
    }

    // ✅ 5. Succès
    const data = await response.json();

    return NextResponse.json(data, { status: 200 });

  } catch (error) {
   
    return NextResponse.json(
      { message: "Erreur interne serveur" },
      { status: 500 }
    );
  }
}