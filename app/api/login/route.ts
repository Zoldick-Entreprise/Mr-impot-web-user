import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const res = await fetch("https://mr-impots-back.onrender.com/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = await res.json();

  // 👉 stocker le token dans cookie sécurisé
  const response = NextResponse.json(data);

  response.cookies.set("token", data.data.token, {
    httpOnly: true,   
    path: "/",
    sameSite: "lax",
    secure: true,
    maxAge: 60 * 3, // 3 minutes (ajustez selon besoin)
  });

  return response;
}