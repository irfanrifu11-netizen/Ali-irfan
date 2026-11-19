"use client";

import { Plus, UtensilsCrossed } from "lucide-react";
import { categories } from "@/lib/data";
import { useState } from "react";
import { useRestaurant } from "./restaurant-provider";

export function MenuGrid() {
  const { items, itemsLoading, addToCart } = useRestaurant();
  const [active, setActive] = useState<(typeof categories)[number]>("All");

  const visible =
    active === "All" ? items : items.filter((item) => item.category === active);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={`rounded-full border px-4 py-2 text-xs font-semibold transition-colors ${
              active === category
                ? "border-primary bg-primary text-on-primary"
                : "border-outline bg-surface text-on-surface-variant hover:border-primary hover:text-primary"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {itemsLoading ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="h-80 animate-pulse rounded-3xl bg-surface-container"
            />
          ))}
        </div>
      ) : visible.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-outline py-16 text-center">
          <UtensilsCrossed className="mx-auto mb-3 text-secondary" size={28} />
          <p className="font-display text-xl text-on-surface">
            No items in this category yet
          </p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((item) => (
            <article
              key={item.id}
              className="group overflow-hidden rounded-3xl border border-outline-variant bg-surface shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                className="relative h-48 bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.03]"
                style={{
                  backgroundImage: item.image
                    ? `url("${item.image}")`
                    : "linear-gradient(135deg, #fed7aa, #c2410c)",
                }}
              >
                <span className="absolute left-4 top-4 rounded-full bg-surface/95 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary">
                  {item.category}
                </span>
                <span
                  className={`absolute right-4 top-4 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-widest ${
                    item.stock > 0
                      ? "bg-white/90 text-emerald-800"
                      : "bg-white/90 text-red-700"
                  }`}
                >
                  {item.stock > 0 ? `${item.stock} left` : "Sold out"}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-xl leading-tight text-on-surface">
                    {item.name}
                  </h3>
                  <span className="whitespace-nowrap text-base font-bold text-primary">
                    ₹{item.price}
                  </span>
                </div>
                <p className="mt-2 line-clamp-2 min-h-10 text-sm text-on-surface-variant">
                  {item.description}
                </p>
                <button
                  type="button"
                  onClick={() => addToCart(item)}
                  disabled={item.stock <= 0}
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-surface-container py-2.5 text-xs font-semibold uppercase tracking-widest text-primary transition-colors hover:bg-primary hover:text-on-primary disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-surface-container disabled:hover:text-primary"
                >
                  <Plus size={14} />
                  Add to cart
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
