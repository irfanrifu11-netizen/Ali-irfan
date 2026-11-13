import { Asterisk } from "lucide-react";
import { marqueeWords } from "@/lib/data";

function MarqueeGroup() {
  return (
    <div className="flex shrink-0 items-center">
      {marqueeWords.map((word, index) => (
        <div
          key={`${word}-${index}`}
          className="flex shrink-0 items-center gap-7 pr-7 sm:gap-10 sm:pr-10"
        >
          <span className="whitespace-nowrap text-[clamp(1.5rem,3.2vw,3rem)] font-medium uppercase tracking-[-0.045em] text-paper/90">
            {word}
          </span>
          <Asterisk
            className="h-4 w-4 shrink-0 text-electric-soft/80 sm:h-5 sm:w-5"
            strokeWidth={1.2}
          />
        </div>
      ))}
    </div>
  );
}

export function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-white/[0.08] bg-white/[0.015] py-5 sm:py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent sm:w-44" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent sm:w-44" />
      <div className="marquee-track">
        <MarqueeGroup />
        <MarqueeGroup />
      </div>
    </div>
  );
}
