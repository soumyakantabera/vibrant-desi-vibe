import type { Plugin } from "vite";

import { ga4Snippet } from "../src/lib/analytics";

/**
 * Stamps the GA4 loader into index.html, the same way `bootScriptPlugin` stamps
 * in the boot gate.
 *
 * Why here and not through the route `head()` pipeline: `scripts/prerender.mjs`
 * uses the built index.html as the template for all 22 static pages, so one
 * insertion point covers the whole site. And because the tag is not rendered by
 * TanStack's <HeadContent/>, React does not re-render it after hydration —
 * which for a `<script async src=…>` would mean loading gtag.js twice and
 * double-counting every pageview.
 *
 * With no measurement ID configured `ga4Snippet()` returns "", the placeholder
 * is simply removed, and the built page carries no analytics at all. See
 * src/lib/analytics.ts.
 */
export function analyticsPlugin(): Plugin {
  return {
    name: "lws:analytics",
    transformIndexHtml: {
      order: "pre",
      handler(html) {
        // An element, not an HTML comment: `bootScriptPlugin` also runs at
        // `order: "pre"` and strips every comment from a production build, so
        // a comment marker would be gone before this plugin ever sees it.
        const marker = /<script data-analytics><\/script>/;

        if (!marker.test(html)) {
          throw new Error(
            "[lws:analytics] index.html has no <script data-analytics> placeholder to fill. " +
              "Restore it, or the site ships with no measurement at all " +
              "(see src/lib/analytics.ts).",
          );
        }

        return html.replace(marker, ga4Snippet());
      },
    },
  };
}
