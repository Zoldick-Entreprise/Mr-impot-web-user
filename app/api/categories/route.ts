import { NextResponse } from "next/server";


export async function GET(){
    try {
        const response = await fetch(`https://mr-impots-back.onrender.com/api/categories`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
        });
        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch categories" }, { status: 500 });
    }
}