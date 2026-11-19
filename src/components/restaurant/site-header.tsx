"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import {
  ChefHat,
  ClipboardList,
  Menu as MenuIcon,
  ShieldCheck,
  ShoppingBag,
  X,
} from "lucide-react";
import { useRestaurant } from "./restaurant-provider";
import { ADMIN_PASSWORD, localStore, useLocalValue } from "@/lib/local-store";
import { siteConfig } from "@/lib/data";

const links = [
  { href: "/", label: "Home" },
  { href: "/#menu", label: "Menu" },
  { href: "/track-order", label: "Track Order" },
  { href: "/reserve", label: "Reserve" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const { cartCount, setCartOpen } = useRestaurant();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [adminOpen, setAdminOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const isAdmin = useLocalValue<boolean>(localStore.keys.admin, false);

  const openAdmin = () => {
    setPassword("");
    setError("");
    if (localStore.isAdmin()) {
      router.push("/admin");
      return;
    }
    setAdminOpen(true);
  };

  const handleAdminLogin = (event: React.FormEvent) => {
    event.preventDefault();
    if (password !== ADMIN_PASSWORD) {
      setError("Incorrect password. Try again.");
      return;
    }
    localStore.setAdmin(true);
    setAdminOpen(false);
    router.push("/admin");
  };

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-outline-variant bg-surface/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
          <Link href="/" className="group flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-on-primary shadow-sm transition-transform group-hover:rotate-6">
              <ChefHat size={20} />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-xl tracking-wide text-on-surface">
                {siteConfig.name}
              </span>
              <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.32em] text-secondary">
                {siteConfig.tagline}
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((link) => {
              const active = pathname === link.href.split("#")[0] && !link.href.includes("#");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    active
                      ? "text-primary"
                      : "text-on-surface-variant hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={openAdmin}
              className="hidden items-center gap-2 rounded-full border border-outline px-4 py-2 text-xs font-semibold uppercase tracking-widest text-on-surface-variant transition-colors hover:border-primary hover:text-primary sm:flex"
            >
              <ShieldCheck size={15} />
              Admin
            </button>
            <button
              type="button"
              onClick={() => setCartOpen(true)}
              aria-label="Open cart"
              className="relative flex h-10 w-10 items-center justify-center rounded-full bg-primary text-on-primary transition-transform hover:scale-105"
            >
              <ShoppingBag size={18} />
              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-brand px-1 text-[10px] font-bold text-white">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              type="button"
              onClick={() => setMobileOpen((current) => !current)}
              aria-label="Toggle navigation"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-outline text-on-surface lg:hidden"
            >
              {mobileOpen ? <X size={18} /> : <MenuIcon size={18} />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="border-t border-outline-variant bg-surface px-5 py-4 lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-on-surface-variant hover:bg-surface-container hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  openAdmin();
                }}
                className="mt-2 flex items-center gap-2 rounded-lg bg-surface-container px-3 py-2.5 text-sm font-semibold text-primary"
              >
                <ClipboardList size={16} />
                Admin panel
              </button>
            </div>
          </div>
        )}
      </header>

      {adminOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 px-4 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-2xl border border-outline-variant bg-surface p-7 shadow-2xl">
            <div className="mb-5 flex items-start justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-secondary">
                  Staff access
                </p>
                <h2 className="mt-1 font-display text-2xl text-on-surface">
                  Admin login
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setAdminOpen(false)}
                aria-label="Close admin login"
                className="text-on-surface-variant hover:text-primary"
              >
                <X size={18} />
              </button>
            </div>
            <form onSubmit={handleAdminLogin} className="space-y-4">
              <div>
                <label
                  htmlFor="admin-password"
                  className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-on-surface-variant"
                >
                  Password
                </label>
                <input
                  id="admin-password"
                  type="password"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                    setError("");
                  }}
                  autoFocus
                  className="w-full rounded-xl border border-outline bg-surface px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                  placeholder="Enter admin password"
                />
                {error && <p className="mt-2 text-xs text-error">{error}</p>}
              </div>
              <button
                type="submit"
                className="w-full rounded-xl bg-primary py-3 text-sm font-semibold uppercase tracking-widest text-on-primary transition-colors hover:bg-brand-dark"
              >
                Enter dashboard
              </button>
            </form>
            {isAdmin && (
              <Link
                href="/admin"
                className="mt-4 block text-center text-xs font-semibold text-secondary hover:text-primary"
              >
                Go to dashboard
              </Link>
            )}
          </div>
        </div>
      )}
    </>
  );
}
