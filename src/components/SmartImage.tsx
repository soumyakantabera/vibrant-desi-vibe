import { useEffect, useRef, useState } from "react";
import { imageMeta } from "@/lib/images";
import { wasPainted } from "@/lib/painted-images";

/**
 * The site's image primitive. Every photo goes through it so that a slow
 * connection never shows the page half-built:
 *
 *  - the box is reserved before the bytes arrive (width/height from the
 *    generated metadata, or an explicit ratio), so nothing below the image
 *    jumps down when it lands;
 *  - a ~250-byte blurred copy of the photo is painted into that box straight
 *    away, so the reader sees the right colours and shapes instead of a grey
 *    hole (a shimmer stands in for images we do not bundle);
 *  - the real photo cross-fades over the blur once decoded.
 *
 * Everything below the first screen is lazy by default; `priority` marks the
 * one image that is part of the first paint (the hero) so the browser fetches
 * it early instead of last.
 *
 * The fade itself is driven by CSS keyed off `data-loaded`, which is set both
 * here and by the tiny inline script in the document head. That script runs
 * before the React bundle has even downloaded, so images that arrive early on
 * a slow link still fade in rather than sitting hidden waiting for hydration.
 */
export function SmartImage({
  src,
  alt,
  className = "",
  imgClassName = "",
  fill = false,
  priority = false,
  ratio,
  position,
  sizes,
  style,
  loadThreshold = "250px",
}: {
  src: string;
  alt: string;
  /** Classes for the frame — this is the element that owns the layout box. */
  className?: string;
  /** Extra classes for the <img> itself (object-position, hover zoom, …). */
  imgClassName?: string;
  /** Cover the nearest positioned ancestor, for full-bleed section photos. */
  fill?: boolean;
  /** First-screen image: fetched eagerly and at high priority. */
  priority?: boolean;
  /** `"16/9"`, or `"auto"` to use the photo's own aspect ratio. */
  ratio?: string | "auto";
  /** object-position, e.g. `"top"`. */
  position?: string;
  sizes?: string;
  style?: React.CSSProperties;
  /** IntersectionObserver margin before image loads (default: 250px above viewport). */
  loadThreshold?: string;
}) {
  const meta = imageMeta(src);
  const ref = useRef<HTMLImageElement>(null);
  const frameRef = useRef<HTMLSpanElement>(null);
  // Anything the reader was already looking at before React mounted starts
  // visible — it must not fade in a second time.
  const [loaded, setLoaded] = useState(() => wasPainted(src));
  const [shouldLoad, setShouldLoad] = useState(priority);

  // Use IntersectionObserver to load images before they're visible (better UX).
  // This ensures images start loading while the user is still scrolling to them.
  useEffect(() => {
    if (priority || shouldLoad) return;

    const frame = frameRef.current;
    if (!frame) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: loadThreshold }
    );

    observer.observe(frame);
    return () => observer.disconnect();
  }, [priority, shouldLoad, loadThreshold]);

  // A cached image can finish loading between render and effect — and after a
  // client-side navigation it is usually already in the cache — so the load
  // event never fires. Ask the element directly instead of waiting for it.
  useEffect(() => {
    const img = ref.current;
    if (img?.complete) setLoaded(true);
  }, [src]);

  const aspect = ratio === "auto" ? (meta ? `${meta.w} / ${meta.h}` : undefined) : ratio;

  return (
    <span
      ref={frameRef}
      className={`img-frame ${fill ? "img-frame-fill" : ""} ${meta ? "" : "img-frame-plain"} ${className}`}
      data-loaded={loaded ? "" : undefined}
      style={{
        ...(meta ? ({ "--img-blur": `url("${meta.blur}")` } as React.CSSProperties) : null),
        ...(aspect ? { aspectRatio: aspect } : null),
        ...style,
      }}
    >
      {(priority || shouldLoad) && (
        <img
          ref={ref}
          src={src}
          alt={alt}
          width={meta?.w}
          height={meta?.h}
          sizes={sizes}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding="async"
          data-fade
          data-loaded={loaded ? "" : undefined}
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(true)}
          className={`img-el ${imgClassName}`}
          style={position ? { objectPosition: position } : undefined}
        />
      )}
    </span>
  );
}
