import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Two-column section title row: narrower title track, wider intro column. */
export const sectionHeaderGrid = cn(
  "grid gap-4 md:grid-cols-[minmax(0,28%)_minmax(0,72%)] md:gap-x-8 md:items-start",
);

const scrollHide =
  "[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden";

/**
 * Intro line below the headline on md+. Short copy stays right-aligned; long one-line copy
 * scrolls horizontally from the start (avoids `text-right` + `overflow-x` clipping both ends).
 */
export function SectionIntroBlurb({ children }: { children: ReactNode }) {
  return (
    <div className="mt-2 min-w-0 w-full md:mt-[5.75rem] md:flex md:justify-end">
      <div
        className={cn(
          "inline-flex max-w-full min-w-0 overflow-x-auto pb-0.5",
          scrollHide,
        )}
      >
        <p className="m-0 flex-none whitespace-nowrap text-sm leading-relaxed text-muted-foreground">
          {children}
        </p>
      </div>
    </div>
  );
}
