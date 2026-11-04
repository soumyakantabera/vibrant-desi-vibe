import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

/**
 * When a visitor lands on a deep link to one answer (/page#q-…), from a
 * ChatGPT citation, a search "jump to" link or our own answer index, open
 * that FAQ item and bring it into view. Most browsers open a <details> on
 * fragment navigation by themselves; this covers the rest, and the case where
 * React renders the page after the browser has already tried to scroll.
 */
export function OpenAnchor() {
  const hash = useRouterState({ select: (s) => s.location.hash });

  useEffect(() => {
    const go = () => {
      const raw = window.location.hash.slice(1);
      if (!raw) return;
      let id = raw;
      try {
        id = decodeURIComponent(raw);
      } catch {
        /* keep the raw id */
      }
      const el = document.getElementById(id);
      if (!el) return;
      const details = el instanceof HTMLDetailsElement ? el : el.closest("details");
      if (details && !details.open) details.open = true;
      el.scrollIntoView({ block: "start" });
    };
    // After the first paint, so Deferred blocks and fonts have settled.
    const t = window.setTimeout(go, 60);
    window.addEventListener("hashchange", go);
    return () => {
      clearTimeout(t);
      window.removeEventListener("hashchange", go);
    };
  }, [hash]);

  return null;
}
