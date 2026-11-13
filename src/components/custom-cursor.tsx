"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

type CursorMode = "default" | "link" | "project";

export function CustomCursor() {
  const [mode, setMode] = useState<CursorMode>("default");
  const [pressed, setPressed] = useState(false);
  const reduceMotion = useReducedMotion();
  const supportsPointer = useSyncExternalStore(
    (onChange) => {
      const query = window.matchMedia("(hover: hover) and (pointer: fine)");
      query.addEventListener("change", onChange);
      return () => query.removeEventListener("change", onChange);
    },
    () => window.matchMedia("(hover: hover) and (pointer: fine)").matches,
    () => false,
  );
  const enabled = supportsPointer && !reduceMotion;
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 240, damping: 26, mass: 0.55 });
  const ringY = useSpring(y, { stiffness: 240, damping: 26, mass: 0.55 });
  const dotX = useSpring(x, { stiffness: 950, damping: 42, mass: 0.15 });
  const dotY = useSpring(y, { stiffness: 950, damping: 42, mass: 0.15 });

  useEffect(() => {
    if (!enabled) return;

    document.body.classList.add("has-custom-cursor");

    const onMove = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    const onOver = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const interactive = target?.closest(
        "a, button, input, textarea, [data-cursor]",
      );

      if (!interactive) {
        setMode("default");
        return;
      }

      if (interactive.getAttribute("data-cursor") === "project") {
        setMode("project");
        return;
      }

      setMode("link");
    };

    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);
    const onLeave = () => {
      x.set(-100);
      y.set(-100);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      document.body.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[999]">
      <motion.div
        className="absolute left-0 top-0"
        style={{ x: ringX, y: ringY }}
      >
        <motion.div
          className="relative flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border"
          animate={{
            width: mode === "project" ? 86 : mode === "link" ? 50 : 32,
            height: mode === "project" ? 86 : mode === "link" ? 50 : 32,
            scale: pressed ? 0.82 : 1,
            backgroundColor:
              mode === "project"
                ? "rgba(243,241,235,0.94)"
                : mode === "link"
                  ? "rgba(98,120,255,0.1)"
                  : "rgba(255,255,255,0)",
            borderColor:
              mode === "project"
                ? "rgba(243,241,235,0.94)"
                : mode === "link"
                  ? "rgba(143,160,255,0.7)"
                  : "rgba(255,255,255,0.35)",
          }}
          transition={{ type: "spring", stiffness: 320, damping: 28 }}
        >
          <AnimatePresence>
            {mode === "project" ? (
              <motion.span
                key="view"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.7 }}
                className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-ink"
              >
                View
              </motion.span>
            ) : null}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute left-0 top-0 h-1 w-1 rounded-full bg-paper"
        style={{ x: dotX, y: dotY }}
      >
        <span className="block -translate-x-1/2 -translate-y-1/2" />
      </motion.div>
    </div>
  );
}
