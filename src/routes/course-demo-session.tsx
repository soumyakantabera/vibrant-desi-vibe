import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Icon } from "@/components/Icon";
import { BrandIcon } from "@/components/BrandIcon";
import { SmartImage } from "@/components/SmartImage";
import { PaymentTrust } from "@/components/PaymentTrust";
import { courseFaqs, courseSeo } from "@/components/CoursePage";
import { COURSES } from "@/lib/courses";
import { DEMO_SESSION } from "@/lib/demo-session";
import { waDirect } from "@/lib/whatsapp";
import { FeeText, MarketCopy } from "@/components/FeeText";
import { intlUnit } from "@/lib/intl-fees";

const d = COURSES["demo-session"];

export const Route = createFileRoute("/course-demo-session")({
  component: DemoSessionPage,
  head: () => courseSeo(d),
});

const STEPS = [
  {
    n: "1",
    title: "WhatsApp us",
    body: "Message us first. Tell us you want the 90-minute seat. We reply with the payment link.",
  },
  {
    n: "2",
    title: "Pay ₹199",
    body: "Inclusive of taxes. This holds the seat. We schedule the session within 72 hours of payment.",
  },
  {
    n: "3",
    title: "Sit the class",
    body: "90 minutes. Real teacher. Real batch of about 6. You see the session from the front row, not a brochure.",
  },
  {
    n: "4",
    title: "Enrol if it fits",
    body: "Take admission within 48 hours — that course, or any course we offer — and the ₹199 comes off the fee.",
  },
];

function DemoSessionPage() {
  const enrol = waDirect(DEMO_SESSION.enrolMessage);
  const faqs = courseFaqs(d);
  const fee = (text: string) => <FeeText text={text} />;

  return (
    <Layout footerImage={d.footerImage}>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <SmartImage
            src={d.heroImage}
            alt="Live online English class in session"
            fill
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-ink/90 via-brand-deep/80 to-[#8F332A]/75" />
        </div>
        <div className="container-x py-10 sm:py-16 md:py-24">
          <div className="text-cream max-w-3xl">
            <Link
              to="/english-career"
              className="text-sunshine font-display font-semibold text-sm inline-flex items-center gap-1 hover:underline"
            >
              <Icon name="arrow-right" size={14} className="rotate-180" /> {d.category}
            </Link>
            <div className="mt-3 flex items-start gap-2">
              <Icon name={d.icon} size={28} className="mt-1 shrink-0 text-sunshine" />
              <h1 className="text-3xl font-extrabold leading-[1.05] text-cream sm:text-4xl md:text-6xl">
                {d.title}
              </h1>
            </div>
            <p className="mt-4 text-base text-white sm:text-lg max-w-2xl">{fee(d.tagline)}</p>
          </div>
          <div className="mt-6 grid w-full max-w-md grid-cols-1 overflow-hidden rounded-2xl text-left min-[420px]:grid-cols-2">
            <div className="bg-brand-deep px-4 py-3 text-white">
              <p className="text-[11px] font-display font-bold uppercase leading-tight tracking-[0.12em] text-white/90">
                Pay now
              </p>
              <p className="mt-1 font-display text-3xl font-extrabold leading-none text-white sm:text-4xl">
                {fee("₹199")}
              </p>
              <p className="mt-1 text-xs font-semibold text-white/90">
                <MarketCopy inr="90 min · tax included" usd={`90 min · ${intlUnit()}`} />
              </p>
            </div>
            <div className="border-t-2 border-[#053b1e]/15 bg-[#C6FF00] px-4 py-3 text-[#053b1e] min-[420px]:border-t-0 min-[420px]:border-l-2">
              <p className="text-[11px] font-display font-bold uppercase leading-tight tracking-[0.12em]">
                If you enrol
              </p>
              <p className="mt-1 font-display text-3xl font-extrabold leading-none sm:text-4xl">
                {fee("₹0")}
              </p>
              <p className="mt-1 text-xs font-semibold">within 48 hours</p>
            </div>
          </div>
          <div className="mt-7">
            <a
              href={enrol}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-wa btn-lg w-full sm:w-auto"
              data-cta-goal="whatsapp_demo"
            >
              <BrandIcon name="whatsapp" size={18} color="#053b1e" /> Enrol for {fee("₹199")}
            </a>
          </div>
          <p className="mt-3 max-w-xl text-sm font-semibold text-white/95">
            WhatsApp us, then pay. We place you within 72 hours of payment.
          </p>
          <PaymentTrust tone="dark" className="mt-4" />
        </div>
      </section>

      <section className="section">
        <div className="container-x grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <div>
            <p className="eyebrow eyebrow-sun">Why {fee("₹199")} is not the price</p>
            <h2 className="mt-3 text-3xl md:text-4xl text-ink">
              Serious about a course? This session is free.
            </h2>
            <p className="mt-4 text-ink/85 leading-relaxed">
              The {fee("₹199")} only stays if you look and leave. Join the course you just sat, or any
              course we currently offer, within 48 hours of the class, and we take {fee("₹199")} off
              that fee. You saw the teacher. You saw the batch. You did not pay extra for the
              privilege.
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
              .
            </p>
          </div>
          <SmartImage
            src={d.midImage}
            alt="Small live batch in an online English class"
            className="rounded-3xl shadow-lg h-[320px] w-full"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
        </div>
      </section>

      <section className="section bg-brand-soft/40">
        <div className="container-x">
          <h2 className="text-2xl md:text-3xl text-ink">How you get the seat</h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {STEPS.map((step) => (
              <article key={step.n} className="card-soft">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand text-white font-display font-extrabold">
                  {step.n}
                </span>
                <h3 className="mt-3 font-display font-bold text-ink">{fee(step.title)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/85">{fee(step.body)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl text-ink">What you will see</h2>
            <ul className="mt-5 grid gap-3">
              {d.outcomes.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-border bg-white p-4"
                >
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand text-white">
                    <Icon name="check" size={14} />
                  </span>
                  <span className="text-sm leading-relaxed text-ink/85">{fee(item)}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-4">
            {d.modules.map((mod, i) => (
              <article key={mod.title} className="card-soft">
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-indigo-pop/10 font-display font-extrabold text-indigo-pop">
                    {i + 1}
                  </span>
                  <h3 className="font-display font-bold text-ink">{fee(mod.title)}</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-ink/90">
                  {mod.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <Icon name="check" size={14} className="mt-0.5 shrink-0 text-brand" />
                      {fee(item)}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-cream" id="faq">
        <div className="container-x max-w-3xl">
          <h2 className="text-2xl md:text-3xl text-ink">Before you pay</h2>
          <div className="mt-6 grid gap-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="card-soft" open>
                <summary className="cursor-pointer list-none font-display font-bold text-ink">
                  {fee(faq.q)}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-ink/85">{fee(faq.a)}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-16 md:py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-deep via-indigo-pop to-coral" />
        <div className="container-x relative text-center text-cream">
          <h2 className="text-3xl md:text-4xl text-cream">See the class. Then decide.</h2>
          <p className="mx-auto mt-3 max-w-xl text-white">
            {fee("₹199")} for 90 minutes with the teacher. Nothing extra if you enrol within 48 hours.
          </p>
          <a
            href={enrol}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-wa btn-lg mt-6 w-full sm:w-auto"
            data-cta-goal="whatsapp_demo"
          >
            <BrandIcon name="whatsapp" size={18} color="#053b1e" /> Enrol for {fee("₹199")}
          </a>
          <PaymentTrust tone="dark" align="center" className="mt-5" />
        </div>
      </section>
    </Layout>
  );
}
