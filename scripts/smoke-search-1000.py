#!/usr/bin/env python3
"""
1,000-query search smoke test (November 2026).

Generates 1,000 realistic India searches — state x city x locality x need,
plus course, medium, fee, app and comparison questions — decides which page
on learnwithsmile.app should answer each one, and checks the *built* site
(dist/) the way a search engine or AI assistant would:

  1. page    the target page was prerendered (dist/<path>.html)
  2. entity  the page text names what was searched (city, locality, need, language)
  3. meta    the page has a <title>, meta description, canonical and JSON-LD
  4. faq     the page carries FAQPage JSON-LD (direct answers AIs quote)
  5. sitemap the URL is in sitemap.xml
  6. llms    llms.txt / llms-full*.txt mention the URL (AI crawlers)
  7. fee     when the query is about price, the page states the India fee
  8. action  the page has a WhatsApp CTA (the conversion we want)

Usage: python3 -I scripts/smoke-search-1000.py dist regional.json report-dir
`regional.json` is exported from src/lib/states.ts + src/lib/needs.ts.
"""
import csv
import html
import json
import os
import re
import sys
from itertools import cycle

DIST, REGIONAL, OUT = sys.argv[1], sys.argv[2], sys.argv[3]
SITE = "https://www.learnwithsmile.app"
data = json.load(open(REGIONAL, encoding="utf8"))
STATES, NEEDS = data["states"], data["needs"]
NEED_BY_KEY = {n["key"]: n for n in NEEDS}

_page_cache: dict[str, str | None] = {}


def page(path: str) -> str | None:
    if path not in _page_cache:
        f = os.path.join(DIST, "index.html" if path == "/" else path.strip("/") + ".html")
        _page_cache[path] = open(f, encoding="utf8").read() if os.path.exists(f) else None
    return _page_cache[path]


def text_of(h: str) -> str:
    h = re.sub(r"<script[\s\S]*?</script>|<style[\s\S]*?</style>", " ", h)
    return html.unescape(re.sub(r"<[^>]+>", " ", h)).lower()


SITEMAP = open(os.path.join(DIST, "sitemap.xml"), encoding="utf8").read()
LLMS = ""
for f in os.listdir(DIST):
    if f.startswith("llms") and f.endswith(".txt"):
        LLMS += open(os.path.join(DIST, f), encoding="utf8").read()

# ------------------------------------------------------------ query set
queries: list[dict] = []


def q(text: str, target: str, entity: str, kind: str, fee: str | None = None):
    queries.append({"query": text, "target": target, "entity": entity, "kind": kind, "fee": fee})


MED_PATH = {
    "hindi": "/course-spoken-english-hindi",
    "marathi": "/course-spoken-english-marathi",
    "english": "/course-spoken-english",
}

# Cities that already have their own page: city queries belong there, and the
# state page links to it (state ↔ city cross-links, no competing pages).
CITY_PAGE = {
    "Mumbai": "/spoken-english-classes-mumbai",
    "Delhi": "/spoken-english-classes-delhi",
    "Bengaluru": "/spoken-english-classes-bengaluru",
    "Hyderabad": "/spoken-english-classes-hyderabad",
}

for st in STATES:
    sp, name = st["path"], st["name"]
    # state-level intents
    for t in [
        f"spoken english classes in {name}",
        f"online spoken english course {name}",
        f"best english speaking class {name}",
        f"spoken english classes near me {name}",
        f"english speaking course {name} fees",
        f"live english class {name} small batch",
        f"spoken english with daily practice app {name}",
    ]:
        q(t, sp, name, "state", "₹999" if "fees" in t else None)
    # city-level
    for city in st["cities"]:
        for t in [
            f"spoken english classes in {city}",
            f"english speaking course {city} online",
            f"spoken english class {city} fees",
        ]:
            q(t, CITY_PAGE.get(city, sp), city, "city", "₹999" if "fees" in t else None)
    # locality-level ("near me" offline searchers)
    for loc in st["localities"]:
        for area in loc["areas"]:
            q(f"spoken english classes near {area} {loc['city']}", sp, area, "locality")
            q(f"english speaking institute {area}", sp, area, "locality")
    # needs, localised
    for h in st["hubs"]:
        n = NEED_BY_KEY[h["need"]]
        city = st["cities"][0]
        q(f"{n['label'].lower()} english {city}", sp, city, "need-local")
        q(f"{n['label'].lower()} english preparation", n["path"], n["label"].split(" ")[0], "need")
    # medium
    if st["medium"] in ("hindi", "marathi"):
        lang = st["medium"].capitalize()
        q(f"{lang} medium spoken english class {name}", sp, lang, "medium-local")
        q(f"{lang} to english speaking course online", MED_PATH[st["medium"]], lang, "medium", "₹999")

# national / course / app / comparison intents
NATIONAL = [
    ("spoken english course online india", "/course-spoken-english", "spoken english", "₹999"),
    ("basic spoken english course fees", "/course-spoken-english", "basic spoken english", "₹999"),
    ("hindi to english speaking course", "/course-spoken-english-hindi", "hindi", "₹999"),
    ("english speaking course in hindi live", "/course-spoken-english-hindi", "hindi", "₹999"),
    ("हिंदी से इंग्लिश बोलना सीखें", "/course-spoken-english-hindi", "हिंदी", None),
    ("marathi to english speaking course", "/course-spoken-english-marathi", "marathi", "₹999"),
    ("इंग्रजी बोलायला शिका", "/course-spoken-english-marathi", "मराठी", None),
    ("intermediate spoken english course", "/course-intermediate-english", "intermediate", "₹1,999"),
    ("intermediate english conditionals practice app", "/course-intermediate-english", "bolo", None),
    ("interactive speaking course stop freezing", "/course-interactive-speaking", "freez", "₹1,599"),
    ("interactive speaking role play practice app", "/course-interactive-speaking", "bolo", None),
    ("business english course online india", "/course-business-english", "business english", "₹2,499"),
    ("interview preparation english course", "/course-interview-preparation", "interview", "₹2,499"),
    ("english practice app with teacher review", "/bolo", "bolo", None),
    ("bolo app learn with smile", "/bolo", "bolo", None),
    ("daily english practice app streak india", "/bolo", "streak", None),
    ("cheapest live spoken english class india", "/", "₹999", "₹999"),
    ("all in one spoken english course low fee", "/", "all-in-one", "₹999"),
    ("spoken english course with daily practice affordable", "/", "daily practice", "₹999"),
    ("english class fees india 2026", "/english-class-fees-india", "fee", "₹999"),
    ("free spoken english consultation whatsapp", "/free-consultation", "consultation", None),
    ("english class demo 199", "/course-demo-session", "199", None),
    ("spoken english classes kolkata", "/spoken-english-classes-kolkata", "kolkata", "₹999"),
]
for t, path, ent, fee in NATIONAL:
    q(t, path, ent, "national", fee)

# variants until we reach exactly 1,000 (rotating phrasings over all states)
variants = cycle(
    [
        ("{city} spoken english classes online fees", "fee"),
        ("learn english speaking from home {city}", None),
        ("english speaking class for working professionals {city}", None),
        ("spoken english for job interview {city}", None),
        ("english course with live teacher {city}", None),
        ("small batch spoken english {city}", None),
    ]
)
st_cycle = cycle([(st, c) for st in STATES for c in st["cities"]])
while len(queries) < 1000:
    (st, city), (tpl, fee) = next(st_cycle), next(variants)
    q(tpl.format(city=city), CITY_PAGE.get(city, st["path"]), city, "variant", "₹999" if fee else None)
queries = queries[:1000]

# ------------------------------------------------------------ checks
rows, fails = [], {}
for item in queries:
    h = page(item["target"])
    res = {"page": h is not None}
    if h:
        t = text_of(h)
        res["entity"] = item["entity"].lower() in t
        res["meta"] = all(
            x in h for x in ("<title", 'name="description"', 'rel="canonical"', "application/ld+json")
        )
        res["faq"] = '"FAQPage"' in h
        res["sitemap"] = (SITE + item["target"].rstrip("/")) in SITEMAP or item["target"] == "/"
        res["llms"] = item["target"] == "/" or (SITE + item["target"]) in LLMS or item["target"] in LLMS
        res["fee"] = (item["fee"] in t) if item["fee"] else True
        res["action"] = "wa.me" in h or "api.whatsapp.com" in h
    else:
        for k in ("entity", "meta", "faq", "sitemap", "llms", "fee", "action"):
            res[k] = False
    ok = all(res.values())
    if not ok:
        for k, v in res.items():
            if not v:
                fails.setdefault(k, []).append(item)
    rows.append({**item, **{k: "ok" if v else "FAIL" for k, v in res.items()}, "pass": "PASS" if ok else "FAIL"})

os.makedirs(OUT, exist_ok=True)
with open(os.path.join(OUT, "smoke-search-1000.csv"), "w", newline="", encoding="utf8") as f:
    w = csv.DictWriter(f, fieldnames=list(rows[0].keys()))
    w.writeheader()
    w.writerows(rows)

passed = sum(r["pass"] == "PASS" for r in rows)
kinds: dict[str, list[int]] = {}
for r in rows:
    kinds.setdefault(r["kind"], [0, 0])
    kinds[r["kind"]][0] += r["pass"] == "PASS"
    kinds[r["kind"]][1] += 1
print(f"queries: {len(rows)}  passed: {passed}  failed: {len(rows) - passed}")
for k, (p, n) in sorted(kinds.items()):
    print(f"  {k:<14} {p}/{n}")
for k, items in fails.items():
    print(f"  check '{k}' failed {len(items)}x, e.g. {items[0]['query']!r} -> {items[0]['target']}")
