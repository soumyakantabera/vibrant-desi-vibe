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
              <img src={IMG.studentLaptop} alt="Indian student learning online" className="relative rounded-3xl shadow-2xl border-4 border-cream/20 animate-float"/>
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
          <div className="absolute inset-0 bg-brand-deep/90"/>
        </div>
        <div className="container-x grid grid-cols-2 md:grid-cols-4 gap-8">
          <Stat num="7" label="Years Teaching"/>
          <Stat num="500+" label="Learners Helped"/>
          <Stat num="₹999/mo" label="Starts From · EMI"/>
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
