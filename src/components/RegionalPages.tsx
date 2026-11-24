import { GuidePage } from "@/components/GuidePage";
import { IMG } from "@/lib/images";
import { NEEDS, type NeedKey } from "@/lib/needs";
import { STATE_BY_SLUG } from "@/lib/states";
import { PAGES } from "@/lib/seo";
import { needBody, stateBody } from "@/lib/regional-pages";

export function StatePage({ slug }: { slug: string }) {
  const st = STATE_BY_SLUG[slug];
  const page = PAGES[st.path];
  return (
    <GuidePage
      eyebrow={`${st.name} · live online`}
      breadcrumb={`Spoken English in ${st.name}`}
      h1={
        <>
          Spoken English for <span className="text-sunshine">{st.name}</span> — live online, about 6
          learners
        </>
      }
      standfirst={`${st.cities.slice(0, 4).join(", ")} and the rest of ${st.name}: live classes, daily practice in the Bolo app and a weekly teacher review — from ₹999/month, inclusive of taxes.`}
      shortAnswer={`${st.intro} From ₹999/month, inclusive of taxes.`}
      heroImage={IMG.groupClass}
      heroAlt={`Learners from ${st.name} in a live online English class`}
      lastUpdated={page?.dateModified}
      body={stateBody(st)}
      faqs={page?.faqs ?? []}
      faqTitle={`Spoken English in ${st.name} — questions`}
      waMessage={`Hi, I am from ${st.name} and I want a free consultation for spoken English.`}
      ctaTitle={`Get a free consultation — ${st.name}`}
      ctaBody="Message us on WhatsApp. We find your speaking gap and recommend one course, with the fee in writing."
    />
  );
}

export function NeedGuide({ need }: { need: NeedKey }) {
  const n = NEEDS[need];
  const page = PAGES[n.path];
  return (
    <GuidePage
      eyebrow={n.eyebrow}
      breadcrumb={n.h1}
      h1={n.h1}
      standfirst={n.standfirst}
      shortAnswer={n.shortAnswer}
      heroImage={IMG.manOffice}
      heroAlt={`${n.label}: practising spoken English for the next step`}
      lastUpdated={page?.dateModified}
      body={needBody(n)}
      faqs={page?.faqs ?? []}
      faqTitle={`${n.h1} — questions`}
      waMessage={n.waMessage}
      ctaTitle="Get a free consultation"
      ctaBody="Tell us the job, exam interview or course you are preparing for. We recommend one course, with the fee in writing."
    />
  );
}
