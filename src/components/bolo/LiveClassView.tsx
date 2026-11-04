import { useEffect, useState } from "react";
import { Icon } from "@/components/Icon";
import { useInView } from "@/components/mascots/useInView";

/**
 * An illustration of a live class in a video call — a Google Meet-style grid
 * of six tiles (teacher + five learners, initials only, no real faces), a
 * "speaking" ring that moves round the room and live captions showing the
 * kind of correction a teacher makes. Every learner speaks; that is the point.
 *
 * App-tier motion (it is a product view), but calm: the ring and captions
 * change every ~2.6 s, only while on screen, never under reduced motion.
 */

type Tile = { name: string; initials: string; hue: string; teacher?: boolean };

const TILES: Tile[] = [
  { name: "Teacher", initials: "T", hue: "#0A7C73", teacher: true },
  { name: "Priya", initials: "P", hue: "#7A5AF0" },
  { name: "Rahul", initials: "R", hue: "#2F5BEA" },
  { name: "Sneha", initials: "S", hue: "#CC3A55" },
  { name: "Aman", initials: "A", hue: "#B35F00" },
  { name: "Kavita", initials: "K", hue: "#04815B" },
];

const LINES: { who: number; text: string; fix?: string }[] = [
  { who: 0, text: "Rahul, tell us about your work in two lines." },
  {
    who: 2,
    text: "I am working here since two years.",
    fix: "I have been working here for two years.",
  },
  { who: 0, text: "Good. Say it once more — “for two years”." },
  { who: 3, text: "I handle customer calls for a bank." },
  { who: 1, text: "Could you repeat the last part, please?" },
  { who: 4, text: "Yesterday I go to office early.", fix: "Yesterday I went to the office early." },
  { who: 5, text: "In my opinion, small batches are better." },
];

export function LiveClassView({
  className = "",
  course = "Basic Spoken English",
}: {
  className?: string;
  course?: string;
}) {
  const [ref, on] = useInView<HTMLDivElement>();
  const [i, setI] = useState(1);
  useEffect(() => {
    if (!on) return;
    const t = window.setTimeout(() => setI((n) => (n + 1) % LINES.length), 2600);
    return () => window.clearTimeout(t);
  }, [i, on]);
  const line = LINES[i];

  return (
    <figure
      ref={ref}
      className={`overflow-hidden rounded-3xl bg-[#202124] text-white shadow-[0_30px_60px_-35px_rgba(20,33,61,.8)] ${className}`}
      aria-label="Illustration of a live online class: six people on a video call, every learner speaks"
    >
      {/* top bar */}
      <div className="flex items-center justify-between px-4 py-2.5 text-xs text-white/75">
        <span className="flex items-center gap-2">
          <span className="viz-live h-2 w-2 rounded-full bg-[#EA4335]" aria-hidden="true" />
          Live class · {course}
        </span>
        <span className="hidden sm:inline">90 min · about 6 learners</span>
      </div>

      {/* grid */}
      <div className="grid grid-cols-3 gap-2 px-3" aria-hidden="true">
        {TILES.map((t, n) => {
          const speaking = n === line.who;
          return (
            <div
              key={t.name}
              className={`relative grid aspect-[4/3] place-items-center rounded-xl bg-[#3C4043] transition-shadow duration-300 ${speaking ? "shadow-[0_0_0_3px_#8AB4F8]" : ""}`}
            >
              <span
                className={`grid h-10 w-10 place-items-center rounded-full text-base font-bold sm:h-12 sm:w-12 sm:text-lg ${speaking ? "scale-110" : ""} transition-transform duration-300`}
                style={{ background: t.hue }}
              >
                {t.initials}
              </span>
              <span className="absolute bottom-1.5 left-2 text-[10.5px] font-medium text-white/90 sm:text-xs">
                {t.name}
                {t.teacher && " · host"}
              </span>
              <span className="absolute right-1.5 top-1.5 grid h-5 w-5 place-items-center rounded-full bg-black/35">
                {speaking ? (
                  <span className="flex h-2.5 items-end gap-[2px]">
                    <span className="meet-bar h-1 w-[2px] rounded bg-[#8AB4F8]" />
                    <span className="meet-bar h-2.5 w-[2px] rounded bg-[#8AB4F8] [animation-delay:120ms]" />
                    <span className="meet-bar h-1.5 w-[2px] rounded bg-[#8AB4F8] [animation-delay:240ms]" />
                  </span>
                ) : (
                  <Icon name="mic" size={11} className="text-white/60" />
                )}
              </span>
            </div>
          );
        })}
      </div>

      {/* captions */}
      <figcaption
        className="mx-3 mt-2 min-h-[4.25rem] rounded-xl bg-black/45 px-3 py-2 text-sm"
        aria-live="off"
      >
        <span key={i} className="slide-in block">
          <strong className="mr-1.5 text-[#8AB4F8]">{TILES[line.who].name}:</strong>
          <span className={line.fix ? "text-white/70 line-through decoration-[#F28B82]" : ""}>
            {line.text}
          </span>
          {line.fix && (
            <span className="mt-0.5 block text-[#81C995]">
              <strong>Teacher:</strong> {line.fix}
            </span>
          )}
        </span>
      </figcaption>

      {/* controls */}
      <div className="flex items-center justify-center gap-2.5 px-3 py-3" aria-hidden="true">
        {(["mic", "video", "messages", "smile"] as const).map((ic) => (
          <span key={ic} className="grid h-9 w-9 place-items-center rounded-full bg-[#3C4043]">
            <Icon name={ic} size={17} />
          </span>
        ))}
        <span className="grid h-9 w-14 place-items-center rounded-full bg-[#EA4335]">
          <Icon name="phone" size={17} />
        </span>
      </div>
      <p className="pb-3 text-center text-xs text-white/70">
        Illustration of a live class. Names and lines are examples.
      </p>
    </figure>
  );
}
