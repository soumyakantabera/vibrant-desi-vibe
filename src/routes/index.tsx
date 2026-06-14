import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { SectionHeader, FeatureCard, WaButton, Stat, MottoBand } from "@/components/ui-bits";
import { Icon } from "@/components/Icon";
import { BrandIcon } from "@/components/BrandIcon";
import { TestimonialSlider } from "@/components/TestimonialSlider";
import { IMG } from "@/lib/images";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Learn With Smile | Live English, Excel, Data & AI Classes from ₹999" },
      { name: "description", content: "7 yrs teaching online. Spoken English, IELTS, Excel, Python, Power BI, AI with Claude & ChatGPT — live classes. Max 6 per batch or 1:1. Free demo on WhatsApp." },
      { name: "keywords", content: "spoken english classes online india, ielts coaching online, excel classes, python online india, power bi training, prompt engineering claude chatgpt, ai courses india, learn with smile, kolkata online classes" },
      { property: "og:title", content: "Learn With Smile | Live English, Excel, Data & AI Classes" },
      { property: "og:description", content: "Live online classes from ₹999/mo. English, Excel, Power BI, Python & AI with Claude/ChatGPT. Max 6 per batch or 1:1." },
      { property: "og:image", content: IMG.heroClass },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Learn With Smile",
          url: "https://learnwithsmile.in",
          description: "Live online classes in English, Excel, Data Analytics and AI for learners across India, based in Kolkata.",
          address: {
            "@type": "PostalAddress",
            streetAddress: "75/2/4, Raja Ram Mohan Roy Road",
            addressLocality: "Kolkata",
            postalCode: "700008",
            addressCountry: "IN",
          },
          areaServed: "IN",
          sameAs: ["https://wa.me/919674479949"],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Learn With Smile",
          url: "https://learnwithsmile.in",
        }),
      },
    ],
  }),
});

function Home() {
  const TESTIMONIALS = [
    {
      quote: "Joined with zero English confidence. Six months later I was leading client presentations. The gamified exercises and live debates made it genuinely enjoyable — not just effective.",
      name: "Priya Sharma", detail: "Basic Spoken English · Marketing Executive, Kolkata",
      waMessage: "Hi, I saw Priya's story. I want the same result. Can I get a free demo for Spoken English?",
    },
    {
      quote: "Cleared PL-300 on first attempt. Showed my three live-built dashboards in the interview and got the BI Analyst role the same week. The live teacher and small batch made all the difference.",
      name: "Rohan Mehta", detail: "Power BI Mastery · BI Analyst, Bangalore",
      waMessage: "Hi, I saw Rohan's Power BI story. I want the same result. Can I get a free demo?",
    },
    {
      quote: "Switched from a BPO to a data analyst role. Salary doubled in 4 months. Gamified Python exercises made coding enjoyable, not intimidating. Best decision I made this year.",
      name: "Siddharth Nair", detail: "Master Python · Data Analyst, Pune",
      waMessage: "Hi, I saw Siddharth's Python story. I want the same career switch. Can I get a free demo?",
    },
  ];

  return (
    <Layout waMessage="Hi, I am interested in a free demo. Please guide me." footerImage={IMG.graduation}>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={IMG.heroClass} alt="Indian students in a live online class" className="w-full h-full object-cover" loading="eager"/>
          <div className="absolute inset-0 bg-gradient-to-br from-ink/85 via-brand-deep/70 to-indigo-pop/60"/>
        </div>
        <div className="container-x py-20 md:py-32 grid lg:grid-cols-[1.3fr_1fr] gap-10 items-center">
          <div className="text-cream">
            <span className="eyebrow eyebrow-white"><Icon name="spark" size={14}/> 7 Years · Kolkata & Pan-India</span>
            <h1 className="mt-5 text-4xl md:text-6xl font-extrabold leading-[1.05] text-cream">
              Speak Better English.<br/>
              <span className="text-sunshine">Master In-Demand Skills.</span><br/>
              <span className="text-sage">Build Future Together.</span>
            </h1>
            <p className="mt-6 text-lg text-white max-w-xl">
              Real teachers. Small batches. Gamified, interactive live classes — designed for the demands of today's market. From <strong className="text-sunshine">₹999/mo</strong>.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <WaButton message="Hi, I am interested in a free demo. Please guide me." variant="sun" size="lg">🎓 Enroll — Free Demo</WaButton>
              <WaButton message="Hi, I am interested in a free demo. Please guide me." variant="wa" size="lg">Chat on WhatsApp</WaButton>
            </div>
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/95">
              {["100% Online · Live", "Flexible Slots: Morning · Evening · Weekend", "Max 6 Per Batch or 1:1", "Monthly EMI from ₹999/mo", "Reschedule Anytime"].map(s => (
                <span key={s} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cream/10 border border-cream/20">
                  <Icon name="check" size={14} className="text-sage"/>{s}
                </span>
              ))}
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-32 h-32 rounded-full bg-sunshine/30 blur-3xl"/>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-coral/30 blur-3xl"/>
              <SnapshotCard/>
            </div>
          </div>
        </div>
      </section>

      {/* STORY BAND */}
      <section className="bg-brand-deep py-16 md:py-24">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sunshine/15 text-sunshine font-display font-bold text-xs uppercase tracking-wider"><Icon name="book" size={14}/> Our Story</span>
            <h2 className="mt-4 text-cream text-3xl md:text-5xl leading-[1.1]">We Noticed a Gap.<br/><span className="text-sage">We Built the Bridge.</span></h2>
            <div className="mt-6 space-y-4 text-white leading-relaxed">
              <p>For the past seven years, we have been teaching students and helping them build confidence in learning. During this journey, we noticed a common gap — many students struggle to understand concepts because learning is often made <strong className="text-cream">too complex</strong>.</p>
              <p>Our mission has always been to bridge this gap through simple teaching methods and by understanding each student's learning needs. We believe education should be <strong className="text-cream">easy to understand, practical, and enjoyable</strong>.</p>
              <p>With the rapid growth of AI and technology, we have designed live classes with small batch sizes to ensure better attention, better interaction, and better learning outcomes.</p>
            </div>
            <Link to="/about-us" className="btn btn-ghost-white mt-6"><Icon name="arrow-right" size={16}/> Read Our Full Story</Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <StoryTile icon="gamepad" tone="sun" title="Gamified Learning">Flashcards, matching games & live quizzes every session.</StoryTile>
            <StoryTile icon="users" tone="glass" title="Small Batches">Max 6 per batch. Better attention, better learning.</StoryTile>
            <StoryTile icon="heart" tone="glass" title="Collaborative">Group discussions and community building every class.</StoryTile>
            <StoryTile icon="target" tone="sun" title="Live Polls & Quizzes">Real-time interactive activities every session.</StoryTile>
          </div>
        </div>
      </section>

      {/* TRACKS */}
      <section className="section">
        <div className="container-x">
          <SectionHeader eyebrow="What We Teach" title="Two Powerful Learning Tracks" subtitle="Click either track to explore all courses, full curriculums and module breakdowns." />
          <div className="grid md:grid-cols-2 gap-6">
            <TrackCard to="/english-career" tag="6 Courses · From ₹999/mo" title="English & Career" desc="Spoken English · Business English · Interactive Speaking · IELTS · Interview Prep · Career Counselling" img={IMG.speaking} accent="brand"/>
            <TrackCard to="/excel-data" tag="8 Courses · From ₹999/mo" title="Excel, Data & AI" desc="MS Office · Master Excel · Finance Excel · Python · Power BI · Prompt Engineering · Claude API · AI Projects" img={IMG.dataDash} accent="indigo"/>
          </div>
          <div className="mt-6 bg-brand rounded-2xl p-6 md:p-7 flex flex-wrap items-center justify-between gap-4">
            <div>
              <strong className="text-cream block text-lg">Not sure which course is right for you?</strong>
              <p className="text-white text-sm mt-1">Tell us your goal — we recommend the perfect course in minutes on WhatsApp.</p>
            </div>
            <WaButton message="Hi, I am not sure which course is right for me. Can you recommend one based on my goal?" variant="white" size="md"><Icon name="whatsapp" size={16}/> Get a Recommendation</WaButton>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="relative section overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={IMG.liveClass} alt="Live online class in India" className="w-full h-full object-cover" loading="lazy"/>
          <div className="absolute inset-0 bg-gradient-to-br from-ink/90 to-brand-deep/85"/>
        </div>
        <div className="container-x">
          <SectionHeader eyebrowTone="white" eyebrow="The Process" title={<span className="text-cream">How Our Live Classes Work</span>} invert/>
          <div className="grid md:grid-cols-2 gap-5 mb-12">
            <GlassCard icon="users" title="Batch Classes" pricing="From ₹999/mo">
              Scheduled cohorts (max 6). Live teacher feedback, gamified activities, collaborative exercises. Best for structure and accountability.
            </GlassCard>
            <GlassCard icon="user" title="1:1 Private Sessions" pricing="Flexible Pricing">
              Just you and the teacher, at your pace. Fully personalised curriculum, schedule, and feedback. Available on most courses.
            </GlassCard>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { n: 1, lbl: "Choose Course", sub: "14 live programs", c: "sunshine" },
              { n: 2, lbl: "Pick Format", sub: "Batch or 1:1", c: "coral" },
              { n: 3, lbl: "WhatsApp Us", sub: "Reply in minutes", c: "wa" },
              { n: 4, lbl: "Join Live Class", sub: "First session starts", c: "sage" },
            ].map(s => (
              <div key={s.n} className="text-center">
                <div className={`mx-auto h-12 w-12 rounded-full flex items-center justify-center font-display font-extrabold text-lg ${
                  s.c === "wa" ? "bg-wa text-white" :
                  s.c === "sunshine" ? "bg-sunshine text-ink" :
                  s.c === "coral" ? "bg-coral text-white" : "bg-sage text-ink"
                }`}>{s.n}</div>
                <div className="text-cream font-display font-bold mt-3">{s.lbl}</div>
                <div className="text-white/85 text-xs mt-1">{s.sub}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <WaButton message="Hi, I am interested in a free demo. Please guide me." size="lg">Chat With Us on WhatsApp</WaButton>
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="section bg-brand-soft/40">
        <div className="container-x">
          <SectionHeader eyebrow="What We Offer" title="Why Our Teaching Works" subtitle="Our online teaching focuses on practical, interactive, and student-friendly learning — not complex theory." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <FeatureCard icon="play" color="brand" title="Interactive Live Classes">Engaging live sessions with direct teacher support — real interaction every class.</FeatureCard>
            <FeatureCard icon="gamepad" color="sunshine" title="Gamified Learning">Flashcards, matching games, live polls & quizzes — learning that actually sticks.</FeatureCard>
            <FeatureCard icon="heart" color="coral" title="Collaborative Learning">Group discussions, debates, and teamwork that build confidence together.</FeatureCard>
            <FeatureCard icon="target" color="indigo" title="Student-Centred Design">Classes designed around each student's needs, goals, and learning style.</FeatureCard>
            <FeatureCard icon="trend" color="sage" title="Live Polls & Quizzes">Real-time activities that improve participation and check understanding.</FeatureCard>
            <FeatureCard icon="clock" color="brand" title="Flexible & Adaptable">Morning, evening, weekend batches — we fit around your life, not the other way round.</FeatureCard>
          </div>
          <div className="text-center mt-10">
            <Link to="/about-us" className="btn btn-outline">See All 11 Learning Features <Icon name="arrow-right" size={16}/></Link>
          </div>
        </div>
      </section>

      <MottoBand>"Your learning today, <em className="text-sunshine">matters the more</em>, and we build Future Together."</MottoBand>

      {/* NUMBERS */}
      <section className="relative py-16">
        <div className="absolute inset-0 z-0">
          <img src={IMG.graduation} alt="Indian graduates" className="w-full h-full object-cover" loading="lazy"/>
          <div className="absolute inset-0 bg-gradient-to-br from-ink/85 via-brand-deep/90 to-ink/85"/>
        </div>
        <div className="container-x grid grid-cols-2 md:grid-cols-4 gap-8">
          <Stat num="7" label="Years Teaching"/>
          <Stat num="500+" label="Learners Helped"/>
          <Stat num="Max 6" label="Per Batch · 1:1 Option"/>
          <Stat num="4.9★" label="Average Rating"/>
        </div>
      </section>


      {/* TESTIMONIALS */}
      <section className="section">
        <div className="container-x">
          <SectionHeader eyebrowTone="coral" eyebrow="Student Stories" title="Real Results from Real Learners"/>
          <TestimonialSlider items={TESTIMONIALS}/>
          <div className="text-center mt-10">
            <Link to="/success-stories" className="btn btn-outline">Read All Success Stories <Icon name="arrow-right" size={16}/></Link>
          </div>
        </div>
      </section>

      {/* PRICING — placed next to the WhatsApp CTA so cost stays crystal clear */}
      <section id="pricing" className="section bg-cream">

        <div className="container-x">
          <SectionHeader eyebrow="Simple, India-Friendly Pricing" eyebrowTone="indigo" title="Transparent Fees · Monthly EMI · No Hidden Costs" subtitle="Pay per month, switch slots anytime, and get a full refund if your first class doesn't impress."/>
          <div className="grid md:grid-cols-3 gap-5">
            <article className="rounded-2xl p-6 bg-white border border-border shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="h-11 w-11 rounded-xl bg-brand/10 text-brand flex items-center justify-center"><BatchIcon/></span>
                <h3 className="text-ink font-display font-extrabold text-lg">Small Batch (Max 6)</h3>
              </div>
              <p className="font-display font-extrabold text-3xl text-brand-deep">₹999<span className="text-base font-bold text-ink/80">/month</span></p>
              <p className="text-sm text-ink/80 mt-1">EMI · billed monthly</p>
              <ul className="mt-4 space-y-2 text-sm text-ink/90">
                <li className="flex gap-2"><CheckIcon className="text-brand mt-0.5 shrink-0"/>Live, interactive online classes</li>
                <li className="flex gap-2"><CheckIcon className="text-brand mt-0.5 shrink-0"/>Flexible morning · evening · weekend slots</li>
                <li className="flex gap-2"><CheckIcon className="text-brand mt-0.5 shrink-0"/>Recordings & worksheets included</li>
              </ul>
            </article>
            <article className="rounded-2xl p-6 bg-brand-deep text-cream relative overflow-hidden shadow-lg">
              <span className="absolute top-4 right-4 pill bg-sunshine text-ink border-none">Most Popular</span>
              <div className="flex items-center gap-3 mb-3">
                <span className="h-11 w-11 rounded-xl bg-sunshine/20 text-sunshine flex items-center justify-center"><OneOnOneIcon/></span>
                <h3 className="text-cream font-display font-extrabold text-lg">1:1 Personalised</h3>
              </div>
              <p className="font-display font-extrabold text-3xl text-sunshine">Custom<span className="text-base font-bold text-cream/95"> · per goal</span></p>
              <p className="text-sm text-cream/95 mt-1">Quote shared on WhatsApp in minutes</p>
              <ul className="mt-4 space-y-2 text-sm text-cream">
                <li className="flex gap-2"><CheckIcon className="text-sunshine mt-0.5 shrink-0"/>Curriculum built around your goal</li>
                <li className="flex gap-2"><CheckIcon className="text-sunshine mt-0.5 shrink-0"/>Pick your own day & time</li>
                <li className="flex gap-2"><CheckIcon className="text-sunshine mt-0.5 shrink-0"/>Pan-India · UPI / Cards / Net-banking</li>
              </ul>
            </article>
            <article className="rounded-2xl p-6 bg-white border border-border shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="h-11 w-11 rounded-xl bg-coral/10 text-coral flex items-center justify-center"><FreeDemoIcon/></span>
                <h3 className="text-ink font-display font-extrabold text-lg">Free Demo</h3>
              </div>
              <p className="font-display font-extrabold text-3xl text-brand-deep">₹0</p>
              <p className="text-sm text-ink/80 mt-1">First live class — zero commitment</p>
              <ul className="mt-4 space-y-2 text-sm text-ink/90">
                <li className="flex gap-2"><CheckIcon className="text-brand mt-0.5 shrink-0"/>Meet your teacher live</li>
                <li className="flex gap-2"><CheckIcon className="text-brand mt-0.5 shrink-0"/>Get a custom learning plan</li>
                <li className="flex gap-2"><CheckIcon className="text-brand mt-0.5 shrink-0"/>Refund guarantee after enrolling</li>
              </ul>
            </article>
          </div>
          <p className="text-center text-ink/80 text-sm mt-6">All prices in INR. GST included where applicable. Need a quote for your course? Ping us on WhatsApp ↓</p>

        </div>
      </section>

      {/* START TODAY */}
      <section className="section bg-gradient-to-b from-cream to-brand-soft/40">
        <div className="container-x">
          <SectionHeader eyebrow="Enroll Today" title="Two Ways to Begin"/>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-3xl p-8 md:p-10 bg-brand-deep text-cream relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-wa/20 rounded-full blur-3xl"/>
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-wa text-white mb-4"><Icon name="whatsapp" size={28}/></div>
              <h3 className="text-cream text-2xl font-display font-extrabold mb-3">Chat on WhatsApp</h3>
              <p className="text-white/95 leading-relaxed mb-6">The fastest route. Tell us which course — we guide you to the right slot in minutes. No forms. No waiting. Just a real conversation.</p>
              <WaButton message="Hi, I am interested in a free demo. Please guide me." size="lg">Open WhatsApp Now</WaButton>
              <p className="text-xs text-white/80 mt-4">+91 96744 79949 · Replies in minutes · 7 days a week</p>
            </div>
            <Link to="/book-free-demo" className="relative rounded-3xl overflow-hidden min-h-[320px] flex items-end group">
              <img src={IMG.womanLaptop} alt="Indian woman booking a class" className="absolute inset-0 w-full h-full object-cover transition group-hover:scale-105"/>
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent"/>
              <div className="relative p-7 text-cream">
                <h3 className="text-cream text-2xl font-display font-extrabold mb-2 flex items-center gap-2"><Icon name="calendar" size={22}/> Book a Free Demo Class</h3>
                <p className="text-white mb-4">Fill a 30-second form — name, number, course. We confirm your live demo via WhatsApp instantly.</p>
                <span className="btn btn-sun btn-sm">Open Demo Form <Icon name="arrow-right" size={14}/></span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* GOOGLE MAPS — KOLKATA OUTLET (compact) */}
      <section className="py-12 bg-white">
        <div className="container-x max-w-4xl">
          <div className="rounded-2xl overflow-hidden border border-border shadow-md bg-white grid md:grid-cols-[1fr_1.1fr]">
            <div className="relative h-56 md:h-auto min-h-[220px] bg-brand-soft">
              <iframe
                title="Learn With Smile — Kolkata Center map"
                src="https://www.google.com/maps?q=75%2F2%2F4+Raja+Ram+Mohan+Roy+Road+Kolkata+700008&output=embed"
                className="absolute inset-0 w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="p-5 md:p-6 flex flex-col justify-center">
              <span className="eyebrow eyebrow-indigo w-fit"><Icon name="globe" size={12}/> Online Pan-India · Based in Kolkata</span>
              <div className="font-display font-extrabold text-ink text-base mt-2 flex items-center gap-2">LEARN WITH SMILE</div>
              <p className="text-ink/85 text-sm mt-1">75/2/4, Raja Ram Mohan Roy Road, Kolkata — 700008<br/><span className="text-sunshine font-bold">5.0★ (125 reviews)</span> · By appointment only</p>
              <div className="flex flex-wrap gap-2 mt-3">
                <a href="https://www.google.com/maps/dir/?api=1&destination=75%2F2%2F4+Raja+Ram+Mohan+Roy+Road+Kolkata+700008+India" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm"><Icon name="target" size={14}/> Directions</a>
                <a href="https://g.page/r/CY5ptQJYQVPVEBM/review" target="_blank" rel="noopener noreferrer" className="btn btn-sun btn-sm"><Icon name="star" size={14}/> Review</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function StoryTile({ icon, title, tone, children }: { icon: any; title: string; tone: "sun"|"glass"; children: React.ReactNode }) {
  if (tone === "sun") {
    return (
      <div className="rounded-2xl p-5 bg-sunshine">
        <div className="h-10 w-10 rounded-xl bg-ink/10 text-ink flex items-center justify-center mb-2"><Icon name={icon} size={20}/></div>
        <strong className="text-ink font-display block">{title}</strong>
        <p className="text-ink/90 text-sm mt-1">{children}</p>
      </div>
    );
  }
  return (
    <div className="rounded-2xl p-5 bg-white/10 border border-cream/15 backdrop-blur">
      <div className="h-10 w-10 rounded-xl bg-cream/15 text-sunshine flex items-center justify-center mb-2"><Icon name={icon} size={20}/></div>
      <strong className="text-cream font-display block">{title}</strong>
      <p className="text-white/90 text-sm mt-1">{children}</p>
    </div>
  );
}

function TrackCard({ to, tag, title, desc, img, accent }: { to: string; tag: string; title: string; desc: string; img: string; accent: "brand"|"indigo" }) {
  return (
    <Link to={to as any} className="group relative rounded-3xl overflow-hidden min-h-[360px] flex items-end">
      <img src={img} alt={title} className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-105" loading="lazy"/>
      <div className={`absolute inset-0 ${accent === "brand" ? "bg-gradient-to-t from-brand-deep via-brand-deep/60 to-transparent" : "bg-gradient-to-t from-indigo-pop/95 via-indigo-pop/50 to-transparent"}`}/>
      <div className="relative p-7 text-cream">
        <span className="pill bg-cream/20 text-cream border-cream/30">{tag}</span>
        <h3 className="text-cream text-2xl md:text-3xl font-display font-extrabold mt-3 flex items-center gap-2">
          <Icon name={accent === "brand" ? "mic" : "chart"} size={26}/> {title}
        </h3>
        <p className="text-white mt-2">{desc}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sunshine font-display font-bold text-sm">Explore Full Curriculum <Icon name="arrow-right" size={16}/></span>
      </div>
    </Link>
  );
}

function GlassCard({ icon, title, pricing, children }: { icon: any; title: string; pricing: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl p-6 bg-white/10 backdrop-blur border border-cream/20">
      <div className="h-12 w-12 rounded-xl bg-cream/15 text-sunshine flex items-center justify-center mb-3"><Icon name={icon} size={24}/></div>
      <h3 className="text-cream text-xl font-display font-bold mb-2">{title}</h3>
      <p className="text-white/95 text-[15px] leading-relaxed">{children}</p>
      <p className="text-sunshine font-display font-bold mt-3">{pricing}</p>
    </div>
  );
}

/* ---------- Hand-drawn pricing-card icons (consistent set) ----------
   24x24 viewBox, currentColor strokes, stroke-width 1.75, rounded caps.
   Built from scratch — no icon library used here. */

function IconFrame({ children, size = 24 }: { children: React.ReactNode; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}

// Small Batch — three figures clustered together
function BatchIcon() {
  return (
    <IconFrame>
      <circle cx="8" cy="8" r="2.4"/>
      <circle cx="16" cy="8" r="2.4"/>
      <circle cx="12" cy="6.5" r="2.4"/>
      <path d="M3.5 18c.6-2.6 2.7-4 4.5-4s2.6.7 3.2 1.8"/>
      <path d="M20.5 18c-.6-2.6-2.7-4-4.5-4s-2.6.7-3.2 1.8"/>
      <path d="M7.5 19.5c.7-2.6 2.5-4 4.5-4s3.8 1.4 4.5 4"/>
    </IconFrame>
  );
}

// 1:1 Personalised — one student with spotlight rays
function OneOnOneIcon() {
  return (
    <IconFrame>
      <circle cx="12" cy="8.5" r="2.8"/>
      <path d="M6.5 19c.8-3 3-4.5 5.5-4.5s4.7 1.5 5.5 4.5"/>
      <path d="M12 2.5v1.6M4.4 5.4l1.1 1.1M19.6 5.4l-1.1 1.1M2.5 11.5h1.6M19.9 11.5h1.6"/>
    </IconFrame>
  );
}

// Free Demo — ticket with a play button
function FreeDemoIcon() {
  return (
    <IconFrame>
      <path d="M3.5 8.5a1.5 1.5 0 0 1 1.5-1.5h14a1.5 1.5 0 0 1 1.5 1.5v2a2 2 0 0 0 0 3v2a1.5 1.5 0 0 1-1.5 1.5h-14A1.5 1.5 0 0 1 3.5 15.5v-2a2 2 0 0 0 0-3z"/>
      <path d="M10.5 9.5v5l4-2.5z" fill="currentColor" stroke="none"/>
    </IconFrame>
  );
}

// Small check used in feature lists
function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
      className={className}>
      <path d="M5 12.5l4.2 4.2L19 7"/>
    </svg>
  );
}

/* ---------- Hero Snapshot Card ---------- */
function SnapshotCard() {
  return (
    <div className="relative animate-float">
      {/* Rotated rating sticker */}
      <div className="absolute -top-5 -right-5 z-20 rotate-12 bg-sunshine text-ink rounded-full h-20 w-20 flex flex-col items-center justify-center font-display font-extrabold shadow-xl border-4 border-cream">
        <span className="text-xl leading-none">4.9★</span>
        <span className="text-[10px] uppercase tracking-wider mt-0.5">Rated</span>
      </div>

      <div className="relative -rotate-2 rounded-3xl bg-cream shadow-2xl border-4 border-cream/40 p-6 overflow-hidden">
        {/* corner accents */}
        <div className="absolute -top-10 -left-10 w-28 h-28 rounded-full bg-sage/20"/>
        <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-coral/15"/>

        <div className="relative">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-wa/15 text-wa font-display font-bold text-[11px] uppercase tracking-widest">
            <span className="h-2 w-2 rounded-full bg-wa animate-pulse"/> Live · Enrolling Now
          </span>

          <div className="mt-4">
            <p className="text-ink/70 font-display font-bold text-xs uppercase tracking-wider">Course fees start at</p>
            <p className="font-display font-extrabold text-ink leading-none mt-1">
              <span className="text-5xl">₹999</span>
              <span className="text-xl text-ink/70">/month</span>
            </p>
            <p className="text-xs text-ink/70 mt-1">EMI · GST included · UPI accepted</p>
          </div>

          <div className="mt-5 space-y-3">
            <SnapRow tone="brand" icon={
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-5 9 5-9 5-9-5z"/><path d="M7 11v5c0 1.5 2.5 3 5 3s5-1.5 5-3v-5"/></svg>
            } big="500+" small="Learners taught across India"/>
            <SnapRow tone="indigo" icon={
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3.5" y="5" width="17" height="15" rx="2"/><path d="M3.5 9.5h17M8 3.5v3M16 3.5v3"/></svg>
            } big="7 yrs" small="Live online teaching experience"/>
            <SnapRow tone="coral" icon={
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="9" r="2.5"/><circle cx="16.5" cy="10" r="2"/><path d="M3.5 18c.7-2.8 3-4.2 5.5-4.2s4.8 1.4 5.5 4.2"/><path d="M14.5 17.5c.4-1.8 2-3 3.5-3s2.5.8 3 2.2"/></svg>
            } big="Max 6" small="Per batch · or 1:1 option"/>
          </div>

          <div className="mt-5 -mx-6 -mb-6 px-6 py-3 bg-brand-deep text-cream text-center text-[12px] font-display font-bold tracking-wide">
            Free Demo · No Card Needed · WhatsApp Reply in Minutes
          </div>
        </div>
      </div>
    </div>
  );
}

function SnapRow({ icon, big, small, tone }: { icon: React.ReactNode; big: string; small: string; tone: "brand" | "indigo" | "coral" }) {
  const bg = tone === "brand" ? "bg-brand/10 text-brand" : tone === "indigo" ? "bg-indigo-pop/10 text-indigo-pop" : "bg-coral/15 text-coral";
  return (
    <div className="flex items-center gap-3">
      <span className={`h-10 w-10 rounded-xl flex items-center justify-center shrink-0 ${bg}`}>{icon}</span>
      <div className="min-w-0">
        <p className="font-display font-extrabold text-ink leading-tight">{big} <span className="font-bold text-ink/80 text-sm">{small}</span></p>
      </div>
    </div>
  );
}


