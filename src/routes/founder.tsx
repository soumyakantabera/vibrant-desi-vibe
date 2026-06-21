import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { SectionHeader, WaButton } from "@/components/ui-bits";
import { Icon } from "@/components/Icon";
import { IMG } from "@/lib/images";

export const Route = createFileRoute("/founder")({
  component: Page,
  head: () => ({ meta: [
    { title: "Meet the Founder | Sunanda Dey — Learn With Smile" },
    { name: "description", content: "Meet Sunanda Dey, founder of Learn With Smile. English & career mentor — 100% online live, flexible timings, pan-India." },
  ]}),
});

function FounderCard({ name, title, image, intro, credentials, teaches, promises, waMessage, reverse }: {
  name: string; title: string; image: string; intro: string;
  credentials: string[]; teaches: string[]; promises: string[]; waMessage: string; reverse?: boolean;
}) {
  return (
    <div className={`grid lg:grid-cols-[1fr_1.3fr] gap-10 items-start ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
      <img src={image} alt={name} loading="lazy" width={1024} height={1024}
        className="rounded-3xl shadow-xl object-cover h-[420px] w-full border-4 border-cream"/>
      <div>
        <span className="eyebrow eyebrow-indigo"><Icon name="spark" size={12}/> {title}</span>
        <h2 className="mt-3 text-3xl md:text-5xl text-ink leading-[1.05]">{name}</h2>
        <p className="mt-4 text-ink/85 leading-relaxed">{intro}</p>

        <div className="mt-5 grid sm:grid-cols-2 gap-3">
          <div className="card-soft bg-brand-soft/30">
            <h4 className="font-display font-bold text-ink text-sm mb-2 flex items-center gap-2"><Icon name="trophy" size={16} className="text-brand"/> Credentials</h4>
            <ul className="space-y-1.5 text-sm text-ink/85">
              {credentials.map(c => <li key={c} className="flex gap-2"><Icon name="check" size={13} className="text-brand mt-1 shrink-0"/>{c}</li>)}
            </ul>
          </div>
          <div className="card-soft bg-sunshine/10">
            <h4 className="font-display font-bold text-ink text-sm mb-2 flex items-center gap-2"><Icon name="book" size={16} className="text-coral"/> Teaches</h4>
            <ul className="space-y-1.5 text-sm text-ink/85">
              {teaches.map(t => <li key={t} className="flex gap-2"><Icon name="check" size={13} className="text-coral mt-1 shrink-0"/>{t}</li>)}
            </ul>
          </div>
        </div>

        <div className="mt-4 card-soft bg-gradient-to-br from-brand-soft to-cream">
          <h4 className="font-display font-bold text-ink mb-2 flex items-center gap-2"><Icon name="heart" size={16} className="text-coral"/> What I promise every learner</h4>
          <ul className="space-y-2 text-sm text-ink/85">
            {promises.map(p => <li key={p} className="flex gap-2"><Icon name="check" size={14} className="text-brand mt-0.5 shrink-0"/>{p}</li>)}
          </ul>
        </div>

        <div className="mt-5"><WaButton message={waMessage} size="md">Message on WhatsApp</WaButton></div>
      </div>
    </div>
  );
}

function Page() {
  return (
    <Layout waMessage="Hi, I'd like to speak to the Learn With Smile founders for a free demo." footerImage={IMG.teacherWoman}>
      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-0 z-0"><img src={IMG.teacherWoman} alt="" className="w-full h-full object-cover"/><div className="absolute inset-0 bg-gradient-to-br from-ink/88 via-brand-deep/80 to-indigo-pop/55"/></div>
        <div className="container-x py-16 md:py-24 text-cream max-w-3xl">
          <span className="eyebrow eyebrow-white"><Icon name="heart" size={14}/> Meet the Founder</span>
          <h1 className="mt-4 text-4xl md:text-6xl text-cream leading-[1.05]">One mentor. One mission.</h1>
          <p className="mt-4 text-lg text-white">100% online live classes · flexible morning/evening/weekend slots · max 6 per batch or 1:1 · pan-India, based in Kolkata. Every learner gets two free 1:1 feedback sessions every month.</p>
        </div>
      </section>

      {/* SUNANDA */}
      <section className="section">
        <div className="container-x">
          <FounderCard
            name="Sunanda Dey"
            title="Co-Founder · English & Career Mentor"
            image={IMG.founder}
            intro="Sunanda has spent the last 7+ years teaching English and helping students build careers — from school students and homemakers to engineers and BPO professionals. She is currently pursuing her MSc in Design of Sustainable Tourism Systems and brings two years of international and luxury tourism work experience to every classroom."
            credentials={[
              "MSc · Design of Sustainable Tourism Systems (ongoing)",
              "7+ years teaching English & Career Development",
              "2 years experience · International & luxury tourism",
              "Trained 500+ learners across India",
            ]}
            teaches={[
              "Basic & Interactive Spoken English",
              "IELTS Coaching (Band 7+ focused)",
              "Business English for professionals",
              "Interview Prep · HR · Behavioural",
              "1:1 Career Counselling",
            ]}
            promises={[
              "A teacher who knows your name and progress",
              "Live sessions small enough that you can't hide",
              "Honest feedback delivered with patience",
              "Outcomes you can show — not hours sat through",
            ]}
            waMessage="Hi Sunanda, I read your story. I'd like to book a free demo."
          />
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-brand text-cream">
        <div className="container-x text-center">
          <h2 className="text-cream text-3xl md:text-4xl">Talk to the founder directly.</h2>
          <p className="mt-3 text-white max-w-xl mx-auto">Tell us your goal — we'll confirm a free live demo slot on WhatsApp.</p>
          <div className="mt-6"><WaButton message="Hi founders, I want a free demo. Please guide me." variant="sun" size="lg">Book Free Demo on WhatsApp</WaButton></div>
        </div>
      </section>
    </Layout>
  );
}
