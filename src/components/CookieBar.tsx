import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

const KEY = "lws.consent.v2";

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
      window.localStorage.setItem(KEY, JSON.stringify({ at: Date.now(), v: 1, ok: true }));
    } catch {
      /* private mode */
    }
    setOpen(false);
  };

  const reject = () => {
    try {
      window.localStorage.setItem(KEY, JSON.stringify({ at: Date.now(), v: 1, ok: false }));
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
      aria-label="Cookies and terms"
    >
      <div className="pointer-events-auto mr-auto flex max-w-lg items-center gap-3 rounded-xl border border-cream/40 bg-ink/95 px-3 py-2 shadow-xl backdrop-blur-md">
        <p className="min-w-0 flex-1 text-[11px] leading-snug text-cream/90">
          We use only what this site needs to run.{" "}
          <Link to="/privacy" className="font-semibold text-sunshine underline-offset-2 hover:underline">
            Privacy
          </Link>
          {" · "}
          <Link to="/terms" className="font-semibold text-sunshine underline-offset-2 hover:underline">
            Terms
          </Link>
        </p>
        <div className="flex shrink-0 items-center gap-1.5">
          <button
            type="button"
            onClick={reject}
            className="relative z-10 rounded-full border border-cream/35 px-3 py-1.5 text-[11px] font-display font-bold text-cream/90 hover:bg-white/10"
          >
            Reject
          </button>
          <button
            type="button"
            onClick={accept}
            className="relative z-10 rounded-full bg-sunshine px-3.5 py-1.5 text-[11px] font-display font-extrabold text-ink hover:bg-[#F6C453]"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
