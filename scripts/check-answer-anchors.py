"""Every deep link on the site must land on a real anchor.

Scans the built site (dist/) for links of the form /path#anchor or
https://www.learnwithsmile.app/path#anchor — in page HTML, llms.txt,
llms.json, llms-anchors.txt and anchors.json — and fails if the target page
does not contain an element with that id. A reworded FAQ question or a
renamed heading changes its anchor; this catches the stale link before
ChatGPT or Google quotes it.

Usage: python3 -I scripts/check-answer-anchors.py dist
"""
import html
import json
import os
import re
import sys
from urllib.parse import unquote

DIST = sys.argv[1] if len(sys.argv) > 1 else "dist"
SITE = "https://www.learnwithsmile.app"

def page_file(path):
    if path in ("", "/"):
        return os.path.join(DIST, "index.html")
    p = os.path.join(DIST, path.lstrip("/"))
    for cand in (p + ".html", os.path.join(p, "index.html")):
        if os.path.isfile(cand):
            return cand
    return None

ids_cache = {}
def ids_of(path):
    if path not in ids_cache:
        f = page_file(path)
        if not f:
            ids_cache[path] = None
        else:
            text = open(f, encoding="utf-8").read()
            if 'http-equiv="refresh"' in text[:600]:
                ids_cache[path] = "redirect"
            else:
                ids_cache[path] = {html.unescape(x) for x in re.findall(r'\sid="([^"]+)"', text)}
    return ids_cache[path]

LINK = re.compile(r'(?:href="|\(|\s|"url":\s*"|^)((?:' + re.escape(SITE) + r')?/[a-z0-9/._-]*#[^"\s)<>,]+)', re.M)

sources = []
for root, _, files in os.walk(DIST):
    for name in files:
        if name.endswith(".html") or name in ("llms.txt", "llms.json", "llms-anchors.txt", "anchors.json"):
            sources.append(os.path.join(root, name))

bad = []
checked = 0
for src in sources:
    text = open(src, encoding="utf-8").read()
    if src.endswith(".html") and 'http-equiv="refresh"' in text[:600]:
        continue
    for m in LINK.finditer(text):
        link = html.unescape(m.group(1))
        url = link[len(SITE):] if link.startswith(SITE) else link
        path, _, frag = url.partition("#")
        if not frag or path.endswith((".txt", ".json", ".md", ".xml")):
            continue
        frag = unquote(frag)
        ids = ids_of(path.rstrip("/") or "/")
        checked += 1
        if ids is None:
            bad.append(f"{os.path.relpath(src, DIST)}: {link} → page not found")
        elif ids == "redirect":
            bad.append(f"{os.path.relpath(src, DIST)}: {link} → page is a redirect")
        elif frag not in ids:
            bad.append(f"{os.path.relpath(src, DIST)}: {link} → no id \"{frag}\"")

uniq = sorted(set(bad))
print(f"deep links checked: {checked}  broken: {len(uniq)}")
for b in uniq[:60]:
    print("  ", b)
sys.exit(1 if uniq else 0)
