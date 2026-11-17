"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/the-palazzo-loafer", label: "The Palazzo Loafer" },
  { href: "/#collection", label: "Collections" },
  { href: "/#archive", label: "New Arrivals" },
  { href: "/#manifesto", label: "About Us" },
  { href: "/#concierge", label: "Private Concierge" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [dismissed, setDismissed] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50">
      {!dismissed && (
        <div className="bg-primary text-on-primary py-2 px-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between font-label-sm text-label-sm uppercase tracking-widest">
            <div className="hidden md:flex items-center gap-2">
              <span className="text-secondary-fixed font-semibold">EUR €</span>
              <span className="text-outline">/</span>
              <span>GLOBAL</span>
            </div>
            <div className="flex-1 text-center truncate px-4 flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed shrink-0"></span>
              <span className="truncate">
                Complimentary Worldwide Courier Delivery On All Orders — Bespoke
                Made-to-Measure Private Fittings Available in Paris &amp; Milan
              </span>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <button
                className="hover:text-secondary-fixed transition-colors text-on-primary"
                type="button"
              >
                SALON LOCATIONS
              </button>
              <button
                aria-label="Dismiss alert"
                className="hover:text-secondary-fixed transition-colors flex items-center text-on-primary"
                type="button"
                onClick={() => setDismissed(true)}
              >
                <span className="material-symbols-outlined text-[14px]">close</span>
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.03)]">
        <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link className="flex items-center gap-3.5 group" href="/">
              <Image
                alt="Maison Emblem Logo"
                className="h-8 w-auto object-contain"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCl34MtCuVBwyt09rIwkvEIl3Z19Q0WJNV8eAKMn01q06Fy4SMZ4YEpXPvWHg8VZfNL4Ltgu2s0HEyF7WgOmg6YwPT_lsE0b5O6CVWeaEIJn6t5c00zY0fJOflkzSbJyra2TOitUWPNpi-_-TKCBxKlXX4RA7PmbWqWMDTsHJrZLiC0zplgRDi-wsHlOIbhNr_EhNu5P9pyO9Rfs9xHj_yyRjBorXPm4rfiIOsSt0M"
                width={32}
                height={32}
              />
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm tracking-[0.22em] uppercase text-primary font-medium leading-none">
                  Maison Chaussurer
                </span>
                <span className="font-label-sm text-label-sm tracking-[0.3em] uppercase text-secondary mt-1">
                  Atelier 1984 · Paris
                </span>
              </div>
            </Link>
          </div>
          <nav className="hidden xl:flex items-center gap-8 font-label-md text-label-md uppercase tracking-[0.14em]">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1px] after:bg-primary after:transition-all ${
                    active
                      ? "text-primary font-semibold"
                      : "text-on-surface-variant hover:text-on-surface"
                  }`}
                  href={item.href}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-5">
            <button
              aria-label="Search Catalogue"
              className="text-on-surface-variant hover:text-on-surface transition-colors flex items-center"
              type="button"
            >
              <span className="material-symbols-outlined text-[22px]">search</span>
            </button>
            <Link
              aria-label="Customer Account"
              className="text-on-surface-variant hover:text-on-surface transition-colors flex items-center"
              href="#"
            >
              <span className="material-symbols-outlined text-[22px]">person</span>
            </Link>
            <Link
              aria-label="Saved Items"
              className="text-on-surface-variant hover:text-on-surface transition-colors relative flex items-center"
              href="#"
            >
              <span className="material-symbols-outlined text-[22px]">favorite</span>
              <span className="absolute -top-1.5 -right-2 bg-secondary text-on-secondary font-label-sm text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                4
              </span>
            </Link>
            <Link
              aria-label="Shopping Bag"
              className="flex items-center gap-2 bg-surface-container-low hover:bg-surface-container-high px-3 py-1.5 rounded transition-colors text-on-surface"
              href="/shopping-bag"
            >
              <span className="material-symbols-outlined text-[20px]">
                shopping_bag
              </span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                Bag
              </span>
              <span className="bg-primary text-on-primary font-label-sm text-[10px] px-1.5 py-0.5 rounded-full font-bold">
                02
              </span>
            </Link>
            <div className="pl-2 ml-1">
              <Link href="#">
                <Image
                  alt="Profile"
                  className="w-8 h-8 rounded-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAptC_FT1WxQA47xDZjvbJvfKRueQDBOGMBSdIym4BEZxDL_1MoapEBHam4euLo9RWHaHxLeXuvecGcCNz67rYexiqZXA63Gt1tRRi1Fip64RshacZYcrxPdUonMwsmKfIzr-WfEkdZxvjCr87CAcRbOgIXe6a1F_Eijqpe1wafercA3RhJu-_BVMwceXfaxInxh8M1iLBZsOnfB82qXxINfnouUljOwvrjX6xbnjQ"
                  width={32}
                  height={32}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
