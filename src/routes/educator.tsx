import { Link, createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import {
  CO_EDUCATORS,
  EDUCATORS,
  EDUCATOR_ORDER,
  educatorPersonLd,
  type Educator,
} from "@/lib/educators";
import { Layout } from "@/components/Layout";
import { SectionHeader, WaButton } from "@/components/ui-bits";
import { Icon } from "@/components/Icon";
import { IMG } from "@/lib/images";
import { SmartImage } from "@/components/SmartImage";
import { CHAT_CTA, DEMO_CTA, DEMO_MSG } from "@/lib/whatsapp";

export const Route = createFileRoute("/educator")({
  component: Page,
  head: () => {
    const head = pageHead("/educator");
    // One Person entity per educator; the lead keeps `#person`, which course
    // pages and articles already reference.
    for (const id of EDUCATOR_ORDER) {
      head.scripts.push({
        type: "application/ld+json",
        children: JSON.stringify(educatorPersonLd(EDUCATORS[id])),
      });
    }
    return head;
  },
});

function EducatorCard({ educator: e, reverse }: { educator: Educator; reverse?: boolean }) {
  const lead = e.id === "sunanda";
  return (
    <article
      id={e.id}
      aria-labelledby={`${e.id}-name`}
      className={`scroll-mt-24 grid gap-8 lg:gap-10 items-start ${reverse ? "md:grid-cols-[1fr_280px] md:[&>*:first-child]:order-2" : "md:grid-cols-[280px_1fr]"}`}
    >
      <SmartImage
        src={e.image}
        alt={`${e.name}, ${e.role} at Learn With Smile`}
        ratio="4/5"
        position="top"
        className="rounded-3xl shadow-xl w-full max-w-[280px] mx-auto border-4 border-cream"
        sizes="(min-width: 768px) 280px, 80vw"
      />
      <div>
        <span className="eyebrow eyebrow-indigo">
          <Icon name={e.icon} size={12} /> {e.role}
        </span>
        <h2 id={`${e.id}-name`} className="mt-3 text-ink section-title">
          {e.name}
        </h2>
        <p className="mt-4 text-ink/85 leading-relaxed">{e.bio}</p>
        <p className="mt-3 text-sm text-ink/80 flex flex-wrap items-center gap-x-4 gap-y-1">
          {e.courses.map((c) => (
            <Link
              key={c.slug}
              to={c.href}
              className="inline-flex items-center gap-1.5 font-bold text-brand-deep hover:underline"
            >
              <Icon name="book" size={14} /> {c.title} course
            </Link>
          ))}
          <span className="inline-flex items-center gap-1.5">
            <Icon name="languages" size={14} className="text-brand" />
            {e.languages.map((l) => l.label).join(", ")}
          </span>
        </p>

        <div className="mt-5 grid sm:grid-cols-2 gap-3">
          <div className="card-soft bg-brand-soft/30">
            <h3 className="font-display font-bold text-ink text-sm mb-2 flex items-center gap-2">
              <Icon name="trophy" size={16} className="text-brand" />{" "}
              {lead ? "Credentials" : "Background"}
            </h3>
            <ul className="space-y-1.5 text-sm text-ink/85">
              {e.background.map((c) => (
                <li key={c} className="flex gap-2">
                  <Icon name="check" size={13} className="text-brand mt-1 shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="card-soft bg-plum-soft">
            <h3 className="font-display font-bold text-ink text-sm mb-2 flex items-center gap-2">
              <Icon name="book" size={16} className="text-coral" /> Teaches
            </h3>
            <ul className="space-y-1.5 text-sm text-ink/85">
              {e.focus.map((t) => (
                <li key={t} className="flex gap-2">
                  <Icon name="check" size={13} className="text-coral mt-1 shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-4 card-soft bg-gradient-to-br from-brand-soft to-cream">
          <h3 className="font-display font-bold text-ink mb-2 flex items-start gap-2">
            <Icon name="heart" size={16} className="mt-1 shrink-0 text-coral" />
            <span>
              {lead
                ? "What I promise every learner"
                : `What ${e.name.split(" ")[0]} promises every learner`}
            </span>
          </h3>
          <ul className="space-y-2 text-sm text-ink/85">
            {e.promises.map((p) => (
              <li key={p} className="flex gap-2">
                <Icon name="check" size={14} className="text-brand mt-0.5 shrink-0" />
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5">
          <WaButton message={e.waMessage} variant="wa" size="md">
            {lead ? CHAT_CTA : DEMO_CTA}
          </WaButton>
        </div>
      </div>
    </article>
  );
}

function Page() {
  return (
    <Layout
      waMessage="Hi, I want a free consultation with Sunanda for spoken English."
      footerImage={IMG.teacherWoman}
    >
      <section className="hero-teal relative">
        <div className="absolute inset-0 z-0">
          <SmartImage
            src={IMG.teacherWoman}
            alt="Learn With Smile educators teaching a live online English class"
            fill
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 hero-veil" />
        </div>
        <div className="hero-bob container-x pt-10 pb-12 md:py-24 text-cream max-w-3xl">
          <span className="eyebrow eyebrow-white">
            <Icon name="heart" size={14} /> Meet the Educators
          </span>
          <h1 className="mt-4 text-4xl md:text-6xl text-cream leading-[1.05]">
            One lead educator. <span className="text-sunshine">A team of trained teachers.</span>
          </h1>
          <p className="mt-4 text-lg text-white">
            Sunanda Dey leads Learn With Smile and teaches Intermediate English. Co-educators Janvi
            B., Aryakanya H. and Sneha C. teach Interactive Speaking, Basic Spoken English, and
            Spoken English through Hindi and Bengali. Every batch keeps the same teacher. About 6 in
            a batch, from ₹1,199/mo, inclusive of taxes.
          </p>
        </div>
      </section>

      {/* Team strip: who teaches what, one tap to each profile */}
      <section className="section pb-0">
        <div className="container-x">
          <SectionHeader
            eyebrow={
              <>
                <Icon name="users" size={12} /> The Team
              </>
            }
            eyebrowTone="indigo"
            title="Who teaches which course"
          />
          <ul className="mx-auto max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-3">
            {EDUCATOR_ORDER.map((id) => {
              const e = EDUCATORS[id];
              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="block h-full p-3 bg-white rounded-xl border border-border hover:border-brand transition-colors"
                  >
                    <SmartImage
                      src={e.image}
                      alt=""
                      ratio="1/1"
                      position="top"
                      className="rounded-lg w-full"
                      sizes="(min-width: 768px) 200px, 45vw"
                    />
                    <span className="mt-3 block font-display font-bold text-ink">{e.name}</span>
                    <span className="block text-sm text-brand-deep font-medium">
                      {id === "sunanda" ? "Lead Educator" : "Co-Educator"}
                    </span>
                    <span className="block text-sm text-ink/75">{e.role.split(" · ")[1]}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <EducatorCard educator={EDUCATORS.sunanda} />
        </div>
      </section>

      <section className="section bg-brand-soft/40" aria-labelledby="co-educators-heading">
        <div className="container-x">
          <SectionHeader
            eyebrow={
              <>
                <Icon name="users" size={12} /> Co-Educators
              </>
            }
            eyebrowTone="coral"
            title={<span id="co-educators-heading">The teachers who run your live batch</span>}
            subtitle="Each co-educator is trained in the Learn With Smile method and mentored by Sunanda, so every course is taught the same way: live online, about 6 learners, speaking in every class and the same teacher from the first session to the last."
          />
          <div className="space-y-16">
            {CO_EDUCATORS.map((e, i) => (
              <EducatorCard key={e.id} educator={e} reverse={i % 2 === 0} />
            ))}
          </div>
        </div>
      </section>

      <section className="hero-light section relative overflow-hidden">
        <div className="absolute inset-0 z-0 cta-wash" />
        <div className="container-x relative text-center">
          <h2 className="text-cream section-title">Talk to the educators directly.</h2>
          <p className="mt-3 text-white max-w-xl mx-auto">
            Tell us your goal and we'll match you to the right teacher. We reply on WhatsApp.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <WaButton
              message="Hi, I want a free consultation with Sunanda for spoken English."
              variant="wa"
              size="lg"
            >
              {CHAT_CTA}
            </WaButton>
            <WaButton message={DEMO_MSG} variant="sun" size="lg">
              {DEMO_CTA}
            </WaButton>
          </div>
        </div>
      </section>
    </Layout>
  );
}
