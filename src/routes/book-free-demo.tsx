import { createFileRoute } from "@tanstack/react-router";
import { PAGES, pageHead } from "@/lib/seo";
import { Layout } from "@/components/Layout";
import { FaqSection } from "@/components/FaqSection";
import { WaButton } from "@/components/ui-bits";
import { Icon } from "@/components/Icon";
import { IMG } from "@/lib/images";
import { SmartImage } from "@/components/SmartImage";

const DEMO_MSG = "Hi, I'd like a ₹0 live demo. Please share the next slot.";

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
            <Icon name="calendar" size={14} /> Book a Free Demo
          </span>
          <h1 className="mt-4 text-4xl md:text-6xl text-cream leading-[1.05]">
            A Real Live Class. <span className="text-sunshine">Free.</span>
          </h1>
          <p className="mt-5 text-lg text-white">
            Meet the teacher, see the batch and speak in a real class. One WhatsApp message. Replies
            09:00–12:00 IST. No form. No card. Then decide: from ₹999/mo.
          </p>
          <div className="mt-8" data-cta-location="hero">
            <WaButton message={DEMO_MSG} variant="sun" size="lg" goal="free_demo">
              Book ₹0 Demo on WhatsApp
            </WaButton>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1fr] items-start">
          <div className="card-soft">
            <h2 className="text-2xl mb-4">What happens when you tap WhatsApp</h2>
            <ol className="space-y-3 text-ink/90 list-decimal pl-5">
              <li>WhatsApp opens with a demo request already written.</li>
              <li>Send it anytime. We reply 09:00–12:00 IST.</li>
              <li>We confirm the next live demo slot.</li>
              <li>You attend. No payment.</li>
              <li>Like it? Join a batch. Don’t? No pressure.</li>
            </ol>
            <div className="mt-6" data-cta-location="mid">
              <WaButton
                message={DEMO_MSG}
                size="lg"
                className="w-full justify-center"
                goal="free_demo"
              >
                Open WhatsApp now
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
        title="What a Free Demo Actually Involves"
        subtitle="No form, no card, no sales call, no obligation."
        waMessage="Hi, I have a question about the free demo."
      />
    </Layout>
  );
}
