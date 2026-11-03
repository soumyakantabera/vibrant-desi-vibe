#!/usr/bin/env python3
"""
Prepare another provider's official logo for src/assets/logos/ without
changing the artwork: trim empty margins, turn a plain white background
transparent by exact unmatting (no white halo), resize to 96 px tall (sharp at
24 px on 4x screens), save as WebP. Also writes a preview on white and on the
tinted table row to the output folder's previews/ for checking edges.

Usage: python3 -I scripts/polish-logos.py <image> <slug> [<image> <slug> ...]
       e.g. python3 -I scripts/polish-logos.py ~/bc.png british-council
Slugs must match DIFFERENT_ROWS in src/lib/positioning.ts.
"""
import os
import sys

import numpy as np
from PIL import Image

OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "src", "assets", "logos")
H = 96

args = sys.argv[1:]
if not args or len(args) % 2:
    sys.exit(__doc__)
os.makedirs(os.path.join(OUT, "previews"), exist_ok=True)
for src, slug in zip(args[::2], args[1::2]):
    im = Image.open(src).convert("RGBA")
    a = np.asarray(im).astype(np.float64)
    rgb, alpha = a[..., :3], a[..., 3] / 255.0
    if alpha.min() == 1.0:  # opaque, white-matted
        al = (255 - rgb).max(axis=2) / 255.0
        safe = np.where(al > 0, al, 1)
        col = np.clip((rgb - (1 - al[..., None]) * 255) / safe[..., None], 0, 255)
        al = np.where(al < 4 / 255, 0, al)
        a = np.dstack([col, al * 255])
    im = Image.fromarray(a.round().astype(np.uint8), "RGBA")
    im = im.crop(im.getchannel("A").point(lambda v: 255 if v > 8 else 0).getbbox())
    im = im.resize((round(im.width * H / im.height), H), Image.LANCZOS)
    im.save(os.path.join(OUT, f"{slug}.webp"), "WEBP", quality=92, method=6)
    for name, bg in (("white", (255, 255, 255)), ("tint", (231, 244, 238))):
        c = Image.new("RGB", (im.width + 24, H + 24), bg)
        c.paste(im, (12, 12), im)
        c.save(os.path.join(OUT, "previews", f"{slug}-{name}.png"))
    print(f"{slug}.webp {im.size}")
