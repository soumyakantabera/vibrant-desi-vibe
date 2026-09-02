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
    // This is the one location-specific service page, so location metadata
    // belongs here rather than on every page of a pan-India online site.
    head.meta.push(
      { name: "geo.region", content: "IN-WB" },
      { name: "geo.placename", content: "Kolkata" },
      { name: "geo.position", content: "22.4924;88.3125" },
      { name: "ICBM", content: "22.4924, 88.3125" },
    );
    // A Service entity ties the online offering to the Kolkata audience without
    // claiming that the registered office is a walk-in teaching campus.
    head.scripts.push({
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${abs(PATH)}#service`,
        serviceType: "Spoken English Classes",
        name: "Live Spoken English for Kolkata — Max 8, ₹999/mo",
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
          Max 8 Per Batch
        </>
      }
      standfirst="Taught live from Kolkata, attended from home. ₹999/month, a hard cap of six students, and morning, evening and weekend batches on IST."
      heroImage={IMG.groupClass}
      heroAlt="Kolkata learners in a live online English class"
      body={body}
      faqs={page.faqs ?? []}
      faqTitle="Spoken English in Kolkata — Questions & Answers"
      waMessage="Hi, I'm in Kolkata and I'd like a free demo for Spoken English. Please share batch timings."
      ctaTitle="See a batch of eight for yourself"
      ctaBody="The demo is a real live class, not a sales call. Message us and we'll put you in the next available slot."
    />
  );
}
