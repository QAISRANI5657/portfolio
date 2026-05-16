"use client";

import { LogoMark } from "@/components/brand/logo-mark";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = window.setTimeout(() => setVisible(false), 1000);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[100] grid place-items-center bg-background/90 backdrop-blur-md"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }}
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-accent/8 via-transparent to-accent-2/8" />

          <motion.div
            className="relative flex h-28 w-28 items-center justify-center"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="absolute inset-0 rounded-full border border-accent/25"
                initial={{ scale: 0.65, opacity: 0 }}
                animate={{
                  scale: [0.65, 1.05, 0.65],
                  opacity: [0, 0.55, 0],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  delay: i * 0.35,
                  ease: "easeInOut",
                }}
                aria-hidden
              />
            ))}

            <motion.div
              className="absolute h-[4.5rem] w-[4.5rem] rounded-full opacity-90"
              style={{
                background:
                  "conic-gradient(from 0deg, var(--accent), var(--accent-2), var(--accent-3), var(--accent))",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 1.35, repeat: Infinity, ease: "linear" }}
              aria-hidden
            />

            <div className="relative flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-full bg-background shadow-[0_0_0_1px_color-mix(in_oklab,var(--border)_70%,transparent)]">
              <LogoMark size={30} />
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-[18%] left-1/2 flex h-1 w-32 -translate-x-1/2 gap-1.5 overflow-hidden rounded-full bg-muted/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            aria-hidden
          >
            <motion.div
              className="h-full w-1/3 rounded-full bg-gradient-to-r from-accent via-accent-2 to-accent-3"
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
