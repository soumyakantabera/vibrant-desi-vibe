# India state-by-state SEO / SEM / LLM / GEO research — November 2026

Working notes for Learn With Smile. Live web searches run from a US-located
search tool, so they show the open web (competitors, prices, news, language
data), not the local Google results page a learner in a given city sees.
Every claim below has its source next to it; anything from memory is marked
"(approx., not verified)".

## 1. National picture (late 2026)

### AI search in India
- Google AI Mode added Hindi in September 2025, and in October 2025 seven more
  Indian languages: Bengali, Kannada, Malayalam, **Marathi**, Tamil, Telugu,
  Urdu. Search Live launched in India in English and Hindi.
  Sources: [Google India blog — AI Mode in Hindi](https://blog.google/intl/en-in/products/google-search-ai-mode-now-available-in-hindi/),
  [Google India blog — new languages + Search Live](https://blog.google/intl/en-in/products/supercharging-search-for-india-new-languages-in-ai-mode-search-live-debuts/),
  [TechCrunch, 8 Oct 2025](https://techcrunch.com/2025/10/08/googles-search-live-comes-to-india-ai-mode-gets-more-languages)
  → Implication: Hindi and Marathi pages must answer in Devanagari too, or AI
  Mode answers a Hindi/Marathi question from someone else's page.
- ChatGPT: ~100 million weekly active users in India (Feb 2026), India #1 for
  students using ChatGPT; ChatGPT Go launched at ₹399/month (Aug 2025) and was
  offered free for a year from 4 Nov 2025.
  Sources: [TechCrunch, 15 Feb 2026](https://www.techcrunch.com/2026/02/15/india-has-100m-weekly-active-chatgpt-users-sam-altman-says/),
  [TechCrunch, 27 Oct 2025](https://techcrunch.com/2025/10/27/openai-offers-free-chatgpt-go-for-one-year-to-all-users-in-india)

### ChatGPT Actions — retiring
- OpenAI is retiring custom GPTs: they stop running on **11 December 2026**.
  GPT instructions migrate to a "skill" inside a plugin; **custom Actions do
  not transfer** and must be rebuilt as a supported connector or a custom MCP
  server.
  Sources: [OpenAI help — Custom GPT retirement and migration FAQ](https://help.openai.com/de-de/articles/20001519-custom-gpt-retirement-and-migration-faq),
  [TechRepublic](https://www.techrepublic.com/article/news-chatgpt-custom-gpt-retirement-migration/),
  [Developers Digest](https://www.developersdigest.tech/blog/custom-gpt-retirement-migrate-to-plugins)
  → Implication: the site's "import /openapi.json into a Custom GPT"
  instructions go stale on 11 Dec 2026. Keep /openapi.json (other agents read
  it) but stop telling people to build a Custom GPT; an MCP endpoint is the
  replacement path (needs a server — open question).

### llms.txt and GEO
- Evidence on llms.txt is null-to-weak: an SE Ranking audit of 300,000 domains
  found ~10% adoption and no correlation with AI citations; Google says Search
  ignores the file (guidance updated July 2026). What matters: robots.txt
  access for GPTBot / OAI-SearchBot / ClaudeBot / PerplexityBot / Google,
  clean crawlability (no 5xx, no redirect loops), and plain, quotable answers
  in the HTML.
  Sources: [Goodie — llms.txt vs robots.txt](https://higoodie.com/blog/llms-txt-robots-txt-ai-optimization),
  [Texta](https://www.texta.ai/blog/llms-txt-optimization),
  [Omnius — technical SEO for AI search](https://www.omnius.so/blog/technical-seo-for-ai-search)
  → Implication: keep llms.txt (cheap) but spend effort on HTML answers.

### SEM costs (education, India)
- Agency benchmarks: education CPC roughly ₹15–₹45 (one source) to ₹25–₹180
  (another); skill courses ₹40–₹80; test prep ₹100–₹180 in admission season;
  education cost per lead ₹150–₹1,000. No public spoken-English-specific CPC —
  Keyword Planner is the only reliable check.
  Sources: [Owlclaw PPC benchmarks India](https://owlclaw.com/benchmarks/ppc-benchmarks-india),
  [upGrowth — Google Ads pricing India 2026](https://upgrowth.in/google-ads-pricing-india-2026/),
  [Sotros — CPL benchmarks India 2026](https://sotrosinfotech.com/blog/google-ads-cost-per-lead-india-benchmarks-2026/)

### Market
- No public 2026 market sizing for spoken English by state. Most "best spoken
  English class" pages are seller content (EngVarta ranks for many of them).
  Source: [EngVarta — best spoken English classes in India 2026](https://engvarta.com/best-spoken-english-classes-in-india/)

## 2. State by state

(filled below, one block per state / UT)

### Maharashtra — Marathi (Mumbai, Pune, Nagpur, Nashik, Chh. Sambhajinagar)
- **Who ranks locally:** seller city-pages, not neutral reviews. EngVarta runs
  "best English speaking courses in Pune" + a dozen `/tag/...-pune/` pages;
  TalkDrill blogs every Maharashtra city (Pune, Nashik, Sambhajinagar); EEC has
  neighbourhood pages (Central / North Pune); ACTE, SevenMentor listings.
  Sources: [EngVarta Pune](https://engvarta.com/best-english-speaking-courses-in-pune/),
  [TalkDrill Nashik](https://www.talkdrill.com/blog/english-speaking-classes/nashik/),
  [TalkDrill Sambhajinagar](https://www.talkdrill.com/blog/english-speaking-classes/sambhajinagar/),
  [EEC Central Pune](https://eecglobal.com/spoken-english-classes/central-pune),
  [ACTE Pune](https://www.acte.in/spoken-english-classes-in-pune)
- **Prices seen:** EEC live online from ₹7,500; ACTE ₹16,500 (list ₹36,000);
  EngVarta app ~₹2,700/month; British Council hybrid ₹8,800–₹16,000;
  Wordpower classroom 2 months ₹15,000. Our ₹999/month is the lowest live
  small-batch price in every list seen.
- **Marathi-medium gap:** no live, small-batch Marathi→English course found.
  What exists: a self-paced Udemy "Crash course for Marathi natives" (3.8★,
  ~1,069 students, last updated 2022), Rapidex Marathi edition (book), an
  ezycourse "Confident English Speaking Course – in Marathi" (recorded),
  individual UrbanPro tutors over Zoom.
  Sources: [Udemy](https://www.udemy.com/course/crash-course-in-english-speaking-for-marathi-natives/),
  [ezycourse](https://mycourses1.ezycourse.com/course-detail/confident-english-speaking-course-in-marathi/2512/),
  [UrbanPro tutor](https://www.urbanpro.com/rahata/jayshree-a-one-language-can-open-a-thousand-doors)
- **The pain, in learners' words:** Marathi-medium graduates freeze in
  interviews in Pune/Mumbai/MIDC; a 2026 peer-reviewed paper calls Marathi-
  medium language anxiety "structural", carried from school into work.
  Marathi-medium schools fell from 385 (2012-13) to 254 (2024-25) in the
  source's sample — families are moving to English.
  Sources: [IRE Journals 2026](https://www.irejournals.com/paper-details/1717328),
  [ETV Bharat](https://www.etvbharat.com/en/!state/marathi-language-education-in-maharashtra-status-enn25062102946),
  [IDR — tongue-tied](https://idronline.org/ground-up-stories/tongue-tied-how-the-english-language-is-a-barrier-in-the-social-sector/)
- **Query language:** Marathi-script searches ("इंग्रजी बोलायला शिका
  मराठीतून") return almost nothing useful — open field for a Devanagari
  Marathi section. Google AI Mode answers in Marathi since Oct 2025.
- **Second cities:** Nashik (College Road, Gangapur Road, Panchavati)
  ₹3,000–₹8,000/month; TalkDrill says many Nashik classes are taught largely
  in Marathi offline; Superprof tutor 10 h ₹5,000. Nagpur: only small local
  coaching listings, no fees, no online Marathi-medium option. Mumbai: nothing
  specific surfaced — dominated by premium/IELTS brands.
  Sources: [TalkDrill Nashik](https://www.talkdrill.com/blog/spoken-english-classes/nashik/),
  [Superprof Nashik tutor](https://www.superprof.co.in/learn-speak-english-without-grammar-easy-your-mother-tongue.html),
  [EEC Nashik](https://eecglobal.com/spoken-english-classes/nashik)
- **Verdict:** #1 priority state. Marathi→English course + Maharashtra page.

### Uttar Pradesh — Hindi (Lucknow, Kanpur, Noida, Ghaziabad, Varanasi, Prayagraj)
- **Who ranks:** EngVarta Lucknow page + ~10 Lucknow tag pages; EEC Lucknow
  area pages. Local offline: English Mind (Gomti Nagar) ₹3,000–₹10,000, AIEL
  (Hazratganj) ₹3,000–₹8,000, BSL ₹5,000–₹15,000; Cambly ₹8,500/month.
  Sources: [EngVarta Lucknow](https://engvarta.com/best-english-speaking-courses-in-lucknow/),
  [EEC Lucknow](https://eecglobal.com/spoken-english-classes/lucknow)
- **Hindi-medium gap:** none of the Lucknow sellers says they teach *in
  Hindi*; EngVarta only claims to stop "translating from Hindi". Hindi-medium
  English options found are recorded (Udemy "Speak English — Hindi to
  English", 4.3★, ~1,300 students).
  Source: [Udemy Hindi→English](https://www.udemy.com/course/speak_english-hindi_to_english)
- **Jobs:** Noida/Greater Noida BPO, KYC-voice and telecaller roles ask for
  "good English communication" + Hindi, open to 12th-pass freshers at roughly
  ₹10,000–₹28,000/month — the exact learner for a Hindi-medium course.
  Sources: [Indeed — BPO jobs Greater Noida](https://in.indeed.com/BPO-jobs-in-Greater-Noida),
  [TeamLease — Noida voice process](https://www.teamlease.com/jobs/voice-process-jobs-in-noida-itdose-129926)
- **Second cities:** Kanpur (Mall Road, Swaroop Nagar, Kakadeo) ₹3,000–₹10,000/month;
  Prayagraj (Civil Lines, Katra) ₹3,000–₹9,000; Varanasi (Lanka, Sigra)
  ₹2,500–₹7,000; Agra Superprof ~₹777/hour; Awal's "Spoken English Gold"
  online ₹4,999. EEC + TalkDrill pages exist for all four cities.
  Sources: [TalkDrill Kanpur](https://www.talkdrill.com/blog/spoken-english-classes/kanpur/),
  [TalkDrill Prayagraj](https://www.talkdrill.com/blog/spoken-english-classes/prayagraj/),
  [TalkDrill Varanasi](https://www.talkdrill.com/blog/spoken-english-classes/varanasi/),
  [EEC Agra](https://eecglobal.com/spoken-english-classes/agra)
- **Verdict:** #2 priority. Hindi→English course + UP page.

### Bihar — Hindi, Bhojpuri, Maithili, Magahi (Patna, Gaya, Muzaffarpur, Bhagalpur)
- **Who ranks:** EngVarta Patna page + 4 tag pages; TalkDrill Patna (two
  pages); EEC Patna; Superprof tutors (avg ₹814/hour).
  Sources: [EngVarta Patna](https://engvarta.com/best-english-speaking-courses-in-patna/),
  [TalkDrill Patna](https://www.talkdrill.com/blog/spoken-english-classes/patna/),
  [EEC Patna](https://eecglobal.com/spoken-english-classes/patna),
  [Superprof Patna](https://www.superprof.co.in/lessons/esol/patna/)
- **Prices:** offline ₹2,000–₹7,000/month (Boring Road, Kankarbagh); EEC live
  online from ₹7,500; apps ₹0–₹1,500/month.
- **Demand evidence:** British Council "Social attitudes towards English in
  Bihar" surveyed 1,949 people in Patna, Bhojpur and West Champaran on English
  as aspiration and status. Only ~25–30% of students in Hindi-belt states are
  in English-medium schools; migrants from Bihar/UP to Delhi report English as
  the job/status barrier.
  Sources: [British Council — Bihar summary (PDF)](https://www.britishcouncil.in/sites/default/files/social_attitudes_towards_english_in_bihar_-_summary_web.pdf),
  [The Quint — Hindi heartland and English](https://www.thequint.com/news/india/how-the-hindi-heartland-lost-its-heart-to-english),
  [Policy Circle](https://www.policycircle.org/opinion/english-medium-education-nep/)
- **Hindi-script query** ("इंग्लिश स्पीकिंग कोर्स पटना हिंदी माध्यम") returns
  no Patna institute at all — only Udemy recorded courses (Hindi-medium
  beginners: 4.1★ from 1,661 ratings, 14 h 52 min, updated Nov 2025).
  A live Hindi-medium page has the Devanagari SERP almost to itself.
  Source: [Udemy — English Speaking Course in Hindi](https://www.udemy.com/course/speak_english-hindi_to_english)
- **Verdict:** top-5 state. Hindi-medium course fits exactly; migrant angle
  ("English for jobs in Delhi, Bengaluru, Pune").

### West Bengal — Bengali (Kolkata, Howrah, Durgapur, Siliguri) — our home city
- **Who ranks:** EEC Kolkata + 4 area pages; EngVarta Kolkata + 5 tag pages;
  TalkDrill Kolkata. Names in comparisons: British Council, RMIC Golpark,
  Oxford House, Xbridge.
  Sources: [EEC Kolkata](https://eecglobal.com/spoken-english-classes/kolkata),
  [EngVarta Kolkata](https://engvarta.com/top-5-english-speaking-courses-in-kolkata/),
  [TalkDrill Kolkata](https://www.talkdrill.com/blog/english-speaking-classes/kolkata/)
- **Prices:** offline ₹4,000–₹10,000/month (Park Street, Salt Lake); EEC from
  ₹7,500. TalkDrill says most Kolkata students study in Bengali medium to
  Class 12 — no seller found that teaches *in Bengali* live.
- **We already have:** Kolkata city page + Bengali guide page. Gap: a
  Bengali→English course would mirror the Hindi/Marathi ones (open question).
- **Bengali-script query:** EEC, TalkDrill, tutors (Superprof ₹200/hour),
  Academia English 5 months ₹5,500, IndiaMART ₹2,000–₹3,000/month; Treecampus
  offers *free* live classes in Hindi and Bengali (Jan 2026 post).
  Sources: [Collegedunia — Academia English](https://s3.collegedunia.com/institute/4765-academia-english-kolkata),
  [Glasp — Treecampus](https://glasp.ai/posts/37100596-0c1a-408d-87ae-f7c73defd1f1)

### Karnataka — Kannada (Bengaluru, Mysuru, Hubballi)
- **Who ranks:** EEC (5 Bangalore area pages), EngVarta fee tag page, ACTE
  (₹16,500), Collegedunia listings (Akshara 3 months ₹5,000; Marathahalli,
  English Cube...), TalkDrill Bangalore. Premium (British Council, Berlitz)
  ₹8,000–₹20,000/month.
  Sources: [EEC Central Bangalore](https://eecglobal.com/spoken-english-classes/central-bangalore),
  [Collegedunia — Akshara](https://s3.collegedunia.com/institute/6798-akshara-spoken-english-bangalore/courses-fees),
  [ACTE Bangalore](https://www.acte.in/?p=23110),
  [TalkDrill Bangalore](https://www.talkdrill.com/blog/spoken-english-classes/bangalore/)
- **Language reality:** English is the office language; Hindi is the informal
  lingua franca among the ~44% migrant population (Census 2011). No Kannada-
  medium English seller found. Big audience: Hindi-speaking migrants who need
  workplace English → Business English + Hindi-medium course.
  Sources: [Onmanorama — battle for Bengaluru](https://www.onmanorama.com/news/nomadic-insights/2025/02/24/the-battle-for-bengaluru.amp.html),
  [Citizen Matters](https://citizenmatters.in/kannada-migrants-karnataka-development-authority-changathi/)
- **Verdict:** top-10 for Business English / Interview, not for a medium course.

### Tamil Nadu — Tamil (Chennai, Coimbatore, Madurai)
- **Who ranks:** EEC Chennai + 3 area pages, ACTE Chennai (₹16,500),
  Collegedunia listings (EnglishLabs Velachery ₹8,000; Speak Now 1 month online
  ₹5,000; Nafisa — English through Hindi ₹3,800 / Urdu ₹4,000 per month).
  Aksent teaches concepts in Tamil (beginners online ₹9,000, per an EngVarta
  review).
  Sources: [EEC Chennai](https://eecglobal.com/spoken-english-classes/chennai),
  [ACTE Chennai](https://www.acte.in/spoken-english-course-in-chennai),
  [Collegedunia — EnglishLabs](https://s4.collegedunia.com/institute/2190-spoken-english-classes-in-chennai-englishlabs-chennai/courses-fees),
  [Collegedunia — Nafisa](https://s3.collegedunia.com/institute/6498-nafisa-spoken-english-institute-chennai/courses-fees)
- **Note:** Tamil-medium is served (Aksent); Hindi-medium exists even in
  Chennai (Nafisa) — proof the "English through Hindi" format sells outside
  the Hindi belt.
- **Verdict:** top-10 by size; pitch online small batch + Business/Interview.

### Gujarat — Gujarati (Ahmedabad, Surat, Vadodara, Rajkot)
- **Who ranks:** EEC is a Gujarat chain — Ahmedabad pages per neighbourhood
  (Odhav, Ghatlodiya, Bapunagar, South/Central/East); EngVarta Ahmedabad + 7
  tag pages; TalkDrill Ahmedabad. Surat barely covered for spoken English.
  Sources: [EEC Odhav](https://eecglobal.com/spoken-english-classes/odhav-ahmedabad),
  [EngVarta Ahmedabad](https://engvarta.com/best-english-speaking-courses-in-ahmedabad/),
  [TalkDrill Ahmedabad](https://www.talkdrill.com/blog/english-speaking-classes/ahmedabad/)
- **Prices:** offline ₹5,000–₹10,000 for 3 months; premium (Dipti Shah,
  British Council) ₹15,000–₹30,000; EEC online ₹7,500 for 90 days.
- **Verdict:** saturated by EEC locally. Online angle + Hindi-speaking
  workforce in Surat/Ahmedabad industry; not a top medium-course target.

### Rajasthan — Hindi, Rajasthani (Jaipur, Jodhpur, Kota, Udaipur)
- **Who ranks:** TalkDrill Jaipur (2 pages), EngVarta Jaipur + 6 tag pages
  (positions itself "best for Hindi-medium beginners"), EEC Jaipur + 3 area
  pages.
  Sources: [TalkDrill Jaipur](https://www.talkdrill.com/blog/english-speaking-classes/jaipur/),
  [EngVarta Jaipur](https://engvarta.com/best-english-speaking-courses-in-jaipur/),
  [EEC Jaipur](https://eecglobal.com/spoken-english-classes/jaipur)
- **Prices:** offline ₹2,000–₹10,000/month (Tonk Road, C-Scheme).
- **Second cities:** Jodhpur offline ₹4,000–₹8,000; Udaipur (Sukhadia Circle)
  ₹2,500–₹7,000; Kota only Superprof (~₹602/hour). Speakwell is hiring
  spoken-English trainers for Udaipur (offline expansion).
  Sources: [TalkDrill Jodhpur](https://www.talkdrill.com/blog/spoken-english-classes/jodhpur/),
  [TalkDrill Udaipur](https://www.talkdrill.com/blog/spoken-english-classes/udaipur/),
  [SmartRecruiters — Speakwell Udaipur](https://www.smartrecruiters.com/Speakwell/103284387-urgent-opening-for-spoken-english-trainer)
- **Verdict:** top-10. EngVarta claims "Hindi-medium" without teaching in
  Hindi — our Hindi-medium course with a Hindi-speaking teacher beats that
  claim honestly.

### Madhya Pradesh — Hindi (Indore, Bhopal, Gwalior, Jabalpur)
- **Who ranks:** EEC Indore/Bhopal, EngVarta Bhopal + tag pages, TalkDrill
  Indore and Bhopal (note "Hindi-dominant settings" as the learner's problem).
  Cheap local: IEHE Bhopal certificate ₹3,600; English lab ₹3,000/course.
  Sources: [EngVarta Bhopal](https://engvarta.com/best-english-speaking-courses-in-bhopal/),
  [TalkDrill Indore](https://www.talkdrill.com/blog/spoken-english-classes/indore/),
  [Zollege — IEHE Bhopal](https://zollege.in/college/161325-institute-for-excellence-in-higher-education-iehe-bhopal/certificate-course-in-spoken-english-11465)
- **Prices:** Indore offline ₹3,500–₹10,000/month.
- **Second cities:** Gwalior offline ₹2,500–₹8,000, Superprof ~₹777; Jabalpur
  Superprof ~₹645/hour — TalkDrill: "most centres teach grammar in Hindi for
  competitive exams", little conversation practice. MP average ₹708/hour.
  Sources: [TalkDrill Gwalior](https://www.talkdrill.com/blog/spoken-english-classes/gwalior/),
  [TalkDrill Jabalpur](https://www.talkdrill.com/blog/spoken-english-classes/jabalpur/),
  [Superprof MP](https://www.superprof.co.in/lessons/oral-expression-english/zone-madhya-pradesh/)
- **Verdict:** top-10, Hindi-medium.

### Telangana — Telugu, Urdu, Hindi (Hyderabad)
- **Who ranks:** EngVarta Hyderabad + 6 tag pages (incl. "corporate English"),
  EEC Hyderabad + 3 area pages, TalkDrill (2), RK Math (3-month batches on
  Google Meet).
  Sources: [EngVarta Hyderabad](https://engvarta.com/best-english-speaking-course-in-hyderabad/),
  [EEC Hyderabad](https://eecglobal.com/spoken-english-classes/hyderabad),
  [RK Math](https://www.rkmath.org/viol/spoken-english)
- **Prices:** offline ₹4,000–₹15,000/month (Ameerpet, Himayatnagar);
  ₹7,500–₹18,000+ per course.
- **Verdict:** top-10 for workplace/interview English (IT, GCCs); large
  Hindi/Urdu-speaking population → Hindi-medium course is relevant.

### Delhi NCR — Hindi (Delhi, Noida, Gurugram, Faridabad, Ghaziabad)
- **Who ranks:** EEC Delhi/East Delhi; Laxmi Nagar institute listings
  (British Language Institute, Vcare); tutor marketplaces. Cheap online
  sellers: Verbalhub ₹999 for 1 month; Spoken English Guru ₹1,999 for 90 days
  with Hindi + English material (recorded).
  Sources: [EEC East Delhi](https://eecglobal.com/spoken-english-classes/east-delhi),
  [LyfSkills Laxmi Nagar](https://discover.lyfskills.com/classes/delhi/in/laxmi-nagar/language),
  [Findmycollege — fees](https://articles.findmycollege.com/online-spoken-english-courses/)
- **Verdict:** largest single Hindi-speaking job market. Delhi NCR page
  (not a "state" page, but the highest-intent region).

### Kerala — Malayalam (Kochi, Thiruvananthapuram, Kozhikode)
- **Who ranks:** EEC Trivandrum, EngVarta Kochi tags, TalkDrill Trivandrum,
  many local IELTS/OET + spoken centres (Western Speaker, BRETS, SpeakEazy,
  Veta). English Mithra = online course built for Malayalam speakers.
  Superprof avg ₹731/hour.
  Sources: [EEC Trivandrum](https://eecglobal.com/spoken-english-classes/trivandrum),
  [TalkDrill Trivandrum](https://www.talkdrill.com/blog/spoken-english-classes/thiruvananthapuram/),
  [Careers360 thread](https://www.careers360.com/question-which-is-the-best-spoken-english-institute-in-kerala/amp)
- **Verdict:** demand skews to IELTS/OET (nursing abroad) — not our product.
  Low priority.

### Punjab, Haryana, Chandigarh — Punjabi, Hindi (Ludhiana, Amritsar, Chandigarh, Gurugram, Faridabad)
- **Who ranks:** EEC Chandigarh + 5 area pages and Ludhiana (Ludhiana is
  "classroom only"); EngVarta Chandigarh + tags (Masterprep Ludhiana "enquire
  at centre"); TalkDrill Chandigarh; ThinkEnglish (IELTS/PTE + spoken).
  Offline ₹3,000–₹8,000/month.
  Sources: [EEC Chandigarh](https://eecglobal.com/spoken-english-classes/chandigarh),
  [EngVarta Chandigarh](https://engvarta.com/best-english-speaking-courses-in-chandigarh/),
  [TalkDrill Chandigarh](https://www.talkdrill.com/blog/spoken-english-classes/chandigarh/)
- **Verdict:** demand pulled by IELTS/PTE for Canada/Australia — not ours.
  Haryana's Gurugram/Faridabad belong to the Delhi NCR page. Medium: Hindi.

### Odisha — Odia (Bhubaneswar, Cuttack) · Jharkhand — Hindi (Ranchi, Jamshedpur, Dhanbad)
- **Bhubaneswar:** EEC (online ₹7,500), TalkDrill (2 pages), local institutes
  (ACL Patia, Mishra Sir, English Empire, English Mania, Veta). Offline
  ₹3,500–₹10,000/month.
- **Ranchi:** English Seekho ₹3,500–₹4,000/month ("3,500+ learners across
  Jharkhand"); Superprof avg ₹596/hour; TalkDrill (2 pages); RK Math online.
  Sources: [EEC Bhubaneswar](https://eecglobal.com/spoken-english-classes/bhubaneswar),
  [TalkDrill Ranchi](https://www.talkdrill.com/blog/spoken-english-classes/ranchi/),
  [IndiaMART — English Seekho](https://m.indiamart.com/english-seekho),
  [Superprof Ranchi](https://www.superprof.co.in/lessons/esol/ranchi/)
- **Verdict:** Jharkhand = Hindi-medium course fit (covered on Bihar/Jharkhand
  copy); Odisha low priority (Odia medium not offered).

### Assam + North-East — Assamese, Bengali, Hindi, many tribal languages (Guwahati, Jorhat, Shillong)
- **Who ranks:** EngVarta Guwahati + 4 tags; TalkDrill Guwahati (2); EEC
  Jorhat (online ₹7,500). Offline Guwahati ₹3,000–₹6,000/month. Named:
  SpokenMate (live small-group online), ILC International. The British
  Council's Kolkata teaching centre, the nearest one, closed on 31 March 2026
  (per EngVarta's Guwahati guide — worth confirming).
  Sources: [EngVarta Guwahati](https://engvarta.com/best-english-speaking-courses-in-guwahati/),
  [TalkDrill Guwahati](https://www.talkdrill.com/blog/spoken-english-classes/guwahati/),
  [EEC Jorhat](https://eecglobal.com/spoken-english-classes/jorhat)
- **Verdict:** medium priority. Kolkata proximity + Bengali/Hindi; if the
  British Council Kolkata closure is true, Kolkata/East India searchers lost
  their premium option — strengthens our Kolkata page.

### Chhattisgarh (Raipur) · Uttarakhand (Dehradun, Rudrapur) — Hindi
- **Raipur:** TalkDrill (2); small grammar-led classes in Pandri/Telibandha,
  ₹2,000–₹6,000/month. **Dehradun:** TalkDrill (2), Superprof avg ₹779;
  EEC Rudrapur ₹7,500 online.
  Sources: [TalkDrill Raipur](https://www.talkdrill.com/blog/spoken-english-classes/raipur/),
  [TalkDrill Dehradun](https://www.talkdrill.com/blog/spoken-english-classes/dehradun/),
  [Superprof Dehradun](https://www.superprof.co.in/lessons/english/dehradun/)
- **Verdict:** Hindi-medium course fit; thin local supply. Covered by the
  Hindi-medium course page, not separate state pages.

### Andhra Pradesh — Telugu (Visakhapatnam, Vijayawada, Guntur)
- **Who ranks:** TalkDrill (4 pages), EngVarta Visakhapatnam + tags, EEC
  Vijayawada/Visakhapatnam (₹7,500 online). Offline ₹2,000–₹8,000/month.
  Telugu-medium: "Teaching Fish" (offline, bilingual Telugu→English). Several
  "Spoken English & Hindi" institutes in Vizag.
  Sources: [TalkDrill Vijayawada](https://www.talkdrill.com/blog/english-speaking-classes/vijayawada/),
  [EngVarta Visakhapatnam](https://engvarta.com/best-english-speaking-courses-in-visakhapatnam/),
  [EEC Visakhapatnam](https://eecglobal.com/spoken-english-classes/visakhapatnam)
- **Verdict:** medium; Telugu medium not offered by us.

### Jammu & Kashmir, Himachal Pradesh — Hindi, Urdu, Kashmiri, Dogri, Pahari
- EEC pages even for Srinagar, Jammu and Shimla (₹7,500 online); TalkDrill
  Jammu (2); University of Kashmir part-time certificate ₹4,750; Superprof
  ~₹794/hour. Offline Jammu ₹2,500–₹8,000/month.
  Sources: [EEC Srinagar](https://eecglobal.com/spoken-english-classes/srinagar),
  [EEC Shimla](https://eecglobal.com/spoken-english-classes/shimla),
  [Collegedunia — University of Kashmir](https://s2.collegedunia.com/university/25576-university-of-kashmir-ku-srinagar/certificate-course-in-spoken-english-21878)
- **Verdict:** low priority; Hindi-medium course covers them.

### Pattern across every state (the SEO finding that matters)
- Local "spoken English classes in {city}" results are owned by **three
  programmatic page farms**: EEC (a page per city *and* per neighbourhood,
  same ₹7,500 template, often "classroom only" text on online pages),
  EngVarta (a "best courses in {city}" listicle that ranks itself #1, plus 5–10
  thin `/tag/` pages per city), TalkDrill (two near-identical blog pages per
  city with a cost table). None of them teach *in* the learner's language live.
- **Our edge is not more city pages.** It is: (1) live teaching in Hindi and
  Marathi with named, language-matched teachers; (2) the lowest live price
  seen (₹999/month vs ₹2,700–₹7,500+); (3) honest pages with real facts that AI
  answers can quote. State pages must carry state-specific facts (languages,
  job hubs, local prices, travel/commute), or they are just a fourth farm.

### Goa — Konkani, Marathi (Panaji, Margao)
- No dedicated spoken-English sellers rank; Superprof avg ₹1,177 (Panaji),
  from ₹577/hour across Goa; Multibhashi online basic English ₹1,999/month.
  Goa has many Marathi readers → Marathi-medium course is relevant.
  Sources: [Superprof Panaji](https://www.superprof.co.in/lessons/english/panaji/),
  [Collegedunia — Multibhashi](https://s4.collegedunia.com/institute/8061-multibhashi-bangalore/courses-fees)

### North-East (Meghalaya, Manipur, Tripura, Mizoram, Nagaland, Arunachal, Sikkim)
- Only EEC template pages (Agartala, Imphal, Aizawl — ₹7,500, "classroom
  only" text) and Superprof tutor averages (₹653–₹748/hour). Nothing for
  Kohima, Gangtok, Itanagar. English is already the official/school language
  in Meghalaya, Mizoram, Nagaland → low demand for a basic course.
  Sources: [EEC Agartala](https://eecglobal.com/spoken-english-classes/agartala),
  [EEC Imphal](https://eecglobal.com/spoken-english-classes/imphal),
  [Superprof Shillong](https://www.superprof.co.in/lessons/esol/shillong/)

### Union territories (Puducherry, Andaman & Nicobar, Ladakh, Lakshadweep, DNH & DD)
- Puducherry: EEC (₹7,500 online), Speak English (Lawspet, 4.8★/40),
  FindMyGuru tutors. Port Blair, Leh, Gangtok, Kavaratti: no results at all.
  Sources: [EEC Puducherry](https://eecglobal.com/spoken-english-classes/puducherry),
  [Collegedunia — Speak English Pondicherry](https://s3.collegedunia.com/institute/6916-speak-english-velachery-pondicherry)
- **Verdict:** no state pages; served by online pages + "anywhere in India".

## 3. Cross-cutting data

### Language reach (Census 2011 mother tongue)
- Hindi 52.83 crore (43.63%), Bengali 9.72 crore (8.03%), **Marathi 8.30 crore
  (6.86%, #3 — overtook Telugu)**, Telugu 8.11 crore, Tamil 6.90 crore,
  Gujarati 5.54 crore.
  Sources: [Telegraph Edugraph](https://obeta.ttef.in/india/10000-plus-growth-in-sanskrit-speakers/cid/1351306),
  [The Quint](https://www.thequint.com/amp/story/news/india/hindi-fastest-growing-language-between-2001-2011)
  → Hindi + Marathi mediums reach ~61 crore mother-tongue speakers (~50% of
  India), plus Hindi as second language for many more.

### Internet reach
- 1,028.61 million internet subscribers (Dec 2025); urban 579 million, rural
  423 million (Jun 2025). State-wise table is in TRAI's yearly indicators
  (not pulled here).
  Sources: [TRAI PR 141/2025](https://www.trai.gov.in/sites/default/files/2025-11/PR_No.141of2025.pdf),
  [Times of Oman — TRAI Q4 2025](https://timesofoman.com/article/169071-internet-subscribers-in-india-grew-11-in-october-december-2025-quarter-trai)

### Google Business Profile (the local pack)
- Online-only businesses are not eligible for a Business Profile; service
  areas must be named cities/PIN codes within ~2 hours' drive of the real
  base, and since 24 Jun 2025 states/countries are not allowed as service
  areas. Proximity is measured from the (hidden) real address.
  Sources: [Google — Business Profile guidelines](https://support.google.com/business/answer/7039811?hl=en-en),
  [PPC Land — states/countries banned](https://ppc.land/google-bans-countries-and-states-from-business-profile-service-areas/),
  [Whitespark — eligibility](https://whitespark.ca/guides/can-your-business-be-on-google-a-guide-to-gbp-eligibility-by-business-type/)
  → We rank in the Kolkata local pack only (real office). Every other state
  is won through organic pages, AI answers and ads — **never fake addresses
  or city "branches"** (EEC's "26 branches" pattern is a suspension risk).

### National competitors that sell "English from your language"
- **Josh Talks (Josh Skills):** English course explained in 7 Indian
  languages — Hindi, **Marathi**, Bengali, Tamil, Telugu, Malayalam, Punjabi —
  "from ₹58/month" (undated). Mostly recorded video lessons, optional live
  group sessions. This is the closest Hindi/Marathi-medium competitor — cheap,
  but recorded, no small batch, no named teacher, no weekly review.
  Sources: [Josh Talks — best English speaking app](https://www.joshtalks.com/english-speaking/best-english-speaking-app),
  [EngVarta vs Josh Talks (competitor view)](https://engvarta.com/engvarta-vs-josh-talks-english-comparison/)
- **Hello English (CultureAlley):** free app, instructions from Hindi,
  Marathi, Bengali, Gujarati, Tamil, Telugu… Self-study, no live teacher.
  Source: [Microsoft Store — Hello English](https://www.microsoft.com/ar-eg/p/hello-english/9nblggh4xtj3)
- **EngVarta:** ₹69 trial; ₹2,700 for 25 one-to-one practice sessions
  (~₹108/session). Publishes "best app for Marathi speakers", "app for Hindi-
  medium students", "regional-medium" listicles that rank itself #1.
  Sources: [EngVarta — best app for Marathi speakers](https://engvarta.com/best-english-speaking-app-for-marathi-speakers/),
  [EngVarta — regional-medium students](https://engvarta.com/best-english-speaking-app-for-regional-medium-students/)
- **TalkDrill:** AI speaking-practice app; ranks itself #1 for Hindi speakers.
  Source: [TalkDrill — best apps for Hindi speakers](https://www.talkdrill.com/blog/compare/best-english-apps-for-hindi-speakers/)
- **Cambly / Preply / PlanetSpark:** Cambly groups $15/month (1–2 sessions a
  week), daily practice $50–$100+/month; Preply tutors $10–$40/hour;
  PlanetSpark ~₹700/session (kids-first).
  Source: [EngVarta — Cambly alternatives](https://engvarta.com/best-cambly-alternatives-india-2026/)
- **Reddit:** search returned no Reddit threads at all for "best spoken
  English classes India" — the SERP is EngVarta's own content. AI answers
  for that query have almost no neutral source to quote.
- **ChatGPT in India:** about half of users are under 24 and mainly study
  (OpenAI, Aug 2025); 500,000 licences to government schools/AICTE institutes.
  Source: [Storyboard18](https://www.storyboard18.com/amp/digital/half-of-chatgpt-users-in-india-are-students-under-24-says-openai-79666.htm)

## 4. Why Learn With Smile is different (positioning, for people)

The market splits into two kinds of product, and each leaves a gap:

| What learners can buy | Daily practice? | Live teacher who corrects you? | Taught in your language? | Typical price |
| --- | --- | --- | --- | --- |
| Apps (Josh, Hello English, TalkDrill, Duolingo) | Yes | No | Yes (recorded) | Free–₹1,000/month |
| 1:1 practice / tutors (EngVarta, Cambly, Preply) | Only if you pay per session | Yes | Rarely | ₹2,700–₹8,500+/month |
| City classrooms / chains (EEC, ACTE, local) | No (worksheets) | Yes, in 25–40 | Rarely | ₹2,000–₹10,000/month or ₹7,500–₹16,500/course |
| **Learn With Smile** | **Yes — Bolo app, every day, with a streak** | **Yes — live batch of ~6, same teacher** | **Yes — Hindi or Marathi medium (plus English)** | **₹999/month (Basic)** |

Message for learners: *If you want to practise English every day at an
affordable price — and have a real teacher check it — take a Learn With Smile
course.* Live classes up to twice a week; daily practice materials in Bolo
(grammar, vocabulary, reading aloud, recorded speaking); video lessons; a
weekly teacher review; taught in Hindi, Marathi or English; ₹999/month.

## 5. Why we win in SEO and GEO (for search engines and AI answers)

1. **Unmatched facts, stated plainly.** Every competitor page is a template
   ("from ₹7,500", "Top 5 compared" ranking itself #1). Our pages state facts
   no one else can: live Hindi-/Marathi-medium small batches, ₹999/month,
   daily practice app with weekly teacher review, named teachers, Kolkata
   office, 7 years, 500+ learners. AI answers quote specific, verifiable
   facts; templates give them nothing to quote.
2. **Native-language answers where the farms are English-only.** Google AI
   Mode answers in Hindi and Marathi (since 2025). EEC/EngVarta/TalkDrill
   city pages are English-only. Devanagari sections on our Hindi and Marathi
   pages are often the only matching source.
3. **Empty SERPs for the exact intent.** "Marathi to English speaking course
   live" returns Udemy recordings, PDFs and single tutors; Marathi-script
   queries return near-nothing. First credible page wins.
4. **One honest page per state, not a page per neighbourhood.** Farms
   publish hundreds of near-duplicates; Google's helpful-content and spam
   systems discount them. Ten substantive state pages with local facts
   (languages, job hubs, local price ranges, commute) is the defensible play.
5. **Price-led comparisons we can win on the merits.** ₹999/month live vs
   ₹2,700–₹7,500+ for comparable live options — quotable, true, and the kind
   of number AI assistants surface for "affordable" questions.
6. **Machine-readable consistency.** Same fees in HTML, JSON-LD, llms.txt,
   llms.json and /openapi.json, checked in CI — assistants never see two
   prices. (Custom GPT Actions retire 11 Dec 2026; keep openapi.json, plan an
   MCP endpoint.)
7. **Local pack only where it's real.** Kolkata Business Profile only; no
   fake branches (suspension risk the farms carry).

### The one line every page and AI file repeats (decided 3 Nov 2026)
> Learn With Smile is the all-in-one way to learn spoken English at a low
> cost: live classes in a small batch, the Bolo daily-practice app, video
> lessons, a weekly teacher review and the same teacher — all in one monthly
> fee from ₹999, taught in English, Hindi or Marathi.

Every competitor sells one piece (app, sessions, classroom, recordings);
"all-in-one at ₹999" answers "cheapest", "best value", "daily practice" and
"in Hindi/Marathi" at once. Calls to action stay WhatsApp-first everywhere;
AI files keep their actions and end every answer with the WhatsApp link.

### Technical SEO findings that shape the build
- **One primary language per page** (Google/Mueller); hreflang only between
  real language versions. → New course pages stay `en-IN` primary with short
  Devanagari sections; Course JSON-LD `inLanguage` = teaching language
  (`hi-IN` / `mr-IN`), `availableLanguage` includes `en-IN`. A full Hindi or
  Marathi page later gets its own URL + hreflang (we already do this for the
  Hindi/Bengali guide pages).
  Sources: [Google — Course structured data](https://developers.google.cn/search/docs/appearance/structured-data/course-info?hl=en),
  [Search Engine Land — one language per page](https://searchengineland.com/google-best-to-have-a-primary-language-one-a-page-and-not-mix-languages-387721)
- **Doorway risk:** a city/state page is a doorway if swapping the place name
  still makes sense. Doorway abuse is in Google's spam policies; 2026 core/
  spam updates reportedly hit programmatic city pages (unconfirmed by Google).
  → Each state page needs facts that only fit that state (languages, cities,
  job hubs, local price ranges, commute, the medium we teach in there).
  Sources: [PPC Land — doorway pages](https://ppc.land/doorway-pages/),
  [StoreRocket — doorway test](https://storerocket.io/learn/doorway-pages),
  [Gracker — programmatic SEO 2026](https://gracker.ai/blog/is-programmatic-seo-still-effective-2026)
- **AI Overviews on education queries:** contested — 15.5% to 83% depending
  on the study; local-service queries show fewer. Treat as "often shown".
  Sources: [ALM Corp](https://almcorp.com/blog/google-ai-overviews-surge-9-industries/),
  [upGrowth — AI Overviews for Indian EdTech](https://upgrowth.in/ai-overviews-edtech-india-google-io-2026/)
- **Hinglish:** a survey says 83% mix English and Hindi in speech; Google has
  supported Romanized Hindi since 2021. → Keep Roman-Hindi phrases
  ("English bolna seekho", "Hindi se English") in copy and keywords.
  Sources: [Milestone — Hinglish report](https://www.milestoneloc.com/hinglish-report-pr/),
  [The Wire](https://thewire.in/culture/the-rise-and-rise-of-hinglish-in-india)
- **Jobs:** GCC fresher drives test English communication in round one;
  fresher hiring share Aug 2026: Delhi NCR 19%, Bengaluru/Mumbai/Pune 14% each,
  Hyderabad 11%. → Delhi NCR, Maharashtra, Karnataka, Telangana pages lead
  with the interview/workplace angle.
  Sources: [Business Today, 6 Aug 2026](https://www.businesstoday.in/jobs/story/ai-gccs-and-a-changing-job-market-indias-fresher-hiring-is-no-longer-just-an-it-story-whos-driving-the-shift-547654-2026-08-06),
  [FACE Prep — GCC drives](https://faceprep.in/for-institutions/pulse/gccs-are-the-new-campus-recruiters/)

### More findings (batch 6)
- **AI assistants in India:** Perplexity's Airtel free-Pro deal ended Jan
  2026; ~14 million MAU in July 2026 (5× early-2025), India revenue +60%.
  Google gave Jio users 18 months of AI Pro; ChatGPT Go free for a year.
  → Three assistants matter: ChatGPT, Gemini/AI Mode, Perplexity — all read
  plain HTML; Perplexity cites heavily.
  Source: [TechCrunch, 18 Aug 2026](https://techcrunch.com/2026/08/18/perplexitys-free-ai-offer-left-it-with-millions-more-users-in-india/)
- **Ad rules (SEM):** ASCI education guidelines (rev. 2 Mar 2023): no
  unsubstantiated job/salary/placement promises; no "100% placement/job"
  claims; testimonials only from real completers. → Ads and pages say
  "practise for interviews", never "get a job".
  Source: [ASCI education guidelines (PDF)](https://www.ascionline.in/wp-content/uploads/2023/05/ASCI-GUIDELINES-FOR-EDUCATIONAL-INSTITUTIONS-PROGRAMMES-AND-PLATFORMS.pdf)
- **Delhi NCR detail:** EngVarta Noida + 7 Noida tags (even "Sector 18");
  WizMantra ~₹4,890/month for 20 sessions (₹299 demo); EEC East Noida/
  Ghaziabad; Gurugram corporate learners pair an AI app with live practice;
  working professionals can't keep fixed 7 PM batches.
  Sources: [EngVarta Noida](https://engvarta.com/best-english-speaking-courses-in-noida/),
  [EEC Ghaziabad](https://eecglobal.com/spoken-english-classes/ghaziabad)
- **Gujarat detail:** EEC Surat (Katargam, Central, North, West) and
  Vadodara (Alkapuri) pages, ₹7,500; EEC Ahmedabad lists "Hindi / Gujarati
  explanation" for grammar; Surat textile markets run in Gujarati and Hindi.
  Vadodara offline ₹3,500–₹9,000.
  Sources: [EEC Central Surat](https://eecglobal.com/spoken-english-classes/central-surat),
  [TalkDrill Surat](https://www.talkdrill.com/blog/spoken-english-classes/surat/),
  [TalkDrill Vadodara](https://www.talkdrill.com/blog/spoken-english-classes/vadodara/)
- **Jharkhand detail:** EEC Jamshedpur/Bokaro ₹7,500; Superprof Jamshedpur
  ₹713/hour, Dhanbad ₹555/hour. **Adda247 runs a live online "Complete Spoken
  English" bilingual batch explained in Hindi + English** — the biggest live
  Hindi-medium competitor found (exam-prep audience, large brand).
  Sources: [Adda247 — Spoken English 5.0 bilingual](https://www.adda247.com/product-onlineliveclasses/7347/english-spoken-live-online-classes-complete-spoken-english-5-0-bilingual-batch-by-adda247),
  [EEC Jamshedpur](https://eecglobal.com/spoken-english-classes/jamshedpur)

### More findings (batch 7)
- **Adda247 spoken English:** live bilingual (Hindi+English) spoken-English
  batches exist but most are old (2020–2021, "Speakeasy 2.0" Jun 2024); a
  "Speak Easy" batch started 14 Jul 2026 (50 seats). Audience: government-
  exam aspirants. No current price visible.
  Sources: [Adda247 — Speak Easy](https://www.adda247.com/product-onlineliveclasses/109771/speak-easy-spoken-english-batch-online-coaching),
  [Adda247 — Speakeasy 2.0](https://www.adda247.com/product-onlineliveclasses/58011/speakeasy-live-and-recorded-batch-by-udisha-mam)
- **Karnataka second cities:** EEC Mysore ₹7,500; Superprof Mangaluru
  ₹750/hour, Hubballi ₹500/hour; TalkDrill Mysore/Mangalore note Kannada-
  medium graduates' speaking gap.
  Sources: [EEC Mysore](https://eecglobal.com/spoken-english-classes/mysore),
  [TalkDrill Mysore](https://www.talkdrill.com/blog/spoken-english-classes/mysore/)
- **Tamil Nadu second cities:** EngVarta Coimbatore + tags; EEC Coimbatore
  ₹7,500; 1:1 from ₹1,000/hour; 2-month course ₹3,500 (IndiaMART); Trichy
  offline ₹3,000–₹6,000/month.
  Sources: [EngVarta Coimbatore](https://engvarta.com/best-english-speaking-courses-in-coimbatore/),
  [TalkDrill Tiruchirappalli](https://www.talkdrill.com/blog/spoken-english-classes/tiruchirappalli/)
- **Telangana detail:** cheap Hyderabad listings — Formula (Ameerpet) 45 days
  ₹3,500, English Hub ₹4,500, English Engine 1 month online ₹3,000; EEC
  Warangal ₹7,500. No Hindi/Urdu-medium course surfaced (gap).
  Sources: [Collegedunia — Formula](https://s4.collegedunia.com/institute/6494-formula-spoken-english-ielts-and-soft-skills-training-hyderabad/courses-fees),
  [Collegedunia — English Hub](https://s4.collegedunia.com/institute/4423-the-english-hub-institute-hyderabad),
  [EEC Warangal](https://eecglobal.com/spoken-english-classes/warangal)
- **Pune jobs:** Hinjewadi = 300+ companies (TCS, Wipro, Capgemini, Tech
  Mahindra); HR rounds test explaining work in English; teams often default
  to Marathi/Hindi at work; voice-process jobs ask for English **and Marathi**.
  "60–70% of freshers rejected for communication" is an unsourced coaching
  claim — do not repeat it.
  Sources: [FACE Prep — fresher IT jobs in Pune](https://www.faceprep.in/article/fresher-it-jobs-in-pune/),
  [TalkDrill — Pune](https://www.talkdrill.com/blog/english-speaking-classes/pune/),
  [TeamLease — Pune voice process](https://www.teamlease.com/jobs/voice-process-jobs-in-pune-yudeekshaa-infotech-787293)

### More findings (batch 8 — native-language and medium searches)
- **"Basic spoken English for beginners in Hindi, live, small batch":** only
  EEC (3 IST batches Mon–Sat, Zoom), **Awal English** (group live classes in
  a small group with instruction in Hindi; online ₹4,999 "Gold"), Adda247
  (old bilingual batches), and Udemy recordings. Awal English is the closest
  direct competitor to our Hindi-medium course.
  Sources: [Awal English](https://awalenglish.com/),
  [EEC spoken English](https://eecglobal.com/spoken-english),
  [Udemy — online English speaking course in Hindi](https://www.udemy.com/course/online-english-speaking-course-in-hindi/)
- **Marathi-medium + English speaking, Pune/Mumbai:** results are Marathi-
  *language* tutors (Superprof ₹350–₹500/hour) and subject tutors for
  Marathi-medium students — **no English-speaking class built for Marathi-
  medium learners.** Confirms the gap.
  Sources: [FindMyGuru — Marathi-medium support](https://www.findmyguru.com/tutors/india/rajeshwari-prathamesh-barai),
  [TalkDrill Pune](https://www.talkdrill.com/blog/spoken-english-classes/pune/)
- **Punjabi:** Udemy "learn English speaking from scratch" (Punjabi + Hindi +
  English side by side), Talkpal AI pages; otherwise spam PDFs.
  Source: [Udemy](https://www.udemy.com/course/learn-english-speaking-from-scratch/)
- **Odia:** Unacademy English grammar in Odia (short recorded lessons); YouTube.
  Source: [Unacademy](https://unsat.unacademy.com/lesson/course-overview-part-1-in-odia/ETRW9CD9)
- **Assamese:** nothing current; Tezpur University communicative-English
  diploma (old). Source: [Assam Tribune](https://assamtribune.com/sabha-tezpur-vasity-to-launch-2-diploma-courses)
- **Malayalam:** Entri "Spoken English in Malayalam" (live + recorded, 4–6
  weeks), English Mithra (3 levels), Adda247 Easy English 2.0 (2022).
  Sources: [Entri](https://entri.app/course/spoken-english-course-in-malayalam/),
  [Adda247 Easy English 2.0](https://www.adda247.com/product-onlineliveclasses/15379/english-course-malayalam-english-online-live-classes-by-adda247)
- **Pattern:** native-script searches return spam PDFs ("English Speaking
  Course Marathi.pdf" on dozens of hijacked domains) and translation tools.
  A real page in Devanagari/Marathi with clear facts has little competition.

### More findings (batch 9)
- **Awal English — the closest Hindi-medium live competitor:** "Learn English
  through Hindi" live classes. Group of 15–17: ₹10,000 list, **₹4,999 offer for
  3 months** (≈ ₹1,666/month), 3 live classes a week + 65 recorded lessons for a
  year. Very small group of 5–7: ₹24,000 list, **₹11,999 for 3 months**
  (≈ ₹4,000/month). Slots 8 AM, 4 PM, 6 PM, 8 PM. Also on Entri.
  → Our ₹999/month for ~6 learners + daily Bolo practice + weekly teacher
  review is ~4× cheaper than Awal's comparable small group.
  Sources: [Awal English — Gold plan](https://www.awalenglish.com/spoken-english-course-gold-plan/),
  [Entri — Awal course](https://entri.app/course/awal-english-speaking-course/)
- **Entri** sells spoken-English courses *in* Hindi, Kannada and Malayalam
  (live sessions + recordings, 4–6 weeks). Medium-led positioning is a proven
  category; Entri does not appear to have a Marathi one.
  Sources: [Entri — in Hindi](https://entri.app/course/spoken-english-course-in-hindi/),
  [Entri — in Kannada](https://entri.app/course/spoken-english-course-in-kannada/)
- **ACTE** markets "English speaking course in Kannada" with job-placement
  claims (ASCI-risky). Source: [ACTE Kannada](https://www.acte.in/learn-english-speaking-course-in-kannada)
- **Gujarati / Telugu / Tamil native-script queries:** Rapidex PDFs on spam
  domains, reverse-direction courses (learn Telugu/Tamil), EEC ("Hindi/
  Gujarati support"). No live Telugu- or Tamil-medium course surfaced.
  Source: [EEC — spoken English](https://eecglobal.com/spoken-english)
- **Haryana:** EEC Panipat ₹7,500; Rohtak 6-month online course (no fee);
  Superprof ~₹726/hour; Hisar nothing. → part of Delhi NCR / Hindi course.
  Source: [EEC Panipat](https://eecglobal.com/spoken-english-classes/panipat)

### More findings (batch 10)
- **Entri small-group price:** "Live classes with an experienced mentor in a
  very small group of 5 to 7 students" ₹24,000 list / **₹11,999**, 365-day
  validity (course language not stated on the purchase page; Entri's Hindi
  course page says it is entirely in Hindi).
  Sources: [Entri — purchase page](https://entri.app/user/plans/O71z/purchase/),
  [Entri — Hindi course](https://entri.app/course/spoken-english-course-in-hindi/)
- **EngVarta's Marathi play:** ~14 tag pages ("spoken English for Marathi
  speakers", "Marathi to English speaking practice", "business English for
  Marathi speakers"…) all pointing to an English-only 15-minute 1:1 call app
  (₹69 trial; claims 4.5★ from 9,100+ Play reviews). No Marathi-speaking
  teaching. → Our Marathi course outranks this on substance: Marathi-speaking
  teacher, live batch, daily practice.
  Source: [EngVarta — best app for Marathi speakers](https://engvarta.com/best-english-speaking-app-for-marathi-speakers/)
- **Mumbai:** EngVarta Mumbai + 12 tag pages; Let's Talk Institute ₹2,950
  (Basic/Advanced), Business ₹2,500; Speakwell ₹2,500–₹5,500; British Council
  ₹8,800–₹16,000/module; Cambridge Institute ₹8,000–₹15,000; EngVarta ₹2,700
  (25×15 min) / ₹5,130 (25×25 min); EEC "serves" Andheri/Thane/Dadar online.
  Sources: [EngVarta Mumbai](https://engvarta.com/best-english-speaking-courses-in-mumbai/),
  [EEC Mumbai](https://eecglobal.com/spoken-english-classes/mumbai)
- **Maharashtra tier-2:** Nagpur (Dharampeth, Sadar, Ramdaspeth)
  ₹4,000–₹10,000/month; EEC Nagpur/Aurangabad ₹7,500; Shivaji University
  Kolhapur certificate (3 months, 10th pass); Kolhapur/Solapur tutors
  ~₹711–₹713/hour; ASK English (Solapur, since 2006).
  Sources: [TalkDrill Nagpur](https://www.talkdrill.com/blog/spoken-english-classes/nagpur/),
  [Shivaji University certificate (PDF)](https://www.unishivaji.ac.in/uploads/cntcd/2025/May/30-may/Language/SPOKEN%20ENGLISH.pdf)
- **Migration:** Bengaluru is Karnataka's hub for interstate workers (mostly
  from Bihar, Jharkhand and four other states); local-language friction is
  real (Kannada incidents). English is the neutral work language migrants
  need — a Hindi-medium English course fits Bihar/Jharkhand migrants in
  Bengaluru, Pune, Mumbai.
  Sources: [Deccan Herald — 85% of migrant workers from 6 states](https://www.deccanherald.com/amp/story/india%2Fkarnataka%2F85-of-migrant-workers-in-karnataka-come-from-6-states-govt-data-3694736),
  [PARI — speaking in borrowed tongues](https://ruralindiaonline.org/pa/articles/migrant-labourers-speaking-in-borrowed-tongues)
- **UP policy:** UP skill training added English-speaking and résumé modules
  for rural youth (June 2026 report); 15,000 government schools converted to
  English medium; English from nursery under consideration.
  Sources: [UNI — UP skill mission](https://test.uniindia.com/news/north/development-up-skill-mission/3860862.html),
  [India TV — 15,000 UP schools English medium](https://www.indiatvnews.com/education/news-15000-up-schools-converted-to-english-medium-697428)

### More findings (batch 11)
- **Devanagari queries (Delhi Hindi, Pune Marathi):** no live Hindi- or
  Marathi-medium class surfaces at all — British Council global pages, US
  resettlement resources, and spam PDFs. Confirms the native-script gap.
  Sources: [British Council English Online](https://www.britishcouncil.ca/english/english-online),
  [espaciodca — Pune spoken English](https://espaciodca.fedace.org/node/72819)
- **How assistants pick pages:** no independent study; vendor analyses say
  ChatGPT favours FAQ blocks that answer the question directly, clearly
  sourced numbers and transparent pricing pages; typical cited page ~941
  words, 4 H2s (Evertune, Apr 2026). → Each new page: direct-answer FAQ,
  a price table, ~900–1,500 words, real H2 structure.
  Sources: [Evertune — AI search statistics](https://www.evertune.ai/resources/ai-search-statistics-for-generative-engine-optimization),
  [Texta — ChatGPT source strategies](https://www.texta.ai/blog/chatgpt-source-link-strategies)
- **Click-to-WhatsApp ads (Meta):** India cost per conversation ₹4–₹150 by
  category (agency estimate); CTWA clicks ~₹5–₹25; replying within 24 h opens
  a 72-hour free window; +18% GST. Kerala ed-platform Learnwise: 31% lower
  cost per qualified lead with WhatsApp Flows. → Our WhatsApp-first funnel
  fits CTWA ads better than search ads.
  Sources: [Codingclave — CTWA India 2026](https://codingclave.com/blog/click-to-whatsapp-ads-india-2026),
  [WhatsApp Business — success stories](https://whatsappbusiness.com/?p=5221)
- **Search-ad negatives:** free, pdf, download, job, jobs, hiring, vacancy,
  salary, resume, telegram, torrent, app download, kids, IELTS, ielts exam,
  translation, translator, meaning, dictionary.
  Source: [TechWyse — negative keywords](https://www.techwyse.com/blog/google-ads/effective-negative-keywords-to-include-in-your-google-ads-campaigns)
- **Goa:** ~70% Konkani, ~1.6 lakh Marathi mother-tongue speakers (2011);
  Lokmat Goa edition targets Marathi readers. Low priority.
  Source: [The Goan](https://www.thegoan.net/goa-news/%EF%BB%BFcalls-for-official-language-status-for-marathi-in-goa/112847.html)

## 6. Decision — the 10 state pages

Ranked by: (1) a medium we teach in (Hindi/Marathi) matches the state, (2) size
and job hubs, (3) a real gap in what competitors offer, (4) no clash with
existing pages.

| # | Page | Medium we lead with | Why |
| --- | --- | --- | --- |
| 1 | Maharashtra | Marathi + Hindi | No live Marathi-medium course anywhere; Pune/Mumbai/MIDC jobs; AI Mode answers in Marathi |
| 2 | Uttar Pradesh | Hindi | Biggest Hindi state; Noida BPO/voice jobs; no seller teaches *in* Hindi live |
| 3 | Bihar | Hindi | British Council attitudes study; migrants to Delhi/Bengaluru/Pune; Devanagari SERP empty |
| 4 | Delhi NCR | Hindi | 19% of fresher hiring (Aug 2026); Noida/Gurugram workplace English |
| 5 | Madhya Pradesh | Hindi | Centres teach exam grammar in Hindi, little speaking (Jabalpur) |
| 6 | Rajasthan | Hindi | EngVarta claims "Hindi-medium" without teaching in Hindi |
| 7 | Karnataka | Hindi (migrants) + English | 44% migrants in Bengaluru; GCC English rounds |
| 8 | Telangana | Hindi/Urdu speakers + English | Hyderabad IT/GCC; no Hindi/Urdu-medium seller found |
| 9 | Jharkhand | Hindi | Thin live supply (₹3,500–₹4,000 local), migrant workforce |
| 10 | Gujarat | Hindi + English | Surat/Ahmedabad Hindi-speaking workforce; EEC saturation offline only |

West Bengal is covered by the existing Kolkata page (no duplicate). Pune,
Chennai etc. city URLs already redirect to the national online page — state
pages must not recreate thin city pages.

## 7. Needs research — what English each next step actually tests

- **BPO / voice process:** Versant (Pearson, AI-scored spoken test, 15–20
  min, 10–90 GSE) or SHL SVAR (often bundled with AMCAT), usually an early
  screen; then HR, Ops, client round (e.g. iEnergizer Noida, Jun 2026).
  Employers rarely publish the test or the cut-off.
  Sources: [FACE Prep — Versant 2026](https://faceprep.in/article/versant-test-for-freshers-pattern-scoring-preparation-2026/),
  [FACE Prep — SVAR vs Versant](https://faceprep.in/article/communication-assessments-compared-svar-versant-and-company-rounds-2026/),
  [Glassdoor — iEnergizer Noida](https://www.glassdoor.com.hk/Interview/iEnergizer-Interview-Questions-E231685.htm)
- **IT services / GCC freshers:** communication round first or alongside
  aptitude; Mphasis = AMCAT → technical + HR → Versant; Deloitte USI places
  Versant after aptitude for client-facing tracks.
  Source: [FACE Prep — Mphasis 2026](https://www.faceprep.in/article/mphasis-recruitment-process-test-pattern-syllabus-and-eligibility-criteria/)
- **Bank PO interview (IBPS):** no published language clause; candidates
  report choosing English or Hindi; regional language rarely. → "If you
  choose English, practise answering in English out loud."
  Sources: [Guidely — IBPS PO interview language](https://guidely.in/blog/ibps-po-interview-language),
  [Careers360 thread](https://www.careers360.com/question-can-we-give-interviews-ibps-po-in-hindi/amp)
- **UPSC personality test:** interview language is the candidate's choice —
  English, Hindi or an Eighth Schedule language (interpreter provided for
  others); one source says it must match the Mains medium — verify each year.
  Sources: [Vajiram & Ravi — UPSC interview language](https://vajiramandravi.com/upsc-exam/upsc-interview-language/),
  [IAS Exam Portal](https://iasexamportal.com/news/ias-aspirants-can-now-choose-any-indian-language-personality-test-interview)
- **SSC:** interviews removed for non-gazetted central posts from 1 Jan 2016;
  CGL 2026 notification (21 May 2026) changed Tier-II papers. → We do not
  claim to help with SSC written exams.
  Sources: [Wikipedia — CGL](https://en.wikipedia.org/wiki/Combined_Graduate_Level_Examination),
  [Physics Wallah — CGL 2026 changes](https://www.pw.live/ssc/exams/new-changes-in-ssc-cgl-2026-recruitment)
- **Competitor content:** TalkDrill already publishes deep "exam" sections
  (bank PO interview, UPSC interview, BPO English tests). Our guides must be
  shorter, truthful and end in practice + WhatsApp, not test-prep promises.

Search count for this research: ~120 live searches (Nov 3, 2026).

## 8. 1,000-query smoke test (3 Nov 2026)

`scripts/smoke-search-1000.py` generates 1,000 India searches — 10 states ×
cities × localities × needs (BPO, IT, analyst, bank PO, government interview,
placements), Hindi/Marathi-medium, course, fee, Bolo-app and "all-in-one /
affordable / daily practice" questions — maps each to the page that should
answer it and checks the built site: page exists, page text names what was
searched, title/description/canonical/JSON-LD, FAQPage schema, sitemap, llms
files, the India fee where the query is about price, and a WhatsApp CTA.

| Query type | Passed |
| --- | --- |
| State | 70/70 |
| City | 174/174 |
| Locality ("near me" offline searchers) | 236/236 |
| Need (guide) | 43/43 |
| Need, localised | 43/43 |
| Medium (Hindi/Marathi) | 14/14 |
| National / course / app / comparison | 23/23 |
| Phrasing variants | 397/397 |
| **Total** | **1,000/1,000** |

Mutation check: pointing one state at a non-existent page and adding a fake
locality made 131 queries fail, so the checks do catch regressions. Full
results: `research_notes/smoke-search-1000-nov-2026.csv`. Limit: this tests
our own site's readiness for each query (what Google/AI can find and quote),
not live rankings, which need Search Console / Keyword Planner data.
