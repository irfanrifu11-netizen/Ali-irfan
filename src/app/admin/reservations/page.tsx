"use client";

import { CalendarDays } from "lucide-react";
import { useRestaurant } from "@/components/restaurant/restaurant-provider";
import { StatusBadge } from "@/components/restaurant/status-badge";

export default function AdminReservationsPage() {
  const { reservations, updateReservation } = useRestaurant();

  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-secondary">
        Dining room
      </p>
      <h1 className="mt-2 font-display text-4xl text-on-surface">
        Reservations
      </h1>
      <p className="mt-2 text-sm text-on-surface-variant">
        Table requests from the website. Confirm each request from here.
      </p>

      <div className="mt-8 overflow-hidden rounded-3xl border border-outline-variant bg-surface">
        {reservations.length === 0 ? (
          <div className="px-6 py-20 text-center">
            <CalendarDays className="mx-auto mb-3 text-secondary" size={28} />
            <p className="font-display text-xl text-on-surface">
              No reservations yet
            </p>
            <p className="mt-2 text-sm text-on-surface-variant">
              Requests will appear here when guests book a table.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[820px] text-left text-sm">
              <thead className="bg-surface-container text-[11px] uppercase tracking-widest text-on-surface-variant">
                <tr>
                  <th className="px-6 py-3 font-semibold">Request</th>
                  <th className="px-6 py-3 font-semibold">Guest</th>
                  <th className="px-6 py-3 font-semibold">When</th>
                  <th className="px-6 py-3 font-semibold">Guests</th>
                  <th className="px-6 py-3 font-semibold">Notes</th>
                  <th className="px-6 py-3 font-semibold">Status</th>
                  <th className="px-6 py-3 font-semibold">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                {reservations.map((reservation) => (
                  <tr key={reservation.id}>
                    <td className="px-6 py-4">
                      <p className="font-semibold text-on-surface">
                        {reservation.id}
                      </p>
                      <p className="mt-0.5 text-[11px] text-on-surface-variant">
                        {new Date(reservation.createdAt).toLocaleDateString()}
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-medium text-on-surface">
                        {reservation.name}
                      </p>
                      <p className="mt-0.5 text-[11px] text-on-surface-variant">
                        {reservation.phone}
                      </p>
                    </td>
                    <td className="px-6 py-4 text-on-surface-variant">
                      <p>{reservation.date}</p>
                      <p className="text-[11px]">{reservation.time}</p>
                    </td>
                    <td className="px-6 py-4 font-semibold text-on-surface">
                      {reservation.guests}
                    </td>
                    <td className="px-6 py-4 text-on-surface-variant">
                      {reservation.notes || "—"}
                    </td>
                    <td className="px-6 py-4">
                      <StatusBadge value={reservation.status} />
                    </td>
                    <td className="px-6 py-4">
                      {reservation.status === "Pending" ? (
                        <button
                          type="button"
                          onClick={() =>
                            updateReservation(reservation.id, "Confirmed")
                          }
                          className="rounded-full bg-primary px-3 py-1.5 text-[11px] font-semibold text-on-primary hover:bg-brand-dark"
                        >
                          Confirm
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() =>
                            updateReservation(reservation.id, "Pending")
                          }
                          className="rounded-full border border-outline px-3 py-1.5 text-[11px] font-semibold text-on-surface-variant hover:text-primary"
                        >
                          Reopen
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
