import { useRouterState } from "@tanstack/react-router";

import { BLOG_POSTS } from "@/lib/blog";
import { COURSE_SEO, PAGES } from "@/lib/seo";

/** Readable name of a page for WhatsApp first messages ("Business English"). */
export function pageLabel(pathname: string): string | undefined {
  const path = pathname.replace(/\/+$/, "") || "/";
  if (path === "/") return "home";
  if (PAGES[path]) return PAGES[path].shortTitle;
  if (path.startsWith("/course-")) return COURSE_SEO[path.slice("/course-".length)]?.shortTitle;
  if (path.startsWith("/blog/")) {
    const post = BLOG_POSTS.find((p) => `/blog/${p.slug}` === path);
    return post ? `blog: ${post.title}` : "blog";
  }
  return undefined;
}

/** The current page's label, read from the router so SSR and the client agree. */
export function usePageLabel(): string | undefined {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return pageLabel(pathname);
}
