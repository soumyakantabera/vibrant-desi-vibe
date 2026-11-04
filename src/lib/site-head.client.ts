/**
 * Client-build twin of site-head.ts: the same site-wide meta and links, no
 * JSON-LD (it is prerendered into every page and stays there). Kept free of
 * seo.ts so the page metadata of the whole site is not in the main bundle.
 */
import { verificationMeta } from "@/lib/analytics";

const SITE = "https://www.learnwithsmile.app";
const NAME = "Learn With Smile";

export function siteHead() {
  return {
    meta: [
      ...verificationMeta(),
      { name: "author", content: NAME },
      { name: "publisher", content: NAME },
      { name: "theme-color", content: "#04815B" },
    ],
    links: [
      { rel: "describedby", type: "text/plain", title: "llms.txt", href: `${SITE}/llms.txt` },
      { rel: "alternate", type: "application/json", title: "llms.json", href: `${SITE}/llms.json` },
      {
        rel: "alternate",
        type: "application/openapi+json",
        title: "ChatGPT Actions",
        href: `${SITE}/openapi.json`,
      },
    ],
    scripts: [] as { type: string; children: string }[],
  };
}
