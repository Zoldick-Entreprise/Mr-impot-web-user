import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const token = req.headers.get("cookie")?.split("token=")[1];

  await fetch("https://mr-impots-back.onrender.com/api/auth/logout", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
    const response = NextResponse.json({ message: "Déconnexion réussie" });
    
  response.cookies.set("token", "", {
    expires: new Date(0),
    path: "/",
  });

  return response;
}