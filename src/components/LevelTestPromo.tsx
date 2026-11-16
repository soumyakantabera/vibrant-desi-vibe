import { Link } from "@tanstack/react-router";

import { Icon } from "@/components/Icon";
import { LEVEL_TEST_LANG_PATHS } from "@/lib/level-test-i18n";

/**
 * The one place the level test is offered on the site itself: a small
 * see-through button beside the WhatsApp buttons on course pages and the courses hub.
 * Everywhere else the only call to action is one tap to WhatsApp; the test
 * pages themselves are kept for search and AI answers (sitemap, llms files).
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
