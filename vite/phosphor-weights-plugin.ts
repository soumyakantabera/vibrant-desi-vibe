import type { Plugin } from "vite";

/**
 * Phosphor ships every icon with all six weights (thin, light, regular, bold,
 * fill, duotone) baked into one module, and src/components/Icon.tsx only ever
 * renders three of them. Icon.tsx sits in the main bundle (Nav uses it), so
 * the unused path data was ~90 kB of JavaScript every page parsed on load.
 *
 * This strips the unused weights from `@phosphor-icons/react/dist/defs/*` at
 * build time. KEPT must match `IconWeight` in Icon.tsx; the type there stops a
 * caller asking for a weight that is not shipped.
 */
export const KEPT_WEIGHTS = ["bold", "fill", "duotone"] as const;
const DROP = ["thin", "light", "regular"];

/** Index just past the `]` that closes the `[` at `open`, skipping strings. */
function matchBracket(code: string, open: number): number {
  let depth = 0;
  for (let i = open; i < code.length; i++) {
    const ch = code[i];
    if (ch === '"' || ch === "'" || ch === "`") {
      for (i++; i < code.length && code[i] !== ch; i++) if (code[i] === "\\") i++;
      continue;
    }
    if (ch === "[") depth++;
    else if (ch === "]" && --depth === 0) return i + 1;
  }
  return -1;
}

export function stripWeights(code: string): string {
  let out = code;
  for (const w of DROP) {
    const m = new RegExp(`\\[\\s*"${w}",`).exec(out);
    if (!m) continue;
    let end = matchBracket(out, m.index);
    if (end < 0) continue;
    const comma = /^\s*,/.exec(out.slice(end));
    if (comma) end += comma[0].length;
    out = out.slice(0, m.index) + out.slice(end);
  }
  return out;
}

export function phosphorWeightsPlugin(): Plugin {
  return {
    name: "lws:phosphor-weights",
    enforce: "pre",
    transform(code, id) {
      if (!/@phosphor-icons[\\/]react[\\/]dist[\\/]defs[\\/][^\\/]+\.es\.js$/.test(id)) return null;
      const next = stripWeights(code);
      for (const w of KEPT_WEIGHTS)
        if (code.includes(`"${w}"`) && !next.includes(`"${w}"`))
          this.error(`phosphor-weights: lost the "${w}" weight in ${id}`);
      return { code: next, map: null };
    },
  };
}
