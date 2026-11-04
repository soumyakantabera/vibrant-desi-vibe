# Paid search plan — Google Ads (prepared 3 Nov 2026, not yet live)

Search volumes are **not** in this plan: Google Keyword Planner needs the
account owner's login. Run every group below through Keyword Planner
(location: India; language: English + Hindi) before setting budgets.
Landing pages are checked by `scripts/seo-audit.py` (SEM section) so the
head term stays in each page's title or h1.

## Campaign structure

One Search campaign per intent, phrase and exact match only (no broad match
until conversion data exists). Location: India. Schedule: 9am–11:30pm IST
(admissions replies 10am–midnight).

| Ad group | Keywords (phrase / exact) | Landing page |
|---|---|---|
| Spoken English — core | spoken english course online · spoken english classes online · english speaking course online · online spoken english class india | /course-spoken-english |
| Hindi medium | spoken english in hindi · english speaking course in hindi · hindi se english bolna · english bolna sikhe | /course-spoken-english-hindi |
| Marathi medium | spoken english in marathi · marathi to english speaking course · english bolayla shika | /course-spoken-english-marathi |
| Intermediate | intermediate spoken english course · english fluency course intermediate | /course-intermediate-english |
| Freeze / confidence | english speaking confidence course · stop hesitation english speaking · interactive english speaking class | /course-interactive-speaking |
| Work English | business english course online india · english for working professionals · corporate english course | /course-business-english |
| Interviews | english for job interview · interview english course online | /course-interview-preparation |
| Price intent | spoken english course fees · english speaking course fees · cheap spoken english classes online | /english-class-fees-india |
| Trust / refund | spoken english course monthly payment · english course no emi | /before-you-pay-spoken-english-course |
| States (bid modifiers by state, not separate pages) | spoken english classes {state} online | /spoken-english-classes-{state} |
| Jobs | english for bpo job · english for bank po interview · english for campus placement | the matching /english-for-… guide |

## Negative keywords (account level)

free pdf · pdf · book · download · apk · ielts · pte · toefl · kids · for kids
· class 1 … class 10 · school · grammar worksheet · translation · translator ·
job vacancy · teacher job · tutor job · salary · meaning · in tamil · in telugu
· in malayalam · in kannada (until those mediums exist) · youtube · free course
· certificate course · government course

## Ad copy rules (Google Ads + ASCI)

- Prices in rupees, "inclusive of taxes", exactly as on the page:
  ₹999/month (Basic, also Hindi and Marathi medium), ₹1,999, ₹1,599, ₹2,499,
  ₹2,499. Ads to users outside India use the labeled list. There is no demo
  class (retired 4 Nov 2026): "demo class" / "trial class" keywords go to
  /free-consultation, and the ad must not promise a free class.
- Allowed proof points: live batch of about 6 · same teacher · Bolo daily
  practice app · weekly teacher review · taught in Hindi or Marathi · one
  month at a time, no auto-debit, no loans · free consultation on WhatsApp.
- Never: "guaranteed job / fluency", "fluent in 30 days", "best / No. 1
  institute in India", "certified", fake countdowns or "last 2 seats".
- Offer end dates must be real (launch offer ends 30 Nov 2026).

## Competitor terms

- Google Ads lets you bid on competitor names as **keywords** (e.g.
  "cambly alternative"), but in India this is legally contested: the Delhi
  High Court (DRS Logistics v. Google, 2021) held that using another
  company's trademark as a keyword can infringe in some circumstances.
  Default: **do not bid on competitor names**; take legal advice first if
  you want to. Generic comparison terms ("spoken english app vs live class")
  are safe.
- Do **not** put another company's trademark in ad text: the owner can file
  a complaint and Google will restrict the ad. Point such keywords to
  /english-institute-comparison-india, where the comparison is factual and
  carries the trademark notice.
- PlanetSpark terms: target parents only if a children's course launches;
  adults searching "planetspark for adults" can go to the comparison page.

## Conversion tracking — decision needed before launch

The site deliberately ships **no tracking** (the CI quality gate fails on
googletagmanager, utm_source and similar). Google Ads optimisation needs a
conversion signal. Options, in order of privacy:

1. Count WhatsApp enquiries manually per week and use Ads "offline
   conversions" upload (no site change).
2. Add Google's tag for one event only (WhatsApp button click), with a
   consent notice and a privacy-policy update — requires relaxing the CI
   check deliberately.

Start with option 1 and a small daily budget; revisit after 4 weeks.
