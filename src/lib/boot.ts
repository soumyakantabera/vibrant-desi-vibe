/**
 * The app's side of the boot gate (src/lib/boot-script.ts).
 *
 * The inline gate can see the stylesheet, the fonts and the images for itself,
 * but it cannot know whether React has finished building the page — only React
 * can say that. `markAppReady()` is that message. Everything else about the
 * gate, including every deadline that guarantees the page appears anyway,
 * lives in the inline script; nothing here is load-bearing for the site
 * showing up.
 */

type BootGate = {
  ready: () => void;
  reveal: () => void;
  signals: Record<string, boolean>;
};

function gate(): BootGate | undefined {
  if (typeof window === "undefined") return undefined;
  return (window as unknown as { __lwsBoot?: BootGate }).__lwsBoot;
}

/**
 * Tell the gate the page is built. Called after mount, one frame *after* the
 * browser has had a chance to paint the mounted tree, so "ready" means the
 * pixels exist rather than that React returned from render.
 *
 * Idempotent — StrictMode's double effects and the two entry points
 * (src/main.tsx for the static build, the root route for SSR) may all call it.
 */
export function markAppReady(): void {
  const boot = gate();
  if (!boot) return;
  requestAnimationFrame(() => requestAnimationFrame(() => boot.ready()));
}

/**
 * Prefetch a few likely next pages once the browser is idle and the gate has
 * opened. Hovering a link already preloads it (`defaultPreload: "intent"` in
 * src/router.tsx); this covers the reader who scrolls and taps without
 * hovering, which on a phone is all of them.
 *
 * Deliberately meek: it waits for idle time, skips save-data and 2G
 * connections entirely, and swallows every failure — a prefetch that costs the
 * reader anything has defeated its own purpose.
 */
export function prefetchWhenIdle(load: (path: string) => Promise<unknown>, paths: string[]): void {
  if (typeof window === "undefined") return;

  const conn = (
    navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }
  ).connection;
  if (conn?.saveData || /(^|-)2g$/.test(conn?.effectiveType ?? "")) return;

  const idle =
    (window as Window & { requestIdleCallback?: (cb: () => void) => number }).requestIdleCallback ??
    ((cb: () => void) => window.setTimeout(cb, 1200));

  idle(() => {
    for (const path of paths) void load(path).catch(() => {});
  });
}
