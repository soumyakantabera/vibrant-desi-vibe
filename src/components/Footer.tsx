import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Icon } from "./Icon";
import { BrandIcon } from "./BrandIcon";
import { WHATSAPP_DISPLAY, waLink } from "@/lib/whatsapp";

const TRACKS = [
  { to: "/english-career", label: "English & Career Hub" },
  { to: "/excel-data", label: "Excel & Data Hub" },
];

const ENGLISH = [
  { to: "/course-spoken-english", label: "Spoken English" },
  { to: "/course-ielts", label: "IELTS" },
  { to: "/course-business-english", label: "Business English" },
  { to: "/course-interactive-speaking", label: "Interactive Speaking" },
  { to: "/course-interview-prep", label: "Interview Prep" },
  { to: "/course-career-counselling", label: "Career Counselling" },
];

const DATA = [
  { to: "/course-ms-office", label: "MS Office" },
  { to: "/course-master-excel", label: "Master Excel" },
  { to: "/course-finance-excel", label: "Finance Excel" },
  { to: "/course-python", label: "Python" },
  { to: "/course-power-bi", label: "Power BI (PL-300)" },
  { to: "/course-r-rstudio", label: "R & RStudio" },
  { to: "/course-matlab", label: "MATLAB" },
  { to: "/course-tableau", label: "Tableau" },
  { to: "/course-data-accelerator", label: "Data Accelerator" },
];

const COMPANY = [
  { to: "/about-us", label: "About Us" },
  { to: "/why-us", label: "Why Us" },
  { to: "/founder", label: "Founder" },
  { to: "/success-stories", label: "Success Stories" },
  { to: "/blog", label: "Blog" },
  { to: "/book-free-demo", label: "Book Free Demo" },
];

const IMG = "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=900&auto=format&fit=crop&q=80";

export function Footer({ image }: { image?: string }) {
  const wa = waLink("Hi, I am interested in Learn With Smile. Please share the details.");
  return (
    <footer className="bg-ink text-cream pt-16 pb-8 mt-10">
      <div className="container-x">
        <div className="grid lg:grid-cols-[1.2fr_1fr_1fr_1fr] gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <Logo size={42} />
              <div>
                <div className="font-display font-extrabold text-xl">Learn With <span className="text-sunshine">Smile</span></div>
                <div className="text-xs text-white/85">Live Online · Kolkata & Pan-India</div>
              </div>
            </div>
            <p className="text-white/90 text-sm leading-relaxed mb-5">
              7 years teaching English, Excel & data skills online. Small batches (max 6). Gamified live classes. Real results — from ₹999/mo.
            </p>
            <div className="rounded-2xl overflow-hidden border border-cream/15 mb-5">
              <img src={image || IMG} alt="Indian students learning online" loading="lazy" className="w-full h-40 object-cover"/>
            </div>
            <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-wa btn-sm w-full">
              <BrandIcon name="whatsapp" size={18} color="#053b1e"/> Chat with us on WhatsApp
            </a>
          </div>
          <FooterCol title="Tracks" items={[...TRACKS, ...COMPANY.slice(0,2)]}/>
          <FooterCol title="English & Career" items={ENGLISH}/>
          <FooterCol title="Excel & Data" items={DATA}/>
        </div>
        <div className="grid md:grid-cols-2 gap-6 pt-8 border-t border-cream/15">
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/90">
            <a href={`tel:${WHATSAPP_DISPLAY}`} className="inline-flex items-center gap-2 hover:text-sunshine"><Icon name="phone" size={16}/>{WHATSAPP_DISPLAY}</a>
            <a href="mailto:hello@learnwithsmile.in" className="inline-flex items-center gap-2 hover:text-sunshine"><Icon name="mail" size={16}/>hello@learnwithsmile.in</a>
            <span className="inline-flex items-center gap-2"><Icon name="globe" size={16}/>Kolkata · Online · Pan-India</span>
          </div>
          <div className="flex flex-wrap md:justify-end gap-4">
            {COMPANY.map(c => (
              <Link key={c.to} to={c.to} className="text-sm text-white/90 hover:text-sunshine">{c.label}</Link>
            ))}
          </div>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-white/80">
          <p>© {new Date().getFullYear()} Learn With Smile. All rights reserved.</p>
          <div className="flex gap-3">
            <a href="#" aria-label="Instagram" className="p-2 rounded-full bg-cream/10 hover:bg-sunshine hover:text-ink"><Icon name="instagram" size={16}/></a>
            <a href="#" aria-label="Facebook" className="p-2 rounded-full bg-cream/10 hover:bg-sunshine hover:text-ink"><Icon name="facebook" size={16}/></a>
            <a href="#" aria-label="LinkedIn" className="p-2 rounded-full bg-cream/10 hover:bg-sunshine hover:text-ink"><Icon name="linkedin" size={16}/></a>
            <a href="#" aria-label="YouTube" className="p-2 rounded-full bg-cream/10 hover:bg-sunshine hover:text-ink"><Icon name="youtube" size={16}/></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: { to: string; label: string }[] }) {
  return (
    <div>
      <h4 className="font-display font-bold text-cream text-sm uppercase tracking-wider mb-4">{title}</h4>
      <ul className="space-y-2.5">
        {items.map(i => (
          <li key={i.to}><Link to={i.to} className="text-sm text-white/90 hover:text-sunshine">{i.label}</Link></li>
        ))}
      </ul>
    </div>
  );
}
