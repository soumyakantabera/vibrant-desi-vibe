import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Icon } from "./Icon";
import { BrandIcon } from "./BrandIcon";
import { SmartImage } from "./SmartImage";
import { CALL_LINK, WHATSAPP_DISPLAY, waLink } from "@/lib/whatsapp";

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
  { to: "/book-free-demo", label: "Book Free Demo" },
];

/**
 * The long-form landing pages. Linked from every page's footer so they are not
 * orphans — a page reachable only from the sitemap gets crawled late and passes
 * no internal link equity, which for three brand-new URLs is most of the
 * problem.
 */
const GUIDES = [
  { to: "/workplace-english-course-online-india", label: "Workplace English Guide" },
  { to: "/spoken-english-classes-kolkata", label: "Classes in Kolkata" },
  { to: "/english-class-fees-india", label: "English Class Fees in India" },
  { to: "/best-online-spoken-english-classes-india", label: "Compare Online Classes" },
];

const IMG =
  "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=900&auto=format&fit=crop&q=80";

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
                <div className="text-xs text-white/85">Live Online · Kolkata & Pan-India</div>
              </div>
            </div>
            <p className="text-white/90 text-sm leading-relaxed mb-5">
              7 years teaching English & career skills online from Kolkata. Learners join live from
              all over India. Gamified classes. Real results — from ₹999/mo.
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
              <BrandIcon name="whatsapp" size={18} color="#053b1e" /> Chat with us on WhatsApp
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
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-white/80">
          <div className="space-y-1">
            <p>© {new Date().getFullYear()} Learn With Smile. All rights reserved.</p>
            <p>This website is made and crafted by Soumyakanta Bera.</p>
          </div>
          <p className="font-display font-semibold text-cream/90">
            Real teacher · ₹0 live demo · No card required
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
