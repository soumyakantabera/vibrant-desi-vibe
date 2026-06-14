# Deploying

This project is built with **TanStack Start**. Two deployment targets are wired up:

## 1. Lovable (default)

Click **Publish** in the Lovable editor. No configuration required — routes,
assets, and SSR all work out of the box on the `*.lovable.app` URL or any
custom domain you attach.

## 2. GitHub Pages (static export)

A workflow lives at `.github/workflows/deploy.yml`. It builds the project on
every push to `main` and deploys the contents of `dist/` to GitHub Pages.

### One-time setup

1. Push the repo to GitHub.
2. Go to **Settings → Pages → Build and deployment** and set **Source** to
   **GitHub Actions**.
3. Trigger a deploy by pushing to `main`, or run the workflow manually from
   the **Actions** tab.

### Path handling (universal use)

The site works at any base path:

- **Lovable / custom domain** → served from `/`. No env vars needed.
- **GitHub project page** (`<user>.github.io/<repo>/`) → the workflow
  automatically sets `BASE_PATH=/<repo>/` at build time. `src/router.tsx`
  passes `basepath: import.meta.env.BASE_URL` so every `<Link>` resolves
  correctly under the subpath.
- **Custom domain on Pages** → drop a `public/CNAME` file with the domain;
  the workflow will detect it and build with `BASE_PATH=/`.

### SPA refresh fix

GitHub Pages serves `404.html` for unknown URLs. The workflow copies
`index.html → 404.html` after the build so deep links like
`/your-repo/about-us` resolve to the SPA shell and the client router
renders the right page on refresh.

### Caveats

GitHub Pages is static-only. Any TanStack `createServerFn` or `/api/*` route
will not execute there. This site is content-only, so static export is fine.
If you add server functions later, deploy via Lovable (or another runtime
host) instead.
