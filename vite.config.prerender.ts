// Build-time SSR bundle for the static prerender step (see scripts/prerender.mjs).
// Produces dist-prerender/prerender-entry.js, which is executed by Node after
// the client build to write one real HTML file per route.
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "node:path";

export default defineConfig({
  base: process.env.BASE_PATH ?? "/",
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
  build: {
    ssr: "scripts/prerender-entry.tsx",
    outDir: "dist-prerender",
    emptyOutDir: true,
    // Bundle everything so the output runs under plain `node` with no install
    // step and no ESM/CJS interop surprises in CI.
    rollupOptions: {
      output: { entryFileNames: "prerender-entry.js" },
    },
  },
  ssr: {
    noExternal: true,
  },
});
