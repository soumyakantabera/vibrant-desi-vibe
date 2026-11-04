import { useSyncExternalStore } from "react";
import { useRouterState } from "@tanstack/react-router";

/**
 * Client-build twin of use-page-label.ts (aliased in vite.config.pages.ts).
 * The page's short name ("Homemakers", "Interactive Speaking") comes from the
 * <meta name="lws-page"> tag the prerender writes into every page, instead of
 * from the whole site's metadata in JavaScript. <HeadSync> swaps that tag on
 * navigation and fires "lws:head", which re-renders the readers below.
 */

function normalise(pathname: string): string {
  return pathname.replace(/\/+$/, "") || "/";
}

function fallback(path: string): string | undefined {
  if (path === "/") return "home";
  const last = path.split("/").filter(Boolean).pop();
  if (!last) return undefined;
  return last
    .replace(/^course-/, "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export function pageLabel(pathname: string): string | undefined {
  const path = normalise(pathname);
  if (typeof document !== "undefined") {
    const meta = document.querySelector<HTMLMetaElement>('meta[name="lws-page"]');
    if (meta && meta.dataset.path === path) return meta.content || undefined;
  }
  return fallback(path);
}

let version = 0;
const listeners = new Set<() => void>();
if (typeof window !== "undefined") {
  window.addEventListener("lws:head", () => {
    version++;
    listeners.forEach((l) => l());
  });
}
function subscribe(l: () => void) {
  listeners.add(l);
  return () => listeners.delete(l);
}

export function usePageLabel(): string | undefined {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  useSyncExternalStore(
    subscribe,
    () => version,
    () => 0,
  );
  return pageLabel(pathname);
}
