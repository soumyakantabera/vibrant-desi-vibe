import { Link } from "@tanstack/react-router";

import { Icon } from "@/components/Icon";
import { LEVEL_TEST_LANG_PATHS } from "@/lib/level-test-i18n";

/**
 * "Not sure where to start?" card, shown after every article and guide. Three
 * buttons open the same free test in English, Hindi or Bengali; the result goes
 * to WhatsApp, so this is a lead path for readers who are not ready to chat.
 */
export function LevelTestPromo() {
  return (
    <aside
      aria-labelledby="level-test-promo"
      className="container-x max-w-3xl"
      data-cta-location="level_test_promo"
    >
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-tile-blue via-tile-violet to-coral-deep p-6 text-white shadow-lg md:p-8">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-8 -top-10 h-36 w-36 rounded-full bg-sunshine/30"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-12 left-10 h-28 w-28 rounded-full bg-white/10"
        />
        <div className="relative flex items-start gap-4">
          <span
            aria-hidden="true"
            className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-sunshine text-ink shadow"
          >
            <Icon name="target" size={30} />
          </span>
          <div>
            <h2 id="level-test-promo" className="text-2xl leading-tight text-white md:text-3xl">
              Not sure where to start?
            </h2>
            <p className="mt-2 text-white/95">
              Take the free 1-minute English speaking level test. 5 taps, your level and the one
              course that fits — and your result goes straight to WhatsApp.
            </p>
          </div>
        </div>
        <div className="relative mt-6 grid gap-2.5 sm:grid-cols-3">
          <Link
            to={LEVEL_TEST_LANG_PATHS.en}
            className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-2xl bg-sunshine px-4 font-display font-bold text-ink shadow transition hover:brightness-105"
          >
            <Icon name="target" size={18} /> Take the test
          </Link>
          <Link
            to={LEVEL_TEST_LANG_PATHS.hi}
            lang="hi-IN"
            className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-2xl bg-white px-4 font-display font-bold text-tile-blue shadow transition hover:bg-white/90"
          >
            हिंदी में टेस्ट दें
          </Link>
          <Link
            to={LEVEL_TEST_LANG_PATHS.bn}
            lang="bn-IN"
            className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-2xl bg-white px-4 font-display font-bold text-coral-deep shadow transition hover:bg-white/90"
          >
            বাংলায় টেস্ট দিন
          </Link>
        </div>
      </div>
    </aside>
  );
}
