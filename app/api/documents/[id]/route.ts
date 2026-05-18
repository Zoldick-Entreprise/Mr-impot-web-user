import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  

  const cookieStore = await cookies(); // ✅ FIX
  const token = cookieStore.get("token")?.value;

  if (!token) {
    return NextResponse.json(
      { message: "Non authentifié" },
      { status: 401 }
    );
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/documents/${id}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    // 🔥 lire en texte d'abord
    const text = await response.text();

    let data;
    try {
      data = JSON.parse(text);
    } catch {
      data = null;
    }

    // ❌ erreur backend
    if (!response.ok) {
      console.error("BACKEND ERROR:", text);

      return NextResponse.json(
        {
          message: data?.message || "Erreur serveur backend",
          raw: text, // 👈 très utile pour debug
        },
        { status: response.status }
      );
    }

    // ✅ succès
    return NextResponse.json(data, { status: 200 });

  } catch (error) {
    console.error("SERVER ERROR:", error);

    return NextResponse.json(
      { message: "Erreur interne serveur" },
      { status: 500 }
    );
  }
}