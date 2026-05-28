import { Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { SectionHeader, WaButton } from "@/components/ui-bits";
import { Icon, type IconName } from "@/components/Icon";
import { TestimonialSlider, type Testimonial } from "@/components/TestimonialSlider";
import { IMG } from "@/lib/images";

export type Module = { title: string; items: string[] };
export type Project = { title: string; brief: string; deliverable: string };

export type CourseData = {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  categoryColor: "brand" | "indigo";
  icon: IconName;
  heroImage: string;
  midImage: string;
  footerImage: string;
  duration: string;
  format: string;
  price: string;
  outcomes: string[];
  modules: Module[];
  projects?: Project[];
  faqs?: { q: string; a: string }[];
  testimonials?: Testimonial[];
  metaDescription: string;
};

export function CoursePage({ data }: { data: CourseData }) {
  const waPrimary = `Hi, I am interested in the ${data.title} course. Please share batch details and a free demo slot.`;
  const waSyllabus = `Hi, can you send me the full syllabus and pricing for ${data.title}?`;
  return (
    <Layout waMessage={waPrimary} footerImage={data.footerImage}>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={data.heroImage} alt={data.title} className="w-full h-full object-cover"/>
          <div className="absolute inset-0 bg-gradient-to-br from-ink/88 via-brand-deep/75 to-indigo-pop/55"/>
        </div>
        <div className="container-x py-16 md:py-24 grid lg:grid-cols-[1.3fr_1fr] gap-10 items-center">
          <div className="text-cream">
            <Link to={data.category === "Excel & Data Analytics" ? "/excel-data" : "/english-career"} className="text-sunshine font-display font-semibold text-sm inline-flex items-center gap-1 hover:underline">
              <Icon name="arrow-right" size={14} className="rotate-180"/> {data.category}
            </Link>
            <h1 className="mt-3 text-4xl md:text-6xl font-extrabold text-cream leading-[1.05]">
              <Icon name={data.icon} size={36} className="inline-block mr-2 text-sunshine align-middle"/> {data.title}
            </h1>
            <p className="mt-4 text-lg text-white max-w-2xl">{data.tagline}</p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sunshine text-ink font-bold"><Icon name="rupee" size={14}/>{data.price}</span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cream/10 border border-cream/20"><Icon name="clock" size={14} className="text-sage"/>{data.duration}</span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cream/10 border border-cream/20"><Icon name="users" size={14} className="text-sage"/>{data.format}</span>
            </div>
            <p className="mt-3 text-sm text-white/90">✓ 100% online live · ✓ Flexible morning · evening · weekend slots · ✓ Customised curriculum · ✓ Pan-India · Based in Kolkata</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <WaButton message={waPrimary} variant="sun" size="lg">Book a Free Demo</WaButton>
              <WaButton message={waSyllabus} variant="wa" size="lg">Get Full Syllabus</WaButton>
            </div>
          </div>
          <div className="hidden lg:block">
            <img src={data.midImage} alt={`${data.title} live class`} className="rounded-3xl shadow-2xl border-4 border-cream/15 animate-float" loading="lazy"/>
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="section">
        <div className="container-x grid lg:grid-cols-[1fr_1.2fr] gap-10 items-center">
          <img src={data.midImage} alt={`${data.title} outcomes`} className="rounded-3xl shadow-lg object-cover h-[360px] w-full" loading="lazy"/>
          <div>
            <SectionHeader align="left" eyebrow="What You'll Achieve" eyebrowTone="sun" title={<>By the end, you'll be able to…</>} subtitle="Real, measurable outcomes — not just lecture hours."/>
            <ul className="grid sm:grid-cols-2 gap-3">
              {data.outcomes.map(o => (
                <li key={o} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-border">
                  <span className="mt-0.5 h-6 w-6 rounded-full bg-brand text-white flex items-center justify-center shrink-0"><Icon name="check" size={14}/></span>
                  <span className="text-ink/85 text-sm leading-relaxed">{o}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6"><WaButton message={waPrimary} size="lg">Reserve My Free Demo Slot</WaButton></div>
          </div>
        </div>
      </section>

      {/* CURRICULUM */}
      <section className="section bg-brand-soft/40">
        <div className="container-x">
          <SectionHeader eyebrow="Curriculum" eyebrowTone="indigo" title={`Full ${data.title} Syllabus`} subtitle="Every module is taught live, with hands-on activities, quizzes and feedback."/>
          <div className="grid md:grid-cols-2 gap-5">
            {data.modules.map((m, i) => (
              <article key={m.title} className="card-soft">
                <div className="flex items-center gap-3 mb-3">
                  <span className="h-9 w-9 rounded-xl bg-indigo-pop/10 text-indigo-pop font-display font-extrabold flex items-center justify-center">{i+1}</span>
                  <h3 className="text-ink text-lg font-display font-bold">{m.title}</h3>
                </div>
                <ul className="space-y-2 text-sm text-ink/90">
                  {m.items.map(item => (
                    <li key={item} className="flex gap-2"><Icon name="check" size={14} className="text-brand shrink-0 mt-0.5"/>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="mt-8 bg-brand rounded-2xl p-6 md:p-7 flex flex-wrap items-center justify-between gap-4">
            <div>
              <strong className="text-cream block text-lg">Want a printable syllabus PDF?</strong>
              <p className="text-white text-sm mt-1">We'll send it on WhatsApp instantly with batch timings and pricing.</p>
            </div>
            <WaButton message={waSyllabus} variant="white">Send Me the Syllabus</WaButton>
          </div>
        </div>
      </section>

      {data.projects && data.projects.length > 0 && (
        <section className="section">
          <div className="container-x">
            <SectionHeader eyebrow="Capstone Projects" eyebrowTone="sun" title="Two India-Context Projects in This Course" subtitle="You don't just learn — you ship. Every learner builds these two portfolio-grade projects with 1:1 mentor reviews."/>
            <div className="grid md:grid-cols-2 gap-5">
              {data.projects.map((p, i) => (
                <article key={p.title} className="card-soft bg-gradient-to-br from-white to-sunshine/10 border-sunshine/30">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="h-10 w-10 rounded-xl bg-sunshine text-ink font-display font-extrabold flex items-center justify-center">P{i+1}</span>
                    <h3 className="text-ink text-lg font-display font-bold">{p.title}</h3>
                  </div>
                  <p className="text-ink/85 text-sm leading-relaxed">{p.brief}</p>
                  <p className="mt-3 text-sm text-ink/90"><strong className="text-brand">Deliverable:</strong> {p.deliverable}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}



      {data.testimonials && data.testimonials.length > 0 && (
        <section className="section">
          <div className="container-x">
            <SectionHeader eyebrow="Student Stories" eyebrowTone="coral" title="Real Results from Real Learners"/>
            <TestimonialSlider items={data.testimonials}/>
          </div>
        </section>
      )}

      {data.faqs && (
        <section className="section bg-cream">
          <div className="container-x grid lg:grid-cols-[1fr_1.4fr] gap-10">
            <div>
              <SectionHeader align="left" eyebrow="FAQs" title="Quick Answers" subtitle="Anything else? Ask us on WhatsApp — we reply in minutes."/>
              <img src={data.footerImage} alt="" loading="lazy" className="rounded-2xl shadow-md object-cover h-60 w-full"/>
            </div>
            <div className="space-y-3">
              {data.faqs.map(f => (
                <details key={f.q} className="card-soft group">
                  <summary className="cursor-pointer list-none flex items-center justify-between gap-3">
                    <span className="font-display font-bold text-ink">{f.q}</span>
                    <Icon name="arrow-right" size={16} className="text-brand rotate-90 group-open:rotate-[-90deg] transition"/>
                  </summary>
                  <p className="mt-3 text-ink/90 text-sm leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FINAL CTA */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-brand-deep via-indigo-pop to-coral"/>
        <div className="container-x text-center text-cream">
          <h2 className="text-cream text-3xl md:text-4xl">Ready to start {data.title}?</h2>
          <p className="mt-3 text-white max-w-xl mx-auto">Tell us your goal — we'll set up your free live demo on the next available slot.</p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <WaButton message={waPrimary} variant="sun" size="lg">🎓 Book Free Demo</WaButton>
            <WaButton message={waSyllabus} variant="white" size="lg">Get Pricing on WhatsApp</WaButton>
          </div>
        </div>
      </section>
    </Layout>
  );
}

const SITE = "https://learnwithsmile.in";

function parsePrice(p: string): number | null {
  const m = p.replace(/[, ]/g, "").match(/₹(\d+)/);
  return m ? Number(m[1]) : null;
}

function workloadISO(d: string): string | undefined {
  // very rough mapping for Google's courseWorkload (ISO 8601 duration)
  const months = d.match(/(\d+)\s*month/i);
  const weeks = d.match(/(\d+)\s*week/i);
  if (months) return `P${months[1]}M`;
  if (weeks) return `P${weeks[1]}W`;
  if (/session/i.test(d)) return "PT3H";
  return undefined;
}

export function courseSeo(d: CourseData) {
  const slug = `/course-${d.slug}`;
  const url = `${SITE}${slug}`;
  const price = parsePrice(d.price);
  const workload = workloadISO(d.duration);
  const heroAbs = d.heroImage.startsWith("http") ? d.heroImage : `${SITE}${d.heroImage}`;

  const courseInstance: any = {
    "@type": "CourseInstance",
    courseMode: "Online",
    inLanguage: "en-IN",
    location: { "@type": "VirtualLocation", url },
    instructor: {
      "@type": "Person",
      name: "Sunanda Dey",
      worksFor: { "@type": "Organization", name: "Learn With Smile" },
    },
  };
  if (workload) courseInstance.courseWorkload = workload;

  const offers: any = {
    "@type": "Offer",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    category: d.format.includes("1:1") ? "Online 1:1 course" : "Online batch course",
    url,
  };
  if (price !== null) offers.price = price;

  const ld: any[] = [
    {
      "@context": "https://schema.org",
      "@type": "Course",
      name: d.title,
      description: d.metaDescription,
      url,
      image: [heroAbs],
      inLanguage: "en-IN",
      provider: {
        "@type": "Organization",
        name: "Learn With Smile",
        url: SITE,
        sameAs: SITE,
      },
      hasCourseInstance: courseInstance,
      offers,
    },
  ];
  if (d.faqs && d.faqs.length) {
    ld.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: d.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }
  return {
    meta: [
      { title: `${d.title} – Live Online Classes | Learn With Smile` },
      { name: "description", content: d.metaDescription },
      { property: "og:title", content: `${d.title} – Learn With Smile` },
      { property: "og:description", content: d.metaDescription },
      { property: "og:image", content: heroAbs },
      { property: "og:url", content: url },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: ld.map((obj) => ({ type: "application/ld+json", children: JSON.stringify(obj) })),
  };
}


