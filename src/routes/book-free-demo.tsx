import { createFileRoute, Link } from "@tanstack/react-router";
import { PAGES, pageHead } from "@/lib/seo";
import { Layout } from "@/components/Layout";
import { FaqSection } from "@/components/FaqSection";
import { FeatureCard, SectionHeader, WaButton } from "@/components/ui-bits";
import { Icon } from "@/components/Icon";
import { BrandIcon } from "@/components/BrandIcon";
import { IMG } from "@/lib/images";
import { SmartImage } from "@/components/SmartImage";
import { PaymentTrust } from "@/components/PaymentTrust";
import { CHAT_CTA, CHAT_MSG, DEMO_CTA, DEMO_MSG } from "@/lib/whatsapp";
import {
  CONSULTATION,
  CONSULTATION_BOTTLENECKS,
  CONSULTATION_NOT_THIS,
  CONSULTATION_QUERIES,
  CONSULTATION_STEPS,
  CONSULTATION_VS_MARKET,
  CONSULTATION_WALK_AWAY,
} from "@/lib/consultation";

export const Route = createFileRoute("/book-free-demo")({
  component: Page,
  head: () => pageHead("/book-free-demo"),
});

function Page() {
  return (
    <Layout waMessage={DEMO_MSG} footerImage={IMG.womanLaptop}>
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <SmartImage
            src={IMG.womanLaptop}
            alt="Student booking a free consultation to diagnose their English bottleneck"
            fill
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-ink/85 via-brand-deep/80 to-sunshine/35" />
        </div>
        <div className="container-x py-16 md:py-24 text-cream max-w-3xl">
          <span className="eyebrow eyebrow-white">
            <Icon name="compass" size={14} /> {DEMO_CTA}
          </span>
          <h1 className="mt-4 text-4xl md:text-6xl text-cream leading-[1.05]">
            Get Free Consultation. <span className="text-sunshine">Leave knowing the room.</span>
          </h1>
          <p className="mt-5 text-lg text-white">{CONSULTATION.what}</p>
          <div className="mt-8 flex flex-wrap gap-3" data-cta-location="hero">
            <WaButton message={CHAT_MSG} variant="wa" size="lg">
              {CHAT_CTA}
            </WaButton>
            <WaButton message={DEMO_MSG} variant="sun" size="lg" goal="free_consultation">
              {DEMO_CTA}
            </WaButton>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="What you walk away with"
            title="Exactly what you get — and what you do not"
            subtitle="Other institutes sell a free session as a class, a pitch, or 15 minutes of talk. This one is counselling. You leave with a diagnosis, one recommendation, and answers — in writing."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {CONSULTATION_WALK_AWAY.map((item) => (
              <FeatureCard key={item.title} icon={item.icon} color={item.color} title={item.title}>
                {item.body}
              </FeatureCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1fr] items-start">
          <div>
            <h2 className="text-2xl md:text-3xl mb-2">How the session works</h2>
            <p className="text-ink/80 mb-6">
              One-to-one on WhatsApp. Replies {CONSULTATION.hours}. No payment to book.
            </p>
            <ol className="space-y-4">
              {CONSULTATION_STEPS.map((step) => (
                <li key={step.title} className="flex gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand-deep">
                    {step.icon === "whatsapp" ? (
                      <BrandIcon name="whatsapp" size={18} />
                    ) : (
                      <Icon name={step.icon} size={18} />
                    )}
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-ink">{step.title}</h3>
                    <p className="mt-1 text-sm text-ink/80 leading-relaxed">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-8" data-cta-location="mid">
              <WaButton
                message={DEMO_MSG}
                variant="sun"
                size="lg"
                className="w-full justify-center sm:w-auto"
                goal="free_consultation"
              >
                {DEMO_CTA}
              </WaButton>
            </div>
          </div>
          <SmartImage
            src={IMG.studentLaptop}
            alt="Indian learner on WhatsApp preparing questions for a free English consultation"
            className="rounded-3xl shadow-lg h-[280px] w-full md:h-[420px]"
            sizes="(min-width: 1024px) 45vw, 100vw"
          />
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-x">
          <SectionHeader
            eyebrow="The diagnosis"
            title="We name the bottleneck. Then one course."
            subtitle="This is the same picker as the guides — run live, on your actual goal, not a generic table."
          />
          <figure>
            <div className="overflow-x-auto rounded-2xl border border-border bg-white">
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="bg-brand-soft/60">
                    <th scope="col" className="px-4 py-3 font-display font-bold text-ink">
                      If this is you
                    </th>
                    <th scope="col" className="px-4 py-3 font-display font-bold text-ink">
                      We name
                    </th>
                    <th scope="col" className="px-4 py-3 font-display font-bold text-ink">
                      We recommend
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {CONSULTATION_BOTTLENECKS.map((row) => (
                    <tr key={row.ifThis} className="border-t border-border align-top">
                      <td className="px-4 py-3 text-ink/90">
                        <span className="flex gap-3">
                          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand-deep">
                            <Icon name={row.icon} size={16} />
                          </span>
                          <span>{row.ifThis}</span>
                        </span>
                      </td>
                      <td className="px-4 py-3 text-ink/90">{row.weName}</td>
                      <td className="px-4 py-3 text-ink/90">
                        <Link to={row.href} className="font-display font-bold text-brand-deep hover:underline">
                          {row.weRecommend}
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <figcaption className="mt-2 text-xs text-ink/75">
              Fees inclusive of taxes. Adult rooms 15+. One room, not three. Full picker:{" "}
              <Link to="/spoken-business-or-interactive-english" className="underline">
                which class you need
              </Link>
              .
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-x grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <div>
            <h2 className="text-2xl md:text-3xl mb-3">Queries we resolve in the same session</h2>
            <p className="text-ink/80 mb-5">
              Everyone’s question about our courses, fees, batch and whether they belong here gets an
              answer. If we cannot answer it live, we say so and send it in writing.
            </p>
            <ul className="space-y-2">
              {CONSULTATION_QUERIES.map((q) => (
                <li key={q.text} className="flex gap-3 text-ink/90 leading-relaxed">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand-deep">
                    <Icon name={q.icon} size={16} />
                  </span>
                  <span className="pt-1">{q.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-coral/25 bg-[#FFF4F1] p-6">
            <h2 className="text-xl font-display font-extrabold text-[#8E2A1E] mb-3">What this is not</h2>
            <ul className="space-y-3">
              {CONSULTATION_NOT_THIS.map((item) => (
                <li key={item.text} className="flex gap-3 text-sm text-ink/90 leading-relaxed">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[#FFE0DC] text-[#8E2A1E]">
                    <Icon name={item.icon} size={16} />
                  </span>
                  <span className="pt-1">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-x">
          <SectionHeader
            eyebrow="Vs other institutes"
            title="Their free session vs ours"
            subtitle="Fit, not a trophy. Named formats. We sell one of the rows and say so."
          />
          <figure>
            <div className="overflow-x-auto rounded-2xl border border-border bg-white">
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="bg-brand-soft/60">
                    <th scope="col" className="px-4 py-3 font-display font-bold text-ink">
                      Institute type
                    </th>
                    <th scope="col" className="px-4 py-3 font-display font-bold text-ink">
                      Their free session
                    </th>
                    <th scope="col" className="px-4 py-3 font-display font-bold text-ink">
                      What we do instead
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {CONSULTATION_VS_MARKET.map((row) => (
                    <tr key={row.them} className="border-t border-border align-top">
                      <td className="px-4 py-3 font-display font-bold text-ink">
                        <span className="flex gap-3 items-start">
                          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand-deep">
                            <Icon name={row.icon} size={16} />
                          </span>
                          <span>{row.them}</span>
                        </span>
                      </td>
                      <td className="px-4 py-3 text-ink/90">
                        <span className="flex gap-2">
                          <Icon name="ban" size={14} className="text-[#8E2A1E] shrink-0 mt-0.5" />
                          <span>{row.theirSession}</span>
                        </span>
                      </td>
                      <td className="px-4 py-3 text-ink/90">
                        <span className="flex gap-2">
                          <Icon name="check" size={14} className="text-brand shrink-0 mt-0.5" />
                          <span>{row.weDoInstead}</span>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <figcaption className="mt-2 text-xs text-ink/75">
              Full 2026 fee and format table:{" "}
              <Link to="/english-institute-comparison-india" className="underline">
                compare institutes
              </Link>
              . Seven public checks, including us:{" "}
              <Link
                to="/blog/$slug"
                params={{ slug: "how-to-choose-spoken-english-class-india" }}
                className="underline"
              >
                how to choose a class
              </Link>
              .
            </figcaption>
          </figure>
        </div>
      </section>

      <FaqSection
        faqs={PAGES["/book-free-demo"].faqs ?? []}
        eyebrow="Before You Book"
        title="Questions about the consultation"
        subtitle="Message anytime. We reply 09:00–12:00 IST."
        waMessage="Hi, I have a question about the free consultation — I want to know which course fits me."
      />

      <section className="relative py-14 md:py-16 overflow-hidden" data-cta-location="final_cta">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-brand-deep via-indigo-pop to-coral" />
        <div className="container-x text-center text-cream max-w-2xl">
          <h2 className="text-cream text-2xl md:text-3xl">Bring the problem. Leave with one room.</h2>
          <p className="mt-3 text-white">
            Get Free Consultation. We diagnose the bottleneck, answer your queries, and place you in
            Spoken, Interactive, Workplace, Interview Preparation or counselling — or tell you to stay free.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <WaButton message={CHAT_MSG} variant="wa" size="lg">
              {CHAT_CTA}
            </WaButton>
            <WaButton message={DEMO_MSG} variant="sun" size="lg" goal="free_consultation">
              {DEMO_CTA}
            </WaButton>
          </div>
          <PaymentTrust tone="dark" align="center" className="mt-8" />
        </div>
      </section>
    </Layout>
  );
}
