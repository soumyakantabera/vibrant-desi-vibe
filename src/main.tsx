import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";

import { getRouter } from "./router";
import { recordPaintedImages } from "./lib/painted-images";
import "./styles.css";

/**
 * Drop a trailing slash from the URL before the router ever reads it.
 *
 * `scripts/prerender.mjs` writes both `course-ielts.html` and
 * `course-ielts/index.html` on purpose, so neither form 404s on GitHub Pages
 * and neither costs a redirect hop. The side effect is that `/course-ielts/`
 * answers 200 with the same page, so a crawler that finds both spends its
 * budget twice on every page. The canonical tag already prevents duplicate
 * *indexing*; this is about crawl budget and about the reader's address bar.
 *
 * Done here with `replaceState` rather than as a `beforeLoad` redirect on the
 * root route, which is the obvious place for it and does not work: throwing
 * `redirect()` from the root `beforeLoad` during the initial `router.load()`
 * below leaves that promise unresolved, so the module never finishes, the page
 * never fires DOMContentLoaded and `/course-ielts/` hangs on a blank screen.
 * Rewriting the URL first means the router only ever sees canonical paths and
 * no redirect is involved at all.
 *
 * GitHub Pages cannot issue a server redirect, so this is the available half of
 * the fix: it corrects the URL for anyone running JavaScript, and a crawler
 * that does not still reads a page carrying the right canonical.
 */
function stripTrailingSlash() {
  const { pathname, search, hash } = window.location;
  if (pathname === "/" || !pathname.endsWith("/")) return;
  window.history.replaceState(null, "", pathname.replace(/\/+$/, "") + search + hash);
}

stripTrailingSlash();

const router = getRouter();

async function start() {
  // Resolve the current route — including its lazily split chunk — before
  // handing the DOM to React.
  //
  // `createRoot().render()` empties #root, so mounting straight away would
  // wipe the prerendered page and put a blank screen in its place for as long
  // as the route chunk took to arrive: fine on fibre, several seconds of white
  // on a slow phone. Loading first means the swap happens in a single frame,
  // from finished page to finished page.
  try {
    await router.load();
  } catch {
    // A loader failure is the router's business — it renders its own error
    // state. Mount regardless so the reader is never left on a dead page.
  }

  // Static pages ship a fully populated <head> so crawlers that do not run JS
  // can read the metadata. React re-renders those same tags via <HeadContent/>
  // and appends rather than replaces, so hand ownership over cleanly: drop the
  // prerendered copies now, and every subsequent client-side navigation
  // updates the title, canonical and JSON-LD instead of stacking a second set
  // on top of a stale one. No-JS crawlers never reach this line and keep the
  // static head.
  document.querySelectorAll("[data-prerender]").forEach((el) => el.remove());

  // Note which photos the reader can already see, so re-creating the DOM does
  // not blink them back to their placeholders.
  recordPaintedImages();

  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  );
}

void start();
