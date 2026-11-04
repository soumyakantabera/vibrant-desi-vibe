import type { ReactNode } from "react";
import { BoloParrot, type BoloPose } from "@/components/mascots/BoloParrot";

/**
 * Cartoon art for the Bolo · Watch video cards: Bolo the parrot in a pose
 * that fits the lesson, next to one hand-drawn prop (speech bubble, bulb,
 * word tiles, laptop…). Everything is inline SVG — no image requests — and
 * purely decorative (aria-hidden); the card title carries the meaning.
 *
 * The props are drawn in white on the card's colour so they work on every
 * tone; `accent` is the card's own colour for small fills inside white.
 */

type Scene = { pose: BoloPose; flip?: boolean; prop: (accent: string) => ReactNode };

const W = "#FFFFFF";
const INK = "#13212F";

/* Small building blocks, drawn in a 150 × 110 viewBox. */
function Bubble({
  x,
  y,
  w,
  h,
  tail = "right",
  children,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  tail?: "right" | "left";
  children?: ReactNode;
}) {
  const tx = tail === "right" ? x + w - 18 : x + 14;
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={h / 2.4} fill={W} />
      <path
        d={
          tail === "right"
            ? `M${tx} ${y + h - 1} l10 12 l-2 -12 z`
            : `M${tx} ${y + h - 1} l-8 12 l12 -12 z`
        }
        fill={W}
      />
      {children}
    </g>
  );
}

function Label({
  x,
  y,
  children,
  size = 13,
  fill = INK,
}: {
  x: number;
  y: number;
  children: ReactNode;
  size?: number;
  fill?: string;
}) {
  return (
    <text
      x={x}
      y={y}
      textAnchor="middle"
      fontFamily="DM Sans, Arial, sans-serif"
      fontWeight={800}
      fontSize={size}
      fill={fill}
    >
      {children}
    </text>
  );
}

const SCENES: Record<string, Scene> = {
  "Tips and tricks to start speaking": {
    pose: "talk",
    prop: (a) => (
      <g>
        {/* light bulb */}
        <circle cx="34" cy="34" r="16" fill={W} />
        <rect x="27" y="49" width="14" height="9" rx="2" fill={W} opacity=".85" />
        <path d="M28 36 q6 -10 12 0" stroke={a} strokeWidth="3" fill="none" strokeLinecap="round" />
        {[-60, -20, 20, 60].map((deg) => (
          <line
            key={deg}
            x1="34"
            y1="12"
            x2="34"
            y2="5"
            stroke={W}
            strokeWidth="3"
            strokeLinecap="round"
            transform={`rotate(${deg} 34 34)`}
          />
        ))}
        <Bubble x={58} y={14} w={58} h={28}>
          <Label x={87} y={33}>
            Hi! I…
          </Label>
        </Bubble>
      </g>
    ),
  },
  "Grammar you actually use": {
    pose: "read",
    prop: (a) => (
      <g>
        {[
          { t: "a", x: 8, y: 22 },
          { t: "the", x: 42, y: 12 },
          { t: "on", x: 86, y: 26 },
        ].map((b) => (
          <g key={b.t} transform={`rotate(${b.t === "the" ? -6 : 5} ${b.x + 18} ${b.y + 14})`}>
            <rect x={b.x} y={b.y} width={b.t === "the" ? 40 : 32} height="28" rx="7" fill={W} />
            <Label x={b.x + (b.t === "the" ? 20 : 16)} y={b.y + 19} fill={a}>
              {b.t}
            </Label>
          </g>
        ))}
        <path
          d="M14 70 h86"
          stroke={W}
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="2 8"
        />
        <path
          d="M95 64 l8 6 -8 6"
          stroke={W}
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    ),
  },
  "Stop translating in your head": {
    pose: "think",
    prop: (a) => (
      <g>
        <circle cx="96" cy="78" r="4" fill={W} />
        <circle cx="86" cy="66" r="6" fill={W} />
        <rect x="6" y="10" width="92" height="46" rx="23" fill={W} />
        <Label x={30} y={39} size={12} fill={INK}>
          हिं
        </Label>
        <path d="M44 34 h18" stroke={a} strokeWidth="3.5" strokeLinecap="round" />
        <path
          d="M57 28 l7 6 -7 6"
          stroke={a}
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Label x={78} y={39} size={13} fill={a}>
          EN
        </Label>
      </g>
    ),
  },
  "When your mind goes blank": {
    pose: "oops",
    prop: (a) => (
      <g>
        <Bubble x={8} y={12} w={70} h={34}>
          {[26, 43, 60].map((cx) => (
            <circle key={cx} cx={cx} cy="29" r="4.5" fill={a} />
          ))}
        </Bubble>
        {/* clock: buy three seconds */}
        <circle cx="104" cy="30" r="17" fill={W} />
        <path d="M104 20 v10 l7 5" stroke={a} strokeWidth="3" fill="none" strokeLinecap="round" />
        <Label x={104} y={66} size={12} fill={W}>
          3 sec
        </Label>
      </g>
    ),
  },
  "Small words, big difference": {
    pose: "talk",
    prop: (a) => (
      <g>
        <Bubble x={4} y={12} w={108} h={32}>
          <Label x={58} y={33} size={12}>
            Could you…?
          </Label>
        </Bubble>
        <g transform="translate(26 58)">
          <rect width="56" height="22" rx="11" fill={W} opacity=".9" />
          <path
            d="M14 11 l5 5 9 -10"
            stroke={a}
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Label x={40} y={16} size={11} fill={a}>
            polite
          </Label>
        </g>
      </g>
    ),
  },
  "Fluency drills for daily talk": {
    pose: "mic",
    prop: (a) => (
      <g>
        {[0, 1, 2, 3, 4, 5, 6].map((i) => {
          const h = [14, 28, 40, 22, 36, 18, 30][i];
          return (
            <rect key={i} x={10 + i * 13} y={46 - h / 2} width="7" height={h} rx="3.5" fill={W} />
          );
        })}
        <g transform="translate(18 70)">
          <rect width="76" height="22" rx="11" fill={W} />
          <rect x="4" y="4" width="46" height="14" rx="7" fill={a} />
          <Label x={63} y={16} size={10} fill={a}>
            60s
          </Label>
        </g>
      </g>
    ),
  },
  "Meetings and email phrases": {
    pose: "listen",
    prop: (a) => (
      <g>
        {/* laptop */}
        <rect x="10" y="16" width="70" height="46" rx="6" fill={W} />
        <rect x="16" y="22" width="58" height="34" rx="3" fill={a} opacity=".25" />
        <path d="M2 66 h86 l-6 7 h-74 z" fill={W} />
        {/* envelope */}
        <g transform="translate(26 26)">
          <rect width="38" height="26" rx="4" fill={W} />
          <path
            d="M2 3 l17 13 17 -13"
            stroke={a}
            strokeWidth="3"
            fill="none"
            strokeLinejoin="round"
          />
        </g>
        <circle cx="98" cy="22" r="11" fill={W} />
        <Label x={98} y={27} size={12} fill={a}>
          @
        </Label>
      </g>
    ),
  },
  "Client calls and presentations": {
    pose: "talk",
    prop: (a) => (
      <g>
        {/* board with a rising chart */}
        <rect x="6" y="8" width="82" height="58" rx="7" fill={W} />
        {[0, 1, 2].map((i) => (
          <rect
            key={i}
            x={20 + i * 20}
            y={50 - (i + 1) * 11}
            width="12"
            height={(i + 1) * 11}
            rx="2"
            fill={a}
            opacity={0.5 + i * 0.25}
          />
        ))}
        <path
          d="M18 30 l20 -8 18 6 22 -14"
          stroke={a}
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M47 66 v14 M33 86 l14 -6 14 6"
          stroke={W}
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        {/* headset */}
        <path
          d="M98 34 a12 12 0 0 1 24 0"
          stroke={W}
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
        <rect x="94" y="32" width="8" height="13" rx="3" fill={W} />
        <rect x="118" y="32" width="8" height="13" rx="3" fill={W} />
      </g>
    ),
  },
  "Tell me about yourself + STAR": {
    pose: "wave",
    prop: (a) => (
      <g>
        <path d="M40 8 l9 19 21 3 -15 14 4 21 -19 -10 -19 10 4 -21 -15 -14 21 -3 z" fill={W} />
        <Label x={40} y={45} size={11} fill={a}>
          STAR
        </Label>
        <Bubble x={74} y={60} w={46} h={26} tail="left">
          <Label x={97} y={78} size={11}>
            I am…
          </Label>
        </Bubble>
      </g>
    ),
  },
  "Small talk without freezing": {
    pose: "cheer",
    prop: () => (
      <g>
        <Bubble x={6} y={8} w={58} h={28}>
          <Label x={35} y={27} size={12}>
            Hi!
          </Label>
        </Bubble>
        <Bubble x={28} y={48} w={104} h={28} tail="left">
          <Label x={80} y={67} size={12}>
            How's it going?
          </Label>
        </Bubble>
      </g>
    ),
  },
};

/** Fallback for any new topic: Bolo perched with a speech bubble. */
const DEFAULT: Scene = {
  pose: "perch",
  prop: () => (
    <Bubble x={10} y={18} w={70} h={30}>
      <Label x={45} y={38}>
        Bolo!
      </Label>
    </Bubble>
  ),
};

export function VideoArt({ title, accent }: { title: string; accent: string }) {
  const scene = SCENES[title] ?? DEFAULT;
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <svg
        viewBox="0 0 150 110"
        className="absolute left-[4.1rem] top-[3.1rem] h-[5.4rem] w-auto"
        role="presentation"
        focusable="false"
      >
        {scene.prop(accent)}
      </svg>
      <div className="video-art-bird absolute -bottom-3 right-2">
        <BoloParrot pose={scene.pose} size={78} decorative perch={false} flip={scene.flip} />
      </div>
    </div>
  );
}
