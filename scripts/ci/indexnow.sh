#!/usr/bin/env bash
# Tells Bing, Yandex and every other IndexNow engine which URLs changed. Run by
# .github/workflows/deploy.yml after a successful deploy. Never fails the
# deploy: a failed endpoint is a warning, and the others are still tried.
set -euo pipefail
cd "$(dirname "$0")/../.."

key="learnwithsmile-indexnow-2026"
sitemap_urls=$(grep -oE '<loc>[^<]+' dist/sitemap.xml | sed 's#<loc>##')
extra=$(printf '%s\n' \
  "https://www.learnwithsmile.app/llms.txt" \
  "https://www.learnwithsmile.app/llms.json" \
  "https://www.learnwithsmile.app/llms-full.txt" \
  "https://www.learnwithsmile.app/llms-guides.txt" \
  "https://www.learnwithsmile.app/llms-blog.txt" \
  "https://www.learnwithsmile.app/llms-policies.txt" \
  "https://www.learnwithsmile.app/openapi.json" \
  "https://www.learnwithsmile.app/ai-plugin.json" \
  "https://www.learnwithsmile.app/.well-known/llms.txt" \
  "https://www.learnwithsmile.app/.well-known/llms.json" \
  "https://www.learnwithsmile.app/.well-known/ai-plugin.json" \
  "https://www.learnwithsmile.app/.well-known/openapi.json" \
  "https://www.learnwithsmile.app/robots.txt")
# Old URLs that now redirect (scripts/prerender.mjs), so Bing sees the move.
redirected=$(cat dist-prerender/redirected-urls.txt 2>/dev/null || true)
urls=$(printf '%s\n%s\n%s\n' "$sitemap_urls" "$extra" "$redirected" | awk 'NF && !seen[$0]++' | jq -R . | jq -s .)
payload=$(jq -n \
  --arg host "www.learnwithsmile.app" \
  --arg key "$key" \
  --arg keyLocation "https://www.learnwithsmile.app/$key.txt" \
  --argjson urlList "$urls" \
  '{host: $host, key: $key, keyLocation: $keyLocation, urlList: $urlList}')
echo "Submitting $(echo "$urls" | jq 'length') URLs to IndexNow"
# api.indexnow.org shares with every participating engine; Bing and
# Yandex are also called directly so one slow relay cannot drop the push.
# Each endpoint is tried on its own: under `set -e` a failed relay used
# to end the loop before Bing and Yandex were ever called.
ok=0
for endpoint in https://api.indexnow.org/indexnow https://www.bing.com/indexnow https://yandex.com/indexnow; do
  echo "POST $endpoint"
  if curl --fail-with-body --retry 2 --max-time 30 -sS \
    -H 'Content-Type: application/json; charset=utf-8' \
    -d "$payload" \
    "$endpoint"; then
    ok=$((ok + 1))
  else
    echo "::warning::IndexNow push to $endpoint failed"
  fi
  echo
done
echo "IndexNow accepted by $ok of 3 endpoints"
if [ "$ok" -eq 0 ]; then
  echo "::warning::No IndexNow endpoint accepted the push — run the IndexNow workflow by hand"
fi
# Google retired the sitemap ping endpoint in 2023 (it returns 404) and
# does not take IndexNow. Google recrawls from sitemap.xml lastmod and
# robots.txt; request indexing for a brand-new URL in Search Console.
