"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  CalendarDays,
  ChefHat,
  ClipboardList,
  LogOut,
  UtensilsCrossed,
} from "lucide-react";
import { localStore } from "@/lib/local-store";

const nav = [
  { href: "/admin", label: "Orders", icon: ClipboardList },
  { href: "/admin/menu", label: "Menu items", icon: UtensilsCrossed },
  { href: "/admin/reservations", label: "Reservations", icon: CalendarDays },
];

export function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  const logout = () => {
    localStore.setAdmin(false);
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-surface-container-low lg:flex">
      <aside className="border-b border-outline-variant bg-surface lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-64 lg:flex-col lg:border-b-0 lg:border-r">
        <div className="flex items-center gap-3 px-6 py-6">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-on-primary">
            <ChefHat size={20} />
          </span>
          <div>
            <p className="font-display text-lg leading-none text-on-surface">
              Saffron Admin
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-secondary">
              Management panel
            </p>
          </div>
        </div>
        <nav className="flex gap-2 overflow-x-auto px-4 pb-4 lg:flex-col lg:overflow-visible">
          {nav.map(({ href, label, icon: Icon }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`flex shrink-0 items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                  active
                    ? "bg-primary text-on-primary"
                    : "text-on-surface-variant hover:bg-surface-container hover:text-primary"
                }`}
              >
                <Icon size={17} />
                {label}
              </Link>
            );
          })}
        </nav>
        <div className="mt-auto hidden px-4 pb-6 lg:block">
          <button
            type="button"
            onClick={logout}
            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-on-surface-variant transition-colors hover:bg-error-container hover:text-error"
          >
            <LogOut size={17} />
            Log out
          </button>
        </div>
      </aside>

      <main className="min-w-0 flex-1 px-5 py-8 sm:px-10 lg:py-12">{children}</main>
    </div>
  );
}
