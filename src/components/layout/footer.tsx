"use client";

import { site } from "@/lib/site-config";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/20">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="space-y-10">
          <div className="max-w-2xl space-y-3">
            <p className="font-[family-name:var(--font-display)] text-lg font-semibold">
              {site.brand}
            </p>
            <p className="text-xs font-medium text-muted-foreground">{site.name}</p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Premium websites for founders and freelancers who want clarity, speed, and a brand that feels modern.
            </p>
          </div>

          <div className="max-w-2xl space-y-2 border-t border-border/60 pt-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Availability
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Accepting a limited number of new builds each month.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {site.name} · {site.brand}
          </p>
          <motion.p
            className="inline-flex items-center gap-2"
            initial={{ opacity: 0.7 }}
            whileHover={{ opacity: 1 }}
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.65)]" />
            Built with Next.js, Tailwind, and Framer Motion
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
