import { createFileRoute } from "@tanstack/react-router";
import { PAGES, pageHead } from "@/lib/seo";
import { Layout } from "@/components/Layout";
import { FaqSection } from "@/components/FaqSection";
import { WaButton } from "@/components/ui-bits";
import { Icon } from "@/components/Icon";
import { IMG } from "@/lib/images";
import { SmartImage } from "@/components/SmartImage";
import { CHAT_CTA, CHAT_MSG, DEMO_CTA, DEMO_MSG } from "@/lib/whatsapp";

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
            alt="Student booking a free online demo class on a laptop"
            fill
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-ink/85 via-brand-deep/80 to-sunshine/35" />
        </div>
        <div className="container-x py-16 md:py-24 text-cream max-w-3xl">
          <span className="eyebrow eyebrow-white">
            <Icon name="spark" size={14} /> {DEMO_CTA}
          </span>
          <h1 className="mt-4 text-4xl md:text-6xl text-cream leading-[1.05]">
            Book a Free Demo. <span className="text-sunshine">On WhatsApp.</span>
          </h1>
          <p className="mt-5 text-lg text-white">
            Message us anytime. We reply 09:00–12:00 IST and confirm a slot.
          </p>
          <div className="mt-8 flex flex-wrap gap-3" data-cta-location="hero">
            <WaButton message={CHAT_MSG} variant="wa" size="lg">
              {CHAT_CTA}
            </WaButton>
            <WaButton message={DEMO_MSG} variant="sun" size="lg" goal="free_demo">
              <Icon name="spark" size={18} /> {DEMO_CTA}
            </WaButton>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1fr] items-start">
          <div className="card-soft">
            <h2 className="text-2xl mb-4">What happens when you tap WhatsApp</h2>
            <ol className="space-y-3 text-ink/90 list-decimal pl-5">
              <li>WhatsApp opens with a message ready to send.</li>
              <li>Send it anytime. We reply 09:00–12:00 IST.</li>
              <li>We confirm a slot.</li>
              <li>You join the class.</li>
            </ol>
            <div className="mt-6" data-cta-location="mid">
              <WaButton
                message={DEMO_MSG}
                variant="sun"
                size="lg"
                className="w-full justify-center"
                goal="free_demo"
              >
                <Icon name="spark" size={18} /> {DEMO_CTA}
              </WaButton>
            </div>
          </div>
          <SmartImage
            src={IMG.studentLaptop}
            alt="Indian learner in a live English class"
            className="rounded-3xl shadow-lg h-[280px] w-full md:h-[360px]"
            sizes="(min-width: 1024px) 45vw, 100vw"
          />
        </div>
      </section>

      <FaqSection
        faqs={PAGES["/book-free-demo"].faqs ?? []}
        eyebrow="Before You Book"
        title="Questions about the demo"
        subtitle="Message anytime. We reply 09:00–12:00 IST."
        waMessage="Hi, I have a question about the free demo."
      />
    </Layout>
  );
}
