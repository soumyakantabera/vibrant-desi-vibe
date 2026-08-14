import { Nav } from "./Nav";

/**
 * Shown in place of a page whose code is still downloading — only after the
 * router has waited ~150 ms, so it never flashes on a quick navigation.
 *
 * It deliberately mirrors the shape every page on this site shares (dark hero
 * band, then a row of cards) so a slow connection reads as "the next page is
 * arriving" rather than as a blank white screen. The nav is real and stays
 * interactive throughout.
 */
export function PageSkeleton() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Nav />
      <main className="flex-1" aria-busy="true" aria-live="polite">
        <span className="sr-only">Loading page…</span>

        {/* Hero band */}
        <section className="bg-brand-deep">
          <div className="container-x py-14 md:py-20 grid lg:grid-cols-[1.3fr_1fr] gap-10 items-center">
            <div className="w-full">
              <span className="skeleton skeleton-on-dark block h-6 w-40 rounded-full" />
              <span className="skeleton skeleton-on-dark block h-9 md:h-12 w-[92%] rounded-xl mt-5" />
              <span className="skeleton skeleton-on-dark block h-9 md:h-12 w-[70%] rounded-xl mt-3" />
              <span className="skeleton skeleton-on-dark block h-5 w-[85%] rounded-lg mt-6" />
              <span className="skeleton skeleton-on-dark block h-5 w-[60%] rounded-lg mt-2" />
              <div className="mt-7 flex flex-wrap gap-3">
                <span className="skeleton skeleton-on-dark block h-12 w-44 rounded-full" />
                <span className="skeleton skeleton-on-dark block h-12 w-44 rounded-full" />
              </div>
            </div>
            <div className="hidden lg:block">
              <span className="skeleton skeleton-on-dark block h-72 w-full rounded-3xl" />
            </div>
          </div>
        </section>

        {/* Card row */}
        <section className="section">
          <div className="container-x">
            <span className="skeleton block h-8 w-64 rounded-xl mx-auto" />
            <span className="skeleton block h-5 w-80 max-w-full rounded-lg mx-auto mt-4" />
            <div className="grid md:grid-cols-3 gap-5 mt-10">
              {[0, 1, 2].map((i) => (
                <div key={i} className="card-soft">
                  <span className="skeleton block h-12 w-12 rounded-2xl" />
                  <span className="skeleton block h-5 w-3/4 rounded-lg mt-4" />
                  <span className="skeleton block h-4 w-full rounded-lg mt-3" />
                  <span className="skeleton block h-4 w-5/6 rounded-lg mt-2" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
