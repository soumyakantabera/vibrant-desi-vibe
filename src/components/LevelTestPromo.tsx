import { Link } from "@tanstack/react-router";

import { Icon, type IconName } from "@/components/Icon";
import { BoloParrot } from "@/components/mascots/BoloParrot";
import { LEVEL_TEST_LANG_PATHS } from "@/lib/level-test-i18n";
import { tone } from "@/lib/tones";

/**
 * "Not sure where to start?" card after every article and guide, in the same
 * Bolo theme as the test itself: sunny card, Bolo asking in a speech bubble,
 * chunky buttons. Three buttons open the same free test in English, Hindi or
 * Bengali; the result goes to WhatsApp.
 */
const LINKS: {
  to: string;
  label: string;
  lang?: string;
  icon: IconName;
  tone: number;
}[] = [
  { to: LEVEL_TEST_LANG_PATHS.en, label: "Take the test", icon: "target", tone: 0 },
  {
    to: LEVEL_TEST_LANG_PATHS.hi,
    label: "हिंदी में टेस्ट दें",
    lang: "hi-IN",
    icon: "languages",
    tone: 1,
  },
  {
    to: LEVEL_TEST_LANG_PATHS.bn,
    label: "বাংলায় টেস্ট দিন",
    lang: "bn-IN",
    icon: "languages",
    tone: 3,
  },
];

export function LevelTestPromo() {
  return (
    <aside
      aria-labelledby="level-test-promo"
      className="container-x max-w-3xl"
      data-cta-location="level_test_promo"
    >
      <div className="rounded-[2rem] border-2 border-sunshine/50 bg-gradient-to-b from-amber-soft via-white to-slate-soft p-5 shadow-lg md:p-7">
        <div className="flex items-end gap-2">
          <BoloParrot pose="wave" size={84} perch={false} decorative className="shrink-0" />
          <div className="relative mb-3 flex-1 rounded-2xl border-2 border-[#D5E7E4] bg-white px-4 py-3 shadow-sm">
            <span
              aria-hidden="true"
              className="absolute -left-[8px] bottom-4 h-3.5 w-3.5 rotate-45 border-b-2 border-l-2 border-[#D5E7E4] bg-white"
            />
            <h2
              id="level-test-promo"
              className="relative text-lg font-extrabold leading-tight text-ink md:text-xl"
            >
              Not sure where to start?
            </h2>
            <p className="relative mt-1 text-sm text-ink/80">
              Take my free 1-minute speaking level test. 5 taps, your level and the one course that
              fits. Your result goes straight to WhatsApp.
            </p>
          </div>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {LINKS.map((l) => {
            const t = tone(l.tone);
            return (
              <Link
                key={l.to}
                to={l.to}
                lang={l.lang}
                className={`flex min-h-[56px] items-center gap-3 rounded-2xl border-2 border-b-[5px] bg-white px-3 py-2.5 text-sm font-display font-bold text-ink transition-[transform,border-width] active:translate-y-[3px] active:border-b-2 ${t.border}`}
              >
                <span
                  aria-hidden="true"
                  className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl ${t.solid}`}
                >
                  <Icon name={l.icon} size={20} />
                </span>
                <span className="flex-1">{l.label}</span>
                <Icon name="arrow-right" size={16} className={t.text} />
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
}

/**
 * The small see-through level-test button beside the WhatsApp buttons in the
 * hero of the course pages and the courses hub — secondary to WhatsApp.
 */
export function LevelTestButton({ className = "" }: { className?: string }) {
  return (
    <Link
      to={LEVEL_TEST_LANG_PATHS.en}
      className={`btn btn-sm border-2 border-white/55 bg-white/10 text-white hover:bg-white/20 ${className}`}
      data-cta-goal="level_test_open"
    >
      <Icon name="target" size={16} /> Not sure? Level test · 1 min
    </Link>
  );
}
