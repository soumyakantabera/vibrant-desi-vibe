import { useEffect, useRef, useState } from "react";
import { useRouterState } from "@tanstack/react-router";

/**
 * Thin progress bar across the top of the viewport while a page is being
 * fetched.
 *
 * On a fast connection a route swap is instant and this never appears (it
 * waits ~120 ms before showing). On a slow one it is the difference between
 * "I tapped a link and nothing happened" and "it is working" — the bar creeps
 * towards 90% while the route's chunk downloads, then completes and fades.
 */
export function RouteProgress() {
  const isLoading = useRouterState({
    select: (s) => s.isLoading || s.status === "pending",
  });

  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const clear = () => {
      timers.current.forEach(clearTimeout);
      timers.current = [];
    };

    if (isLoading) {
      clear();
      // Nothing to show for a navigation that resolves in a frame or two —
      // a bar that flashes on and off is worse than no bar at all.
      timers.current.push(
        setTimeout(() => {
          setVisible(true);
          setProgress(12);
        }, 120),
      );
      // Creep towards, but never reach, the end: the last stretch belongs to
      // the moment the page is actually ready.
      [
        [280, 45],
        [600, 68],
        [1100, 82],
        [2000, 90],
        [4000, 95],
      ].forEach(([at, pct]) => {
        timers.current.push(setTimeout(() => setProgress(pct), at));
      });
      return clear;
    }

    clear();
    setProgress((p) => (p > 0 ? 100 : 0));
    timers.current.push(setTimeout(() => setVisible(false), 260));
    timers.current.push(setTimeout(() => setProgress(0), 520));
    return clear;
  }, [isLoading]);

  return (
    <div
      className="route-progress"
      data-visible={visible ? "" : undefined}
      role="progressbar"
      aria-hidden={!visible}
      aria-label="Loading page"
    >
      <span className="route-progress-bar" style={{ transform: `scaleX(${progress / 100})` }} />
    </div>
  );
}
