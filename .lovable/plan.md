## 1. Replace hero side image with a "Snapshot Card"

In `src/routes/index.tsx`, the right-hand floating student-laptop image inside the HERO (`section:nth-of-type(1)`) is replaced with a hand-built **Snapshot Card** — a tilted, polaroid-style card with layered chips that doubles as the visual focal point and a value summary.

Card content (catchy, India-context, scan-in-2-seconds):

- Header chip: `LIVE · This Month`
- Primary line: **Courses from ₹999/mo** (highlighted in sunshine)
- Three stat rows with small SVG glyphs:
  - 🎓 **500+ learners** taught across India
  - 📅 **7 years** of live online teaching
  - 👥 **Max 6 / batch** · or 1:1
- Footer ribbon: `Free demo · No credit card · WhatsApp in minutes`
- Decorative: soft sunshine + coral blur halos kept, plus a tiny rotated "★ 4.9 rating" sticker badge in the corner.

Styling: cream background card, `rounded-3xl`, drop shadow, `-rotate-2` tilt, animated float kept. Built with Tailwind + inline SVG icons (no new image asset). Reuses existing tokens (`brand-deep`, `sunshine`, `sage`, `coral`, `ink`).

The hero image (`IMG.studentLaptop`) and its `<img>` tag are removed. The surrounding `hidden lg:block` wrapper + blur halos stay.

## 2. GitHub deployment

Add a GitHub Actions workflow at `.github/workflows/deploy.yml` that builds the project and deploys the static output to **GitHub Pages**:

- Triggers on push to `main` + manual dispatch
- Steps: checkout → setup Bun → `bun install` → `bun run build` → upload `dist/` (or the Vite output dir) as Pages artifact → deploy via `actions/deploy-pages@v4`
- Concurrency guard so only one deploy runs at a time

Also add a short `DEPLOY.md` with the one-time setup: enable Pages → Source = GitHub Actions, and (if using a project page, not a custom domain) set the base path env var described below.

## 3. Universal path fix (works on any host / subpath)

Goal: the app must work from `/` (Lovable, custom domain) **and** from a subpath like `/<repo-name>/` (GitHub Pages project sites) without 404s on refresh or broken asset URLs.

Changes:

- **`vite.config.ts`** — set `base: process.env.BASE_PATH ?? '/'` so a GitHub Pages deploy can pass `BASE_PATH=/<repo>/` at build time; default `/` keeps Lovable unchanged.
- **`src/router.tsx`** — pass `basepath: import.meta.env.BASE_URL` to `createRouter` so TanStack Router generates correct links under any base.
- **GitHub Pages SPA refresh fix** — add `public/404.html` that mirrors `index.html` (GitHub Pages serves `404.html` for unknown paths, letting the SPA take over), and a tiny redirect snippet in `index.html` to restore the original path. This is the standard `rafgraph/spa-github-pages` trick. No effect on Lovable hosting.
- Workflow sets `BASE_PATH` automatically from the repo name when not using a custom domain.

## Files touched

- `src/routes/index.tsx` — swap hero image for Snapshot Card (inline component + SVG icons)
- `vite.config.ts` — `base` from env
- `src/router.tsx` — `basepath: import.meta.env.BASE_URL`
- `public/404.html` — new, SPA fallback for GitHub Pages
- `index.html` — small redirect-restore script (guarded, no-op on normal loads)
- `.github/workflows/deploy.yml` — new, build + deploy to GitHub Pages
- `DEPLOY.md` — new, one-page setup notes

## Out of scope

- No changes to pricing section, testimonials, or other routes.
- No new image assets generated — Snapshot Card is pure CSS/SVG.
