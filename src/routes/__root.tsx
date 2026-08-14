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
 */
const BOOT_SCRIPT = `(function(){var d=document,r=d.documentElement,g=["js"];
var a=function(){for(var i=0;i<g.length;i++){if(!r.classList.contains(g[i]))r.classList.add(g[i]);}};a();
if(window.MutationObserver)new MutationObserver(a).observe(r,{attributes:true,attributeFilter:["class"]});
var m=function(e){var t=e.target;if(t&&t.tagName==="IMG"&&t.hasAttribute("data-fade"))t.setAttribute("data-loaded","");};
d.addEventListener("load",m,true);d.addEventListener("error",m,true);
var F="24px 'Material Symbols Rounded'";
var f=function(){if(g.indexOf("fonts-ready")<0)g.push("fonts-ready");a();};
var s=function(){try{if(!d.fonts||!d.fonts.forEach){f();return;}d.fonts.forEach(function(x){if(x.family&&x.family.indexOf("Material Symbols")>=0&&x.status==="loaded")f();});}catch(e){f();}};
try{if(d.fonts&&d.fonts.load){d.fonts.load(F).then(s).catch(s);if(d.fonts.addEventListener)d.fonts.addEventListener("loadingdone",s);}else f();}catch(e){f();}
setTimeout(s,2500);setTimeout(s,6000);})();`;

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
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
        // `display=swap` on the text faces: copy is readable in a fallback
        // face immediately and reflows once, rather than being invisible.
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Sora:wght@500;600;700;800&display=swap" },
        // `display=block` on the icon face: these glyphs are ligatures, so a
        // fallback face would paint their names ("arrow_forward") as text
        // across the page. Better a brief gap in a box that is already the
        // right size.
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
