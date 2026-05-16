"use client";

import { SectionIntroBlurb, sectionHeaderGrid } from "@/lib/section-intro-blurb";
import { proofStrip, testimonials } from "@/lib/projects";
import { ScrollReveal } from "@/components/effects/scroll-reveal";
import { motion } from "framer-motion";
import Image from "next/image";

export function Testimonials() {
  return (
    <section id="testimonials" className="border-t border-border bg-muted/10 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <div className={sectionHeaderGrid}>
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                Social proof
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-4xl">
                Trusted by operators
              </h2>
            </div>
            <SectionIntroBlurb>
              What founders, marketers, and agencies say about collaboration, delivery, and shipped quality.
            </SectionIntroBlurb>
          </div>
        </ScrollReveal>

        <ScrollReveal className="mt-8" delay={0.04}>
          <div className="flex flex-wrap gap-2.5">
            {proofStrip.map((p) => (
              <span
                key={p.id}
                className="inline-flex max-w-full items-center gap-2 rounded-full border border-border bg-background/55 px-3.5 py-1.5 text-xs font-medium text-foreground shadow-[0_0_0_1px_color-mix(in_oklab,var(--accent)_8%,transparent)] backdrop-blur-sm"
              >
                <span
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 shadow-[0_0_10px_rgba(52,211,153,0.55)]"
                  aria-hidden
                />
                <span className="leading-snug">{p.text}</span>
              </span>
            ))}
          </div>
        </ScrollReveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, idx) => (
            <ScrollReveal key={t.id} delay={0.06 * idx}>
              <motion.figure
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="glass-panel flex h-full flex-col rounded-[2rem] p-7 ring-glow"
              >
                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-2xl border border-border bg-muted/20">
                    <Image
                      src={t.avatar}
                      alt=""
                      fill
                      className="object-cover object-top"
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <figcaption className="font-semibold">{t.name}</figcaption>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
                <p
                  className="mt-4 text-[11px] font-semibold tracking-[0.2em] text-accent"
                  aria-label="Five out of five stars"
                >
                  ★★★★★
                </p>
                <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  “{t.quote}”
                </blockquote>
              </motion.figure>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
