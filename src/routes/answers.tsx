import { createFileRoute, Link } from "@tanstack/react-router";

import { Layout } from "@/components/Layout";
import { Icon } from "@/components/Icon";
import { WaButton } from "@/components/ui-bits";
import { FeeText } from "@/components/FeeText";
import { ANSWER_PAGES, allCourseDeepLinks, type DeepLink } from "@/lib/deep-links";
import { PAGES, abs, pageHead } from "@/lib/seo";
import { CHAT_CTA } from "@/lib/whatsapp";

const PATH = "/answers";

export const Route = createFileRoute("/answers")({
  component: Page,
  head: () => {
    const head = pageHead(PATH);
    head.scripts.push({
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "@id": `${abs(PATH)}#collection`,
        name: PAGES[PATH].title,
        description: PAGES[PATH].description,
        url: abs(PATH),
        hasPart: allCourseDeepLinks().map((c) => ({
          "@type": "WebPage",
          url: abs(c.path),
          name: c.title,
        })),
      }),
    });
    return head;
  },
});

const GROUPS: { kind: DeepLink["kind"]; title: string }[] = [
  { kind: "section", title: "Sections" },
  { kind: "month", title: "Month by month" },
  { kind: "module", title: "Syllabus modules" },
  { kind: "faq", title: "Questions" },
];

function Page() {
  const courses = allCourseDeepLinks();
  return (
    <Layout waMessage="Hi, I read your answers page and I want a free consultation for spoken English.">
      <section className="hero-teal relative">
        <div className="absolute inset-0 z-0 band-veil" />
        <div className="hero-bob container-x relative pt-10 pb-12 md:py-20 max-w-3xl text-cream">
          <nav aria-label="Breadcrumb" className="text-sm text-white/90">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-sunshine font-semibold">Answers</li>
            </ol>
          </nav>
          <h1 className="mt-4 text-3xl md:text-5xl text-cream leading-[1.1]">
            Every answer, <span className="text-sunshine">with its own link</span>
          </h1>
          <p className="mt-5 text-lg text-white/95">
            Fees, the month-by-month roadmap, each syllabus module and every question on every
            course page — each one links straight to the answer, not the top of the page. Live
            online spoken English for adults, about 6 learners a batch,{" "}
            <FeeText text="from ₹999/month" />, inclusive of taxes.
          </p>
        </div>
      </section>

      <section className="section" id="answer-pages">
        <div className="container-x max-w-5xl">
          <h2 className="section-title text-ink">Short answers</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {ANSWER_PAGES.map((a) => (
              <li key={a.href}>
                <a
                  href={a.href}
                  className="flex min-h-12 items-center justify-between gap-3 rounded-2xl border border-border bg-white px-4 py-3 font-display font-bold text-ink transition hover:border-brand/40 hover:text-brand-deep"
                >
                  {a.label}
                  <Icon name="arrow-right" size={16} className="shrink-0 text-brand" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {courses.map((c) => (
        <section key={c.slug} className="section pt-0" id={`course-${c.slug}`}>
          <div className="container-x max-w-5xl">
            <div className="rounded-3xl border border-border bg-white p-5 md:p-7">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h2 className="font-display text-2xl font-extrabold text-ink">
                  <a href={c.path} className="hover:underline">
                    {c.title}
                  </a>
                </h2>
                <span className="font-display font-bold text-brand-deep">
                  <FeeText text={c.price} />
                </span>
              </div>
              <div className="mt-5 grid gap-6 md:grid-cols-2">
                {GROUPS.map((g) => {
                  const items = c.links.filter((l) => l.kind === g.kind);
                  if (!items.length) return null;
                  return (
                    <div key={g.kind} className={g.kind === "faq" ? "md:col-span-2" : ""}>
                      <h3 className="text-xs font-display font-bold uppercase tracking-[0.14em] text-ink/60">
                        {g.title}
                      </h3>
                      <ul className="mt-2 space-y-1.5 text-sm">
                        {items.map((l) => (
                          <li key={l.href}>
                            <a
                              href={l.href}
                              className="inline-flex items-start gap-1.5 text-ink/85 hover:text-brand-deep hover:underline"
                            >
                              <Icon
                                name="arrow-right"
                                size={14}
                                className="mt-0.5 shrink-0 text-brand"
                              />
                              <span>{l.label}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="section pt-0">
        <div className="container-x max-w-5xl text-center">
          <p className="text-ink/75">
            Every anchor on the site — every guide heading and every question — is listed in{" "}
            <a href="/llms-anchors.txt" className="font-semibold text-brand-deep underline">
              llms-anchors.txt
            </a>{" "}
            and{" "}
            <a href="/anchors.json" className="font-semibold text-brand-deep underline">
              anchors.json
            </a>
            .
          </p>
          <div className="mt-6 flex justify-center">
            <WaButton
              message="Hi, I read your answers page and I want a free consultation for spoken English."
              size="lg"
            >
              {CHAT_CTA}
            </WaButton>
          </div>
        </div>
      </section>
    </Layout>
  );
}
