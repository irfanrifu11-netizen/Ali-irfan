import { NextResponse } from "next/server";
import { applyRemoteCoupon } from "@/lib/apps-script";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  let body: { code?: unknown; total?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request body." },
      { status: 400 },
    );
  }

  const code = String(body.code ?? "").trim().toUpperCase();
  const total = Number(body.total);

  if (!code || !Number.isFinite(total) || total <= 0) {
    return NextResponse.json(
      { success: false, message: "Enter a coupon code." },
      { status: 400 },
    );
  }

  const result = await applyRemoteCoupon(code, total);
  return NextResponse.json(result);
}
