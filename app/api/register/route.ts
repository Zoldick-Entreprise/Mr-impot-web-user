import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const res = await fetch("https://mr-impots-back.onrender.com/api/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = await res.json();

  const response = NextResponse.json(data);

    response.cookies.set("token", data.token, {
    httpOnly: true,   
    path: "/",
    expires: new Date(Date.now() + 60), // 1min
    sameSite: "lax",
    secure: false,
  });

  return response;
}