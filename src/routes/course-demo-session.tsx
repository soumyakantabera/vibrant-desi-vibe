import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Icon } from "@/components/Icon";
import { SmartImage } from "@/components/SmartImage";
import { PaymentTrust } from "@/components/PaymentTrust";
import { FaqSection } from "@/components/FaqSection";
import { WaButton } from "@/components/ui-bits";
import { FeeText, MarketCopy } from "@/components/FeeText";
import { IMG } from "@/lib/images";
import { pageHead, PAGES } from "@/lib/seo";
import { COURSE_FEE } from "@/lib/fees";
import { intlUnit } from "@/lib/intl-fees";
import { DEMO_FAQS, DEMO_HOWTO, DEMO_SESSION } from "@/lib/demo-session";
import { BATCH_HOURS, CHAT_CTA, CONSULT_CTA, DEMO_CTA, DEMO_MSG } from "@/lib/whatsapp";

export const Route = createFileRoute("/course-demo-session")({
  component: DemoClassPage,
  head: () => pageHead(DEMO_SESSION.path),
});

const FOR_YOU = [
  "You are 15+ and ready to join a paid live course this month",
  `You can attend a live class between ${BATCH_HOURS}, up to twice a week`,
  "You want to hear the teacher and the batch before you pay for a month",
  "Your goal is daily speaking, work, interviews or confidence — not a school exam",
];

const NOT_FOR_YOU = [
  "A free lesson, free notes or PDFs — we do not send study material on WhatsApp",
  "Morning batches — every batch runs between 3pm and 10pm IST",
  "Children under 15, IELTS papers or offline classroom teaching",
  "Just checking the price — every fee is already on this page",
];

const fee = (text: string) => <FeeText text={text} />;

function DemoClassPage() {
  const page = PAGES[DEMO_SESSION.path];
  return (
    <Layout waMessage={DEMO_MSG} footerImage={IMG.teacherWoman}>
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
        <div className="container-x pt-8 pb-10 sm:py-16 md:py-20">
          <div className="hero-bob text-cream max-w-3xl">
            <Link
              to="/english-career"
              className="text-sunshine font-display font-semibold text-sm inline-flex items-center gap-1 hover:underline"
            >
              <Icon name="arrow-right" size={14} className="rotate-180" /> All courses
            </Link>
            <h1 className="mt-3 text-3xl font-extrabold leading-[1.05] text-cream sm:text-4xl md:text-6xl">
              {fee("₹99 Demo Class")}
            </h1>
            <p className="mt-4 text-base text-white sm:text-lg max-w-2xl">
              One real live class: 90 minutes with our teacher in a batch of about 6, between{" "}
              {BATCH_HOURS}. Join any course within 48 hours and the {fee("₹99")} is adjusted in
              your fee — so if you are serious, it costs you nothing.
            </p>
          </div>
          <div className="mt-6 grid w-full max-w-md grid-cols-1 overflow-hidden rounded-2xl text-left min-[420px]:grid-cols-2">
            <div className="bg-brand-deep px-4 py-3 text-white">
              <p className="text-[11px] font-display font-bold uppercase leading-tight tracking-[0.12em] text-white/90">
                Pay now
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
              <p className="mt-1 font-display text-3xl font-extrabold leading-none sm:text-4xl">
                {fee("₹0")} extra
              </p>
              <p className="mt-1 text-xs font-semibold">adjusted within 48 hours</p>
            </div>
          </div>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row" data-cta-location="hero">
            <WaButton
              message={DEMO_MSG}
              variant="sun"
              size="lg"
              className="w-full sm:w-auto justify-center"
            >
              {DEMO_CTA}
            </WaButton>
            <WaButton
              message={DEMO_MSG}
              kind="chat"
              size="lg"
              className="w-full sm:w-auto justify-center"
            >
              {CHAT_CTA}
            </WaButton>
          </div>
          <p className="mt-3 max-w-xl text-sm font-semibold text-white/95">
            WhatsApp opens with the request typed — add your goal and preferred time. We send the
            payment link and place you within 72 hours.
          </p>
          <PaymentTrust tone="dark" className="mt-4" />
        </div>
      </section>

      <section className="section" data-cta-location="fit">
        <div className="container-x">
          <p className="eyebrow eyebrow-sun">Is this for you?</p>
          <h2 className="mt-3 text-ink section-title">Book it if you are ready to start</h2>
          <p className="mt-3 max-w-2xl text-ink/80">
            The demo is a seat in a real batch, so it is for people planning to join. Courses run
            from {fee(COURSE_FEE["spoken-english"].monthly)}, inclusive of taxes, billed one month
            at a time.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <article className="card-soft">
              <h3 className="font-display font-bold text-ink">Good fit</h3>
              <ul className="mt-3 space-y-2 text-sm text-ink/90">
                {FOR_YOU.map((item) => (
                  <li key={item} className="flex gap-2">
                    <Icon name="check" size={16} className="mt-0.5 shrink-0 text-brand" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
            <article className="card-soft">
              <h3 className="font-display font-bold text-ink">Not what we offer</h3>
              <ul className="mt-3 space-y-2 text-sm text-ink/90">
                {NOT_FOR_YOU.map((item) => (
                  <li key={item} className="flex gap-2">
                    <Icon name="close" size={16} className="mt-0.5 shrink-0 text-coral-deep" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section bg-brand-soft/40">
        <div className="container-x">
          <h2 className="text-ink section-title">{DEMO_HOWTO.name}</h2>
          <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {DEMO_HOWTO.steps.map((step, i) => (
              <li key={step} className="card-soft">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand text-white font-display font-extrabold">
                  {i + 1}
                </span>
                <p className="mt-3 text-sm leading-relaxed text-ink/85">{fee(step)}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <div>
            <p className="eyebrow eyebrow-sun">Why {fee("₹99")}?</p>
            <h2 className="mt-3 text-ink section-title">
              The seat goes to someone who plans to join
            </h2>
            <p className="mt-4 text-ink/85 leading-relaxed">
              A batch has about 6 learners, and the teacher’s time is the course. The {fee("₹99")}{" "}
              only stays if you watch and leave. Join the course you sat, or any course we currently
              offer, within 48 hours and we take {fee("₹99")} off that fee.
            </p>
            <p className="mt-3 text-sm text-ink/70">
              The written rule is in our{" "}
              <Link
                to="/terms"
                hash="demo-session"
                className="font-semibold text-brand-deep underline"
              >
                Terms
              </Link>
              . Want advice before you sit a class?{" "}
              <Link to="/free-consultation" className="font-semibold text-brand-deep underline">
                {CONSULT_CTA}
              </Link>{" "}
              — a free group slot, advice not a class.
            </p>
          </div>
          <SmartImage
            src={IMG.groupClass}
            alt="Small live batch in an online English class"
            className="rounded-3xl shadow-lg h-[320px] w-full"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
        </div>
      </section>

      <FaqSection faqs={page.faqs ?? DEMO_FAQS} title="Before you pay ₹99" waMessage={DEMO_MSG} />
    </Layout>
  );
}
