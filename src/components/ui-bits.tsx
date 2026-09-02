import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Icon, type IconName } from "./Icon";
import { BrandIcon } from "./BrandIcon";
import { waLink } from "@/lib/whatsapp";
import { COVERAGE_CITIES, COVERAGE_STATES } from "@/lib/seo";

export function SectionHeader({
  eyebrow,
  eyebrowTone = "default",
  title,
  subtitle,
  align = "center",
  invert,
}: {
  eyebrow?: string;
  eyebrowTone?: "default" | "sun" | "coral" | "indigo" | "white";
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  invert?: boolean;
}) {
  const ebClass =
    eyebrowTone === "sun"
      ? "eyebrow eyebrow-sun"
      : eyebrowTone === "coral"
        ? "eyebrow eyebrow-coral"
        : eyebrowTone === "indigo"
          ? "eyebrow eyebrow-indigo"
          : eyebrowTone === "white"
            ? "eyebrow eyebrow-white"
            : "eyebrow";
  return (
    <div
      className={`${align === "center" ? "text-center mx-auto" : ""} max-w-3xl mb-6 md:mb-8`}
    >
      {eyebrow && <span className={ebClass}>{eyebrow}</span>}
      <h2 className={`mt-3 text-2xl md:text-[2rem] leading-[1.12] ${invert ? "text-cream" : ""}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-sm md:text-base ${invert ? "text-white/95" : "text-ink/85"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function FeatureCard({
  icon,
  color = "brand",
  title,
  children,
}: {
  icon: IconName;
  color?: "brand" | "sunshine" | "coral" | "indigo" | "sage";
  title: string;
  children: ReactNode;
}) {
  const ringMap = {
    brand: "bg-brand-soft text-brand-deep",
    sunshine: "bg-[#FFEFC1] text-[#6B4A00]",
    coral: "bg-[#FFE0DC] text-[#8E2A1E]",
    indigo: "bg-[#E2E2FB] text-[#2E2E8A]",
    sage: "bg-[#E2F2E7] text-brand-deep",
  } as const;
  const cardMap = {
    brand: "border-brand/20 bg-[#F3F8F4]",
    sunshine: "border-sunshine/40 bg-[#FFF8E6]",
    coral: "border-coral/25 bg-[#FFF4F1]",
    indigo: "border-indigo-pop/25 bg-[#F4F4FF]",
    sage: "border-brand/15 bg-[#EEF6F1]",
  } as const;
  const titleMap = {
    brand: "text-brand-deep",
    sunshine: "text-[#6B4A00]",
    coral: "text-[#8E2A1E]",
    indigo: "text-[#2E2E8A]",
    sage: "text-brand-deep",
  } as const;
  return (
    <div
      className={`card-soft flex h-full flex-col ${cardMap[color]} transition hover:-translate-y-1 hover:shadow-lg`}
    >
      <div
        className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl ${ringMap[color]}`}
      >
        <Icon name={icon} size={20} />
      </div>
      <h3 className={`mb-2 font-display text-lg font-bold ${titleMap[color]}`}>{title}</h3>
      <p className="flex-1 text-sm leading-relaxed text-ink/85">{children}</p>
    </div>
  );
}

export const SITE_GUIDES: {
  to:
    | "/best-online-spoken-english-classes-india"
    | "/english-class-fees-india"
    | "/spoken-english-classes-kolkata"
    | "/workplace-english-course-online-india"
    | "/how-long-to-learn-spoken-english"
    | "/english-institute-comparison-india";
  title: string;
  sub: string;
  icon: IconName;
  color: "brand" | "sunshine" | "coral" | "indigo";
}[] = [
  {
    to: "/best-online-spoken-english-classes-india",
    title: "Compare Online Classes",
    sub: "Cambly, British Council, local rooms — who each option actually fits.",
    icon: "globe",
    color: "brand",
  },
  {
    to: "/english-institute-comparison-india",
    title: "Institutes 2026",
    sub: "EngVarta, Cambly, BC, Veta-style, EEC-style vs ₹999/mo max 8.",
    icon: "chart",
    color: "coral",
  },
  {
    to: "/english-class-fees-india",
    title: "Fees in India",
    sub: "From ₹999/mo GST included. What ₹800 vs ₹8,000/month actually buys.",
    icon: "rupee",
    color: "sunshine",
  },
  {
    to: "/how-long-to-learn-spoken-english",
    title: "How Long It Takes",
    sub: "6 months from zero. 3 months workplace. 9–12 for Band 7+. Not 30 days.",
    icon: "clock",
    color: "indigo",
  },
  {
    to: "/spoken-english-classes-kolkata",
    title: "Kolkata & 11 States",
    sub: "Live from Kolkata vs 25–40 student classrooms. Morning, evening, weekend.",
    icon: "users",
    color: "coral",
  },
  {
    to: "/workplace-english-course-online-india",
    title: "Workplace English Guide",
    sub: "Meetings, calls, emails, presentations — ₹1,499/mo, 3 months.",
    icon: "headset",
    color: "indigo",
  },
];

export function GuidesStrip({
  eyebrow = "Guides",
  title = "Read Before You Pay Anyone",
  subtitle = "Fees, institutes, how long it takes, Kolkata rooms — written so you can use them even if you never join us.",
}: {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
}) {
  const tones = {
    brand: {
      card: "border-brand/20 bg-[#F3F8F4]",
      icon: "bg-brand-soft text-brand-deep",
      title: "text-brand-deep",
    },
    sunshine: {
      card: "border-sunshine/40 bg-[#FFF8E6]",
      icon: "bg-[#FFEFC1] text-[#6B4A00]",
      title: "text-[#6B4A00]",
    },
    coral: {
      card: "border-coral/25 bg-[#FFF4F1]",
      icon: "bg-[#FFE0DC] text-[#8E2A1E]",
      title: "text-[#8E2A1E]",
    },
    indigo: {
      card: "border-indigo-pop/25 bg-[#F4F4FF]",
      icon: "bg-[#E2E2FB] text-[#2E2E8A]",
      title: "text-[#2E2E8A]",
    },
  } as const;

  return (
    <section className="section">
      <div className="container-x">
        <SectionHeader eyebrow={eyebrow} title={title} subtitle={subtitle} />
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {SITE_GUIDES.map((g) => {
            const tone = tones[g.color];
            return (
              <Link
                key={g.to}
                to={g.to}
                className={`group flex h-full min-w-0 flex-col rounded-2xl border p-4 transition hover:-translate-y-1 hover:shadow-lg ${tone.card}`}
              >
                <span
                  className={`mb-3 grid h-10 w-10 place-items-center rounded-xl ${tone.icon}`}
                >
                  <Icon name={g.icon} size={18} />
                </span>
                <h3 className={`font-display text-base font-extrabold leading-tight ${tone.title}`}>
                  {g.title}
                </h3>
                <p className="mt-1.5 flex-1 text-sm leading-relaxed text-ink/80">{g.sub}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-display font-bold text-brand-deep">
                  Read guide <Icon name="arrow-right" size={14} />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const CITY_TONES = [
  "border-brand/25 bg-[#F3F8F4] text-brand-deep",
  "border-sunshine/40 bg-[#FFF8E6] text-[#6B4A00]",
  "border-coral/25 bg-[#FFF4F1] text-[#8E2A1E]",
  "border-indigo-pop/25 bg-[#F4F4FF] text-[#2E2E8A]",
] as const;

export function CoverageStrip({
  invert = false,
}: {
  invert?: boolean;
}) {
  const label = invert ? "text-sunshine" : "text-brand-deep";
  const heading = invert ? "text-cream" : "text-ink";
  const body = invert ? "text-white/90" : "text-ink/75";
  return (
    <section className={invert ? "bg-brand-deep py-8 md:py-10" : "bg-[#F7F4EE] py-8 md:py-10"}>
      <div className="container-x">
        <p className={`font-display text-[11px] font-bold uppercase tracking-wider ${label}`}>
          Coverage
        </p>
        <h2
          className={`mt-2 max-w-3xl font-display text-xl font-extrabold leading-tight md:text-2xl ${heading}`}
        >
          Same teacher from Kolkata to Kochi.
        </h2>
        <p className={`mt-2 max-w-2xl text-sm md:text-base ${body}`}>
          The fee does not change with your pincode. Morning, evening and weekend IST — metros,
          towns, and Indians abroad on the same live room.
        </p>
        <p className={`mt-4 font-display text-[11px] font-bold uppercase tracking-wider ${label}`}>
          States
        </p>
        <div className="mt-2 flex flex-wrap gap-2">
          {COVERAGE_STATES.map((state, i) => (
            <span
              key={state}
              className={`inline-flex rounded-full border px-3 py-1.5 font-display text-xs font-bold md:text-sm ${CITY_TONES[i % CITY_TONES.length]}`}
            >
              {state}
            </span>
          ))}
        </div>
        <p className={`mt-4 font-display text-[11px] font-bold uppercase tracking-wider ${label}`}>
          Cities
        </p>
        <div className="mt-2 flex flex-wrap gap-2">
          {COVERAGE_CITIES.map((city, i) => (
            <span
              key={city}
              className={`inline-flex rounded-full border px-3 py-1.5 font-display text-xs font-bold md:text-sm ${CITY_TONES[(i + 1) % CITY_TONES.length]}`}
            >
              {city}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WaButton({
  message,
  children,
  variant = "wa",
  size = "md",
  className = "",
  goal = "whatsapp_click",
}: {
  message: string;
  children: ReactNode;
  variant?: "wa" | "primary" | "white" | "sun" | "coral" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  /** Which CTA fired, so conversions can be attributed to a page position. */
  goal?: string;
}) {
  const cls = `btn btn-${variant} ${size === "lg" ? "btn-lg" : size === "sm" ? "btn-sm" : ""} ${className}`;
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cls}
      data-cta-goal={goal}
    >
      {variant === "wa" && (
        <BrandIcon name="whatsapp" size={size === "sm" ? 16 : 18} color="#053b1e" />
      )}
      <span>{children}</span>
    </a>
  );
}

export function Stat({ num, label }: { num: string; label: string }) {
  return (
    <div className="text-center">
      <div className="font-display text-4xl md:text-6xl font-extrabold text-sunshine drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
        {num}
      </div>
      <div className="text-sm md:text-base text-cream mt-2 font-bold tracking-wide drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
        {label}
      </div>
    </div>
  );
}

export function MottoBand({ children }: { children: ReactNode }) {
  return (
    <div className="bg-gradient-to-r from-brand-deep via-indigo-pop to-[#A53D32] py-8 md:py-10">
      <div className="container-x">
        <blockquote className="font-display text-xl md:text-3xl font-extrabold text-white text-center leading-tight">
          {children}
        </blockquote>
      </div>
    </div>
  );
}
