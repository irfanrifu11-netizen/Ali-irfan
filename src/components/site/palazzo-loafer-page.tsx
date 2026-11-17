"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const thumbImages = [
  {
    key: "thumb1",
    label: "01 / Profile",
    alt: "Artisanal Tuscan suede loafer profile close-up",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMq0YSdLHSj9ekVix5anvjRQuZaa-4WeBpXxu3H0ALSZFi5rob9QoH2h0enn_sn4zYdL5Qbs-HwdBAzghZQqxu9kRZo7_OuD-ttrTYlpTJJoVBsKdR6TTdnRmyxb5j7xO_vZSYkl4MPQVo5eiHl7rZT0o0o4UbdP4pO1uoLg61QlMelKx6-OIFPbxZKbxheXOBb4KNRO_OksN-PwIOMy3d1kTaotEaYj3fBo2-9b4",
  },
  {
    key: "thumb2",
    label: "02 / Atelier",
    alt: "Atelier workshop still life and shoe lasts",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCMVdImmshKPzCEe7SzujQTNFSmYRG0A635n8ntTiWGynOvGi2gQE23WKUuxAWKc8EPV4fLeM5_3Hqju1MB7eHOUu_CnYImksSf6eUjBOqWJMpK9PgIM7ghgsQ1X_P5M_Utui0BX0z46Q4TXicHKQBCrtNqFcC2UtMbchXqHI2tET6F7HXX0YA1kzBZSIpxqLmS4x2RxTnQJZDS_GxFHuugsRnAXgf6XNGSdKpA9no",
  },
  {
    key: "thumb3",
    label: "03 / Sole Craft",
    alt: "Sole detail with closed channel welt",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAIuPvRmN6csyRPky1MVAgc0f1DqGDohUdw1Km65nWHP7O6GXXbM6ZJaPk19vsFR4jIl_ZMEXwUQxexFv6BA72ymchincyH9HmCwYeBG9j0YgeqY3pHQs2RqdmwNBaRET4oY3CSLd92oOZGyitLZ9KPmnNiHU8wSvNxiH6Yn-8uvqqH6ZQKXC08HUjla8YXmSI6lNkOL-xj2bXl9sd-rIGvUaoc-VTrcBeEeh4SYPg",
  },
];

const heroSrc =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD7MM4j1QRp-8f_Y_sKMXTHfGgOlM4eCPZDT_z13iGXo_fXU0LK2LMQ8_43r0N6qN6dLIFRxWNjp6ppSoMAg1rF92BYE05R5hRs0WyBg43heWdkEAocb7hWJ7lYonjYm42kW-mdWggggxoiR390Z7qT-V6fYazJo09UMFTZFxwLdlzepK1KutYUpws-wbd6BQNTcFEkzjLh-tDNx6j_fz6oRmjCvOWWL75cfFEy71I";

const colors = [
  { name: "Warm Camel Tuscan Suede", hex: "#C29B6C" },
  { name: "Espresso Boxcalf", hex: "#3B291D" },
  { name: "Nero Polished Calf", hex: "#1A1A1A" },
];

const sizes = [
  { eu: "39", us: "US 6.5" },
  { eu: "40", us: "US 7.5" },
  { eu: "41", us: "US 8.5" },
  { eu: "42", us: "US 9.5", default: true },
  { eu: "43", us: "US 10.5" },
  { eu: "44", us: "US 11.5" },
  { eu: "45", us: "US 12.0" },
  { eu: "46", us: "Waitlist", disabled: true },
];

export function PalazzoLoaferPage() {
  const [activeThumb, setActiveThumb] = useState(0);
  const [selectedColor, setSelectedColor] = useState(colors[0].name);
  const [selectedSize, setSelectedSize] = useState("42");
  const [openAcc, setOpenAcc] = useState<string[]>(["acc-1", "acc-2"]);
  const [sizeModal, setSizeModal] = useState(false);
  const [bagLabel, setBagLabel] = useState("Add to Bag — $780 USD");
  const [wishlisted, setWishlisted] = useState(false);

  const toggleAccordion = (id: string) => {
    setOpenAcc((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  };

  const triggerBagAdd = () => {
    setBagLabel("Adding to Vault...");
    window.setTimeout(() => {
      setBagLabel("Added to Bag (03 Pairs in Order)");
      window.setTimeout(() => setBagLabel("Add to Bag — $780 USD"), 2500);
    }, 700);
  };

  return (
    <main className="w-full pt-20 bg-surface min-h-screen">
      <div className="flex flex-col w-full text-on-surface">
        <section className="w-full bg-surface-container-low px-6 lg:px-12 py-3.5">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 font-label-sm text-label-sm uppercase tracking-[0.16em]">
            <nav className="flex items-center gap-2 text-on-surface-variant flex-wrap">
              <Link className="hover:text-primary transition-colors" href="/">
                Home
              </Link>
              <span className="text-outline-variant font-light">/</span>
              <a className="hover:text-primary transition-colors" href="#">
                Permanent Archive
              </a>
              <span className="text-outline-variant font-light">/</span>
              <a className="hover:text-primary transition-colors" href="#">
                Loafers
              </a>
              <span className="text-outline-variant font-light">/</span>
              <span className="text-primary font-semibold">
                The Palazzo Loafer (Batch 04/2025)
              </span>
            </nav>
            <div className="flex items-center gap-6 text-on-surface-variant">
              <span className="flex items-center gap-1.5 text-secondary">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                Vault Reserve Available: 14 / 120 Pairs
              </span>
              <span className="hidden md:inline text-outline-variant">|</span>
              <span className="hidden md:inline">Civitanova Marche Atelier</span>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-10 lg:py-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="relative w-full aspect-[4/3] bg-surface-container-lowest overflow-hidden group shadow-sm">
                <Image
                  alt="The Palazzo Loafer on Travertine Stone"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  src={activeThumb === 0 ? heroSrc : thumbImages[activeThumb - 1]?.src || heroSrc}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority
                />
                <div className="absolute top-4 left-4 flex flex-col gap-2 pointer-events-none">
                  <span className="bg-surface/90 backdrop-blur-md text-primary font-label-sm text-label-sm uppercase tracking-widest px-3 py-1.5 shadow-sm">
                    Batch 04/2025 · Limited Run
                  </span>
                  <span className="bg-surface/90 backdrop-blur-md text-secondary font-label-sm text-[10px] uppercase tracking-widest px-3 py-1 shadow-sm">
                    Goodyear Flex Welted
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 bg-primary text-on-primary font-label-sm text-[10px] uppercase tracking-[0.2em] px-3.5 py-1.5 shadow-sm">
                  Plate No. 018 — Tuscan Reversed Suede
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {thumbImages.map((t, idx) => (
                  <button
                    key={t.key}
                    className={`gallery-thumb relative aspect-[4/3] bg-surface-container overflow-hidden p-1 shadow-sm transition-all focus:outline-none ${
                      activeThumb === idx + 1
                        ? "ring-1 ring-primary opacity-100"
                        : "opacity-75 hover:opacity-100"
                    }`}
                    onClick={() => setActiveThumb(idx + 1)}
                    type="button"
                  >
                    <Image
                      alt={t.alt}
                      src={t.src}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 33vw, 20vw"
                    />
                    <span className="absolute bottom-1 left-2 font-label-sm text-[9px] uppercase tracking-wider text-primary font-bold bg-surface/90 px-1">
                      {t.label}
                    </span>
                  </button>
                ))}
              </div>
              <div className="bg-surface-container-low p-6 flex items-center justify-between gap-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-surface-container-high rounded-full flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-secondary text-2xl">
                      verified
                    </span>
                  </div>
                  <div>
                    <h4 className="font-label-md text-label-md uppercase tracking-wider text-primary font-semibold">
                      Tuscan Reverse Suede Guarantee
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                      Vegetable-curated unlined hides from Santa Croce
                      sull&apos;Arno. Naturally water-resistant &amp; porous.
                    </p>
                  </div>
                </div>
                <span className="hidden sm:inline-block font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
                  Origin No. 1984
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col bg-surface-container-lowest p-8 lg:p-10 shadow-sm relative">
              <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                <span className="font-label-sm text-label-sm uppercase tracking-[0.22em] text-secondary font-semibold">
                  N° 14/120 — Autumn / Winter 2025
                </span>
                <div className="flex items-center gap-1.5">
                  <div className="flex text-primary">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <span
                        key={i}
                        className="material-symbols-outlined text-[16px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                    ))}
                  </div>
                  <span className="font-label-sm text-label-sm text-on-surface-variant tracking-wider ml-1">
                    5.0 (48 Salon Reviews)
                  </span>
                </div>
              </div>
              <h1 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg text-primary mb-2 leading-none">
                The Palazzo Loafer
              </h1>
              <div className="flex items-baseline gap-3 mb-6 flex-wrap">
                <span className="font-headline-md text-headline-md text-primary font-semibold">
                  $780 USD
                </span>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">
                  Taxes &amp; Duties Included
                </span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed">
                Hand-sculpted in Civitanova Marche from velvety Tuscan unlined
                reverse suede. Engineered over our proprietary Forma 84 wooden
                last, adapting intimately to individual anatomical cadence with
                supple, glove-like poise.
              </p>
              <div className="w-full h-px bg-surface-container-high mb-8"></div>

              <div className="mb-8">
                <div className="flex items-center justify-between mb-3 font-label-md text-label-md uppercase tracking-wider gap-2">
                  <span className="text-on-surface-variant">Selected Colorway</span>
                  <span className="text-primary font-semibold text-right">
                    {selectedColor}
                  </span>
                </div>
                <div className="flex items-center gap-3.5">
                  {colors.map((c) => (
                    <button
                      key={c.name}
                      aria-label={c.name}
                      className={`w-10 h-10 rounded-full p-0.5 bg-surface-container flex items-center justify-center transition-all ${
                        selectedColor === c.name
                          ? "ring-2 ring-primary ring-offset-2 ring-offset-surface"
                          : "opacity-80 hover:opacity-100"
                      }`}
                      onClick={() => setSelectedColor(c.name)}
                      type="button"
                    >
                      <span
                        className="w-full h-full rounded-full"
                        style={{ backgroundColor: c.hex }}
                      ></span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-center justify-between mb-3 font-label-md text-label-md uppercase tracking-wider gap-2 flex-wrap">
                  <span className="text-on-surface-variant">Select Size (EU / IT)</span>
                  <button
                    className="text-secondary hover:text-primary font-semibold underline underline-offset-4 decoration-outline-variant flex items-center gap-1"
                    onClick={() => setSizeModal(true)}
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      straighten
                    </span>
                    Bespoke Last &amp; Sizing Advisory
                  </button>
                </div>
                <div className="grid grid-cols-4 gap-2 mb-3">
                  {sizes.map((s) =>
                    s.disabled ? (
                      <button
                        key={s.eu}
                        className="relative aspect-square bg-surface-container text-outline-variant font-label-md text-label-md flex flex-col items-center justify-center cursor-not-allowed overflow-hidden"
                        disabled
                        type="button"
                      >
                        <span className="line-through">{s.eu}</span>
                        <span className="font-label-sm text-[8px] uppercase tracking-tight text-outline">
                          Waitlist
                        </span>
                        <div className="absolute inset-0 w-full h-full pointer-events-none flex items-center justify-center">
                          <div className="w-[140%] h-px bg-outline-variant transform -rotate-45"></div>
                        </div>
                      </button>
                    ) : (
                      <button
                        key={s.eu}
                        className={`aspect-square font-label-md text-label-md flex flex-col items-center justify-center transition-all ${
                          selectedSize === s.eu
                            ? "bg-primary text-on-primary shadow-sm"
                            : "bg-surface-container-low hover:bg-surface-container-high text-on-surface"
                        }`}
                        onClick={() => setSelectedSize(s.eu)}
                        type="button"
                      >
                        <span className={selectedSize === s.eu ? "font-bold" : ""}>
                          {s.eu}
                        </span>
                        <span
                          className={`font-label-sm text-[9px] mt-0.5 ${
                            selectedSize === s.eu
                              ? "text-primary-fixed"
                              : "text-outline"
                          }`}
                        >
                          {s.us}
                        </span>
                      </button>
                    ),
                  )}
                </div>
                <div className="flex items-center justify-between text-secondary font-label-sm text-label-sm mt-2 gap-2 flex-wrap">
                  <span className="flex items-center gap-1.5 font-semibold text-secondary">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
                    Only 3 pairs remaining in EU {selectedSize} (Batch 04 allocation)
                  </span>
                  <span className="text-outline">Runs true to Italian sizing</span>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                <button
                  className="w-full bg-primary hover:bg-surface-container-high text-on-primary hover:text-on-surface py-4 px-8 font-label-md text-label-md uppercase tracking-[0.16em] transition-all font-semibold flex items-center justify-center gap-3 shadow-md"
                  onClick={triggerBagAdd}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    shopping_bag
                  </span>
                  <span>{bagLabel}</span>
                </button>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    className="w-full bg-transparent hover:bg-surface-container text-primary py-3.5 px-4 font-label-sm text-label-sm uppercase tracking-wider font-semibold shadow-sm transition-colors text-center"
                    onClick={() =>
                      window.open(
                        "https://wa.me/919654738357?text=Hello%20Maison%20Chaussurer,%20I%20would%20like%20to%20reserve%20a%20private%20fitting%20appointment%20in%20Paris.",
                        "_blank",
                      )
                    }
                    type="button"
                  >
                    Reserve Salon Fitting
                  </button>
                  <button
                    className="w-full bg-surface-container-low hover:bg-surface-container text-on-surface py-3.5 px-4 font-label-sm text-label-sm uppercase tracking-wider font-semibold transition-colors flex items-center justify-center gap-2"
                    onClick={() => setWishlisted((w) => !w)}
                    type="button"
                  >
                    <span
                      className="material-symbols-outlined text-[18px]"
                      style={{
                        fontVariationSettings: wishlisted ? "'FILL' 1" : "'FILL' 0",
                      }}
                    >
                      {wishlisted ? "favorite" : "favorite_border"}
                    </span>
                    <span>{wishlisted ? "Archived in Vault" : "Save to Archive"}</span>
                  </button>
                </div>
                <a
                  className="w-full bg-surface-container-low hover:bg-secondary-container text-on-surface py-3 px-4 font-label-sm text-label-sm uppercase tracking-[0.14em] transition-colors flex items-center justify-center gap-2 text-center"
                  href={`https://wa.me/919654738357?text=Hello%20Maison%20Chaussurer%20Concierge,%20I%20would%20like%20to%20order%20The%20Palazzo%20Loafer%20in%20EU%20${selectedSize}.`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="material-symbols-outlined text-[18px] text-secondary">
                    chat
                  </span>
                  <span>Direct WhatsApp Concierge: +91 9654738357</span>
                </a>
              </div>

              <div className="bg-surface-container-low p-5 space-y-3.5 text-on-surface-variant font-body-sm text-body-sm">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-[20px] shrink-0">
                    local_shipping
                  </span>
                  <span>
                    Complimentary worldwide courier delivery &amp; carbon-neutral
                    private returns within 30 days.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-[20px] shrink-0">
                    inventory_2
                  </span>
                  <span>
                    Includes hand-turned bespoke cedar shoe trees, dust covers,
                    and presentation archive box.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-[20px] shrink-0">
                    spa
                  </span>
                  <span>
                    Complimentary maiden re-soling and lifetime seasonal leather
                    hydration treatments at our Paris atelier.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-surface-container-low py-16 lg:py-24">
          <div className="max-w-5xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-12">
              <span className="font-label-sm text-label-sm uppercase tracking-[0.25em] text-secondary font-semibold">
                Tannery Protocol &amp; Construction
              </span>
              <h2 className="font-headline-md text-headline-md text-primary mt-2">
                Atelier Specifications
              </h2>
            </div>
            <div className="space-y-4">
              {[
                {
                  id: "acc-1",
                  num: "01",
                  title: "128 Hand-Executed Construction Steps",
                  content: (
                    <>
                      <p className="mb-3">
                        The Palazzo silhouette demands fourteen dedicated hours
                        of artisan benchcraft in our Civitanova Marche
                        workshops. The upper undergoes unlined glove-tannage,
                        hand-stretched over our bespoke beechwood last for nine
                        days to permanently memorize structural curvature.
                      </p>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-body-sm font-label-md text-primary pt-2">
                        {[
                          "Goodyear Flex welt construction for cloud-like suppleness",
                          "Closed-channel oak-bark sole burnished with natural beeswax",
                          "Hand-pinched apron seam sewn with pitch-waxed linen thread",
                          "Dual-density Portuguese granulated natural cork bed filling",
                        ].map((li) => (
                          <li key={li} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                            {li}
                          </li>
                        ))}
                      </ul>
                    </>
                  ),
                },
                {
                  id: "acc-2",
                  num: "02",
                  title: "Materiality & Certified Tuscan Tannery Protocol",
                  content: (
                    <p>
                      Selected exclusively from the esteemed Conceria Puccini in
                      Santa Croce sull&apos;Arno. Full-grain calf suede is
                      reverse-split, allowing the plush nap to breathe
                      unhindered while retaining the tensile strength of the
                      inner skin. Tanned purely with chestnut and mimosa barks
                      without chemical chromium.
                    </p>
                  ),
                },
                {
                  id: "acc-3",
                  num: "03",
                  title: "Complimentary Bespoke Hot-Foil Monogramming",
                  content: (
                    <>
                      <p className="mb-4">
                        Upon request during checkout, our master gilder will
                        apply up to three Roman capital letters onto the
                        calfskin insole in 22-karat Venetian gold foil or blind
                        deboss.
                      </p>
                      <div className="flex items-center gap-4 bg-surface-container-low p-4">
                        <span className="material-symbols-outlined text-secondary text-2xl">
                          style
                        </span>
                        <span className="font-label-md text-label-md uppercase tracking-wider text-primary">
                          Provide initials via checkout notes or directly to
                          your VIP Concierge.
                        </span>
                      </div>
                    </>
                  ),
                },
                {
                  id: "acc-4",
                  num: "04",
                  title: "Climate-Protected Shipping & Atelier Returns",
                  content: (
                    <p>
                      Each pair is dispatched within 24 hours via carbon-offset
                      expedited courier. Encased in temperature-monitored
                      archival boxes accompanied by an authentication
                      certificate hand-signed by Bottier Marco Silvestri.
                      Private client returns are arranged via door-to-door
                      courier collection with zero handling fees.
                    </p>
                  ),
                },
              ].map((acc) => {
                const open = openAcc.includes(acc.id);
                return (
                  <div
                    key={acc.id}
                    className="bg-surface-container-lowest p-6 shadow-sm transition-all"
                  >
                    <button
                      className="w-full flex items-center justify-between text-left font-headline-sm text-headline-sm text-primary focus:outline-none"
                      onClick={() => toggleAccordion(acc.id)}
                      type="button"
                    >
                      <span className="flex items-center gap-3">
                        <span className="font-label-sm text-label-sm text-secondary font-bold tracking-widest">
                          {acc.num}
                        </span>
                        <span>{acc.title}</span>
                      </span>
                      <span
                        className={`material-symbols-outlined transition-transform duration-300 ${
                          open ? "-rotate-180" : ""
                        }`}
                      >
                        expand_more
                      </span>
                    </button>
                    {open && (
                      <div className="mt-4 font-body-md text-body-md text-on-surface-variant pr-8 leading-relaxed">
                        {acc.content}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 flex flex-col justify-center">
              <span className="font-label-sm text-label-sm uppercase tracking-[0.25em] text-secondary font-semibold mb-3">
                The Anatomy of a Silhouette
              </span>
              <h2 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg text-primary leading-tight mb-6">
                Forma 84: The Last of Restrained Elegance
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                The architectural cadence of The Palazzo Loafer originates in
                Forma 84—a proprietary wooden last carved by hand in 1984. It
                captures the natural asymmetry of the human metatarsal while
                tapering subtly toward an elongated almond toe that lengthens
                the leg line without constriction.
              </p>
              <div className="bg-surface-container-low p-6 mb-8 shadow-sm">
                <p className="font-headline-sm text-headline-sm italic text-primary leading-snug mb-3">
                  &quot;A magnificent loafer does not merely cushion the foot; it
                  converses with the stone pavements of Florence and the parquet
                  of Paris.&quot;
                </p>
                <span className="font-label-md text-label-md uppercase tracking-wider text-secondary font-semibold block">
                  — Marco Silvestri, Master Bottier (Civitanova Marche)
                </span>
              </div>
              <div className="grid grid-cols-2 gap-6 pt-2">
                <div>
                  <span className="font-headline-md text-headline-md text-primary font-bold">
                    14 hrs
                  </span>
                  <p className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant mt-1">
                    Manual bench time per individual shoe
                  </p>
                </div>
                <div>
                  <span className="font-headline-md text-headline-md text-primary font-bold">
                    9 Days
                  </span>
                  <p className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant mt-1">
                    Resting on wooden last for tensile memory
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 relative">
              <div className="relative w-full aspect-[16/11] bg-surface-container overflow-hidden shadow-md">
                <Image
                  alt="Artisanal shoemaking craftsmanship"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZlCLItZfWlnAq8dVELwAYvIb_UL9es3h5a1gN-2JEobotYnfKPMViQPG8VEGILQ8Mr8gADM_qwkFbgOsthTqaOKDh3cHxzq6tH8x3jhblZc53nCHto25Z_jep14rF-JJtEDNiiVCYqQXYehHRbSmAealmbzTDorKoicF9FCyauf-GE1DUUdo5UHhTb6Bagl1_74phHjFyQ0GMmBdVPXEbiq_YTyrr57kGIqmrRbA"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-on-primary font-label-md text-label-md uppercase tracking-wider flex items-center justify-between">
                  <span>Atelier Civitanova Marche · Italy</span>
                  <span>Archival Photo 2025</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-surface-container-low py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-[0.25em] text-secondary font-semibold block mb-2">
                  Curated Pairings
                </span>
                <h2 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg text-primary">
                  Complete the Silhouette
                </h2>
              </div>
              <Link
                className="font-label-md text-label-md uppercase tracking-widest text-primary hover:text-secondary flex items-center gap-2 font-semibold"
                href="/"
              >
                <span>Explore The Full Archive</span>
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "The Duomo Monk",
                  price: "$960",
                  desc: "Handcrafted espresso boxcalf with forged champagne brass buckles.",
                  badge: "New Allocation",
                  img: "https://lh3.googleusercontent.com/aida/ALJJyrBJFTlmOp1zhK1HwKOhOld1rTuNdfFA9G1KZioeim-P9BeM8vueGrCiperYd88LZG7Ovc8pBxeEjPIeWHJMJb0RsnzbBFue4_PcS4mpGMVUkntq0efWY4jnTq5qxLB6XEvBOoB7-T5wiFK6HkhM6LsGNa2j5msE6UWtaqeLg9osSfuYzBedA8R0eBNQn3dltGrbbmaCV1Y9gPtFORfrBpyXANLSv6u7d1KZH2vmnmEd",
                },
                {
                  title: "The Sculpted Pump",
                  price: "$890",
                  desc: "Cream satin leather architectural kitten heel with sculpted cantilever arch.",
                  badge: "Women's Atelier",
                  img: "https://lh3.googleusercontent.com/aida/ALJJyrAJIhQaCD3JcdwL1KXyGNv1M9-0WIpGBDQaWQmIe3fURCnXve18qjHscNdKdt5hPydxzR2rCBhPcSb5WX4tMc9AYidomNb2rxcZgpzMYA83k0PEkEaNL1r2Y4FNo_ikZxmlW0j7RbQYRLse8zwdkWw7sDvJj4CrwxdI5OU6gqPV55DkWiwvNUaHw6-v9SztErOMC7Wm_Owj0nwXhSB1teHRzmdWlxdD9FSxjSg-Rr-e",
                },
                {
                  title: "Suede Care Protocol",
                  price: "$120",
                  desc: "Raw crepe stone, natural horsehair brush & botanical waterproofing elixir.",
                  badge: "Atelier Essentials",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsCFH1-aDd53RfM5vZS5QFMlyWxux_QHCgx4CzkDzKPakRv7nnCPeFIjUbYqHKkbt4bnKxUlIxWbib3kUDutFBPwfGgl4ofRdDOccrj-WEZ9rmLBD0YVolF77KXa6TEjcSYgpFwx3Wcn_PPrFb2Eg9v3tbzF3S2j7Cqg4Nt0thGjb4EsWodIzg33ePzm9KSm3QOqrnM0CTLGo7O_ZSeY_DiUxsaVONpX6U6hTkFkg",
                },
              ].map((p) => (
                <div
                  key={p.title}
                  className="group flex flex-col bg-surface-container-lowest p-5 shadow-sm transition-all duration-300 hover:shadow-md"
                >
                  <div className="relative aspect-[4/3] bg-surface-container overflow-hidden mb-5">
                    <Image
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src={p.img}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <span className="absolute top-3 left-3 bg-surface/90 text-primary font-label-sm text-[10px] uppercase tracking-widest px-2.5 py-1">
                      {p.badge}
                    </span>
                  </div>
                  <div className="flex items-baseline justify-between mb-1 gap-2">
                    <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">
                      {p.title}
                    </h3>
                    <span className="font-headline-sm text-headline-sm text-primary font-semibold">
                      {p.price}
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">
                    {p.desc}
                  </p>
                  <button
                    className="w-full mt-auto bg-surface-container hover:bg-primary text-on-surface hover:text-on-primary py-2.5 px-4 font-label-sm text-label-sm uppercase tracking-widest transition-colors font-semibold"
                    type="button"
                  >
                    View Silhouette
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24 w-full">
          <div className="bg-surface-container-lowest p-8 lg:p-14 shadow-md flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                <span className="font-label-sm text-label-sm uppercase tracking-[0.25em] text-secondary font-semibold">
                  Private Salon Services
                </span>
              </div>
              <h3 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg text-primary mb-3">
                In Need of Personal Guidance?
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Our Senior Bottier Concierge is directly available via encrypted
                WhatsApp or private email to answer bespoke last queries,
                organize salon appointments in Paris or Milan, or orchestrate
                rush bespoke delivery.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0">
              <a
                className="bg-primary hover:bg-surface-container-high text-on-primary hover:text-on-surface px-8 py-4 font-label-md text-label-md uppercase tracking-[0.15em] transition-all font-semibold flex items-center justify-center gap-3 shadow-sm text-center"
                href={`https://wa.me/919654738357?text=Hello%20Maison%20Chaussurer%20Concierge,%20I%20have%20an%20inquiry%20regarding%20The%20Palazzo%20Loafer.`}
                target="_blank"
                rel="noreferrer"
              >
                <span className="material-symbols-outlined text-[20px]">chat</span>
                <span>WhatsApp +91 9654738357</span>
              </a>
              <a
                className="bg-surface-container-low hover:bg-surface-container text-on-surface px-8 py-4 font-label-md text-label-md uppercase tracking-[0.15em] transition-all font-semibold flex items-center justify-center gap-3 shadow-sm text-center"
                href="mailto:irfanrifu11@gmail.com?subject=The%20Palazzo%20Loafer%20Inquiry%20-%20Private%20Client"
              >
                <span className="material-symbols-outlined text-[20px]">mail</span>
                <span>irfanrifu11@gmail.com</span>
              </a>
            </div>
          </div>
        </section>

        {sizeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/60 backdrop-blur-sm">
            <div className="bg-surface-container-lowest max-w-2xl w-full p-8 lg:p-10 shadow-2xl relative">
              <button
                aria-label="Close modal"
                className="absolute top-6 right-6 text-on-surface hover:text-secondary transition-colors"
                onClick={() => setSizeModal(false)}
                type="button"
              >
                <span className="material-symbols-outlined text-2xl">close</span>
              </button>
              <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-secondary font-semibold block mb-1">
                Maison Chaussurer Fit Protocol
              </span>
              <h3 className="font-headline-md text-headline-md text-primary mb-4">
                Forma 84 Sizing &amp; Last Guide
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                The Palazzo Loafer is crafted without lining to yield immediate
                comfort. Please refer to this master conversion table. If you
                find yourself between two sizes, we advise selecting the lower
                half-size as unlined suede conforms with 3–4 wears.
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-left font-label-md text-label-md">
                  <thead>
                    <tr className="bg-surface-container-low text-primary uppercase tracking-wider">
                      <th className="p-3">EU / IT</th>
                      <th className="p-3">UK</th>
                      <th className="p-3">US Men</th>
                      <th className="p-3">Foot Length (CM)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-surface-container-high text-on-surface-variant font-body-sm">
                    {[
                      ["39", "5.5", "6.5", "25.0 cm"],
                      ["40", "6.5", "7.5", "25.7 cm"],
                      ["41", "7.5", "8.5", "26.4 cm"],
                      ["42 (Standard)", "8.5", "9.5", "27.0 cm", true],
                      ["43", "9.5", "10.5", "27.7 cm"],
                      ["44", "10.5", "11.5", "28.4 cm"],
                      ["45", "11.5", "12.0", "29.0 cm"],
                    ].map((row) => (
                      <tr
                        key={row[0] as string}
                        className={row[4] ? "bg-surface-container" : ""}
                      >
                        <td
                          className={`p-3 ${row[4] ? "font-bold" : "font-semibold"} text-primary`}
                        >
                          {row[0]}
                        </td>
                        <td className="p-3">{row[1]}</td>
                        <td className="p-3">{row[2]}</td>
                        <td className="p-3">{row[3]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-surface-container-low p-4 flex items-center justify-between gap-4 flex-wrap">
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Still uncertain? Request an atelier fitting kit via post.
                </span>
                <a
                  className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold hover:text-secondary"
                  href="https://wa.me/919654738357"
                  target="_blank"
                  rel="noreferrer"
                >
                  Consult Bottier →
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
