import { Fragment, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";

import type { ArticleBody as ArticleBodyBlocks, Block } from "@/content/blog/blocks";
import { WaButton } from "@/components/ui-bits";
import { Icon } from "@/components/Icon";

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

function BlockView({ block }: { block: Block }) {
  switch (block.t) {
    case "h2":
      return (
        <h2 className="mt-12 mb-4 text-2xl md:text-3xl font-display font-extrabold text-ink leading-tight">
          {block.text}
        </h2>
      );

    case "h3":
      return (
        <h3 className="mt-8 mb-3 text-lg md:text-xl font-display font-bold text-ink">
          {block.text}
        </h3>
      );

    case "p":
      return <p className="mt-4 text-ink/90 leading-relaxed">{inline(block.text)}</p>;

    case "ul":
      return (
        <ul className="mt-4 space-y-2">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3 text-ink/90 leading-relaxed">
              <Icon name="check" size={16} className="text-brand shrink-0 mt-1.5" />
              <span>{inline(item)}</span>
            </li>
          ))}
        </ul>
      );

    case "ol":
      return (
        <ol className="mt-4 space-y-2 list-decimal pl-5 marker:font-display marker:font-bold marker:text-brand">
          {block.items.map((item) => (
            <li key={item} className="text-ink/90 leading-relaxed pl-1">
              {inline(item)}
            </li>
          ))}
        </ol>
      );

    case "table":
      return (
        <figure className="mt-6">
          {/* Wide tables scroll inside their own box rather than making the
              whole page scroll sideways on a phone. */}
          <div className="overflow-x-auto rounded-2xl border border-border bg-white">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="bg-brand-soft/60">
                  {block.head.map((h) => (
                    <th
                      key={h}
                      scope="col"
                      className="px-4 py-3 font-display font-bold text-ink whitespace-nowrap"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row) => (
                  <tr key={row.join("|")} className="border-t border-border align-top">
                    {row.map((cell, i) => (
                      <td key={i} className="px-4 py-3 text-ink/90">
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
        <blockquote className="mt-6 border-l-4 border-sunshine bg-sunshine/10 rounded-r-2xl px-5 py-4 text-ink font-display font-semibold leading-relaxed">
          {inline(block.text)}
        </blockquote>
      );

    case "example":
      return (
        <div className="mt-5 rounded-2xl border border-border bg-cream/70 px-5 py-4">
          {block.label && (
            <div className="text-xs uppercase tracking-wider font-display font-bold text-ink/70 mb-2">
              {block.label}
            </div>
          )}
          {block.lines.map((line) => (
            <p key={line} className="text-ink/90 leading-relaxed text-[15px] mt-1 first:mt-0">
              {inline(line)}
            </p>
          ))}
        </div>
      );

    case "cta":
      return (
        <div
          className="mt-8 rounded-2xl bg-brand-deep text-cream p-6 md:p-7"
          data-cta-location="blog"
        >
          <p className="text-white/95 leading-relaxed">{inline(block.text)}</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {block.course === "/book-free-demo" ? (
              <WaButton
                message="Hi, I'd like a ₹0 live demo. Please share the next slot."
                variant="sun"
                size="sm"
                goal="free_demo"
              >
                {block.label}
              </WaButton>
            ) : (
              <Link to={block.course} className="btn btn-sun btn-sm">
                {block.label} <Icon name="arrow-right" size={14} />
              </Link>
            )}
            <WaButton
              message={`Hi, I read your article and I'd like a free demo class. Please guide me.`}
              variant="wa"
              size="sm"
            >
              Ask on WhatsApp
            </WaButton>
          </div>
        </div>
      );
  }
}

export function ArticleBody({ body }: { body: ArticleBodyBlocks }) {
  return (
    <div className="max-w-none">
      {body.map((block, i) => (
        <Fragment key={i}>
          <BlockView block={block} />
        </Fragment>
      ))}
    </div>
  );
}
