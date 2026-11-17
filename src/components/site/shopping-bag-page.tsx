"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

const WHATSAPP_NUMBER = "919654738357";

type Item = {
  id: string;
  title: string;
  subtitle: string;
  material: string;
  price: number;
  qty: number;
  sizeLine: string;
  serial: string;
  badge: string;
  image: string;
  noteTitle?: string;
  noteBody?: string;
  noteIcon: string;
  noteBoxClass?: string;
  noteInitials?: string;
};

const initialItems: Item[] = [
  {
    id: "cart-item-1",
    title: "The Palazzo Loafer",
    subtitle: "Civil Master Last",
    material: "Warm Camel Tuscan Reverse Suede",
    price: 780,
    qty: 1,
    sizeLine: "EU 42 (US 9) · Standard E",
    serial: "N° 14 of 120 Crafted",
    badge: "Batch 04/2025",
    image:
      "https://lh3.googleusercontent.com/aida/ALJJyrBCkwLImSeQ-ClzfJJLondw1pZ_FL6M2rgE7h9-h735TMelzOyMpIWMJIyS1ZE3KfxaYftkfGpNQ6-t3tx8ZXnZUNLHqljBAgaTIckQZkOrhbUyTUfglKNUlWkTgEa0vvRxE4-o3vYTlAF09sYtIgjH5fYoDN3aBTuH70E66XQSicDSv9yuPCDeKkWxeCOM2iStLZcAicBqb_b_i57W7jezIAZI5momMvjii28G_Ns",
    noteTitle: "Bespoke Monogramming Included",
    noteBody: 'Gold leaf hot-foil initials applied to insole: "M.S."',
    noteIcon: "workspace_premium",
    noteBoxClass: "bg-secondary-container/40",
  },
  {
    id: "cart-item-2",
    title: "The Sculpted Pump",
    subtitle: "Architectural Salon Form",
    material: "Ivory Duchesse Silk Satin with Fluted Heel",
    price: 890,
    qty: 1,
    sizeLine: "EU 39 (US 8.5) · 85mm Heel",
    serial: "Edition 02 of 100",
    badge: "Atelier Edition",
    image:
      "https://lh3.googleusercontent.com/aida/ALJJyrAJIhQaCD3JcdwL1KXyGNv1M9-0WIpGBDQaWQmIe3fURCnXve18qjHscNdKdt5hPydxzR2rCBhPcSb5WX4tMc9AYidomNb2rxcZgpzMYA83k0PEkEaNL1r2Y4FNo_ikZxmlW0j7RbQYRLse8zwdkWw7sDvJj4CrwxdI5OU6gqPV55DkWiwvNUaHw6-v9SztErOMC7Wm_Owj0nwXhSB1teHRzmdWlxdD9FSxjSg-Rr-e",
    noteTitle: "Duchesse Satin Care Kit Included",
    noteBody:
      "Includes botanical fabric protector and specialized horsehair smoothing brush.",
    noteIcon: "diamond",
    noteBoxClass: "bg-surface-container",
  },
];

export function ShoppingBagPage() {
  const [items, setItems] = useState<Item[]>(initialItems);
  const [saved, setSaved] = useState<Record<string, boolean>>({});
  const [packagingCost, setPackagingCost] = useState(0);
  const [promoInput, setPromoInput] = useState("");
  const [promoMsg, setPromoMsg] = useState<{
    text: string;
    type: "success" | "error" | null;
  }>({ text: "", type: null });
  const [promoDiscount, setPromoDiscount] = useState(0);

  const subtotal = useMemo(
    () => items.reduce((sum, it) => sum + it.price * it.qty, 0),
    [items],
  );
  const total = Math.max(0, subtotal + packagingCost - promoDiscount);

  const updateQty = (id: string, delta: number) => {
    setItems((prev) =>
      prev.map((it) =>
        it.id === id
          ? { ...it, qty: Math.max(1, Math.min(5, it.qty + delta)) }
          : it,
      ),
    );
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((it) => it.id !== id));
  };

  const toggleSave = (id: string) => {
    setSaved((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const applyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    const val = promoInput.trim().toUpperCase();
    if (val === "ATELIER10" || val === "VIP" || val === "PARIS1984") {
      setPromoDiscount(150);
      setPromoMsg({
        text: "Privilege code accepted: $150 Atelier Credit Applied.",
        type: "success",
      });
    } else if (val.length > 0) {
      setPromoDiscount(50);
      setPromoMsg({
        text: "Salon Private Privilege Applied (-$50 USD).",
        type: "success",
      });
    } else {
      setPromoDiscount(0);
      setPromoMsg({
        text: "Please specify a registered salon invitation code.",
        type: "error",
      });
    }
  };

  const addComplementary = (name: string, price: number) => {
    setItems((prev) => [
      ...prev,
      {
        id: `extra-${Date.now()}`,
        title: name,
        subtitle: "Curated Addition",
        material: "Complementary atelier accessory",
        price,
        qty: 1,
        sizeLine: "One Size",
        serial: "Added to selection",
        badge: "Addition",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuC_1sK2AH0pl6C6ZpmzP0iiHbxXkIr_Qo6YbjnLi_22daoPCW05eJ3tkis3BGL6GdanuEkkw_wMjrirFjjypQU-9uOnxA97YSeyvrk5QuuKZggoUe2hggfXwpTaxzpmwDgajklMSIi7yadHVSZIpoYLS_gKOjYngl5O8ZVfgJjEyRNWOnmDRm7SwbyuzsYw2wC6L-SuhFa7r7bhxWiAMLbfjZUkE2pl-QD1Ve9sL1c",
        noteTitle: "Curated by Master Craftsman",
        noteBody: "Selected to complement your permanent shoe cabinet.",
        noteIcon: "stars",
        noteBoxClass: "bg-surface-container",
      },
    ]);
    alert(`The ${name} has been added to your Atelier selection.`);
  };

  const itemCount = items.reduce((n, it) => n + it.qty, 0);

  const proceedToWhatsApp = () => {
    const lines = [
      "Hello Maison Chaussurer Concierge,",
      "I would like to proceed with my bespoke order.",
      "",
      "Order summary:",
      ...items.map(
        (it) =>
          `• ${it.title} x${it.qty} — $${(it.price * it.qty).toLocaleString()} USD`,
      ),
      "",
      `Subtotal: $${subtotal.toLocaleString()} USD`,
      `Presentation: ${
        packagingCost > 0
          ? `Private Gift Marquetry Chest (+$${packagingCost} USD)`
          : "Atelier Heritage Box (Complimentary)"
      }`,
      ...(promoDiscount > 0
        ? [`Privilege credit: -$${promoDiscount} USD`]
        : []),
      `Total: $${total.toLocaleString()} USD`,
      "",
      "Name:",
      "Delivery address:",
    ];

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      lines.join("\n"),
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="w-full pt-20 bg-surface min-h-screen">
      <div className="flex flex-col w-full">
        <section className="max-w-7xl mx-auto w-full px-6 lg:px-12 pt-8 pb-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8">
            <div>
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="inline-block w-2 h-2 rounded-full bg-secondary"></span>
                <span className="font-label-sm text-label-sm uppercase tracking-[0.28em] text-secondary">
                  Step 01 of 03 · Review Order
                </span>
                <span className="text-outline-variant font-label-sm">/</span>
                <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-on-surface-variant font-medium">
                  Bag ({String(itemCount).padStart(2, "0")})
                </span>
              </div>
              <h1 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg text-primary tracking-tight">
                Your Curated Selection
              </h1>
              <p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-2xl">
                Handcrafted in Civitanova Marche. Complimentary worldwide express
                courier delivery and custom cedar shoe trees accompanied with
                each order.
              </p>
            </div>
            <div className="flex items-center gap-6 py-2 px-4 bg-surface-container-low rounded-none">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-secondary">
                  verified
                </span>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface">
                  Guaranteed Authenticity
                </span>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-secondary">
                  local_shipping
                </span>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface">
                  Insured Transit
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto w-full px-6 lg:px-12 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-8 flex flex-col space-y-12">
              <div className="space-y-8">
                {items.map((item) => (
                  <article
                    key={item.id}
                    className="p-6 sm:p-8 bg-surface-container-lowest transition-all hover:shadow-[0_20px_48px_-12px_rgba(23,23,23,0.04)]"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-8 items-start">
                      <div className="sm:col-span-5 aspect-[4/5] bg-surface-container-low overflow-hidden relative group">
                        <Image
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          src={item.image}
                          fill
                          sizes="(max-width: 640px) 100vw, 33vw"
                        />
                        <span className="absolute top-3 left-3 bg-surface/90 backdrop-blur-md px-2.5 py-1 font-label-sm text-[10px] tracking-widest uppercase text-primary font-semibold">
                          {item.badge}
                        </span>
                      </div>
                      <div className="sm:col-span-7 flex flex-col justify-between h-full min-w-0">
                        <div>
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-secondary block mb-1">
                                {item.subtitle}
                              </span>
                              <h2 className="font-headline-sm text-headline-sm text-primary tracking-tight">
                                {item.title}
                              </h2>
                              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                                {item.material}
                              </p>
                            </div>
                            <span className="font-headline-sm text-headline-sm text-primary font-medium shrink-0">
                              ${item.price}
                            </span>
                          </div>
                          <div className="mt-4 pt-4 bg-surface-container-low p-3.5 space-y-1.5">
                            <div className="flex items-center justify-between font-label-sm text-label-sm uppercase tracking-wider gap-2">
                              <span className="text-on-surface-variant">
                                Size Allocation:
                              </span>
                              <span className="font-semibold text-primary text-right">
                                {item.sizeLine}
                              </span>
                            </div>
                            <div className="flex items-center justify-between font-label-sm text-label-sm uppercase tracking-wider gap-2">
                              <span className="text-on-surface-variant">
                                Archive Serial:
                              </span>
                              <span className="text-secondary font-medium text-right">
                                {item.serial}
                              </span>
                            </div>
                          </div>
                          {item.noteTitle && (
                            <div
                              className={`mt-4 p-3 flex items-start gap-2.5 ${item.noteBoxClass ?? "bg-surface-container"}`}
                            >
                              <span className="material-symbols-outlined text-[18px] text-secondary mt-0.5">
                                {item.noteIcon}
                              </span>
                              <div className="min-w-0">
                                <p className="font-label-sm text-[11px] uppercase tracking-wider text-on-secondary-fixed font-semibold">
                                  {item.noteTitle}
                                </p>
                                <p className="font-body-sm text-body-sm text-on-surface mt-0.5">
                                  {item.noteBody}
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="mt-8 pt-6 flex flex-wrap items-center justify-between gap-4">
                          <div className="flex items-center bg-surface-container-low">
                            <button
                              aria-label="Decrease quantity"
                              className="w-10 h-10 flex items-center justify-center text-primary hover:bg-surface-container-high transition-colors"
                              onClick={() => updateQty(item.id, -1)}
                              type="button"
                            >
                              <span className="material-symbols-outlined text-[16px]">
                                remove
                              </span>
                            </button>
                            <span className="w-10 text-center font-label-md text-label-md font-semibold text-primary">
                              {item.qty}
                            </span>
                            <button
                              aria-label="Increase quantity"
                              className="w-10 h-10 flex items-center justify-center text-primary hover:bg-surface-container-high transition-colors"
                              onClick={() => updateQty(item.id, 1)}
                              type="button"
                            >
                              <span className="material-symbols-outlined text-[16px]">
                                add
                              </span>
                            </button>
                          </div>
                          <div className="flex items-center gap-6">
                            <button
                              className={`font-label-sm text-label-sm uppercase tracking-widest transition-colors flex items-center gap-1.5 ${
                                saved[item.id]
                                  ? "text-secondary"
                                  : "text-on-surface-variant hover:text-primary"
                              }`}
                              onClick={() => toggleSave(item.id)}
                              type="button"
                            >
                              <span className="material-symbols-outlined text-[16px]">
                                {saved[item.id] ? "check" : "favorite"}
                              </span>
                              <span>
                                {saved[item.id]
                                  ? "Saved in Wishlist"
                                  : "Save to Wishlist"}
                              </span>
                            </button>
                            <button
                              className="font-label-sm text-label-sm uppercase tracking-widest text-outline hover:text-error transition-colors flex items-center gap-1"
                              onClick={() => removeItem(item.id)}
                              type="button"
                            >
                              <span className="material-symbols-outlined text-[16px]">
                                delete
                              </span>
                              <span>Remove</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
                {items.length === 0 && (
                  <div className="p-10 bg-surface-container-lowest text-center text-on-surface-variant font-body-md">
                    Your curated selection is currently empty.
                  </div>
                )}
              </div>

              <div className="p-6 sm:p-8 bg-surface-container-lowest">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="font-label-sm text-label-sm uppercase tracking-[0.25em] text-secondary block mb-1">
                      Maison Presentation Artistry
                    </span>
                    <h3 className="font-headline-sm text-headline-sm text-primary">
                      Select Packaging Experience
                    </h3>
                  </div>
                  <span className="material-symbols-outlined text-[24px] text-secondary">
                    inventory_2
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="group relative p-5 bg-surface cursor-pointer flex flex-col justify-between transition-colors hover:bg-surface-container-low">
                    <input
                      checked={packagingCost === 0}
                      className="peer sr-only"
                      name="packaging_option"
                      onChange={() => setPackagingCost(0)}
                      type="radio"
                      value="0"
                    />
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span
                          className={`w-4 h-4 rounded-full flex items-center justify-center transition-all ${
                            packagingCost === 0
                              ? "bg-primary"
                              : "bg-surface-container-high"
                          }`}
                        >
                          <span
                            className={`w-2 h-2 rounded-full ${
                              packagingCost === 0 ? "bg-on-primary" : "bg-transparent"
                            }`}
                          ></span>
                        </span>
                        <span className="font-label-md text-label-md uppercase tracking-wider text-primary font-semibold">
                          Atelier Heritage Box
                        </span>
                      </div>
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
                        Included
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-4">
                      Signature unbleached linen dust covers, turned beechwood
                      shoe trees, and embossed textured archival shoebox with
                      embossed seal.
                    </p>
                    <div className="mt-4 pt-3 flex items-center gap-2 text-secondary font-label-sm text-[11px] uppercase tracking-wider">
                      <span className="material-symbols-outlined text-[16px]">
                        eco
                      </span>
                      <span>100% Recyclable Forest Stewardship Board</span>
                    </div>
                  </label>
                  <label className="group relative p-5 bg-surface cursor-pointer flex flex-col justify-between transition-colors hover:bg-surface-container-low">
                    <input
                      checked={packagingCost === 120}
                      className="peer sr-only"
                      name="packaging_option"
                      onChange={() => setPackagingCost(120)}
                      type="radio"
                      value="120"
                    />
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span
                          className={`w-4 h-4 rounded-full flex items-center justify-center transition-all ${
                            packagingCost === 120
                              ? "bg-primary"
                              : "bg-surface-container-high"
                          }`}
                        >
                          <span
                            className={`w-2 h-2 rounded-full ${
                              packagingCost === 120
                                ? "bg-on-primary"
                                : "bg-transparent"
                            }`}
                          ></span>
                        </span>
                        <span className="font-label-md text-label-md uppercase tracking-wider text-primary font-semibold">
                          Private Gift Marquetry Chest
                        </span>
                      </div>
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-semibold">
                        +$120 USD
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-4">
                      Handcrafted Italian solid walnut presentation chest lined
                      with velvet, brass hinges, and a personalized
                      hand-calligraphed wax-sealed parchment note.
                    </p>
                    <div className="mt-4 pt-3 flex items-center gap-2 text-secondary font-label-sm text-[11px] uppercase tracking-wider">
                      <span className="material-symbols-outlined text-[16px]">
                        stars
                      </span>
                      <span>Heirloom Keepsake Collector&apos;s Edition</span>
                    </div>
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  {
                    icon: "flight_takeoff",
                    title: "Express Carbon-Neutral Delivery",
                    desc: "Insured courier dispatch within 24h. Delivered directly to your residence or hotel concierge.",
                  },
                  {
                    icon: "build",
                    title: "Complimentary Maiden Service",
                    desc: "First re-soling and botanical leather conditioning completely covered by our Paris salon.",
                  },
                  {
                    icon: "published_with_changes",
                    title: "30-Day Discreet Exchange",
                    desc: "White-glove home collection for alternate sizing or bespoke adjustments without friction.",
                  },
                ].map((perk) => (
                  <div
                    key={perk.title}
                    className="p-5 bg-surface-container-low flex flex-col justify-between"
                  >
                    <span className="material-symbols-outlined text-[26px] text-primary mb-3">
                      {perk.icon}
                    </span>
                    <div>
                      <h4 className="font-label-md text-label-md uppercase tracking-wider text-primary font-semibold">
                        {perk.title}
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1.5">
                        {perk.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col space-y-8 sticky top-28">
              <div className="p-6 sm:p-8 bg-surface-container-lowest shadow-[0_20px_48px_-12px_rgba(23,23,23,0.05)]">
                <div className="pb-4 mb-6">
                  <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-secondary block mb-1">
                    Maison Order Accounting
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-primary">
                    Summary Breakdown
                  </h3>
                </div>
                <div className="space-y-4 font-body-sm text-body-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-on-surface-variant">
                      Footwear Subtotal ({itemCount} items)
                    </span>
                    <span className="text-primary font-medium">
                      ${subtotal.toLocaleString()} USD
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-on-surface-variant">
                      Presentation Upgrade
                    </span>
                    <span className="text-secondary font-medium">
                      {packagingCost > 0
                        ? `+$${packagingCost} USD (Walnut Chest)`
                        : "Complimentary"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="text-on-surface-variant">
                        Bespoke Courier Shipping
                      </span>
                      <span
                        className="material-symbols-outlined text-[14px] text-outline"
                        title="Complimentary insured courier delivery to over 140 countries"
                      >
                        info
                      </span>
                    </div>
                    <span className="text-secondary font-medium uppercase font-label-sm text-label-sm">
                      Free (Complimentary)
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-on-surface-variant">
                      Import Duties &amp; Taxes
                    </span>
                    <span className="text-primary font-medium">
                      Included (DDP)
                    </span>
                  </div>
                  {promoDiscount > 0 && (
                    <div className="flex items-center justify-between text-secondary">
                      <span>Privilege Credit</span>
                      <span>- ${promoDiscount} USD</span>
                    </div>
                  )}
                </div>
                <div className="mt-8 pt-6 bg-surface-container-low p-4 flex items-baseline justify-between">
                  <div>
                    <span className="font-label-md text-label-md uppercase tracking-widest text-primary font-bold block">
                      Total Amount
                    </span>
                    <span className="font-label-sm text-[11px] text-on-surface-variant">
                      All taxes &amp; bespoke duties settled
                    </span>
                  </div>
                  <span className="font-headline-md text-headline-md text-primary font-semibold tracking-tight">
                    ${total.toLocaleString()}
                  </span>
                </div>
                <div className="mt-6">
                  <form className="flex gap-2" onSubmit={applyPromo}>
                    <input
                      className="w-full bg-surface-container-low px-4 py-3 font-label-sm text-label-sm uppercase tracking-wider text-primary placeholder:text-outline focus:outline-none focus:bg-surface-container-high transition-colors"
                      placeholder="PRIVILEGE / SALON CODE"
                      type="text"
                      value={promoInput}
                      onChange={(e) => setPromoInput(e.target.value)}
                    />
                    <button
                      className="bg-primary text-on-primary hover:bg-surface-container-high hover:text-on-surface px-5 py-3 font-label-sm text-label-sm uppercase tracking-widest transition-all font-semibold shrink-0"
                      type="submit"
                    >
                      Apply
                    </button>
                  </form>
                  {promoMsg.type && (
                    <span
                      className={`font-label-sm text-[11px] mt-1.5 block ${
                        promoMsg.type === "success"
                          ? "text-secondary"
                          : "text-error"
                      }`}
                    >
                      {promoMsg.text}
                    </span>
                  )}
                </div>
                <div className="mt-8 space-y-3">
                  <button
                    className="w-full bg-primary hover:bg-surface-container-high text-on-primary hover:text-on-surface py-4 px-6 font-label-md text-label-md uppercase tracking-[0.18em] transition-all font-semibold flex items-center justify-center gap-3 group"
                    onClick={proceedToWhatsApp}
                    type="button"
                  >
                    <span>Proceed to Bespoke Checkout</span>
                    <span className="material-symbols-outlined text-[18px] transition-transform duration-300 group-hover:translate-x-1">
                      arrow_forward
                    </span>
                  </button>
                  <div className="pt-4 flex flex-col items-center gap-3">
                    <span className="font-label-sm text-[10px] uppercase tracking-[0.2em] text-outline">
                      Direct Encrypted Settlement Options
                    </span>
                    <div className="flex items-center justify-center gap-4 text-on-surface-variant flex-wrap">
                      {["APPLE PAY", "VISA", "MASTERCARD", "AMEX"].map((p) => (
                        <span
                          key={p}
                          className="font-label-sm font-semibold tracking-wider text-primary bg-surface-container px-2 py-1"
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 bg-surface-container-lowest shadow-[0_20px_48px_-12px_rgba(23,23,23,0.03)]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse"></div>
                  <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-secondary font-bold">
                    Salon Master Bottier Online
                  </span>
                </div>
                <h4 className="font-headline-sm text-headline-sm text-primary mb-2">
                  Private Client Concierge
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 leading-relaxed">
                  Need urgent salon fitting, bespoke last advice, or
                  personalized courier scheduling? Your dedicated Parisian
                  liaison is on standby.
                </p>
                <div className="space-y-3">
                  <a
                    className="w-full bg-surface-container-low hover:bg-surface-container-high text-primary p-3.5 flex items-center justify-between transition-colors group"
                    href="https://wa.me/919654738357"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-[20px] text-secondary">
                        chat
                      </span>
                      <div className="text-left">
                        <span className="font-label-sm text-[10px] uppercase tracking-wider text-secondary block font-semibold">
                          Instant VIP WhatsApp
                        </span>
                        <span className="font-label-md text-label-md font-semibold text-primary">
                          +91 9654738357
                        </span>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-[18px] text-outline group-hover:text-primary transition-colors">
                      open_in_new
                    </span>
                  </a>
                  <a
                    className="w-full bg-surface-container-low hover:bg-surface-container-high text-primary p-3.5 flex items-center justify-between transition-colors group"
                    href="mailto:irfanrifu11@gmail.com?subject=Private%20Client%20Order%20Inquiry%20-%20Maison%20Chaussurer"
                  >
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-[20px] text-secondary">
                        mail
                      </span>
                      <div className="text-left">
                        <span className="font-label-sm text-[10px] uppercase tracking-wider text-secondary block font-semibold">
                          Private Salon Desk
                        </span>
                        <span className="font-label-md text-label-md font-semibold text-primary truncate max-w-[190px] block">
                          irfanrifu11@gmail.com
                        </span>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-[18px] text-outline group-hover:text-primary transition-colors">
                      send
                    </span>
                  </a>
                </div>
                <div className="mt-5 pt-4 text-center">
                  <span className="font-label-sm text-[11px] text-outline tracking-wider uppercase">
                    Average Salon Desk Response: Under 12 Minutes
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-surface-container-low py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-[0.25em] text-secondary block mb-2">
                  Curated Additions
                </span>
                <h2 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg text-primary tracking-tight">
                  Complements for Your Pairs
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-xl">
                  Selected by our chief craftsman to prolong patina, preserve
                  structural shape, and enrich your permanent shoe cabinet.
                </p>
              </div>
              <a
                className="font-label-sm text-label-sm uppercase tracking-[0.16em] text-primary hover:text-secondary transition-colors pb-1 flex items-center gap-2 group"
                href="#"
              >
                <span>Explore All Atelier Accessories</span>
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Suede & Leather Protocol",
                  price: 120,
                  badge: "Essential Protocol",
                  desc: "Custom brass crepe brush, organic cedarwood waterproof elixir, and delicate chamois buffer specifically formulated for Tuscan split suede.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_1sK2AH0pl6C6ZpmzP0iiHbxXkIr_Qo6YbjnLi_22daoPCW05eJ3tkis3BGL6GdanuEkkw_wMjrirFjjypQU-9uOnxA97YSeyvrk5QuuKZggoUe2hggfXwpTaxzpmwDgajklMSIi7yadHVSZIpoYLS_gKOjYngl5O8ZVfgJjEyRNWOnmDRm7SwbyuzsYw2wC6L-SuhFa7r7bhxWiAMLbfjZUkE2pl-QD1Ve9sL1c",
                  key: "Suede Protocol",
                },
                {
                  title: "Aromatic Beechwood Trees",
                  price: 95,
                  badge: "Sculpted Form",
                  desc: "Hand-turned in Bologna to replicate Maison lasts precisely, actively drawing out internal moisture while maintaining pitch integrity.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqhBTmYWv_N-y9-ghvQ1WyIPWNf2wdaOw3eoQA-MJV59ipGPiJLotmMRAFX8j4dyeZI_axHjSJ9lqok2O-ynSh-5hnb7g86YRgrl2z6Cb0wPAcpYiA8qgCFKJKx01bPaAvc8iyqd6JpXMHMJFrkawTGmRsVEaQA8wcxDVVpB_tfdUIo8KF-bVgPi-rFvhFU9v-8MGfBGOqm_HEoi0aukXv5YcNZ-YeeAIYjzVwnKs",
                  key: "Beechwood Trees",
                },
                {
                  title: "The Duomo Monk Strap",
                  price: 960,
                  badge: "Salon Icon",
                  desc: "Hand-patinated deep espresso French calfskin with twin brushed gold buckles and Goodyear-welted leather channel sole.",
                  img: "https://lh3.googleusercontent.com/aida/ALJJyrBJFTlmOp1zhK1HwKOhOld1rTuNdfFA9G1KZioeim-P9BeM8vueGrCiperYd88LZG7Ovc8pBxeEjPIeWHJMJb0RsnzbBFue4_PcS4mpGMVUkntq0efWY4jnTq5qxLB6XEvBOoB7-T5wiFK6HkhM6LsGNa2j5msE6UWtaqeLg9osSfuYzBedA8R0eBNQn3dltGrbbmaCV1Y9gPtFORfrBpyXANLSv6u7d1KZH2vmnmEd",
                  key: "The Duomo Monk",
                },
              ].map((rec) => (
                <article
                  key={rec.title}
                  className="bg-surface-container-lowest flex flex-col justify-between group transition-all duration-300 hover:shadow-[0_20px_48px_-12px_rgba(23,23,23,0.06)]"
                >
                  <div>
                    <div className="aspect-[4/3] bg-surface-container-high overflow-hidden relative">
                      <Image
                        alt={rec.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        src={rec.img}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <span className="absolute top-3 left-3 bg-surface/90 backdrop-blur-md px-2.5 py-1 font-label-sm text-[10px] tracking-widest uppercase text-primary font-semibold">
                        {rec.badge}
                      </span>
                    </div>
                    <div className="p-6">
                      <div className="flex items-baseline justify-between mb-2 gap-2">
                        <h3 className="font-headline-sm text-headline-sm text-primary">
                          {rec.title}
                        </h3>
                        <span className="font-label-md text-label-md text-primary font-semibold shrink-0">
                          ${rec.price}
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        {rec.desc}
                      </p>
                    </div>
                  </div>
                  <div className="p-6 pt-0">
                    <button
                      className="w-full bg-surface-container-low hover:bg-primary text-primary hover:text-on-primary py-3 px-4 font-label-sm text-label-sm uppercase tracking-widest transition-all font-semibold flex items-center justify-center gap-2"
                      onClick={() => addComplementary(rec.key, rec.price)}
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[16px]">
                        add
                      </span>
                      <span>Add to Bag</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
