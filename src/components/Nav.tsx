import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import { Logo } from "./Logo";
import { Icon, type IconName } from "./Icon";
import { BrandIcon } from "./BrandIcon";
import { CountrySelect } from "./CountrySelect";
import { CHAT_CTA, waLink } from "@/lib/whatsapp";
import { chatWaMessage } from "@/lib/enrolment-wa";
import { useCountry } from "@/lib/country-context";
import { formatFee, type CourseSlug } from "@/lib/pricing";

type NavItem = { to: string; label: string; icon?: IconName; desc?: string };

const MAIN: NavItem[] = [
  { to: "/", label: "Home" },
  { to: "/why-us", label: "Why Us" },
  { to: "/guides", label: "Guides" },
  { to: "/success-stories", label: "Stories" },
  { to: "/founder", label: "Founder" },
  { to: "/blog", label: "Blog" },
];

const NAV_COURSES: { slug: CourseSlug; to: string; icon: IconName }[] = [
  { slug: "spoken-english", to: "/course-spoken-english", icon: "mic" },
  { slug: "interactive-speaking", to: "/course-interactive-speaking", icon: "headset" },
  { slug: "teen-english", to: "/course-teen-english", icon: "mic" },
  { slug: "business-english", to: "/course-business-english", icon: "headset" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const { location } = useRouterState();
  const { choice, displayMarket } = useCountry();
  const chat = waLink(chatWaMessage(choice));
  const dropRef = useRef<HTMLDivElement>(null);
  const englishCourses: NavItem[] = NAV_COURSES.map((c) => ({
    to: c.to,
    label: formatFee(c.slug, displayMarket).title,
    icon: c.icon,
    desc: formatFee(c.slug, displayMarket).label,
  }));

  useEffect(() => {
    setOpen(false);
    setCoursesOpen(false);
  }, [location.pathname]);
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!coursesOpen) return;
    const onClick = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) setCoursesOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [coursesOpen]);

  const isActive = (to: string) => location.pathname === to;
  const coursesActive =
    location.pathname.startsWith("/course-") || location.pathname === "/english-career";

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/85 backdrop-blur-xl border-b border-border/70 shadow-[0_1px_0_rgba(15,23,42,0.04)]">
        <Link
          to="/english-career"
          className="block bg-gradient-to-r from-[#0E7C5A] to-[#0B3D2E] text-center text-[12px] sm:text-sm font-display font-extrabold tracking-tight py-2 px-4 leading-snug hover:brightness-110 transition"
        >
          <span className="inline-flex items-center justify-center gap-1.5 text-balance text-[#FFF8F0]">
            <span>
              Now enrolling pan-India and globally — India fees in INR, other countries in USD
            </span>
          </span>
        </Link>
        <div className="container-x flex items-center justify-between h-16 lg:h-[72px] gap-3">
          <Link
            to="/"
            className="flex items-center gap-2.5 shrink-0 group"
            aria-label="Learn With Smile home"
          >
            <span className="transition-transform group-hover:rotate-[-4deg]">
              <Logo size={38} />
            </span>
            <span className="font-display font-extrabold text-base md:text-xl text-ink leading-none whitespace-nowrap">
              Learn With <span className="grad-text">Smile</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            <NavLinkPill to="/" active={isActive("/")}>
              Home
            </NavLinkPill>

            <div ref={dropRef} className="relative">
              <button
                onClick={() => setCoursesOpen((v) => !v)}
                onMouseEnter={() => setCoursesOpen(true)}
                aria-expanded={coursesOpen}
                aria-haspopup="true"
                className={`px-3.5 py-2 rounded-full text-sm font-display font-semibold transition inline-flex items-center gap-1.5 ${
                  coursesActive || coursesOpen
                    ? "bg-brand-soft text-brand-deep"
                    : "text-ink/90 hover:text-brand-deep hover:bg-brand-soft/60"
                }`}
              >
                Courses
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  className={`transition ${coursesOpen ? "rotate-180" : ""}`}
                >
                  <path
                    d="M2 4l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {coursesOpen && (
                <div
                  onMouseLeave={() => setCoursesOpen(false)}
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[390px] max-w-[92vw]"
                >
                  <div className="rounded-2xl bg-white border border-border shadow-2xl overflow-hidden grid grid-cols-1">
                    <CourseColumn
                      title="Courses by Goal"
                      tone="brand"
                      categoryHref="/english-career"
                      items={englishCourses}
                      onPick={() => setCoursesOpen(false)}
                    />
                  </div>
                </div>
              )}
            </div>

            {MAIN.slice(1).map((l) => (
              <NavLinkPill key={l.to} to={l.to} active={isActive(l.to)}>
                {l.label}
              </NavLinkPill>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden xl:block">
              <CountrySelect tone="light" id="country-region-nav" />
            </div>
            <a
              href={chat}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex btn btn-wa btn-sm shadow-md hover:shadow-lg"
              data-cta-goal="whatsapp_chat"
            >
              <BrandIcon name="whatsapp" size={17} color="#053b1e" />
              <span className="hidden md:inline">{CHAT_CTA}</span>
              <span className="md:hidden">WhatsApp</span>
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="lg:hidden h-11 w-11 grid place-items-center rounded-full bg-white border border-border text-ink hover:bg-brand-soft active:scale-95 transition"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <Icon name="menu" />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-labelledby="mobile-menu-title">
          <div
            className="absolute inset-0 bg-ink/60 backdrop-blur-sm animate-in fade-in"
            onClick={() => setOpen(false)}
          />
          <aside id="mobile-menu" className="absolute right-0 top-0 h-full w-[92%] max-w-sm bg-cream shadow-2xl flex flex-col overflow-y-auto animate-in slide-in-from-right">
            <div className="sticky top-0 z-10 bg-gradient-to-br from-brand-deep to-brand text-cream px-5 pt-5 pb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Logo size={34} />
                  <span id="mobile-menu-title" className="font-display font-extrabold text-lg">Menu</span>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="h-11 w-11 grid place-items-center rounded-full bg-white/15 text-cream hover:bg-white/25 transition"
                >
                  <Icon name="close" />
                </button>
              </div>
              <div className="grid gap-2" data-cta-location="nav">
                <a
                  href={chat}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-wa justify-center px-3"
                  data-cta-goal="whatsapp_chat"
                >
                  <BrandIcon name="whatsapp" size={18} color="#053b1e" /> {CHAT_CTA}
                </a>
              </div>
              <p className="mt-2 text-center text-xs text-cream/85">
                Message anytime · WhatsApp replies 09:00–12:00 IST
              </p>
            </div>

            <div className="px-4 py-4">
              <SectionLabel>Browse</SectionLabel>
              <div className="grid gap-1">
                {MAIN.map((l) => (
                  <MobileLink
                    key={l.to}
                    to={l.to}
                    active={isActive(l.to)}
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </MobileLink>
                ))}
              </div>

              <SectionLabel>All Courses</SectionLabel>
              <Link
                to="/english-career"
                onClick={() => setOpen(false)}
                className="block mb-2 px-4 py-2.5 rounded-xl bg-brand-soft text-brand-deep font-display font-semibold text-sm hover:bg-brand-soft/80"
              >
                View all courses →
              </Link>
              <div className="grid gap-1 pb-4">
                {englishCourses.map((c) => (
                  <MobileCourseLink
                    key={c.to}
                    item={c}
                    active={isActive(c.to)}
                    tone="brand"
                    onClick={() => setOpen(false)}
                  />
                ))}
              </div>
              <div className="pb-6">
                <CountrySelect tone="light" id="country-region-mobile" />
              </div>
            </div>

            <div className="mt-auto p-4 border-t border-border bg-white sticky bottom-0">
              <a
                href={chat}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-wa w-full justify-center"
                data-cta-goal="whatsapp_chat"
              >
                <BrandIcon name="whatsapp" size={18} color="#053b1e" /> {CHAT_CTA}
              </a>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}

function NavLinkPill({
  to,
  active,
  children,
}: {
  to: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      to={to}
      className={`relative px-3.5 py-2 rounded-full text-sm font-display font-semibold transition whitespace-nowrap ${
        active
          ? "bg-brand-soft text-brand-deep"
          : "text-ink/90 hover:text-brand-deep hover:bg-brand-soft/60"
      }`}
    >
      {children}
    </Link>
  );
}

function CourseColumn({
  title,
  tone,
  categoryHref,
  items,
  onPick,
}: {
  title: string;
  tone: "brand" | "indigo";
  categoryHref: string;
  items: NavItem[];
  onPick: () => void;
}) {
  const headBg =
    tone === "brand" ? "bg-brand-soft text-brand-deep" : "bg-[#E2E2FB] text-indigo-pop";
  const iconBg =
    tone === "brand" ? "bg-brand-soft text-brand-deep" : "bg-[#E2E2FB] text-indigo-pop";
  return (
    <div className="p-3">
      <Link
        to={categoryHref}
        onClick={onPick}
        className={`flex items-center justify-between px-3 py-2 rounded-xl ${headBg} font-display font-bold text-xs uppercase tracking-wide`}
      >
        <span>{title}</span>
        <span>View all →</span>
      </Link>
      <ul className="mt-1">
        {items.map((item) => (
          <li key={item.to}>
            <Link
              to={item.to}
              onClick={onPick}
              className="flex items-start gap-3 px-3 py-2.5 rounded-xl hover:bg-brand-soft/60"
            >
              {item.icon && (
                <span className={`mt-0.5 grid h-8 w-8 place-items-center rounded-lg ${iconBg}`}>
                  <Icon name={item.icon} size={16} />
                </span>
              )}
              <span>
                <span className="block font-display font-bold text-sm text-ink">{item.label}</span>
                {item.desc && <span className="block text-xs text-ink/70">{item.desc}</span>}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-4 mb-2 px-1 text-[11px] font-display font-bold uppercase tracking-wider text-ink/50">
      {children}
    </div>
  );
}

function MobileLink({
  to,
  active,
  onClick,
  children,
}: {
  to: string;
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`block px-4 py-3 rounded-xl font-display font-semibold ${
        active ? "bg-brand-soft text-brand-deep" : "text-ink hover:bg-white"
      }`}
    >
      {children}
    </Link>
  );
}

function MobileCourseLink({
  item,
  active,
  tone,
  onClick,
}: {
  item: NavItem;
  active: boolean;
  tone: "brand";
  onClick: () => void;
}) {
  return (
    <Link
      to={item.to}
      onClick={onClick}
      className={`flex items-start gap-3 px-3 py-3 rounded-xl ${
        active ? "bg-brand-soft" : "hover:bg-white"
      }`}
    >
      {item.icon && (
        <span className="mt-0.5 grid h-8 w-8 place-items-center rounded-lg bg-brand-soft text-brand-deep">
          <Icon name={item.icon} size={16} />
        </span>
      )}
      <span>
        <span className="block font-display font-bold text-sm text-ink">{item.label}</span>
        {item.desc && <span className="block text-xs text-ink/70">{item.desc}</span>}
      </span>
    </Link>
  );
}
