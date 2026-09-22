import { Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { FaqSection } from "@/components/FaqSection";
import { PAGES, CONTACT } from "@/lib/seo";
import { LEGAL, type LegalDoc } from "@/content/legal";

const SIBLINGS: { to: LegalDoc["path"]; label: string }[] = [
  { to: "/privacy", label: "Privacy Policy" },
  { to: "/terms", label: "Terms of Use" },
  { to: "/refunds", label: "Refunds and Cancellation" },
  { to: "/child-protection", label: "Child Protection" },
];

export function LegalPage({ path }: { path: LegalDoc["path"] }) {
  const doc = LEGAL[path];
  const seo = PAGES[path];
  return (
    <Layout>
      <section className="relative overflow-hidden bg-brand-deep">
        <div className="container-x py-12 md:py-16 max-w-3xl text-cream">
          <nav aria-label="Breadcrumb" className="text-sm text-white/90">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-sunshine font-semibold">{doc.h1}</li>
            </ol>
          </nav>
          <p className="eyebrow eyebrow-white mt-5">{doc.eyebrow}</p>
          <h1 className="mt-4 text-3xl md:text-5xl text-cream leading-[1.1]">{doc.h1}</h1>
          <p className="mt-5 text-lg text-white/95">{doc.standfirst}</p>
          <p className="mt-4 text-sm text-white/80">
            Last updated{" "}
            <time dateTime={doc.updated}>
              {new Date(doc.updated + "T00:00:00+05:30").toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
          </p>
        </div>
      </section>

      <article className="section">
        <div className="container-x max-w-3xl">
          <p className="text-sm text-ink/70 mb-10">
            These pages describe how Learn With Smile runs. They are not legal advice.
            Rights under Indian law that cannot be waived still apply.
          </p>
          {doc.sections.map((s) => (
            <section key={s.heading} className="mb-9">
              <h2 className="text-xl md:text-2xl font-display font-extrabold text-ink mb-3">
                {s.heading}
              </h2>
              {s.paragraphs.map((p) => (
                <p key={p.slice(0, 48)} className="text-ink/90 leading-relaxed mb-3">
                  {p}
                </p>
              ))}
              {s.bullets && (
                <ul className="list-disc pl-5 space-y-2 text-ink/90 leading-relaxed">
                  {s.bullets.map((b) => (
                    <li key={b.slice(0, 48)}>{b}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <section className="mb-9">
            <h2 className="text-xl md:text-2xl font-display font-extrabold text-ink mb-3">
              Contact
            </h2>
            <p className="text-ink/90 leading-relaxed">
              WhatsApp {CONTACT.phoneDisplay}. Email {CONTACT.email}. Replies 09:00–12:00 IST.
            </p>
          </section>

          <nav
            aria-label="Other policies"
            className="flex flex-wrap gap-x-5 gap-y-2 pt-6 border-t border-border text-sm"
          >
            {SIBLINGS.map((s) =>
              s.to === path ? (
                <span key={s.to} className="font-semibold text-ink">
                  {s.label}
                </span>
              ) : (
                <Link key={s.to} to={s.to} className="text-brand hover:underline">
                  {s.label}
                </Link>
              ),
            )}
          </nav>
        </div>
      </article>

      {seo?.faqs?.length ? (
        <FaqSection
          faqs={seo.faqs}
          eyebrow="Questions"
          title="Short answers"
          subtitle="The same points, in the way people usually ask."
          waMessage="Hi, I have a question on policy."
        />
      ) : null}
    </Layout>
  );
}
