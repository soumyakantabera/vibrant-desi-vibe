import type { ReactNode } from "react";

import { BoloParrot, type BoloPose } from "@/components/mascots/BoloParrot";

/**
 * The Bolo theme, in two pieces shared by the level test, the promo card,
 * city pages and the WhatsApp call-outs in guides and blogs:
 *
 *   <BoloCard>  sunny card: amber → white → blue wash, thick sunshine border.
 *   <BoloSays>  Bolo the parrot with a speech bubble; the words are real HTML
 *               (indexable, translatable, read by screen readers and kept in
 *               the .md twins), Bolo himself is decorative.
 *
 * Bolo only changes pose — he never loops or floats.
 */
export function BoloCard({
  children,
  className = "",
  as: Tag = "div",
  ...rest
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "aside" | "section";
} & Record<`data-${string}` | `aria-${string}`, string | undefined>) {
  return (
    <Tag
      {...rest}
      className={`rounded-[2rem] border-2 border-sunshine/50 bg-gradient-to-b from-amber-soft via-white to-slate-soft p-5 shadow-lg md:p-7 ${className}`}
    >
      {children}
    </Tag>
  );
}

export function BoloSays({
  pose = "talk",
  size = 80,
  children,
  className = "",
}: {
  pose?: BoloPose;
  size?: number;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex items-end gap-2 ${className}`}>
      {/* Smaller on phones so the bubble gets the width; full size from sm up. */}
      <BoloParrot
        pose={pose}
        size={size}
        perch={false}
        decorative
        className="h-auto shrink-0 max-sm:w-[56px]"
      />
      <div className="relative mb-3 min-w-0 flex-1 rounded-2xl border-2 border-[#D5E7E4] bg-white px-4 py-3 shadow-sm">
        <span
          aria-hidden="true"
          className="absolute -left-[8px] bottom-4 h-3.5 w-3.5 rotate-45 border-b-2 border-l-2 border-[#D5E7E4] bg-white"
        />
        <div className="relative">{children}</div>
      </div>
    </div>
  );
}
