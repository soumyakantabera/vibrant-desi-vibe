import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";

import { getRouter } from "./router";
import "./styles.css";

const router = getRouter();

// Static pages ship a fully populated <head> so crawlers that do not run JS can
// read the metadata. React re-renders those same tags via <HeadContent/> and
// appends rather than replaces, so hand ownership over cleanly: drop the
// prerendered copies now, and every subsequent client-side navigation updates
// the title, canonical and JSON-LD instead of stacking a second set on top of a
// stale one. No-JS crawlers never reach this line and keep the static head.
document.querySelectorAll("[data-prerender]").forEach((el) => el.remove());

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
