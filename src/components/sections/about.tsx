import { SectionIntroBlurb, sectionHeaderGrid } from "@/lib/section-intro-blurb";
import { about, techPills } from "@/lib/site-config";
import { ScrollReveal } from "@/components/effects/scroll-reveal";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
      <ScrollReveal>
        <div className={sectionHeaderGrid}>
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
              About
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-4xl">
              {about.headline}
            </h2>
          </div>
          <SectionIntroBlurb>
            Clear scope, crisp UI, measurable outcomes, built for founders who care about first impressions.
          </SectionIntroBlurb>
        </div>
      </ScrollReveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <ScrollReveal className="glass-panel rounded-[2rem] p-7 ring-glow sm:p-9" delay={0.05}>
          <div className="space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {about.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <ul className="mt-8 grid gap-3 sm:grid-cols-3">
            {about.highlights.map((h) => (
              <li
                key={h}
                className="rounded-2xl border border-border bg-background/40 px-4 py-3 text-sm font-medium text-foreground"
              >
                {h}
              </li>
            ))}
          </ul>
        </ScrollReveal>

        <ScrollReveal className="glass-panel rounded-[2rem] p-7 ring-glow sm:p-9" delay={0.1}>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
            Technologies
          </p>
          <p className="mt-3 text-lg font-semibold">What I ship with</p>
          <p className="mt-2 text-sm text-muted-foreground">
            A pragmatic toolkit, chosen for speed, maintainability, and long-term SEO health.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {techPills.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border bg-muted/30 px-3 py-1 text-xs font-medium text-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
