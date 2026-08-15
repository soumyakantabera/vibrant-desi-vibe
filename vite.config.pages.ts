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
import { analyticsPlugin } from "./vite/analytics-plugin";

export default defineConfig({
  base: process.env.BASE_PATH ?? "/",
  plugins: [
    bootScriptPlugin(),
    analyticsPlugin(),
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
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
