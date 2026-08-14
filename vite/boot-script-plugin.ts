import type { Plugin } from "vite";

import { BOOT_SCRIPT, BOOT_CSS } from "../src/lib/boot-script";

/**
 * Writes the boot gate into index.html.
 *
 * The gate has to be inline in the head — it runs before the first paint,
 * before any bundle exists — and it has to be identical in the SPA shell and
 * in the server-rendered shell, or the two deploys of this site would load
 * differently. So the code lives in src/lib/boot-script.ts, `__root.tsx`
 * renders it into the SSR shell, and this plugin stamps it into index.html at
 * build time (and in dev, through the same transform).
 *
 * index.html marks the two spots with `data-boot-script` / `data-boot-style`.
 * If either marker goes missing the build fails loudly: a silently un-gated
 * page looks fine in review and ships the flash of unstyled content this whole
 * mechanism exists to prevent.
 */
export function bootScriptPlugin(): Plugin {
  return {
    name: "lws:boot-script",
    transformIndexHtml: {
      order: "pre",
      handler(html, ctx) {
        const script = /<script data-boot-script>[\s\S]*?<\/script>/;
        const style = /<style data-boot-style>[\s\S]*?<\/style>/;

        for (const [marker, re] of [
          ["data-boot-script", script],
          ["data-boot-style", style],
        ] as const) {
          if (!re.test(html)) {
            throw new Error(
              `[lws:boot-script] index.html has no <${marker === "data-boot-script" ? "script" : "style"} ${marker}> placeholder to fill. ` +
                "Restore it, or the page ships without the loading gate (see src/lib/boot-script.ts).",
            );
          }
        }

        const out = html
          // `data-boot` marks these as the gate: scripts/prerender.mjs uses it
          // to drop the copy the server-rendered head carries, so the static
          // pages ship one gate rather than two.
          .replace(script, `<script data-boot>${BOOT_SCRIPT}</script>`)
          .replace(style, `<style data-boot>${BOOT_CSS}</style>`);

        // The notes in index.html are for whoever edits it. In dev they are
        // worth having in the served page; in a build they are 14 copies of
        // documentation on the reader's connection.
        return ctx.server ? out : out.replace(/<!--[\s\S]*?-->/g, "").replace(/\n\s*\n+/g, "\n");
      },
    },
  };
}
