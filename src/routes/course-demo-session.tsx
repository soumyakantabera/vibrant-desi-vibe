import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Icon } from "@/components/Icon";
import { SmartImage } from "@/components/SmartImage";
import { PaymentTrust } from "@/components/PaymentTrust";
import { FaqSection } from "@/components/FaqSection";
import { WaButton } from "@/components/ui-bits";
import { FeeText, MarketCopy } from "@/components/FeeText";
import { CONSULTATION_PATH } from "@/lib/consultation";
import { DEMO_FAQS, DEMO_SESSION } from "@/lib/demo-session";
import { IMG } from "@/lib/images";
import { intlUnit } from "@/lib/intl-fees";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/course-demo-session")({
  component: DemoSessionPage,
  head: () => pageHead(DEMO_SESSION.path),
});

/** Same four steps as the HowTo schema in PAGES["/course-demo-session"]. */
const STEPS = [
  {
    n: "1",
    title: "WhatsApp us",
    body: "Message us and ask for the Demo Class. We send a slot and the payment link.",
  },
  {
    n: "2",
    title: "Pay ₹99",
    body: "Inclusive of taxes. This holds your seat. We place you in a live batch within 72 hours of payment.",
  },
  {
    n: "3",
    title: "Sit the class",
    body: "90 minutes with the teacher and a batch of about 6. The same class enrolled learners attend.",
  },
  {
    n: "4",
    title: "Join if it fits",
    body: "Take admission within 48 hours and the ₹99 is adjusted against your course fee.",
  },
];

const SEE = [
  "A real batch of about 6, not a private sales pitch",
  "How the teacher corrects you, live",
  "How much you actually speak in 90 minutes",
  "Whether the level and the pace suit you",
];

function DemoSessionPage() {
  const fee = (text: string) => <FeeText text={text} />;
  const book = (
    <WaButton
      message={DEMO_SESSION.enrolMessage}
      variant="wa"
      size="lg"
      goal="whatsapp_demo"
      className="w-full sm:w-auto"
    >
      Book the {fee("₹99")} Demo Class
    </WaButton>
  );

  return (
    <Layout footerImage={IMG.teacherWoman}>
      <section className="hero-teal relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <SmartImage
            src={IMG.heroClass}
            alt="Live online English class in session"
            fill
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 hero-veil" />
        </div>
        <div className="container-x pt-8 pb-10 sm:py-16 md:py-24">
          <div className="hero-bob text-cream max-w-3xl">
            <span className="eyebrow eyebrow-white">
              <Icon name="play" size={14} /> One live class
            </span>
            <h1 className="mt-4 text-3xl font-extrabold leading-[1.05] text-cream sm:text-4xl md:text-6xl">
              Demo Class: <span className="text-sunshine">see the class before you join</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base text-white sm:text-lg">
              {fee(
                "Sit one real 90-minute live class with our teacher, in a batch of about 6, for ₹99. Join within 48 hours and the ₹99 is adjusted against your course fee.",
              )}
            </p>
          </div>
          <div className="mt-6 grid w-full max-w-md grid-cols-1 overflow-hidden rounded-2xl text-left min-[420px]:grid-cols-2">
            <div className="bg-brand-deep px-4 py-3 text-white">
              <p className="text-[11px] font-display font-bold uppercase leading-tight tracking-[0.12em] text-white/90">
                One class
              </p>
              <p className="mt-1 font-display text-3xl font-extrabold leading-none text-white sm:text-4xl">
                {fee("₹99")}
              </p>
              <p className="mt-1 text-xs font-semibold text-white/90">
                <MarketCopy inr="90 min · tax included" usd={`90 min · ${intlUnit()}`} />
              </p>
            </div>
            <div className="border-t-2 border-[#053b1e]/15 bg-[#C6FF00] px-4 py-3 text-[#053b1e] min-[420px]:border-t-0 min-[420px]:border-l-2">
              <p className="text-[11px] font-display font-bold uppercase leading-tight tracking-[0.12em]">
                If you join
              </p>
              <p className="mt-1 font-display text-xl font-extrabold leading-tight sm:text-2xl">
                Adjusted in your fee
              </p>
              <p className="mt-1 text-xs font-semibold">within 48 hours</p>
            </div>
          </div>
          <div className="mt-7" data-cta-location="hero">
            {book}
          </div>
          <p className="mt-3 max-w-xl text-sm font-semibold text-white/95">
            WhatsApp us first. We send the slot and payment link, and place you within 72 hours.
          </p>
          <PaymentTrust tone="dark" className="mt-4" />
        </div>
      </section>

      <section className="section">
        <div className="container-x grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="eyebrow eyebrow-sun">What you will see</p>
            <h2 className="mt-3 text-ink section-title">Judge the class with your own ears</h2>
            <ul className="mt-5 grid gap-3">
              {SEE.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-border bg-white p-4"
                >
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand text-white">
                    <Icon name="check" size={14} />
                  </span>
                  <span className="text-sm leading-relaxed text-ink/85">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-ink/75">
              It is one class, not a trial week. Not sure which course you need? The{" "}
              <Link to={CONSULTATION_PATH} className="font-semibold text-brand-deep underline">
                free consultation
              </Link>{" "}
              is advice, not a class, and costs nothing. The written Demo Class rule is in our{" "}
              <Link
                to="/terms"
                hash="demo-session"
                className="font-semibold text-brand-deep underline"
              >
                Terms
              </Link>
              .
            </p>
          </div>
          <SmartImage
            src={IMG.groupClass}
            alt="Small live batch in an online English class"
            className="h-[320px] w-full rounded-3xl shadow-lg"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
        </div>
      </section>

      <section className="section bg-brand-soft/40">
        <div className="container-x">
          <h2 className="text-ink section-title">How you book the seat</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step) => (
              <article key={step.n} className="card-soft">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand font-display font-extrabold text-white">
                  {step.n}
                </span>
                <h3 className="mt-3 font-display font-bold text-ink">{fee(step.title)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/85">{fee(step.body)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FaqSection
        faqs={DEMO_FAQS}
        eyebrow="Before you pay"
        title="Questions about the Demo Class"
        subtitle="Message anytime. We reply 10am–midnight IST every day."
        waMessage={DEMO_SESSION.enrolMessage}
      />

      <section
        className="hero-light relative overflow-hidden py-14 md:py-16"
        data-cta-location="final_cta"
      >
        <div className="absolute inset-0 z-0 cta-wash" />
        <div className="container-x relative max-w-2xl text-center text-cream">
          <h2 className="text-cream section-title">See the class. Then decide.</h2>
          <p className="mx-auto mt-3 max-w-xl text-white">
            {fee(
              "₹99 for one 90-minute class with the teacher, adjusted in your fee if you join within 48 hours.",
            )}
          </p>
          <div className="mt-6">{book}</div>
          <PaymentTrust tone="light" align="center" className="mt-5" />
        </div>
      </section>
    </Layout>
  );
}
