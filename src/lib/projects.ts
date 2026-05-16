export type Project = {
  id: string;
  title: string;
  description: string;
  stack: string[];
  tags: string[];
  repoUrl: string;
  demoUrl: string;
  image: string;
};

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

/** `image` can be a remote URL or a file in `public/` (e.g. `/ai-vibe-web-studio.png`). */
export const projects: Project[] = [
  {
    id: "smilecraft-dental",
    title: "SmileCraft Dental",
    description:
      "Modern dental studio site with services, team profile, appointment booking, patient reviews, smile gallery, and FAQ — built to build trust and drive new patient bookings.",
    stack: ["React", "Tailwind CSS", "Framer Motion", "GitHub Pages"],
    tags: ["Healthcare", "Booking", "Landing"],
    repoUrl: "https://github.com/qaisrani5657/dentist",
    demoUrl: "https://qaisrani5657.github.io/dentist/",
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "urban-flame-kitchen",
    title: "Urban Flame Kitchen",
    description:
      "Modern fine dining site with menu categories, chef features, reservations, guest reviews, gallery, and contact — designed to capture the open flame brand and convert visitors into table bookings.",
    stack: ["React", "Tailwind CSS", "Framer Motion", "GitHub Pages"],
    tags: ["Restaurant", "Fine Dining", "Booking"],
    repoUrl: "https://github.com/qaisrani5657/menu",
    demoUrl: "https://qaisrani5657.github.io/menu/",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "novacart",
    title: "NovaCart",
    description:
      "Premium ecommerce showcase with product categories, featured catalog, filters, customer reviews, and newsletter signup — designed for tech retail with a polished, conversion focused storefront feel.",
    stack: ["React", "Tailwind CSS", "Framer Motion", "GitHub Pages"],
    tags: ["Ecommerce", "Retail", "Catalog"],
    repoUrl: "https://github.com/qaisrani5657/ecommerce",
    demoUrl: "https://qaisrani5657.github.io/ecommerce/",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "ai-vibe-web-studio",
    title: "AI Vibe Web Studio",
    description:
      "Premium agency site for AI powered web development: services, portfolio, process, testimonials, and contact — built to convert founders and marketing teams with fast launch positioning.",
    stack: ["React", "Tailwind CSS", "Framer Motion", "GitHub Pages"],
    tags: ["Agency", "Landing", "AI"],
    repoUrl: "https://github.com/qaisrani5657/services",
    demoUrl: "https://qaisrani5657.github.io/services/",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  },
];

export const services = [
  {
    title: "AI powered website development",
    description:
      "Production ready sites using AI accelerated workflows, without sacrificing code quality, accessibility, or SEO.",
    icon: "spark",
  },
  {
    title: "Vibe coding sessions",
    description:
      "Rapid prototyping and iteration: we align on the goal, then I ship polished UI in tight feedback loops.",
    icon: "zap",
  },
  {
    title: "Landing pages that convert",
    description:
      "Hero clarity, social proof, and frictionless CTAs, structured to turn cold traffic into booked calls.",
    icon: "target",
  },
  {
    title: "Portfolio & personal brand sites",
    description:
      "Distinctive layouts, motion design, and narrative flow so you stand out on LinkedIn and marketplaces.",
    icon: "user",
  },
  {
    title: "SEO & technical content structure",
    description:
      "Metadata, schema, sitemaps, and on page hierarchy tuned for discovery and rich results.",
    icon: "search",
  },
  {
    title: "Speed & Core Web Vitals",
    description:
      "Lazy loading, font strategy, caching, and bundle discipline for sub second perceived performance.",
    icon: "gauge",
  },
  {
    title: "Modern UI/UX systems",
    description:
      "Glassmorphism, depth, typography rhythm, and component libraries that scale with your product.",
    icon: "layout",
  },
  {
    title: "Automation & integrations",
    description:
      "Forms, CRM hooks, analytics, newsletters, and serverless glue, wired cleanly and documented.",
    icon: "plug",
  },
] as const;

export const skillBars = [
  { name: "React", level: 95 },
  { name: "Next.js", level: 92 },
  { name: "Tailwind CSS", level: 96 },
  { name: "JavaScript", level: 94 },
  { name: "TypeScript", level: 88 },
  { name: "WordPress", level: 78 },
  { name: "SEO", level: 90 },
  { name: "AI tools (Cursor, Copilot, etc.)", level: 93 },
  { name: "GitHub & CI", level: 88 },
  { name: "APIs & integrations", level: 87 },
  { name: "Framer Motion", level: 91 },
] as const;

/** Short credibility lines shown above the testimonial grid. */
export const proofStrip = [
  { id: "reviews", text: "Consistent 5 star outcomes on freelance platforms" },
  { id: "response", text: "Typical first reply within one business day" },
  { id: "regions", text: "Collaboration across US, EU, UK, GCC, and APAC" },
  { id: "repeat", text: "Many clients return for phase two and referrals" },
] as const;

export const testimonials: Testimonial[] = [
  {
    id: "jordan-lee",
    quote:
      "Shipped a landing page that actually matched the Figma pixel for pixel, but felt faster and more alive. Our demo requests doubled in two weeks.",
    name: "Jordan Lee",
    role: "Founder, B2B SaaS",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "priya-desai",
    quote:
      "Clear async updates, strong opinions when it mattered, and zero drama. The site scores 98 performance and looks expensive, in the best way.",
    name: "Priya Desai",
    role: "Marketing Lead",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "marcus-chen",
    quote:
      "Finally a developer who understands narrative flow. The portfolio he built for me is the reason I'm getting inbound on Upwork.",
    name: "Marcus Chen",
    role: "Independent Consultant",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "alex-rivera",
    quote:
      "We had a hard launch date. He owned the frontend end to end, caught edge cases early, and the marketing team could publish without filing bugs for days.",
    name: "Alex Rivera",
    role: "Product Manager, Fintech",
    avatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "sam-okafor",
    quote:
      "We white label his builds for two enterprise clients. Handoffs are clean: README, env notes, and Loom walkthroughs. Our PMs actually sleep before launch.",
    name: "Sam Okafor",
    role: "Owner, Digital Agency",
    avatar:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&crop=faces&w=256&h=256&q=80",
  },
  {
    id: "elena-volkov",
    quote:
      "He rebuilt our funnel pages with sharper copy hierarchy and faster LCP. Paid signup rate climbed without us increasing ad spend. That is the whole brief.",
    name: "Elena Volkov",
    role: "Head of Growth, B2C",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
  },
];
