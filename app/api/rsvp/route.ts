import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // ✅ IST timestamp in DD/MM/YYYY + HH:mm:ss
    const timestamp = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbwmqaw4zj8LuR4BfPBNwsGOSJ4erSZbmeWr61xbiCTz4YibkEKIdkcN2x1Z4XhPrzgn/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...body,
          timestamp,
        }),
      }
    );

    const data = await response.json();

    return NextResponse.json(data);

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}