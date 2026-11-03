import { GuidePage } from "@/components/GuidePage";
import { IMG } from "@/lib/images";
import { cityBody, getCity } from "@/lib/cities";
import { PAGES } from "@/lib/seo";

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
      standfirst={`Taught live, attended from ${city.neighborhoods}. ₹999/month, inclusive of taxes, approximately 6 learners, IST afternoon, evening and night batches.`}
      shortAnswer={`No classroom in ${city.name} — live online, around 6 learners, ₹999/month inclusive of taxes. You skip ${city.commute}.`}
      heroImage={IMG.groupClass}
      heroAlt={`${city.name} learners in a live online English class`}
      lastUpdated={page?.dateModified}
      body={cityBody(city)}
      faqs={page?.faqs ?? []}
      faqTitle={`Spoken English in ${city.name} — questions`}
      waMessage={`Hi, I am in ${city.name} and I want a free consultation for Basic Spoken English.`}
      ctaTitle="Get a free consultation for your city"
      ctaBody="Message us on WhatsApp. We discuss courses, curriculum and your requirements one by one — not a full class. Same fee everywhere in India."
    />
  );
}
