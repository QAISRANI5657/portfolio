/**
 * Personalize this file (or override via NEXT_PUBLIC_* env vars where noted).
 * Keep client-safe values only in env-prefixed fields used from client components.
 */

import { resolveContactEmail } from "./email-links";
import { withBasePath } from "./utils";

export const site = {
  /** Browser / nav brand */
  brand: "Portfolio",
  name: "Muhammad Saran Muslim",
  title: "AI Powered Web Developer · Vibe Coder",
  tagline:
    "I ship premium, conversion focused websites with modern stacks, motion design, and AI accelerated delivery.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://qaisrani5657.github.io/portfolio",
  locale: "en_US",
  /** Served from `public/profile.png` (basePath-aware for GitHub Pages). */
  profileImage: withBasePath("/profile.png"),
};

export const social = {
  github:
    process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/QAISRANI5657",
  linkedin:
    process.env.NEXT_PUBLIC_LINKEDIN_URL ||
    "https://www.linkedin.com/in/muhammad-saran-muslim",
  email: resolveContactEmail(process.env.NEXT_PUBLIC_EMAIL),
  whatsapp:
    process.env.NEXT_PUBLIC_WHATSAPP_URL ||
    "https://wa.me/923363458484?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20project",
  twitter: process.env.NEXT_PUBLIC_TWITTER_URL || "",
};

export const stats = [
  { label: "Websites shipped", value: 24, suffix: "+" },
  { label: "Avg. page insights score", value: 90, suffix: "+" },
  { label: "Client satisfaction", value: 100, suffix: "%" },
];

export const about = {
  headline: "I turn ambitious ideas into polished web experiences.",
  body: [
    "Clients hire me when they need a site that feels like a premium product: fast, accessible, animated with intent, and built to convert visitors into leads.",
    "I combine vibe coding (rapid, high quality iteration with AI tooling) with solid engineering in React and Next.js, so you get startup grade UX without enterprise timelines.",
  ],
  highlights: [
    "Product minded delivery",
    "SEO & performance baked in",
    "Clear communication & async friendly",
  ],
};

export const techPills = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "WordPress",
  "REST & GraphQL APIs",
  "Vercel / GitHub Pages",
];
