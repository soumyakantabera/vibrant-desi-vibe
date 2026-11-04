import type { CSSProperties } from "react";
import { ICON_COMPONENTS, type IconName } from "@/components/icon-names";
import { ICON_SPRITE_VERSION } from "@/lib/icon-sprite";

export type { IconName };

/**
 * Icons are drawn from one cached sprite (public/icons.svg, built by
 * scripts/build-icon-sprite.mjs from Phosphor). Each icon on a page is a tiny
 * <svg><use/></svg> instead of its full path data, and no icon code ships in
 * the JavaScript bundle. Only these three weights are in the sprite.
 */
type IconWeight = "bold" | "fill" | "duotone";

const SPRITE = `${import.meta.env.BASE_URL}icons.svg?v=${ICON_SPRITE_VERSION}`;

/** Shapes that look right solid when `filled` is on. */
const FILLABLE = new Set<IconName>(["star", "heart", "spark"]);

/** Plain UI chrome stays a clean bold line; everything else is duotone. */
const CHROME = new Set<IconName>(["menu", "close", "arrow-right", "caret-left", "caret-right"]);

export function Icon({
  name,
  size = 22,
  className = "",
  filled = true,
  weight,
  variant,
  style,
}: {
  name: IconName | string;
  size?: number;
  className?: string;
  filled?: boolean;
  /** Kept for old call sites; ≥600 renders the bold line weight. */
  weight?: 300 | 400 | 500 | 600 | 700;
  variant?: IconWeight;
  style?: CSSProperties;
}) {
  if (!(name in ICON_COMPONENTS))
    return (
      <span aria-hidden className={className} style={{ width: size, height: size, ...style }} />
    );
  const key = name as IconName;
  const resolved: IconWeight =
    variant ??
    (filled && FILLABLE.has(key)
      ? "fill"
      : CHROME.has(key) || (weight !== undefined && weight >= 600)
        ? "bold"
        : "duotone");
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width={size}
      height={size}
      viewBox="0 0 256 256"
      fill="currentColor"
      className={`lws-icon inline-flex shrink-0 ${className}`}
      data-filled={resolved === "fill" ? "true" : undefined}
      style={style}
    >
      <use href={`${SPRITE}#${key}--${resolved}`} />
    </svg>
  );
}
