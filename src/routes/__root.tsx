import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import { useEffect } from "react";

import appCss from "../styles.css?url";
import { withBasePath } from "@/lib/site-path";
import { siteHead } from "@/lib/seo";
import { RouteProgress } from "@/components/RouteProgress";
import { BOOT_SCRIPT, BOOT_CSS, FONT_CSS } from "@/lib/boot-script";
import { markAppReady, prefetchWhenIdle } from "@/lib/boot";
import {
  ga4InlineScript,
  ga4LoaderSrc,
  hasAnalytics,
  installWhatsAppClickTracking,
} from "@/lib/analytics";

/** Pages a reader is most likely to open next, fetched during idle time. */
const LIKELY_NEXT = ["/english-career", "/course-spoken-english", "/book-free-demo"];

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href={withBasePath("/")}
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => {
    // Site-wide only — no title, description, canonical or page JSON-LD here.
    // Every route supplies those through `pageHead()` / `courseSeo()`.
    const site = siteHead();
    return {
      meta: [
        // No charSet here: RootShell renders it literally, above the inline
        // boot gate, so it stays inside the first 1024 bytes of the document.
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        ...site.meta,
      ],
      links: [
        { rel: "stylesheet", href: appCss },
        { rel: "icon", type: "image/svg+xml", href: withBasePath("/favicon.svg") },
        { rel: "icon", type: "image/png", sizes: "48x48", href: withBasePath("/favicon.png") },
        { rel: "apple-touch-icon", sizes: "180x180", href: withBasePath("/apple-touch-icon.png") },
        // Only the connections. The font stylesheets themselves are requested
        // by the boot gate — see FONT_CSS in src/lib/boot-script.ts for why a
        // <link> here would be worse than useless.
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
        ...site.links,
      ],
      scripts: site.scripts,
    };
  },
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <head>
        {/* The boot gate — the same code index.html carries for the static
            build, so both deploys of this site load identically. See
            src/lib/boot-script.ts.

            As early in the head as React will allow: it hoists the stylesheet
            links it renders above anything written here, and a classic
            <script> does not run until the stylesheets above it have loaded.
            That is survivable for the app's own stylesheet, which the page is
            waiting for anyway; it is why the fonts are not requested with a
            <link> at all. The charset goes first of all — it only counts
            inside the document's first 1024 bytes. */}
        <meta charSet="utf-8" />
        <style data-boot="" dangerouslySetInnerHTML={{ __html: BOOT_CSS }} />
        <script data-boot="" dangerouslySetInnerHTML={{ __html: BOOT_SCRIPT }} />
        {/* Readers with JavaScript off never reach the line in the gate that
            asks for the fonts, so ask here on their behalf. Written as raw
            markup because React hoists a <link> element out of wherever it was
            rendered — including out of here, which would defeat the point. */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: FONT_CSS.map((href) => `<link rel="stylesheet" href="${href}">`).join(""),
          }}
        />
        {/* The GA4 tag for the server-rendered deploy. The static Pages build
            gets the identical snippet stamped into index.html by
            vite/analytics-plugin.ts — the two shells must not drift.

            Rendered here rather than through <HeadContent/> on purpose: that
            pipeline re-renders after hydration, which for a `<script async
            src>` means fetching gtag.js a second time and double-counting
            every pageview. Nothing is emitted at all until a measurement ID is
            configured in src/lib/analytics.ts. */}
        {hasAnalytics() && (
          <>
            {/* `data-analytics` marks these as the tag, exactly as `data-boot`
                marks the gate above: scripts/prerender.mjs drops the copy the
                SSR head carries, because the static template already has one
                from index.html. Two copies would load gtag.js twice and count
                every pageview twice. */}
            <script data-analytics="" async src={ga4LoaderSrc()} />
            <script data-analytics="" dangerouslySetInnerHTML={{ __html: ga4InlineScript() }} />
          </>
        )}
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const router = useRouter();

  // The page is built and painted: let the boot gate open (once everything
  // else it waits for has arrived), then quietly warm the next likely pages.
  useEffect(() => {
    markAppReady();
    prefetchWhenIdle((to) => router.preloadRoute({ to }), LIKELY_NEXT);
  }, [router]);

  // Every CTA on this site opens WhatsApp, so that click is the only
  // conversion there is. One delegated listener records all of them — see
  // src/lib/analytics.ts for why it is not an onClick per button.
  useEffect(installWhatsAppClickTracking, []);

  return (
    <QueryClientProvider client={queryClient}>
      <RouteProgress />
      <Outlet />
    </QueryClientProvider>
  );
}
