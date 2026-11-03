import type { CSSProperties } from "react";

/**
 * Bolo — the Bolo app's lead mascot. An Indian rose-ringed parakeet: leaf-green
 * body, cherry-red hooked beak, and the black-and-rose neck ring drawn as a
 * smile (a nod to Learn With Smile).
 *
 * Hand-drawn inline SVG: prerenders into the HTML, no image request, and every
 * part is its own <g> so CSS (src/styles/mascots.css) can blink the eye, flap
 * the beak, wave a wing or sway the tail. Motion is opt-in with `animated` and
 * always off under prefers-reduced-motion.
 */

export type BoloPose =
  | "perch"
  | "wave"
  | "talk"
  | "think"
  | "cheer"
  | "oops"
  | "read"
  | "listen"
  | "mic";

const C = {
  leaf: "#3BAA4E",
  leafLight: "#6CC35A",
  leafGlow: "#9AD86E",
  leafDeep: "#1F7A3A",
  leafShade: "#2C8F43",
  belly: "#B8E07A",
  bellyShade: "#A2D266",
  teal: "#2E9C8F",
  blue: "#1F6F9E",
  beak: "#E0453A",
  beakLight: "#F27467",
  beakDeep: "#A82A22",
  ink: "#1B1F23",
  rose: "#F28AA0",
  eyeRing: "#FFD27A",
  white: "#FFFFFF",
  foot: "#8A94A3",
  footDeep: "#6B7482",
  perch: "#9A6534",
  perchDeep: "#6E4522",
  perchLight: "#BC8550",
  cheek: "#FF9E8A",
} as const;

const ORIGIN: Record<string, CSSProperties> = {
  head: { transformOrigin: "118px 100px" },
  beakLo: { transformOrigin: "145px 84px" },
  eye: { transformOrigin: "131px 66px" },
  farWing: { transformOrigin: "132px 116px" },
  nearWing: { transformOrigin: "96px 112px" },
  tail: { transformOrigin: "96px 170px" },
  body: { transformOrigin: "108px 196px" },
};

export function BoloParrot({
  pose = "perch",
  size = 160,
  title,
  decorative = false,
  animated = false,
  flip = false,
  perch = true,
  className = "",
}: {
  pose?: BoloPose;
  /** Rendered width in px. Height follows the 200 × 240 drawing. */
  size?: number;
  /** Accessible name. Ignored when decorative. */
  title?: string;
  decorative?: boolean;
  /** Idle loops (blink, breathe, tail sway) and the pose's own motion. */
  animated?: boolean;
  /** Face left instead of right. */
  flip?: boolean;
  /** Draw the branch under the feet. */
  perch?: boolean;
  className?: string;
}) {
  const open = pose === "talk" || pose === "cheer" || pose === "mic";
  const farUp = pose === "wave" || pose === "cheer";
  const nearUp = pose === "cheer";
  const headTilt = pose === "think" ? -9 : pose === "oops" ? 6 : pose === "read" ? 7 : 0;
  const happy = pose === "cheer";
  const look =
    pose === "think" ? { x: 1, y: -3 } : pose === "read" ? { x: 1, y: 3 } : { x: 2, y: 0 };
  const label = title ?? `Bolo the parrot${pose !== "perch" ? ` (${pose})` : ""}`;

  return (
    <svg
      viewBox="0 0 200 240"
      width={size}
      height={(size * 240) / 200}
      className={`mascot mascot-bolo ${animated ? "is-animated" : ""} pose-${pose} ${className}`}
      role={decorative ? undefined : "img"}
      aria-label={decorative ? undefined : label}
      aria-hidden={decorative ? true : undefined}
      focusable="false"
    >
      <g transform={flip ? "translate(200 0) scale(-1 1)" : undefined}>
        {/* soft ground shadow */}
        <ellipse cx="104" cy="226" rx="62" ry="6" fill={C.ink} opacity="0.08" />

        {/* ---------------------------------------------------------- tail */}
        <g className="m-tail" style={ORIGIN.tail}>
          <path
            d="M86 166 C80 192 72 214 58 236 C64 238 70 237 74 234 C88 214 98 192 104 170 Z"
            fill={C.leafDeep}
          />
          <path
            d="M92 168 C88 194 82 214 70 234 C74 235 77 234 79 232 C90 212 98 192 102 172 Z"
            fill={C.teal}
          />
          <path
            d="M62 224 C60 230 58 234 58 236 C64 238 70 237 74 234 C72 230 70 226 68 222 Z"
            fill={C.blue}
          />
        </g>

        {/* ---------------------------------------------------------- perch */}
        {perch && (
          <g className="m-perch">
            <rect x="18" y="200" width="172" height="13" rx="6.5" fill={C.perch} />
            <rect
              x="18"
              y="200"
              width="172"
              height="5"
              rx="2.5"
              fill={C.perchLight}
              opacity="0.55"
            />
            <path
              d="M40 207 h22 M120 209 h18 M160 206 h14"
              stroke={C.perchDeep}
              strokeWidth="1.6"
              strokeLinecap="round"
              opacity="0.6"
            />
            <path d="M176 201 C184 188 196 186 198 190 C194 198 186 202 176 201 Z" fill={C.leaf} />
            <path
              d="M176 201 C186 196 192 192 197 190"
              stroke={C.leafDeep}
              strokeWidth="1.2"
              fill="none"
            />
            <path d="M28 202 C20 192 10 192 8 196 C12 202 20 204 28 202 Z" fill={C.leafLight} />
          </g>
        )}

        {/* ------------------------------------------------- far wing (raised) */}
        {farUp && (
          <g className="m-wing-far" style={ORIGIN.farWing}>
            <path
              d="M128 118 C140 96 156 74 178 58 C182 66 180 74 176 80 C184 78 188 84 186 90 C178 92 172 96 168 100 C174 102 176 108 172 112 C160 114 148 118 138 126 Z"
              fill={C.leafDeep}
            />
            <path
              d="M150 90 C158 80 168 70 178 60 M156 98 C166 92 176 88 186 88 M150 108 C158 106 166 106 172 110"
              stroke={C.teal}
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M132 118 C140 104 150 92 160 84"
              stroke={C.leafShade}
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
          </g>
        )}

        {/* ---------------------------------------------------------- body */}
        <g className="m-body" style={ORIGIN.body}>
          <path
            d="M108 94 C140 96 154 128 148 158 C142 186 120 200 100 198 C78 196 68 176 70 150 C72 122 82 92 108 94 Z"
            fill={C.leaf}
          />
          <path
            d="M120 112 C142 122 148 150 140 174 C132 192 112 196 104 192 C118 170 122 140 120 112 Z"
            fill={C.belly}
          />
          <path
            d="M126 150 q6 4 10 0 M122 166 q6 4 10 0 M118 180 q6 3 9 0"
            stroke={C.bellyShade}
            strokeWidth="1.6"
            fill="none"
            strokeLinecap="round"
          />

          {/* feet gripping the perch */}
          <g className="m-feet">
            <path
              d="M100 192 L98 201 M118 192 L119 201"
              stroke={C.foot}
              strokeWidth="6"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M88 204 C90 198 96 197 100 201 M100 201 C104 198 108 200 108 205"
              stroke={C.footDeep}
              strokeWidth="5"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M110 204 C112 198 118 197 120 201 M120 201 C124 198 128 200 128 205"
              stroke={C.footDeep}
              strokeWidth="5"
              strokeLinecap="round"
              fill="none"
            />
          </g>

          {/* near wing — folded, or flung up in cheer */}
          {nearUp ? (
            <g className="m-wing-near up" style={ORIGIN.nearWing}>
              <path
                d="M100 116 C86 98 72 80 50 66 C46 74 48 82 52 88 C44 86 40 92 42 98 C50 100 56 104 60 108 C54 110 52 116 56 120 C70 122 84 124 94 130 Z"
                fill={C.leafDeep}
              />
              <path
                d="M78 98 C70 88 60 78 50 68 M72 106 C62 100 52 96 42 96 M78 116 C70 114 62 114 56 118"
                stroke={C.teal}
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />
            </g>
          ) : (
            <g className="m-wing-near" style={ORIGIN.nearWing}>
              <path
                d="M98 108 C74 116 64 146 70 176 C74 192 80 204 86 212 C94 196 102 170 106 144 C108 126 106 112 98 108 Z"
                fill={C.leafDeep}
              />
              <path d="M94 116 C80 126 76 142 78 156 C86 146 94 134 100 120 Z" fill={C.leafShade} />
              <path
                d="M80 162 C84 166 90 166 94 162 M78 176 C82 180 88 180 92 176 M80 190 C84 192 88 192 90 190"
                stroke={C.leaf}
                strokeWidth="1.8"
                fill="none"
                strokeLinecap="round"
              />
              <path d="M76 186 C78 196 82 204 86 212 C88 206 90 200 92 194 Z" fill={C.teal} />
            </g>
          )}

          {/* ------------------------------------------------------ head */}
          <g
            className="m-head"
            style={{ ...ORIGIN.head, transform: headTilt ? `rotate(${headTilt}deg)` : undefined }}
          >
            <circle cx="118" cy="72" r="35" fill={C.leaf} />
            <path
              d="M92 52 C100 40 116 36 128 40 C116 42 104 48 96 58 Z"
              fill={C.leafGlow}
              opacity="0.85"
            />
            <path
              d="M84 78 C84 64 90 52 100 44 C92 58 90 70 92 86 Z"
              fill={C.leafShade}
              opacity="0.7"
            />

            {pose === "oops" && (
              <path
                d="M108 38 l-3 -9 M118 37 l1 -10 M128 40 l5 -8"
                stroke={C.leafDeep}
                strokeWidth="3.5"
                strokeLinecap="round"
              />
            )}

            {/* smile ring: black under, rose behind */}
            <path
              d="M86 90 Q110 114 136 100"
              stroke={C.rose}
              strokeWidth="5"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M88 96 Q112 120 138 106"
              stroke={C.ink}
              strokeWidth="5"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M138 106 C142 104 144 101 144 97"
              stroke={C.ink}
              strokeWidth="3.5"
              fill="none"
              strokeLinecap="round"
            />

            {/* cheek */}
            <ellipse cx="134" cy="84" rx="7" ry="4.5" fill={C.cheek} opacity="0.45" />

            {/* eye */}
            <g className="m-eye" style={ORIGIN.eye}>
              {happy ? (
                <path
                  d="M122 68 Q131 58 140 68"
                  stroke={C.ink}
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                />
              ) : (
                <>
                  <circle cx="131" cy="66" r="12" fill={C.eyeRing} />
                  <circle cx="131" cy="66" r="10" fill={C.white} />
                  <circle cx={131 + look.x} cy={66 + look.y} r="6.4" fill={C.ink} />
                  <circle cx={133.4 + look.x} cy={63.2 + look.y} r="2.3" fill={C.white} />
                  <circle cx={129 + look.x} cy={69 + look.y} r="1.1" fill={C.white} />
                </>
              )}
            </g>
            {/* brow */}
            {pose === "think" && (
              <path
                d="M121 50 Q130 44 140 50"
                stroke={C.leafDeep}
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            )}
            {pose === "oops" && (
              <path
                d="M122 52 L140 48"
                stroke={C.leafDeep}
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            )}

            {/* beak */}
            <g className="m-beak">
              <g
                className="m-beak-lo"
                style={{ ...ORIGIN.beakLo, transform: open ? "rotate(22deg)" : undefined }}
              >
                <path d="M144 82 C152 86 156 94 152 99 C146 99 141 93 141 87 Z" fill={C.ink} />
                {open && (
                  <path d="M145 88 C149 90 150 94 148 96 C145 95 143 92 144 88 Z" fill={C.cheek} />
                )}
              </g>
              <path
                d="M138 64 C152 58 168 66 168 84 C168 94 162 100 156 99 C158 90 154 82 144 80 C140 78 137 72 138 64 Z"
                fill={C.beak}
              />
              <path d="M144 64 C154 62 162 68 164 76 C158 70 150 66 144 66 Z" fill={C.beakLight} />
              <path
                d="M156 99 C160 96 162 92 162 88"
                stroke={C.beakDeep}
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
              <circle cx="146" cy="70" r="1.6" fill={C.beakDeep} />
            </g>

            {/* headphones */}
            {pose === "listen" && (
              <g className="m-prop">
                <path
                  d="M86 70 C86 36 150 30 152 60"
                  stroke={C.ink}
                  strokeWidth="6"
                  fill="none"
                  strokeLinecap="round"
                />
                <rect x="78" y="64" width="16" height="24" rx="7" fill="#0B8A80" />
                <rect x="81" y="68" width="6" height="16" rx="3" fill="#7DE0D4" />
                <rect x="144" y="52" width="14" height="20" rx="6" fill="#0B8A80" />
              </g>
            )}
          </g>

          {/* --------------------------------------------------------- props */}
          {pose === "read" && (
            <g className="m-prop">
              <path
                d="M100 150 L128 142 L128 176 L100 184 Z"
                fill="#FFFFFF"
                stroke="#0B8A80"
                strokeWidth="3"
                strokeLinejoin="round"
              />
              <path
                d="M128 142 L156 150 L156 184 L128 176 Z"
                fill="#F3FBFA"
                stroke="#0B8A80"
                strokeWidth="3"
                strokeLinejoin="round"
              />
              <path
                d="M106 156 L122 152 M106 164 L122 160 M106 172 L118 169 M134 152 L150 156 M134 160 L150 164 M134 168 L146 171"
                stroke="#9FB3C8"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <ellipse cx="102" cy="176" rx="7" ry="5" fill={C.leafDeep} />
              <ellipse cx="154" cy="176" rx="7" ry="5" fill={C.leafDeep} />
            </g>
          )}
          {pose === "mic" && (
            <g className="m-prop">
              <path d="M150 116 L136 156" stroke={C.ink} strokeWidth="8" strokeLinecap="round" />
              <circle cx="156" cy="106" r="13" fill="#0B8A80" />
              <path
                d="M148 101 h16 M146 106 h20 M148 111 h16"
                stroke="#7DE0D4"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <ellipse cx="136" cy="156" rx="9" ry="7" fill={C.leafDeep} />
            </g>
          )}
        </g>

        {/* --------------------------------------------- floating extras */}
        {pose === "think" && (
          <g className="m-extra" fill="#0B8A80">
            <circle cx="160" cy="30" r="4" />
            <circle cx="172" cy="18" r="6" opacity="0.8" />
            <circle cx="188" cy="6" r="4" opacity="0.6" />
          </g>
        )}
        {pose === "oops" && (
          <path
            className="m-extra"
            d="M74 50 C70 58 70 64 74 66 C78 64 78 58 74 50 Z"
            fill="#7CC6F2"
          />
        )}
        {pose === "cheer" && (
          <g className="m-confetti">
            <rect
              x="30"
              y="34"
              width="8"
              height="8"
              rx="2"
              fill="#F2A40F"
              transform="rotate(20 34 38)"
            />
            <circle cx="172" cy="40" r="4.5" fill="#E0453A" />
            <rect
              x="160"
              y="14"
              width="7"
              height="7"
              rx="2"
              fill="#0B8A80"
              transform="rotate(-15 163 17)"
            />
            <circle cx="44" cy="16" r="3.5" fill="#2F5BEA" />
          </g>
        )}
      </g>
    </svg>
  );
}
