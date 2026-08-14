import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { withBasePath } from "@/lib/site-path";
import { siteHead } from "@/lib/seo";
import { RouteProgress } from "@/components/RouteProgress";

/**
 * Loading behaviour, before anything else runs — the same script index.html
 * carries for the SPA shell, repeated here so server-rendered responses get it
 * too. Running twice is harmless; every step is idempotent. See the LOADING
 * BEHAVIOUR section of src/styles.css for what the flags drive.
 *
 * Enhanced to wait for both text fonts (Manrope, Sora) and icon fonts (Material Symbols)
 * before marking fonts-ready, ensuring proper UI rendering.
 */
const BOOT_SCRIPT = `(function(){var d=document,r=d.documentElement,g=["js"];
var a=function(){for(var i=0;i<g.length;i++){if(!r.classList.contains(g[i]))r.classList.add(g[i]);}};a();
if(window.MutationObserver)new MutationObserver(a).observe(r,{attributes:true,attributeFilter:["class"]});
var m=function(e){var t=e.target;if(t&&t.tagName==="IMG"&&t.hasAttribute("data-fade"))t.setAttribute("data-loaded","");};
d.addEventListener("load",m,true);d.addEventListener("error",m,true);
var f=function(){if(g.indexOf("fonts-ready")<0){g.push("fonts-ready");a();}};
var s=function(){try{if(!d.fonts||!d.fonts.forEach){f();return;}var textReady=false,iconReady=false;d.fonts.forEach(function(x){if(x.family&&x.status==="loaded"){if(x.family.indexOf("Manrope")>=0||x.family.indexOf("Sora")>=0)textReady=true;if(x.family.indexOf("Material Symbols")>=0)iconReady=true;}});if(textReady&&iconReady)f();}catch(e){f();}};
try{if(d.fonts&&d.fonts.load){var promises=[d.fonts.load('400 24px Manrope'),d.fonts.load('700 24px Sora'),d.fonts.load("24px 'Material Symbols Rounded'")];Promise.all(promises).then(s).catch(f);if(d.fonts.addEventListener)d.fonts.addEventListener("loadingdone",s);}else f();}catch(e){f();}
setTimeout(s,2000);setTimeout(s,4000);setTimeout(s,6000);})();`;

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
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        ...site.meta,
      ],
      links: [
        { rel: "stylesheet", href: appCss },
        { rel: "icon", type: "image/svg+xml", href: withBasePath("/favicon.svg") },
        { rel: "icon", type: "image/png", sizes: "48x48", href: withBasePath("/favicon.png") },
        { rel: "apple-touch-icon", sizes: "180x180", href: withBasePath("/apple-touch-icon.png") },
        // DNS prefetch for faster font CDN resolution
        { rel: "dns-prefetch", href: "https://fonts.googleapis.com" },
        { rel: "dns-prefetch", href: "https://fonts.gstatic.com" },
        // Preconnect with high priority for faster font loads
        { rel: "preconnect", href: "https://fonts.googleapis.com", importance: "high" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous", importance: "high" },
        // Preload critical font weights for faster rendering
        { rel: "preload", href: "https://fonts.gstatic.com/s/manrope/v15/xn7gYBCvU-DLs5J8FWW0CwzDdYw3UT_SfbAcEeT_qS-l3dJlw9F-KSy9q2zUrvAoOhVpVgxmjKxSC2FGlKkz.woff2", as: "font", type: "font/woff2", crossOrigin: "anonymous" },
        { rel: "preload", href: "https://fonts.gstatic.com/s/sora/v14/xn7gYBCvU-DLs5J8FWW0CwzDdYw3UT_SfbAcEeT_qS-l3dJlw9F-KSy9qmVetvAoOhVpVgxmjKxSC2FGlKkz.woff2", as: "font", type: "font/woff2", crossOrigin: "anonymous" },
        { rel: "preload", href: "https://fonts.gstatic.com/s/materialsymbolsrounded/v153/-ZpMEZVd6bPn-B25SN_sFkxN.woff2", as: "font", type: "font/woff2", crossOrigin: "anonymous" },
        // Load stylesheets with display=swap for optimal font rendering
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Sora:wght@500;600;700;800&display=swap" },
        // Material Symbols with display=block to prevent layout shift
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,500,1,0&display=block" },
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
        <HeadContent />
        <script dangerouslySetInnerHTML={{ __html: BOOT_SCRIPT }} />
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

  return (
    <QueryClientProvider client={queryClient}>
      <RouteProgress />
      <Outlet />
    </QueryClientProvider>
  );
}
