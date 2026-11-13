import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Magnetic } from "@/components/ui/magnetic";

type CtaLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
  icon?: boolean;
  className?: string;
  ariaLabel?: string;
  download?: boolean;
};

const variants = {
  primary:
    "border-paper bg-paper text-ink hover:border-electric-soft hover:bg-electric-soft",
  secondary:
    "border-white/15 bg-white/[0.02] text-paper hover:border-white/35 hover:bg-white/[0.06]",
  ghost:
    "border-transparent bg-transparent text-paper hover:border-white/15 hover:bg-white/[0.04]",
};

export function CtaLink({
  href,
  children,
  variant = "primary",
  external = true,
  icon = true,
  className,
  ariaLabel,
  download,
}: CtaLinkProps) {
  return (
    <Magnetic>
      <a
        href={href}
        aria-label={ariaLabel}
        {...(external
          ? { target: "_blank", rel: "noreferrer noopener" }
          : {})}
        {...(download ? { download: true } : {})}
        className={cn(
          "group inline-flex min-h-12 items-center gap-3 rounded-full border px-6 py-3.5 text-sm font-medium tracking-[-0.01em] transition-colors duration-300 sm:px-7",
          variants[variant],
          className,
        )}
      >
        <span>{children}</span>
        {icon ? (
          <span
            className={cn(
              "flex h-7 w-7 items-center justify-center rounded-full transition-transform duration-500 group-hover:rotate-45",
              variant === "primary"
                ? "bg-ink/10"
                : "border border-white/12 bg-white/[0.04]",
            )}
          >
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.8} />
          </span>
        ) : null}
      </a>
    </Magnetic>
  );
}
