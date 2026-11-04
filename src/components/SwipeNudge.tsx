import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

/**
 * Phones only: each `.phone-swipe` row peeks once when it first comes into
 * view — it slides a card's width part-way and back, so the visitor sees the
 * row moves. Once the visitor scrolls a row themselves it gets
 * `data-swiped`, which hides its "Swipe" hint (CSS: .swipe-hint).
 *
 * No effect on desktop (the rows are grids there), without JavaScript, or
 * under prefers-reduced-motion. Rows that <Deferred> swaps in later are picked
 * up by the MutationObserver.
 */
export function SwipeNudge() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const phone = window.matchMedia("(max-width: 639px)");
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const main = document.getElementById("main-content");
    if (!main) return;
    const timers = new Set<number>();
    const later = (fn: () => void, ms: number) => {
      const t = window.setTimeout(() => {
        timers.delete(t);
        fn();
      }, ms);
      timers.add(t);
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const row = e.target as HTMLElement;
          io.unobserve(row);
          if (!phone.matches || still || row.dataset.swiped) continue;
          if (row.scrollWidth <= row.clientWidth + 8 || row.scrollLeft > 4) continue;
          row.dataset.nudging = "1";
          later(
            () => row.scrollTo({ left: Math.min(72, row.clientWidth * 0.2), behavior: "smooth" }),
            350,
          );
          later(() => row.scrollTo({ left: 0, behavior: "smooth" }), 1050);
          later(() => delete row.dataset.nudging, 1700);
        }
      },
      { threshold: 0.6 },
    );

    const onScroll = (ev: Event) => {
      const row = ev.currentTarget as HTMLElement;
      if (row.dataset.nudging || row.scrollLeft < 24) return;
      row.dataset.swiped = "1";
    };

    const seen = new WeakSet<HTMLElement>();
    const scan = () =>
      main.querySelectorAll<HTMLElement>(".phone-swipe").forEach((row) => {
        if (seen.has(row)) return;
        seen.add(row);
        row.addEventListener("scroll", onScroll, { passive: true });
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
    mo.observe(main, { childList: true, subtree: true });
    return () => {
      io.disconnect();
      mo.disconnect();
      if (queued) cancelAnimationFrame(queued);
      timers.forEach((t) => clearTimeout(t));
      main
        .querySelectorAll<HTMLElement>(".phone-swipe")
        .forEach((row) => row.removeEventListener("scroll", onScroll));
    };
  }, [pathname]);

  return null;
}
