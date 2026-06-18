import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { SectionHeader, WaButton } from "@/components/ui-bits";
import { TestimonialSlider } from "@/components/TestimonialSlider";
import { IMG } from "@/lib/images";

export const Route = createFileRoute("/success-stories")({
  component: Page,
  head: () => ({ meta: [
    { title: "Student Success Stories | Learn With Smile" },
    { name: "description", content: "Real Indian learners, real outcomes — career switches, IELTS bands, interview wins, salary jumps. Read verified stories." },
  ]}),
});

const STORIES = [
  { quote: "Joined with zero English confidence. Six months later I was leading client presentations. The gamified exercises and live debates made it genuinely enjoyable — not just effective.", name: "Priya Sharma", detail: "Spoken English · Marketing Executive, Kolkata", waMessage: "Hi, I saw Priya's story. Free demo for Spoken English please." },
  { quote: "Went from IELTS 5.5 to 7.5 overall. The writing feedback was a game changer.", name: "Harshit Singh", detail: "IELTS · Now in Toronto", waMessage: "Hi, I saw Harshit's IELTS story. Free demo please." },
  { quote: "I couldn't speak two lines without freezing. Now I take Monday team standups.", name: "Anjali Roy", detail: "Spoken English · Teacher, Howrah", waMessage: "Hi, I saw Anjali's story. Spoken English demo please." },
  { quote: "Cleared interview rounds I used to fail. The mock interviews showed me exactly what to change.", name: "Sneha Das", detail: "Interview Prep · IT Engineer, Hyderabad", waMessage: "Hi, I saw Sneha's story. Interview Prep demo please." },
  { quote: "Switched from a BPO to a client-facing role. Salary doubled in 4 months. The mock calls and role-plays made me genuinely confident.", name: "Siddharth Nair", detail: "Business English · Customer Success, Pune", waMessage: "Hi, I saw Siddharth's story. Free demo for Business English please." },
  { quote: "Career counselling helped me drop a wrong course and pick a B.Tech specialisation I actually love.", name: "Aarav Pandey", detail: "Career Counselling · Student, Delhi", waMessage: "Hi, I want Aarav's career clarity. Book me a session please." },
];

function Page() {
  return (
    <Layout waMessage="Hi, I read the success stories. I want the same result — free demo please." footerImage={IMG.graduation}>
      <section className="relative">
        <div className="absolute inset-0 z-0"><img src={IMG.graduation} alt="" className="w-full h-full object-cover"/><div className="absolute inset-0 bg-gradient-to-br from-ink/85 via-brand-deep/75 to-sunshine/40"/></div>
        <div className="container-x py-16 md:py-24 text-cream max-w-3xl">
          <span className="eyebrow eyebrow-white">★ Real Outcomes</span>
          <h1 className="mt-4 text-4xl md:text-6xl text-cream leading-[1.05]">Real Indian Learners. <span className="text-sunshine">Real Results.</span></h1>
          <p className="mt-5 text-lg text-white">Career switches, IELTS scores, BI Analyst jobs, salary jumps. Every story below is from a verified Learn With Smile learner.</p>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionHeader eyebrowTone="coral" eyebrow="Verified Stories" title="9 Stories — Swipe or Scroll" subtitle="On mobile, the cards are a slider. On desktop, see them in a 3-column grid."/>
          <TestimonialSlider items={STORIES}/>
        </div>
      </section>

      <section className="section bg-brand-soft/40">
        <div className="container-x text-center">
          <h2 className="text-3xl md:text-4xl">Want to be the next story?</h2>
          <p className="mt-3 text-ink/85 max-w-xl mx-auto">Tell us your goal — we'll match you to the right course and a free demo slot, same day.</p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <WaButton message="Hi, I want to be the next success story. Free demo please." variant="primary" size="lg">🎓 Book Free Demo</WaButton>
            <WaButton message="Hi, please recommend a course based on my goal." variant="wa" size="lg">Get a Recommendation</WaButton>
          </div>
        </div>
      </section>
    </Layout>
  );
}
