import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { SectionHeader, FeatureCard, WaButton, Stat, MottoBand } from "@/components/ui-bits";
import { Icon } from "@/components/Icon";
import { IMG } from "@/lib/images";

export const Route = createFileRoute("/about-us")({
  component: Page,
  head: () => ({ meta: [
    { title: "About Learn With Smile | 7 Years of Live Online Teaching" },
    { name: "description", content: "Our story, mission, and 11 learning principles. Live online classes for Indian learners — small batches, gamified, student-first." },
  ]}),
});

const FEATURES: { icon: any; color: any; t: string; d: string }[] = [
  { icon: "play", color: "brand", t: "Interactive Live Classes", d: "Real teacher, real time, real feedback. No passive videos." },
  { icon: "gamepad", color: "sunshine", t: "Gamified Learning", d: "Flashcards, matching, live polls — learning that sticks." },
  { icon: "heart", color: "coral", t: "Collaborative Learning", d: "Group discussions and team activities every class." },
  { icon: "target", color: "indigo", t: "Student-Centred Design", d: "Built around your goals, pace and learning style." },
  { icon: "trend", color: "sage", t: "Live Polls & Quizzes", d: "Real-time activities that check understanding instantly." },
  { icon: "clock", color: "brand", t: "Flexible & Adaptable", d: "Morning, evening, weekend — we fit your life." },
  { icon: "users", color: "indigo", t: "Small Batches (Max 6)", d: "More attention, more speaking, better results." },
  { icon: "user", color: "coral", t: "1:1 Personalisation", d: "Private sessions available on most courses." },
  { icon: "shield", color: "sage", t: "Money-Back Confidence", d: "If your first class doesn't impress — full refund." },
  { icon: "bulb", color: "sunshine", t: "Simple, Not Simplified", d: "Concepts broken down without losing depth." },
  { icon: "rocket", color: "brand", t: "Career-First Outcomes", d: "Every course ends with portfolio or job-readiness." },
];

function Page() {
  return (
    <Layout waMessage="Hi, I just read About Us. I'd like a free demo." footerImage={IMG.team}>
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <img src={IMG.team} alt="Indian learners community" className="w-full h-full object-cover"/>
          <div className="absolute inset-0 bg-gradient-to-br from-ink/85 via-brand-deep/75 to-indigo-pop/50"/>
        </div>
        <div className="container-x py-16 md:py-24 text-cream max-w-3xl">
          <span className="eyebrow eyebrow-white"><Icon name="smile" size={14}/> About Us</span>
          <h1 className="mt-4 text-4xl md:text-6xl text-cream leading-[1.05]">We Noticed a Gap. <span className="text-sunshine">We Built the Bridge.</span></h1>
          <p className="mt-5 text-lg text-white">Seven years of teaching, 500+ learners, and one belief: learning should be simple, practical and enjoyable — for every Indian student.</p>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid lg:grid-cols-2 gap-10 items-center">
          <img src={IMG.studentLaptop2} alt="Indian student learning" className="rounded-3xl shadow-lg object-cover h-[400px] w-full"/>
          <div>
            <SectionHeader align="left" eyebrow="Our Story" title="Why We Started Learn With Smile" subtitle="Because complex teaching was leaving good students behind."/>
            <div className="space-y-4 text-ink/80 leading-relaxed">
              <p>For seven years we taught students across India and watched the same pattern: bright learners struggling not because they weren't smart, but because lessons were made too complex.</p>
              <p>We started Learn With Smile to fix that — with <strong>simple teaching, small batches, and live classes built around the student</strong>, not the textbook.</p>
              <p>Today our gamified live classrooms run mornings, evenings and weekends across English, Excel, and data analytics — with a teacher who actually knows your name.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-brand-soft/40">
        <div className="container-x">
          <SectionHeader eyebrow="11 Learning Features" title="How We Teach Differently" subtitle="Eleven concrete principles that show up in every single live class."/>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {FEATURES.map(f => <FeatureCard key={f.t} icon={f.icon} color={f.color} title={f.t}>{f.d}</FeatureCard>)}
          </div>
        </div>
      </section>

      <MottoBand>"Your learning today, <em className="text-sunshine">matters the more</em>, and we build Future Together."</MottoBand>

      <section className="relative py-16">
        <div className="absolute inset-0 z-0"><img src={IMG.graduation} alt="" className="w-full h-full object-cover"/><div className="absolute inset-0 bg-brand-deep/90"/></div>
        <div className="container-x grid grid-cols-2 md:grid-cols-4 gap-8">
          <Stat num="7" label="Years Teaching"/><Stat num="500+" label="Learners"/><Stat num="95%" label="Completion"/><Stat num="4.9★" label="Avg Rating"/>
        </div>
      </section>

      <section className="section">
        <div className="container-x text-center">
          <h2 className="text-3xl md:text-4xl">Ready to learn the smile way?</h2>
          <p className="mt-3 text-ink/85 max-w-xl mx-auto">Book a free demo on WhatsApp — see a real live class before you decide.</p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <WaButton message="Hi, I read About Us. Book me a free demo please." variant="primary" size="lg">🎓 Book Free Demo</WaButton>
            <WaButton message="Hi, I'd like a course recommendation." variant="wa" size="lg">Chat with Us</WaButton>
          </div>
        </div>
      </section>
    </Layout>
  );
}
