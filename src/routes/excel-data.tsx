import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { SectionHeader, WaButton } from "@/components/ui-bits";
import { Icon } from "@/components/Icon";
import { SnapshotCard, SnapIcons } from "@/components/SnapshotCard";
import { COURSES } from "@/lib/courses";
import { IMG } from "@/lib/images";

const SLUGS = ["ms-office","master-excel","finance-excel","python","power-bi","prompt-engineering","ai-builder","ai-projects"];

const pageTitle = "Excel, Data & AI Live Online Classes India | Learn With Smile";
const pageDesc = "8 live online courses: MS Office (₹999/mo), Master Excel, Finance Excel, Python, Power BI, Prompt Engineering, Building with Claude API & AI Projects. 1:1 personalised.";

export const Route = createFileRoute("/excel-data")({
  component: Page,
  head: () => ({
    meta: [
      { title: pageTitle },
      { name: "description", content: pageDesc },
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: pageDesc },
      { property: "og:image", content: IMG.dataDash },
      { property: "og:url", content: "/excel-data" },
    ],
    links: [{ rel: "canonical", href: "https://learnwithsmile.in/excel-data" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Excel, Data & AI Courses — Learn With Smile",
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
  const wa = "Hi, I am interested in the Excel, Data & AI track. Please help me choose.";
  return (
    <Layout waMessage={wa} footerImage={IMG.presentation}>
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <img src={IMG.dataDash} alt="Data dashboards" className="w-full h-full object-cover"/>
          <div className="absolute inset-0 bg-gradient-to-br from-ink/85 via-indigo-pop/70 to-brand-deep/65"/>
        </div>
        <div className="container-x py-16 md:py-24 text-cream max-w-3xl">
          <span className="eyebrow eyebrow-white"><Icon name="chart" size={14}/> Excel, Data & AI Track</span>
          <h1 className="mt-4 text-4xl md:text-6xl text-cream leading-[1.05]">From Excel to <span className="text-sunshine">Data & AI</span> — built for today's jobs.</h1>
          <p className="mt-5 text-lg text-white">Eight 100% online live courses — 1:1 personalised, flexible morning/evening/weekend slots. Every course ships with India-context capstone projects. Monthly EMI from ₹999/mo.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <WaButton message={wa} variant="sun" size="lg">Free Demo on WhatsApp</WaButton>
            <WaButton message="Hi, please send me pricing for all Excel, Data & AI courses." variant="wa" size="lg">Get All Pricing</WaButton>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionHeader eyebrowTone="indigo" eyebrow="Explore All 8 Courses" title="Build the Skill That Pays" subtitle="Click any course for full curriculum, outcomes and pricing. All courses are 100% online live, 1:1 personalised, with flexible timings."/>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SLUGS.map(s => {
              const c = COURSES[s];
              return (
                <Link key={s} to={`/course-${s}` as any} className="group card-soft hover:-translate-y-1 transition flex flex-col">
                  <div className="rounded-xl overflow-hidden mb-4 h-40">
                    <img src={c.heroImage} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition" loading="lazy"/>
                  </div>
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className="h-9 w-9 rounded-xl bg-[#E2E2FB] text-indigo-pop flex items-center justify-center"><Icon name={c.icon} size={20}/></span>
                    <span className="pill bg-sunshine/15 text-[#6B4A00] border-sunshine/40">{c.price}</span>
                    <span className="pill bg-brand-soft text-brand-deep">{c.duration}</span>
                  </div>
                  <h3 className="text-lg font-display font-bold text-ink">{c.title}</h3>
                  <p className="text-sm text-ink/85 mt-1 flex-1">{c.tagline}</p>
                  <span className="mt-4 text-indigo-pop font-display font-bold text-sm inline-flex items-center gap-1.5">View Full Syllabus <Icon name="arrow-right" size={14}/></span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section bg-indigo-pop">
        <div className="container-x grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
          <div className="text-cream">
            <h2 className="text-cream text-3xl md:text-4xl">New: 3 AI courses — from prompting to agents.</h2>
            <p className="mt-3 text-white/95">Prompt Engineering (₹1,199/mo), Building with Claude API & MCP (₹1,499/mo), and AI Projects for academic & industrial work (₹1,999/mo). Live, 1:1 personalised.</p>
            <div className="mt-5"><WaButton message="Hi, I want to know more about the AI courses (Prompt Engineering / Claude API / AI Projects). Free demo please." variant="sun" size="lg">Explore AI Courses</WaButton></div>
          </div>
          <img src={IMG.aiProject} alt="Indian team building AI projects" className="rounded-3xl shadow-2xl object-cover h-[360px] w-full" loading="lazy"/>
        </div>
      </section>
    </Layout>
  );
}
