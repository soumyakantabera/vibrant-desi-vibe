import { useState, type CSSProperties, type ReactElement } from "react";
import { Link } from "@tanstack/react-router";
import { Icon } from "@/components/Icon";
import { WaButton } from "@/components/ui-bits";
import { VizIn } from "@/components/viz/Viz";
import { Chip, Head, T, type Tone } from "@/components/package/PackageSections";
import { BoloPhone } from "@/components/bolo/BoloPhone";
import { BoloParrot, type BoloPose } from "@/components/mascots/BoloParrot";
import { MithuMacaw } from "@/components/mascots/MithuMacaw";
import { BoloAppIcon } from "@/components/mascots/BoloAppIcon";
import { SpeechBubble } from "@/components/mascots/SpeechBubble";
import { useInView } from "@/components/mascots/useInView";
import { COURSE_FEE, type FeeSlug } from "@/lib/fees";
import {
  BOLO,
  BOLO_FOR_COURSE,
  BOLO_LINES,
  BOLO_MASCOTS,
  BOLO_STEPS,
  BOLO_TABS,
  type BoloTabKey,
} from "@/lib/bolo";

/**
 * Bolo sections. Two voices on purpose:
 * - The section shells (headings, cards, grids) are site tier: calm copy and
 *   the --ease-pro reveal.
 * - What sits "inside Bolo" (the phone, the birds, their speech) is app tier:
 *   casual lines and playful motion.
 */

export const BOLO_WA =
  "Hi, I'd like to know more about the Bolo practice app and which course to join. Please share the details.";

const TAB_TONE: Record<BoloTabKey, Tone> = { practice: "teal", watch: "amber", review: "plum" };

/** The pose each course's Bolo tile shows. */
export const COURSE_POSE: Record<FeeSlug, BoloPose> = {
  "spoken-english": "talk",
  "intermediate-english": "read",
  "interactive-speaking": "cheer",
  "business-english": "listen",
  "interview-preparation": "mic",
};

const PLAN_PATH: Record<FeeSlug, string> = {
  "spoken-english": "/course-spoken-english",
  "intermediate-english": "/course-intermediate-english",
  "interactive-speaking": "/course-interactive-speaking",
  "business-english": "/course-business-english",
  "interview-preparation": "/course-interview-preparation",
};

const SLUGS = Object.keys(COURSE_FEE) as FeeSlug[];

function Illustration({ children }: { children: string }) {
  return <p className="mt-3 text-center text-xs text-ink/60">{children}</p>;
}

/* ------------------------------------------------------------ homepage */

/** The one Bolo section on the homepage: copy + tab cards + a working phone. */
export function BoloSection() {
  const [tab, setTab] = useState<BoloTabKey>("practice");
  const [ref, motion] = useInView<HTMLDivElement>();
  return (
    <section className="section overflow-hidden bg-white" id="bolo">
      <div className="container-x grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
        <div ref={ref} data-motion={motion ? "on" : "off"}>
          <Head
            tone="teal"
            eyebrow={
              <>
                <BoloAppIcon size={18} /> New · the Bolo app
              </>
            }
            title={
              <>
                Meet Bolo. <span className="text-bolo-teal">English every day,</span> not just on
                class days.
              </>
            }
            sub={`${BOLO.oneLine.replace("Bolo is the Learn With Smile practice app: ", "Bolo holds ")}`}
          />
          <div className="mb-6 flex items-end gap-3">
            <BoloParrot pose="wave" size={92} decorative animated />
            <SpeechBubble tail="left">{BOLO_LINES.hello}</SpeechBubble>
          </div>
          <VizIn className="grid gap-3 sm:grid-cols-3" role="group" aria-label="Bolo tabs">
            {BOLO_TABS.map((t, i) => {
              const on = tab === t.key;
              const tone = TAB_TONE[t.key];
              return (
                <button
                  key={t.key}
                  type="button"
                  onClick={() => setTab(t.key)}
                  aria-pressed={on}
                  style={{ "--d": `${i * 80}ms` } as CSSProperties}
                  className={`viz-pop flex flex-col gap-2 rounded-2xl border-2 p-4 text-left transition duration-200 ${on ? `${T[tone].soft} border-current ${T[tone].text}` : "border-border bg-white hover:border-ink/25"}`}
                >
                  <Chip tone={tone} icon={t.icon} size="sm" />
                  <span className="font-bold text-ink">{t.label}</span>
                  <span className="text-sm text-ink/70">{t.title}</span>
                </button>
              );
            })}
          </VizIn>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Link to="/bolo" className="btn btn-primary">
              See everything in Bolo <Icon name="arrow-right" size={18} />
            </Link>
            <span className="text-sm font-semibold text-ink/70">
              Included in every course fee · login on WhatsApp after admission
            </span>
          </div>
        </div>
        <div>
          <BoloPhone tab={tab} onTab={setTab} label="Bolo app preview — try the grammar question" />
          <Illustration>
            Illustration of Bolo with sample content. Tap the tabs to explore.
          </Illustration>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- /bolo */

export function BoloHero() {
  const [ref, motion] = useInView<HTMLDivElement>();
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#E3F6F3_0%,#FFFFFF_78%)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-bolo-teal/10"
      />
      <div className="container-x relative grid items-center gap-10 py-14 md:py-20 lg:grid-cols-[1.1fr_auto] lg:gap-14">
        <div ref={ref} data-motion={motion ? "on" : "off"}>
          <p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.14em] text-bolo-teal shadow-[0_6px_18px_-12px_rgba(10,124,115,.6)]">
            <BoloAppIcon size={20} /> The Learn With Smile practice app
          </p>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] text-ink md:text-6xl">
            Bolo — <span className="text-bolo-teal">a little English every day,</span> between your
            live classes.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink/80">
            {BOLO.meaning} Daily practice with a streak, video lessons picked for your course, and a
            weekly review from your teacher — in one app, included in every course fee.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {[
              "Daily streak",
              "Practice · Watch · Review",
              "Only our teachers hear you",
              "No extra fee",
            ].map((p) => (
              <li
                key={p}
                className="inline-flex items-center gap-1.5 rounded-full border border-[#BFE6E0] bg-white px-3 py-1.5 text-sm font-bold text-ink"
              >
                <Icon name="check" size={16} className="text-bolo-teal" />
                {p}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <WaButton message={BOLO_WA} variant="wa" size="lg" goal="bolo_hero">
              Ask about Bolo on WhatsApp
            </WaButton>
            <Link to="/free-consultation" className="btn btn-outline btn-lg">
              Get a free consultation
            </Link>
          </div>
          <div className="mt-8 hidden items-end gap-1 md:flex">
            <BoloParrot pose="wave" size={120} decorative animated />
            <MithuMacaw pose="perch" size={150} decorative animated flip />
            <SpeechBubble tail="left" className="mb-24 ml-2">
              Hi! I'm Bolo, and this is my friend Mithu.
            </SpeechBubble>
          </div>
        </div>
        <div>
          <BoloPhone label="Bolo app preview" />
          <Illustration>Illustration with sample content. Try the grammar question.</Illustration>
        </div>
      </div>
    </section>
  );
}

const TAB_BIRD: Record<BoloTabKey, ReactElement> = {
  practice: <BoloParrot pose="read" size={104} decorative animated />,
  watch: <BoloParrot pose="listen" size={104} decorative animated />,
  review: <MithuMacaw pose="review" size={116} decorative animated />,
};

export function BoloThreeTabs() {
  const [ref, motion] = useInView<HTMLDivElement>();
  return (
    <section className="section bg-white" id="inside">
      <div className="container-x" ref={ref} data-motion={motion ? "on" : "off"}>
        <Head
          tone="teal"
          align="center"
          eyebrow="Three tabs, one app"
          title="Practice. Watch. Review."
          sub="Everything you do between live classes lives in one place — and your teacher sees it."
        />
        <VizIn className="grid gap-5 lg:grid-cols-3">
          {BOLO_TABS.map((t, i) => {
            const tone = TAB_TONE[t.key];
            return (
              <article
                key={t.key}
                id={t.key}
                style={{ "--d": `${i * 90}ms` } as CSSProperties}
                className="viz-pop flex flex-col overflow-hidden rounded-3xl border border-border bg-white shadow-[0_24px_50px_-40px_rgba(20,33,61,.55)]"
              >
                <div
                  className={`relative flex items-end justify-between gap-3 px-6 pt-6 ${T[tone].soft}`}
                >
                  <div className="pb-6">
                    <span
                      className={`text-xs font-extrabold uppercase tracking-[0.14em] ${T[tone].text}`}
                    >
                      Bolo · {t.label}
                    </span>
                    <h3 className="mt-1 text-xl font-bold leading-tight text-ink">{t.title}</h3>
                  </div>
                  <span className="-mb-1 shrink-0">{TAB_BIRD[t.key]}</span>
                </div>
                <div className="flex flex-1 flex-col gap-4 p-6">
                  <SpeechBubble
                    tail="bottom"
                    tone={t.key === "review" ? "mithu" : "white"}
                    className="text-sm"
                  >
                    {t.casual}
                  </SpeechBubble>
                  <p className="text-ink/80">{t.body}</p>
                  <ul className="mt-auto flex flex-col gap-2.5">
                    {t.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-sm text-ink/85">
                        <Icon
                          name="check"
                          size={18}
                          className={`mt-0.5 shrink-0 ${T[tone].text}`}
                        />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </VizIn>
      </div>
    </section>
  );
}

export function BoloTryIt() {
  return (
    <section className="section bg-bolo-mint/60" id="try">
      <div className="container-x grid items-center gap-10 lg:grid-cols-[auto_1fr] lg:gap-16">
        <div className="order-2 lg:order-1">
          <BoloPhone initial="practice" label="Bolo practice — try one question" />
          <Illustration>Sample question. Real practice is set for your course.</Illustration>
        </div>
        <div className="order-1 lg:order-2">
          <Head
            tone="teal"
            eyebrow="Try one now"
            title={
              <>
                One question. <span className="text-bolo-teal">Instant feedback.</span>
              </>
            }
            sub="This is how a Bolo practice feels. Get it right and Bolo cheers; get it wrong and you see why — then try again."
          />
          <ol className="flex flex-col gap-3">
            {[
              ["Tap “Start grammar”", "Your next practice is the orange circle on the path."],
              ["Pick a word", "Choose the word that fits the sentence."],
              ["Check", "Right answer keeps your streak going. Wrong answer shows the rule."],
            ].map(([t, b], i) => (
              <li
                key={t}
                className="flex items-start gap-4 rounded-2xl bg-white p-4 shadow-[0_12px_30px_-26px_rgba(20,33,61,.6)]"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-bolo-teal text-base font-extrabold text-white">
                  {i + 1}
                </span>
                <span>
                  <strong className="block text-ink">{t}</strong>
                  <span className="text-sm text-ink/70">{b}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export function BoloForCourses() {
  const [ref, motion] = useInView<HTMLDivElement>();
  return (
    <section className="section bg-white" id="courses">
      <div className="container-x" ref={ref} data-motion={motion ? "on" : "off"}>
        <Head
          tone="teal"
          eyebrow="Bolo for your course"
          title="Same app, practice set for your course"
          sub="Every course gets Bolo. What you practise inside it follows what you learn live."
        />
        <VizIn className="flex flex-wrap justify-center gap-4">
          {SLUGS.map((slug, i) => (
            <article
              key={slug}
              style={{ "--d": `${i * 70}ms` } as CSSProperties}
              className="viz-pop flex w-full flex-col gap-3 rounded-3xl border border-border bg-white p-5 sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.7rem)]"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-16 w-16 shrink-0 place-items-end overflow-hidden rounded-2xl bg-bolo-mint">
                  <BoloParrot
                    pose={COURSE_POSE[slug]}
                    size={58}
                    perch={false}
                    decorative
                    animated
                  />
                </span>
                <h3 className="text-lg font-bold leading-tight">
                  <Link to={PLAN_PATH[slug]} className="hover:underline">
                    {COURSE_FEE[slug].name}
                  </Link>
                </h3>
              </div>
              <p className="text-sm text-ink/80">{BOLO_FOR_COURSE[slug]}</p>
            </article>
          ))}
        </VizIn>
      </div>
    </section>
  );
}

export function MeetMascots() {
  const [ref, motion] = useInView<HTMLDivElement>();
  return (
    <section className="section bg-paper" id="mascots">
      <div className="container-x" ref={ref} data-motion={motion ? "on" : "off"}>
        <Head
          tone="teal"
          align="center"
          eyebrow="Meet the birds"
          title="Bolo and Mithu"
          sub="Two parrots who keep you company in the app. Bolo cheers your practice; Mithu brings your teacher's review."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {BOLO_MASCOTS.map((m) => {
            const bolo = m.key === "bolo";
            return (
              <article
                key={m.key}
                className={`grid items-center gap-4 overflow-hidden rounded-3xl border bg-white p-6 sm:grid-cols-[auto_1fr] ${bolo ? "border-[#BFE6E0]" : "border-[#F2C2B6]"}`}
              >
                <span
                  className={`grid place-items-center rounded-3xl p-2 ${bolo ? "bg-bolo-mint" : "bg-[#FFF3EF]"}`}
                >
                  {bolo ? (
                    <BoloParrot
                      pose="wave"
                      size={150}
                      title="Bolo, a green rose-ringed parakeet, waving"
                      animated
                    />
                  ) : (
                    <MithuMacaw
                      pose="explain"
                      size={160}
                      title="Mithu, a scarlet macaw, explaining"
                      animated
                    />
                  )}
                </span>
                <div className="flex flex-col gap-2">
                  <span
                    className={`text-xs font-extrabold uppercase tracking-[0.14em] ${bolo ? "text-bolo-teal" : "text-[#A11F1F]"}`}
                  >
                    {m.bird}
                  </span>
                  <h3 className="text-2xl font-extrabold text-ink">{m.name}</h3>
                  <p className="font-semibold text-ink">{m.role}</p>
                  <p className="text-ink/75">{m.body}</p>
                  <SpeechBubble tail="left" tone={bolo ? "white" : "mithu"} className="mt-1">
                    “{m.says}”
                  </SpeechBubble>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function BoloSteps() {
  return (
    <section className="section bg-white" id="get-bolo">
      <div className="container-x">
        <Head
          tone="teal"
          eyebrow="How you get Bolo"
          title="Three steps. No download hunt."
          sub={BOLO.access}
        />
        <VizIn as="ol" className="grid gap-4 md:grid-cols-3">
          {BOLO_STEPS.map((s, i) => (
            <li
              key={s.title}
              style={{ "--d": `${i * 90}ms` } as CSSProperties}
              className="viz-pop relative flex flex-col gap-2 rounded-3xl border border-border bg-white p-6"
            >
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-bolo-teal text-lg font-extrabold text-white">
                {i + 1}
              </span>
              <h3 className="text-lg font-bold">{s.title}</h3>
              <p className="text-ink/75">{s.body}</p>
            </li>
          ))}
        </VizIn>
        <div className="mt-6 flex flex-wrap gap-3">
          <WaButton message={BOLO_WA} variant="wa" goal="bolo_steps">
            Ask about Bolo on WhatsApp
          </WaButton>
          <Link to="/english-class-fees-india" className="btn btn-outline">
            See every fee
          </Link>
        </div>
      </div>
    </section>
  );
}

/** Small Bolo card for course pages: the tab trio with a parrot in the course pose. */
export function BoloCourseCard({ slug }: { slug: FeeSlug }) {
  const [ref, motion] = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      data-motion={motion ? "on" : "off"}
      className="grid items-center gap-5 rounded-3xl border border-[#BFE6E0] bg-bolo-mint/60 p-5 sm:grid-cols-[auto_1fr] md:p-6"
    >
      <span className="mx-auto grid h-28 w-28 place-items-end overflow-hidden rounded-3xl bg-white sm:mx-0">
        <BoloParrot pose={COURSE_POSE[slug]} size={92} perch={false} decorative animated />
      </span>
      <div className="flex flex-col gap-2">
        <p className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.14em] text-bolo-teal">
          <BoloAppIcon size={20} /> Bolo app · included
        </p>
        <p className="text-lg font-bold text-ink">{BOLO_FOR_COURSE[slug]}</p>
        <ul className="flex flex-wrap gap-2 text-sm font-bold">
          {BOLO_TABS.map((t) => (
            <li
              key={t.key}
              className={`inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 ${T[TAB_TONE[t.key]].text}`}
            >
              <Icon name={t.icon} size={15} /> {t.label}
            </li>
          ))}
        </ul>
        <Link
          to="/bolo"
          className="inline-flex w-fit items-center gap-1.5 font-bold text-bolo-teal hover:underline"
        >
          See how Bolo works <Icon name="arrow-right" size={16} />
        </Link>
      </div>
    </div>
  );
}

/** One-line pointer to /bolo for pages that are not about the package. */
export function BoloMention({ className = "" }: { className?: string }) {
  return (
    <Link
      to="/bolo"
      className={`group mt-3 flex items-center gap-3 rounded-2xl border border-[#BFE6E0] bg-white px-4 py-3 text-left shadow-[0_12px_30px_-26px_rgba(10,124,115,.7)] transition-colors duration-200 hover:border-bolo-teal ${className}`}
    >
      <BoloAppIcon size={36} />
      <span className="min-w-0 flex-1">
        <strong className="block text-sm font-extrabold text-ink">Bolo app included</strong>
        <span className="text-xs text-ink/70 sm:text-sm">
          Daily practice with a streak, video lessons, weekly teacher review
        </span>
      </span>
      <Icon name="arrow-right" size={18} className="shrink-0 text-bolo-teal" />
    </Link>
  );
}
