"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navItems, siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";

const sectionIds = ["home", ...navItems.map((item) => item.id)];

const menuVariants = {
  hidden: { opacity: 0, clipPath: "inset(0 0 100% 0)" },
  visible: {
    opacity: 1,
    clipPath: "inset(0 0 0% 0)",
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const },
  },
  exit: {
    opacity: 0,
    clipPath: "inset(0 0 100% 0)",
    transition: { duration: 0.45, ease: [0.7, 0, 0.84, 0] as const },
  },
};

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[75]">
        <div className="container-x">
          <div
            className={cn(
              "mt-3 flex items-center justify-between rounded-full border px-3 py-2.5 transition-all duration-500 sm:px-4",
              scrolled || open
                ? "glass-dark border-white/10 shadow-[0_12px_50px_rgba(0,0,0,0.35)]"
                : "border-transparent bg-transparent",
            )}
          >
            <a
              href="#home"
              onClick={() => setOpen(false)}
              className="group flex items-center gap-3 rounded-full pr-2"
            >
              <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-full border border-white/15 bg-white/[0.03]">
                <span className="absolute inset-0 bg-gradient-to-br from-electric/40 via-violet/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="relative font-mono text-[10px] font-semibold tracking-[-0.02em]">
                  AI
                </span>
              </span>
              <span className="hidden font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-paper/85 sm:block">
                Ali Irfan
              </span>
            </a>

            <nav
              className="hidden items-center gap-1 lg:flex"
              aria-label="Primary navigation"
            >
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-[12px] font-medium tracking-[-0.01em] transition-colors duration-300",
                    active === item.id
                      ? "text-paper"
                      : "text-muted hover:text-paper",
                  )}
                >
                  {active === item.id ? (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-full border border-white/10 bg-white/[0.055]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  ) : null}
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <div className="hidden items-center gap-2 pr-2 xl:flex">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
                  Available
                </span>
              </div>

              <a
                href="#contact"
                className="group hidden items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-[12px] font-medium transition-colors duration-300 hover:border-white/30 hover:bg-white/[0.08] sm:flex"
              >
                Let&apos;s talk
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <button
                type="button"
                onClick={() => setOpen((value) => !value)}
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label={open ? "Close menu" : "Open menu"}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-paper transition-colors hover:bg-white/[0.07] lg:hidden"
              >
                {open ? (
                  <X className="h-4 w-4" />
                ) : (
                  <Menu className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            variants={reduceMotion ? undefined : menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-[70] flex flex-col overflow-y-auto bg-ink px-5 pb-10 pt-28 sm:px-8 lg:hidden"
          >
            <div className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-electric/15 blur-[110px]" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-violet/10 blur-[110px]" />
            <div className="pointer-events-none absolute inset-0 grid-lines opacity-40" />

            <div className="relative flex flex-1 flex-col">
              <p className="eyebrow mb-8">Navigation</p>
              <nav className="flex flex-col" aria-label="Mobile navigation">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    initial={
                      reduceMotion ? false : { opacity: 0, y: 28 }
                    }
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.65,
                      delay: reduceMotion ? 0 : 0.08 + index * 0.055,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="group flex items-center justify-between border-b border-white/10 py-4"
                  >
                    <span className="flex items-baseline gap-3">
                      <span className="font-mono text-[10px] text-muted">
                        {item.index}
                      </span>
                      <span className="display text-[clamp(2.4rem,10vw,4rem)] leading-none transition-colors duration-300 group-hover:text-electric-soft">
                        {item.label}
                      </span>
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-muted transition-all duration-300 group-hover:rotate-45 group-hover:text-paper" />
                  </motion.a>
                ))}
              </nav>

              <motion.div
                initial={reduceMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45, duration: 0.5 }}
                className="mt-auto flex flex-col gap-6 pt-12"
              >
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-5"
                >
                  <div>
                    <p className="eyebrow mb-1">Start a project</p>
                    <p className="text-sm text-paper">{siteConfig.email}</p>
                  </div>
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-paper text-ink">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </a>
                <div className="flex items-center justify-between">
                  <p className="eyebrow">© 2026 Ali Irfan</p>
                  <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
                    Kerala, India
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
