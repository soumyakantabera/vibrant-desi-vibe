import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Icon } from "./Icon";
import { BrandIcon } from "./BrandIcon";
import { SmartImage } from "./SmartImage";
import { CALL_LINK, WHATSAPP_DISPLAY, waLink } from "@/lib/whatsapp";
import { withBasePath } from "@/lib/site-path";

const TRACKS = [{ to: "/english-career", label: "English & Career Hub" }];

const ENGLISH = [
  { to: "/course-spoken-english", label: "Spoken English" },
  { to: "/course-ielts", label: "IELTS" },
  { to: "/course-business-english", label: "Workplace English" },
  { to: "/course-interactive-speaking", label: "Interactive Speaking" },
  { to: "/course-interview-prep", label: "Interview Prep" },
  { to: "/course-career-counselling", label: "Career Counselling" },
];

const COMPANY = [
  { to: "/about-us", label: "About Us" },
  { to: "/why-us", label: "Why Us" },
  { to: "/founder", label: "Founder" },
  { to: "/success-stories", label: "Success Stories" },
  { to: "/blog", label: "Blog" },
  { to: "/book-free-demo", label: "Book a Free Demo" },
];

/**
 * The long-form landing pages. Linked from every page's footer so they are not
 * orphans — a page reachable only from the sitemap gets crawled late and passes
 * no internal link equity, which for three brand-new URLs is most of the
 * problem.
 */
const GUIDES = [
  { to: "/spoken-business-or-interactive-english", label: "Which Class You Need" },
  { to: "/interactive-english-class-hesitation", label: "When You Freeze" },
  { to: "/english-for-working-professionals-india", label: "Working Professionals" },
  { to: "/english-for-client-calls-india", label: "Client-Call English" },
  { to: "/english-for-presentations-india", label: "Presentations in 3 Minutes" },
  { to: "/english-hindi-bengali-medium", label: "Hindi & Bengali Medium" },
  { to: "/workplace-english-course-online-india", label: "Workplace English Guide" },
  { to: "/spoken-english-classes-kolkata", label: "Classes in Kolkata" },
  { to: "/english-class-fees-india", label: "English Class Fees in India" },
  { to: "/best-online-spoken-english-classes-india", label: "Compare Online Classes" },
  { to: "/how-long-to-learn-spoken-english", label: "How Long Spoken English Takes" },
  { to: "/english-institute-comparison-india", label: "Institutes Compared, 2026" },
];

const IMG =
  "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=900&auto=format&fit=crop&q=80";

/** Official marks: Razorpay, NPCI UPI/RuPay, Visa, Mastercard, Google Pay, PhonePe, Paytm. */
const PAY_METHODS: { src: string; alt: string; height: string }[] = [
  { src: "/payments/upi.svg", alt: "UPI", height: "h-7" },
  { src: "/payments/google-pay.svg", alt: "Google Pay", height: "h-6" },
  { src: "/payments/phonepe.svg", alt: "PhonePe", height: "h-7" },
  { src: "/payments/paytm.svg", alt: "Paytm", height: "h-6" },
  { src: "/payments/visa.svg", alt: "Visa", height: "h-5" },
  { src: "/payments/mastercard.svg", alt: "Mastercard", height: "h-8" },
  { src: "/payments/rupay.svg", alt: "RuPay", height: "h-6" },
];

export function Footer({ image }: { image?: string }) {
  const wa = waLink("Hi, I am interested in Learn With Smile. Please share the details.");
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
                <div className="text-xs text-white/85">7 Years · Kolkata & Pan-India</div>
              </div>
            </div>
            <p className="text-white/90 text-sm leading-relaxed mb-5">
              500+ Indian learners. 7 years. A teacher who knows your name. Small live batches from
              ₹999/mo, inclusive of taxes. Kolkata-based, teaching pan-India.
            </p>
            <SmartImage
              src={image || IMG}
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
              href="mailto:learnwithsmile.in@gmail.com"
              className="inline-flex items-center gap-2 hover:text-sunshine"
            >
              <Icon name="mail" size={16} />
              learnwithsmile.in@gmail.com
            </a>
            <span className="inline-flex items-center gap-2">
              <Icon name="globe" size={16} />
              Kolkata · Online · Pan-India
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
          <p className="text-[11px] uppercase tracking-[0.16em] font-display font-bold text-white/70 mb-3">
            Secured payments
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://razorpay.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Secured by Razorpay"
              className="shrink-0"
            >
              <img
                src={withBasePath("/payments/razorpay-secured.png")}
                alt="Razorpay"
                width={113}
                height={45}
                className="h-[45px] w-[113px]"
                decoding="async"
              />
            </a>
            <span className="hidden sm:block h-8 w-px bg-cream/20" aria-hidden />
            {PAY_METHODS.map((m) => (
              <span
                key={m.alt}
                className="inline-flex h-10 items-center rounded-md bg-white px-2.5"
              >
                <img
                  src={withBasePath(m.src)}
                  alt={m.alt}
                  className={`${m.height} w-auto max-w-[7.5rem] object-contain`}
                  decoding="async"
                />
              </span>
            ))}
            <span className="hidden sm:block h-8 w-px bg-cream/20" aria-hidden />
            <span className="inline-flex h-10 items-center gap-1.5 rounded-md bg-white px-2.5">
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden className="shrink-0">
                <path
                  fill="#0B7A45"
                  d="M17 8h-1V6A4 4 0 0 0 8 6v2H7a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2ZM9 6a3 3 0 0 1 6 0v2H9V6Zm3 12.25A1.75 1.75 0 1 1 12 14.5a1.75 1.75 0 0 1 0 3.75Z"
                />
              </svg>
              <span className="leading-[1.05]" aria-label="SSL Secured">
                <span className="block text-[11px] font-extrabold tracking-wide text-[#12352A]">
                  SSL
                </span>
                <span className="block text-[8px] font-bold tracking-[0.18em] text-[#0B7A45]">
                  SECURED
                </span>
              </span>
            </span>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-white/80">
          <div className="space-y-1">
            <p>© {new Date().getFullYear()} Learn With Smile. All rights reserved.</p>
            <p>This website is made and crafted by Soumyakanta Bera.</p>
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
