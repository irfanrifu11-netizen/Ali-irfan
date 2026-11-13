"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

type CounterProps = {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
};

export function Counter({
  value,
  suffix = "",
  duration = 1.8,
  className,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView || reduceMotion || value === 0) return;

    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });

    return () => controls.stop();
  }, [duration, isInView, reduceMotion, value]);

  if (value === 0) {
    return (
      <span ref={ref} className={className}>
        {suffix}
      </span>
    );
  }

  return (
    <span ref={ref} className={className}>
      {reduceMotion ? value : display}
      {suffix}
    </span>
  );
}
