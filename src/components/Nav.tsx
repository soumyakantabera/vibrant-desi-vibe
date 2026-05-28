import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import { Logo } from "./Logo";
import { Icon, type IconName } from "./Icon";
import { BrandIcon } from "./BrandIcon";
import { waLink } from "@/lib/whatsapp";

type NavItem = { to: string; label: string; icon?: IconName; desc?: string };

const MAIN: NavItem[] = [
  { to: "/", label: "Home" },
  { to: "/why-us", label: "Why Us" },
  { to: "/success-stories", label: "Stories" },
  { to: "/founder", label: "Founders" },
  { to: "/blog", label: "Blog" },
];

const ENGLISH_COURSES: NavItem[] = [
  { to: "/course-spoken-english", label: "Basic Spoken English", icon: "mic", desc: "6 months · ₹999/mo" },
  { to: "/course-business-english", label: "Business English", icon: "headset", desc: "3 months · ₹1,199/mo" },
  { to: "/course-interactive-speaking", label: "Interactive Speaking", icon: "headset", desc: "3 months · ₹999/mo" },
  { to: "/course-ielts", label: "IELTS Preparation", icon: "trophy", desc: "3 months · ₹1,999/mo" },
  { to: "/course-interview-prep", label: "Interview Prep", icon: "target", desc: "2 months · ₹1,499/mo" },
  { to: "/course-career-counselling", label: "Career Counselling", icon: "compass", desc: "3 × 60-min · ₹999" },
];

const DATA_COURSES: NavItem[] = [
  { to: "/course-ms-office", label: "MS Office Essentials", icon: "book", desc: "1:1 · ₹999/mo" },
  { to: "/course-master-excel", label: "Master Excel", icon: "chart", desc: "1:1 · ₹1,999/mo" },
  { to: "/course-finance-excel", label: "Finance Excel", icon: "rupee", desc: "1:1 · ₹1,999/mo" },
  { to: "/course-python", label: "Python", icon: "code", desc: "1:1 · ₹1,999/mo" },
  { to: "/course-power-bi", label: "Power BI", icon: "chart", desc: "1:1 · ₹1,999/mo" },
  { to: "/course-prompt-engineering", label: "Prompt Engineering", icon: "rocket", desc: "1:1 · ₹1,199/mo" },
  { to: "/course-ai-builder", label: "Claude API & Agentic AI", icon: "rocket", desc: "1:1 · ₹1,499/mo" },
  { to: "/course-ai-projects", label: "AI Projects", icon: "trophy", desc: "1:1 · ₹1,999/mo" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const { location } = useRouterState();
  const wa = waLink("Hi, I am interested in a free demo. Please guide me.");
  const dropRef = useRef<HTMLDivElement>(null);

  // close on route change & body lock
  useEffect(() => { setOpen(false); setCoursesOpen(false); }, [location.pathname]);
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
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
  const coursesActive = location.pathname.startsWith("/course-") || location.pathname === "/english-career" || location.pathname === "/excel-data";

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/85 backdrop-blur-xl border-b border-border/70 shadow-[0_1px_0_rgba(15,23,42,0.04)]">
        <div className="container-x flex items-center justify-between h-16 lg:h-[72px] gap-3">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0 group" aria-label="Learn With Smile home">
            <span className="transition-transform group-hover:rotate-[-4deg]"><Logo size={38} /></span>
            <span className="font-display font-extrabold text-base md:text-xl text-ink leading-none whitespace-nowrap">
              Learn With <span className="grad-text">Smile</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <NavLinkPill to="/" active={isActive("/")}>Home</NavLinkPill>

            {/* Courses dropdown */}
            <div ref={dropRef} className="relative">
              <button
                onClick={() => setCoursesOpen(v => !v)}
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
                <svg width="12" height="12" viewBox="0 0 12 12" className={`transition ${coursesOpen ? "rotate-180" : ""}`}><path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>

              {coursesOpen && (
                <div
                  onMouseLeave={() => setCoursesOpen(false)}
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[720px] max-w-[92vw]"
                >
                  <div className="rounded-2xl bg-white border border-border shadow-2xl overflow-hidden grid grid-cols-2">
                    <CourseColumn
                      title="English & Career"
                      tone="brand"
                      categoryHref="/english-career"
                      items={ENGLISH_COURSES}
                      onPick={() => setCoursesOpen(false)}
                    />
                    <CourseColumn
                      title="Excel, Data & AI"
                      tone="indigo"
                      categoryHref="/excel-data"
                      items={DATA_COURSES}
                      onPick={() => setCoursesOpen(false)}
                    />
                  </div>
                </div>
              )}
            </div>

            {MAIN.slice(1).map((l) => (
              <NavLinkPill key={l.to} to={l.to} active={isActive(l.to)}>{l.label}</NavLinkPill>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <a href={wa} target="_blank" rel="noopener noreferrer" className="hidden sm:inline-flex btn btn-primary btn-sm shadow-md hover:shadow-lg">
              <Icon name="rocket" size={16}/> <span className="hidden md:inline">Free Demo</span><span className="md:hidden">Demo</span>
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
          <div className="absolute inset-0 bg-ink/60 backdrop-blur-sm animate-in fade-in" onClick={() => setOpen(false)}/>
          <aside
            className="absolute right-0 top-0 h-full w-[92%] max-w-sm bg-cream shadow-2xl flex flex-col overflow-y-auto animate-in slide-in-from-right"
          >
            {/* Header */}
            <div className="sticky top-0 z-10 bg-gradient-to-br from-brand-deep to-brand text-cream px-5 pt-5 pb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Logo size={34}/>
                  <span className="font-display font-extrabold text-lg">Menu</span>
                </div>
                <button onClick={() => setOpen(false)} aria-label="Close menu" className="h-10 w-10 grid place-items-center rounded-full bg-white/15 text-cream hover:bg-white/25 transition">
                  <Icon name="close" />
                </button>
              </div>
              <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-sun w-full justify-center shadow-lg">
                <Icon name="rocket" size={18}/> Book a Free Demo
              </a>
              <p className="mt-2 text-center text-xs text-cream/85">+91 96744 79949 · Replies in minutes</p>
            </div>

            {/* Main links */}
            <div className="px-4 py-4">
              <SectionLabel>Browse</SectionLabel>
              <div className="grid gap-1">
                {MAIN.map((l) => (
                  <MobileLink key={l.to} to={l.to} active={isActive(l.to)} onClick={() => setOpen(false)}>
                    {l.label}
                  </MobileLink>
                ))}
              </div>

              {/* English & Career */}
              <SectionLabel>English & Career</SectionLabel>
              <Link
                to="/english-career"
                onClick={() => setOpen(false)}
                className="block mb-2 px-4 py-2.5 rounded-xl bg-brand-soft text-brand-deep font-display font-semibold text-sm hover:bg-brand-soft/80"
              >
                View all 6 courses →
              </Link>
              <div className="grid gap-1">
                {ENGLISH_COURSES.map((c) => (
                  <MobileCourseLink key={c.to} item={c} active={isActive(c.to)} tone="brand" onClick={() => setOpen(false)}/>
                ))}
              </div>

              {/* Excel & Data */}
              <SectionLabel>Excel, Data & AI</SectionLabel>
              <Link
                to="/excel-data"
                onClick={() => setOpen(false)}
                className="block mb-2 px-4 py-2.5 rounded-xl bg-[#E2E2FB] text-indigo-pop font-display font-semibold text-sm hover:bg-[#D6D6F7]"
              >
                View all 8 courses →
              </Link>
              <div className="grid gap-1 pb-6">
                {DATA_COURSES.map((c) => (
                  <MobileCourseLink key={c.to} item={c} active={isActive(c.to)} tone="indigo" onClick={() => setOpen(false)}/>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="mt-auto p-4 border-t border-border bg-white sticky bottom-0">
              <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-wa w-full justify-center">
                <BrandIcon name="whatsapp" size={18} color="#053b1e"/> Chat on WhatsApp
              </a>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}

function NavLinkPill({ to, active, children }: { to: string; active: boolean; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className={`relative px-3.5 py-2 rounded-full text-sm font-display font-semibold transition whitespace-nowrap ${
        active ? "bg-brand-soft text-brand-deep" : "text-ink/90 hover:text-brand-deep hover:bg-brand-soft/60"
      }`}
    >
      {children}
    </Link>
  );
}

function CourseColumn({
  title, tone, categoryHref, items, onPick,
}: { title: string; tone: "brand" | "indigo"; categoryHref: string; items: NavItem[]; onPick: () => void }) {
  const headBg = tone === "brand" ? "bg-brand-soft text-brand-deep" : "bg-[#E2E2FB] text-indigo-pop";
  const iconBg = tone === "brand" ? "bg-brand-soft text-brand-deep" : "bg-[#E2E2FB] text-indigo-pop";
  return (
    <div className="p-3">
      <Link to={categoryHref} onClick={onPick} className={`flex items-center justify-between px-3 py-2 rounded-xl ${headBg} font-display font-bold text-xs uppercase tracking-wide`}>
        <span>{title}</span>
        <span className="text-[10px] font-bold opacity-80">View all →</span>
      </Link>
      <div className="mt-2 grid gap-0.5">
        {items.map((c) => (
          <Link
            key={c.to}
            to={c.to}
            onClick={onPick}
            className="flex items-start gap-3 px-3 py-2 rounded-lg hover:bg-brand-soft/40 transition group"
          >
            <span className={`h-8 w-8 shrink-0 rounded-lg ${iconBg} grid place-items-center`}>
              {c.icon && <Icon name={c.icon} size={16}/>}
            </span>
            <span className="min-w-0">
              <span className="block font-display font-semibold text-sm text-ink truncate group-hover:text-brand-deep">{c.label}</span>
              {c.desc && <span className="block text-[11px] text-ink/60">{c.desc}</span>}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <div className="mt-5 mb-2 px-2 text-[11px] font-display font-bold uppercase tracking-[0.12em] text-ink/50">{children}</div>;
}

function MobileLink({ to, active, onClick, children }: { to: string; active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-display font-semibold transition ${
        active ? "bg-brand-soft text-brand-deep" : "text-ink hover:bg-brand-soft/60"
      }`}
    >
      <span>{children}</span>
      <Icon name="arrow-right" size={14} className="opacity-40"/>
    </Link>
  );
}

function MobileCourseLink({ item, active, tone, onClick }: { item: NavItem; active: boolean; tone: "brand" | "indigo"; onClick: () => void }) {
  const iconBg = tone === "brand" ? "bg-brand-soft text-brand-deep" : "bg-[#E2E2FB] text-indigo-pop";
  return (
    <Link
      to={item.to}
      onClick={onClick}
      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition ${active ? "bg-brand-soft/70" : "hover:bg-white"}`}
    >
      <span className={`h-9 w-9 shrink-0 rounded-lg ${iconBg} grid place-items-center`}>
        {item.icon && <Icon name={item.icon} size={16}/>}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-display font-semibold text-sm text-ink truncate">{item.label}</span>
        {item.desc && <span className="block text-[11px] text-ink/60">{item.desc}</span>}
      </span>
      <Icon name="arrow-right" size={14} className="opacity-30"/>
    </Link>
  );
}
