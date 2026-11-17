"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function HomePage() {
  const [toast, setToast] = useState<string | null>(null);

  const handleQuickAdd = (title: string, price: string) => {
    setToast(`${title} (${price}) added to selection.`);
    window.setTimeout(() => setToast(null), 4000);
  };

  return (
    <main className="w-full pt-20 bg-surface min-h-screen">
      <div className="flex flex-col w-full">
        <section className="relative w-full min-h-[92vh] flex flex-col justify-between px-6 lg:px-16 pt-12 pb-16 bg-surface overflow-hidden">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center flex-1 my-auto">
            <div className="lg:col-span-6 flex flex-col z-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                <span className="font-label-sm text-label-sm uppercase tracking-[0.28em] text-secondary font-semibold">
                  Autumn / Winter 2025
                </span>
                <span className="text-outline text-label-sm">/</span>
                <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-on-surface-variant">
                  Edition Limitée
                </span>
              </div>
              <h1 className="font-display text-display-mobile sm:text-display text-primary uppercase font-normal leading-[1.02] tracking-[-0.03em] mb-6">
                Form &amp;
                <br />
                <span className="italic font-light">Architecture</span>
                <br />
                In Motion
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-10 leading-relaxed font-light">
                Handcrafted in Civitanova Marche. Sculptural silhouettes
                sculpted from vegetable-tanned Tuscan calfskin, honoring
                century-old Italian shoemaking traditions.
              </p>
              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                <a
                  className="bg-primary text-on-primary px-9 py-4 font-label-md text-label-md uppercase tracking-[0.16em] hover:bg-surface-container-high hover:text-on-surface transition-all duration-300 shadow-md"
                  href="#collection"
                >
                  Explore Collection
                </a>
                <a
                  className="bg-surface-container-lowest text-primary px-9 py-4 font-label-md text-label-md uppercase tracking-[0.16em] hover:bg-surface-container-low transition-all duration-300 shadow-sm flex items-center gap-2 group"
                  href="#archive"
                >
                  <span>Shop Now</span>
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </a>
              </div>
              <div className="mt-14 pt-8 grid grid-cols-2 gap-6 max-w-md">
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary mb-1">
                    Origin Coordinate
                  </span>
                  <span className="font-body-sm text-body-sm text-primary font-medium tracking-wide">
                    43°18′N 13°43′E — Marche
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary mb-1">
                    Tannery Protocol
                  </span>
                  <span className="font-body-sm text-body-sm text-primary font-medium tracking-wide">
                    Certified Slow-Pit Bark Tan
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-xl aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] shadow-2xl overflow-hidden bg-surface-container-low">
                <Image
                  alt="The Brera Chelsea Boot and Oxford on Travertine Plinth"
                  className="w-full h-full object-cover scale-[1.01] hover:scale-105 transition-transform duration-700 ease-out"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeatxtz3-lag89C2xM1J7h_5i-FlPlDWHwa02Lo9Y-MS32YZBeYcjMFc3-w4DtftcnUtYkgGKkNsUIUKKlJ0dyrRUOI5M5rUHcAc2qOP6D05MdlchFEMDsR5jpPATZnEpYWDdEFVMvxrGEEZJ5wWgWxkBZV_jWT7XHGU2TPKKFqG4hJpUhjGI_sLV6q9K-9bwNX7Vt84hJgUDRCz5RSxLvEcKSYheVWMWQg8w_XIs"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute bottom-4 left-4 bg-surface/90 backdrop-blur-md px-4 py-2 text-on-surface flex items-center gap-3 shadow-sm">
                  <span className="font-label-sm text-label-sm tracking-widest uppercase text-secondary font-semibold">
                    Plateau 01
                  </span>
                  <span className="w-1 h-1 rounded-full bg-outline"></span>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary">
                    Travertine &amp; Boxcalf
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto w-full pt-8 flex items-center justify-between font-label-sm text-label-sm tracking-[0.2em] uppercase text-outline">
            <div className="flex items-center gap-4">
              <span className="text-primary font-semibold">01</span>
              <span className="w-12 h-[1px] bg-outline-variant"></span>
              <span>Atelier Heritage Series</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <span>Scroll to examine</span>
              <span className="material-symbols-outlined text-[16px] animate-bounce">
                south
              </span>
            </div>
            <div>
              <span>Global Salon Deliveries Active</span>
            </div>
          </div>
        </section>

        <section className="w-full py-28 px-6 lg:px-16 bg-surface-container-low" id="collection">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-[0.28em] text-secondary font-semibold block mb-3">
                  Curated Sectors
                </span>
                <h2 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg text-primary tracking-tight">
                  Architectural Disciplines
                </h2>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                Disciplined silhouettes tailored for the contemporary wardrobe,
                balancing structured lasts with pliable calf linings.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
              {[
                {
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDIC3cEj49SoaA3E2-M_Bmp4hWf5qzoBp0k2fB6ERHHn8P2K1kVsgeW33yCAffsJNPlYgdOqqHN6Dsc9wWNnYKODHTt41fqpzktz78GkogyoCXmR91QXjYCv-nWaheIJVQICQc_Me3InaPSNMkGX_DMYYIqCpae3-mhllr41tCdrbd-jQnJwIIy7w2Qgvde5_3jTNkVVfscv-Mgu9qCYKk95sZOShEiJ4RzGmMaBYc",
                  badge: "No. 01 / Heels",
                  tag: "Architectural Balance",
                  title: "The Sculptural Heels",
                  desc: "Constructed with a flared geometric pillar heel and silk-soft lambskin insole for weightless poise.",
                },
                {
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJ1Mszphd_zGeL2PTsrOCIgfxOEFBEplIzhOx7QMz5v8BvVExsaZ1rnnMC2QAzfIsoTbZZXnFCg1kxFQ0gjuWbZ4iNpvm59UN35pjnX8SoKnAO97LtO4CfLjEGpVZAw9MM8DccISRFpVcsJD1Buj_kZgQObJ_xzDmTf-16OSK9-0T59YBEY6AVj4IXhMILhsGgdhztPoeVuAm7S_m_b3it0AAy5nuFJ7b7qB46xJg",
                  badge: "No. 02 / Loafers",
                  tag: "Unstructured Luxury",
                  title: "The Artisanal Loafers",
                  desc: "Hand-stitched aprons in velvety Tuscan suede, offering a soft unlined glove-like fit from dawn to dusk.",
                },
                {
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAOTAdON0ppvI6cvp7i_2gzMsOMbr5V1nHHIZcihkBVtEEMK_MCbg2-sE9iCdla7XYhUpEPjfe50N_YHPXQFu2DVSPeoG9rENKWlpeJgHo26-mY7Rnj726A44K6WJb42iINbFZy8c2R1wvDoo3pVVkvDoj0ynhM4fKC9d-GS5xWmVc164g4Hu18LT2247fMr1xeZlZ4sqQ7YPZfyS-QTO-O2ZWz08LJa87zVs3kSYU",
                  badge: "No. 03 / Tailored",
                  tag: "Goodyear Welt Mastery",
                  title: "The Monk Strap & Oxford",
                  desc: "Formally disciplined silhouettes mounted on closed-channel oak-bark tanned leather soles.",
                },
              ].map((card) => (
                <Link
                  key={card.title}
                  className="group flex flex-col bg-surface-container-lowest p-6 shadow-sm hover:shadow-xl transition-all duration-500"
                  href="/the-palazzo-loafer"
                >
                  <div className="relative w-full aspect-[4/5] bg-surface-container overflow-hidden mb-6">
                    <Image
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      src={card.img}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute top-4 right-4 bg-surface/90 backdrop-blur-sm px-3 py-1 font-label-sm text-label-sm uppercase tracking-wider text-primary">
                      {card.badge}
                    </div>
                  </div>
                  <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-secondary font-medium mb-1">
                    {card.tag}
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-2 group-hover:text-secondary transition-colors">
                    {card.title}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 flex-1">
                    {card.desc}
                  </p>
                  <div className="flex items-center gap-2 font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold">
                    <span>Explore Category</span>
                    <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1.5 transition-transform">
                      arrow_forward
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-28 px-6 lg:px-16 bg-surface" id="archive">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-[0.28em] text-secondary font-semibold block mb-3">
                  Permanent Archive
                </span>
                <h2 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg text-primary tracking-tight">
                  Iconic Foundations
                </h2>
              </div>
              <div className="flex items-center gap-6">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant hidden sm:inline">
                  Produced in Numbered Runs of 120
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "The Palazzo Loafer",
                  subtitle: "Warm Camel · Tuscan Suede",
                  price: "$780 USD",
                  badge: "Batch 04/2025",
                  badgeClass: "bg-primary text-on-primary",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJ1Mszphd_zGeL2PTsrOCIgfxOEFBEplIzhOx7QMz5v8BvVExsaZ1rnnMC2QAzfIsoTbZZXnFCg1kxFQ0gjuWbZ4iNpvm59UN35pjnX8SoKnAO97LtO4CfLjEGpVZAw9MM8DccISRFpVcsJD1Buj_kZgQObJ_xzDmTf-16OSK9-0T59YBEY6AVj4IXhMILhsGgdhztPoeVuAm7S_m_b3it0AAy5nuFJ7b7qB46xJg",
                  swatches: ["#C29D6E", "#3B281B", "#171717"],
                  rating: "5.0",
                  reviews: "(48)",
                },
                {
                  title: "The Sculpted Pump",
                  subtitle: "Ivory Duchesse Satin",
                  price: "$890 USD",
                  badge: "Limited Run",
                  badgeClass: "bg-secondary text-on-secondary",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDIC3cEj49SoaA3E2-M_Bmp4hWf5qzoBp0k2fB6ERHHn8P2K1kVsgeW33yCAffsJNPlYgdOqqHN6Dsc9wWNnYKODHTt41fqpzktz78GkogyoCXmR91QXjYCv-nWaheIJVQICQc_Me3InaPSNMkGX_DMYYIqCpae3-mhllr41tCdrbd-jQnJwIIy7w2Qgvde5_3jTNkVVfscv-Mgu9qCYKk95sZOShEiJ4RzGmMaBYc",
                  swatches: ["#EAE6DF", "#1A1A1A"],
                  rating: "4.9",
                  reviews: "(36)",
                },
                {
                  title: "The Duomo Monk",
                  subtitle: "Hand-Burnished French Calf",
                  price: "$960 USD",
                  badge: "Batch 02/2025",
                  badgeClass: "bg-primary text-on-primary",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAOTAdON0ppvI6cvp7i_2gzMsOMbr5V1nHHIZcihkBVtEEMK_MCbg2-sE9iCdla7XYhUpEPjfe50N_YHPXQFu2DVSPeoG9rENKWlpeJgHo26-mY7Rnj726A44K6WJb42iINbFZy8c2R1wvDoo3pVVkvDoj0ynhM4fKC9d-GS5xWmVc164g4Hu18LT2247fMr1xeZlZ4sqQ7YPZfyS-QTO-O2ZWz08LJa87zVs3kSYU",
                  swatches: ["#3F2A1D", "#151515"],
                  rating: "5.0",
                  reviews: "(64)",
                },
                {
                  title: "The Brera Chelsea",
                  subtitle: "Polished Black Boxcalf",
                  price: "$1,050 USD",
                  badge: "Permanent Core",
                  badgeClass: "bg-primary text-on-primary",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCeatxtz3-lag89C2xM1J7h_5i-FlPlDWHwa02Lo9Y-MS32YZBeYcjMFc3-w4DtftcnUtYkgGKkNsUIUKKlJ0dyrRUOI5M5rUHcAc2qOP6D05MdlchFEMDsR5jpPATZnEpYWDdEFVMvxrGEEZJ5wWgWxkBZV_jWT7XHGU2TPKKFqG4hJpUhjGI_sLV6q9K-9bwNX7Vt84hJgUDRCz5RSxLvEcKSYheVWMWQg8w_XIs",
                  swatches: ["#111111", "#4A1D24"],
                  rating: "5.0",
                  reviews: "(82)",
                },
              ].map((p) => (
                <div
                  key={p.title}
                  className="group flex flex-col bg-surface-container-lowest p-4 shadow-sm hover:shadow-xl transition-all duration-300 relative"
                >
                  <div className="relative w-full aspect-[4/5] bg-surface-container-low overflow-hidden mb-5">
                    <Image
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src={p.img}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <button
                      aria-label="Save to Wishlist"
                      className="absolute top-3 right-3 w-8 h-8 rounded-full bg-surface/80 hover:bg-surface flex items-center justify-center text-primary transition-colors"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        favorite
                      </span>
                    </button>
                    <span
                      className={`absolute bottom-3 left-3 font-label-sm text-[10px] tracking-widest uppercase px-2 py-1 ${p.badgeClass}`}
                    >
                      {p.badge}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1 text-secondary">
                      <span
                        className="material-symbols-outlined text-[14px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                      <span className="font-label-sm text-label-sm font-semibold text-primary">
                        {p.rating}
                      </span>
                      <span className="font-label-sm text-[11px] text-outline">
                        {p.reviews}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      {p.swatches.map((s) => (
                        <span
                          key={s}
                          className="w-3 h-3 rounded-full inline-block shadow-sm"
                          style={{ backgroundColor: s }}
                        ></span>
                      ))}
                    </div>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-1">
                    {p.title}
                  </h3>
                  <span className="font-body-sm text-body-sm text-on-surface-variant mb-4">
                    {p.subtitle}
                  </span>
                  <div className="flex items-center justify-between pt-3 mt-auto">
                    <span className="font-label-md text-label-md font-semibold text-primary">
                      {p.price}
                    </span>
                    <button
                      className="bg-surface-container-high hover:bg-primary hover:text-on-primary text-primary px-3 py-2 font-label-sm text-label-sm uppercase tracking-wider transition-colors flex items-center gap-1"
                      onClick={() => handleQuickAdd(p.title, p.price)}
                    >
                      <span className="material-symbols-outlined text-[16px]">
                        add
                      </span>
                      <span>Quick Add</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="w-full py-28 px-6 lg:px-16 bg-surface-container-low overflow-hidden"
          id="manifesto"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 relative">
              <div className="w-full aspect-[4/5] bg-surface-container shadow-2xl overflow-hidden relative">
                <Image
                  alt="Atelier workbench with shoes and natural materials"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeatxtz3-lag89C2xM1J7h_5i-FlPlDWHwa02Lo9Y-MS32YZBeYcjMFc3-w4DtftcnUtYkgGKkNsUIUKKlJ0dyrRUOI5M5rUHcAc2qOP6D05MdlchFEMDsR5jpPATZnEpYWDdEFVMvxrGEEZJ5wWgWxkBZV_jWT7XHGU2TPKKFqG4hJpUhjGI_sLV6q9K-9bwNX7Vt84hJgUDRCz5RSxLvEcKSYheVWMWQg8w_XIs"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 text-on-primary">
                  <span className="font-label-sm text-label-sm uppercase tracking-[0.25em] text-secondary-fixed block mb-2">
                    Photographic Archival Record
                  </span>
                  <p className="font-body-sm text-body-sm font-light">
                    Natural travertine stone staging in our Civitanova Marche
                    design studio.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 flex flex-col">
              <span className="font-label-sm text-label-sm uppercase tracking-[0.28em] text-secondary font-semibold mb-4 block">
                The Marche Atelier Manifesto
              </span>
              <h2 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg text-primary tracking-tight mb-8">
                The Art of Quiet Precision
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6 leading-relaxed">
                At Maison Chaussurer, every pair begins not on a factory line,
                but at an artisan workbench in the Marche region of Italy. From
                pattern cutting to the final hand-buffing with beeswax and
                champagne oil, 128 distinct tactile steps are executed over four
                weeks.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant mb-10 leading-relaxed">
                We honor slow shoemaking: hand-lasted waists, cork paste filling
                that forms directly to your arch anatomy, and natural vegetable
                dyes that mature with personal patina over decades.
              </p>
              <div className="bg-surface-container-lowest p-8 mb-8 shadow-sm">
                <p className="font-headline-sm text-headline-sm italic text-primary mb-4 leading-snug">
                  “We do not manufacture footwear; we carve architectural
                  pedestals for the human posture.”
                </p>
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="w-6 h-[1px] bg-secondary"></span>
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold">
                    Marco Silvestri
                  </span>
                  <span className="text-outline text-label-sm">·</span>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                    Master Bottier &amp; Co-Founder
                  </span>
                </div>
              </div>
              <a
                className="inline-flex items-center gap-3 font-label-md text-label-md uppercase tracking-[0.16em] text-primary hover:text-secondary transition-colors font-semibold group"
                href="#"
              >
                <span>Discover Our Marche Atelier</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-2 transition-transform">
                  east
                </span>
              </a>
            </div>
          </div>
        </section>

        <section className="w-full py-28 px-6 lg:px-16 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-[0.28em] text-secondary font-semibold block mb-3">
                  Limited Run Releases
                </span>
                <h2 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg text-primary tracking-tight">
                  New Arrivals — Editions 2025
                </h2>
              </div>
              <a
                className="bg-surface-container-high hover:bg-primary hover:text-on-primary text-primary px-8 py-3.5 font-label-md text-label-md uppercase tracking-[0.15em] transition-colors self-start md:self-auto"
                href="#archive"
              >
                View All New Arrivals
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "The Travertine Slingback",
                  price: "$920 USD",
                  edition: "Edition 01 / 100 Pieces",
                  badge: "Pre-Order Exclusive",
                  badgeClass: "bg-primary text-on-primary",
                  desc: "Cut with a deep vamp and balanced on an engineered conical heel.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDIC3cEj49SoaA3E2-M_Bmp4hWf5qzoBp0k2fB6ERHHn8P2K1kVsgeW33yCAffsJNPlYgdOqqHN6Dsc9wWNnYKODHTt41fqpzktz78GkogyoCXmR91QXjYCv-nWaheIJVQICQc_Me3InaPSNMkGX_DMYYIqCpae3-mhllr41tCdrbd-jQnJwIIy7w2Qgvde5_3jTNkVVfscv-Mgu9qCYKk95sZOShEiJ4RzGmMaBYc",
                },
                {
                  title: "The Portofino Driver",
                  price: "$840 USD",
                  edition: "Edition 02 / 100 Pieces",
                  badge: "Limited Run of 100",
                  badgeClass: "bg-secondary text-on-secondary",
                  desc: "Featherlight split-sole moccasin finished with contrasting white saddle stitch.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJ1Mszphd_zGeL2PTsrOCIgfxOEFBEplIzhOx7QMz5v8BvVExsaZ1rnnMC2QAzfIsoTbZZXnFCg1kxFQ0gjuWbZ4iNpvm59UN35pjnX8SoKnAO97LtO4CfLjEGpVZAw9MM8DccISRFpVcsJD1Buj_kZgQObJ_xzDmTf-16OSK9-0T59YBEY6AVj4IXhMILhsGgdhztPoeVuAm7S_m_b3it0AAy5nuFJ7b7qB46xJg",
                },
                {
                  title: "The Castagna Double Monk",
                  price: "$1,020 USD",
                  edition: "Edition 03 / 100 Pieces",
                  badge: "Pre-Order Exclusive",
                  badgeClass: "bg-primary text-on-primary",
                  desc: "Featuring solid brushed brass buckle hardware and beveled waist soles.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAOTAdON0ppvI6cvp7i_2gzMsOMbr5V1nHHIZcihkBVtEEMK_MCbg2-sE9iCdla7XYhUpEPjfe50N_YHPXQFu2DVSPeoG9rENKWlpeJgHo26-mY7Rnj726A44K6WJb42iINbFZy8c2R1wvDoo3pVVkvDoj0ynhM4fKC9d-GS5xWmVc164g4Hu18LT2247fMr1xeZlZ4sqQ7YPZfyS-QTO-O2ZWz08LJa87zVs3kSYU",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-surface-container-low p-6 flex flex-col shadow-sm group"
                >
                  <div className="relative w-full aspect-[4/3] bg-surface-container mb-6 overflow-hidden">
                    <Image
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src={item.img}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <span
                      className={`absolute top-3 left-3 font-label-sm text-[10px] tracking-widest uppercase px-2.5 py-1 font-semibold ${item.badgeClass}`}
                    >
                      {item.badge}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-secondary mb-2 font-label-sm text-label-sm tracking-wider uppercase">
                    <span>{item.edition}</span>
                    <span className="text-primary font-bold">{item.price}</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-6">
                    {item.desc}
                  </p>
                  <button
                    className="mt-auto w-full py-3 bg-surface-container-lowest hover:bg-primary hover:text-on-primary text-primary font-label-sm text-label-sm uppercase tracking-widest transition-colors font-semibold"
                    onClick={() => handleQuickAdd(item.title, item.price)}
                  >
                    Reserve For Private Run
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-24 px-6 lg:px-16 bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
              {[
                {
                  icon: "architecture",
                  tag: "Goodyear Construction",
                  title: "Bespoke Artisanal Craftsmanship",
                  desc: "Goodyear-welted and hand-welted construction engineered for a lifetime of re-soling, natural breathability, and enduring postural alignment.",
                },
                {
                  icon: "flight_takeoff",
                  tag: "Discreet White-Glove",
                  title: "Complimentary Global Logistics",
                  desc: "Same-day priority courier dispatch inside insulated archival shoe boxes with cedar shoe trees, delivered climate-certified to your residence.",
                },
                {
                  icon: "spa",
                  tag: "Restoration Program",
                  title: "Lifetime Restoration Atelier",
                  desc: "Every commissioned pair includes bi-annual complimentary conditioning, edge-dressing, and wax nourishing at our salons in Paris and Milan.",
                },
              ].map((f) => (
                <div key={f.title} className="flex flex-col">
                  <div className="w-12 h-12 bg-surface-container-low flex items-center justify-center text-primary mb-6">
                    <span className="material-symbols-outlined text-[24px]">
                      {f.icon}
                    </span>
                  </div>
                  <span className="font-label-sm text-label-sm uppercase tracking-[0.25em] text-secondary font-semibold mb-2">
                    {f.tag}
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-3">
                    {f.title}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="w-full py-24 px-6 lg:px-16 bg-surface-container-low"
          id="concierge"
        >
          <div className="max-w-7xl mx-auto">
            <div className="bg-surface-container-lowest p-8 lg:p-16 shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6 flex flex-col">
                  <span className="font-label-sm text-label-sm uppercase tracking-[0.3em] text-secondary font-semibold mb-3 block">
                    Private Client Services · 24/7 Global Liaison
                  </span>
                  <h2 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg text-primary tracking-tight mb-4">
                    Private Client Concierge &amp; Bespoke Inquiries
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                    Require size assistance, custom last modifications, or
                    unlisted patina consultations? Our master clientelers in
                    Paris and Civitanova Marche are at your immediate personal
                    disposal.
                  </p>
                  <div className="flex items-center gap-4 text-secondary font-label-sm text-label-sm uppercase tracking-wider flex-wrap">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-secondary"></span>{" "}
                      Monday – Sunday Dedicated Coverage
                    </span>
                    <span>·</span>
                    <span>Average Response: Under 15 Minutes</span>
                  </div>
                </div>
                <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-surface-container-low p-6 flex flex-col justify-between shadow-sm">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 bg-primary text-on-primary flex items-center justify-center">
                          <span className="material-symbols-outlined text-[20px]">
                            chat
                          </span>
                        </div>
                        <span className="font-label-sm text-[10px] tracking-widest uppercase bg-surface-container-high px-2 py-0.5 text-primary font-semibold">
                          Priority
                        </span>
                      </div>
                      <h4 className="font-headline-sm text-headline-sm text-primary mb-1">
                        WhatsApp VIP Liaison
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">
                        Direct private chat with our Senior Shoemaker for sizing
                        &amp; orders.
                      </p>
                      <span className="font-label-md text-label-md font-semibold text-primary block mb-6">
                        +91 9654738357
                      </span>
                    </div>
                    <a
                      className="w-full py-3 bg-primary hover:bg-surface-container-high text-on-primary hover:text-on-surface font-label-sm text-label-sm uppercase tracking-widest text-center transition-colors font-semibold flex items-center justify-center gap-2"
                      href="https://wa.me/919654738357"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span>Chat with VIP Concierge</span>
                      <span className="material-symbols-outlined text-[16px]">
                        arrow_outward
                      </span>
                    </a>
                  </div>
                  <div className="bg-surface-container-low p-6 flex flex-col justify-between shadow-sm">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 bg-primary text-on-primary flex items-center justify-center">
                          <span className="material-symbols-outlined text-[20px]">
                            mail
                          </span>
                        </div>
                        <span className="font-label-sm text-[10px] tracking-widest uppercase bg-surface-container-high px-2 py-0.5 text-primary font-semibold">
                          Inquiries
                        </span>
                      </div>
                      <h4 className="font-headline-sm text-headline-sm text-primary mb-1">
                        Private Client Email
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">
                        Formal bespoke fitting requests and atelier monographs.
                      </p>
                      <span className="font-label-md text-label-md font-semibold text-primary block mb-6 truncate">
                        irfanrifu11@gmail.com
                      </span>
                    </div>
                    <a
                      className="w-full py-3 bg-surface-container-lowest hover:bg-primary hover:text-on-primary text-primary font-label-sm text-label-sm uppercase tracking-widest text-center transition-colors font-semibold flex items-center justify-center gap-2"
                      href="mailto:irfanrifu11@gmail.com?subject=Private%20Client%20Inquiry%20-%20Maison%20Chaussurer"
                    >
                      <span>Send Direct Inquiry</span>
                      <span className="material-symbols-outlined text-[16px]">
                        mail
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div
          className={`fixed bottom-6 right-6 z-50 bg-primary text-on-primary p-4 shadow-2xl transition-all duration-300 flex items-center gap-4 max-w-md ${
            toast
              ? "translate-y-0 opacity-100"
              : "translate-y-24 opacity-0 pointer-events-none"
          }`}
        >
          <div className="w-8 h-8 rounded-full bg-secondary-fixed text-primary flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[18px]">check</span>
          </div>
          <div className="flex-1 min-w-0">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed block">
              Archival Bag Updated
            </span>
            <p className="font-body-sm text-body-sm truncate text-on-primary font-medium">
              {toast}
            </p>
          </div>
          <button
            className="text-on-primary hover:text-secondary-fixed"
            onClick={() => setToast(null)}
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>
      </div>
    </main>
  );
}
