# Premium Portfolio: Next.js (Static Export)

A conversion focused, animated portfolio for freelance platforms (LinkedIn, Upwork, Fiverr). Ships as static HTML/CSS/JS for **GitHub Pages**, and works on **Vercel** with zero config.

## Stack

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** (scroll reveals, hovers, loader, counters)
- **next-themes** (dark / light)
- **GitHub REST API** (latest repos + stars/forks) + public contribution chart image

## Quick start

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Personalize content

1. **`src/lib/site-config.ts`**: name, headline, URLs, stats, about copy, GitHub username default.
2. **`src/lib/projects.ts`**: projects, services, skills, testimonials; swap Unsplash URLs for screenshots in `public/`.
3. **`.env.local`**: copy from `.env.example` and fill real links (recommended for GitHub API + absolute SEO URLs).

## Production build (static export)

```bash
npm run build
```

Static output is written to **`out/`**. This repo uses `output: "export"` in `next.config.ts`.

## Deploy to GitHub Pages (project site)

If your site URL looks like `https://<user>.github.io/<repo>/`:

1. Set **`NEXT_PUBLIC_BASE_PATH`** to your repository name with a leading slash, e.g. `/PortFolio`.
2. Set **`NEXT_PUBLIC_SITE_URL`** to the full public URL (no trailing slash is fine).
3. Build locally or in CI, then publish the **`out/`** folder to the `gh-pages` branch (or use **GitHub Actions** with `peaceiris/actions-gh-pages`).

Example build env in GitHub Actions:

```yaml
env:
  NEXT_PUBLIC_BASE_PATH: /PortFolio
  NEXT_PUBLIC_SITE_URL: https://yourusername.github.io/PortFolio
  NEXT_PUBLIC_GITHUB_USERNAME: QAISRANI5657
```

**User/organization site** (`https://<user>.github.io` with no subpath): leave `NEXT_PUBLIC_BASE_PATH` unset.

## Deploy to Vercel

Import the repo, set the same `NEXT_PUBLIC_*` variables, deploy. You typically **do not** need `NEXT_PUBLIC_BASE_PATH` on Vercel’s default domain.

## Contact form

- With **`NEXT_PUBLIC_FORMSPREE_ID`**: submits to Formspree.
- Without it: **Submit** opens a prefilled **mailto:** using your configured email.

## Design notes (palette, type, motion)

- **Palette**: deep slate background (`#030712`) + cyan (`#38bdf8`) + violet (`#a78bfa`) accents; light mode uses cool off‑white (`#f4f6fb`) with blue/violet accents for a SaaS feel.
- **Typography**: **Syne** (display) + **DM Sans** (body) via `next/font` for fast, stable loading.
- **Motion**: page load reveal, scroll blur in sections, springy cards, spring cursor glow (desktop), subtle particle field, stat counters on view.
- **Conversion**: repeated CTAs (Book a call / Hire me), trust strip in hero, services framed as outcomes, testimonials + GitHub proof, low friction contact.

## Scripts

| Command        | Description                |
| -------------- | -------------------------- |
| `npm run dev`  | Dev server (Turbopack)     |
| `npm run build`| Static export to `out/`    |
| `npm run start`| Serves production (non-export) |
| `npm run lint` | ESLint                     |

## License

Private / personal use; update as you prefer.
