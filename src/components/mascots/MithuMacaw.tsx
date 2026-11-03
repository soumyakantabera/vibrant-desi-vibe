import type { CSSProperties } from "react";

/**
 * Mithu — Bolo's friend. A scarlet macaw: bigger, brighter and calmer, the one
 * who turns up for the weekly review, a wrong turn (404) or an empty shelf.
 *
 * Same drawing contract as BoloParrot: 200 × 240 viewBox, every part its own
 * <g> for CSS motion, decorative or labelled, prerendered with the page.
 */

export type MithuPose = "perch" | "explain" | "nod" | "clap" | "lost" | "review" | "sleep";

export const MITHU_POSES: MithuPose[] = [
  "perch",
  "explain",
  "nod",
  "clap",
  "lost",
  "review",
  "sleep",
];

const C = {
  red: "#D8312B",
  redLight: "#EE5A44",
  redDeep: "#A11F1F",
  yellow: "#F6B81C",
  yellowDeep: "#D99A0B",
  green: "#3BAA4E",
  blue: "#1F5FBF",
  blueLight: "#3E86E0",
  face: "#FFF6EE",
  faceLine: "#E9B9AE",
  beak: "#F3E9D8",
  beakShade: "#D9CBB2",
  ink: "#1F2328",
  iris: "#F7E07A",
  white: "#FFFFFF",
  foot: "#6F7782",
  footDeep: "#555D68",
  perch: "#9A6534",
  perchDeep: "#6E4522",
  perchLight: "#BC8550",
  leaf: "#3BAA4E",
  teal: "#0B8A80",
} as const;

const ORIGIN: Record<string, CSSProperties> = {
  head: { transformOrigin: "112px 104px" },
  eye: { transformOrigin: "122px 66px" },
  farWing: { transformOrigin: "130px 118px" },
  nearWing: { transformOrigin: "94px 112px" },
  tail: { transformOrigin: "98px 172px" },
  body: { transformOrigin: "108px 196px" },
};

export function MithuMacaw({
  pose = "perch",
  size = 200,
  title,
  decorative = false,
  animated = false,
  flip = false,
  perch = true,
  className = "",
}: {
  pose?: MithuPose;
  size?: number;
  title?: string;
  decorative?: boolean;
  animated?: boolean;
  flip?: boolean;
  perch?: boolean;
  className?: string;
}) {
  const closed = pose === "sleep";
  const headTilt = pose === "lost" ? -8 : pose === "review" ? 6 : pose === "sleep" ? 8 : 0;
  const farOut = pose === "explain";
  const clap = pose === "clap";
  const look =
    pose === "lost" ? { x: -1, y: -2 } : pose === "review" ? { x: 1, y: 2 } : { x: 1.5, y: 0 };
  const label = title ?? `Mithu the macaw${pose !== "perch" ? ` (${pose})` : ""}`;

  return (
    <svg
      viewBox="0 0 200 240"
      width={size}
      height={(size * 240) / 200}
      className={`mascot mascot-mithu ${animated ? "is-animated" : ""} pose-${pose} ${className}`}
      role={decorative ? undefined : "img"}
      aria-label={decorative ? undefined : label}
      aria-hidden={decorative ? true : undefined}
      focusable="false"
    >
      <g transform={flip ? "translate(200 0) scale(-1 1)" : undefined}>
        <ellipse cx="104" cy="226" rx="64" ry="6" fill={C.ink} opacity="0.08" />

        {/* ---------------------------------------------------------- tail */}
        <g className="m-tail" style={ORIGIN.tail}>
          <path
            d="M84 166 C78 194 70 216 56 238 C62 240 70 239 74 236 C88 214 98 192 104 170 Z"
            fill={C.red}
          />
          <path
            d="M92 168 C88 194 82 214 70 236 C73 237 76 236 78 234 C90 214 98 192 102 172 Z"
            fill={C.redDeep}
          />
          <path
            d="M60 226 C58 232 56 236 56 238 C62 240 70 239 74 236 C72 232 70 228 68 224 Z"
            fill={C.blue}
          />
          <path
            d="M64 214 C62 220 60 224 60 226 C64 228 68 226 70 224 L72 216 Z"
            fill={C.blueLight}
          />
        </g>

        {perch && (
          <g className="m-perch">
            <rect x="16" y="200" width="174" height="13" rx="6.5" fill={C.perch} />
            <rect
              x="16"
              y="200"
              width="174"
              height="5"
              rx="2.5"
              fill={C.perchLight}
              opacity="0.55"
            />
            <path
              d="M36 207 h20 M122 209 h18 M160 206 h14"
              stroke={C.perchDeep}
              strokeWidth="1.6"
              strokeLinecap="round"
              opacity="0.6"
            />
            <path d="M176 201 C184 188 196 186 198 190 C194 198 186 202 176 201 Z" fill={C.leaf} />
          </g>
        )}

        {/* far wing held out, like a teacher pointing at the board */}
        {farOut && (
          <g className="m-wing-far" style={ORIGIN.farWing}>
            <path
              d="M126 120 C146 112 168 104 192 104 C194 110 190 114 186 116 C192 120 192 126 186 128 C178 128 170 128 164 130 C168 134 166 140 160 140 C150 138 140 134 132 136 Z"
              fill={C.red}
            />
            <path
              d="M150 116 C162 112 176 110 190 108 L186 116 C174 116 162 118 152 122 Z"
              fill={C.yellow}
            />
            <path
              d="M164 122 C172 120 180 120 188 122 M160 132 C168 130 176 130 184 130"
              stroke={C.blue}
              strokeWidth="5"
              strokeLinecap="round"
            />
          </g>
        )}

        <g className="m-body" style={ORIGIN.body}>
          <path
            d="M106 92 C142 94 156 128 150 160 C144 188 122 200 100 198 C76 196 64 176 66 150 C68 120 78 90 106 92 Z"
            fill={C.red}
          />
          <path
            d="M120 110 C144 120 150 150 142 176 C134 192 114 196 104 192 C118 170 122 140 120 110 Z"
            fill={C.redLight}
          />

          <g className="m-feet">
            <path
              d="M100 192 L98 201 M118 192 L119 201"
              stroke={C.foot}
              strokeWidth="6.5"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M88 204 C90 198 96 197 100 201 M100 201 C104 198 108 200 108 205"
              stroke={C.footDeep}
              strokeWidth="5.5"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M110 204 C112 198 118 197 120 201 M120 201 C124 198 128 200 128 205"
              stroke={C.footDeep}
              strokeWidth="5.5"
              strokeLinecap="round"
              fill="none"
            />
          </g>

          {/* near wing: red shoulder, yellow band, blue flight feathers */}
          <g
            className="m-wing-near"
            style={{ ...ORIGIN.nearWing, display: clap ? "none" : undefined }}
          >
            <path
              d="M96 106 C70 114 60 146 66 178 C70 194 78 206 84 214 C94 198 102 170 106 142 C108 124 104 110 96 106 Z"
              fill={C.red}
            />
            <path
              d="M74 136 C82 128 94 126 104 130 C104 140 102 150 100 158 C90 154 80 150 70 152 Z"
              fill={C.yellow}
            />
            <path
              d="M72 148 C82 146 92 150 100 156 L98 160 C90 156 80 154 70 156 Z"
              fill={C.green}
            />
            <path
              d="M68 158 C80 156 92 162 98 168 C96 182 90 200 84 214 C76 204 70 192 68 178 Z"
              fill={C.blue}
            />
            <path
              d="M74 178 C78 182 84 182 90 176 M76 194 C80 196 84 196 88 192"
              stroke={C.blueLight}
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M80 140 q5 4 10 0 M78 132 q5 -3 10 -1"
              stroke={C.yellowDeep}
              strokeWidth="1.6"
              fill="none"
              strokeLinecap="round"
            />
          </g>

          {/* clap: both wings swept forward, tips meeting in front of the chest */}
          {clap && (
            <g className="m-clap">
              <g className="m-clap-far" style={{ transformOrigin: "130px 116px" }}>
                <path
                  d="M128 118 C140 108 152 102 166 104 C172 106 174 112 170 118 C164 122 156 124 148 126 Z"
                  fill={C.redDeep}
                />
                <path
                  d="M156 104 C162 103 168 104 172 108 C172 114 168 118 164 120 C160 116 158 110 156 104 Z"
                  fill={C.blue}
                />
              </g>
              <g className="m-clap-near" style={{ transformOrigin: "92px 120px" }}>
                <path
                  d="M90 112 C104 112 128 116 150 120 C158 121 164 124 166 128 C160 132 152 134 144 134 C150 138 150 142 144 144 C130 146 108 144 94 140 C86 132 86 120 90 112 Z"
                  fill={C.red}
                  stroke={C.redDeep}
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <path
                  d="M102 118 C112 118 122 119 132 121 L130 138 C120 138 110 137 100 135 Z"
                  fill={C.yellow}
                />
                <path
                  d="M100 135 C110 137 120 138 130 138 L130 141 C120 141 110 140 100 138 Z"
                  fill={C.green}
                />
                <path
                  d="M136 122 C146 122 158 124 166 128 C160 132 152 134 144 134 C150 138 150 142 144 144 C140 136 138 128 136 122 Z"
                  fill={C.blue}
                />
                <path
                  d="M146 128 C152 128 158 129 162 130"
                  stroke={C.blueLight}
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                />
              </g>
              <path
                className="m-clap-burst"
                d="M178 98 l6 -7 M184 114 h10 M178 130 l6 7"
                stroke={C.yellowDeep}
                strokeWidth="3.5"
                strokeLinecap="round"
              />
            </g>
          )}

          {/* ------------------------------------------------------ head */}
          <g
            className="m-head"
            style={{ ...ORIGIN.head, transform: headTilt ? `rotate(${headTilt}deg)` : undefined }}
          >
            <circle cx="112" cy="70" r="38" fill={C.red} />
            <path
              d="M84 52 C94 38 112 32 126 36 C112 40 98 46 90 58 Z"
              fill={C.redLight}
              opacity="0.9"
            />

            {/* bare white face patch with fine feather lines */}
            <path
              d="M106 52 C122 44 144 50 148 66 C150 80 142 92 128 94 C116 94 106 84 104 72 C102 64 102 56 106 52 Z"
              fill={C.face}
            />
            <path
              d="M112 76 q6 2 12 -1 M110 84 q7 3 14 -1 M118 90 q5 2 10 0"
              stroke={C.faceLine}
              strokeWidth="1.4"
              fill="none"
              strokeLinecap="round"
            />

            {/* eye */}
            <g className="m-eye" style={ORIGIN.eye}>
              {clap ? (
                <path
                  d="M113 70 Q122 59 131 70"
                  stroke={C.ink}
                  strokeWidth="3.5"
                  fill="none"
                  strokeLinecap="round"
                />
              ) : closed ? (
                <path
                  d="M114 68 Q122 74 130 68"
                  stroke={C.ink}
                  strokeWidth="3.5"
                  fill="none"
                  strokeLinecap="round"
                />
              ) : (
                <>
                  <circle
                    cx="122"
                    cy="66"
                    r="10.5"
                    fill={C.white}
                    stroke="#F1D9CF"
                    strokeWidth="1.5"
                  />
                  <circle cx={122 + look.x} cy={66 + look.y} r="6.8" fill={C.iris} />
                  <circle cx={122 + look.x} cy={66 + look.y} r="4" fill={C.ink} />
                  <circle cx={124 + look.x} cy={63.6 + look.y} r="1.8" fill={C.white} />
                </>
              )}
            </g>
            {pose === "lost" && (
              <path
                d="M112 50 Q122 44 132 50"
                stroke={C.redDeep}
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            )}

            {/* big hooked beak */}
            <g className="m-beak">
              <path d="M134 86 C144 92 148 102 142 108 C134 108 128 100 128 92 Z" fill={C.ink} />
              <path
                d="M132 58 C152 50 176 62 176 88 C176 102 168 112 158 112 C160 98 154 88 140 86 C132 84 128 72 132 58 Z"
                fill={C.beak}
              />
              <path
                d="M140 60 C154 58 166 66 170 78 C162 70 152 64 140 64 Z"
                fill={C.white}
                opacity="0.7"
              />
              <path
                d="M140 86 C150 88 156 96 158 104"
                stroke={C.beakShade}
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M158 112 C164 108 168 102 168 96"
                stroke={C.ink}
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </g>

            {/* reading glasses for the weekly review */}
            {pose === "review" && (
              <g className="m-prop">
                <circle cx="122" cy="67" r="13" fill="none" stroke={C.ink} strokeWidth="3" />
                <path
                  d="M109 64 C100 60 92 60 86 62"
                  stroke={C.ink}
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M114 58 l6 8"
                  stroke={C.white}
                  strokeWidth="2"
                  opacity="0.7"
                  strokeLinecap="round"
                />
              </g>
            )}
          </g>

          {/* --------------------------------------------------------- props */}
          {pose === "lost" && (
            <g className="m-prop" transform="rotate(176 128 160)">
              <path
                d="M102 144 L120 138 L138 144 L156 138 L156 176 L138 182 L120 176 L102 182 Z"
                fill="#FFFFFF"
                stroke={C.teal}
                strokeWidth="3"
                strokeLinejoin="round"
              />
              <path d="M120 138 V176 M138 144 V182" stroke={C.teal} strokeWidth="2" />
              <path
                d="M108 168 C116 158 126 166 132 156 C138 148 146 154 150 146"
                stroke={C.red}
                strokeWidth="2.5"
                fill="none"
                strokeDasharray="4 3"
                strokeLinecap="round"
              />
              <path
                d="M146 150 l6 -6 M146 144 l6 6"
                stroke={C.ink}
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </g>
          )}
          {pose === "review" && (
            <g className="m-prop">
              <rect
                x="112"
                y="136"
                width="40"
                height="48"
                rx="5"
                fill="#FFFFFF"
                stroke={C.teal}
                strokeWidth="3"
              />
              <rect x="124" y="131" width="16" height="9" rx="3" fill={C.teal} />
              <path
                d="M119 152 l4 4 l7 -8 M119 166 l4 4 l7 -8"
                stroke={C.green}
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M134 154 h12 M134 168 h10"
                stroke="#9FB3C8"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <ellipse cx="112" cy="170" rx="8" ry="6" fill={C.redDeep} />
            </g>
          )}
        </g>

        {pose === "lost" && (
          <text
            x="166"
            y="40"
            fontSize="30"
            fontWeight="800"
            fill={C.teal}
            fontFamily="DM Sans, system-ui, sans-serif"
          >
            ?
          </text>
        )}
        {pose === "sleep" && (
          <g
            className="m-extra"
            fill={C.teal}
            fontFamily="DM Sans, system-ui, sans-serif"
            fontWeight="800"
          >
            <text x="150" y="40" fontSize="18">
              z
            </text>
            <text x="164" y="26" fontSize="22" opacity="0.8">
              z
            </text>
            <text x="180" y="12" fontSize="14" opacity="0.6">
              z
            </text>
          </g>
        )}
        {clap && (
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
            <circle cx="180" cy="40" r="4.5" fill="#0B8A80" />
            <circle cx="44" cy="16" r="3.5" fill="#2F5BEA" />
          </g>
        )}
        {pose === "nod" && (
          <g
            className="m-extra"
            stroke={C.green}
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          >
            <path d="M168 46 l6 6 l12 -14" />
          </g>
        )}
      </g>
    </svg>
  );
}
