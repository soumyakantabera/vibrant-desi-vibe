import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

/** How many times a row peeks before it settles. */
const PEEKS = 3;
/** Gap between the start of one peek and the next (ms). */
const EVERY = 1300;
/** How long a peek stays out before sliding back (ms). */
const HOLD = 550;

/**
 * Swipe suggestion for sideways rows: `.phone-swipe` card rows (phones) and
 * any other scroller marked `data-swipe` (video track, testimonial slider,
 * wide tables). When a row first comes into view it slides part of a card
 * sideways and back, three times, so the visitor sees there is more to the
 * right. The first touch, click or wheel on the row stops it at once. Once the
 * visitor scrolls a row themselves it gets `data-swiped`, which hides its
 * "Swipe" hint (CSS: .swipe-hint).
 *
 * A row that does not overflow (a `.phone-swipe` grid from 640px up, a table
 * that fits) never moves. Nothing runs without JavaScript or under
 * prefers-reduced-motion. Rows that <Deferred> swaps in later are picked up by
 * the MutationObserver.
 */
const ROWS = ".phone-swipe, [data-swipe]";

export function SwipeNudge() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Watch the whole body: the route's <main> can be swapped out after the
    // first render (code-split routes, <Deferred>), which would strand an
    // observer tied to the first one.
    const root = document.body;
    const timers = new Map<HTMLElement, number[]>();
    const later = (row: HTMLElement, fn: () => void, ms: number) => {
      const t = window.setTimeout(fn, ms);
      const list = timers.get(row) ?? [];
      list.push(t);
      timers.set(row, list);
    };
    const stop = (row: HTMLElement) => {
      timers.get(row)?.forEach((t) => clearTimeout(t));
      timers.delete(row);
      delete row.dataset.nudging;
    };

    const peek = (row: HTMLElement) => {
      row.dataset.nudging = "1";
      const left = Math.round(Math.min(64, row.clientWidth * 0.18));
      for (let i = 0; i < PEEKS; i++) {
        const at = 350 + i * EVERY;
        later(row, () => row.scrollTo({ left, behavior: "smooth" }), at);
        later(row, () => row.scrollTo({ left: 0, behavior: "smooth" }), at + HOLD);
      }
      later(row, () => stop(row), 350 + (PEEKS - 1) * EVERY + HOLD + 650);
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const row = e.target as HTMLElement;
          io.unobserve(row);
          if (row.dataset.swiped) continue;
          if (row.scrollWidth <= row.clientWidth + 8 || row.scrollLeft > 4) continue;
          peek(row);
        }
      },
      // Fires when the row crosses the middle half of the screen, so a tall
      // table (never 60% visible on a phone) still peeks.
      { rootMargin: "-25% 0px -25% 0px", threshold: 0 },
    );

    const onScroll = (ev: Event) => {
      const row = ev.currentTarget as HTMLElement;
      if (row.dataset.nudging || row.scrollLeft < 24) return;
      row.dataset.swiped = "1";
    };
    // The visitor took over: stop peeking and leave the row where it is.
    const onTouch = (ev: Event) => {
      const row = ev.currentTarget as HTMLElement;
      if (row.dataset.nudging) stop(row);
    };

    const seen = new Set<HTMLElement>();
    const scan = () =>
      root.querySelectorAll<HTMLElement>(ROWS).forEach((row) => {
        if (seen.has(row)) return;
        seen.add(row);
        row.addEventListener("scroll", onScroll, { passive: true });
        row.addEventListener("pointerdown", onTouch, { passive: true });
        row.addEventListener("touchstart", onTouch, { passive: true });
        row.addEventListener("wheel", onTouch, { passive: true });
        io.observe(row);
      });

    let queued = 0;
    const mo = new MutationObserver(() => {
      if (queued) return;
      queued = requestAnimationFrame(() => {
        queued = 0;
        scan();
      });
    });
    scan();
    mo.observe(root, { childList: true, subtree: true });
    return () => {
      io.disconnect();
      mo.disconnect();
      if (queued) cancelAnimationFrame(queued);
      seen.forEach((row) => {
        stop(row);
        row.removeEventListener("scroll", onScroll);
        row.removeEventListener("pointerdown", onTouch);
        row.removeEventListener("touchstart", onTouch);
        row.removeEventListener("wheel", onTouch);
      });
    };
  }, [pathname]);

  return null;
}
