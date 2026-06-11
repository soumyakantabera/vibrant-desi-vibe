import type { ReactNode } from "react";
import { Icon, type IconName } from "./Icon";
import { BrandIcon } from "./BrandIcon";
import { waLink } from "@/lib/whatsapp";

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
    eyebrowTone === "sun" ? "eyebrow eyebrow-sun"
    : eyebrowTone === "coral" ? "eyebrow eyebrow-coral"
    : eyebrowTone === "indigo" ? "eyebrow eyebrow-indigo"
    : eyebrowTone === "white" ? "eyebrow eyebrow-white"
    : "eyebrow";
  return (
    <div className={`${align === "center" ? "text-center mx-auto" : ""} max-w-3xl ${align === "center" ? "" : ""} mb-10 md:mb-14`}>
      {eyebrow && <span className={ebClass}>{eyebrow}</span>}
      <h2 className={`mt-4 text-3xl md:text-[2.6rem] leading-[1.1] ${invert ? "text-cream" : ""}`}>{title}</h2>
      {subtitle && <p className={`mt-4 text-base md:text-lg ${invert ? "text-white/95" : "text-ink/85"}`}>{subtitle}</p>}
    </div>
  );
}

export function FeatureCard({
  icon, color = "brand", title, children,
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
  return (
    <div className="card-soft h-full flex flex-col">
      <div className={`inline-flex items-center justify-center h-12 w-12 rounded-2xl ${ringMap[color]} mb-4`}>
        <Icon name={icon} size={24}/>
      </div>
      <h3 className="text-lg font-display font-bold text-ink mb-2">{title}</h3>
      <p className="text-sm text-ink/85 leading-relaxed flex-1">{children}</p>
    </div>
  );
}

export function WaButton({
  message, children, variant = "wa", size = "md", className = "",
}: {
  message: string;
  children: ReactNode;
  variant?: "wa" | "primary" | "white" | "sun" | "coral" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const cls = `btn btn-${variant} ${size === "lg" ? "btn-lg" : size === "sm" ? "btn-sm" : ""} ${className}`;
  return (
    <a href={waLink(message)} target="_blank" rel="noopener noreferrer" className={cls}>
      {variant === "wa" && <BrandIcon name="whatsapp" size={size === "sm" ? 16 : 18} color="#053b1e"/>}
      <span>{children}</span>
    </a>
  );
}

export function Stat({ num, label }: { num: string; label: string }) {
  return (
    <div className="text-center">
      <div className="font-display text-4xl md:text-6xl font-extrabold text-sunshine drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">{num}</div>
      <div className="text-sm md:text-base text-cream mt-2 font-bold tracking-wide drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">{label}</div>
    </div>
  );
}


export function MottoBand({ children }: { children: ReactNode }) {
  return (
    <div className="bg-gradient-to-r from-brand via-indigo-pop to-coral py-10 md:py-14">
      <div className="container-x">
        <blockquote className="font-display text-2xl md:text-4xl font-extrabold text-white text-center leading-tight">
          {children}
        </blockquote>
      </div>
    </div>
  );
}
