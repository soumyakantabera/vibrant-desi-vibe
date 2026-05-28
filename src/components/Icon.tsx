import type { CSSProperties } from "react";

/**
 * Icon system — Material Symbols Rounded (loaded via Google Fonts in __root.tsx).
 * Map our semantic icon names to Material Symbols glyph names so all existing
 * <Icon name="..."/> call sites keep working.
 */
const MAP: Record<string, string> = {
  spark: "auto_awesome",
  book: "menu_book",
  mic: "mic",
  chart: "bar_chart",
  code: "code",
  bulb: "lightbulb",
  trophy: "emoji_events",
  target: "ads_click",
  calendar: "calendar_month",
  clock: "schedule",
  users: "groups",
  user: "person",
  play: "play_circle",
  check: "check_circle",
  "arrow-right": "arrow_forward",
  globe: "public",
  headset: "headset_mic",
  rupee: "currency_rupee",
  rocket: "rocket_launch",
  star: "star",
  heart: "favorite",
  puzzle: "extension",
  shield: "verified",
  trend: "trending_up",
  compass: "explore",
  whatsapp: "chat", // for non-brand contexts; use BrandIcon for the real logo
  menu: "menu",
  close: "close",
  phone: "call",
  mail: "mail",
  instagram: "photo_camera",
  facebook: "thumb_up",
  linkedin: "work",
  youtube: "smart_display",
  quote: "format_quote",
  smile: "sentiment_satisfied",
  gamepad: "sports_esports",
};

export type IconName = keyof typeof MAP | string;

export function Icon({
  name,
  size = 22,
  className = "",
  filled = true,
  weight = 500,
  style,
}: {
  name: IconName;
  size?: number;
  className?: string;
  filled?: boolean;
  weight?: 300 | 400 | 500 | 600 | 700;
  style?: CSSProperties;
}) {
  const glyph = MAP[name] ?? name;
  const fvs = `'FILL' ${filled ? 1 : 0}, 'wght' ${weight}, 'GRAD' 0, 'opsz' 24`;
  return (
    <span
      aria-hidden
      className={`material-symbols-rounded inline-flex items-center justify-center leading-none select-none ${className}`}
      style={{
        fontSize: size,
        width: size,
        height: size,
        fontVariationSettings: fvs,
        ...style,
      }}
    >
      {glyph}
    </span>
  );
}
