#!/usr/bin/env python3
"""
Full SEO / GEO / AI-file audit of a built site (dist/). Reads files only —
no network. Exits 1 if any ERROR is found; WARN lines are advisory.

Usage: python3 -I scripts/seo-audit.py dist

Checks
  Pages (every sitemap URL)
    - <title> present, unique, <= 65 chars; meta description present,
      unique, 70-165 chars; canonical = own URL; no noindex
    - Open Graph (title, description, image file exists, url = canonical),
      twitter:card; <html lang>; exactly one <h1>; images have alt
    - JSON-LD parses; required fields for Organization, Course, Offer,
      FAQPage, Article/BlogPosting, BreadcrumbList, Service; no Markdown
      links or HTML left inside schema strings
    - every FAQPage question is also visible on the page
    - India fee list identical everywhere it is stated
    - ad-policy / ASCI wording: no guarantees, no "best / #1" claims about us
  AI files
    - llms.txt / llms-full.txt mention every sitemap URL
    - llms.json, openapi.json, ai-plugin.json parse; OpenAPI operations have
      operationId and short descriptions; GPT instruction file under 8,000
      characters; robots.txt lists the sitemap and allows AI crawlers
  SEM readiness
    - each paid-search keyword group has a landing page whose title or h1
      carries the head term
"""
import html
import json
import os
import re
import sys
from collections import defaultdict

D = sys.argv[1] if len(sys.argv) > 1 else "dist"
SITE = "https://www.learnwithsmile.app"
errors: list[str] = []
warns: list[str] = []


def err(m: str) -> None:
    errors.append(m)


def warn(m: str) -> None:
    warns.append(m)


def read(path: str) -> str:
    with open(path, encoding="utf8") as f:
        return f.read()


def page_file(p: str) -> str | None:
    for f in ([f"{D}/index.html"] if p == "/" else [f"{D}{p}.html", f"{D}{p}/index.html"]):
        if os.path.exists(f):
            return f
    return None


def text_of(h: str) -> str:
    h = re.sub(r"<(script|style)[^>]*>.*?</\1>", " ", h, flags=re.S)
    return html.unescape(re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " ", h)))


def meta(h: str, attr: str, name: str) -> str | None:
    m = re.search(rf'<meta[^>]*{attr}="{re.escape(name)}"[^>]*content="([^"]*)"', h) or re.search(
        rf'<meta[^>]*content="([^"]*)"[^>]*{attr}="{re.escape(name)}"', h
    )
    return html.unescape(m.group(1)) if m else None


sitemap = read(f"{D}/sitemap.xml")
locs = [l.replace(SITE, "") or "/" for l in re.findall(r"<loc>([^<]+)</loc>", sitemap)]
titles: dict[str, list[str]] = defaultdict(list)
descs: dict[str, list[str]] = defaultdict(list)
FEES = {
    "Basic Spoken English": "₹999",
    "Intermediate Spoken English": "₹1,999",
    "Interactive Speaking": "₹1,599",
    "Business English": "₹2,499",
    "Interview Preparation": "₹2,499",
}
AD_RISK = [
    (r"\bguarantee[ds]?\b(?![^.]{0,60}\b(no|not|never|cannot)\b)", "guarantee claim"),
    (r"\b100% (job|placement|fluency|result)", "100% outcome claim"),
    (r"\b(best|no\.? ?1|#1|number one) (spoken english |english )?(institute|course|class|academy)s? in india\b", "superlative claim"),
    (r"\bfluent in (7|10|15|21|30) days\b", "speed claim"),
]
type_count: dict[str, int] = defaultdict(int)

for p in locs:
    f = page_file(p)
    if not f:
        err(f"{p}: sitemap URL has no built page")
        continue
    h = read(f)
    head = h.split("</head>")[0]
    m = re.search(r"<main.*?</main>", h, re.S)
    body = m.group(0) if m else h
    visible = text_of(body)

    t = re.search(r"<title[^>]*>([^<]*)</title>", head)
    title = html.unescape(t.group(1)).strip() if t else ""
    if not title:
        err(f"{p}: no <title>")
    elif len(title) > 65:
        warn(f"{p}: title {len(title)} chars (Google shows ~60): {title}")
    titles[title].append(p)
    d = meta(head, "name", "description") or ""
    if not d:
        err(f"{p}: no meta description")
    elif not 70 <= len(d) <= 165:
        warn(f"{p}: description {len(d)} chars")
    descs[d].append(p)
    c = re.search(r'rel="canonical" href="([^"]+)"', head)
    want = SITE + ("/" if p == "/" else p)
    if not c or c.group(1).rstrip("/") != want.rstrip("/"):
        err(f"{p}: canonical {c.group(1) if c else 'missing'}")
    if re.search(r'name="robots"[^>]*noindex', head):
        err(f"{p}: noindex on a sitemap page")
    for prop in ("og:title", "og:description", "og:image", "og:url", "og:type"):
        v = meta(head, "property", prop)
        if not v:
            err(f"{p}: missing {prop}")
        elif prop == "og:image":
            path = v.replace(SITE, "")
            if path.startswith("/") and not os.path.exists(D + path):
                err(f"{p}: og:image file missing {path}")
        elif prop == "og:url" and v.rstrip("/") != want.rstrip("/"):
            err(f"{p}: og:url {v} != canonical")
    if not meta(head, "name", "twitter:card"):
        warn(f"{p}: no twitter:card")
    if not re.search(r"<html[^>]*\blang=", h):
        err(f"{p}: <html> has no lang")
    h1 = len(re.findall(r"<h1[\s>]", body))
    if h1 != 1:
        err(f"{p}: {h1} <h1> elements")
    for img in re.findall(r"<img\b[^>]*>", body):
        if not re.search(r'\balt="', img):
            err(f"{p}: <img> without alt: {img[:90]}")

    # JSON-LD
    faq_q: list[str] = []
    for raw in re.findall(r'<script[^>]*type="application/ld\+json"[^>]*>(.*?)</script>', h, re.S):
        try:
            data = json.loads(html.unescape(raw))
        except Exception as e:  # noqa: BLE001
            err(f"{p}: JSON-LD does not parse ({e})")
            continue
        nodes = data.get("@graph", [data]) if isinstance(data, dict) else data
        stack = list(nodes)
        while stack:
            n = stack.pop()
            if isinstance(n, list):
                stack.extend(n)
                continue
            if not isinstance(n, dict):
                continue
            for v in n.values():
                if isinstance(v, (dict, list)):
                    stack.append(v)
                elif isinstance(v, str) and (re.search(r"\]\(/", v) or re.search(r"</?(a|p|strong|br)\b", v)):
                    err(f"{p}: Markdown/HTML inside schema string: {v[:80]}")
            ty = n.get("@type")
            tys = ty if isinstance(ty, list) else [ty]
            for one in tys:
                if isinstance(one, str):
                    type_count[one] += 1
            need = {
                "Organization": ["name", "url"],
                "EducationalOrganization": ["name", "url"],
                "Course": ["name", "description", "provider"],
                "Offer": ["price", "priceCurrency"],
                "Article": ["headline", "author", "datePublished"],
                "BlogPosting": ["headline", "author", "datePublished"],
                "BreadcrumbList": ["itemListElement"],
                "Service": ["provider", "areaServed"],
                "FAQPage": ["mainEntity"],
            }
            # An {"@id": …} pointer to an entity defined elsewhere is not a
            # second copy of it; only full nodes need the required fields.
            is_ref = "@id" in n and len(set(n) - {"@id", "@type", "name", "url"}) == 0
            for one in ([] if is_ref else tys):
                for k in need.get(one, []):
                    if k not in n:
                        err(f"{p}: {one} missing {k}")
            if "Article" in tys or "BlogPosting" in tys:
                if len(str(n.get("headline", ""))) > 110:
                    err(f"{p}: Article headline > 110 chars")
            if "FAQPage" in tys:
                for q in n.get("mainEntity", []):
                    name = q.get("name", "")
                    ans = (q.get("acceptedAnswer") or {}).get("text", "")
                    if not name or not ans:
                        err(f"{p}: FAQ item without question or answer")
                    faq_q.append(name)
    norm = lambda s: re.sub(r"[^a-z0-9ऀ-෿]+", " ", s.lower()).strip()
    vis = norm(visible)
    for q in faq_q:
        if norm(q)[:60] not in vis:
            err(f"{p}: FAQ in schema not visible on page: {q[:70]}")

    # India fee list consistency (rupee page text only)
    for course, fee in FEES.items():
        for mm in re.finditer(rf"{course}(?:\s*[·:(]\s*|\s+is\s+|\s+)(₹[\d,]+)\s*/\s*(?:mo|month)", visible):
            if mm.group(1) != fee:
                err(f"{p}: {course} stated as {mm.group(1)}, list says {fee}")

    # Ad-policy wording about ourselves
    low = visible.lower()
    for rx, label in AD_RISK:
        for mm in re.finditer(rx, low):
            ctx = low[max(0, mm.start() - 70) : mm.end() + 40]
            if re.search(r"\b(no|not|never|don't|do not|nobody|without|cannot|can't|claim|ads?|advert|sceptical|skeptical|beware|avoid|any course promising)\b", ctx):
                continue
            warn(f"{p}: {label}: …{ctx.strip()}…")

for t, ps in titles.items():
    if t and len(ps) > 1:
        err(f"duplicate title on {ps}: {t}")
for d, ps in descs.items():
    if d and len(ps) > 1:
        err(f"duplicate description on {ps}")

# AI files
llms = read(f"{D}/llms.txt") + read(f"{D}/llms-full.txt")
for p in locs:
    if SITE + p not in llms and f"({p})" not in llms and f" {p} " not in llms and p != "/":
        warn(f"llms.txt / llms-full.txt never mention {p}")
for f in ("llms.json", "openapi.json", "ai-plugin.json", ".well-known/llms.json", ".well-known/ai-plugin.json"):
    try:
        json.loads(read(f"{D}/{f}"))
    except Exception as e:  # noqa: BLE001
        err(f"{f}: does not parse ({e})")
api = json.loads(read(f"{D}/openapi.json"))
for path, ops in api.get("paths", {}).items():
    for verb, op in ops.items():
        if not isinstance(op, dict):
            continue
        if not op.get("operationId"):
            err(f"openapi {verb} {path}: no operationId")
        if len(op.get("description", "")) > 300:
            err(f"openapi {verb} {path}: description {len(op['description'])} chars (GPT limit 300)")
        if len(op.get("summary", "")) > 300:
            err(f"openapi {verb} {path}: summary too long")
if not api.get("servers"):
    err("openapi.json: no servers")
plugin = json.loads(read(f"{D}/ai-plugin.json"))
for k in ("schema_version", "name_for_model", "description_for_model", "api"):
    if k not in plugin:
        err(f"ai-plugin.json: missing {k}")
if len(plugin.get("description_for_model", "")) > 8000:
    err("ai-plugin.json: description_for_model > 8000 chars")
gpt = read(f"{D}/chatgpt-actions.md")
if len(gpt) > 8000:
    warn(f"chatgpt-actions.md is {len(gpt)} chars; GPT Instructions accept 8,000 — paste the instruction block only")
robots = read(f"{D}/robots.txt")
if "Sitemap:" not in robots:
    err("robots.txt: no Sitemap line")
for bot in ("Googlebot", "Bingbot", "OAI-SearchBot", "GPTBot", "ChatGPT-User", "ClaudeBot", "PerplexityBot"):
    if bot not in robots:
        err(f"robots.txt does not name {bot}")

# SEM readiness: head terms → landing page
SEM = {
    "spoken english course online": "/course-spoken-english",
    "spoken english in hindi": "/course-spoken-english-hindi",
    "spoken english in marathi": "/course-spoken-english-marathi",
    "intermediate spoken english": "/course-intermediate-english",
    "interactive speaking": "/course-interactive-speaking",
    "business english": "/course-interactive-speaking",
    "interview preparation": "/course-interview-preparation",
    "english class fees": "/english-class-fees-india",
    "free consultation": "/free-consultation",
    "free consultation demo class": "/free-consultation",
}
for term, p in SEM.items():
    f = page_file(p)
    if not f:
        err(f"SEM: landing page {p} missing")
        continue
    h = read(f)
    t = html.unescape((re.search(r"<title[^>]*>([^<]*)", h) or [None, ""])[1]).lower()
    h1 = text_of((re.search(r"<h1.*?</h1>", h, re.S) or [""])[0]).lower()
    words = [w for w in term.split() if w not in ("in", "online")]
    if not all(w in t or w in h1 for w in words):
        warn(f"SEM: '{term}' head term not in title/h1 of {p} ({t})")

print(f"pages: {len(locs)}  schema nodes: " + ", ".join(f"{k} {v}" for k, v in sorted(type_count.items())))
print(f"errors: {len(errors)}  warnings: {len(warns)}")
for m in errors:
    print("ERROR", m)
for m in warns:
    print("WARN ", m)
sys.exit(1 if errors else 0)
