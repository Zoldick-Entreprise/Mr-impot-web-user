import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const token = searchParams.get("token");

  const response = NextResponse.redirect("http://localhost:3000/dashboard");

  // 👉 stocker token
  response.cookies.set("token", token!, {
    httpOnly: true,
    secure: true,
    path: "/",
  });

  return response;
}