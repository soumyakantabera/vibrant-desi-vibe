import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

/**
 * Sections further down the page rise in once as they come into view.
 *
 * Only sections that start below the first screen are touched — whatever is
 * on screen at load stays exactly as it was painted (same contract as
 * <Reveal>). The prerendered HTML has no data-rise at all, so without
 * JavaScript, or under prefers-reduced-motion, every section is simply
 * visible. Blocks that <Deferred> swaps in later are picked up by the
 * MutationObserver. CSS: [data-rise] in src/styles.css.
 */
export function SectionRise() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const main = document.getElementById("main-content");
    if (!main) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          (e.target as HTMLElement).dataset.rise = "in";
          io.unobserve(e.target);
        }
      },
      { rootMargin: "0px 0px -6% 0px" },
    );

    const arm = (el: HTMLElement) => {
      if (el.dataset.rise) return;
      // A section inside a section rises with its parent.
      if (el.parentElement?.closest("[data-rise]")) return;
      if (el.getBoundingClientRect().top < window.innerHeight) return;
      el.dataset.rise = "out";
      io.observe(el);
    };
    const scan = () => main.querySelectorAll<HTMLElement>("section").forEach(arm);

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
    };
  }, [pathname]);

  return null;
}
