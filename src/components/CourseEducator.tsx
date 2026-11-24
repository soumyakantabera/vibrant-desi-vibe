import { Link } from "@tanstack/react-router";
import { Icon } from "@/components/Icon";
import { SmartImage } from "@/components/SmartImage";
import { SectionHeader, WaButton } from "@/components/ui-bits";
import { DEMO_CTA } from "@/lib/whatsapp";
import type { Educator } from "@/lib/educators";

/**
 * "Meet your educator": the named teacher of this course, placed mid-page.
 * Built from the same parts as the Outcomes section (photo left, section
 * header, white check cards, primary CTA) so it reads as part of the page.
 */
export function CourseEducator({ educator: e, slug }: { educator: Educator; slug: string }) {
  const course = e.courses.find((c) => c.slug === slug) ?? e.courses[0];
  const firstName = e.name.split(" ")[0];
  return (
    <section className="section bg-brand-soft/30" id="educator" aria-labelledby="educator-heading">
      <div className="container-x grid md:grid-cols-[260px_1fr] lg:grid-cols-[300px_1fr] gap-8 lg:gap-12 items-center">
        <SmartImage
          src={e.image}
          alt={`${e.name}, ${e.role} at Learn With Smile`}
          ratio="4/5"
          position="top"
          className="rounded-3xl shadow-lg w-full max-w-[220px] md:max-w-[300px] mx-auto"
          sizes="(min-width: 768px) 300px, 80vw"
        />
        <div>
          <SectionHeader
            align="left"
            eyebrow={
              <>
                <Icon name="user" size={12} /> Your Educator
              </>
            }
            eyebrowTone="indigo"
            title={<span id="educator-heading">Meet {e.name}</span>}
            subtitle={
              <>
                <strong className="text-ink">
                  {e.id === "sunanda" ? "Lead Educator" : "Co-Educator"}, {course.title}.
                </strong>{" "}
                {e.headline} Teaches in {e.languages.map((l) => l.label).join(", ")}.
              </>
            }
          />
          <ul className="grid sm:grid-cols-2 gap-3">
            {e.focus.slice(0, 4).map((f) => (
              <li
                key={f}
                className="flex items-start gap-3 p-4 bg-white rounded-xl border border-border"
              >
                <span className="mt-0.5 h-6 w-6 rounded-full bg-brand text-white flex items-center justify-center shrink-0">
                  <Icon name="check" size={14} />
                </span>
                <span className="text-ink/85 text-sm leading-relaxed">{f}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <WaButton message={e.waMessage} variant="sun" size="md">
              {DEMO_CTA}
            </WaButton>
            <Link to="/educator" hash={e.id} className="btn btn-outline">
              About {firstName} <Icon name="arrow-right" size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
