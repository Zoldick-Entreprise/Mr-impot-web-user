import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  // Lire le token du cookie
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  if (!token) {
    return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
  }

  // Appeler l'API Laravel pour récupérer le profil
  const res = await fetch("https://mr-impots-back.onrender.com/api/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
    cache: "no-store",
  });

  let data = null;
  try {
    data = await res.json();
  } catch (e) {
    return NextResponse.json({ error: "Réponse du serveur invalide" }, { status: 500 });
  }

  if (!res.ok) {
    return NextResponse.json(data || { error: "Erreur lors de la récupération du profil" }, { status: res.status });
  }

  return NextResponse.json(data);
}