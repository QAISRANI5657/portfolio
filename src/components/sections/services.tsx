import type { ReactElement } from "react";
import { SectionIntroBlurb, sectionHeaderGrid } from "@/lib/section-intro-blurb";
import { services } from "@/lib/projects";
import { ScrollReveal } from "@/components/effects/scroll-reveal";

const icons: Record<(typeof services)[number]["icon"], ReactElement> = {
  spark: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.2 16.2l2.2 2.2M5.6 18.4l2.1-2.1M16.2 7.8l2.2-2.2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M12 8.5 13.7 12 12 15.5 10.3 12 12 8.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  ),
  zap: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M13 2 3 14h8l-1 8 10-12h-8l1-8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  ),
  target: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path d="M12 13h.01" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  ),
  user: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M20 21a8 8 0 1 0-16 0"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M12 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  ),
  search: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path d="m21 21-4.3-4.3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  gauge: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 14v7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M4.5 10a7.5 7.5 0 0 1 15 0"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path d="M9 17h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  layout: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 7h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M4 12h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M4 17h7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path
        d="M16 12h4v9h-4z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  ),
  plug: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M8 2v4M16 2v4M9 6h6v5a3 3 0 0 1-6 0V6Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M12 14v8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
};

export function Services() {
  return (
    <section id="services" className="border-y border-border bg-muted/15 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <div className={sectionHeaderGrid}>
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                Services
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-4xl">
                What I can take off your plate
              </h2>
            </div>
            <SectionIntroBlurb>
              Everything below is designed around outcomes: credibility, conversions, and a site you can trust without embarrassment.
            </SectionIntroBlurb>
          </div>
        </ScrollReveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, idx) => (
            <ScrollReveal key={s.title} delay={0.04 * idx}>
              <div className="glass-panel h-full rounded-[1.75rem] p-6 ring-glow transition hover:-translate-y-1 hover:border-accent/25 hover:shadow-[0_22px_70px_-40px_color-mix(in_oklab,var(--accent-2)_40%,transparent)]">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-accent/25 bg-gradient-to-br from-accent/20 via-accent-2/15 to-accent-3/15 text-accent">
                  {icons[s.icon]}
                </div>
                <h3 className="mt-4 font-[family-name:var(--font-display)] text-lg font-semibold">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
