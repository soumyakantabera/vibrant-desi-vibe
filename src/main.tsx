import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";

import { getRouter } from "./router";
import { recordPaintedImages } from "./lib/painted-images";
import "./styles.css";

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
