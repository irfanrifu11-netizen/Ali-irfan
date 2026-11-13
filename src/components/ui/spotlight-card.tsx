"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";

type SpotlightCardProps = {
  children: React.ReactNode;
  className?: string;
};

export function SpotlightCard({ children, className }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
    ref.current.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className={cn("spotlight-card", className)}
    >
      {children}
    </div>
  );
}
