import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("https://mr-impots-back.onrender.com/api/auth/google/redirect");
  const data = await res.json();

  // 🔥 redirection côté navigateur
  return NextResponse.json(data);
}