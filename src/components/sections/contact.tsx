"use client";

import { social, site } from "@/lib/site-config";
import { gmailComposeUrl, gmailComposeWithContent, mailtoWithQuery } from "@/lib/email-links";
import { ScrollReveal } from "@/components/effects/scroll-reveal";
import { motion } from "framer-motion";
import { useMemo, useState, type FormEvent } from "react";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [delivery, setDelivery] = useState<"formspree" | "email" | null>(null);
  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

  const defaultMailto = useMemo(() => {
    return mailtoWithQuery(social.email, {
      subject: `Project inquiry: ${site.name}`,
      body:
        "Hi,\n\nI'd like to discuss a project.\n\nGoals:\nTimeline:\nBudget range:\n\nThanks!",
    });
  }, []);

  function openEmailClientWithDraft(name: string, replyEmail: string, message: string) {
    const subject = `Project inquiry: ${site.name}`;
    const body = [
      `Name: ${name}`,
      `Reply to: ${replyEmail}`,
      "",
      "Project details:",
      message,
      "",
      "***",
      `Sent from the contact form (${site.brand}).`,
    ].join("\n");

    const gmailUrl = gmailComposeWithContent(social.email, subject, body);
    const mailtoBody =
      body.length > 1800
        ? `${body.slice(0, 1800)}\n\n[Truncated for mail app link length. Your Gmail tab has the full message.]`
        : body;
    const mailtoUrl = mailtoWithQuery(social.email, { subject, body: mailtoBody });

    const tab = window.open(gmailUrl, "_blank", "noopener,noreferrer");
    if (!tab) {
      window.location.href = mailtoUrl;
    }
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") ?? "").trim();
    const replyEmail = String(fd.get("email") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();

    if (!formspreeId) {
      setDelivery("email");
      openEmailClientWithDraft(name, replyEmail, message);
      setStatus("sent");
      return;
    }

    setDelivery("formspree");
    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: fd,
      });
      if (!res.ok) throw new Error("bad");
      setStatus("sent");
      form.reset();
    } catch {
      setDelivery(null);
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="border-t border-border bg-muted/10 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
              Contact
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-4xl">
              Tell me what you are building.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              Share goals, timeline, and links. I reply within one business day with next
              steps, usually a short call or a scoped proposal.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <a
                href={social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="glass-panel inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold ring-glow transition hover:bg-muted/30"
              >
                LinkedIn
              </a>
              <a
                href={gmailComposeUrl(social.email)}
                target="_blank"
                rel="noopener noreferrer"
                title="Compose in Gmail (opens in a new tab)"
                className="glass-panel inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold ring-glow transition hover:bg-muted/30"
              >
                Email
              </a>
              <a
                href={social.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="glass-panel inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold ring-glow transition hover:bg-muted/30"
              >
                WhatsApp
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.06}>
            <motion.form
              onSubmit={onSubmit}
              className="glass-panel rounded-[2rem] p-7 ring-glow sm:p-9"
              initial={false}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2 text-sm">
                  <span className="text-muted-foreground">Name</span>
                  <input
                    name="name"
                    required
                    className="w-full rounded-2xl border border-border bg-background/50 px-4 py-3 text-sm outline-none ring-0 transition focus:border-accent"
                    placeholder="Your name"
                  />
                </label>
                <label className="space-y-2 text-sm">
                  <span className="text-muted-foreground">Email</span>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-2xl border border-border bg-background/50 px-4 py-3 text-sm outline-none transition focus:border-accent"
                    placeholder="you@company.com"
                  />
                </label>
              </div>

              <label className="mt-4 block space-y-2 text-sm">
                <span className="text-muted-foreground">Project details</span>
                <textarea
                  name="message"
                  required
                  rows={6}
                  className="w-full resize-y rounded-2xl border border-border bg-background/50 px-4 py-3 text-sm outline-none transition focus:border-accent"
                  placeholder="What outcome do you want in the next 30 to 60 days?"
                />
              </label>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-vibrant inline-flex shrink-0 self-start items-center justify-center whitespace-nowrap rounded-full px-6 py-3 text-sm font-semibold transition disabled:opacity-60"
                >
                  {status === "sending"
                    ? "Sending…"
                    : formspreeId
                      ? "Send message"
                      : "Send via email"}
                </button>
                <p className="min-w-0 flex-1 text-xs leading-relaxed text-muted-foreground">
                  {status === "sent" && delivery === "formspree"
                    ? "Thanks. I will get back to you shortly."
                    : null}
                  {status === "sent" && delivery === "email" ? (
                    <>
                      A new tab should open with Gmail and your message filled in. Send it
                      there. Your answers stay in the form until you clear them. If nothing
                      opened, allow popups for this site, or use{" "}
                      <a
                        href={gmailComposeUrl(social.email)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-2"
                      >
                        Email
                      </a>{" "}
                      and copy from the fields, or{" "}
                      <a href={defaultMailto} className="underline underline-offset-2">
                        open your mail app
                      </a>{" "}
                      (short messages work best).
                    </>
                  ) : null}
                  {status === "error" ? (
                    <>
                      Something went wrong sending the form.{" "}
                      <a
                        href={gmailComposeUrl(social.email)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-2"
                      >
                        Email via Gmail
                      </a>{" "}
                      or{" "}
                      <a href={defaultMailto} className="underline underline-offset-2">
                        mail app
                      </a>
                      .
                    </>
                  ) : null}
                  {status === "idle" ? "No spam. Your details stay private." : null}
                </p>
              </div>
            </motion.form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
