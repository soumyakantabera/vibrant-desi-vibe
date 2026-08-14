import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { PageSkeleton } from "./components/PageSkeleton";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    basepath: import.meta.env.BASE_URL,

    // Start fetching a page's chunk as soon as the reader shows intent
    // (hovering a link, or touching it on a phone). On a slow connection that
    // head start is usually the whole wait: by the time the tap registers, the
    // page is already there.
    defaultPreload: "intent",
    defaultPreloadDelay: 60,

    // If a page is not ready in time, show the skeleton rather than freezing
    // on the old page — but only after 150 ms, so quick navigations stay
    // seamless, and then for at least 400 ms so it cannot flicker.
    defaultPendingComponent: PageSkeleton,
    defaultPendingMs: 150,
    defaultPendingMinMs: 400,

    // Cross-fade between pages where the browser supports view transitions.
    defaultViewTransition: true,
  });

  return router;
};
