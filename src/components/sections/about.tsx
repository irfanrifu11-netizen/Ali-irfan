"use client";

import Image from "next/image";
import { ArrowUpRight, MapPin, Quote, Sparkles } from "lucide-react";
import { Counter } from "@/components/ui/counter";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { stats } from "@/lib/data";

function RotatingSeal() {
  return (
    <div className="absolute -right-6 -top-6 hidden h-28 w-28 items-center justify-center rounded-full border border-white/10 bg-ink sm:flex">
      <svg
        viewBox="0 0 100 100"
        className="animate-spin-slow absolute inset-0 h-full w-full p-2"
        aria-hidden="true"
      >
        <defs>
          <path
            id="seal-path"
            d="M50,50 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0"
          />
        </defs>
        <text className="fill-white/45 font-mono text-[6px] uppercase tracking-[0.24em]">
          <textPath href="#seal-path" startOffset="0%">
            Open to collaborate · Open to collaborate ·
          </textPath>
        </text>
      </svg>
      <span className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.05]">
        <Sparkles className="h-4 w-4 text-electric-soft" />
      </span>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="section-space relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-1/4 h-[30rem] w-[30rem] rounded-full bg-violet/[0.055] blur-[140px]" />
        <div className="absolute right-0 top-2/3 h-72 w-72 rounded-full bg-electric/[0.06] blur-[120px]" />
      </div>

      <div className="container-x">
        <SectionHeading
          index="01"
          label="About me"
          title="The person behind"
          accent="the pixels."
          description="A designer's eye, an engineer's mind and an obsession with the details that make a digital experience feel effortless."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16 xl:mt-20">
          <Reveal y={44} className="lg:col-span-5">
            <div className="relative">
              <div className="group relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-white/10 bg-ink-soft sm:rounded-[2rem]">
                <Image
                  src="/portrait.svg"
                  alt="Portrait placeholder for Ali Irfan — replace with your own photo"
                  fill
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.025]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/5 to-transparent" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />

                <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-ink/50 px-3 py-1.5 backdrop-blur-md">
                  <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-white/50">
                    Portrait placeholder
                  </p>
                </div>

                <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/10 bg-ink/55 p-4 backdrop-blur-xl sm:inset-x-5 sm:bottom-5">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-base font-medium tracking-[-0.02em]">
                        Ali Irfan
                      </p>
                      <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.14em] text-muted">
                        Creative developer & designer
                      </p>
                    </div>
                    <span className="flex items-center gap-1.5 font-mono text-[8px] uppercase tracking-[0.1em] text-white/45">
                      <MapPin className="h-3 w-3" />
                      Your City
                    </span>
                  </div>
                </div>
              </div>

              <RotatingSeal />

              <div className="absolute -bottom-5 -left-5 hidden h-20 w-20 rounded-full border border-white/10 bg-ink/60 backdrop-blur-xl sm:block">
                <div className="dot-grid absolute inset-0 rounded-full opacity-30" />
                <div className="absolute inset-0 grid place-items-center">
                  <span className="font-serif-italic text-2xl text-paper/80">
                    ai
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col justify-between lg:col-span-7">
            <Reveal delay={0.08} y={32}>
              <p className="max-w-[24ch] text-[clamp(1.8rem,3.2vw,3rem)] font-medium leading-[1.08] tracking-[-0.045em]">
                I believe the best digital work feels{" "}
                <span className="font-serif-italic text-gradient">
                  inevitable
                </span>{" "}
                — as if it couldn&apos;t have been any other way.
              </p>
            </Reveal>

            <div className="mt-9 grid gap-6 sm:grid-cols-2">
              <Reveal delay={0.14} y={24}>
                <p className="text-sm leading-[1.8] text-muted">
                  I&apos;m Ali Irfan, a creative developer and designer working
                  at the intersection of visual design and front-end
                  engineering. I care about the space between a great idea and
                  the moment someone experiences it.
                </p>
              </Reveal>
              <Reveal delay={0.2} y={24}>
                <p className="text-sm leading-[1.8] text-muted">
                  My approach is simple: understand deeply, remove the
                  unnecessary and sweat the details. The result is work that
                  feels considered, performs beautifully and leaves a lasting
                  impression.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.24} y={24} className="mt-9">
              <div className="relative overflow-hidden rounded-2xl border border-white/[0.09] bg-white/[0.025] p-6">
                <Quote className="absolute -right-2 -top-2 h-20 w-20 text-white/[0.045]" />
                <p className="eyebrow mb-3">The vision</p>
                <p className="max-w-2xl text-[15px] leading-relaxed text-paper/85">
                  To make the web feel less like a template and more like a
                  place — full of intention, character and a quiet sense of
                  wonder.
                </p>
              </div>
            </Reveal>

            <div className="mt-10 grid grid-cols-2 border-y border-white/[0.08] sm:grid-cols-4">
              {stats.map((stat, index) => (
                <Reveal
                  key={stat.label}
                  delay={0.08 + index * 0.06}
                  y={18}
                  className="border-white/[0.08] py-5 pr-4 even:border-l sm:border-l sm:first:border-l-0 sm:pl-5 sm:pr-5"
                >
                  <p className="text-3xl font-medium tracking-[-0.05em] text-paper sm:text-[2.1rem]">
                    <Counter
                      value={stat.value}
                      suffix={stat.suffix}
                      className="tabular-nums"
                    />
                  </p>
                  <p className="mt-2 max-w-[12ch] font-mono text-[8px] uppercase leading-relaxed tracking-[0.12em] text-muted">
                    {stat.label}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.26} y={20}>
              <div className="mt-8 flex flex-wrap items-center justify-between gap-5">
                <span className="font-serif-italic text-3xl text-paper/80">
                  Ali Irfan
                </span>
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-3 text-sm font-medium text-paper/80 transition-colors hover:text-paper"
                >
                  <span className="link-underline">Let&apos;s create together</span>
                  <span className="grid h-8 w-8 place-items-center rounded-full border border-white/15 transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
