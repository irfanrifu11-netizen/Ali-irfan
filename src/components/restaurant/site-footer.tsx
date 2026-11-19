import Link from "next/link";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-outline-variant bg-surface-container-low">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-4">
        <div>
          <p className="font-display text-2xl text-on-surface">{siteConfig.name}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-on-surface-variant">
            Honest food, generous portions and a table that always feels like
            yours.
          </p>
        </div>
        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Explore
          </h3>
          <div className="flex flex-col gap-2.5 text-sm text-on-surface-variant">
            <Link href="/#menu" className="hover:text-primary">
              Menu
            </Link>
            <Link href="/track-order" className="hover:text-primary">
              Track order
            </Link>
            <Link href="/reserve" className="hover:text-primary">
              Reserve a table
            </Link>
            <Link href="/checkout" className="hover:text-primary">
              Checkout
            </Link>
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Visit us
          </h3>
          <div className="space-y-3 text-sm text-on-surface-variant">
            <p className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-secondary" />
              {siteConfig.location}
            </p>
            <p className="flex items-center gap-2">
              <Clock3 size={16} className="shrink-0 text-secondary" />
              Open daily 11:00 am – 11:00 pm
            </p>
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Contact
          </h3>
          <div className="space-y-3 text-sm text-on-surface-variant">
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 hover:text-primary"
            >
              <Phone size={16} className="text-secondary" />
              {siteConfig.phone}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-2 hover:text-primary"
            >
              <Mail size={16} className="text-secondary" />
              {siteConfig.email}
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-outline-variant px-5 py-5 text-center text-xs text-on-surface-variant sm:px-8">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
