"use client";

import { Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { Magnetic } from "@/components/ui/magnetic";

type MagneticSubmitProps = {
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
};

export function MagneticSubmit({
  children,
  disabled,
  className,
}: MagneticSubmitProps) {
  return (
    <Magnetic>
      <button
        type="submit"
        disabled={disabled}
        className={cn(
          "group inline-flex min-h-12 items-center gap-3 rounded-full border border-paper bg-paper px-6 py-3.5 text-sm font-medium tracking-[-0.01em] text-ink transition-colors duration-300 hover:border-electric-soft hover:bg-electric-soft disabled:cursor-not-allowed disabled:opacity-60 sm:px-7",
          className,
        )}
      >
        <span>{children}</span>
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ink/10 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          <Send className="h-3.5 w-3.5" strokeWidth={1.8} />
        </span>
      </button>
    </Magnetic>
  );
}
