"use client";

import { site, social, stats } from "@/lib/site-config";
import { motion } from "framer-motion";
import { StatCounter } from "@/components/effects/stat-counter";
import Image from "next/image";

export function Hero() {
  return (
    <section id="hero" className="relative overflow-x-hidden pb-14 pt-28 sm:pb-16 sm:pt-32 lg:pb-12">
      <div className="pointer-events-none absolute inset-x-0 top-20 h-80 bg-gradient-to-b from-accent/30 via-accent-2/15 to-accent-3/10 blur-3xl" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="badge-vibrant inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium text-foreground"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 shadow-[0_0_18px_rgba(52,211,153,0.85)]" />
            Open for freelance & contract builds
          </motion.div>

          <motion.h1
            className="mt-6 font-[family-name:var(--font-display)] text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            Websites that feel{" "}
            <span className="text-gradient animate-shimmer">
              expensive
            </span>{" "}
            and convert.
          </motion.h1>

          <motion.p
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            I build fast, SEO-ready frontends with intentional motion and a premium SaaS
            aesthetic, using vibe coding and AI tooling to move quickly without cutting
            corners.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            <a
              href="#projects"
              className="btn-vibrant inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="btn-outline-vibrant inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-foreground ring-glow transition"
            >
              Hire me
            </a>
            <a
              href={social.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-accent/25 bg-gradient-to-r from-accent/10 via-accent-2/10 to-accent-3/10 px-6 py-3 text-sm font-semibold text-foreground shadow-[0_12px_40px_-24px_var(--glow)] transition hover:border-accent/40 hover:brightness-105"
            >
              GitHub profile
            </a>
          </motion.div>

          <motion.div
            className="stat-surface mt-10 grid max-w-xl grid-cols-3 gap-4 rounded-3xl p-4 sm:p-5"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            {stats.map((s) => (
              <div key={s.label} className="px-1">
                <StatCounter
                  value={s.value}
                  suffix={s.suffix}
                  className="block bg-gradient-to-r from-accent via-accent-2 to-accent-3 bg-[length:200%_200%] bg-clip-text text-2xl font-semibold tracking-tight text-transparent animate-shimmer sm:text-3xl"
                />
                <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto flex w-full min-w-0 max-w-[min(100%,20.5rem)] flex-col gap-5 sm:max-w-[22rem] lg:mx-0 lg:ml-auto lg:mr-0"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative mx-auto w-full max-w-[10.5rem] sm:max-w-[11.5rem] md:max-w-[12.5rem]">
            <div
              className="pointer-events-none absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-accent via-accent-2 to-accent-3 opacity-40 blur-xl"
              aria-hidden
            />
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-white/12 bg-muted/10 shadow-[0_16px_44px_-32px_rgba(0,0,0,0.55)] ring-1 ring-white/10">
              <Image
                src={site.profileImage}
                alt={`Portrait of ${site.name}`}
                fill
                priority
                sizes="(max-width: 640px) 168px, (max-width: 768px) 184px, 200px"
                className="object-cover object-[center_14%]"
              />
            </div>
          </div>

          <div className="w-full px-0.5">
            <div className="flex flex-col items-center gap-2">
              <div
                className="mb-0.5 h-0.5 w-10 shrink-0 rounded-full bg-gradient-to-r from-accent to-accent-2"
                aria-hidden
              />
              <p className="max-w-full text-balance text-center font-[family-name:var(--font-display)] text-base font-semibold leading-snug tracking-tight text-foreground sm:text-lg">
                {site.name}
              </p>
              <p className="max-w-full text-balance text-center text-[11px] font-medium leading-snug tracking-tight text-muted-foreground sm:text-xs md:text-sm">
                {site.title}
              </p>
            </div>
          </div>

          <div className="glass-panel relative z-[1] w-full rounded-[1.75rem] p-5 ring-glow sm:p-6">
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[1.75rem]">
              <div className="hero-card-sheen absolute inset-0 opacity-90" />
            </div>
            <div className="relative space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Signature stack
                  </p>
                  <div className="shrink-0 rounded-2xl border border-accent/25 bg-gradient-to-r from-accent/15 to-accent-2/15 px-2.5 py-1.5 text-[11px] font-semibold text-foreground sm:px-3 sm:py-2 sm:text-xs">
                    AI-assisted
                  </div>
                </div>
                <p className="whitespace-nowrap font-[family-name:var(--font-display)] text-sm font-semibold leading-snug tracking-tight sm:text-base lg:text-lg">
                  Next.js + Tailwind + Motion
                </p>
              </div>

              <div className="grid gap-2.5">
                {[
                  { k: "Core Web Vitals", v: "Green first" },
                  { k: "Delivery", v: "Milestones + async updates" },
                  { k: "Positioning", v: "Client focused copy" },
                ].map((row) => (
                  <div
                    key={row.k}
                    className="flex min-h-[2.75rem] items-center justify-between gap-3 rounded-2xl border border-border/80 bg-background/40 px-3 py-2.5 text-xs shadow-[0_0_24px_-16px_color-mix(in_oklab,var(--accent)_25%,transparent)] sm:px-4 sm:text-sm"
                  >
                    <span className="min-w-0 shrink text-muted-foreground">{row.k}</span>
                    <span className="shrink-0 text-right font-medium">{row.v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            aria-hidden
            className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-accent/35 to-accent-2/25 blur-3xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -bottom-8 left-1/2 h-36 w-36 -translate-x-1/2 rounded-full bg-gradient-to-tr from-accent-3/25 to-accent/15 blur-3xl lg:left-auto lg:right-0 lg:translate-x-0"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
