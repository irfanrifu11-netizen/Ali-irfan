import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";
import { WordReveal } from "@/components/ui/word-reveal";

type SectionHeadingProps = {
  index: string;
  label: string;
  title: string;
  accent?: string;
  description?: string;
  className?: string;
  titleClassName?: string;
};

export function SectionHeading({
  index,
  label,
  title,
  accent,
  description,
  className,
  titleClassName,
}: SectionHeadingProps) {
  return (
    <div className={cn("relative", className)}>
      <Reveal y={16}>
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] tracking-[0.14em] text-electric-soft">
            {index}
          </span>
          <span className="h-px w-8 bg-white/20" />
          <span className="eyebrow">{label}</span>
        </div>
      </Reveal>

      <h2
        className={cn(
          "mt-6 max-w-[17ch] text-[clamp(2.7rem,5.2vw,5.2rem)] font-medium leading-[0.96] tracking-[-0.055em] text-paper",
          titleClassName,
        )}
      >
        <WordReveal text={title} />
        {accent ? (
          <>
            {" "}
            <span className="font-serif-italic text-gradient">{accent}</span>
          </>
        ) : null}
      </h2>

      {description ? (
        <Reveal delay={0.12} y={20}>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted">
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
