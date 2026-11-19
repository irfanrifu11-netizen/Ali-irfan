import Link from "next/link";
import { ArrowRight, CalendarDays, Clock3, MapPin, Star } from "lucide-react";
import { MenuGrid } from "@/components/restaurant/menu-grid";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-outline-variant bg-surface">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-outline bg-surface-container px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-secondary">
              <Star size={13} className="fill-secondary" />
              Loved by the neighbourhood
            </div>
            <h1 className="font-display text-[2.8rem] leading-[1.05] tracking-tight text-on-surface sm:text-6xl lg:text-7xl">
              Good food,
              <br />
              <span className="italic text-primary">made fresh.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-on-surface-variant sm:text-lg">
              From our grill to your table. Explore the menu, place an order in
              minutes, or book a table for the people you love.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="#menu"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-on-primary transition-colors hover:bg-brand-dark"
              >
                Order online
                <ArrowRight size={15} />
              </Link>
              <Link
                href="/reserve"
                className="inline-flex items-center gap-2 rounded-full border border-outline bg-surface px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-on-surface transition-colors hover:border-primary hover:text-primary"
              >
                <CalendarDays size={15} />
                Reserve a table
              </Link>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-on-surface-variant">
              <span className="flex items-center gap-2">
                <Clock3 size={16} className="text-secondary" />
                Open daily 11am – 11pm
              </span>
              <span className="flex items-center gap-2">
                <MapPin size={16} className="text-secondary" />
                Pickup &amp; delivery
              </span>
            </div>
          </div>

          <div className="relative">
            <div
              className="aspect-[4/3] rounded-[2rem] bg-cover bg-center shadow-2xl"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85')",
              }}
            />
            <div className="absolute -bottom-5 left-5 rounded-2xl border border-outline-variant bg-surface px-5 py-4 shadow-xl sm:left-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-secondary">
                Today&apos;s special
              </p>
              <p className="mt-1 font-display text-xl text-on-surface">
                Charcoal-grilled favourites
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 sm:px-8">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-secondary">
              The menu
            </p>
            <h2 className="mt-2 font-display text-4xl text-on-surface sm:text-5xl">
              What are you craving?
            </h2>
          </div>
          <p className="max-w-sm text-sm text-on-surface-variant">
            Made to order with the freshest ingredients. Add your favourites to
            the cart and check out when you&apos;re ready.
          </p>
        </div>
        <MenuGrid />
      </section>

      <section className="border-y border-outline-variant bg-surface-container-low">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 md:grid-cols-3">
          {[
            {
              step: "01",
              title: "Choose your food",
              text: "Browse the menu and add as many items as you like.",
            },
            {
              step: "02",
              title: "Checkout securely",
              text: "Pick pickup or delivery and tell us how to reach you.",
            },
            {
              step: "03",
              title: "Track your order",
              text: "Follow approval and payment status from any device.",
            },
          ].map((item) => (
            <div key={item.step}>
              <p className="font-display text-4xl text-primary/25">{item.step}</p>
              <h3 className="mt-3 font-display text-2xl text-on-surface">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-primary px-7 py-14 text-on-primary sm:px-14">
          <div className="relative z-10 max-w-xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-on-primary/70">
              Dining in?
            </p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">
              Save your seat.
            </h2>
            <p className="mt-4 text-sm text-on-primary/80 sm:text-base">
              Reservations are open for lunch and dinner. Tell us when you&apos;re
              coming and we&apos;ll take care of the rest.
            </p>
            <Link
              href="/reserve"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-surface px-7 py-3 text-xs font-semibold uppercase tracking-widest text-primary"
            >
              Book a table
              <ArrowRight size={15} />
            </Link>
          </div>
          <div
            className="absolute inset-y-0 right-0 hidden w-1/2 bg-cover bg-center opacity-20 md:block"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80')",
            }}
          />
        </div>
      </section>
    </>
  );
}
