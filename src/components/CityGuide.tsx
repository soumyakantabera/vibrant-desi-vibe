import { GuidePage } from "@/components/GuidePage";
import { Icon, type IconName } from "@/components/Icon";
import { tone } from "@/lib/tones";
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
      standfirst={`Taught live, attended from ${city.neighborhoods}. ₹1,199/month, inclusive of taxes, approximately 6 learners, IST afternoon, evening and night batches.`}
      shortAnswer={`No classroom in ${city.name} — live online, around 6 learners, ₹1,199/month inclusive of taxes. You skip ${city.commute}.`}
      heroImage={IMG.groupClass}
      heroAlt={`${city.name} learners in a live online English class`}
      lastUpdated={page?.dateModified}
      body={cityBody(city)}
      beforeBody={<CityFacts name={city.name} areas={city.neighborhoods} />}
      faqs={page?.faqs ?? []}
      faqTitle={`Spoken English in ${city.name} — questions`}
      waMessage={`Hi, I am in ${city.name} and I want a free consultation for Basic Spoken English.`}
      ctaTitle="Get a free consultation for your city"
      ctaBody="Message us on WhatsApp. We discuss courses, curriculum and your requirements one by one — not a full class. Same fee everywhere in India."
    />
  );
}

/** Coloured fact chips at the top of a city page. */
function CityFacts({ name, areas }: { name: string; areas: string }) {
  const facts: [IconName, string][] = [
    ["rupee", "₹1,199/month, incl. taxes"],
    ["users", "≈6 learners per batch"],
    ["globe", `Live online — no ${name} commute`],
    ["clock", "Afternoon · evening · night IST"],
  ];
  return (
    <div className="mb-8">
      <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
        {facts.map(([icon, label], i) => {
          const t = tone(i);
          return (
            <li
              key={label}
              className={`flex flex-col gap-2 rounded-2xl border p-3.5 text-sm font-display font-bold leading-snug ${t.soft} ${t.border} ${t.text}`}
            >
              <span
                aria-hidden="true"
                className={`grid h-9 w-9 place-items-center rounded-xl ${t.solid}`}
              >
                <Icon name={icon} size={19} />
              </span>
              {label}
            </li>
          );
        })}
      </ul>
      <p className="mt-3 flex items-start gap-2 text-sm text-ink/75">
        <Icon name="location_on" size={16} className="mt-0.5 shrink-0 text-coral-deep" />
        Learners join from {areas}.
      </p>
    </div>
  );
}
