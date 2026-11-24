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
import { WaButton } from "@/components/ui-bits";
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

/** Accent per educator, matching the tile on their course page. */
const ACCENT: Record<Educator["tone"], { band: string; text: string; soft: string }> = {
  green: { band: "from-tile-green to-tile-blue", text: "text-brand-deep", soft: "bg-brand-soft" },
  violet: { band: "from-tile-violet to-tile-blue", text: "text-tile-violet", soft: "bg-plum-soft" },
  coral: { band: "from-tile-red to-tile-saffron", text: "text-coral-deep", soft: "bg-terra-soft" },
  teal: { band: "from-tile-teal to-tile-saffron", text: "text-teal", soft: "bg-teal-soft" },
};

function EducatorCard({ educator: e, reverse }: { educator: Educator; reverse?: boolean }) {
  const a = ACCENT[e.tone];
  const lead = e.id === "sunanda";
  return (
    <article
      id={e.id}
      aria-labelledby={`${e.id}-name`}
      className={`scroll-mt-24 mx-auto max-w-5xl rounded-3xl border border-border bg-white/90 shadow-md p-5 sm:p-7 grid gap-6 md:gap-8 items-start ${reverse ? "md:grid-cols-[1fr_240px] md:[&>*:first-child]:order-2" : "md:grid-cols-[240px_1fr]"}`}
    >
      <div className="relative mx-auto w-full max-w-[180px] md:max-w-[240px] md:sticky md:top-24">
        <div
          aria-hidden
          className={`absolute -inset-2 rounded-[1.4rem] bg-gradient-to-br ${a.band} ${reverse ? "-rotate-2" : "rotate-2"}`}
        />
        <SmartImage
          src={e.image}
          alt={`${e.name}, ${e.role} at Learn With Smile`}
          ratio="4/5"
          position="top"
          className="relative rounded-2xl shadow-lg w-full border-4 border-cream"
          sizes="240px"
        />
      </div>
      <div>
        <span className="eyebrow eyebrow-indigo">
          <Icon name={e.icon} size={12} /> {e.role}
        </span>
        <h2
          id={`${e.id}-name`}
          className="mt-2 text-ink font-display font-bold text-2xl md:text-3xl leading-tight"
        >
          {e.name}
        </h2>
        <p className={`mt-1 text-sm font-display font-bold ${a.text}`}>{e.headline}</p>
        <p className="mt-3 text-sm text-ink/85 leading-relaxed">{e.bio}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {e.courses.map((c) => (
            <Link
              key={c.slug}
              to={c.href}
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-display font-bold text-white bg-gradient-to-r ${a.band} hover:opacity-90`}
            >
              <Icon name="book" size={14} /> {c.title} course
            </Link>
          ))}
          {e.languages.map((l) => (
            <span
              key={l.code}
              className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium text-ink ${a.soft}`}
            >
              <Icon name="languages" size={14} /> {l.label}
            </span>
          ))}
        </div>

        <div className="mt-4 grid sm:grid-cols-2 gap-3">
          <div className="card-soft bg-brand-soft/30">
            <h3 className="font-display font-bold text-ink text-sm mb-2 flex items-center gap-2">
              <Icon name="trophy" size={16} className="text-brand" /> Background
            </h3>
            <ul className="space-y-1 text-xs text-ink/85">
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
            <ul className="space-y-1 text-xs text-ink/85">
              {e.focus.map((t) => (
                <li key={t} className="flex gap-2">
                  <Icon name="check" size={13} className="text-coral mt-1 shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-3 card-soft bg-gradient-to-br from-brand-soft to-cream">
          <h3 className="font-display font-bold text-ink text-sm mb-2 flex items-start gap-2">
            <Icon name="heart" size={16} className="mt-1 shrink-0 text-coral" />
            <span>
              {lead
                ? "What I promise every learner"
                : `What ${e.name.split(" ")[0]} promises every learner`}
            </span>
          </h3>
          <ul className="space-y-1 text-xs text-ink/85">
            {e.promises.map((p) => (
              <li key={p} className="flex gap-2">
                <Icon name="check" size={14} className="text-brand mt-0.5 shrink-0" />
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4">
          <WaButton message={e.waMessage} variant="wa" size="sm">
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
          <ul className="mx-auto max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-3">
            {EDUCATOR_ORDER.map((id) => {
              const e = EDUCATORS[id];
              const a = ACCENT[e.tone];
              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="group block h-full rounded-2xl border border-border bg-white p-2.5 shadow-sm hover:shadow-lg transition-shadow"
                  >
                    <span className={`block rounded-2xl p-1 bg-gradient-to-br ${a.band}`}>
                      <SmartImage
                        src={e.image}
                        alt=""
                        ratio="1/1"
                        position="top"
                        className="rounded-xl w-full"
                        sizes="(min-width: 768px) 200px, 45vw"
                      />
                    </span>
                    <span className="mt-2 block text-sm font-display font-bold text-ink">
                      {e.name}
                    </span>
                    <span className={`block text-xs font-medium ${a.text}`}>
                      {id === "sunanda" ? "Lead Educator" : "Co-Educator"}
                    </span>
                    <span className="block text-xs text-ink/75">
                      {e.courses.map((c) => c.title).join(" · ")}
                    </span>
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
          <div className="mx-auto max-w-5xl">
            <span className="eyebrow eyebrow-coral">
              <Icon name="users" size={12} /> Co-Educators
            </span>
            <h2 id="co-educators-heading" className="mt-3 text-ink section-title">
              The teachers who run your live batch
            </h2>
            <p className="mt-3 text-ink/85 leading-relaxed">
              Each co-educator is trained in the Learn With Smile method and mentored by Sunanda, so
              every course is taught the same way: live online, about 6 learners, speaking in every
              class and the same teacher from the first session to the last.
            </p>
          </div>
          <div className="mt-8 space-y-8">
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
