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
import { ALL_PATHS, PAGES, type HeadResult, pageHead } from "../src/lib/seo";

export { ALL_PATHS, PAGES };
export { COURSE_SEO, SITE_URL, SITE_NAME, abs, markdownPathFor } from "../src/lib/seo";
export { COURSES } from "../src/lib/courses";
// The AI-readable layer — llms.txt, llms-full.txt and the per-page Markdown
// mirrors, all built from the same tables the pages themselves render from.
export {
  buildLlmsTxt,
  buildLlmsFullTxt,
  htmlToMarkdown,
  metaFor,
  pageMarkdown,
} from "../src/lib/llms";

/** The head payload for a path, from the same source the runtime app uses. */
export function headFor(path: string): HeadResult {
  if (PAGES[path]) return pageHead(path);

  const slug = path.replace(/^\/course-/, "");
  const course = COURSES[slug];
  if (!course) throw new Error(`prerender: no page or course for path "${path}"`);
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
