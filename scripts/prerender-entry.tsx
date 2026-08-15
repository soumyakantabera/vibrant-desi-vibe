/**
 * SSR entry used only at build time by `scripts/prerender.mjs`.
 *
 * It renders each route to a static HTML string so the GitHub Pages deploy
 * ships real, readable markup instead of an empty `<div id="root">`. This is
 * what makes the site legible to crawlers that do not execute JavaScript —
 * which is all of the AI crawlers (GPTBot, OAI-SearchBot, ChatGPT-User,
 * ClaudeBot, PerplexityBot) and, in practice, most non-Google search bots.
 */
import { renderToString } from "react-dom/server";
import { RouterProvider, createRouter, createMemoryHistory } from "@tanstack/react-router";
import { QueryClient } from "@tanstack/react-query";

import { routeTree } from "../src/routeTree.gen";
import { COURSES } from "../src/lib/courses";
import { courseSeo } from "../src/components/CoursePage";
import { getPostBySlug } from "../src/lib/blog";
import { ARTICLE_BODIES } from "../src/content/blog";
import { countWords } from "../src/content/blog/blocks";
import { ALL_PATHS, PAGES, type HeadResult, blogPostHead, pageHead } from "../src/lib/seo";

export { ALL_PATHS, PAGES };
export { COURSE_SEO, SITE_URL, SITE_NAME, abs, markdownPathFor } from "../src/lib/seo";
export { COURSES } from "../src/lib/courses";
export { BLOG_POSTS, getPostsSorted } from "../src/lib/blog";
// The AI-readable layer — llms.txt, llms-full.txt and the per-page Markdown
// mirrors, all built from the same tables the pages themselves render from.
export {
  buildLlmsTxt,
  buildLlmsFullTxt,
  htmlToMarkdown,
  metaFor,
  pageMarkdown,
} from "../src/lib/llms";

/**
 * Real body length of each article, so the build can check it against the
 * `wordCount` declared in `src/lib/blog.ts`.
 *
 * `wordCount` goes into the BlogPosting as a factual claim about the page. It
 * is declared as data rather than computed at render time because pulling every
 * article body into `src/lib/seo.ts` would put all five into the main bundle —
 * so the number can drift the moment anyone edits a paragraph. This is what
 * makes the drift loud instead of silent.
 */
export function actualWordCounts(): Record<string, number> {
  return Object.fromEntries(
    Object.entries(ARTICLE_BODIES).map(([slug, body]) => [slug, countWords(body)]),
  );
}

/** The head payload for a path, from the same source the runtime app uses. */
export function headFor(path: string): HeadResult {
  if (PAGES[path]) return pageHead(path);

  if (path.startsWith("/blog/")) {
    const post = getPostBySlug(path.slice("/blog/".length));
    if (!post) throw new Error(`prerender: no blog post for path "${path}"`);
    return blogPostHead(post);
  }

  const slug = path.replace(/^\/course-/, "");
  const course = COURSES[slug];
  if (!course) throw new Error(`prerender: no page, course or post for path "${path}"`);
  return courseSeo(course);
}

/** Renders the app at `path` to an HTML string (the contents of #root). */
export async function renderPath(path: string): Promise<string> {
  const router = createRouter({
    routeTree,
    context: { queryClient: new QueryClient() },
    history: createMemoryHistory({ initialEntries: [path] }),
    scrollRestoration: true,
  });

  await router.load();
  return renderToString(<RouterProvider router={router} />);
}
