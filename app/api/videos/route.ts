import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    if (!token) {
        return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
    }

    try {
        const res = await fetch("https://mr-impots-back.onrender.com/api/videos", {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        });

        if (!res.ok) {
            const errorData = await res.json();
            return NextResponse.json({ error: errorData.message || "Failed to fetch videos" }, { status: res.status });
        }
        const data = await res.json();
        return NextResponse.json(data);
    }
    catch (error) {
        console.error("Error fetching videos:", error);
        return NextResponse.json({ error: "Failed to fetch videos" }, { status: 500 });
    }
}