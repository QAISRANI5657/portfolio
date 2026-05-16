"use client";

import { ScrollReveal } from "@/components/effects/scroll-reveal";
import { SectionIntroBlurb, sectionHeaderGrid } from "@/lib/section-intro-blurb";
import { projects, type Project } from "@/lib/projects";
import { motion } from "framer-motion";
import Image from "next/image";

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden className="opacity-90">
      <path
        d="M7 17 17 7M17 7H9M17 7v8"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ProjectCard({ project: p, featured }: { project: Project; featured: boolean }) {
  return (
    <motion.article
      whileHover={{ y: featured ? -4 : -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className={`group glass-panel overflow-hidden ring-glow ${
        featured ? "rounded-[2rem] lg:grid lg:grid-cols-[1.12fr_1fr] lg:items-stretch" : "rounded-[2rem]"
      }`}
    >
      <a
        href={p.demoUrl}
        target="_blank"
        rel="noreferrer"
        className={`relative block overflow-hidden bg-muted/30 ${
          featured ? "aspect-[16/10] lg:aspect-auto lg:min-h-[320px]" : "aspect-[16/10]"
        }`}
      >
        <Image
          src={p.image}
          alt={`Screenshot preview of ${p.title}`}
          fill
          sizes={
            featured
              ? "(min-width: 1024px) 55vw, 100vw"
              : "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          }
          className="object-cover transition duration-700 group-hover:scale-[1.03]"
        />
        <motion.div
          className="absolute inset-0 flex items-center justify-center bg-background/55 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100"
          aria-hidden
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/90 px-4 py-2 text-sm font-semibold text-foreground shadow-lg">
            View live site
            <ArrowIcon />
          </span>
        </motion.div>
      </a>

      <div
        className={`flex flex-col ${featured ? "justify-center p-6 sm:p-8 lg:p-9" : "space-y-4 p-6 sm:p-7"}`}
      >
        <div className="flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span
              key={t}
              className="badge-vibrant rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-foreground"
            >
              {t}
            </span>
          ))}
        </div>

        <div className={featured ? "mt-4 space-y-3" : "mt-3 space-y-2"}>
          <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight sm:text-2xl">
            {p.title}
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-[0.9375rem]">
            {p.description}
          </p>
        </div>

        <div className={`flex flex-wrap gap-2 ${featured ? "mt-5" : ""}`}>
          {p.stack.map((s) => (
            <span
              key={s}
              className="rounded-lg border border-border/80 bg-background/50 px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
            >
              {s}
            </span>
          ))}
        </div>

        <div className={`flex justify-center ${featured ? "mt-6" : ""}`}>
          <a
            href={p.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-vibrant inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition"
          >
            Live demo
            <ArrowIcon />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  const featured = projects.length === 1;

  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
      <ScrollReveal>
        <div className={sectionHeaderGrid}>
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
              Portfolio
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-4xl">
              Selected <span className="text-gradient">builds</span>
            </h2>
          </div>
          <SectionIntroBlurb>
            A snapshot of shipped work, each build focused on outcomes, performance, and polish.
          </SectionIntroBlurb>
        </div>
      </ScrollReveal>

      <div
        className={`mt-10 grid gap-6 ${
          featured ? "mx-auto max-w-5xl" : "md:grid-cols-2 lg:grid-cols-3"
        }`}
      >
        {projects.map((p, idx) => (
          <ScrollReveal key={p.id} delay={0.05 * idx}>
            <ProjectCard project={p} featured={featured} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
