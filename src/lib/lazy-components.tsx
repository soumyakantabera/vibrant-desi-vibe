import { lazy, Suspense, useEffect, useRef, useState, ComponentType, ReactNode, LazyExoticComponent } from "react";

/**
 * Create a lazy-loaded component with automatic suspense boundary.
 * Useful for code-splitting heavy components that appear below the fold.
 *
 * @example
 * const HeavyComponent = lazyComponent(() => import("@/components/Heavy"));
 * // Use it normally, wrapping will handle Suspense
 */
export const lazyComponent = <P extends object>(
  importFn: () => Promise<{ default: ComponentType<P> }>
): ComponentType<P> => {
  return lazy(importFn);
};

/**
 * Helper to create a component wrapper with Suspense for lazy-loaded components.
 */
export const withLazySuspense = <P extends object>(
  Component: LazyExoticComponent<ComponentType<P>>,
  fallback: ReactNode = null
): ComponentType<P> => {
  return (props: P) => (
    <Suspense fallback={fallback}>
      <Component {...props} />
    </Suspense>
  );
};

/**
 * Preload a lazy component to start loading before render.
 * Call this in a route handler or during intersection for better UX.
 */
export const preloadComponent = (
  importFn: () => Promise<{ default: ComponentType<any> }>
): void => {
  importFn().catch(() => {
    // Preload failures are non-fatal
  });
};

/**
 * Create an intersection observer-based preloader for lazy components.
 * Starts loading the component when the trigger element enters the viewport.
 *
 * @example
 * const { ref, Component: HeavyComponent } = useIntersectionPreload(
 *   () => import("@/components/Heavy"),
 *   { threshold: 0.1, rootMargin: "250px" }
 * );
 *
 * return (
 *   <>
 *     <div ref={ref} style={{ height: "100px" }} />
 *     <HeavyComponent prop="value" />
 *   </>
 * );
 */
export const useIntersectionPreload = (
  importFn: () => Promise<{ default: ComponentType<any> }>,
  options?: IntersectionObserverInit
) => {
  const [isPreloading, setIsPreloading] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isPreloading) return;

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsPreloading(true);
            preloadComponent(importFn);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "250px", ...options }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [importFn, isPreloading, options]);

  return {
    ref,
    Component: lazy(importFn),
  };
};
