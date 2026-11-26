"""
Content smoke test (26 Nov 2026): one scenario per visitor or crawler path.

Reads the built site the way a visitor, Google or an AI assistant would and
fails if a page loses its WhatsApp button, the course-fit check or the teacher
line; if stale prices or retired wording come back; or if the files AI
assistants read (llms.json, openapi.json, chatgpt-actions.md) drift.

Usage: python3 -I scripts/smoke-content.py dist
"""
import glob, html, json, os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIST = os.path.abspath(sys.argv[1] if len(sys.argv) > 1 else os.path.join(ROOT, "dist"))
SITE = "https://www.learnwithsmile.app"

STALE = [
    "₹999/", "₹999 ", "8,800", "₹8k–₹15k", "$10/hour", "~$10",
    "I have a question about your spoken", "not a call centre", "five facts",
    "Set your goal", "Send my five facts", "I'm ready, message a teacher",
    "for spoken English. Please send me the booking link",
]

def read(rel):
    p = os.path.join(DIST, rel)
    return open(p, encoding="utf8").read() if os.path.exists(p) else None

def page(path):
    return read(path.strip("/") + ".html") if path != "/" else read("index.html")

def ld(htm):
    out = []
    for m in re.finditer(r'<script[^>]*type="application/ld\+json"[^>]*>(.*?)</script>', htm, re.S):
        out.append(json.loads(html.unescape(m.group(1)) if "&quot;" in m.group(1) else m.group(1)))
    return out

def walk(o):
    if isinstance(o, dict):
        yield o
        for v in o.values(): yield from walk(v)
    elif isinstance(o, list):
        for v in o: yield from walk(v)

sitemap = read("sitemap.xml")
results = []

def scenario(name, checks):
    fails = [msg for ok, msg in checks if not ok]
    results.append((name, fails))

def common(path, htm, need_fit=True):
    c = []
    c.append((htm is not None, "page not built"))
    if htm is None: return c
    t = re.search(r"<title[^>]*>(.*?)</title>", htm, re.S)
    c.append((t and 10 <= len(html.unescape(t.group(1))) <= 70, f"title length {len(t.group(1)) if t else 0}"))
    d = re.search(r'<meta[^>]*name="description" content="([^"]*)"', htm)
    dl = len(html.unescape(d.group(1))) if d else 0
    c.append((110 <= dl <= 160, f"description length {dl}"))
    c.append((f'rel="canonical" href="{SITE}{path if path != "/" else "/"}' in htm or 'rel="canonical"' in htm, "no canonical"))
    try:
        blocks = ld(htm); c.append((len(blocks) > 0, "no JSON-LD"))
    except Exception as e:
        blocks = []; c.append((False, f"JSON-LD parse error {e}"))
    for s in STALE:
        c.append((s not in htm, f"stale text: {s!r}"))
    hrefs = [html.unescape(h) for h in re.findall(r'href="(https://wa\.me/[^"]+)"', htm)]
    c.append((len(hrefs) > 0, "no WhatsApp link"))
    c.append((any(re.search(r"serious|two%20live%20classes|I'm%20in|I%27m%20in", h) for h in hrefs), "no WhatsApp link with the new wording"))
    c.append(("Chat on WhatsApp" in htm, "no 'Chat on WhatsApp' label"))
    if need_fit:
        c.append(('id="course-fit-check"' in htm, "no fit check"))
        c.append(("A teacher replies on WhatsApp" in htm, "no teacher line"))
        c.append(("Sounds like you?" in htm, "fit check heading missing"))
    c.append((f"<loc>{SITE}{path}</loc>" in sitemap or path == "/", "not in sitemap"))
    return c, blocks

# --- 20 blog posts
posts = sorted(os.path.basename(p)[:-5] for p in glob.glob(os.path.join(DIST, "blog", "*.html")) if not p.endswith("/index.html"))
NEW = {"is-a-spoken-english-course-worth-it", "english-fluency-course-which-level",
       "online-english-tutor-vs-group-class", "self-paced-english-course-vs-live-class",
       "public-speaking-course-or-spoken-english-course"}
for slug in posts:
    path = f"/blog/{slug}"; htm = page(path)
    c, blocks = common(path, htm)
    bp = [b for blk in blocks for b in walk(blk) if b.get("@type") == "BlogPosting"]
    c.append((bp and bp[0].get("about"), "BlogPosting has no about"))
    c.append((bp and bp[0].get("dateModified", "") >= "2026-11-26", "dateModified not refreshed"))
    c.append((read(f"blog/{slug}.md") is not None, "no .md twin"))
    if slug in {"is-a-spoken-english-course-worth-it", "english-fluency-course-which-level", "self-paced-english-course-vs-live-class"}:
        c.append((bp and bp[0].get("citation"), "no citation"))
        c.append((">Sources<" in htm, "sources not shown"))
    if slug in NEW:
        art = re.search(r"<article.*?</article>", htm, re.S)
        body = re.sub(r"<[^>]+>", " ", art.group(0) if art else "")
        c.append((art is not None, "no <article>"))
        c.append((body.count("—") == 0, "em dash in new post body"))
    scenario(f"Reader finishes {path} and wants to message", c)

# --- guide pages (shared GuidePage template)
guide_paths = []
for f in sorted(glob.glob(os.path.join(ROOT, "src/routes/*.tsx"))):
    src = open(f, encoding="utf8").read()
    if re.search(r"GuidePage|ConfiguredGuide|CityGuide|RegionalPages", src):
        m = re.search(r'createFileRoute\("([^"]+)"\)', src)
        if m: guide_paths.append(m.group(1))
for path in guide_paths:
    htm = page(path)
    c, blocks = common(path, htm)
    faq = any(b.get("@type") == "FAQPage" for blk in blocks for b in walk(blk))
    c.append((faq, "no FAQPage JSON-LD"))
    mods = [b.get("dateModified") for blk in blocks for b in walk(blk) if b.get("dateModified")]
    c.append((any(m >= "2026-11-26" for m in mods), "dateModified not refreshed"))
    scenario(f"Visitor on guide {path}", c)

# --- course pages
for slug in ["spoken-english", "spoken-english-hindi", "spoken-english-bengali",
             "intermediate-english", "interactive-speaking", "interview-preparation"]:
    path = f"/course-{slug}"; htm = page(path)
    c, blocks = common(path, htm, need_fit=False)
    hrefs = [html.unescape(h) for h in re.findall(r'href="(https://wa\.me/[^"]+)"', htm or "")]
    c.append((any("two%20live%20classes%20a%20week" in h for h in hrefs), "consult message lacks commitment line"))
    c.append(("A teacher replies on WhatsApp" in (htm or ""), "no teacher line in hero"))
    c.append((any(b.get("@type") == "Course" for blk in blocks for b in walk(blk)), "no Course JSON-LD"))
    scenario(f"Prospect on course page {path}", c)

# --- system scenarios
home = page("/")
prices = [b.get("price") for blk in ld(home) for b in walk(blk) if "price" in b]
scenario("Google reads homepage offer prices", [(999 not in prices and "999" not in map(str, prices), f"stale 999 in OfferCatalog {prices}"), (1199 in prices or "1199" in map(str, prices), "1199 missing")])
scenario("Homepage hero shows the teacher line", [("A teacher replies on WhatsApp" in home, "missing")])
fc = page("/free-consultation")
scenario("Free consultation page buttons use new wording", [("two%20live%20classes%20a%20week" in fc or "serious" in fc, "old wording"), ("not a call centre" not in fc, "old line")])
bi = page("/blog")
strip = bi.split("Choosing a course? Start here", 1)
scenario("/blog leads with the 5 decision guides", [(len(strip) == 2, "strip missing")] + [(s in strip[-1][:20000], f"{s} not in strip") for s in NEW])
gh = page("/guides")
scenario("/guides lists the 5 decision guides", [(f"/blog/{s}" in gh, f"{s} missing") for s in NEW])
scenario("/blog meta targets course decisions", [("Choose the Right Course" in bi, "title not updated")])
lj = json.loads(read("llms.json"))
scenario("llms.json has course_fit_check", [("course_fit_check" in lj, "missing"), (len(lj.get("course_fit_check", {}).get("rooms", [])) == 4, "rooms != 4")])
qa = [a for a in lj["answers"] if "worth it" in a["question"]]
scenario("llms.json readiness answer has a WhatsApp link", [(qa and "wa.me" in qa[0]["answer"], "no wa.me")])
scenario("llms.json prefill uses new wording", [("serious" in json.dumps(lj), "old prefill")])
lt = read("llms.txt")
scenario("llms.txt has the course-fit section", [("Course-fit check" in lt, "missing"), ("not a call centre" not in lt, "old line")])
oa = json.loads(read("openapi.json"))
scenario("ChatGPT Action has getReadinessCheck", [(oa["info"]["version"] == "1.8.0", "version"), ("getReadinessCheck" in json.dumps(oa), "missing op")])
ga = read("chatgpt-actions.md")
scenario("GPT instructions fit the 8,000-char limit", [(len(ga) <= 8000, f"{len(ga)} chars")])
scenario("GPT instructions mention readiness", [("getReadinessCheck" in ga, "missing")])
scenario("Sitemap lists the 5 new guides", [(f"{SITE}/blog/{s}" in sitemap, s) for s in NEW])
rb = read("robots.txt")
scenario("ChatGPT and Copilot crawlers allowed", [("User-agent: OAI-SearchBot\nAllow: /" in rb, "OAI"), ("User-agent: Bingbot\nAllow: /" in rb, "Bing")])
scenario("Readiness guide has a Markdown twin for AI", [(read("blog/is-a-spoken-english-course-worth-it.md") is not None, "missing")])
scenario("No stale competitor prices anywhere in llms-full", [(all(s not in (read("llms-full.txt") or "") for s in ["8,800", "₹8k–₹15k", "$10/hour"]), "stale")])

total = len(results); passed = sum(1 for _, f in results if not f)
for name, fails in results:
    if fails: print("FAIL", name, "→", "; ".join(fails[:4]))
print(f"\n{passed}/{total} scenarios passed")
sys.exit(0 if passed == total else 1)
