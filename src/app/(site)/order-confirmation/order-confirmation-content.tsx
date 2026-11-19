"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Clock3, LayoutList } from "lucide-react";
import { useRestaurant } from "@/components/restaurant/restaurant-provider";
import { StatusBadge } from "@/components/restaurant/status-badge";

export function OrderConfirmationContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const { orders } = useRestaurant();
  const order = orders.find((entry) => entry.id === id);

  if (!order) {
    return (
      <div className="mx-auto max-w-xl px-5 py-24 text-center">
        <LayoutList className="mx-auto mb-4 text-secondary" size={32} />
        <h1 className="font-display text-3xl text-on-surface">Order not found</h1>
        <p className="mt-3 text-sm text-on-surface-variant">
          This order is not saved in this browser. You can still track another
          order using its ID or phone number.
        </p>
        <Link
          href="/track-order"
          className="mt-6 inline-block rounded-full bg-primary px-6 py-3 text-xs font-semibold uppercase tracking-widest text-on-primary"
        >
          Track an order
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-5 py-20 sm:px-8">
      <div className="rounded-[2rem] border border-outline-variant bg-surface p-8 text-center shadow-sm sm:p-12">
        <span className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
          <CheckCircle2 size={34} />
        </span>
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-secondary">
          Order placed
        </p>
        <h1 className="mt-2 font-display text-4xl text-on-surface sm:text-5xl">
          Thank you, {order.customerName.split(" ")[0]}!
        </h1>
        <p className="mt-4 text-sm text-on-surface-variant">
          We&apos;ve received your order. Show this ID to the counter or use it
          to track your order.
        </p>

        <div className="mt-8 rounded-2xl bg-surface-container px-6 py-5">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-secondary">
            Order ID
          </p>
          <p className="mt-1 font-display text-3xl tracking-wide text-primary">
            {order.id}
          </p>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <StatusBadge value={order.status} />
          <StatusBadge value={order.paymentStatus} />
          <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1 text-[11px] font-semibold text-amber-700">
            <Clock3 size={12} />
            Awaiting approval
          </span>
        </div>

        <div className="mt-8 border-t border-outline-variant pt-6 text-left">
          {order.items.map((item) => (
            <div
              key={item.id}
              className="flex justify-between py-1.5 text-sm text-on-surface-variant"
            >
              <span>
                {item.quantity} × {item.name}
              </span>
              <span>₹{item.price * item.quantity}</span>
            </div>
          ))}
          <div className="mt-3 flex justify-between border-t border-outline-variant pt-3 text-base font-bold text-on-surface">
            <span>Total</span>
            <span>₹{order.total}</span>
          </div>
          <p className="mt-3 text-xs text-on-surface-variant">
            {order.fulfilment} · {order.address || "No pickup note"}
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href={`/track-order?order=${order.id}`}
            className="rounded-full bg-primary px-7 py-3 text-xs font-semibold uppercase tracking-widest text-on-primary"
          >
            Track this order
          </Link>
          <Link
            href="/#menu"
            className="rounded-full border border-outline px-7 py-3 text-xs font-semibold uppercase tracking-widest text-on-surface hover:border-primary hover:text-primary"
          >
            Back to menu
          </Link>
        </div>
      </div>
    </div>
  );
}
