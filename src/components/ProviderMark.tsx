/**
 * How another provider is identified in a comparison table: its official logo
 * if the file has been added to src/assets/logos/, otherwise a neutral badge
 * with its initial and name in our own colours. Never an imitation of their
 * artwork. Rules for the files: src/assets/logos/README.md.
 */
const FILES = import.meta.glob<string>("../assets/logos/*.{svg,png,webp}", {
  eager: true,
  import: "default",
  query: "?url",
});

const LOGO_URL: Record<string, string> = Object.fromEntries(
  Object.entries(FILES).map(([path, url]) => [
    path.replace(/^.*\//, "").replace(/\.(svg|png|webp)$/, ""),
    url,
  ]),
);

/**
 * Decorative: the provider's name is always written next to the mark, so the
 * image carries no alt text of its own (a screen reader would read it twice).
 */
export function ProviderMark({ slug, name }: { slug: string; name: string }) {
  const url = LOGO_URL[slug];
  if (url)
    return (
      <img
        src={url}
        alt=""
        aria-hidden
        title={name}
        height={24}
        className="h-6 w-auto max-w-[6.5rem] shrink-0 object-contain object-left"
        loading="lazy"
        decoding="async"
      />
    );
  return (
    <span
      aria-hidden
      className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-ink/8 text-[11px] font-bold text-ink/70 ring-1 ring-ink/10"
    >
      {name.charAt(0).toUpperCase()}
    </span>
  );
}

export function TrademarkNotice({ className = "" }: { className?: string }) {
  return (
    <p className={`text-xs leading-relaxed text-ink/60 ${className}`.trim()}>
      Names and logos of other providers are trademarks of their respective owners, shown only to
      identify them in a factual comparison. Learn With Smile is not affiliated with, endorsed or
      sponsored by any of them, and no copyright or trademark infringement is intended. Facts come
      from each provider's public pages; prices and terms change, so confirm on their site before
      you pay. A trademark owner who wants their mark removed can write to{" "}
      <a className="underline" href="mailto:info@learnwithsmile.app">
        info@learnwithsmile.app
      </a>
      .
    </p>
  );
}
