import type { CountryChoice } from "@/lib/country";
import { COURSE_FEES, formatFee, type CourseSlug, type Market as FeeMarket } from "@/lib/pricing";

export function displayMarketFromChoice(choice: CountryChoice | null | undefined): FeeMarket {
  return choice?.market === "INTL" ? "INTL" : "IN";
}

export function enrolmentWaMessage(
  slug: CourseSlug,
  choice: CountryChoice | null | undefined,
  extra?: string,
): string {
  const row = COURSE_FEES[slug];
  const title = row?.title ?? slug;
  if (row?.discontinued) {
    return `Hi, I opened Spoken English for Kids. I understand enrolment is discontinued. Please help me choose an available course.`;
  }
  const country = choice?.iso2
    ? `${choice.name} (${choice.iso2})`
    : "not yet confirmed — please help me choose";
  const confirmed = Boolean(choice && !choice.needsConfirm && choice.market !== "UNKNOWN");
  const market = displayMarketFromChoice(choice);
  const fee = formatFee(slug, market, { confirmed });
  const feeBit = confirmed
    ? `Please confirm ${market === "IN" ? "India" : "international"} pricing of ${fee.label} (inclusive of applicable taxes)`
    : `Please help me confirm my country/region, currency and the applicable fee for ${title} before I enrol. I have not confirmed a fee yet`;
  const base = `Hi, I am interested in ${title}. My country/region is ${country}. ${feeBit}. Please also share a free demo slot. I understand a browser Country/Region toggle is not enrolment eligibility.`;
  return extra ? `${base} ${extra}` : base;
}

export function demoWaMessage(choice: CountryChoice | null | undefined): string {
  const country = choice?.iso2 ? `${choice.name} (${choice.iso2})` : "not yet confirmed";
  return `Hi, I'd like a free demo. My country/region is ${country}. Please share the next slot and confirm the applicable fee and currency for my enrolment country.`;
}

export function chatWaMessage(choice: CountryChoice | null | undefined): string {
  const country = choice?.iso2 ? `${choice.name} (${choice.iso2})` : "not yet confirmed";
  return `Hi, I want to improve my English. My country/region is ${country}. Please help me choose the right course and confirm the applicable fee.`;
}

export function pricingWaMessage(
  slug: CourseSlug,
  choice: CountryChoice | null | undefined,
): string {
  const title = COURSE_FEES[slug]?.title ?? slug;
  const country = choice?.iso2 ? `${choice.name} (${choice.iso2})` : "not yet confirmed";
  const market = displayMarketFromChoice(choice);
  const fee = formatFee(slug, market);
  return `Hi, please send the syllabus and confirm the fee for ${title}. My country/region is ${country}. Site shows ${fee.label}. Please confirm country, currency and the applicable fee before payment.`;
}
