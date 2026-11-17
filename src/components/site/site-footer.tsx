import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="w-full bg-surface-container-lowest">
      <div className="bg-surface-container-low py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="font-label-sm text-label-sm uppercase tracking-[0.25em] text-secondary block mb-3">
              Atelier Communications · Private Invitations
            </span>
            <h3 className="font-headline-md text-headline-md text-primary mb-3">
              The Private Salon Journal
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
              Receive discreet correspondence concerning unlisted seasonal
              runs, private salon fittings in Paris, and commissioned bespoke
              releases.
            </p>
          </div>
          <div className="lg:col-span-5">
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                className="bg-surface-container-lowest text-on-surface placeholder:text-outline px-5 py-4 font-label-md text-label-md uppercase tracking-wider flex-1 focus:outline-none focus:ring-1 focus:ring-primary rounded-none"
                placeholder="ENTER YOUR EMAIL ADDRESS"
                type="email"
              />
              <button
                className="bg-primary hover:bg-surface-container-high text-on-primary hover:text-on-surface px-8 py-4 font-label-md text-label-md uppercase tracking-[0.15em] transition-all font-semibold rounded-none shrink-0"
                type="button"
              >
                Subscribe
              </button>
            </form>
            <span className="font-label-sm text-[11px] text-outline mt-3 block">
              By submitting your details, you agree to the Maison&apos;s
              Private Client Terms.
            </span>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 pr-6">
            <div className="flex items-center gap-3 mb-6">
              <Image
                alt="Maison Emblem Logo"
                className="h-8 w-auto object-contain"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCl34MtCuVBwyt09rIwkvEIl3Z19Q0WJNV8eAKMn01q06Fy4SMZ4YEpXPvWHg8VZfNL4Ltgu2s0HEyF7WgOmg6YwPT_lsE0b5O6CVWeaEIJn6t5c00zY0fJOflkzSbJyra2TOitUWPNpi-_-TKCBxKlXX4RA7PmbWqWMDTsHJrZLiC0zplgRDi-wsHlOIbhNr_EhNu5P9pyO9Rfs9xHj_yyRjBorXPm4rfiIOsSt0M"
                width={32}
                height={32}
              />
              <span className="font-headline-sm text-headline-sm uppercase tracking-[0.2em] text-primary font-medium">
                Maison Chaussurer
              </span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8 max-w-md">
              Founded in 1984, our Parisian atelier orchestrates sculptural
              lasts, rare French calfskin, and architectural footwear designed
              for longevity, quiet poise, and transcendent refinement.
            </p>
            <div className="p-5 bg-surface-container-low rounded-none">
              <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-secondary block mb-2 font-semibold">
                Direct Salon Concierge
              </span>
              <div className="space-y-3">
                <a
                  className="flex items-center gap-2.5 font-label-md text-label-md text-primary hover:text-secondary transition-colors"
                  href="https://wa.me/919654738357"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                  <span>WhatsApp VIP Concierge: +91 9654738357</span>
                </a>
                <a
                  className="flex items-center gap-2.5 font-label-md text-label-md text-primary hover:text-secondary transition-colors"
                  href="mailto:irfanrifu11@gmail.com"
                >
                  <span className="material-symbols-outlined text-[18px]">mail</span>
                  <span>Private Client Email: irfanrifu11@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-label-md text-label-md uppercase tracking-[0.2em] text-primary mb-6 font-semibold">
              Curated Collections
            </h4>
            <ul className="space-y-3 font-body-sm text-body-sm text-on-surface-variant">
              <li>
                <Link className="hover:text-primary transition-colors" href="/the-palazzo-loafer">
                  The Palazzo Loafer
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="/the-palazzo-loafer">
                  The Hand-Sewn Loafer
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="/">
                  Architectural Heels
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="/">
                  Chelsea Boots &amp; Bootmakers
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="/">
                  Bespoke Sneaker Silhouette
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="/">
                  Exotic Tannery Archive
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-label-md text-label-md uppercase tracking-[0.2em] text-primary mb-6 font-semibold">
              Heritage &amp; Maison
            </h4>
            <ul className="space-y-3 font-body-sm text-body-sm text-on-surface-variant">
              <li>
                <Link className="hover:text-primary transition-colors" href="/#manifesto">
                  The 1984 Paris Atelier
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="/#manifesto">
                  Lastmaking &amp; Tannery Sourcing
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="/#manifesto">
                  Artisanal Patina Craft
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="/#manifesto">
                  Sustainability &amp; Repair Manifesto
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="/#manifesto">
                  Press &amp; Monograph
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="/#manifesto">
                  Careers in Paris &amp; Milan
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-label-md text-label-md uppercase tracking-[0.2em] text-primary mb-6 font-semibold">
              Client Concierge
            </h4>
            <ul className="space-y-3 font-body-sm text-body-sm text-on-surface-variant">
              <li>
                <Link className="hover:text-primary transition-colors" href="/#concierge">
                  Book Private Fitting
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="/#concierge">
                  Complimentary Courier Shipping
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="/#concierge">
                  Bespoke Shoe Care Guide
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="/#concierge">
                  Returns &amp; Discreet Exchange
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="#">
                  VIP Client Profile
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="/#concierge">
                  Authentication Certificate
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-surface-container-low py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-6 font-label-sm text-label-sm uppercase tracking-widest text-outline">
            <span className="text-primary font-medium">
              © 2025 Maison Chaussurer · Atelier 1984. All rights reserved.
            </span>
            <Link className="hover:text-primary transition-colors" href="/#manifesto">
              Privacy Policy
            </Link>
            <Link className="hover:text-primary transition-colors" href="/#manifesto">
              Legal Notice
            </Link>
            <Link className="hover:text-primary transition-colors" href="/#manifesto">
              Bespoke Charter
            </Link>
          </div>
          <div className="flex items-center gap-5 text-on-surface-variant">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">
              Guaranteed Secure Settlement
            </span>
            <div className="flex items-center gap-3 text-primary">
              <span className="material-symbols-outlined text-[20px]">credit_card</span>
              <span className="material-symbols-outlined text-[20px]">
                account_balance_wallet
              </span>
              <span className="material-symbols-outlined text-[20px]">verified_user</span>
              <span className="material-symbols-outlined text-[20px]">shield</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
