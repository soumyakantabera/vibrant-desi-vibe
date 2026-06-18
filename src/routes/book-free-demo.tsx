import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { SectionHeader, WaButton } from "@/components/ui-bits";
import { Icon } from "@/components/Icon";
import { IMG } from "@/lib/images";
import { waLink } from "@/lib/whatsapp";

export const Route = createFileRoute("/book-free-demo")({
  component: Page,
  head: () => ({ meta: [
    { title: "Book Free Demo | Learn With Smile" },
    { name: "description", content: "Book a free live demo class — fill 4 fields, we confirm on WhatsApp instantly. English & Career — your choice." },
  ]}),
});

const COURSES = [
  "Spoken English","IELTS","Business English","Interactive Speaking","Interview Prep","Career Counselling",
];

function Page() {
  const [form, setForm] = useState({ name: "", phone: "", course: COURSES[0], goal: "" });
  const message = `Hi, I'd like to book a FREE demo.\n\nName: ${form.name || "—"}\nPhone: ${form.phone || "—"}\nCourse: ${form.course}\nGoal: ${form.goal || "—"}`;
  return (
    <Layout waMessage="Hi, I'd like to book a free demo." footerImage={IMG.womanLaptop}>
      <section className="relative">
        <div className="absolute inset-0 z-0"><img src={IMG.womanLaptop} alt="" className="w-full h-full object-cover"/><div className="absolute inset-0 bg-gradient-to-br from-ink/85 via-brand-deep/80 to-sunshine/35"/></div>
        <div className="container-x py-16 md:py-24 text-cream max-w-3xl">
          <span className="eyebrow eyebrow-white"><Icon name="calendar" size={14}/> Book a Free Demo</span>
          <h1 className="mt-4 text-4xl md:text-6xl text-cream leading-[1.05]">A Real Live Class. <span className="text-sunshine">Free.</span></h1>
          <p className="mt-5 text-lg text-white">Fill four quick details — we confirm your demo slot on WhatsApp in minutes.</p>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid lg:grid-cols-[1fr_1fr] gap-10 items-start">
          <div className="card-soft">
            <h2 className="text-2xl mb-4">Tell us a little about you</h2>
            <div className="space-y-4">
              <Field label="Your Name">
                <input value={form.name} onChange={e=>setForm({...form, name:e.target.value})} placeholder="e.g. Priya Sharma" className="input"/>
              </Field>
              <Field label="WhatsApp Number">
                <input value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} placeholder="+91 ..." inputMode="tel" className="input"/>
              </Field>
              <Field label="Which Course?">
                <select value={form.course} onChange={e=>setForm({...form, course:e.target.value})} className="input">
                  {COURSES.map(c => <option key={c}>{c}</option>)}
                </select>
              </Field>
              <Field label="Your Goal (optional)">
                <textarea value={form.goal} onChange={e=>setForm({...form, goal:e.target.value})} placeholder="e.g. Want to speak confidently in office meetings." className="input min-h-[90px] py-3"/>
              </Field>
              <a href={waLink(message)} target="_blank" rel="noopener noreferrer" className="btn btn-wa btn-lg w-full">
                <Icon name="whatsapp" size={18}/> Send via WhatsApp & Confirm Slot
              </a>
              <p className="text-xs text-ink/85 text-center">No spam. We only message you about your free demo and class details.</p>
            </div>
          </div>
          <div className="space-y-5">
            <img src={IMG.studentLaptop} alt="Indian learner" className="rounded-3xl shadow-lg object-cover h-[280px] w-full"/>
            <div className="card-soft bg-gradient-to-br from-brand-soft to-cream">
              <h3 className="font-display text-xl text-ink mb-2">What happens after you click send?</h3>
              <ol className="space-y-2 text-sm text-ink/90 list-decimal pl-4">
                <li>WhatsApp opens with your message pre-filled.</li>
                <li>You hit send — our team replies within minutes.</li>
                <li>We confirm the next available live demo slot.</li>
                <li>You attend the demo, no payment needed.</li>
                <li>Like it? We help you join the batch. Don't? No pressure.</li>
              </ol>
            </div>
            <WaButton message="Hi, I'd like to talk before filling the form. Please call me back." variant="primary">Prefer to chat first? Message us</WaButton>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="font-display font-bold text-sm text-ink block mb-1.5">{label}</span>
      {children}
    </label>
  );
}
