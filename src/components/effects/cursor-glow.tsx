"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export function CursorGlow() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 28, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 220, damping: 28, mass: 0.6 });

  useEffect(() => {
    const prefersFine =
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: fine)").matches;
    if (!prefersFine) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  const background = useMotionTemplate`radial-gradient(520px circle at ${sx}px ${sy}px, color-mix(in oklab, var(--accent) 22%, transparent), transparent 60%)`;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 hidden mix-blend-screen md:block"
      style={{ background }}
    />
  );
}
