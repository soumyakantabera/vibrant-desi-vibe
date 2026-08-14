/**
 * Which photos were already on screen before React took over the page.
 *
 * Prerendered pages paint their images long before the bundle arrives. When
 * React then mounts it builds fresh DOM, so every <img> is a new element that
 * has to reach `complete` again — and until it does, the fade-in rule would
 * hold it at opacity 0, blinking a photo the reader was already looking at
 * back to its blurred placeholder.
 *
 * `src/main.tsx` records the URLs that had finished loading just before the
 * swap; <SmartImage> starts those in the loaded state instead of fading them
 * in a second time. Fresh images (below the fold, or a page reached by
 * client-side navigation) are unaffected and still fade in normally.
 */
const painted = new Set<string>();

/** Comparable form of an image URL — the two sides differ only in origin. */
function key(src: string): string {
  try {
    return new URL(src, document.baseURI).pathname;
  } catch {
    return src;
  }
}

export function recordPaintedImages(): void {
  if (typeof document === "undefined") return;
  document.querySelectorAll<HTMLImageElement>("img[data-fade][data-loaded]").forEach((img) => {
    painted.add(key(img.currentSrc || img.src));
  });
}

export function wasPainted(src: string): boolean {
  if (typeof document === "undefined" || painted.size === 0) return false;
  return painted.has(key(src));
}
