/**
 * Static prerender for the GitHub Pages deploy.
 *
 * Why this exists
 * ---------------
 * Before this step the Pages build shipped a single `index.html` with an empty
 * `<div id="root">`, plus a `404.html` copy as an SPA fallback. That has two
 * fatal SEO consequences:
 *
 *   1. Every URL except `/` was served **with HTTP status 404**, because Pages
 *      only falls back to 404.html for paths it cannot resolve. Google drops
 *      404s from the index outright, so 13 of the site's 14 pages could not
 *      rank at all, no matter how good the metadata was.
 *   2. The body had no text. Googlebot renders JavaScript (slowly, on a second
 *      pass), but GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, PerplexityBot
 *      and Bingbot largely do not. To those crawlers the site was blank.
 *
 * This script renders every route to real HTML on disk, so each URL returns 200
 * with its content and metadata already in the markup. The SPA still boots and
 * takes over navigation exactly as before.
 *
 * Run after `vite build --config vite.config.pages.ts`.
 */
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const DIST = "dist";
const ENTRY = path.resolve("dist-prerender/prerender-entry.js");

const mod = await import(pathToFileURL(ENTRY).href);
const {
  ALL_PATHS,
  PAGES,
  SITE_URL,
  headFor,
  renderPath,
  buildLlmsTxt,
  buildLlmsFullTxt,
  htmlToMarkdown,
  markdownPathFor,
  metaFor,
  pageMarkdown,
  BLOG_POSTS,
  actualWordCounts,
} = mod;

const today = new Date().toISOString().slice(0, 10);

/* ------------------------------------------------- blog metadata assertions */

/**
 * `wordCount` and `headline` in a BlogPosting are factual claims about the
 * page. Both are declared in src/lib/blog.ts rather than derived at render time
 * (see `actualWordCounts` for why), so both can drift the moment somebody edits
 * a paragraph. Fail the build rather than ship markup that quietly lies.
 */
{
  const actual = actualWordCounts();
  for (const post of BLOG_POSTS) {
    const real = actual[post.slug];
    if (real === undefined) {
      throw new Error(
        `prerender: blog post "${post.slug}" has no body in src/content/blog/index.ts`,
      );
    }
    // 5% tolerance: the declared figure is a claim about article length, not a
    // checksum, and a one-word typo fix should not fail a build.
    const drift = Math.abs(real - post.wordCount) / real;
    if (drift > 0.05) {
      throw new Error(
        `prerender: ${post.slug} declares wordCount ${post.wordCount} but the body is ${real} words. ` +
          "Update wordCount (and readingTime) in src/lib/blog.ts.",
      );
    }
    if (post.headline?.length > 110 || post.title.length > 110) {
      throw new Error(
        `prerender: ${post.slug} headline is ${post.title.length} chars; Google truncates BlogPosting headline at 110.`,
      );
    }
  }
}

/* ------------------------------------------------------------------ utils */

/**
 * Expected canonical for a path, used only to assert that the SSR-rendered head
 * actually came out right. The head itself is produced by TanStack merging the
 * root and route `head()` results during SSR — reproducing it here by hand
 * would double every tag and let the static and runtime heads drift apart.
 */
function expectedCanonical(pathname) {
  const head = headFor(pathname);
  return head.links.find((l) => l.rel === "canonical")?.href;
}

/* --------------------------------------------------------------- template */

/**
 * The pristine Vite SPA shell — index.html with an empty #root and the hashed
 * asset tags. This script overwrites dist/index.html with the prerendered home
 * page, so a second run would otherwise read its own output back as the
 * template and stack a duplicate head onto every page. Cache the clean shell
 * outside dist/ and reuse it when the file on disk is no longer pristine.
 */
const SHELL_CACHE = path.resolve("dist-prerender/spa-shell.html");

function loadTemplate() {
  const html = fs.readFileSync(path.join(DIST, "index.html"), "utf8");

  if (html.includes('<div id="root"></div>')) {
    fs.writeFileSync(SHELL_CACHE, html);
    return html;
  }
  if (fs.existsSync(SHELL_CACHE)) {
    return fs.readFileSync(SHELL_CACHE, "utf8");
  }
  throw new Error(
    "prerender: dist/index.html is already prerendered and no clean shell is cached.\n" +
      "Run `bun run build:pages` to regenerate it before prerendering.",
  );
}

const template = loadTemplate();

/**
 * Strip the tags index.html carries as a bare-SPA fallback. Each route now
 * emits its own title, description, canonical and icons through the head
 * pipeline, and leaving these in would produce two <title> and two
 * <meta name="description"> tags on every prerendered page.
 */
function stripFallbackHead(html) {
  return html
    .replace(/<title>[\s\S]*?<\/title>\s*/i, "")
    .replace(/<meta\s+name="description"[^>]*>\s*/i, "")
    .replace(/<link\s+rel="icon"[^>]*>\s*/gi, "")
    .replace(/<link\s+rel="apple-touch-icon"[^>]*>\s*/gi, "");
}

/** Tags the SSR head duplicates from what Vite already injected. */
function dedupeSsrHead(ssrHead) {
  return (
    ssrHead
      .replace(/<meta\s+charSet="[^"]*"\s*\/?>/gi, "")
      .replace(/<meta\s+name="viewport"[^>]*\/?>/gi, "")
      // Vite injects the hashed stylesheet into index.html already.
      .replace(/<link\s+rel="stylesheet"\s+href="[^"]*\/assets\/[^"]*"[^>]*\/?>/gi, "")
      // So are the font preconnects, and the <noscript> fallback that asks for
      // the font stylesheets — index.html carries both already.
      .replace(
        /<link\s+rel="preconnect"\s+href="https:\/\/fonts\.(googleapis|gstatic)\.com"[^>]*\/?>/gi,
        "",
      )
      .replace(/<noscript>[\s\S]*?<\/noscript>/gi, "")
      // The boot gate too: index.html carries it above every stylesheet, which
      // is the only place it works (a classic script waits for the stylesheets
      // declared before it). The SSR shell renders its own copy for the hosts
      // that serve it directly; here it would be a second, later, redundant one.
      .replace(/<script data-boot="[^"]*">[\s\S]*?<\/script>/g, "")
      .replace(/<style data-boot="[^"]*">[\s\S]*?<\/style>/g, "")
      // The GA4 tag, for the same reason: vite/analytics-plugin.ts already put
      // it into index.html, which is this script's template, so every page has
      // one. The SSR shell renders its own copy for the hosts that serve it
      // directly; keeping both here would load gtag.js twice and double-count
      // every pageview.
      .replace(/<script data-analytics="[^"]*"[^>]*><\/script>/g, "")
      .replace(/<script data-analytics="[^"]*"[^>]*>[\s\S]*?<\/script>/g, "")
      .replace(/ data-precedence="[^"]*"/g, "")
  );
}

/**
 * Marks the head tags that the client will re-render through <HeadContent/>.
 *
 * Once React mounts it owns the document head, but it appends rather than
 * replaces — so without this the prerendered canonical and JSON-LD would sit
 * alongside React's copies, and after a client-side navigation the page would
 * carry the *previous* page's canonical. `src/main.tsx` removes everything
 * carrying this attribute just before mounting. Crawlers that never run JS keep
 * the full static head, which is the whole point of prerendering.
 *
 * Stylesheets, preconnects and preloads are deliberately not marked: dropping
 * and re-adding those would cause a visible flash of unstyled content.
 */
function tagPrerendered(head) {
  return head
    .replace(/<title>/g, '<title data-prerender="1">')
    .replace(/<meta /g, '<meta data-prerender="1" ')
    .replace(/<link rel="(canonical|alternate)"/g, '<link data-prerender="1" rel="$1"')
    .replace(
      /<script type="application\/ld\+json">/g,
      '<script data-prerender="1" type="application/ld+json">',
    );
}

const HTML_TAG = /<html[^>]*>/i;

function buildPage(pathname, ssrHtml) {
  const ssrHead = tagPrerendered(
    dedupeSsrHead(ssrHtml.slice(ssrHtml.indexOf("<head>") + 6, ssrHtml.indexOf("</head>"))),
  );
  const ssrBody = ssrHtml.slice(ssrHtml.indexOf("<body>") + 6, ssrHtml.lastIndexOf("</body>"));

  let out = stripFallbackHead(template);
  out = out.replace(HTML_TAG, '<html lang="en-IN">');
  out = out.replace("</head>", `  ${ssrHead}\n  </head>`);
  out = out.replace('<div id="root"></div>', `<div id="root">${ssrBody}</div>`);
  return out;
}

/* -------------------------------------------------------------- prerender */

function writeFile(rel, contents) {
  const dest = path.join(DIST, rel);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, contents);
}

const rendered = [];
/** Markdown mirror of each page, reused below to build llms-full.txt. */
const docs = [];

for (const pathname of ALL_PATHS) {
  const ssrHtml = await renderPath(pathname);
  const page = buildPage(pathname, ssrHtml);

  // Guard against a silent head regression: if a route's `head()` stops firing,
  // the page still renders fine but ships with no canonical and no metadata,
  // which is exactly the failure mode this whole script exists to fix.
  const canonical = expectedCanonical(pathname);
  const canonicalCount = (page.match(/rel="canonical"/g) ?? []).length;
  const titleCount = (page.match(/<title[\s>]/g) ?? []).length;
  if (canonicalCount !== 1 || !page.includes(`rel="canonical" href="${canonical}"`)) {
    throw new Error(
      `prerender: ${pathname} has ${canonicalCount} canonical tags, expected exactly one pointing at ${canonical}`,
    );
  }
  if (titleCount !== 1) {
    throw new Error(`prerender: ${pathname} has ${titleCount} <title> tags, expected exactly one`);
  }

  if (pathname === "/") {
    writeFile("index.html", page);
  } else {
    const slug = pathname.replace(/^\//, "");
    // Both forms: GitHub Pages resolves `/course-ielts` from `course-ielts.html`
    // without a redirect, and `/course-ielts/` from the directory index. Writing
    // both means neither form 404s and neither costs a redirect hop, while the
    // canonical tag keeps the no-slash URL as the single indexed version.
    writeFile(`${slug}.html`, page);
    writeFile(`${slug}/index.html`, page);
  }

  // The Markdown mirror, from the same render — `<page>.md` for an assistant
  // that wants this page's text without the markup, and the raw material for
  // llms-full.txt below.
  const doc = { ...metaFor(pathname), markdown: htmlToMarkdown(ssrHtml) };
  if (doc.markdown.length < 500) {
    throw new Error(
      `prerender: Markdown mirror for ${pathname} is only ${doc.markdown.length} chars — ` +
        "the page body is missing or htmlToMarkdown stopped matching the markup",
    );
  }
  docs.push(doc);
  writeFile(markdownPathFor(pathname).replace(/^\//, ""), pageMarkdown(doc, today));

  rendered.push({ pathname, bytes: Buffer.byteLength(page) });
  console.log(
    `  prerendered ${pathname.padEnd(32)} ${(Buffer.byteLength(page) / 1024).toFixed(0)} kB` +
      ` · ${(doc.markdown.length / 1024).toFixed(1)} kB markdown`,
  );
}

/* ---------------------------------------------------------------- sitemap */

function sitemapEntry(loc, priority, changefreq, lastmod = today) {
  return [
    "  <url>",
    `    <loc>${loc}</loc>`,
    `    <lastmod>${lastmod}</lastmod>`,
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${priority.toFixed(1)}</priority>`,
    "  </url>",
  ].join("\n");
}

const postBySlug = new Map(BLOG_POSTS.map((post) => [post.slug, post]));

const sitemapUrls = ALL_PATHS.map((p) => {
  const loc = p === "/" ? `${SITE_URL}/` : `${SITE_URL}${p}`;
  const page = PAGES[p];
  if (page) return sitemapEntry(loc, page.priority, page.changefreq);

  // Articles carry their own last-modified date rather than today's. A build
  // date on an article that has not changed in six months tells Google the page
  // is being churned, which is the opposite of what a lastmod is for.
  if (p.startsWith("/blog/")) {
    const post = postBySlug.get(p.slice("/blog/".length));
    return sitemapEntry(loc, 0.6, "yearly", post?.dateModified ?? today);
  }

  return sitemapEntry(loc, 0.8, "monthly");
});

writeFile(
  "sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrls.join("\n")}\n</urlset>\n`,
);

/* ------------------------------------------- llms.txt + llms-full.txt */

/**
 * The AI-readable layer. `src/lib/llms.ts` owns the content and the HTML →
 * Markdown conversion; this step just writes what it produces, from the same
 * `ALL_PATHS` walk that produced the pages and the sitemap, so the three can
 * never disagree about what the site contains.
 */
writeFile("llms.txt", buildLlmsTxt(today));
writeFile("llms-full.txt", buildLlmsFullTxt(docs, today));

/* -------------------------------------------------------------------- log */

const totalKb = rendered.reduce((n, r) => n + r.bytes, 0) / 1024;
const mdKb = docs.reduce((n, d) => n + d.markdown.length, 0) / 1024;
console.log(
  `\n  ${rendered.length} routes prerendered (${totalKb.toFixed(0)} kB total).` +
    `\n  sitemap.xml, llms.txt, llms-full.txt and ${docs.length} Markdown mirrors written (${mdKb.toFixed(0)} kB of text).`,
);
