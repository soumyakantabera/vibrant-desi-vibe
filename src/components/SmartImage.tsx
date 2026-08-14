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
}) {
  const meta = imageMeta(src);
  const ref = useRef<HTMLImageElement>(null);
  // Anything the reader was already looking at before React mounted starts
  // visible — it must not fade in a second time.
  const [loaded, setLoaded] = useState(() => wasPainted(src));

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
      className={`img-frame ${fill ? "img-frame-fill" : ""} ${meta ? "" : "img-frame-plain"} ${className}`}
      data-loaded={loaded ? "" : undefined}
      style={{
        ...(meta ? ({ "--img-blur": `url("${meta.blur}")` } as React.CSSProperties) : null),
        ...(aspect ? { aspectRatio: aspect } : null),
        ...style,
      }}
    >
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
        // First-screen images are part of "the page is ready": the boot gate
        // holds the site back until they have decoded, so the hero never fades
        // in underneath a reader who has already started reading. Bounded by
        // the gate's own deadline — see src/lib/boot-script.ts.
        data-boot-hold={priority ? "" : undefined}
        data-loaded={loaded ? "" : undefined}
        onLoad={() => setLoaded(true)}
        // A broken image should not leave a shimmer running forever.
        onError={() => setLoaded(true)}
        className={`img-el ${imgClassName}`}
        style={position ? { objectPosition: position } : undefined}
      />
    </span>
  );
}
