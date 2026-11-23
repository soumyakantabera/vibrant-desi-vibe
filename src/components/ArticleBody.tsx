import { Fragment, type ReactNode } from "react";
import { FeeText } from "@/components/FeeText";
import { Link } from "@tanstack/react-router";

import type { ArticleBody as ArticleBodyBlocks, Block } from "@/content/blog/blocks";
import { headingId } from "@/content/blog/blocks";
import { WaButton } from "@/components/ui-bits";
import { Icon } from "@/components/Icon";
import { CHAT_CTA, CONSULT_MSG, DEMO_CTA } from "@/lib/whatsapp";
import { DEMO_BAND } from "@/lib/demo-session";
import { headingIcon, tone } from "@/lib/tones";
import { BoloCard, BoloSays } from "@/components/mascots/BoloCard";

/**
 * Renders an article body (see src/content/blog/blocks.ts).
 *
 * Everything here produces plain semantic elements — h2/h3, p, ul, ol, table,
 * blockquote — because `htmlToMarkdown` in src/lib/llms.ts converts the
 * rendered markup into the article's `.md` twin, and it matches on those tags.
 * Decorative wrappers are fine; replacing a heading with a styled <div> would
 * silently drop it from the AI-readable copy of the page.
 */

const LINK = /\[([^\]]+)\]\(([^)]+)\)/g;
const BOLD = /\*\*([^*]+)\*\*/g;

/** `**bold**` and `[label](/path)` — nothing else. */
function inline(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  let last = 0;
  let key = 0;

  LINK.lastIndex = 0;
  for (let m = LINK.exec(text); m; m = LINK.exec(text)) {
    if (m.index > last) out.push(...bold(text.slice(last, m.index), () => key++));
    const [, label, href] = m;
    out.push(
      href.startsWith("/") ? (
        <Link key={`l${key++}`} to={href} className="article-link">
          {label}
        </Link>
      ) : (
        <a
          key={`l${key++}`}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="article-link"
        >
          {label}
        </a>
      ),
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(...bold(text.slice(last), () => key++));
  return out;
}

function bold(text: string, nextKey: () => number): ReactNode[] {
  const out: ReactNode[] = [];
  let last = 0;

  BOLD.lastIndex = 0;
  for (let m = BOLD.exec(text); m; m = BOLD.exec(text)) {
    if (m.index > last) out.push(text.slice(last, m.index));
    out.push(<strong key={`b${nextKey()}`}>{m[1]}</strong>);
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

export function WaStrip({ message }: { message: string }) {
  return (
    <BoloCard as="aside" className="mt-8" data-cta-location="mid_article">
      <BoloSays pose="talk" size={76}>
        <p className="font-display font-extrabold leading-snug text-ink">{DEMO_BAND.headline}</p>
        <p className="mt-1 text-sm leading-relaxed text-ink/80">
          <FeeText text={DEMO_BAND.punch} />
        </p>
        <p className="mt-1 text-xs font-semibold text-brand-deep">
          <FeeText text={DEMO_BAND.hook} />
        </p>
      </BoloSays>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <WaButton message={message} variant="sun" className="btn-chunky w-full">
          {DEMO_CTA}
        </WaButton>
        <WaButton message={message} variant="wa" className="btn-chunky w-full">
          {CHAT_CTA}
        </WaButton>
      </div>
    </BoloCard>
  );
}

/** "**Label:** text" on every item → render the list as coloured tiles. */
const LABELLED = /^\*\*[^*]+[:.]\*\*/;
/** "A: …" / "B: …" on every line → render the example as a chat. */
const SPEAKER = /^([A-Z]):\s(.*)$/;

function BlockView({ block, section }: { block: Block; section: number }) {
  const t = tone(section);
  switch (block.t) {
    case "h2":
      // The <h2> itself stays plain text so the .md twin is unchanged; the badge
      // is a decorative sibling.
      return (
        <div className="mt-12 mb-4 flex items-center gap-3">
          <span
            aria-hidden="true"
            className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl shadow-sm md:h-11 md:w-11 ${t.solid}`}
          >
            <Icon name={headingIcon(block.text, section)} size={22} />
          </span>
          <h2
            id={headingId(block.text)}
            className="font-display font-extrabold text-ink scroll-mt-24 section-title"
          >
            {block.text}
          </h2>
        </div>
      );

    case "h3":
      return (
        <h3
          id={headingId(block.text)}
          className={`mt-8 mb-3 text-lg md:text-xl font-display font-bold scroll-mt-24 ${t.text}`}
        >
          {block.text}
        </h3>
      );

    case "p":
      return <p className="mt-4 text-ink/90 leading-relaxed">{inline(block.text)}</p>;

    case "ul":
      if (block.items.length > 1 && block.items.every((item) => LABELLED.test(item))) {
        return (
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {block.items.map((item, i) => {
              const it = tone(section + i);
              return (
                <li
                  key={item}
                  className={`flex gap-3 rounded-2xl border p-4 leading-relaxed text-ink/90 ${it.soft} ${it.border}`}
                >
                  <span
                    aria-hidden="true"
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg ${it.solid}`}
                  >
                    <Icon name="check" size={16} />
                  </span>
                  <span>{inline(item)}</span>
                </li>
              );
            })}
          </ul>
        );
      }
      return (
        <ul className="mt-4 space-y-2">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3 text-ink/90 leading-relaxed">
              <Icon name="check" size={18} className={`shrink-0 mt-1 ${t.text}`} />
              <span>{inline(item)}</span>
            </li>
          ))}
        </ul>
      );

    case "ol":
      // Numbers come from a CSS counter, so no digits are added to the DOM (the
      // .md twin already numbers an <ol>).
      return (
        <ol className="mt-5 space-y-3 [counter-reset:step]">
          {block.items.map((item) => (
            <li
              key={item}
              className={`relative pl-11 text-ink/90 leading-relaxed [counter-increment:step] before:absolute before:left-0 before:top-0 before:grid before:h-8 before:w-8 before:place-items-center before:rounded-full before:font-display before:text-sm before:font-bold before:text-white before:content-[counter(step)] ${t.dot}`}
            >
              {inline(item)}
            </li>
          ))}
        </ol>
      );

    case "table":
      // Below 640px each row stacks into a card: the first cell is its title and
      // every other cell is labelled with its column via CSS, so three wordy
      // columns never scroll sideways on a phone. The explicit roles keep the
      // table semantics that `display: block` would otherwise drop.
      return (
        <figure className="mt-6">
          <div
            data-swipe=""
            className={`overflow-x-auto rounded-2xl border bg-white shadow-sm ${t.border}`}
          >
            <table role="table" className="w-full text-sm text-left border-collapse">
              <thead className="max-sm:sr-only">
                <tr role="row" className={t.solid}>
                  {block.head.map((h) => (
                    <th
                      key={h}
                      role="columnheader"
                      scope="col"
                      className="px-4 py-3 font-display font-bold whitespace-nowrap"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="max-sm:block">
                {block.rows.map((row) => (
                  <tr
                    key={row.join("|")}
                    role="row"
                    className={`border-t border-border align-top even:bg-paper max-sm:block max-sm:border-l-4 max-sm:py-3 max-sm:first:border-t-0 ${t.bar}`}
                  >
                    {row.map((cell, i) => (
                      <td
                        key={i}
                        role="cell"
                        data-label={block.head[i] || undefined}
                        className={`px-4 py-3 text-ink/90 max-sm:block max-sm:py-1 ${
                          i === 0
                            ? `font-semibold text-ink max-sm:font-display max-sm:font-bold ${t.text}`
                            : "max-sm:before:block max-sm:before:text-[11px] max-sm:before:font-display max-sm:before:font-bold max-sm:before:uppercase max-sm:before:tracking-wider max-sm:before:text-ink/60 max-sm:before:content-[attr(data-label)]"
                        }`}
                      >
                        {inline(cell)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {block.caption && (
            <figcaption className="mt-2 text-xs text-ink/75">{inline(block.caption)}</figcaption>
          )}
        </figure>
      );

    case "quote":
      return (
        <blockquote
          className={`mt-6 border-l-4 rounded-r-2xl px-5 py-4 text-ink font-display font-semibold leading-relaxed ${t.bar} ${t.soft}`}
        >
          {inline(block.text)}
        </blockquote>
      );

    case "example": {
      const chat = block.lines.length > 1 && block.lines.every((line) => SPEAKER.test(line));
      if (chat) {
        const first = SPEAKER.exec(block.lines[0])?.[1];
        return (
          <div className="mt-5 space-y-2 rounded-2xl border border-border bg-paper p-4 md:p-5">
            {block.label && (
              <div className="mb-1 text-xs uppercase tracking-wider font-display font-bold text-ink/70">
                {block.label}
              </div>
            )}
            {block.lines.map((line) => {
              const [, who, said] = SPEAKER.exec(line) ?? [];
              const left = who === first;
              return (
                <p key={line} className={`flex gap-2 ${left ? "" : "flex-row-reverse"}`}>
                  <span
                    className={`grid h-7 w-7 shrink-0 place-items-center rounded-full font-display text-xs font-bold ${
                      left ? "bg-tile-blue text-white" : "bg-tile-green text-white"
                    }`}
                  >
                    {who}
                    <span className="sr-only">:</span>
                  </span>{" "}
                  <span
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2 text-[15px] leading-relaxed text-ink shadow-sm ${
                      left ? "rounded-tl-sm bg-white" : "rounded-tr-sm bg-brand-soft"
                    }`}
                  >
                    {inline(said)}
                  </span>
                </p>
              );
            })}
          </div>
        );
      }
      return (
        <div className={`mt-5 rounded-2xl border-l-4 px-5 py-4 ${t.bar} ${t.soft}`}>
          {block.label && (
            <div
              className={`mb-2 flex items-center gap-1.5 text-xs uppercase tracking-wider font-display font-bold ${t.text}`}
            >
              <Icon name="speak" size={15} /> {block.label}
            </div>
          )}
          {block.lines.map((line) => (
            <p key={line} className="text-ink leading-relaxed text-[15px] mt-1 first:mt-0">
              {inline(line)}
            </p>
          ))}
        </div>
      );
    }

    case "cta":
      return (
        <BoloCard className="mt-10" data-cta-location="blog">
          <BoloSays pose="cheer" size={80}>
            <p className="leading-relaxed text-ink">{inline(block.text)}</p>
          </BoloSays>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {block.course === "/free-consultation" ? (
              <WaButton
                message={CONSULT_MSG}
                variant="sun"
                goal="free_consultation"
                className="btn-chunky w-full"
              >
                {block.label}
              </WaButton>
            ) : (
              <Link to={block.course} className="btn btn-sun btn-chunky w-full">
                {block.label} <Icon name="arrow-right" size={16} />
              </Link>
            )}
            <WaButton
              message="Hi, I'd like to book a free group consultation for spoken English. Please send me the booking link."
              variant="wa"
              className="btn-chunky w-full"
            >
              Chat on WhatsApp
            </WaButton>
          </div>
        </BoloCard>
      );
  }
}

export function ArticleBody({ body, waMessage }: { body: ArticleBodyBlocks; waMessage?: string }) {
  const secondH2 = body.findIndex(
    (b, i) => i > 0 && b.t === "h2" && body.slice(0, i).some((x) => x.t === "h2"),
  );
  const insertAt = secondH2 > 0 ? secondH2 : -1;

  // Each block takes the tone of the section (h2) it sits in, so a heading's
  // badge, its tables and its lists share one colour.
  let section = -1;
  const sections = body.map((b) => (b.t === "h2" ? ++section : Math.max(section, 0)));

  return (
    <div className="max-w-none">
      {body.map((block, i) => (
        <Fragment key={i}>
          {waMessage && insertAt === i ? <WaStrip message={waMessage} /> : null}
          <BlockView block={block} section={sections[i]} />
        </Fragment>
      ))}
    </div>
  );
}

export function ArticleToc({ items }: { items: { id: string; text: string }[] }) {
  if (items.length < 3) return null;
  return (
    <nav
      aria-label="On this page"
      className="mb-10 rounded-2xl border border-border bg-gradient-to-br from-white to-paper p-5 shadow-sm"
    >
      <p className="flex items-center gap-1.5 text-xs uppercase tracking-[0.14em] font-display font-bold text-ink/60">
        <Icon name="clipboard" size={14} /> On this page
      </p>
      <ol className="mt-3 space-y-1">
        {items.map((item, i) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="group inline-flex items-center gap-2.5 py-1.5 text-sm text-ink font-display font-semibold hover:text-brand-deep"
            >
              <span
                className={`grid h-6 w-6 shrink-0 place-items-center rounded-md text-xs ${tone(i).solid}`}
              >
                {i + 1}
              </span>
              <span className="group-hover:underline">{item.text}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** The snippet box under the hero on posts and guides. */
export function ShortAnswer({ text, id }: { text: string; id?: string }) {
  return (
    <div
      id={id}
      className="mb-8 flex gap-4 rounded-2xl border border-brand/25 bg-gradient-to-br from-brand-soft to-teal-soft p-5 shadow-sm"
    >
      <span
        aria-hidden="true"
        className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-sunshine text-ink shadow-sm"
      >
        <Icon name="bulb" size={22} />
      </span>
      <div>
        <p className="text-xs uppercase tracking-[0.14em] font-display font-bold text-brand-deep">
          Short answer
        </p>
        <p className="mt-1.5 text-ink leading-relaxed font-medium">{text}</p>
      </div>
    </div>
  );
}
