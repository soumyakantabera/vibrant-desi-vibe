import { useEffect, useRef, useState } from "react";

/**
 * True while the element is on screen and the tab is visible, false under
 * prefers-reduced-motion. Drives mascot idle loops so they never run off
 * screen or in a background tab. Server render and first paint are `false`:
 * the prerendered page shows the still pose.
 */
export function useInView<T extends Element>() {
  const ref = useRef<T>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    if (typeof IntersectionObserver === "undefined") return;
    let visible = false;
    const sync = () => setOn(visible && document.visibilityState === "visible");
    const io = new IntersectionObserver(
      (entries) => {
        visible = entries.some((e) => e.isIntersecting);
        sync();
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    document.addEventListener("visibilitychange", sync);
    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", sync);
    };
  }, []);
  return [ref, on] as const;
}
