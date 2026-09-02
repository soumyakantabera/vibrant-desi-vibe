import { createFileRoute } from "@tanstack/react-router";
import { SITE_URL, abs, pageHead } from "@/lib/seo";
import { Layout } from "@/components/Layout";
import { SectionHeader, WaButton } from "@/components/ui-bits";
import { Icon } from "@/components/Icon";
import { IMG } from "@/lib/images";
import { SmartImage } from "@/components/SmartImage";

export const Route = createFileRoute("/founder")({
  component: Page,
  head: () => {
    const head = pageHead("/founder");
    // A Person entity tied to the Organization is what lets Google and AI
    // assistants answer "who teaches at Learn With Smile" with a name rather
    // than a shrug — and it is the entity an E-E-A-T assessment looks for.
    head.scripts.push({
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": `${abs("/founder")}#person`,
        name: "Sunanda Dey",
        jobTitle: "Founder & Lead Teacher",
        description:
          "English and career mentor with 7 years of live online teaching experience, working with learners across India.",
        image: abs("/og/founder.jpg"),
        url: abs("/founder"),
        knowsAbout: [
          "Spoken English",
          "IELTS Preparation",
          "Workplace English",
          "Interview Preparation",
          "Career Counselling",
        ],
        knowsLanguage: ["en-IN", "hi-IN", "bn-IN"],
        worksFor: { "@id": `${SITE_URL}/#organization` },
        nationality: { "@type": "Country", name: "India" },
      }),
    });
    return head;
  },
});

function FounderCard({
  name,
  title,
  image,
  intro,
  credentials,
  teaches,
  promises,
  waMessage,
  reverse,
}: {
  name: string;
  title: string;
  image: string;
  intro: string;
  credentials: string[];
  teaches: string[];
  promises: string[];
  waMessage: string;
  reverse?: boolean;
}) {
  return (
    <div
      className={`grid lg:grid-cols-[1fr_1.3fr] gap-10 items-start ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}
    >
      <SmartImage
        src={image}
        alt={name}
        className="rounded-3xl shadow-xl h-[420px] w-full border-4 border-cream"
        sizes="(min-width: 1024px) 40vw, 100vw"
      />
      <div>
        <span className="eyebrow eyebrow-indigo">
          <Icon name="spark" size={12} /> {title}
        </span>
        <h2 className="mt-3 text-3xl md:text-5xl text-ink leading-[1.05]">{name}</h2>
        <p className="mt-4 text-ink/85 leading-relaxed">{intro}</p>

        <div className="mt-5 grid sm:grid-cols-2 gap-3">
          <div className="card-soft bg-brand-soft/30">
            <h3 className="font-display font-bold text-ink text-sm mb-2 flex items-center gap-2">
              <Icon name="trophy" size={16} className="text-brand" /> Credentials
            </h3>
            <ul className="space-y-1.5 text-sm text-ink/85">
              {credentials.map((c) => (
                <li key={c} className="flex gap-2">
                  <Icon name="check" size={13} className="text-brand mt-1 shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="card-soft bg-sunshine/10">
            <h3 className="font-display font-bold text-ink text-sm mb-2 flex items-center gap-2">
              <Icon name="book" size={16} className="text-coral" /> Teaches
            </h3>
            <ul className="space-y-1.5 text-sm text-ink/85">
              {teaches.map((t) => (
                <li key={t} className="flex gap-2">
                  <Icon name="check" size={13} className="text-coral mt-1 shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-4 card-soft bg-gradient-to-br from-brand-soft to-cream">
          <h3 className="font-display font-bold text-ink mb-2 flex items-center gap-2">
            <Icon name="heart" size={16} className="text-coral" /> What I promise every learner
          </h3>
          <ul className="space-y-2 text-sm text-ink/85">
            {promises.map((p) => (
              <li key={p} className="flex gap-2">
                <Icon name="check" size={14} className="text-brand mt-0.5 shrink-0" />
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5">
          <WaButton message={waMessage} size="md">
            Message on WhatsApp
          </WaButton>
        </div>
      </div>
    </div>
  );
}

function Page() {
  return (
    <Layout
      waMessage="Hi, I'd like to speak to the Learn With Smile founders for a free demo."
      footerImage={IMG.teacherWoman}
    >
      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <SmartImage
            src={IMG.teacherWoman}
            alt="Sunanda Dey, founder and lead teacher at Learn With Smile"
            fill
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-ink/88 via-brand-deep/80 to-indigo-pop/55" />
        </div>
        <div className="container-x py-16 md:py-24 text-cream max-w-3xl">
          <span className="eyebrow eyebrow-white">
            <Icon name="heart" size={14} /> Meet the Founder
          </span>
          <h1 className="mt-4 text-4xl md:text-6xl text-cream leading-[1.05]">
            Spoken English Teacher, Kolkata.{" "}
            <span className="text-sunshine">7 Years · 500+ Learners · From ₹999/mo.</span>
          </h1>
          <p className="mt-4 text-lg text-white">
            Sunanda Dey — founder and live spoken English teacher. Kolkata-based, teaching learners
            across India. From ₹999/mo. ₹0 demo in a real class.
          </p>
        </div>
      </section>

      {/* SUNANDA */}
      <section className="section">
        <div className="container-x">
          <FounderCard
            name="Sunanda Dey"
            title="Co-Founder · English & Career Mentor"
            image={IMG.founder}
            intro="Over 7+ years, Sunanda has dedicated herself to teaching English and empowering students to build meaningful careers — from school students and homemakers to working professionals. Her lived experience on a global platform has immersed her in diverse international environments, bringing real-world perspective into every classroom. Having personally navigated the journey of learning French and Italian, she understands the struggle firsthand — and that fuels her passion for turning the complexity of communication into something natural, confident, and achievable."
            credentials={[
              "7+ years teaching English & Career Development",
              "Global platform experience · diverse international environments",
              "Multilingual learner — French & Italian",
              "Trained 500+ learners across India",
            ]}
            teaches={[
              "Basic & Interactive Spoken English",
              "IELTS Coaching (Band 7+ focused)",
              "Workplace English for professionals",
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
          <p className="mt-3 text-white max-w-xl mx-auto">
            Tell us your goal — we'll confirm a free live demo slot on WhatsApp.
          </p>
          <div className="mt-6">
            <WaButton
              message="Hi founders, I want a free demo. Please guide me."
              variant="sun"
              size="lg"
            >
              Book Free Demo on WhatsApp
            </WaButton>
          </div>
        </div>
      </section>
    </Layout>
  );
}
