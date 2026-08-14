import { useEffect, useRef, type ElementType, type ReactNode } from "react";

/**
 * Scroll-in animation for a block of the page.
 *
 * Two rules keep this from ever making the site look broken:
 *
 *  1. The hidden state is applied by JavaScript, after mount. The server-
 *     rendered and prerendered HTML is plain, visible markup, so a reader with
 *     no JavaScript (and every crawler that does not run it) sees the full
 *     page, and content can never get stuck at opacity 0 because a bundle
 *     failed to load.
 *  2. Anything already on screen when the effect runs is marked as revealed
 *     immediately, with no animation. On a slow connection the prerendered
 *     text is painted long before React arrives; fading it back out and in
 *     again would be exactly the flicker we are trying to remove.
 *
 * `stagger` animates the direct children in sequence instead of the box
 * itself, which is what card grids want. Because this renders as whatever
 * element you ask for — with your own classes — it can replace a grid
 * container in place without adding a wrapper that would break the layout.
 */
export function Reveal({
  as: Tag = "div" as ElementType,
  className = "",
  children,
  delay = 0,
  stagger = false,
  ...rest
}: {
  as?: ElementType;
  className?: string;
  children: ReactNode;
  /** Extra delay in ms, for hand-tuned sequencing. */
  delay?: number;
  /** Animate direct children one after another rather than the box itself. */
  stagger?: boolean;
} & Record<string, unknown>) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const attr = stagger ? "revealStagger" : "reveal";
    const reveal = () => {
      el.dataset[attr] = "in";
    };

    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduced || typeof IntersectionObserver === "undefined") {
      reveal();
      return;
    }

    // Already visible (or nearly): show it as-is, no fade.
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) {
      reveal();
      return;
    }

    el.dataset[attr] = "out";
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          reveal();
          io.disconnect();
        }
      },
      // Fire a little before the box is fully on screen so the animation has
      // finished by the time the reader's eye gets there.
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [stagger]);

  return (
    <Tag
      ref={ref}
      className={className}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as React.CSSProperties) : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
