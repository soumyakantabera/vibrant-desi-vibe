import type { Plugin } from "vite";

/**
 * Client build only (vite.config.pages.ts): removes the `head:` option from
 * every page route in src/routes, except the root route.
 *
 * Every page is prerendered with its full <head> — title, description,
 * canonical, Open Graph and JSON-LD — by scripts/prerender.mjs, which uses
 * its own build (vite.config.prerender.ts) and keeps `head`. In the browser,
 * computing that head again meant shipping the metadata for every page
 * (~250 kB of JavaScript: all titles, descriptions, FAQs, course and state
 * data) to every visitor and parsing it on load. Without it those modules
 * drop out of the main bundle.
 *
 * Navigation inside the app copies the next page's head from its prerendered
 * HTML instead (src/components/HeadSync.tsx), so titles and canonicals stay
 * exact.
 */

/** Index just past the expression that starts at `from`: stops at a `,` or a
 *  closing bracket at depth 0. Skips strings, template literals and comments. */
function endOfExpression(code: string, from: number): number {
  let depth = 0;
  for (let i = from; i < code.length; i++) {
    const ch = code[i];
    const next = code[i + 1];
    if (ch === "/" && next === "/") {
      i = code.indexOf("\n", i);
      if (i < 0) return code.length;
      continue;
    }
    if (ch === "/" && next === "*") {
      i = code.indexOf("*/", i + 2) + 1;
      continue;
    }
    if (ch === '"' || ch === "'") {
      for (i++; i < code.length && code[i] !== ch; i++) if (code[i] === "\\") i++;
      continue;
    }
    if (ch === "`") {
      for (i++; i < code.length && code[i] !== "`"; i++) {
        if (code[i] === "\\") i++;
        else if (code[i] === "$" && code[i + 1] === "{") {
          let d = 0;
          for (; i < code.length; i++) {
            if (code[i] === "{") d++;
            else if (code[i] === "}" && --d === 0) break;
          }
        }
      }
      continue;
    }
    if (ch === "(" || ch === "{" || ch === "[") depth++;
    else if (ch === ")" || ch === "}" || ch === "]") {
      if (depth === 0) return i;
      depth--;
    } else if (ch === "," && depth === 0) return i;
  }
  return code.length;
}

export function stripRouteHead(code: string): string {
  const base = code.indexOf("createFileRoute(");
  if (base < 0) return code;
  const re = /\n(\s*)head:\s*/g;
  re.lastIndex = base;
  const m = re.exec(code);
  if (!m) return code;
  const start = m.index;
  let end = endOfExpression(code, m.index + m[0].length);
  if (code[end] === ",") end += 1;
  return code.slice(0, start) + code.slice(end);
}

export function stripRouteHeadPlugin(): Plugin {
  return {
    name: "lws-strip-route-head",
    enforce: "pre",
    apply: "build",
    transform(code, id) {
      const file = id.split("?")[0];
      if (!/\/src\/routes\/[^/]+\.tsx$/.test(file) || file.endsWith("__root.tsx")) return null;
      if (!code.includes("createFileRoute")) return null;
      const out = stripRouteHead(code);
      return out === code ? null : { code: out, map: null };
    },
  };
}
