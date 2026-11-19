"use client";

import { useState } from "react";
import { CalendarCheck2, CheckCircle2, Users } from "lucide-react";
import { useRestaurant } from "@/components/restaurant/restaurant-provider";

export default function ReservePage() {
  const { addReservation } = useRestaurant();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("19:00");
  const [guests, setGuests] = useState(2);
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");
  const [confirmedId, setConfirmedId] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!name.trim() || !phone.trim() || !date) {
      setError("Please enter your name, phone number and date.");
      return;
    }
    const reservation = addReservation({
      name: name.trim(),
      phone: phone.trim(),
      date,
      time,
      guests,
      notes: notes.trim(),
    });
    setConfirmedId(reservation.id);
    setError("");
  };

  const inputClass =
    "w-full rounded-xl border border-outline bg-surface px-4 py-3 text-sm outline-none transition-colors focus:border-primary";

  return (
    <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1fr]">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-secondary">
            Join us
          </p>
          <h1 className="mt-2 font-display text-4xl leading-tight text-on-surface sm:text-5xl">
            Reserve a table
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-on-surface-variant">
            Pick your date and time, and we&apos;ll have a table ready. For large
            groups or special requests, give us a call and we&apos;ll sort it out.
          </p>
          <div
            className="mt-8 aspect-[4/3] rounded-3xl bg-cover bg-center shadow-lg"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1000&q=80')",
            }}
          />
        </div>

        <div className="rounded-3xl border border-outline-variant bg-surface p-6 shadow-sm sm:p-8">
          {confirmedId ? (
            <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
              <span className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                <CheckCircle2 size={34} />
              </span>
              <h2 className="font-display text-3xl text-on-surface">
                Request received
              </h2>
              <p className="mt-3 max-w-sm text-sm text-on-surface-variant">
                Thanks {name.split(" ")[0]}. The team will confirm your table
                shortly.
              </p>
              <p className="mt-6 rounded-xl bg-surface-container px-5 py-3 text-xs font-semibold uppercase tracking-widest text-primary">
                {confirmedId}
              </p>
              <button
                type="button"
                onClick={() => setConfirmedId("")}
                className="mt-7 text-xs font-semibold uppercase tracking-widest text-secondary hover:text-primary"
              >
                Make another reservation
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold text-on-surface-variant">
                    Full name
                  </span>
                  <input
                    className={inputClass}
                    value={name}
                    onChange={(event) => {
                      setName(event.target.value);
                      setError("");
                    }}
                    placeholder="Your name"
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold text-on-surface-variant">
                    Phone number
                  </span>
                  <input
                    className={inputClass}
                    value={phone}
                    onChange={(event) => {
                      setPhone(event.target.value);
                      setError("");
                    }}
                    placeholder="9876543210"
                    inputMode="tel"
                  />
                </label>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold text-on-surface-variant">
                    Date
                  </span>
                  <input
                    type="date"
                    className={inputClass}
                    value={date}
                    onChange={(event) => {
                      setDate(event.target.value);
                      setError("");
                    }}
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold text-on-surface-variant">
                    Time
                  </span>
                  <input
                    type="time"
                    className={inputClass}
                    value={time}
                    onChange={(event) => setTime(event.target.value)}
                  />
                </label>
              </div>
              <label className="block">
                <span className="mb-1.5 flex items-center gap-2 text-xs font-semibold text-on-surface-variant">
                  <Users size={14} />
                  Guests
                </span>
                <select
                  className={inputClass}
                  value={guests}
                  onChange={(event) => setGuests(Number(event.target.value))}
                >
                  {Array.from({ length: 10 }).map((_, index) => (
                    <option key={index + 1} value={index + 1}>
                      {index + 1} {index === 0 ? "guest" : "guests"}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block">
                <span className="mb-1.5 block text-xs font-semibold text-on-surface-variant">
                  Special requests (optional)
                </span>
                <textarea
                  className={`${inputClass} min-h-24 resize-none`}
                  value={notes}
                  onChange={(event) => setNotes(event.target.value)}
                  placeholder="Birthday, high chair, quiet corner..."
                />
              </label>
              {error && <p className="text-xs text-error">{error}</p>}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-on-primary transition-colors hover:bg-brand-dark"
              >
                <CalendarCheck2 size={16} />
                Confirm reservation
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
