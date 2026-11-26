import { GuidePage } from "@/components/GuidePage";
import { Icon, type IconName } from "@/components/Icon";
import { tone } from "@/lib/tones";
import { BoloCard, BoloSays } from "@/components/mascots/BoloCard";
import { WaButton } from "@/components/ui-bits";
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
          Spoken English Classes in <span className="text-sunshine">{city.name}</span>: Live Online,
          About 6 Learners
        </>
      }
      standfirst={`Taught live, attended from ${city.neighborhoods}. ₹1,199/month, inclusive of taxes, about 6 learners, IST afternoon, evening and night batches.`}
      shortAnswer={`No classroom in ${city.name}. Classes are live online, about 6 learners, ₹1,199/month inclusive of taxes. You skip ${city.commute}.`}
      heroImage={IMG.groupClass}
      heroAlt={`${city.name} learners in a live online English class`}
      lastUpdated={page?.dateModified}
      body={cityBody(city)}
      beforeBody={
        <CityFacts
          name={city.name}
          areas={city.neighborhoods}
          waMessage={`Hi, I am in ${city.name} and I want a free consultation for Basic Spoken English.`}
        />
      }
      faqs={page?.faqs ?? []}
      faqTitle={`Questions about spoken English in ${city.name}`}
      waMessage={`Hi, I am in ${city.name} and I want a free consultation for Basic Spoken English.`}
      ctaTitle="Get a free consultation for your city"
      ctaBody="Message us on WhatsApp. We discuss courses, curriculum and your requirements one by one, not a full class. Same fee everywhere in India."
    />
  );
}

/**
 * Bolo welcome card at the top of a city page: Bolo greets the city in a
 * speech bubble, four fact chips in the chunky Bolo style, and a WhatsApp
 * button that asks about batches for this city.
 */
function CityFacts({ name, areas, waMessage }: { name: string; areas: string; waMessage: string }) {
  const facts: [IconName, string][] = [
    ["rupee", "₹1,199/month, incl. taxes"],
    ["users", "≈6 learners per batch"],
    ["globe", `Live online: no ${name} commute`],
    ["clock", "Afternoon · evening · night IST"],
  ];
  const nearby = areas.split(", ").slice(0, 3).join(", ");
  return (
    <BoloCard className="mb-8">
      <BoloSays pose="wave" size={80}>
        <p className="font-display font-extrabold leading-snug text-ink">
          Learning English in {name}?
        </p>
        <p className="mt-1 text-sm leading-relaxed text-ink/80">
          No classroom, no commute. Join a live batch from {nearby} or anywhere in {name}.
        </p>
      </BoloSays>
      <ul className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
        {facts.map(([icon, label], i) => {
          const t = tone(i);
          return (
            <li
              key={label}
              className={`flex flex-col gap-2 rounded-2xl border-2 border-b-[5px] bg-white p-3 text-sm font-display font-bold leading-snug text-ink ${t.border}`}
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
      <WaButton message={waMessage} variant="wa" className="btn-chunky mt-4 w-full">
        Ask about {name} batches on WhatsApp
      </WaButton>
    </BoloCard>
  );
}
