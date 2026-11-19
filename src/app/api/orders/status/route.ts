import { NextResponse } from "next/server";
import { updateRemoteOrder } from "@/lib/apps-script";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  let body: { row?: number; status?: string; paymentStatus?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request body." },
      { status: 400 },
    );
  }

  const row = Number(body.row);
  if (!Number.isInteger(row) || row < 2) {
    return NextResponse.json(
      { success: false, message: "A valid sheet row is required." },
      { status: 400 },
    );
  }

  if (body.status) {
    return NextResponse.json(
      await updateRemoteOrder("status", row, String(body.status)),
    );
  }
  if (body.paymentStatus) {
    return NextResponse.json(
      await updateRemoteOrder("paymentStatus", row, String(body.paymentStatus)),
    );
  }

  return NextResponse.json(
    { success: false, message: "No status supplied." },
    { status: 400 },
  );
}
