import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

const KEY = "lws.consent.v1";

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
      window.localStorage.setItem(KEY, JSON.stringify({ at: Date.now(), v: 1 }));
    } catch {
      /* private mode */
    }
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 px-3 pb-[4.75rem] sm:px-4 sm:pb-4 pointer-events-none"
      role="dialog"
      aria-label="Cookies and terms"
    >
      <div className="pointer-events-auto mx-auto flex max-w-3xl items-center gap-3 rounded-xl border border-cream/40 bg-ink/95 px-3 py-2 shadow-xl backdrop-blur-md sm:gap-4 sm:px-4">
        <p className="min-w-0 flex-1 text-[11px] leading-snug text-cream/90">
          We use only what the site needs. Country stays on this device. By continuing you
          accept our{" "}
          <Link to="/privacy" className="font-semibold text-sunshine underline-offset-2 hover:underline">
            Privacy
          </Link>{" "}
          and{" "}
          <Link to="/terms" className="font-semibold text-sunshine underline-offset-2 hover:underline">
            Terms
          </Link>
          .
        </p>
        <button
          type="button"
          onClick={accept}
          className="shrink-0 rounded-full bg-sunshine px-3 py-1 text-[11px] font-display font-extrabold text-ink hover:bg-[#F6C453]"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
