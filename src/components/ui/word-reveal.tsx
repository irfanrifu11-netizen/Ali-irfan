"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type WordRevealProps = {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
  amount?: number;
};

export function WordReveal({
  text,
  className,
  delay = 0,
  stagger = 0.045,
  once = true,
  amount = 0.45,
}: WordRevealProps) {
  const reduceMotion = useReducedMotion();
  const words = text.split(" ");

  return (
    <motion.span
      aria-label={text}
      className={cn("inline", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={{
        visible: {
          transition: {
            staggerChildren: reduceMotion ? 0 : stagger,
            delayChildren: reduceMotion ? 0 : delay,
          },
        },
      }}
    >
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          aria-hidden="true"
          className="inline-block overflow-hidden pb-[0.08em] align-bottom"
        >
          <motion.span
            className="inline-block will-change-transform"
            variants={{
              hidden: { y: reduceMotion ? 0 : "115%" },
              visible: {
                y: 0,
                transition: {
                  duration: reduceMotion ? 0.01 : 0.9,
                  ease: [0.16, 1, 0.3, 1],
                },
              },
            }}
          >
            {word}
            {index < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
