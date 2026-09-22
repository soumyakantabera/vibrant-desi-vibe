import { createFileRoute, Link } from "@tanstack/react-router";

import { Layout } from "@/components/Layout";
import { SectionHeader, WaButton } from "@/components/ui-bits";
import { PaymentTrust } from "@/components/PaymentTrust";
import { Icon } from "@/components/Icon";
import { IMG } from "@/lib/images";
import { SmartImage } from "@/components/SmartImage";
import { GUIDE_CARDS, GUIDE_GROUPS } from "@/lib/guides";
import { PAGES, abs, pageHead } from "@/lib/seo";
import { CHAT_CTA, CHAT_MSG, DEMO_CTA, DEMO_MSG } from "@/lib/whatsapp";

const PATH = "/guides";

export const Route = createFileRoute("/guides")({
  component: Page,
  head: () => {
    const head = pageHead(PATH);
    head.scripts.push({
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "@id": `${abs(PATH)}#collection`,
        name: PAGES[PATH].title,
        description: PAGES[PATH].description,
        url: abs(PATH),
        hasPart: GUIDE_CARDS.map((g) => ({
          "@type": "WebPage",
          url: abs(g.to),
          name: g.title,
        })),
      }),
    });
    return head;
  },
});

function Page() {
  return (
    <Layout
      waMessage="Hi, I read your guides and I want a free consultation."
      footerImage={IMG.blogDesk}
    >
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <SmartImage
            src={IMG.blogDesk}
            alt="Learner reading English class guides on a laptop"
            fill
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-ink/88 via-brand-deep/75 to-indigo-pop/60" />
        </div>
        <div className="container-x py-12 md:py-20 max-w-3xl text-cream">
          <nav aria-label="Breadcrumb" className="text-sm text-white/90">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-sunshine font-semibold">Guides</li>
            </ol>
          </nav>
          <span className="eyebrow eyebrow-white mt-5">
            <Icon name="book" size={14} /> Guides
          </span>
          <h1 className="mt-4 text-3xl md:text-5xl text-cream leading-[1.1]">
            English class guides — <span className="text-sunshine">fees, fit, cities</span>
          </h1>
          <p className="mt-5 text-lg text-white/95">
            Honest pages for the questions people actually ask before they message WhatsApp.
            What the free consultation actually is, which class you need, fees, beginners, IT,
            freshers, homemakers, exam-fee context, online vs a city classroom, and live batches
            in Kolkata, Mumbai, Delhi, Bengaluru, Pune, Hyderabad, Chennai, Ahmedabad, Nagpur,
            Surat, Coimbatore, Kochi, Vizag, Patna and Guwahati. From ₹999/mo, inclusive of taxes.
            Batches of around 6.
          </p>
        </div>
      </section>

      {GUIDE_GROUPS.map((group) => {
        const cards = GUIDE_CARDS.filter((g) => g.group === group.id);
        return (
          <section key={group.id} className="section pt-12 first:pt-16" id={group.id}>
            <div className="container-x">
              <SectionHeader eyebrow="Guides" title={group.title} subtitle={group.blurb} />
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {cards.map((g) => (
                  <Link
                    key={g.to}
                    to={g.to}
                    className="group flex h-full min-w-0 flex-col rounded-2xl border border-border bg-white p-4 transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <span className="mb-3 grid h-10 w-10 place-items-center rounded-xl bg-brand-soft text-brand-deep">
                      <Icon name={g.icon} size={18} />
                    </span>
                    <h2 className="font-display text-base font-extrabold leading-tight text-ink">
                      {g.title}
                    </h2>
                    <p className="mt-1.5 flex-1 text-sm leading-relaxed text-ink/80">{g.sub}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-display font-bold text-brand-deep">
                      Read guide <Icon name="arrow-right" size={14} />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="relative py-14 md:py-16 overflow-hidden" data-cta-location="final_cta">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-brand-deep via-indigo-pop to-coral" />
        <div className="container-x text-center text-cream max-w-2xl">
          <h2 className="text-cream text-2xl md:text-3xl">Still not sure which room?</h2>
          <p className="mt-3 text-white">
            Get a free consultation. We diagnose the bottleneck, answer every query, and place
            you in one course — or tell you to stay free. Not a class.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <WaButton message="Hi, I read your guides and I want a free consultation." variant="wa" size="lg">
              {CHAT_CTA}
            </WaButton>
            <WaButton message="Hi, I read your guides and I want a free consultation." variant="sun" size="lg">
              {DEMO_CTA}
            </WaButton>
          </div>
          <PaymentTrust tone="dark" align="center" className="mt-8" />
        </div>
      </section>
    </Layout>
  );
}