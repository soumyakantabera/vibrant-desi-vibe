import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { SectionHeader, WaButton } from "@/components/ui-bits";
import { Icon } from "@/components/Icon";
import { SnapshotCard, SnapIcons } from "@/components/SnapshotCard";
import { COURSES } from "@/lib/courses";
import { IMG } from "@/lib/images";

const SLUGS = ["spoken-english","business-english","interactive-speaking","ielts","interview-prep","career-counselling"];

const pageTitle = "English & Career Online Live Classes India | Learn With Smile";
const pageDesc = "6 live online courses from ₹999/mo: Basic Spoken English, Business English, Interactive Speaking, IELTS, Interview Prep, Career Counselling. Max 6 per batch.";

export const Route = createFileRoute("/english-career")({
  component: Page,
  head: () => ({
    meta: [
      { title: pageTitle },
      { name: "description", content: pageDesc },
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: pageDesc },
      { property: "og:image", content: IMG.speaking },
      { property: "og:url", content: "/english-career" },
    ],
    links: [{ rel: "canonical", href: "https://learnwithsmile.in/english-career" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "English & Career Courses — Learn With Smile",
          itemListElement: SLUGS.map((s, i) => {
            const c = COURSES[s];
            return {
              "@type": "ListItem",
              position: i + 1,
              url: `https://learnwithsmile.in/course-${s}`,
              name: c.title,
            };
          }),
        }),
      },
    ],
  }),
});

function Page() {
  const wa = "Hi, I am interested in the English & Career track. Please help me choose the right course.";
  return (
    <Layout waMessage={wa} footerImage={IMG.groupClass}>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={IMG.speaking} alt="English class India" className="w-full h-full object-cover"/>
          <div className="absolute inset-0 bg-gradient-to-br from-ink/85 via-brand-deep/75 to-coral/40"/>
        </div>
        <div className="container-x py-14 md:py-24 grid lg:grid-cols-[1.3fr_1fr] gap-10 items-center">
          <div className="text-cream min-w-0 w-full">
            <span className="eyebrow eyebrow-white"><Icon name="mic" size={14}/> English & Career Track</span>
            <h1 className="mt-4 text-3xl md:text-6xl text-cream leading-[1.05]">Speak English. <span className="text-sunshine">Win Interviews.</span> Build a Career.</h1>
            <p className="mt-5 text-base md:text-lg text-white">Six 100% online live courses — max 6 per batch (1:1 for Career Counselling). Flexible morning, evening & weekend slots. From <strong className="text-sunshine">₹999/mo</strong>.</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <WaButton message={wa} variant="sun" size="lg">Free Demo on WhatsApp</WaButton>
              <WaButton message="Hi, please send me pricing for all English & Career courses." variant="wa" size="lg">Get All Pricing</WaButton>
            </div>
          </div>
          <div className="w-full min-w-0 flex justify-center lg:block">
            <div className="relative w-full max-w-[320px] lg:max-w-none">
              <div className="absolute -top-4 -left-4 w-32 h-32 rounded-full bg-sunshine/30 blur-3xl"/>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-coral/30 blur-3xl"/>
              <SnapshotCard
                badge="Live · English Track"
                eyebrow="Whole track from"
                headline={{ big: "₹999", suffix: "/month" }}
                subnote="EMI · GST included · UPI accepted"
                rows={[
                  { tone: "brand", icon: SnapIcons.book, big: "6 courses", small: "Spoken · IELTS · Business · Interview" },
                  { tone: "indigo", icon: SnapIcons.people, big: "Max 6", small: "Per batch · or 1:1 option" },
                  { tone: "coral", icon: SnapIcons.spark, big: "Gamified", small: "Live polls · roleplays · debates" },
                ]}
                footer="Free Demo on WhatsApp · Reply in Minutes"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionHeader eyebrow="Explore All 6 Courses" title="Pick Your Goal — Start Today" subtitle="Click any course for the full live curriculum, outcomes, FAQs and pricing."/>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SLUGS.map(s => {
              const c = COURSES[s];
              return (
                <Link key={s} to={`/course-${s}` as any} className="group card-soft hover:-translate-y-1 transition flex flex-col">
                  <div className="rounded-xl overflow-hidden mb-4 h-40">
                    <img src={c.heroImage} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition" loading="lazy"/>
                  </div>
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className="h-9 w-9 rounded-xl bg-brand-soft text-brand-deep flex items-center justify-center"><Icon name={c.icon} size={20}/></span>
                    <span className="pill bg-sunshine/15 text-[#6B4A00] border-sunshine/40">{c.price}</span>
                    <span className="pill bg-brand-soft text-brand-deep">{c.duration}</span>
                  </div>
                  <h3 className="text-lg font-display font-bold text-ink">{c.title}</h3>
                  <p className="text-sm text-ink/85 mt-1 flex-1">{c.tagline}</p>
                  <span className="mt-4 text-brand-deep font-display font-bold text-sm inline-flex items-center gap-1.5">View Full Syllabus <Icon name="arrow-right" size={14}/></span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section bg-brand-deep">
        <div className="container-x grid lg:grid-cols-[1fr_1.2fr] gap-10 items-center">
          <img src={IMG.womanOffice} alt="Indian professional" className="rounded-3xl shadow-2xl object-cover h-[360px] w-full" loading="lazy"/>
          <div className="text-cream">
            <h2 className="text-cream text-3xl md:text-4xl">Not sure which course fits?</h2>
            <p className="mt-3 text-white/95">Tell us your goal — interview, abroad study, office promotion, daily confidence — we'll recommend the right course in minutes on WhatsApp.</p>
            <div className="mt-5"><WaButton message={wa} variant="sun" size="lg">Get My Recommendation</WaButton></div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
