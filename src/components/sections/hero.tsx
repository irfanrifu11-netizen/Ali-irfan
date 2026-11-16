"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowDown, ArrowUpRight, Code2, Sparkles } from "lucide-react";
import { CtaLink } from "@/components/ui/cta-link";

const ease = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease },
  },
};

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const orbScrollY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const nameScrollY = useTransform(scrollYProgress, [0, 1], [0, -45]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springRotateX = useSpring(rotateX, { stiffness: 120, damping: 22 });
  const springRotateY = useSpring(rotateY, { stiffness: 120, damping: 22 });

  const handlePointerMove = (event: React.MouseEvent<HTMLElement>) => {
    if (reduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * 12);
    rotateX.set(py * -10);
  };

  const resetPointer = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      onMouseMove={handlePointerMove}
      onMouseLeave={resetPointer}
      className="relative isolate min-h-[100svh] overflow-hidden border-b border-white/[0.07]"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 top-10 h-[34rem] w-[34rem] rounded-full bg-electric/[0.09] blur-[150px]" />
        <div className="animate-pulse-glow absolute -right-24 top-24 h-[36rem] w-[36rem] rounded-full bg-violet/[0.11] blur-[150px]" />
        <div className="absolute bottom-0 left-1/3 h-72 w-[40rem] rounded-full bg-electric/[0.05] blur-[120px]" />
        <div className="grid-lines absolute inset-0 opacity-70" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
        <div className="absolute left-[4.5%] top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-white/[0.06] to-transparent xl:block" />
        <div className="absolute right-[4.5%] top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-white/[0.06] to-transparent xl:block" />
      </div>

      <div className="container-x relative z-10 flex min-h-[100svh] flex-col pt-28 sm:pt-32">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
          }}
          className="flex items-center justify-between gap-4 border-b border-white/[0.07] pb-4"
        >
          <motion.p variants={fadeUp} className="eyebrow flex items-center gap-2.5">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-electric" />
            Independent portfolio
            <span className="hidden text-white/50 sm:inline">/</span>
            <span className="hidden sm:inline">2026</span>
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-4 sm:gap-6"
          >
            <p className="eyebrow hidden md:block">
              Web Developer <span className="text-white/50">/</span> UI/UX Designer{" "}
              <span className="text-white/50">/</span> Next.js
            </p>
            <span className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.12em] text-emerald-300">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              Available for work
            </span>
          </motion.div>
        </motion.div>

        <div className="grid flex-1 items-center gap-10 py-10 sm:py-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-6 lg:py-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.085, delayChildren: 0.18 },
              },
            }}
            className="relative z-10 max-w-[46rem]"
          >
            <motion.div
              variants={fadeUp}
              className="mb-5 flex items-center gap-3 sm:mb-6"
            >
              <span className="h-px w-10 bg-gradient-to-r from-electric to-transparent" />
              <span className="eyebrow text-paper/65">Hello, I&apos;m Ali</span>
            </motion.div>

            <h1 className="text-[clamp(3rem,5.8vw,6.25rem)] font-medium uppercase leading-[0.91] tracking-[-0.06em]">
              <span className="block overflow-hidden pb-[0.04em]">
                <motion.span
                  variants={{
                    hidden: { y: "112%" },
                    visible: {
                      y: 0,
                      transition: { duration: 1, ease },
                    },
                  }}
                  className="block will-change-transform"
                >
                  Crafting digital
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-[0.04em]">
                <motion.span
                  variants={{
                    hidden: { y: "112%" },
                    visible: {
                      y: 0,
                      transition: { duration: 1, ease },
                    },
                  }}
                  className="block will-change-transform"
                >
                  experiences
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-[0.08em]">
                <motion.span
                  variants={{
                    hidden: { y: "112%" },
                    visible: {
                      y: 0,
                      transition: { duration: 1, ease },
                    },
                  }}
                  className="block will-change-transform"
                >
                  that{" "}
                  <span className="font-serif-italic bg-gradient-to-r from-electric-soft via-violet to-electric-soft bg-clip-text pr-2 text-[1.04em] normal-case tracking-[-0.03em] text-transparent">
                    inspire.
                  </span>
                </motion.span>
              </span>
            </h1>

            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-[31rem] text-[15px] leading-relaxed text-muted sm:text-base"
            >
              I&apos;m a web developer and UI/UX designer based in Kerala, India,
              turning ambitious ideas into refined, high-performance websites
              with Next.js, React and modern front-end tools — where thoughtful
              design meets precise engineering.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <CtaLink href="#work">Explore my work</CtaLink>
              <CtaLink href="#contact" variant="secondary">
                Contact me
              </CtaLink>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-9 flex items-center gap-4 sm:mt-10"
            >
              <a
                href="#work"
                className="group flex items-center gap-3"
                aria-label="Scroll to explore work"
              >
                <span className="relative grid h-10 w-10 place-items-center rounded-full border border-white/15 transition-colors duration-300 group-hover:border-electric/60 group-hover:bg-electric/10">
                  <ArrowDown className="h-4 w-4 motion-safe:animate-bounce" />
                </span>
                <span className="eyebrow hidden transition-colors group-hover:text-paper sm:block">
                  Scroll to explore
                </span>
              </a>
              <span className="h-px w-12 bg-white/10" />
              <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
                Based in Kerala, India · Working worldwide
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.3, delay: 0.35, ease }}
            style={
              reduceMotion
                ? undefined
                : {
                    y: orbScrollY,
                    rotateX: springRotateX,
                    rotateY: springRotateY,
                    transformPerspective: 1100,
                  }
            }
            className="relative hidden items-center justify-center lg:flex"
          >
            <div className="relative flex aspect-square w-full max-w-[29rem] items-center justify-center">
              <div className="absolute inset-[12%] rounded-full bg-electric/[0.07] blur-[80px]" />

              <div className="orb-ring absolute inset-[1%] rounded-full" />
              <div className="animate-spin-slow absolute inset-[1%] rounded-full border border-transparent border-t-electric/70 border-r-electric/10" />
              <div className="orb-ring-dashed animate-spin-reverse absolute inset-[10%] rounded-full" />
              <div className="absolute inset-[21%] rounded-full border border-white/[0.06]" />

              <div className="absolute left-[8%] top-[14%] h-1.5 w-1.5 rounded-full bg-electric shadow-[0_0_14px_4px_rgba(98,120,255,0.5)]" />
              <div className="absolute bottom-[17%] right-[7%] h-2 w-2 rounded-full bg-violet shadow-[0_0_18px_5px_rgba(167,139,250,0.45)]" />
              <div className="absolute right-[22%] top-[4%] h-1 w-1 rounded-full bg-paper/80" />

              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : { y: [-8, 8, -8], rotate: [-1, 1, -1] }
                }
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="hero-orb relative h-[56%] w-[56%] overflow-hidden rounded-full"
              >
                <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_22%,rgba(255,255,255,0.95),transparent_7%)]" />
                <div className="absolute left-[18%] top-[15%] h-[24%] w-[24%] rounded-full bg-white/20 blur-2xl" />
                <div className="absolute inset-0 opacity-30 [background-image:repeating-linear-gradient(0deg,transparent,transparent_6px,rgba(255,255,255,0.1)_7px)]" />
                <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/15" />
              </motion.div>

              <motion.div
                animate={reduceMotion ? undefined : { y: [-6, 8, -6] }}
                transition={{
                  duration: 6.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="glass absolute -left-[2%] top-[16%] w-[11.5rem] rounded-2xl p-3.5"
              >
                <div className="flex items-center gap-2.5">
                  <span className="grid h-8 w-8 place-items-center rounded-xl bg-electric/15 text-electric-soft">
                    <Code2 className="h-3.5 w-3.5" />
                  </span>
                  <div>
                    <p className="text-[11px] font-medium text-paper">
                      Clean code
                    </p>
                    <p className="font-mono text-[8px] uppercase tracking-[0.12em] text-muted">
                      Built to perform
                    </p>
                  </div>
                </div>
                <div className="mt-3 h-px w-full bg-white/10" />
                <div className="mt-2.5 flex items-center gap-1.5">
                  <span className="h-1 flex-1 rounded-full bg-electric/60" />
                  <span className="h-1 flex-1 rounded-full bg-violet/50" />
                  <span className="h-1 flex-1 rounded-full bg-white/10" />
                </div>
              </motion.div>

              <motion.div
                animate={reduceMotion ? undefined : { y: [7, -7, 7] }}
                transition={{
                  duration: 7.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="glass absolute -right-[1%] bottom-[13%] w-[12.5rem] rounded-2xl p-3.5"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-8 w-8 place-items-center rounded-xl bg-violet/15 text-violet">
                    <Sparkles className="h-3.5 w-3.5" />
                  </span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-muted" />
                </div>
                <p className="mt-3 text-[11px] font-medium">Design → Develop</p>
                <p className="mt-0.5 font-mono text-[8px] uppercase tracking-[0.12em] text-muted">
                  One considered process
                </p>
              </motion.div>

              <div className="glass absolute bottom-[3%] left-[20%] rounded-full px-3 py-1.5">
                <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-paper/70">
                  Pixels · Motion · Code
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease }}
          style={reduceMotion ? undefined : { y: nameScrollY }}
          className="relative flex items-end justify-between border-t border-white/[0.07] pb-7 pt-4 sm:pb-8"
        >
          <div className="w-full overflow-hidden">
            <p className="display whitespace-nowrap text-[clamp(3.7rem,14.2vw,14rem)] uppercase leading-[0.78]">
              <motion.span
                initial={reduceMotion ? false : { y: "115%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, delay: 0.55, ease }}
                className="block will-change-transform"
              >
                Ali <span className="text-stroke">Irfan</span>
                <span className="text-electric">.</span>
              </motion.span>
            </p>
          </div>

          <motion.a
            href="#work"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="group absolute -top-11 right-0 hidden items-center gap-3 xl:flex"
            aria-label="Scroll to selected work"
          >
            <span className="eyebrow transition-colors group-hover:text-paper">
              Scroll
            </span>
            <span className="relative h-10 w-px overflow-hidden bg-white/15">
              <span className="absolute inset-x-0 top-0 h-4 animate-[scroll-line_1.8s_ease-in-out_infinite] bg-electric" />
            </span>
          </motion.a>
        </motion.div>

        <motion.div
          style={reduceMotion ? undefined : { opacity: contentOpacity }}
          className="pointer-events-none absolute bottom-36 right-8 hidden 2xl:block"
        >
          <p className="font-mono text-[8px] uppercase tracking-[0.3em] text-muted [writing-mode:vertical-rl]">
            Web developer · Kerala, India
          </p>
        </motion.div>
      </div>
    </section>
  );
}
