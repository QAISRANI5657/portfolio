"use client";

import { SectionIntroBlurb, sectionHeaderGrid } from "@/lib/section-intro-blurb";
import { skillBars } from "@/lib/projects";
import { ScrollReveal } from "@/components/effects/scroll-reveal";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function SkillRow({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium">{name}</span>
        <span className="tabular-nums text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2.5 overflow-hidden rounded-full border border-border bg-muted/30">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-accent via-accent-3 to-accent-2"
          initial={{ width: "0%" }}
          animate={{ width: inView ? `${level}%` : "0%" }}
          transition={{ duration: 1.05, delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
      <ScrollReveal>
        <div className={sectionHeaderGrid}>
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
              Skills
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-4xl">
              Depth where it matters
            </h2>
          </div>
          <SectionIntroBlurb>
            Bars are directional, not a claim to know everything, just where I consistently deliver senior level quality for client work.
          </SectionIntroBlurb>
        </div>
      </ScrollReveal>

      <ScrollReveal className="mt-10 glass-panel rounded-[2rem] p-7 ring-glow sm:p-9" delay={0.05}>
        <div className="grid gap-6 md:grid-cols-2">
          {skillBars.map((s, idx) => (
            <SkillRow key={s.name} name={s.name} level={s.level} delay={0.04 * idx} />
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
