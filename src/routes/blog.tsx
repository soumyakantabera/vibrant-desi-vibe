import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { SectionHeader, WaButton } from "@/components/ui-bits";
import { Icon } from "@/components/Icon";
import { IMG } from "@/lib/images";

export const Route = createFileRoute("/blog")({
  component: Page,
  head: () => ({ meta: [
    { title: "Learn With Smile Blog | English & Career Tips" },
    { name: "description", content: "Practical tips for Indian learners — spoken English, IELTS, business English, career switching. Updated weekly." },
  ]}),
});

const POSTS = [
  { tag: "Spoken English", img: IMG.girlReading, title: "5 Speaking Habits That Killed My Hesitation in 30 Days", excerpt: "The smallest daily ritual that built my fluency — no apps, no expensive courses." },
  { tag: "IELTS", img: IMG.ielts, title: "Band 7 Writing: The 4-Paragraph Template That Just Works", excerpt: "A simple Task 2 structure trained 200+ of our students into Band 7+." },
  { tag: "Business English", img: IMG.businessEnglish, title: "5 Email Phrases That Make You Sound More Professional", excerpt: "Small wording swaps that instantly upgrade your workplace emails." },
  { tag: "Interview Prep", img: IMG.presentation, title: "How to Answer 'Tell Me About Yourself' in 60 Seconds", excerpt: "A simple structure our students use to nail the most common interview opener." },
  { tag: "Career", img: IMG.career, title: "BPO to Client-Facing Role: The Realistic 6-Month Roadmap", excerpt: "What to learn, in what order, and how to talk about it in interviews." },
];

function Page() {
  return (
    <Layout waMessage="Hi, I read the blog. I'd like to discuss my learning goal." footerImage={IMG.blogDesk}>
      <section className="relative">
        <div className="absolute inset-0 z-0"><img src={IMG.blogDesk} alt="" className="w-full h-full object-cover"/><div className="absolute inset-0 bg-gradient-to-br from-ink/85 via-indigo-pop/70 to-brand-deep/65"/></div>
        <div className="container-x py-16 md:py-24 text-cream max-w-3xl">
          <span className="eyebrow eyebrow-white"><Icon name="book" size={14}/> Blog</span>
          <h1 className="mt-4 text-4xl md:text-6xl text-cream leading-[1.05]">Tips & Stories for <span className="text-sunshine">Indian Learners</span></h1>
          <p className="mt-5 text-lg text-white">Practical, hype-free articles on English and career building — written by our teachers.</p>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionHeader eyebrow="Latest Posts" title="Read · Apply · Discuss on WhatsApp"/>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {POSTS.map(p => (
              <article key={p.title} className="card-soft flex flex-col">
                <div className="rounded-xl overflow-hidden h-44 mb-4"><img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition"/></div>
                <span className="pill bg-brand-soft text-brand-deep border-brand/20 mb-2">{p.tag}</span>
                <h3 className="font-display font-bold text-ink text-lg">{p.title}</h3>
                <p className="text-sm text-ink/85 mt-2 flex-1">{p.excerpt}</p>
                <WaButton message={`Hi, I read "${p.title}" and want to know more.`} variant="wa" size="sm" className="mt-4">Ask about this on WhatsApp</WaButton>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
