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
 * screen, or is tapped or focused first. A swap never happens mid-press, and
 * a tap or keyboard focus on the static copy is replayed on the live one.
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

/** Element-child indices from root to el, to find the same element in the live copy. */
function pathFrom(root: Element, el: Element): number[] | null {
  const path: number[] = [];
  let node: Element | null = el;
  while (node && node !== root) {
    const parent: Element | null = node.parentElement;
    if (!parent) return null;
    path.unshift(Array.prototype.indexOf.call(parent.children, node));
    node = parent;
  }
  return node === root ? path : null;
}

function resolve(root: Element, path: number[]): Element | null {
  let node: Element | null = root;
  for (const i of path) node = node?.children[i] ?? null;
  return node;
}

/** What the visitor did to the static copy, replayed on the live one. */
type Pending = { path: number[]; tag: string; action: "click" | "focus" };

const INTERACTIVE =
  "button, summary, [role='button'], [role='tab'], input, select, textarea, label";

export function Deferred({ id, children }: { id: string; children: ReactNode }) {
  const [html] = useState<string | null>(() => {
    if (!firstLoad || typeof window === "undefined") return null;
    if (window.location.pathname !== capturedPath) return null;
    return captured.get(id) ?? null;
  });
  const [live, setLive] = useState(html === null);
  const ref = useRef<HTMLDivElement>(null);
  const pending = useRef<Pending | null>(null);

  useEffect(() => {
    // Only the page the visitor landed on has prerendered HTML to reuse.
    firstLoad = false;
    captured.delete(id);
  }, [id]);

  // After the swap, repeat the tap or move the focus the visitor gave the
  // static copy, so a first interaction is never lost.
  useEffect(() => {
    const p = pending.current;
    const root = ref.current;
    if (!live || !p || !root) return;
    pending.current = null;
    const el = resolve(root, p.path);
    if (!(el instanceof HTMLElement) || el.tagName !== p.tag) return;
    if (p.action === "click") el.click();
    else el.focus({ preventScroll: true });
  }, [live]);

  useEffect(() => {
    if (live) return;
    const el = ref.current;
    if (!el) return;
    let pressing = false;
    let wantLive = false;
    // Never swap in the middle of a press: wait until the click has fired.
    const go = () => {
      if (pressing) wantLive = true;
      else setLive(true);
    };
    const onDown = () => {
      pressing = true;
    };
    const onUp = () => {
      if (!pressing) return;
      pressing = false;
      if (wantLive) setTimeout(() => setLive(true), 0);
    };
    const onClick = (e: MouseEvent) => {
      const target = e.target instanceof Element ? e.target : null;
      // Links in the static copy are real links: let the browser follow them.
      if (!target || target.closest("a[href]")) return;
      const hit = target.closest(INTERACTIVE);
      if (hit && el.contains(hit)) {
        const path = pathFrom(el, hit);
        if (path) pending.current = { path, tag: hit.tagName, action: "click" };
      }
      setTimeout(() => setLive(true), 0);
    };
    const onFocus = (e: FocusEvent) => {
      if (pressing) return; // a press is handled by onClick
      const target = e.target instanceof Element ? e.target : null;
      if (target && el.contains(target)) {
        const path = pathFrom(el, target);
        if (path) pending.current = { path, tag: target.tagName, action: "focus" };
      }
      setLive(true);
    };
    // The wrapper is display: contents and has no box of its own, so watch
    // its children instead.
    const targets = [...el.children];
    if (!targets.length || typeof IntersectionObserver === "undefined") {
      setLive(true);
      return;
    }
    const io = new IntersectionObserver((es) => es.some((e) => e.isIntersecting) && go(), {
      rootMargin: "800px 0px",
    });
    targets.forEach((t) => io.observe(t));
    el.addEventListener("pointerdown", onDown);
    el.addEventListener("click", onClick);
    el.addEventListener("focusin", onFocus);
    window.addEventListener("pointerup", onUp, true);
    window.addEventListener("pointercancel", onUp, true);
    return () => {
      io.disconnect();
      el.removeEventListener("pointerdown", onDown);
      el.removeEventListener("click", onClick);
      el.removeEventListener("focusin", onFocus);
      window.removeEventListener("pointerup", onUp, true);
      window.removeEventListener("pointercancel", onUp, true);
    };
  }, [live]);

  if (live)
    return (
      <div ref={ref} data-defer={id} style={{ display: "contents" }}>
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
