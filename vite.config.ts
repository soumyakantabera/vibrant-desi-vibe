// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// For GitHub Pages static deployment, build client-only (no server).
// For other deployments (Lovable, Cloudflare), include server for SSR.
const isGitHubPagesBuild = !!process.env.BASE_PATH && process.env.BASE_PATH !== "/";

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// @cloudflare/vite-plugin builds from this — wrangler.jsonc main alone is insufficient.
// Skip server config for GitHub Pages static export.
const tanstackStartConfig = isGitHubPagesBuild
  ? {} // Client-only build for GitHub Pages
  : { server: { entry: "server" } }; // Include server for Lovable and Cloudflare

export default defineConfig({
  tanstackStart: tanstackStartConfig,
  vite: {
    // Honour BASE_PATH at build time so the same build can be deployed to
    // Lovable (/) or a GitHub Pages project page (/<repo>/).
    base: process.env.BASE_PATH ?? "/",
  },
});
