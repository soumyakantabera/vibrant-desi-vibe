import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Below-the-fold block that is not rebuilt by React on page load.
 *
 * src/main.tsx mounts with createRoot, which re-creates the whole prerendered
 * page in JavaScript. On a long page that is the single biggest task on a
 * phone's main thread. On the first load this wrapper instead keeps the
 * prerendered HTML of its block as a static copy (the browser's own HTML
 * parser, far cheaper than React building thousands of elements) and swaps in
 * the live React version only when the block comes within ~800px of the
 * screen, or is tapped or focused first.
 *
 * Nothing changes for search engines or no-JS readers: the prerendered HTML is
 * the same, the wrapper is `display: contents`, and links, ids and text stay in
 * place in the static copy. After the first page, client-side navigation
 * renders live straight away.
 */

/** Prerendered HTML of each block, read by main.tsx before React clears #root. */
const captured = new Map<string, string>();
let capturedPath = "";

export function captureDeferred() {
  capturedPath = window.location.pathname;
  document.querySelectorAll<HTMLElement>("[data-defer]").forEach((el) => {
    if (el.dataset.defer) captured.set(el.dataset.defer, el.innerHTML);
  });
}

let firstLoad = typeof window !== "undefined";

export function Deferred({ id, children }: { id: string; children: ReactNode }) {
  const [html] = useState<string | null>(() => {
    if (!firstLoad || typeof window === "undefined") return null;
    if (window.location.pathname !== capturedPath) return null;
    return captured.get(id) ?? null;
  });
  const [live, setLive] = useState(html === null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only the page the visitor landed on has prerendered HTML to reuse.
    firstLoad = false;
    captured.delete(id);
  }, [id]);

  useEffect(() => {
    if (live) return;
    const el = ref.current;
    if (!el) return;
    const go = () => setLive(true);
    // The wrapper is display: contents and has no box of its own, so watch
    // its children instead.
    const targets = [...el.children];
    if (!targets.length || typeof IntersectionObserver === "undefined") {
      go();
      return;
    }
    const io = new IntersectionObserver((es) => es.some((e) => e.isIntersecting) && go(), {
      rootMargin: "800px 0px",
    });
    targets.forEach((t) => io.observe(t));
    el.addEventListener("pointerdown", go, { once: true });
    el.addEventListener("focusin", go, { once: true });
    return () => {
      io.disconnect();
      el.removeEventListener("pointerdown", go);
      el.removeEventListener("focusin", go);
    };
  }, [live]);

  if (live)
    return (
      <div data-defer={id} style={{ display: "contents" }}>
        {children}
      </div>
    );
  return (
    <div
      ref={ref}
      data-defer={id}
      style={{ display: "contents" }}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: html ?? "" }}
    />
  );
}
