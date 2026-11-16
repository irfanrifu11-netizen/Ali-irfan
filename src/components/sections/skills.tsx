"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Atom,
  Braces,
  FileCode2,
  Layers,
  MonitorSmartphone,
  Paintbrush,
  PenTool,
  Triangle,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { skills } from "@/lib/data";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  html: FileCode2,
  css: Paintbrush,
  javascript: Braces,
  react: Atom,
  nextjs: Triangle,
  uiux: PenTool,
  figma: Layers,
  web: MonitorSmartphone,
};

const accentMap = [
  "text-[#ff8f70]",
  "text-[#6cb8ff]",
  "text-[#f5d76e]",
  "text-[#67e8f9]",
  "text-paper",
  "text-[#c4b5fd]",
  "text-[#f18ac1]",
  "text-[#8fa0ff]",
];

export function Skills() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="skills" className="section-space relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-px w-[78%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute right-[10%] top-[20%] h-80 w-80 rounded-full bg-electric/[0.055] blur-[130px]" />
      </div>

      <div className="container-x">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.52fr] lg:items-end">
          <SectionHeading
            index="02"
            label="Skills & toolkit"
            title="A toolkit for making"
            accent="ideas real."
          />
          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-md lg:pb-2"
          >
            <p className="text-sm leading-[1.8] text-muted">
              From first sketch to final deploy — a focused set of tools,
              sharpened through practice and used with intention. No noise, just
              the right instrument for the idea.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/50">
                08 disciplines
              </span>
              <span className="h-px flex-1 bg-white/10" />
              <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-electric-soft">
                Always learning
              </span>
            </div>
          </motion.div>
        </div>

        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {skills.map((skill, index) => {
            const Icon = iconMap[skill.icon] ?? Braces;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: reduceMotion ? 0 : 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: reduceMotion ? 0 : (index % 4) * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <SpotlightCard className="group relative flex h-full min-h-[15rem] flex-col rounded-2xl border border-white/[0.08] bg-white/[0.022] p-5 transition-colors duration-500 hover:border-white/[0.16] sm:min-h-[16.5rem] sm:p-6">
                  <div className="flex items-start justify-between">
                    <span
                      className={cn(
                        "grid h-10 w-10 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.035] transition-colors duration-300 group-hover:border-white/15 group-hover:bg-white/[0.06]",
                        accentMap[index],
                      )}
                    >
                      <Icon className="h-[18px] w-[18px]" strokeWidth={1.5} />
                    </span>
                    <span className="font-mono text-[9px] tracking-[0.14em] text-white/50">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="mt-auto pt-9">
                    <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-muted">
                      {skill.category}
                    </p>
                    <h3 className="mt-1.5 text-xl font-medium tracking-[-0.035em]">
                      {skill.name}
                    </h3>
                    <p className="mt-2.5 text-[11px] leading-relaxed text-muted/85">
                      {skill.description}
                    </p>

                    <div className="mt-5">
                      <div className="mb-2 flex items-center justify-between">
                        <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-white/50">
                          Proficiency
                        </span>
                        <span className="font-mono text-[9px] text-white/55">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-[3px] overflow-hidden rounded-full bg-white/[0.07]">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true, amount: 0.5 }}
                          transition={{
                            duration: reduceMotion ? 0.01 : 1.2,
                            delay: reduceMotion ? 0 : 0.25 + (index % 4) * 0.06,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="h-full rounded-full bg-gradient-to-r from-electric via-electric-soft to-violet"
                        />
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
