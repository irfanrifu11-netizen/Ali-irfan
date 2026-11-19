"use client";

import { ClipboardList, RefreshCw, Wallet } from "lucide-react";
import { useRestaurant } from "@/components/restaurant/restaurant-provider";
import { StatusBadge } from "@/components/restaurant/status-badge";

export default function AdminOrdersPage() {
  const { orders, updateOrder } = useRestaurant();

  const pending = orders.filter((order) => order.status === "Pending").length;
  const approved = orders.filter((order) => order.status === "Approved").length;
  const paid = orders.filter((order) => order.paymentStatus === "Paid").length;
  const revenue = orders
    .filter((order) => order.paymentStatus === "Paid")
    .reduce((sum, order) => sum + order.total, 0);

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-secondary">
            Overview
          </p>
          <h1 className="mt-2 font-display text-4xl text-on-surface">Orders</h1>
          <p className="mt-2 text-sm text-on-surface-variant">
            Approve orders and update payment status.
          </p>
        </div>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="flex items-center gap-2 rounded-full border border-outline px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-on-surface-variant hover:border-primary hover:text-primary"
        >
          <RefreshCw size={14} />
          Refresh
        </button>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[
          { label: "Total orders", value: orders.length, icon: ClipboardList },
          { label: "Pending", value: pending, icon: ClipboardList },
          { label: "Approved", value: approved, icon: RefreshCw },
          { label: "Paid revenue", value: `₹${revenue}`, icon: Wallet },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-outline-variant bg-surface p-5"
          >
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-widest text-on-surface-variant">
                {stat.label}
              </p>
              <stat.icon size={17} className="text-secondary" />
            </div>
            <p className="mt-3 font-display text-3xl text-on-surface">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 overflow-hidden rounded-3xl border border-outline-variant bg-surface">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-outline-variant px-6 py-4">
          <h2 className="font-display text-xl text-on-surface">All orders</h2>
          <p className="text-xs text-on-surface-variant">
            {paid} paid · {orders.length - paid} unpaid
          </p>
        </div>

        {orders.length === 0 ? (
          <div className="px-6 py-20 text-center">
            <ClipboardList className="mx-auto mb-3 text-secondary" size={28} />
            <p className="font-display text-xl text-on-surface">No orders yet</p>
            <p className="mt-2 text-sm text-on-surface-variant">
              New orders will appear here when customers check out.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[860px] text-left text-sm">
              <thead className="bg-surface-container text-[11px] uppercase tracking-widest text-on-surface-variant">
                <tr>
                  <th className="px-6 py-3 font-semibold">Order</th>
                  <th className="px-6 py-3 font-semibold">Customer</th>
                  <th className="px-6 py-3 font-semibold">Items</th>
                  <th className="px-6 py-3 font-semibold">Total</th>
                  <th className="px-6 py-3 font-semibold">Status</th>
                  <th className="px-6 py-3 font-semibold">Payment</th>
                  <th className="px-6 py-3 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                {orders.map((order) => (
                  <tr key={order.id} className="hover:bg-surface-container-low">
                    <td className="px-6 py-4">
                      <p className="font-semibold text-on-surface">{order.id}</p>
                      <p className="mt-0.5 text-[11px] text-on-surface-variant">
                        {new Date(order.createdAt).toLocaleDateString()}
                      </p>
                      {order.row && (
                        <p className="mt-0.5 text-[10px] text-secondary">
                          Sheet row {order.row}
                        </p>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-medium text-on-surface">
                        {order.customerName}
                      </p>
                      <p className="mt-0.5 text-[11px] text-on-surface-variant">
                        {order.phone}
                      </p>
                    </td>
                    <td className="px-6 py-4 text-on-surface-variant">
                      {order.items
                        .map((item) => `${item.quantity}× ${item.name}`)
                        .join(", ")}
                      <p className="mt-1 text-[11px]">
                        {order.fulfilment} · {order.address || "—"}
                      </p>
                    </td>
                    <td className="px-6 py-4 font-semibold text-on-surface">
                      ₹{order.total}
                    </td>
                    <td className="px-6 py-4">
                      <StatusBadge value={order.status} />
                    </td>
                    <td className="px-6 py-4">
                      <StatusBadge value={order.paymentStatus} />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-2">
                        {order.status === "Pending" && (
                          <button
                            type="button"
                            onClick={() => updateOrder(order.id, { status: "Approved" })}
                            className="rounded-full bg-primary px-3 py-1.5 text-[11px] font-semibold text-on-primary hover:bg-brand-dark"
                          >
                            Approve
                          </button>
                        )}
                        {order.status === "Approved" && (
                          <button
                            type="button"
                            onClick={() => updateOrder(order.id, { status: "Rejected" })}
                            className="rounded-full border border-outline px-3 py-1.5 text-[11px] font-semibold text-on-surface-variant hover:border-error hover:text-error"
                          >
                            Reject
                          </button>
                        )}
                        <button
                          type="button"
                          onClick={() =>
                            updateOrder(order.id, {
                              paymentStatus:
                                order.paymentStatus === "Paid" ? "Unpaid" : "Paid",
                            })
                          }
                          className={`rounded-full px-3 py-1.5 text-[11px] font-semibold ${
                            order.paymentStatus === "Paid"
                              ? "border border-outline text-on-surface-variant hover:text-primary"
                              : "bg-emerald-700 text-white hover:bg-emerald-800"
                          }`}
                        >
                          {order.paymentStatus === "Paid"
                            ? "Mark unpaid"
                            : "Mark paid"}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <p className="mt-4 text-xs text-on-surface-variant">
        Approved and payment changes are sent to the Apps Script sheet when an
        order has a sheet row. Orders without a row are saved in this browser.
      </p>
    </div>
  );
}
