import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbwmqaw4zj8LuR4BfPBNwsGOSJ4erSZbmeWr61xbiCTz4YibkEKIdkcN2x1Z4XhPrzgn/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...body,
          timestamp: new Date().toLocaleString(),
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