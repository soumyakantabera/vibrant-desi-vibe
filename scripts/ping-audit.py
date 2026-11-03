#!/usr/bin/env python3
"""
Ping / link audit of a built site served locally (GitHub Pages-like server).

Checks:
  - every <loc> in sitemap.xml answers 200
  - every internal <a href> and asset (src/href) found in every page answers 200
  - each page's canonical equals its own sitemap URL
  - robots.txt, sitemap.xml, llms*.txt, llms.json, openapi.json, ai-plugin.json answer 200
  - a made-up URL answers 404 (not a soft 200)
Prints a summary and exits 1 on any failure.

Usage: python3 -I scripts/ping-audit.py http://localhost:4175 dist
"""
import re
import sys
import time
import urllib.error
import urllib.request

BASE, DIST = sys.argv[1].rstrip("/"), sys.argv[2]
SITE = "https://www.learnwithsmile.app"
status_cache: dict[str, tuple[int, float]] = {}


def get(path: str) -> tuple[int, float, str]:
    url = BASE + path
    t = time.time()
    try:
        with urllib.request.urlopen(url, timeout=20) as r:
            body = r.read().decode("utf8", "replace") if "html" in r.headers.get("content-type", "") else ""
            return r.status, time.time() - t, body
    except urllib.error.HTTPError as e:
        return e.code, time.time() - t, ""


def status(path: str) -> int:
    if path not in status_cache:
        code, dt, _ = get(path)
        status_cache[path] = (code, dt)
    return status_cache[path][0]


fails: list[str] = []
sitemap = open(f"{DIST}/sitemap.xml", encoding="utf8").read()
locs = [l.replace(SITE, "") or "/" for l in re.findall(r"<loc>([^<]+)</loc>", sitemap)]
times = []
links: set[str] = set()
for loc in locs:
    code, dt, body = get(loc)
    times.append((dt, loc))
    status_cache[loc] = (code, dt)
    if code != 200:
        fails.append(f"sitemap {loc} -> {code}")
        continue
    canon = re.search(r'rel="canonical" href="([^"]+)"', body)
    want = SITE + (loc if loc != "/" else "/")
    if not canon or canon.group(1).rstrip("/") != want.rstrip("/"):
        fails.append(f"canonical {loc} -> {canon.group(1) if canon else 'missing'}")
    for href in re.findall(r'(?:href|src)="(/[^"#?]*)', body):
        links.add(href)

for path in [
    "/robots.txt",
    "/sitemap.xml",
    "/llms.txt",
    "/llms-full.txt",
    "/llms.json",
    "/openapi.json",
    "/ai-plugin.json",
    "/.well-known/llms.txt",
]:
    if status(path) != 200:
        fails.append(f"ai/crawler file {path} -> {status(path)}")

for link in sorted(links):
    code = status(link)
    if code not in (200,):
        fails.append(f"link {link} -> {code}")

if status("/this-page-should-not-exist-xyz") != 404:
    fails.append("missing page does not return 404")

times.sort(reverse=True)
print(f"sitemap URLs: {len(locs)}  internal links + assets checked: {len(links)}")
print(f"slowest local responses: " + ", ".join(f"{p} {dt*1000:.0f}ms" for dt, p in times[:3]))
print(f"failures: {len(fails)}")
for f in fails[:40]:
    print("  " + f)
sys.exit(1 if fails else 0)
