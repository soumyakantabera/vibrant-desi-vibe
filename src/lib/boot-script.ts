/**
 * The boot gate: the few lines that decide when the site is allowed to appear.
 *
 * The rule this file implements is simple to state and fiddly to get right:
 * **the reader never sees a half-built page.** Not text in the wrong typeface
 * that reflows a second later, not icon ligatures spelling "arrow_forward"
 * across a card, not an unstyled column of links while the CSS is in flight.
 * The page stays behind a plain veil until the things that decide how it looks
 * are actually in place, and then it fades in, finished. The veil is bare on
 * purpose — no logo, no spinner. Something to look at while waiting only draws
 * attention to the wait.
 *
 * What it waits for
 * -----------------
 *   css    the app stylesheet has applied (detected through the `--app-css`
 *          sentinel it defines, so this is a fact rather than a guess)
 *   fonts  Manrope and Sora — they set the page's shape. Material Symbols
 *          is self-hosted in the same stylesheet (~8 KB); icons un-hide
 *          when that face lands, but the veil does not wait on it.
 *   media  every image marked `data-boot-hold` — the hero already in the
 *          prerendered HTML — has finished decoding
 *
 * It does **not** wait for React. The prerendered markup is the page.
 * Hydration can finish after the first paint.
 *
 * What it will not do
 * -------------------
 * Hold the page hostage. Three independent escapes guarantee the site shows
 * up no matter what breaks:
 *
 *   1. a hard deadline (`MAX_HOLD`) reveals the page whether or not the
 *      signals arrived — a dead CDN costs a font, never the site;
 *   2. a much shorter deadline on save-data and 2G connections, where waiting
 *      for webfonts is a bad trade for the reader;
 *   3. a pure-CSS failsafe in BOOT_CSS that fades the veil out at 8s even if
 *      this script never runs past its first statement.
 *
 * And every rule is scoped to `html.js`, which only exists once this script
 * has run — so with JavaScript off, or the bundle blocked, the prerendered
 * HTML is shown immediately and in full.
 *
 * Why it is a string
 * ------------------
 * It has to be inline in the document head and running before the first
 * paint, long before any bundle arrives — that is the whole point of it. It
 * lives here, once, and is injected into both entry points:
 * `vite/boot-script-plugin.ts` writes it into index.html at build time, and
 * `src/routes/__root.tsx` writes it into the server-rendered shell. Editing
 * this file updates both.
 */

/**
 * Strip the comments and indentation out of the code below before it is
 * inlined. This ships in the head of all 14 prerendered pages, so the
 * explanation is worth several kilobytes here and nothing at all there.
 *
 * Deliberately blunt: whole-line `//` comments only (never a trailing one,
 * which could be inside a string or a regex), and line breaks are kept, so
 * automatic semicolon insertion cannot change what the code means.
 */
function compactJs(src: string): string {
  return src
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line !== "" && !line.startsWith("//"))
    .join("\n");
}

/** The same for the CSS: comments out, whitespace collapsed, nothing moved. */
function compactCss(src: string): string {
  return src
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/\s+/g, " ")
    .replace(/\s*([{};,])\s*/g, "$1")
    .trim();
}

/**
 * Every Material Symbols glyph the site renders.
 *
 * Must stay in step with `MAP` in `src/components/Icon.tsx` and with the
 * self-hosted file `src/assets/fonts/material-symbols-rounded.woff2`.
 * Regenerating that subset: Google Fonts CSS2 with these `icon_names`.
 * An icon missing from the subset paints its ligature text ("arrow_forward")
 * instead of a glyph — the CSS clip on `.material-symbols-rounded` still
 * holds the box, so the page does not shove sideways.
 */
export const ICON_NAMES = [
  "ads_click",
  "arrow_forward",
  "auto_awesome",
  "bar_chart",
  "calendar_month",
  "call",
  "chat",
  "check_circle",
  "close",
  "code",
  "currency_rupee",
  "emoji_events",
  "explore",
  "extension",
  "favorite",
  "format_quote",
  "groups",
  "headset_mic",
  "lightbulb",
  "mail",
  "menu",
  "menu_book",
  "mic",
  "person",
  "photo_camera",
  "play_circle",
  "public",
  "rocket_launch",
  "schedule",
  "sentiment_satisfied",
  "smart_display",
  "sports_esports",
  "star",
  "thumb_up",
  "trending_up",
  "verified",
  "work",
];

/**
 * Icon CSS used to be fetched from fonts.googleapis.com. The subset is now
 * self-hosted and declared in `src/styles.css`, so the gate injects nothing.
 * Kept as an empty list so the noscript slot in `__root.tsx` stays valid.
 */
export const FONT_CSS: string[] = [];

/** Milliseconds before the page is revealed regardless of what is missing. */
const MAX_HOLD = 3000;
/** The same, on save-data or 2G — a slow link should not wait on webfonts. */
const MAX_HOLD_SLOW = 700;
/** Length of the reveal cross-fade; the veil is removed after it. */
const FADE_MS = 380;

const BOOT_SCRIPT_SOURCE = `(function () {
  var d = document, root = d.documentElement, w = window;
  if (w.__lwsBoot) return; // index.html and the SSR shell both carry this

  // Class flags. React treats <html> as an element it owns and drops classes
  // it did not render, so rather than setting these once, re-apply them
  // whenever something clears them. The observer runs before the next paint,
  // so a flag is never missing on screen.
  var flags = ["js", "booting"];
  var apply = function () {
    for (var i = 0; i < flags.length; i++) {
      if (!root.classList.contains(flags[i])) root.classList.add(flags[i]);
    }
  };
  var raise = function (n) { if (flags.indexOf(n) < 0) flags.push(n); apply(); };
  var drop = function (n) {
    var i = flags.indexOf(n);
    if (i >= 0) flags.splice(i, 1);
    root.classList.remove(n);
  };
  apply();
  if (w.MutationObserver) {
    new MutationObserver(apply).observe(root, { attributes: true, attributeFilter: ["class"] });
  }

  var t0 = Date.now(), done = false;
  var need = { css: false, fonts: false, media: false };

  // ---- reveal ------------------------------------------------------------
  var reveal = function () {
    if (done) return;
    done = true;
    raise("app-ready");            // fades the veil out, fades the page in
    setTimeout(function () { drop("booting"); }, ${FADE_MS});
  };

  // The escape hatch goes in first, before anything below can throw.
  var slow = false;
  try {
    var c = w.navigator && (w.navigator.connection || w.navigator.mozConnection);
    slow = !!c && (c.saveData === true || /(^|-)2g$/.test(c.effectiveType || ""));
  } catch (e) {}
  setTimeout(reveal, slow ? ${MAX_HOLD_SLOW} : ${MAX_HOLD});

  // Icon face is self-hosted in the app stylesheet. No third-party inject.
  try {
    var hrefs = ${JSON.stringify(FONT_CSS)};
    for (var n = 0; n < hrefs.length; n++) {
      var link = d.createElement("link");
      link.rel = "stylesheet";
      link.href = hrefs[n];
      link.setAttribute("data-boot-font", "");
      (d.head || root).appendChild(link);
    }
  } catch (e) {}

  var mark = function (k) {
    need[k] = true;
    if (need.css && need.fonts && need.media) reveal();
  };

  // ---- stylesheet --------------------------------------------------------
  // src/styles.css sets --app-css: 1. Reading it back is the one honest way
  // to know the stylesheet is applied rather than merely requested.
  var cssReady = function () {
    try { return getComputedStyle(root).getPropertyValue("--app-css").trim() === "1"; }
    catch (e) { return true; }
  };

  // ---- fonts -------------------------------------------------------------
  // fonts.check() is no use here: with the stylesheet missing it happily
  // reports the fallback face as ready. Ask the font set itself whether a
  // matching face exists and has finished loading.
  var face = function (family) {
    var found = false;
    d.fonts.forEach(function (f) {
      if (f.family && f.family.indexOf(family) >= 0 && f.status === "loaded") found = true;
    });
    return found;
  };
  // Ask for the faces by name rather than waiting for the browser to discover
  // them through layout. Repeated on every tick on purpose: this script runs
  // before the font stylesheet has been parsed — it has to, or it would be
  // waiting on that stylesheet itself — so the first few calls have no
  // @font-face to match and do nothing at all. The call is idempotent; once
  // the rules exist, one of them starts the download.
  var ask = function () {
    try {
      d.fonts.load("600 1rem Manrope");
      d.fonts.load("700 1rem Sora");
      d.fonts.load("24px 'Material Symbols Rounded'");
    } catch (e) {}
  };
  var fontsReady = function () {
    // No Font Loading API: nothing to wait for and nothing to check, so let
    // the icons through rather than hiding them forever.
    if (!d.fonts || !d.fonts.forEach || !d.fonts.load) { raise("fonts-ready"); return true; }
    try {
      // Icons stay visibility:hidden until this class (see styles.css).
      // The page veil does not wait on them.
      if (face("Material Symbols")) raise("fonts-ready");
      if (face("Manrope") && face("Sora")) return true;
      ask();
      return false;
    } catch (e) { return true; }
  };

  // ---- images ------------------------------------------------------------
  // Only the hero of the page being opened, marked by <SmartImage priority>.
  // Everything below the fold stays lazy and is none of the gate's business.
  var mediaReady = function () {
    var imgs = d.querySelectorAll("img[data-boot-hold]");
    if (!imgs.length) return true;
    for (var i = 0; i < imgs.length; i++) if (!imgs[i].complete) return false;
    return true;
  };

  // ---- the tick ----------------------------------------------------------
  // One cheap poll drives css, text fonts and the hero.
  var tick = function () {
    if (!need.css && cssReady()) mark("css");
    if (!need.fonts && fontsReady()) mark("fonts");
    if (!need.media && mediaReady()) mark("media");
    // Keep watching after reveal so a late Material Symbols face can un-hide
    // icons. Stop at 10s.
    if (done && Date.now() - t0 > 10000) clearInterval(timer);
  };
  var timer = setInterval(tick, 80);
  try {
    if (d.fonts && d.fonts.addEventListener) d.fonts.addEventListener("loadingdone", tick);
  } catch (e) {}

  // ---- photo fade-in -----------------------------------------------------
  // 'load' does not bubble, so listen in the capture phase — and because this
  // is inline it works from the first byte, not from whenever React boots.
  var painted = function (e) {
    var t = e.target;
    if (!t || t.tagName !== "IMG") return;
    if (t.hasAttribute("data-fade")) t.setAttribute("data-loaded", "");
    tick();
  };
  d.addEventListener("load", painted, true);
  d.addEventListener("error", painted, true);

  // ---- the app's way in --------------------------------------------------
  w.__lwsBoot = {
    ready: function () { tick(); },
    reveal: reveal,
    signals: need
  };
})();`;

export const BOOT_SCRIPT = compactJs(BOOT_SCRIPT_SOURCE);

/**
 * The handful of rules the veil needs before the stylesheet exists.
 *
 * Inlined next to BOOT_SCRIPT in both entry points, for the same reason:
 * covering the page is only useful if it happens on the first paint. Nothing
 * here depends on a custom property or a Tailwind layer — the app stylesheet
 * is exactly what it is waiting for.
 */
const BOOT_CSS_SOURCE = `html { background: #fff; }
body { margin: 0; }

/* The page itself, held back until the gate opens. */
html.js.booting body { opacity: 0; animation: lws-failsafe-in 0s linear 8s forwards; }
html.js.booting.app-ready body { opacity: 1; transition: opacity ${FADE_MS}ms ease; }

/* The veil. */
html.js.booting::before {
  content: "";
  position: fixed;
  inset: 0;
  background: #fff;
  z-index: 2147483000;
  opacity: 1;
  transition: opacity ${FADE_MS}ms ease;
  animation: lws-failsafe-out 0s linear 8s forwards;
}
/* Lifted on reveal, in step with the page fading in underneath it. */
html.js.booting.app-ready::before { opacity: 0; pointer-events: none; }

/* Last line of defence: if the script above dies after setting .booting, CSS
   alone still hands the reader the page. */
@keyframes lws-failsafe-out { to { opacity: 0; visibility: hidden; } }
@keyframes lws-failsafe-in { to { opacity: 1; } }

@media print {
  html.js.booting body { opacity: 1; }
  html.js.booting::before { display: none; }
}`;

export const BOOT_CSS = compactCss(BOOT_CSS_SOURCE);
