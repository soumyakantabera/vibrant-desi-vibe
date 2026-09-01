import { createFileRoute } from "@tanstack/react-router";
import { PAGES, pageHead } from "@/lib/seo";
import { useState, type FormEvent } from "react";
import { Layout } from "@/components/Layout";
import { FaqSection } from "@/components/FaqSection";
import { SectionHeader, WaButton } from "@/components/ui-bits";
import { Icon } from "@/components/Icon";
import { IMG } from "@/lib/images";
import { SmartImage } from "@/components/SmartImage";
import {
  CALL_LINK,
  createLeadId,
  getCampaignAttribution,
  leadContext,
  waLink,
} from "@/lib/whatsapp";
import { track } from "@/lib/analytics";

export const Route = createFileRoute("/book-free-demo")({
  component: Page,
  head: () => pageHead("/book-free-demo"),
});

const COURSES = [
  "Spoken English",
  "IELTS",
  "Business English",
  "Interactive Speaking",
  "Interview Prep",
  "Career Counselling",
];

function Page() {
  const [form, setForm] = useState({ name: "", phone: "", course: COURSES[0], goal: "" });
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const name = form.name.trim();
    const phone = form.phone.replace(/\D/g, "");

    if (name.length < 2) {
      setError("Please enter your name so we know who to ask for.");
      return;
    }
    if (phone.length < 10 || phone.length > 15) {
      setError("Enter a valid WhatsApp number with at least 10 digits.");
      return;
    }

    setError("");
    const attribution = getCampaignAttribution();
    const leadId = createLeadId();
    const message = [
      "Hi, I'd like to book a ₹0 LIVE demo.",
      "",
      `Name: ${name}`,
      `Phone: ${form.phone.trim()}`,
      `Course: ${form.course}`,
      `Goal: ${form.goal.trim() || "Please help me choose"}`,
      "",
      leadContext(leadId, attribution),
    ].join("\n");

    track("demo_form_submit", {
      lead_id: leadId,
      course: form.course,
      source: attribution.source,
      medium: attribution.medium,
      campaign: attribution.campaign,
    });

    const destination = waLink(message);
    const popup = window.open(destination, "_blank");
    if (popup) popup.opener = null;
    else window.location.assign(destination);
  }

  return (
    <Layout waMessage="Hi, I'd like to book a free demo." footerImage={IMG.womanLaptop}>
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <SmartImage
            src={IMG.womanLaptop}
            alt="Student booking a free online demo class on a laptop"
            fill
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-ink/85 via-brand-deep/80 to-sunshine/35" />
        </div>
        <div className="container-x py-16 md:py-24 text-cream max-w-3xl">
          <span className="eyebrow eyebrow-white">
            <Icon name="calendar" size={14} /> Book a Free Demo
          </span>
          <h1 className="mt-4 text-4xl md:text-6xl text-cream leading-[1.05]">
            A Real Live Class. <span className="text-sunshine">Free.</span>
          </h1>
          <p className="mt-5 text-lg text-white">
            Meet the teacher, see the batch and speak in a real class. No card, no payment and no
            sales presentation disguised as a lesson.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid lg:grid-cols-[1fr_1fr] gap-10 items-start">
          <div className="card-soft">
            <h2 className="text-2xl mb-4">Tell us a little about you</h2>
            <form className="space-y-4" onSubmit={handleSubmit} noValidate>
              <Field htmlFor="demo-name" label="Your Name" required>
                <input
                  id="demo-name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="e.g. Priya Sharma"
                  autoComplete="name"
                  required
                  minLength={2}
                  maxLength={80}
                  className="input"
                />
              </Field>
              <Field htmlFor="demo-phone" label="WhatsApp Number" required>
                <input
                  id="demo-phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="e.g. +91 98765 43210"
                  inputMode="tel"
                  autoComplete="tel"
                  required
                  minLength={10}
                  maxLength={20}
                  aria-describedby={error ? "demo-form-error" : undefined}
                  className="input"
                />
              </Field>
              <Field htmlFor="demo-course" label="Which Course?" required>
                <select
                  id="demo-course"
                  name="course"
                  value={form.course}
                  onChange={(e) => setForm({ ...form, course: e.target.value })}
                  required
                  className="input"
                >
                  {COURSES.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </Field>
              <Field htmlFor="demo-goal" label="Your Goal (optional)">
                <textarea
                  id="demo-goal"
                  name="goal"
                  value={form.goal}
                  onChange={(e) => setForm({ ...form, goal: e.target.value })}
                  placeholder="e.g. Want to speak confidently in office meetings."
                  maxLength={500}
                  className="input min-h-[90px] py-3"
                />
              </Field>
              {error && (
                <p id="demo-form-error" className="text-sm font-semibold text-coral" role="alert">
                  {error}
                </p>
              )}
              <button type="submit" className="btn btn-wa btn-lg w-full">
                <Icon name="whatsapp" size={18} /> Send via WhatsApp & Confirm Slot
              </button>
              <p className="text-xs text-ink/85 text-center">
                Your details go only into the WhatsApp message you send. No hidden signup and no
                third-party form tool.
              </p>
            </form>
          </div>
          <div className="space-y-5">
            <SmartImage
              src={IMG.studentLaptop}
              alt="Indian learner"
              className="rounded-3xl shadow-lg h-[280px] w-full"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
            <div className="card-soft bg-gradient-to-br from-brand-soft to-cream">
              <h3 className="font-display text-xl text-ink mb-2">
                What happens after you click send?
              </h3>
              <ol className="space-y-2 text-sm text-ink/90 list-decimal pl-4">
                <li>WhatsApp opens with your message pre-filled.</li>
                <li>You hit send — our team replies during 09:00–12:00 IST.</li>
                <li>We confirm the next available live demo slot.</li>
                <li>You attend the demo, no payment needed.</li>
                <li>Like it? We help you join the batch. Don't? No pressure.</li>
              </ol>
            </div>
            <div className="grid sm:grid-cols-2 gap-3" data-cta-location="final_cta">
              <a href={CALL_LINK} className="btn btn-primary justify-center">
                <Icon name="phone" size={17} /> Call Now
              </a>
              <WaButton
                message="Hi, I'd like to talk before filling the form. Please guide me."
                variant="wa"
                className="justify-center"
              >
                Ask on WhatsApp
              </WaButton>
            </div>
          </div>
        </div>
      </section>

      <FaqSection
        faqs={PAGES["/book-free-demo"].faqs ?? []}
        eyebrow="Before You Book"
        title="What a Free Demo Actually Involves"
        subtitle="No card, no sales call, no obligation."
        waMessage="Hi, I have a question about the free demo."
      />
    </Layout>
  );
}

function Field({
  htmlFor,
  label,
  required,
  children,
}: {
  htmlFor: string;
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="font-display font-bold text-sm text-ink block mb-1.5">
        {label}{" "}
        {required && (
          <span className="text-coral" aria-hidden="true">
            *
          </span>
        )}
      </span>
      {children}
    </label>
  );
}
