import { useEffect, useRef } from "react";
import { useRouterState } from "@tanstack/react-router";

/**
 * Keeps <head> right without shipping every page's metadata in JavaScript.
 *
 * Each page's head (title, description, canonical, Open Graph, JSON-LD) is
 * prerendered into its HTML and marked data-prerender. The client build drops
 * the routes' `head` code (vite/strip-route-head-plugin.ts), so:
 *
 * - First load: the prerendered head stays. Tags the root route renders
 *   itself (viewport, site-wide meta and JSON-LD) would now appear twice, so
 *   the prerendered twin of each is removed.
 * - Navigation inside the app: the destination's prerendered HTML is fetched
 *   (the browser usually has it from the hover/idle prefetch) and its
 *   page-specific head replaces the current one. Same bytes a crawler reads.
 */

const MARK = "data-prerender";

function key(el: Element): string {
  return el.outerHTML.replace(/\sdata-prerender="1"/, "");
}

/** Remove prerendered tags that the app's own <HeadContent> already rendered. */
function dropTwins() {
  const live = new Set<string>();
  document.head.querySelectorAll(`:not([${MARK}])`).forEach((el) => live.add(key(el)));
  document.head.querySelectorAll(`[${MARK}]`).forEach((el) => {
    if (live.has(key(el))) el.remove();
  });
}

async function swapHead(pathname: string, signal: AbortSignal) {
  const res = await fetch(pathname, { signal, credentials: "same-origin" });
  if (!res.ok) return;
  const html = await res.text();
  const doc = new DOMParser().parseFromString(html, "text/html");
  const live = new Set<string>();
  document.head.querySelectorAll(`:not([${MARK}])`).forEach((el) => live.add(key(el)));
  const incoming = [...doc.head.querySelectorAll(`[${MARK}]`)].filter((el) => !live.has(key(el)));
  if (!incoming.length || signal.aborted) return;
  document.head.querySelectorAll(`[${MARK}]`).forEach((el) => el.remove());
  for (const el of incoming) document.head.appendChild(document.importNode(el, true));
  window.dispatchEvent(new Event("lws:head"));
}

export function HeadSync() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      dropTwins();
      return;
    }
    const ctrl = new AbortController();
    swapHead(pathname, ctrl.signal).catch(() => {
      /* offline or aborted: the page itself still works */
    });
    return () => ctrl.abort();
  }, [pathname]);

  return null;
}
