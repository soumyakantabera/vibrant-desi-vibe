import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

const KEY = "lws.consent.v4";

export function CookieBar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      if (!window.localStorage.getItem(KEY)) setOpen(true);
    } catch {
      setOpen(true);
    }
  }, []);

  const accept = () => {
    try {
      window.localStorage.setItem(KEY, JSON.stringify({ at: Date.now(), v: 4, ok: true }));
    } catch {
      /* private mode */
    }
    setOpen(false);
  };

  const reject = () => {
    try {
      window.localStorage.setItem(KEY, JSON.stringify({ at: Date.now(), v: 4, ok: false }));
    } catch {
      /* private mode */
    }
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      className="fixed z-40 left-3 right-3 bottom-[5.25rem] sm:left-4 sm:bottom-5 sm:right-28 md:right-32 pointer-events-none"
      role="dialog"
      aria-labelledby="cookie-title"
      aria-describedby="cookie-copy"
    >
      <div className="pointer-events-auto mr-auto max-w-xl rounded-2xl border border-cream/40 bg-ink/95 p-3.5 shadow-xl backdrop-blur-md sm:p-4">
        <p id="cookie-title" className="font-display text-sm font-extrabold text-cream">
          We use cookies
        </p>
        <p id="cookie-copy" className="mt-1.5 text-[11px] leading-relaxed text-cream/88">
          We use cookies and similar technologies that are necessary to operate this website,
          keep it secure, and remember the choices you make on this device. If you Accept, we
          may also use Google Analytics (or a similar measurement tool) to understand how the
          site is used, so we can improve it. We do not use this to show you advertisements.
          Read our{" "}
          <Link to="/privacy" className="font-semibold text-sunshine underline-offset-2 hover:underline">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link to="/terms" className="font-semibold text-sunshine underline-offset-2 hover:underline">
            Terms of Use
          </Link>
          . Accept: necessary and analytics. Reject: necessary only.
        </p>
        <div className="mt-3 flex flex-wrap items-center justify-end gap-2">
          <button
            type="button"
            onClick={reject}
            className="relative z-10 rounded-full border border-cream/35 px-3.5 py-1.5 text-[11px] font-display font-bold text-cream/90 hover:bg-white/10"
          >
            Reject
          </button>
          <button
            type="button"
            onClick={accept}
            className="relative z-10 rounded-full bg-sunshine px-4 py-1.5 text-[11px] font-display font-extrabold text-ink hover:bg-[#F6C453]"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
