import { GuidePage } from "@/components/GuidePage";
import { IMG } from "@/lib/images";
import { cityBody, getCity } from "@/lib/cities";
import { PAGES, SITE_URL, abs, pageHead } from "@/lib/seo";

export function cityHead(slug: string) {
  const city = getCity(slug);
  const head = pageHead(city.path);
  head.meta.push(
    { name: "geo.region", content: city.geoRegion },
    { name: "geo.placename", content: city.name },
    { name: "geo.position", content: `${city.lat};${city.lng}` },
    { name: "ICBM", content: `${city.lat}, ${city.lng}` },
  );
  head.scripts.push({
    type: "application/ld+json",
    children: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${abs(city.path)}#service`,
      serviceType: "Spoken English Classes",
      name: `Live Spoken English for ${city.name} — Approx. 6 learners, ₹999/mo, inclusive of taxes`,
      url: abs(city.path),
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: [
        { "@type": "City", name: city.name },
        { "@type": "State", name: city.state },
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
}

export function CityGuide({ slug }: { slug: string }) {
  const city = getCity(slug);
  const page = PAGES[city.path];
  return (
    <GuidePage
      eyebrow={city.name}
      breadcrumb={`Spoken English classes in ${city.name}`}
      h1={
        <>
          Spoken English Classes in <span className="text-sunshine">{city.name}</span> — Live
          Online, Approx. 6 Learners
        </>
      }
      standfirst={`Taught live, attended from ${city.neighborhoods}. ₹999/month, inclusive of taxes, approximately 6 learners, IST morning, evening and weekend batches.`}
      shortAnswer={`No walk-in campus in ${city.name}. Live online, around 6 learners, ₹999/month inclusive of taxes. You skip ${city.commute}.`}
      heroImage={IMG.groupClass}
      heroAlt={`${city.name} learners in a live online English class`}
      lastUpdated={page?.dateModified}
      body={cityBody(city)}
      faqs={page?.faqs ?? []}
      faqTitle={`Spoken English in ${city.name} — questions`}
      waMessage={`Hi, I am in ${city.name} and I want a free consultation for Basic Spoken English.`}
      ctaTitle="Get a free consultation for your city"
      ctaBody="Message us on WhatsApp. We discuss courses, curriculum and your requirements one by one — not a full class. Same fee as Kolkata, Mumbai or Kochi."
    />
  );
}