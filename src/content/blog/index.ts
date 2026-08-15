/**
 * Article bodies, keyed by slug.
 *
 * Statically imported rather than lazily loaded: every article is prerendered
 * to static HTML at build time, and a dynamic import would mean the body is not
 * in the markup a non-JS crawler reads — which is the one thing this site's
 * entire SEO model depends on.
 *
 * The metadata for each of these lives in `src/lib/blog.ts`; a body with no
 * matching entry there has no URL and is never rendered.
 */
import type { ArticleBody } from "./blocks";

import { body as speakingHabits } from "./5-speaking-habits-that-killed-my-hesitation";
import { body as band7Writing } from "./band-7-writing-4-paragraph-template";
import { body as emailPhrases } from "./5-email-phrases-that-sound-more-professional";
import { body as tellMeAboutYourself } from "./tell-me-about-yourself-in-60-seconds";
import { body as bpoRoadmap } from "./bpo-to-client-facing-role-roadmap";

export const ARTICLE_BODIES: Record<string, ArticleBody> = {
  "5-speaking-habits-that-killed-my-hesitation": speakingHabits,
  "band-7-writing-4-paragraph-template": band7Writing,
  "5-email-phrases-that-sound-more-professional": emailPhrases,
  "tell-me-about-yourself-in-60-seconds": tellMeAboutYourself,
  "bpo-to-client-facing-role-roadmap": bpoRoadmap,
};
