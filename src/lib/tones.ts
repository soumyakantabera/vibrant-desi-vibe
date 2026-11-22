import type { IconName } from "@/components/Icon";

/**
 * Shared colour tones, built only from the theme tokens in src/styles.css
 * (soft tints for backgrounds, the matching deep shade for text and the
 * solid tile colour for badges — white text passes AA on every tile).
 *
 * Class strings are written out in full so Tailwind sees them at build time.
 */
export type Tone = {
  /** Soft tinted surface. */
  soft: string;
  /** Text / icon colour that reads on the soft surface. */
  text: string;
  /** Border in the same hue. */
  border: string;
  /** Solid badge: tile colour + white text. */
  solid: string;
  /** Left accent bar. */
  bar: string;
  /** Solid ::before badge (numbered lists). */
  dot: string;
  /** Solid top accent for cards. */
  top: string;
};

export const TONES: Tone[] = [
  {
    soft: "bg-brand-soft",
    text: "text-brand-deep",
    border: "border-brand/30",
    solid: "bg-tile-green text-white",
    dot: "before:bg-tile-green",
    bar: "border-l-tile-green",
    top: "border-t-tile-green",
  },
  {
    soft: "bg-amber-soft",
    text: "text-[#8a4800]",
    border: "border-sunshine/40",
    solid: "bg-tile-saffron text-white",
    dot: "before:bg-tile-saffron",
    bar: "border-l-sunshine",
    top: "border-t-sunshine",
  },
  {
    soft: "bg-slate-soft",
    text: "text-indigo-pop",
    border: "border-indigo-pop/30",
    solid: "bg-tile-blue text-white",
    dot: "before:bg-tile-blue",
    bar: "border-l-indigo-pop",
    top: "border-t-indigo-pop",
  },
  {
    soft: "bg-terra-soft",
    text: "text-coral-deep",
    border: "border-coral/40",
    solid: "bg-coral-deep text-white",
    dot: "before:bg-coral-deep",
    bar: "border-l-coral",
    top: "border-t-coral",
  },
  {
    soft: "bg-plum-soft",
    text: "text-[#5b3fd1]",
    border: "border-plum/30",
    solid: "bg-tile-violet text-white",
    dot: "before:bg-tile-violet",
    bar: "border-l-plum",
    top: "border-t-plum",
  },
  {
    soft: "bg-teal-soft",
    text: "text-[#086a60]",
    border: "border-teal/30",
    solid: "bg-tile-teal text-white",
    dot: "before:bg-tile-teal",
    bar: "border-l-teal",
    top: "border-t-teal",
  },
];

export const tone = (i: number): Tone => TONES[((i % TONES.length) + TONES.length) % TONES.length];

/** Keyword → icon for section headings. First match wins; otherwise rotate. */
const HEADING_ICONS: [RegExp, IconName][] = [
  [/fee|price|cost|₹|money|upi|pay/i, "rupee"],
  [/mistake|wrong|avoid|not claim|do not/i, "ban"],
  [/phone|call|customer/i, "phone"],
  [/office|work|meeting|business|job|career/i, "computer"],
  [/interview|hr\b/i, "user"],
  [/listen/i, "headset"],
  [/vocab|word|chunk/i, "vocab"],
  [/grammar|tense/i, "grammar"],
  [/plan|day|week|month|routine|timing|schedule/i, "calendar"],
  [/level|score|test/i, "chart"],
  [/practi[cs]e|drill|exercise/i, "mic"],
  [/conversation|dialogue|talk|small talk/i, "messages"],
  [/speak|fluen|clear/i, "speak"],
  [/polite|confiden|tone/i, "smile"],
  [/hindi|bengali|tamil|gujarati|language|medium/i, "languages"],
  [/travel|cab|auto|direction|city|neighbour/i, "location_on"],
  [/doctor|health|chemist/i, "heart"],
  [/home|family/i, "home"],
  [/shop|store|return/i, "savings"],
  [/how|why|what|when|which/i, "bulb"],
];
const FALLBACK_ICONS: IconName[] = ["spark", "target", "rocket", "trophy", "star", "compass"];

export function headingIcon(text: string, i: number): IconName {
  return (
    HEADING_ICONS.find(([re]) => re.test(text))?.[1] ?? FALLBACK_ICONS[i % FALLBACK_ICONS.length]
  );
}

/** Blog tag → tone + icon, so a tag looks the same on every card and page. */
const TAGS: Record<string, { tone: number; icon: IconName }> = {
  "Spoken English": { tone: 0, icon: "speak" },
  "Workplace English": { tone: 2, icon: "computer" },
  "Interview English": { tone: 4, icon: "user" },
  Guides: { tone: 1, icon: "compass" },
  IELTS: { tone: 3, icon: "pen" },
  Career: { tone: 5, icon: "rocket" },
};

export function tagStyle(tag: string): { tone: Tone; icon: IconName } {
  const t = TAGS[tag] ?? { tone: 5, icon: "book" as IconName };
  return { tone: tone(t.tone), icon: t.icon };
}
