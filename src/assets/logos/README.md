# Other providers' logos

Files here are shown next to a provider's name in the comparison tables
(`src/components/ProviderMark.tsx`). Name each file by the slug used in
`DIFFERENT_ROWS` (`src/lib/positioning.ts`):

    josh-skills  engvarta  cambly  preply  italki  british-council  duolingo  elsa-speak  planetspark

Accepted: `.svg`, `.png`, `.webp`. Until a file exists, a neutral name badge is
shown instead — never a redrawn or imitated logo.

Rules:

- Only the provider's **official** logo, from its own website or brand/press
  page. Keep the source URL in the commit message.
- Do not recolour, crop, stretch or combine it with our mark.
- Shown small (about 20–24 px tall), only to identify the provider in a factual
  comparison, with the trademark notice (`TrademarkNotice`) under every table.
- Remove a file promptly if its owner asks (info@learnwithsmile.app).

## Files in this folder

| File             | Provider    | Source                                 |
| ---------------- | ----------- | -------------------------------------- |
| josh-skills.webp | Josh Skills | Supplied by the site owner, 3 Nov 2026 |
| engvarta.webp    | EngVarta    | Supplied by the site owner, 3 Nov 2026 |
| cambly.webp      | Cambly      | Supplied by the site owner, 3 Nov 2026 |
| preply.webp      | Preply      | Supplied by the site owner, 3 Nov 2026 |
| italki.webp      | italki      | Supplied by the site owner, 3 Nov 2026 |

Processing (artwork unchanged), done by `scripts/polish-logos.py`: empty
margins trimmed, a plain white background made transparent by exact unmatting
(no halo), resized to 96 px tall for sharp display at 24 px, saved as WebP.

    python3 -I scripts/polish-logos.py path/to/logo.png british-council
