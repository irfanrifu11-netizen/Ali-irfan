"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { Check, Circle, Search } from "lucide-react";
import { useRestaurant } from "@/components/restaurant/restaurant-provider";
import { StatusBadge } from "@/components/restaurant/status-badge";
import type { Order } from "@/lib/types";

export function TrackOrderContent() {
  const searchParams = useSearchParams();
  const { orders } = useRestaurant();
  const initialQuery = searchParams.get("order") ?? "";
  const [query, setQuery] = useState(initialQuery);
  const [activeQuery, setActiveQuery] = useState(initialQuery);

  const results = activeQuery
    ? orders.filter((order) => {
        const value = activeQuery.toLowerCase();
        return (
          order.id.toLowerCase().includes(value) ||
          order.phone.toLowerCase().includes(value)
        );
      })
    : [];
  const searched = activeQuery.length > 0;

  const search = (event: React.FormEvent) => {
    event.preventDefault();
    setActiveQuery(query.trim());
  };

  const steps = ["Pending", "Approved", "Paid"];

  const currentStep = (order: Order) => {
    if (order.paymentStatus.toLowerCase() === "paid") return 2;
    if (order.status.toLowerCase() === "approved") return 1;
    if (order.status.toLowerCase() === "rejected") return -1;
    return 0;
  };

  return (
    <div className="mx-auto max-w-4xl px-5 py-14 sm:px-8">
      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-secondary">
        Order status
      </p>
      <h1 className="mt-2 font-display text-4xl text-on-surface sm:text-5xl">
        Track your order
      </h1>
      <p className="mt-3 max-w-xl text-sm text-on-surface-variant">
        Enter the order ID from your confirmation screen, or the phone number
        you used at checkout.
      </p>

      <form
        onSubmit={search}
        className="mt-8 flex flex-col gap-3 rounded-2xl border border-outline-variant bg-surface p-4 sm:flex-row"
      >
        <div className="flex flex-1 items-center gap-3 rounded-xl bg-surface-container px-4">
          <Search size={17} className="text-secondary" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Order ID or phone number"
            className="w-full bg-transparent py-3 text-sm outline-none placeholder:text-on-surface-variant/60"
          />
        </div>
        <button
          type="submit"
          className="rounded-xl bg-primary px-7 py-3 text-xs font-semibold uppercase tracking-widest text-on-primary hover:bg-brand-dark"
        >
          Search
        </button>
      </form>

      <div className="mt-8 space-y-5">
        {searched && results.length === 0 && (
          <div className="rounded-2xl border border-dashed border-outline py-14 text-center">
            <p className="font-display text-xl text-on-surface">
              No orders found
            </p>
            <p className="mt-2 text-sm text-on-surface-variant">
              Orders placed on this browser can be tracked here.
            </p>
            <Link
              href="/#menu"
              className="mt-5 inline-block text-xs font-semibold uppercase tracking-widest text-primary"
            >
              Browse menu
            </Link>
          </div>
        )}

        {results.map((order) => {
          const active = currentStep(order);
          return (
            <article
              key={order.id}
              className="rounded-3xl border border-outline-variant bg-surface p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-secondary">
                    {order.id}
                  </p>
                  <h2 className="mt-1 font-display text-2xl text-on-surface">
                    {order.customerName}
                  </h2>
                  <p className="mt-1 text-xs text-on-surface-variant">
                    {new Date(order.createdAt).toLocaleString()} · {order.fulfilment}
                  </p>
                </div>
                <div className="flex gap-2">
                  <StatusBadge value={order.status} />
                  <StatusBadge value={order.paymentStatus} />
                </div>
              </div>

              {active >= 0 ? (
                <div className="mt-8 flex items-center">
                  {steps.map((step, index) => (
                    <div key={step} className="flex flex-1 items-center last:flex-none">
                      <div className="flex flex-col items-center gap-2">
                        <span
                          className={`flex h-9 w-9 items-center justify-center rounded-full border-2 text-xs font-bold ${
                            index <= active
                              ? "border-primary bg-primary text-on-primary"
                              : "border-outline bg-surface text-on-surface-variant"
                          }`}
                        >
                          {index <= active ? <Check size={16} /> : <Circle size={8} />}
                        </span>
                        <span className="text-[11px] font-semibold text-on-surface-variant">
                          {step}
                        </span>
                      </div>
                      {index < steps.length - 1 && (
                        <div
                          className={`mx-2 mb-5 h-0.5 flex-1 ${
                            index < active ? "bg-primary" : "bg-outline"
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="mt-6 rounded-xl bg-red-50 px-4 py-3 text-sm text-error">
                  This order was rejected. Please contact us for details.
                </p>
              )}

              <div className="mt-7 border-t border-outline-variant pt-5">
                {order.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between py-1 text-sm text-on-surface-variant"
                  >
                    <span>
                      {item.quantity} × {item.name}
                    </span>
                    <span>₹{item.price * item.quantity}</span>
                  </div>
                ))}
                <div className="mt-3 flex justify-between text-base font-bold text-on-surface">
                  <span>Total</span>
                  <span>₹{order.total}</span>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
