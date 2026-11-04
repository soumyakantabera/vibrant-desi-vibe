import { RETIRED_CITY_PATHS, RETIRED_CITY_REDIRECT, RETIRED_CITY_TARGET } from "@/lib/cities";

/**
 * Old URL → new URL. GitHub Pages cannot send a 301, so `scripts/prerender.mjs`
 * writes a tiny static page at each old path with an instant meta refresh and
 * a canonical to the new URL — Google treats that as a permanent redirect.
 * Old paths stay out of ALL_PATHS, the sitemap and the llms files.
 */
export const REDIRECTS: Record<string, string> = {
  // The free consultation is counselling, not a class; the URL said "demo".
  // Moved October 2026.
  "/book-free-demo": "/free-consultation",
  // The paid Demo Class was retired November 2026; demo searches start at the
  // free consultation.
  "/course-demo-session": "/free-consultation",
  // Business English was folded into Interactive Speaking (meetings, calls,
  // presentations) and Intermediate (emails, tone) in November 2026.
  "/course-business-english": "/course-interactive-speaking",
  ...Object.fromEntries(
    RETIRED_CITY_PATHS.map((from) => [from, RETIRED_CITY_TARGET[from] ?? RETIRED_CITY_REDIRECT]),
  ),
};

/**
 * Moved pages whose old `.md` mirror keeps serving the new page's text, for
 * GPT Actions and assistants built on the old URL. Retired pages are not here:
 * their redirect target is a different page, not the same one renamed.
 */
export const MOVED_MARKDOWN = ["/book-free-demo"] as const;
