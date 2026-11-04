/**
 * Site-wide head for the root route. The prerender build uses the full
 * version from seo.ts (with the Organization and WebSite JSON-LD); the client
 * build aliases this module to site-head.client.ts (vite.config.pages.ts),
 * because that JSON-LD is already in every prerendered page and computing it
 * in the browser pulled all of seo.ts into the main bundle.
 */
export { siteHead } from "@/lib/seo";
