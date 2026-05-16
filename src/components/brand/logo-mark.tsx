"use client";

import { useId } from "react";
import { cn } from "@/lib/utils";

/**
 * Hex frame + inner prism; matches `src/app/icon.tsx` favicon.
 */
export function LogoMark({
  className,
  size = 34,
}: {
  className?: string;
  /** Pixel size (square) */
  size?: number;
}) {
  const gid = `logo-grad-${useId().replace(/:/g, "")}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      className={cn("shrink-0 overflow-visible", className)}
      aria-hidden
    >
      <defs>
        <linearGradient id={gid} x1="4" y1="2" x2="28" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="#22d3ee" />
          <stop offset="0.5" stopColor="#a78bfa" />
          <stop offset="1" stopColor="#fb7185" />
        </linearGradient>
      </defs>
      <path
        d="M16 2 28.5 9.25v13.5L16 30 3.5 22.75V9.25L16 2Z"
        fill={`url(#${gid})`}
        className="drop-shadow-[0_6px_18px_color-mix(in_oklab,var(--accent)_45%,transparent)]"
      />
      <path d="m16 9.5 5.2 3.8v5.4L16 22.5l-5.2-3.8v-5.4L16 9.5Z" className="fill-background" />
    </svg>
  );
}
