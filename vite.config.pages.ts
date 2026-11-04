// Static SPA build for GitHub Pages.
// Bypasses the TanStack Start / Cloudflare Worker build so the output is a
// plain client-side single-page app under dist/.
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import path from "node:path";

import { bootScriptPlugin } from "./vite/boot-script-plugin";
import { phosphorWeightsPlugin } from "./vite/phosphor-weights-plugin";
import { stripRouteHeadPlugin } from "./vite/strip-route-head-plugin";

export default defineConfig({
  base: process.env.BASE_PATH ?? "/",
  plugins: [
    bootScriptPlugin(),
    stripRouteHeadPlugin(),
    phosphorWeightsPlugin(),
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
      routesDirectory: "src/routes",
      generatedRouteTree: "src/routeTree.gen.ts",
    }),
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
  resolve: {
    alias: [
      // Client build: the root route's site-wide head without the JSON-LD
      // that is already prerendered (see src/lib/site-head.ts).
      {
        find: /^@\/lib\/site-head$/,
        replacement: path.resolve(__dirname, "./src/lib/site-head.client.ts"),
      },
      // Client build: the page's short name from its prerendered meta tag,
      // not from the whole site's metadata (src/lib/use-page-label.client.ts).
      {
        find: /^@\/lib\/use-page-label$/,
        replacement: path.resolve(__dirname, "./src/lib/use-page-label.client.ts"),
      },
      { find: "@", replacement: path.resolve(__dirname, "./src") },
    ],
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
