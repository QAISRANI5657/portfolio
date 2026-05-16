import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";
import { AppProviders } from "@/components/providers/app-providers";
import { site } from "@/lib/site-config";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.brand} | ${site.title}`,
    template: `%s | ${site.brand}`,
  },
  description: site.tagline,
  keywords: [
    "freelance web developer",
    "Next.js portfolio",
    "AI web development",
    "vibe coding",
    "landing pages",
    "UI UX",
    "Framer Motion",
    "Tailwind CSS",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    title: `${site.brand} | ${site.title}`,
    description: site.tagline,
    type: "website",
    locale: site.locale,
    url: site.url,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.brand} | ${site.title}`,
    description: site.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dmSans.variable} ${syne.variable} min-h-dvh antialiased`}>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
