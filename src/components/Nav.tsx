import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import { Logo } from "./Logo";
import { Icon, type IconName } from "./Icon";
import { BrandIcon } from "./BrandIcon";
import { waLink } from "@/lib/whatsapp";
import { COURSES } from "@/lib/courses";
import {
  COURSE_CATEGORIES,
  type CategoryTone,
  type CourseCategory,
  type CourseSlug,
} from "@/lib/course-categories";

type NavItem = { to: string; label: string; icon?: IconName; desc?: string };
type CoursePath = `/course-${CourseSlug}`;

const MAIN: NavItem[] = [
  { to: "/", label: "Home" },
  { to: "/why-us", label: "Why Us" },
  { to: "/success-stories", label: "Stories" },
  { to: "/founder", label: "Founders" },
  { to: "/blog", label: "Blog" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const { location } = useRouterState();
  const wa = waLink("Hi, I am interested in a free demo. Please guide me.");
  const dropRef = useRef<HTMLDivElement>(null);

  // close on route change & body lock
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

  // close dropdown on outside click
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
        <div className="container-x flex items-center justify-between h-16 lg:h-[72px] gap-3">
          {/* Brand */}
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

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <NavLinkPill to="/" active={isActive("/")}>
              Home
            </NavLinkPill>

            {/* Courses dropdown */}
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
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[760px] max-w-[92vw]"
                >
                  <div className="overflow-hidden rounded-3xl border border-border bg-white shadow-2xl">
                    <div className="flex items-center justify-between gap-4 bg-gradient-to-r from-brand-deep to-brand px-5 py-4 text-cream">
                      <div>
                        <div className="font-display text-base font-extrabold">Courses by Goal</div>
                        <p className="mt-0.5 text-xs text-white/85">
                          Four clear categories · six practical programmes
                        </p>
                      </div>
                      <Link
                        to="/english-career"
                        onClick={() => setCoursesOpen(false)}
                        className="shrink-0 rounded-full bg-white/15 px-3 py-2 text-xs font-display font-bold text-cream transition hover:bg-white/25"
                      >
                        Compare all 6 →
                      </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-2 p-2">
                      {COURSE_CATEGORIES.map((category) => (
                        <CourseCategoryGroup
                          key={category.id}
                          category={category}
                          onPick={() => setCoursesOpen(false)}
                        />
                      ))}
                    </div>
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

          {/* Right side */}
          <div className="flex items-center gap-2">
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex btn btn-wa btn-sm shadow-md hover:shadow-lg"
              data-cta-goal="free_demo"
            >
              <BrandIcon name="whatsapp" size={17} color="#053b1e" />
              <span className="hidden md:inline">₹0 Demo on WhatsApp</span>
              <span className="md:hidden">WhatsApp</span>
            </a>
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden h-10 w-10 grid place-items-center rounded-full bg-white border border-border text-ink hover:bg-brand-soft active:scale-95 transition"
              aria-label="Open menu"
            >
              <Icon name="menu" />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE SHEET */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
          <div
            className="absolute inset-0 bg-ink/60 backdrop-blur-sm animate-in fade-in"
            onClick={() => setOpen(false)}
          />
          <aside className="absolute right-0 top-0 h-full w-[92%] max-w-sm bg-cream shadow-2xl flex flex-col overflow-y-auto animate-in slide-in-from-right">
            {/* Header */}
            <div className="sticky top-0 z-10 bg-gradient-to-br from-brand-deep to-brand text-cream px-5 pt-5 pb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Logo size={34} />
                  <span className="font-display font-extrabold text-lg">Menu</span>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="h-10 w-10 grid place-items-center rounded-full bg-white/15 text-cream hover:bg-white/25 transition"
                >
                  <Icon name="close" />
                </button>
              </div>
              <div className="grid grid-cols-[1.2fr_0.8fr] gap-2" data-cta-location="nav">
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-wa justify-center shadow-lg px-3"
                  data-cta-goal="whatsapp_chat"
                >
                  <BrandIcon name="whatsapp" size={18} color="#053b1e" /> Chat Now
                </a>
                <Link
                  to="/book-free-demo"
                  onClick={() => setOpen(false)}
                  className="btn btn-sun justify-center px-3"
                >
                  <Icon name="calendar" size={17} /> ₹0 Demo
                </Link>
              </div>
              <p className="mt-2 text-center text-xs text-cream/85">
                Message anytime · WhatsApp replies 09:00–12:00 IST
              </p>
            </div>

            {/* Main links */}
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

              {/* Courses by goal */}
              <SectionLabel>Courses by Goal</SectionLabel>
              <Link
                to="/english-career"
                onClick={() => setOpen(false)}
                className="block mb-2 px-4 py-2.5 rounded-xl bg-brand-soft text-brand-deep font-display font-semibold text-sm hover:bg-brand-soft/80"
              >
                View all 6 courses →
              </Link>
              <div className="grid gap-3 pb-6">
                {COURSE_CATEGORIES.map((category) => (
                  <MobileCategoryGroup
                    key={category.id}
                    category={category}
                    currentPath={location.pathname}
                    onPick={() => setOpen(false)}
                  />
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="mt-auto p-4 border-t border-border bg-white sticky bottom-0">
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-wa w-full justify-center"
              >
                <BrandIcon name="whatsapp" size={18} color="#053b1e" /> Chat on WhatsApp
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

const NAV_CATEGORY_TONES: Record<
  CategoryTone,
  { panel: string; icon: string; hover: string; heading: string }
> = {
  brand: {
    panel: "bg-brand-soft/35 border-brand/15",
    icon: "bg-brand-soft text-brand-deep",
    hover: "hover:bg-brand-soft/70",
    heading: "text-brand-deep",
  },
  indigo: {
    panel: "bg-[#F3F1FF] border-indigo-pop/15",
    icon: "bg-[#E2E2FB] text-indigo-pop",
    hover: "hover:bg-[#E2E2FB]/70",
    heading: "text-indigo-pop",
  },
  sun: {
    panel: "bg-sunshine/10 border-sunshine/30",
    icon: "bg-sunshine/25 text-[#6B4A00]",
    hover: "hover:bg-sunshine/20",
    heading: "text-[#6B4A00]",
  },
  coral: {
    panel: "bg-coral/10 border-coral/20",
    icon: "bg-coral/15 text-[#8B321F]",
    hover: "hover:bg-coral/15",
    heading: "text-[#8B321F]",
  },
};

function coursePath(slug: CourseSlug): CoursePath {
  return `/course-${slug}`;
}

function CourseCategoryGroup({
  category,
  onPick,
}: {
  category: CourseCategory;
  onPick: () => void;
}) {
  const tone = NAV_CATEGORY_TONES[category.tone];
  return (
    <section className={`rounded-2xl border p-3 ${tone.panel}`}>
      <Link
        to="/english-career"
        hash={category.id}
        onClick={onPick}
        className="flex items-start gap-2 rounded-xl px-2 py-1.5"
      >
        <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl ${tone.icon}`}>
          <Icon name={category.icon} size={18} />
        </span>
        <span className="min-w-0 flex-1">
          <span className={`block text-sm font-display font-extrabold ${tone.heading}`}>
            {category.title}
          </span>
          <span className="mt-0.5 block text-[11px] leading-snug text-ink/70">
            {category.description}
          </span>
        </span>
      </Link>
      <div className="mt-2 grid gap-1">
        {category.slugs.map((slug) => {
          const course = COURSES[slug];
          return (
            <Link
              key={slug}
              to={coursePath(slug)}
              onClick={onPick}
              className={`flex items-center gap-2 rounded-xl px-2.5 py-2 transition ${tone.hover}`}
            >
              <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-lg ${tone.icon}`}>
                <Icon name={course.icon} size={14} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-xs font-display font-bold text-ink">
                  {course.title}
                </span>
                <span className="block text-[10px] text-ink/65">
                  {course.duration.split(" · ")[0]} · {course.price}
                </span>
              </span>
              <Icon name="arrow-right" size={13} className="opacity-35" />
            </Link>
          );
        })}
      </div>
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-5 mb-2 px-2 text-[11px] font-display font-bold uppercase tracking-[0.12em] text-ink/75">
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
      className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-display font-semibold transition ${
        active ? "bg-brand-soft text-brand-deep" : "text-ink hover:bg-brand-soft/60"
      }`}
    >
      <span>{children}</span>
      <Icon name="arrow-right" size={14} className="opacity-40" />
    </Link>
  );
}

function MobileCategoryGroup({
  category,
  currentPath,
  onPick,
}: {
  category: CourseCategory;
  currentPath: string;
  onPick: () => void;
}) {
  const tone = NAV_CATEGORY_TONES[category.tone];
  return (
    <section className={`rounded-2xl border p-2 ${tone.panel}`}>
      <Link
        to="/english-career"
        hash={category.id}
        onClick={onPick}
        className="flex items-center gap-3 rounded-xl px-2 py-2"
      >
        <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl ${tone.icon}`}>
          <Icon name={category.icon} size={17} />
        </span>
        <span className="min-w-0 flex-1">
          <span className={`block text-sm font-display font-extrabold ${tone.heading}`}>
            {category.title}
          </span>
          <span className="block text-[10px] text-ink/65">
            {category.slugs.length} {category.slugs.length === 1 ? "programme" : "programmes"}
          </span>
        </span>
        <Icon name="arrow-right" size={14} className="opacity-35" />
      </Link>
      <div className="grid gap-1">
        {category.slugs.map((slug) => {
          const course = COURSES[slug];
          const to = coursePath(slug);
          const active = currentPath === to;
          return (
            <Link
              key={slug}
              to={to}
              onClick={onPick}
              className={`flex items-center gap-2 rounded-xl px-2.5 py-2 ${active ? "bg-white shadow-sm" : tone.hover}`}
            >
              <Icon name={course.icon} size={15} className={tone.heading} />
              <span className="min-w-0 flex-1 truncate text-xs font-display font-bold text-ink">
                {course.title}
              </span>
              <span className="text-[10px] font-semibold text-ink/60">{course.price}</span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
