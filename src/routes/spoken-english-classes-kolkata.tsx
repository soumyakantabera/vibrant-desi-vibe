import { createFileRoute } from "@tanstack/react-router";

import { GuidePage } from "@/components/GuidePage";
import { IMG } from "@/lib/images";
import { PAGES, SITE_URL, abs, pageHead } from "@/lib/seo";
import { body } from "@/content/pages/kolkata";

const PATH = "/spoken-english-classes-kolkata";

// The literal, not PATH: @tanstack/router-plugin statically analyses this
// call to generate the route tree and cannot follow a constant. With a
// variable here the route silently does not register, and the page ships with
// no canonical and no metadata -- which is what the prerender guard caught.
export const Route = createFileRoute("/spoken-english-classes-kolkata")({
  component: Page,
  head: () => {
    const head = pageHead(PATH);
    // A Service entity tying the offering to a place. The sitewide
    // LocalBusiness schema already establishes that the business is in Kolkata;
    // this says which service is offered and where it is delivered, which is
    // the part a local query needs.
    head.scripts.push({
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${abs(PATH)}#service`,
        serviceType: "Spoken English Classes",
        name: "Live Online Spoken English Classes for Kolkata Learners",
        url: abs(PATH),
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: [
          { "@type": "City", name: "Kolkata" },
          { "@type": "State", name: "West Bengal" },
          { "@type": "Country", name: "India" },
        ],
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: abs("/book-free-demo"),
          availableLanguage: ["en-IN", "hi", "bn"],
        },
      }),
    });
    return head;
  },
});

function Page() {
  const page = PAGES[PATH];
  return (
    <GuidePage
      eyebrow="Kolkata"
      breadcrumb="Spoken English Classes in Kolkata"
      h1={
        <>
          Spoken English Classes in <span className="text-sunshine">Kolkata</span> — Live Online,
          Max 6 Per Batch
        </>
      }
      standfirst="Taught live from Kolkata, attended from home. ₹999/month, a hard cap of six students, and morning, evening and weekend batches on IST."
      heroImage={IMG.groupClass}
      heroAlt="Kolkata learners in a live online English class"
      body={body}
      faqs={page.faqs ?? []}
      faqTitle="Spoken English in Kolkata — Questions & Answers"
      waMessage="Hi, I'm in Kolkata and I'd like a free demo for Spoken English. Please share batch timings."
      ctaTitle="See a batch of six for yourself"
      ctaBody="The demo is a real live class, not a sales call. Message us and we'll put you in the next available slot."
    />
  );
}
