import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Icon } from "./Icon";
import { BrandIcon } from "./BrandIcon";
import { SmartImage } from "./SmartImage";
import { PaymentTrust } from "./PaymentTrust";
import { CountrySelect } from "./CountrySelect";
import { CALL_LINK, WHATSAPP_DISPLAY, waLink } from "@/lib/whatsapp";
import { IMG } from "@/lib/images";
import { CONTACT } from "@/lib/seo";
import { FOOTER_GUIDES } from "@/lib/guides";
import { FOOTER_CITIES } from "@/lib/cities";
import { useCountry } from "@/lib/country-context";
import { PRICING_NOTICE, startingFee } from "@/lib/pricing";
import { chatWaMessage } from "@/lib/enrolment-wa";

const TRACKS = [{ to: "/english-career", label: "English & Career Hub" }];

const ENGLISH = [
  { to: "/course-spoken-english", label: "Spoken English" },
  { to: "/course-interactive-speaking", label: "Interactive Speaking" },
  { to: "/course-teen-english", label: "Spoken English for Teens" },
  { to: "/course-business-english", label: "Workplace English" },
];

const COMPANY = [
  { to: "/about-us", label: "About Us" },
  { to: "/why-us", label: "Why Us" },
  { to: "/founder", label: "Founder" },
  { to: "/success-stories", label: "Success Stories" },
  { to: "/blog", label: "Blog" },
  { to: "/book-free-demo", label: "Book a Free Demo" },
];

const GUIDES = FOOTER_GUIDES;
const IMG_DEFAULT = IMG.groupClass;

export function Footer({ image }: { image?: string }) {
  const { choice, displayMarket } = useCountry();
  const start = startingFee(displayMarket);
  const wa = waLink(chatWaMessage(choice));
  return (
    <footer className="bg-ink text-cream pt-16 pb-24 sm:pb-8 mt-10" data-cta-location="footer">
      <div className="container-x">
        <div className="grid lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <Logo size={42} />
              <div>
                <div className="font-display font-extrabold text-xl">
                  Learn With <span className="text-sunshine">Smile</span>
                </div>
                <div className="text-xs text-white/85">7 Years · Kolkata · Pan-India · Global</div>
              </div>
            </div>
            <p className="text-white/90 text-sm leading-relaxed mb-5">
              500+ learners. 7 years. A teacher who knows your name. Small live batches from{" "}
              {start.label}, inclusive of applicable taxes. Kolkata-based, teaching pan-India and
              internationally.
            </p>
            <SmartImage
              src={image || IMG_DEFAULT}
              alt="Students learning online"
              className="rounded-2xl border border-cream/15 mb-5 w-full h-40"
              sizes="(min-width: 1024px) 30vw, 100vw"
            />
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-wa btn-sm w-full"
            >
              <BrandIcon name="whatsapp" size={18} color="#053b1e" /> Chat on WhatsApp
            </a>
          </div>
          <FooterCol title="Tracks" items={[...TRACKS, ...COMPANY.slice(0, 2)]} />
          <FooterCol title="English & Career" items={ENGLISH} />
          <FooterCol title="Guides" items={GUIDES} />
        </div>
        <div className="mb-12 rounded-3xl border border-cream/15 bg-white/[0.04] px-5 py-6 md:px-8 md:py-7">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-sm shrink-0">
              <div className="font-display font-bold text-cream text-sm uppercase tracking-wider">
                Cities
              </div>
              <p className="mt-2 font-display text-lg font-extrabold leading-tight text-sunshine md:text-xl">
                Live spoken English from these cities — and worldwide
              </p>
              <p className="mt-2 text-sm text-white/85">
                Same teacher. India fees in INR; international fees in USD. IST morning, evening and
                weekend batches — no walk-in campus. Pan-India and global enrolment.
              </p>
            </div>
            <ul className="flex flex-wrap gap-2 lg:max-w-3xl lg:justify-end">
              {FOOTER_CITIES.map((c) => (
                <li key={c.to}>
                  <Link
                    to={c.to}
                    className="inline-flex items-center gap-1.5 rounded-full border border-cream/20 bg-white/5 px-3 py-1.5 text-sm font-display font-semibold text-cream transition hover:border-sunshine hover:bg-sunshine/15 hover:text-sunshine"
                  >
                    <Icon name="globe" size={14} />
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6 pt-8 border-t border-cream/15">
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/90">
            <a href={CALL_LINK} className="inline-flex items-center gap-2 hover:text-sunshine">
              <Icon name="phone" size={16} />
              Call fallback: {WHATSAPP_DISPLAY}
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="inline-flex items-center gap-2 hover:text-sunshine"
            >
              <Icon name="mail" size={16} />
              {CONTACT.email}
            </a>
            <span className="inline-flex items-center gap-2">
              <Icon name="globe" size={16} />
              Kolkata · Online · Pan-India · Global
            </span>
            <span className="inline-flex items-center gap-2">
              <Icon name="clock" size={16} />
              Message anytime · replies 09:00–12:00 IST
            </span>
          </div>
          <div className="flex flex-wrap md:justify-end gap-4">
            {COMPANY.map((c) => (
              <Link key={c.to} to={c.to} className="text-sm text-white/90 hover:text-sunshine">
                {c.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-cream/15">
          <PaymentTrust tone="dark" />
        </div>
        <div className="mt-8 pt-6 border-t border-cream/15 text-xs leading-relaxed text-white/80 space-y-3">
          <p className="text-cream/95 font-semibold">{PRICING_NOTICE}</p>
          <p>
            Enrolment is open pan-India and internationally, subject to course, batch and payment
            availability. India pricing is for learners enrolling from India. A Country/Region
            selector on this device is not enrolment eligibility — we confirm country, currency and
            fee during admissions.
          </p>
          <div className="pt-2">
            <CountrySelect tone="footer" id="country-region-footer" />
          </div>
          <address className="not-italic space-y-0.5">
            <p className="uppercase tracking-wide text-cream/90 font-display font-bold">
              {CONTACT.legalName}
            </p>
            <p>GSTIN {CONTACT.gstin}</p>
            <p>
              Reg. Address: {CONTACT.street}, {CONTACT.locality} — {CONTACT.postalCode}
            </p>
            <p>
              <a href={CALL_LINK} className="hover:text-sunshine">
                +91 9674479949
              </a>
            </p>
            <p>
              <a href={`mailto:${CONTACT.email}`} className="hover:text-sunshine">
                {CONTACT.email}
              </a>
            </p>
          </address>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-white/80">
          <div className="space-y-1">
            <p>© {new Date().getFullYear()} Learn With Smile. All rights reserved.</p>
            <p>This website is made and crafted by Soumyakanta Bera.</p>
            <p className="flex flex-wrap gap-x-4 gap-y-1 pt-1">
              <Link to="/privacy" className="hover:text-sunshine">
                Privacy
              </Link>
              <Link to="/terms" className="hover:text-sunshine">
                Terms
              </Link>
              <Link to="/refunds" className="hover:text-sunshine">
                Refunds
              </Link>
              <Link to="/child-protection" className="hover:text-sunshine">
                Child protection
              </Link>
            </p>
          </div>
          <p className="font-display font-semibold text-cream/90">
            Real teacher · Chat on WhatsApp
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: { to: string; label: string }[] }) {
  return (
    <div>
      <div className="font-display font-bold text-cream text-sm uppercase tracking-wider mb-4">
        {title}
      </div>
      <ul className="space-y-2.5">
        {items.map((i) => (
          <li key={i.to}>
            <Link to={i.to} className="text-sm text-white/90 hover:text-sunshine">
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
