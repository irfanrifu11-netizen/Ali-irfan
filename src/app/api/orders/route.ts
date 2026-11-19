import { NextResponse } from "next/server";
import { addRemoteOrder } from "@/lib/apps-script";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request body." },
      { status: 400 },
    );
  }

  const result = await addRemoteOrder(body);
  return NextResponse.json(result);
}
