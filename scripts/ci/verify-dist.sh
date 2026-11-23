#!/usr/bin/env bash
# Checks the built site in dist/ before it is published. Run by
# .github/workflows/deploy.yml after the build; run it locally the same way:
#   bun run build:pages && bash scripts/ci/verify-dist.sh
#
# Fails the deploy if the prerender silently regressed to a blank SPA shell —
# the exact failure this pipeline exists to prevent — or if the sitemap, the
# AI files, the fees or the WhatsApp-first contact rule went missing.
set -euo pipefail
cd "$(dirname "$0")/../.."

# 404.html only ever serves genuinely missing URLs (every real route is a
# static file, see scripts/prerender.mjs). It is the SPA shell rather than a
# prerendered page so the client router can still resolve anything added after
# this build. .nojekyll stops Pages from dropping dot-directories.
cp dist-prerender/spa-shell.html dist/404.html
touch dist/.nojekyll

# One page of each shape. The blog sample is picked dynamically rather
# than by slug so renaming an article cannot silently drop the check —
# articles are a dynamic route and so the most likely thing to
# regress to a client-rendered blank shell.
blog_sample=$(ls dist/blog/*.html | head -1)
for file in dist/index.html dist/course-career-counselling.html dist/course-spoken-english.html \
            dist/about-us.html dist/privacy.html dist/terms.html dist/refunds.html \
            dist/child-protection.html \
            dist/spoken-english-classes-kolkata.html "$blog_sample"; do
  if ! grep -q 'rel="canonical"' "$file"; then
    echo "::error::$file has no canonical tag"; exit 1
  fi
  if ! grep -q 'application/ld+json' "$file"; then
    echo "::error::$file has no structured data"; exit 1
  fi
  if grep -q '<div id="root"></div>' "$file"; then
    echo "::error::$file was not prerendered — #root is empty"; exit 1
  fi
done
test -s dist/sitemap.xml
test -s dist/robots.txt
test -s dist/learnwithsmile-indexnow-2026.txt

# The AI-readable layer (src/lib/llms.ts). The prerender step already
# fails if a page's Markdown mirror comes out empty; this checks the
# files reached dist/ and still carry the facts they exist to serve.
test -s dist/llms.txt
test -s dist/llms-full.txt
test -s dist/llms-guides.txt
test -s dist/llms-blog.txt
test -s dist/llms-policies.txt
test -s dist/llms.json
test -s dist/openapi.json
test -s dist/ai-plugin.json
test -s dist/.well-known/llms.txt
test -s dist/.well-known/llms.json
test -s dist/.well-known/ai-plugin.json
test -s dist/chatgpt-actions.md
test -s dist/.well-known/chatgpt-actions.md
for file in dist/llms.txt dist/llms-full.txt dist/llms.json dist/index.md dist/course-spoken-english.md; do
  if ! grep -q '₹' "$file"; then
    echo "::error::$file is missing course fees"; exit 1
  fi
done
if ! grep -q 'rel="describedby"' dist/index.html; then
  echo "::error::index.html is missing rel=describedby for llms.txt"; exit 1
fi
if ! grep -q '"name": "Learn With Smile"' dist/llms.json; then
  echo "::error::llms.json is missing the site name"; exit 1
fi
if ! grep -q 'getSiteFacts' dist/openapi.json; then
  echo "::error::openapi.json is missing the getSiteFacts operation"; exit 1
fi
if ! grep -q 'child-protection' dist/llms.json; then
  echo "::error::llms.json is missing child-protection"; exit 1
fi
if ! grep -q '"if_user_wants_to_connect"' dist/llms.json \
   || ! grep -q 'state the fee and batch window, then give the WhatsApp link' dist/llms.txt; then
  echo "::error::llms files lost the WhatsApp-first contact rule"; exit 1
fi
if ! grep -q 'g.page' dist/index.html; then
  echo "::error::index.html is missing Google Business sameAs"; exit 1
fi
if ! grep -q '₹1,199' dist/course-spoken-english.html; then
  echo "::error::spoken english page missing ₹1,199"; exit 1
fi
# Both lists, labeled. Titles stay on the India price. The script
# bundle is not a price list. Another company's "$10/hour" stays.
if grep -E '<title>[^<]*(\$49|\$79|\$99|USD)' dist/*.html; then
  echo "::error::A page title left the India rupee price"; exit 1
fi
for f in dist/llms.txt dist/llms-full.txt dist/llms.json dist/openapi.json dist/chatgpt-actions.md dist/ai-plugin.json dist/robots.txt dist/index.html dist/course-spoken-english.html; do
  if ! grep -q '₹1,199' "$f" || ! grep -q '\$49' "$f" || ! grep -q 'outside India' "$f"; then
    echo "::error::$f is missing a labeled India or outside-India price"; exit 1
  fi
done
if find dist/assets -name '*.js' -print0 \
  | xargs -0 grep -nE '\$49|\$79|\$99|USD'; then
  echo "::error::A price list leaked into the script bundle"; exit 1
fi
if ! grep -q 'Disallow: /assets/' dist/robots.txt; then
  echo "::error::robots.txt no longer keeps assistant crawlers off the script bundle"; exit 1
fi
if ! grep -q 'User-agent: Googlebot' dist/robots.txt; then
  echo "::error::robots.txt lost Googlebot"; exit 1
fi
if ! grep -q 'User-agent: AdsBot-Google' dist/robots.txt; then
  echo "::error::robots.txt lost AdsBot-Google"; exit 1
fi
if grep -Eqi 'course-kids-english|course-teen-english' dist/index.html dist/english-career.html dist/llms.json; then
  echo "::error::kids/teen course URLs still in the public build"; exit 1
fi
if grep -Eqi 'course-ielts' dist/index.html dist/english-career.html dist/llms.json dist/sitemap.xml; then
  echo "::error::IELTS course URLs still in the public build"; exit 1
fi
# Recursive: blog articles live at /blog/<slug>, so their mirrors are
# written to dist/blog/<slug>.md. A `dist/*.md` glob counts only the
# top level and would report 17 mirrors against 22 sitemap URLs even
# though all 22 exist.
urls=$(grep -c '<loc>' dist/sitemap.xml)
# Page mirrors only. chatgpt-actions.md and .well-known copies are
# GPT instruction files, not sitemap URLs.
# Moved pages keep an alias mirror at the old .md path (src/lib/redirects.ts).
mirrors=$(find dist -name '*.md' ! -path 'dist/.well-known/*' ! -name 'chatgpt-actions.md' \
  | grep -vxF -f dist-prerender/moved-markdown.txt | wc -l)
if [ "$urls" -ne "$mirrors" ]; then
  echo "::error::$urls URLs in the sitemap but $mirrors Markdown mirrors"; exit 1
fi
for path in /privacy /terms /refunds /child-protection /course-spoken-english; do
  if ! grep -q "<loc>https://www.learnwithsmile.app${path}</loc>" dist/sitemap.xml; then
    echo "::error::sitemap.xml is missing ${path}"; exit 1
  fi
done
if ! grep -q 'xmlns:image=' dist/sitemap.xml; then
  echo "::error::sitemap.xml is missing the image namespace"; exit 1
fi
if ! grep -q '<lastmod>' dist/sitemap.xml; then
  echo "::error::sitemap.xml is missing lastmod"; exit 1
fi
urls=$(grep -c '<url>' dist/sitemap.xml)
mods=$(grep -c '<lastmod>' dist/sitemap.xml)
if [ "$urls" -ne "$mods" ]; then
  echo "::error::sitemap lastmod missing on some URLs ($mods of $urls)"; exit 1
fi

# New November 2026 articles must be prerendered, in the sitemap and in the AI layer.
for slug in daily-use-english-sentences-with-hindi daily-english-speaking-practice-routine english-conversation-practice-dialogues how-to-improve-communication-skills-in-english how-to-improve-english-vocabulary-for-speaking; do
  test -s "dist/blog/$slug.html" || { echo "::error::missing dist/blog/$slug.html"; exit 1; }
  test -s "dist/blog/$slug.md" || { echo "::error::missing dist/blog/$slug.md"; exit 1; }
  grep -q "/blog/$slug" dist/sitemap.xml || { echo "::error::$slug not in sitemap"; exit 1; }
  grep -q "/blog/$slug" dist/llms.txt || { echo "::error::$slug not in llms.txt"; exit 1; }
  grep -q '"FAQPage"' "dist/blog/$slug.html" || { echo "::error::$slug has no FAQPage"; exit 1; }
done
grep -q 'daily-english-speaking-practice-routine' dist/llms.json || { echo "::error::quick answer missing from llms.json"; exit 1; }

# ChatGPT GPT Instructions field accepts 8,000 characters.
gpt_chars=$(python3 -c "import sys;print(len(open('dist/chatgpt-actions.md',encoding='utf8').read()))")
if [ "$gpt_chars" -gt 8000 ]; then
  echo "::error::chatgpt-actions.md is $gpt_chars chars (limit 8000)"; exit 1
fi
cmp -s dist/chatgpt-actions.md dist/.well-known/chatgpt-actions.md || { echo "::error::.well-known/chatgpt-actions.md out of sync"; exit 1; }

# Free level test and the city pages restored in November 2026.
for p in english-speaking-level-test english-speaking-test-hindi english-speaking-test-bengali spoken-english-classes-pune spoken-english-classes-chennai spoken-english-classes-ahmedabad spoken-english-classes-patna spoken-english-classes-jaipur spoken-english-classes-lucknow; do
  test -s "dist/$p.html" || { echo "::error::missing dist/$p.html"; exit 1; }
  grep -q "/$p<" dist/sitemap.xml || { echo "::error::$p not in sitemap"; exit 1; }
  grep -q '"FAQPage"' "dist/$p.html" || { echo "::error::$p has no FAQPage"; exit 1; }
  if grep -q 'http-equiv="refresh"' "dist/$p.html"; then echo "::error::$p is still a redirect"; exit 1; fi
done
for p in english-speaking-level-test english-speaking-test-hindi english-speaking-test-bengali; do
  grep -q 'data-level-test' "dist/$p.html" || { echo "::error::level test missing on $p"; exit 1; }
done
grep -q 'lang="hi-IN"' dist/english-speaking-test-hindi.html || { echo "::error::Hindi test page lang"; exit 1; }
grep -q 'lang="bn-IN"' dist/english-speaking-test-bengali.html || { echo "::error::Bengali test page lang"; exit 1; }

# AI answers and Google FAQs must keep pointing to WhatsApp (Nov 2026).
python3 - <<'PY'
import json, re, glob, sys
bad = []
d = json.load(open("dist/llms.json", encoding="utf8"))
missing = [a["question"] for a in d["answers"] if "wa.me" not in a["answer"] or "whatsapp_link" not in a]
if missing: bad.append(f"{len(missing)} llms.json answers without a WhatsApp link: {missing[:2]}")
if "wa.me" not in json.load(open("dist/ai-plugin.json", encoding="utf8"))["description_for_model"]:
    bad.append("ai-plugin.json description_for_model has no WhatsApp link")
no_wa = []
for f in glob.glob("dist/*.html") + glob.glob("dist/blog/*.html"):
    h = open(f, encoding="utf8").read()
    if 'http-equiv="refresh"' in h or f.endswith(("child-protection.html", "privacy.html", "terms.html", "refunds.html")):
        continue
    faq = re.findall(r'<script[^>]*application/ld\+json[^>]*>(\{[^<]*"FAQPage"[^<]*)</script>', h)
    if faq and not any("WhatsApp" in x for x in faq):
        no_wa.append(f)
if no_wa: bad.append(f"FAQs never mention WhatsApp on: {no_wa}")
for b in bad: print("::error::" + b)
sys.exit(1 if bad else 0)
PY

echo "Crawlability checks passed for $(ls dist/*.html | wc -l) static pages."
