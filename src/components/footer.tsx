import { ArrowUp, ArrowUpRight, Mail } from "lucide-react";
import { navItems, siteConfig } from "@/lib/data";

export function Footer() {
  const year = 2026;

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.08] bg-ink">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-64 w-[44rem] -translate-x-1/2 rounded-full bg-electric/[0.04] blur-[120px]" />
        <div className="absolute bottom-0 right-[10%] h-52 w-52 rounded-full bg-violet/[0.06] blur-[100px]" />
      </div>

      <div className="container-x relative pt-16 sm:pt-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <a
              href="#home"
              className="group inline-flex items-center gap-3"
              aria-label="Ali Irfan — back to top"
            >
              <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-full border border-white/15 bg-white/[0.03]">
                <span className="absolute inset-0 bg-gradient-to-br from-electric/40 via-violet/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="relative font-mono text-[10px] font-semibold">
                  AI
                </span>
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/80">
                Ali Irfan
              </span>
            </a>

            <p className="mt-6 max-w-sm text-[clamp(1.4rem,2.4vw,2rem)] font-medium leading-[1.2] tracking-[-0.04em]">
              Turning ideas into{" "}
              <span className="font-serif-italic text-gradient">
                digital experiences.
              </span>
            </p>

            <a
              href={`mailto:${siteConfig.email}`}
              className="group mt-6 inline-flex items-center gap-2.5 text-[12px] text-muted transition-colors hover:text-paper"
            >
              <Mail className="h-3.5 w-3.5 text-electric-soft" />
              <span className="link-underline">{siteConfig.email}</span>
              <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="lg:col-span-3 lg:col-start-7">
            <p className="eyebrow">Navigation</p>
            <nav
              aria-label="Footer navigation"
              className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3"
            >
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-[12px] text-muted transition-colors hover:text-paper"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#home"
                className="text-[12px] text-muted transition-colors hover:text-paper"
              >
                Home
              </a>
            </nav>
          </div>

          <div className="lg:col-span-2">
            <p className="eyebrow">Socials</p>
            <div className="mt-5 flex flex-col gap-3">
              {siteConfig.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group inline-flex items-center gap-1.5 text-[12px] text-muted transition-colors hover:text-paper"
                >
                  {social.label}
                  <ArrowUpRight className="h-3 w-3 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 lg:text-right">
            <p className="eyebrow">Back to top</p>
            <a
              href="#home"
              aria-label="Back to top"
              className="group mt-5 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] transition-colors duration-300 hover:border-electric/40 hover:bg-electric/10"
            >
              <ArrowUp className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/[0.08] py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[8px] uppercase tracking-[0.13em] text-white/30">
            © {year} Ali Irfan. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <p className="font-mono text-[8px] uppercase tracking-[0.13em] text-white/30">
              Your City, Country
            </p>
            <span className="h-3 w-px bg-white/10" />
            <p className="font-mono text-[8px] uppercase tracking-[0.13em] text-white/30">
              Designed & built with intention
            </p>
          </div>
        </div>

        <a
          href="#home"
          aria-label="Ali Irfan — back to top"
          className="group block border-t border-white/[0.08] pt-4"
        >
          <h2 className="display -mb-[0.07em] select-none whitespace-nowrap text-[clamp(3.8rem,15.2vw,15.5rem)] uppercase leading-[0.76] text-paper transition-colors duration-500">
            Ali{" "}
            <span className="text-stroke transition-all duration-700 group-hover:text-paper">
              Irfan
            </span>
            <span className="text-electric">.</span>
          </h2>
        </a>
      </div>
    </footer>
  );
}
