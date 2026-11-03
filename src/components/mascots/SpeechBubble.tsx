import type { ReactNode } from "react";

/**
 * A speech bubble for Bolo and Mithu. The words are real HTML (indexable,
 * translatable, readable by screen readers); only the tail is decoration.
 * `tail` says which side the bird is on.
 */
export function SpeechBubble({
  children,
  tail = "left",
  tone = "white",
  className = "",
}: {
  children: ReactNode;
  tail?: "left" | "right" | "bottom";
  tone?: "white" | "teal" | "mithu";
  className?: string;
}) {
  const skin =
    tone === "teal"
      ? "bg-bolo-teal text-white border-bolo-teal-deep"
      : tone === "mithu"
        ? "bg-[#FFF3EF] text-ink border-[#F2C2B6]"
        : "bg-white text-ink border-[#D5E7E4]";
  const tailPos =
    tail === "left"
      ? "-left-[7px] top-5 border-b-2 border-l-2"
      : tail === "right"
        ? "-right-[7px] top-5 border-r-2 border-t-2"
        : "-bottom-[7px] left-8 border-b-2 border-r-2";
  return (
    <p
      className={`bubble-in relative w-fit max-w-[19rem] rounded-2xl border-2 px-4 py-2.5 text-[0.95rem] font-bold leading-snug shadow-[0_10px_24px_-18px_rgba(20,33,61,.6)] ${skin} ${className}`}
    >
      <span
        aria-hidden="true"
        className={`absolute h-3 w-3 rotate-45 ${tailPos} ${tone === "teal" ? "bg-bolo-teal border-bolo-teal-deep" : tone === "mithu" ? "bg-[#FFF3EF] border-[#F2C2B6]" : "bg-white border-[#D5E7E4]"}`}
      />
      <span className="relative">{children}</span>
    </p>
  );
}
