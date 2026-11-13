"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowUpRight,
  Award,
  Briefcase,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { timeline, type TimelineItem } from "@/lib/data";

const iconMap = {
  Experience: Briefcase,
  Education: GraduationCap,
  Achievement: Award,
};

function ExperienceRow({
  item,
  index,
  isLast,
}: {
  item: TimelineItem;
  index: number;
  isLast: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const current = item.period.includes("Present");

  return (
    <motion.article
      initial={{ opacity: 0, y: reduceMotion ? 0 : 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.8,
        delay: reduceMotion ? 0 : index * 0.06,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative grid gap-4 pb-10 pl-8 sm:grid-cols-[9.5rem_1fr] sm:gap-8 sm:pl-12 lg:pb-12"
    >
      <span className="absolute left-0 top-1.5 grid h-4 w-4 place-items-center rounded-full border border-white/20 bg-ink">
        <span
          className={`h-1.5 w-1.5 rounded-full ${
            current ? "bg-electric shadow-[0_0_10px_2px_rgba(98,120,255,0.5)]" : "bg-white/35"
          }`}
        />
        {current ? (
          <span className="absolute inset-0 animate-ping rounded-full border border-electric/40" />
        ) : null}
      </span>

      <div>
        <p className="font-mono text-[9px] uppercase tracking-[0.13em] text-muted">
          {item.period}
        </p>
        {isLast ? null : (
          <span className="mt-2 hidden h-px w-8 bg-white/10 sm:block" />
        )}
      </div>

      <div className="rounded-2xl border border-transparent p-4 transition-all duration-500 group-hover:border-white/[0.08] group-hover:bg-white/[0.02] sm:-m-4 sm:p-4">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-medium tracking-[-0.035em] text-paper sm:text-[1.35rem]">
              {item.role}
            </h3>
            <p className="mt-1 text-[11px] text-muted">{item.company}</p>
          </div>
          <span className="rounded-full border border-white/[0.08] px-2.5 py-1 font-mono text-[7px] uppercase tracking-[0.12em] text-white/35">
            {item.type}
          </span>
        </div>
        <p className="mt-3 max-w-xl text-[12px] leading-[1.8] text-muted/80">
          {item.description}
        </p>
      </div>
    </motion.article>
  );
}

export function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 80%", "end 55%"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    mass: 0.5,
  });
  const travelY = useTransform(scrollYProgress, [0, 1], [0, 0]);

  const experience = timeline.filter((item) => item.type === "Experience");
  const sideItems = timeline.filter((item) => item.type !== "Experience");

  return (
    <section
      id="experience"
      className="section-space relative overflow-hidden border-t border-white/[0.06]"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[8%] top-[30%] h-[30rem] w-[30rem] rounded-full bg-violet/[0.045] blur-[140px]" />
        <div className="absolute bottom-0 right-[5%] h-80 w-80 rounded-full bg-electric/[0.05] blur-[120px]" />
      </div>

      <div className="container-x">
        <SectionHeading
          index="04"
          label="Experience & education"
          title="A path shaped by"
          accent="curiosity."
          description="A snapshot of the roles, learning and moments that shaped how I think about craft. The details below are ready for your own story."
        />

        <div className="mt-16 grid gap-14 lg:grid-cols-12 lg:gap-16 xl:mt-20">
          <div ref={timelineRef} className="relative lg:col-span-7">
            <div className="absolute bottom-0 left-[7px] top-2 w-px bg-white/[0.08]" />
            <motion.div
              style={
                reduceMotion
                  ? { scaleY: 1, originY: 0 }
                  : { scaleY, originY: 0, y: travelY }
              }
              className="absolute bottom-0 left-[7px] top-2 w-px bg-gradient-to-b from-electric via-electric-soft to-violet"
            />

            <div className="mb-8 flex items-center gap-3">
              <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-electric-soft">
                Career
              </span>
              <span className="h-px flex-1 bg-white/[0.08]" />
            </div>

            {experience.map((item, index) => (
              <ExperienceRow
                key={`${item.role}-${item.period}`}
                item={item}
                index={index}
                isLast={index === experience.length - 1}
              />
            ))}
          </div>

          <div className="lg:col-span-5">
            <div className="glass sticky top-28 rounded-[1.75rem] p-6 sm:p-7">
              <div className="flex items-center justify-between">
                <p className="eyebrow">Education & milestones</p>
                <Sparkles className="h-4 w-4 text-electric-soft" />
              </div>

              <div className="mt-6 flex flex-col gap-3">
                {sideItems.map((item, index) => {
                  const Icon = iconMap[item.type];
                  return (
                    <motion.div
                      key={`${item.role}-${item.period}`}
                      initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{
                        duration: 0.7,
                        delay: reduceMotion ? 0 : 0.12 + index * 0.1,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="group rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4 transition-colors duration-300 hover:border-white/[0.16] hover:bg-white/[0.045]"
                    >
                      <div className="flex items-start gap-3.5">
                        <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-electric-soft">
                          <Icon className="h-4 w-4" strokeWidth={1.5} />
                        </span>
                        <div className="min-w-0">
                          <div className="flex items-center justify-between gap-3">
                            <p className="font-mono text-[8px] uppercase tracking-[0.13em] text-muted">
                              {item.period}
                            </p>
                            <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-white/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-paper/60" />
                          </div>
                          <p className="mt-1 text-[13px] font-medium">{item.role}</p>
                          <p className="mt-0.5 text-[10px] text-muted">
                            {item.company}
                          </p>
                        </div>
                      </div>
                      <p className="mt-3 text-[11px] leading-relaxed text-muted/75">
                        {item.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-6 border-t border-white/[0.08] pt-5">
                <p className="text-[11px] leading-relaxed text-muted/70">
                  Timeline content is placeholder information — update your
                  roles, dates and milestones in{" "}
                  <span className="font-mono text-[10px] text-paper/65">
                    src/lib/data.ts
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
