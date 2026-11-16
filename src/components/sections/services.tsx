"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Gauge,
  MonitorSmartphone,
  PenTool,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { services } from "@/lib/data";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  code: Code2,
  pen: PenTool,
  devices: MonitorSmartphone,
  sparkles: Sparkles,
  gauge: Gauge,
};

const accents = [
  "from-electric/[0.13] via-transparent to-transparent",
  "from-violet/[0.12] via-transparent to-transparent",
  "from-cyan/[0.09] via-transparent to-transparent",
  "from-violet/[0.1] via-transparent to-transparent",
  "from-electric/[0.1] via-transparent to-transparent",
];

const spans = [
  "lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-4",
];

export function Services() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="services"
      className="section-space relative overflow-hidden border-t border-white/[0.06]"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[28rem] w-[46rem] -translate-x-1/2 rounded-full bg-electric/[0.04] blur-[150px]" />
      </div>

      <div className="container-x">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.55fr] lg:items-end">
          <SectionHeading
            index="05"
            label="Services"
            title="How I can help"
            accent="bring it to life."
          />
          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-md lg:pb-2"
          >
            <p className="text-sm leading-[1.8] text-muted">
              Based in Kerala and working with clients worldwide, whether
              you&apos;re starting with a blank page or refining something
              already in motion — I bring design thinking and front-end craft to
              every stage of the process.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <span className="h-px flex-1 bg-white/10" />
              <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-electric-soft">
                Available for select projects
              </span>
            </div>
          </motion.div>
        </div>

        <div className="mt-14 grid gap-3 md:grid-cols-2 lg:grid-cols-12 lg:gap-4">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] ?? Sparkles;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: reduceMotion ? 0 : 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.75,
                  delay: reduceMotion ? 0 : (index % 3) * 0.07,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={spans[index]}
              >
                <SpotlightCard
                  className={cn(
                    "group relative flex h-full min-h-[17rem] flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.022] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-white/[0.16] hover:bg-white/[0.035] sm:p-7",
                    index < 2 ? "lg:min-h-[19.5rem]" : "",
                  )}
                >
                  <div
                    className={cn(
                      "pointer-events-none absolute inset-0 bg-gradient-to-br opacity-70 transition-opacity duration-700 group-hover:opacity-100",
                      accents[index],
                    )}
                  />
                  <div className="pointer-events-none absolute -bottom-20 -right-10 select-none text-[12rem] font-medium leading-none tracking-[-0.08em] text-white/[0.018] transition-all duration-700 group-hover:text-white/[0.035]">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="relative flex items-start justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/[0.09] bg-white/[0.04] text-electric-soft transition-colors duration-500 group-hover:border-electric/25 group-hover:bg-electric/[0.08]">
                      <Icon className="h-5 w-5" strokeWidth={1.4} />
                    </span>
                    <span className="grid h-8 w-8 place-items-center rounded-full border border-white/10 text-white/50 transition-all duration-500 group-hover:rotate-45 group-hover:border-electric/40 group-hover:text-paper">
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>

                  <div className="relative mt-auto pt-10">
                    <h3
                      className={cn(
                        "max-w-[14ch] font-medium tracking-[-0.045em]",
                        index < 2 ? "text-[1.8rem] sm:text-[2.2rem]" : "text-[1.55rem]",
                      )}
                    >
                      {service.title}
                    </h3>
                    <p className="mt-3 max-w-sm text-[12px] leading-[1.8] text-muted">
                      {service.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {service.deliverables.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/[0.08] bg-ink/20 px-2.5 py-1 font-mono text-[7px] uppercase tracking-[0.11em] text-white/50"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}

          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-2 lg:col-span-12"
          >
            <a
              href="#contact"
              className="group relative flex flex-col justify-between gap-6 overflow-hidden rounded-2xl border border-white/[0.1] bg-gradient-to-br from-white/[0.06] to-white/[0.015] p-6 transition-colors duration-500 hover:border-electric/30 sm:flex-row sm:items-center sm:p-7"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(98,120,255,0.12),transparent_55%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
              <div className="relative">
                <p className="eyebrow mb-2">The next project</p>
                <p className="text-[clamp(1.4rem,2.8vw,2.2rem)] font-medium tracking-[-0.04em]">
                  Have something in mind?{" "}
                  <span className="font-serif-italic text-paper/60">
                    Let&apos;s build it together.
                  </span>
                </p>
              </div>
              <span className="relative grid h-14 w-14 shrink-0 place-items-center rounded-full border border-white/15 bg-white/[0.04] transition-all duration-500 group-hover:rotate-45 group-hover:border-electric/50 group-hover:bg-electric/15">
                <ArrowUpRight className="h-5 w-5" />
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
