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
import { FeeText, MarketCopy } from "@/components/FeeText";
import { INTL_FEE, intlUnit } from "@/lib/intl-fees";

const TRACKS = [{ to: "/english-career", label: "English & Career Hub" }];

const ENGLISH = [
  { to: "/course-spoken-english", label: "Spoken English" },
  { to: "/course-interactive-speaking", label: "Interactive Speaking" },
  { to: "/course-business-english", label: "Business English" },
  { to: "/course-interview-preparation", label: "Interview Preparation" },
];

const COMPANY = [
  { to: "/about-us", label: "About Us" },
  { to: "/why-us", label: "Why Us" },
  { to: "/educator", label: "Educator" },
  { to: "/success-stories", label: "Success Stories" },
  { to: "/blog", label: "Blog" },
  { to: "/book-free-demo", label: "Get Free Consultation" },
];

/**
 * The long-form landing pages. Linked from every page's footer so they are not
 * orphans — a page reachable only from the sitemap gets crawled late and passes
 * no internal link equity, which for three brand-new URLs is most of the
 * problem.
 */
const GUIDES = FOOTER_GUIDES;

const IMG_DEFAULT = IMG.groupClass;

export function Footer({ image }: { image?: string }) {
  const wa = waLink("Hi, I want a free consultation for spoken English.");
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
                <div className="text-xs text-white/85">7 years · about 6 a batch · now worldwide</div>
              </div>
            </div>
            <p className="text-white/90 text-sm leading-relaxed mb-5">
              <FeeText text="500+ learners. 7 years. About 6 in a batch. A teacher who knows your name. From ₹999/mo, inclusive of taxes. Kolkata, pan-India, now worldwide." />
            </p>
            <SmartImage
              src={image || IMG_DEFAULT}
              alt="Indian students learning online"
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
              Kolkata · pan-India · now worldwide · about 6 a batch
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
          <p className="text-cream/95 font-semibold">
            <EnrolmentNote />
          </p>
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
          <div className="pt-2">
            <CountrySelect />
          </div>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-white/80">
          <div className="space-y-1">
            <p>© {new Date().getFullYear()} Learn With Smile. All rights reserved.</p>
            <p>
              © Webify Bharat India. This site is fully managed and developed by Webify Bharat
              India, and solely owned by Webify Bharat India.
            </p>
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
              <Link to="/privacy" hash="grievance-officer" className="hover:text-sunshine">
                Grievance Officer
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

function EnrolmentNote() {
  const spoken = INTL_FEE["spoken-english"].display;
  const interactive = INTL_FEE["interactive-speaking"].display;
  const business = INTL_FEE["business-english"].display;
  const interview = INTL_FEE["interview-preparation"].display;
  const demo = INTL_FEE["demo-session"].display;
  return (
    <MarketCopy
      inr="Fees on this site are India pricing, in Indian Rupees, inclusive of taxes. These published figures are for learners in India."
      usd={
        <>
          Fees shown to a learner outside India are the international list, in {intlUnit()}. These
          published figures are Basic Spoken English {spoken}, Interactive Speaking {interactive},
          Business English {business}, Interview Preparation {interview}, and a demo session of{" "}
          {demo}. They are the labeled fee, not a conversion of the India price. The fee confirmed
          on WhatsApp is the contract price.
        </>
      }
    />
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
