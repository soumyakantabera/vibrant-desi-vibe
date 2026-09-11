import type { ArticleBody } from "@/content/blog/blocks";

type Faq = { q: string; a: string };

export type CityRecord = {
  slug: string;
  path: string;
  name: string;
  state: string;
  geoRegion: string;
  lat: string;
  lng: string;
  neighborhoods: string;
  commute: string;
  industries: string;
  medium: string;
  localRoom: string;
  title: string;
  description: string;
};

export const CITIES: CityRecord[] = [
  {
    slug: "mumbai",
    path: "/spoken-english-classes-mumbai",
    name: "Mumbai",
    state: "Maharashtra",
    geoRegion: "IN-MH",
    lat: "19.0760",
    lng: "72.8777",
    neighborhoods: "Andheri, Bandra, Thane, Navi Mumbai, Powai, Dadar",
    commute: "45–90 minutes on a local, each way, twice a week",
    industries: "finance, media, BPO, hospitality and startups",
    medium: "Hindi, Marathi or English-medium schooling",
    localRoom: "Dadar, Andheri or Thane classrooms of 25–40",
    title: "Spoken English Mumbai | Live, From ₹999",
    description:
      "Live Spoken English for Mumbai and Thane. Skip the local. ₹999/month, inclusive of taxes, around 6 learners. IST morning, evening and weekend batches.",
  },
  {
    slug: "delhi",
    path: "/spoken-english-classes-delhi",
    name: "Delhi NCR",
    state: "Delhi",
    geoRegion: "IN-DL",
    lat: "28.6139",
    lng: "77.2090",
    neighborhoods: "Delhi, Gurgaon, Noida, Ghaziabad, Faridabad",
    commute: "60–120 minutes on the ring road or metro, each way",
    industries: "IT, consulting, government-adjacent roles, BPO and startups",
    medium: "Hindi-medium or English-medium schooling",
    localRoom: "Karol Bagh, Connaught Place or Gurgaon rooms of 25–40",
    title: "Spoken English Delhi NCR | Live From ₹999",
    description:
      "Live Spoken English for Delhi, Gurgaon and Noida. No ring-road commute. ₹999/month, inclusive of taxes, around 6 learners. IST live batches, pan-India.",
  },
  {
    slug: "bengaluru",
    path: "/spoken-english-classes-bengaluru",
    name: "Bengaluru",
    state: "Karnataka",
    geoRegion: "IN-KA",
    lat: "12.9716",
    lng: "77.5946",
    neighborhoods: "Whitefield, Koramangala, Indiranagar, Electronic City, HSR, Jayanagar",
    commute: "60–90 minutes across the city for a 60-minute class",
    industries: "IT product, services, startups and GCCs",
    medium: "Kannada, Hindi or English-medium schooling",
    localRoom: "Koramangala or Indiranagar classrooms of 25–40",
    title: "Spoken English Bengaluru | Live From ₹999",
    description:
      "Live Spoken English for Bengaluru / Bangalore. Whitefield to Jayanagar, same ₹999/month batch of around 6. Inclusive of taxes. IST live classes. Kolkata.",
  },
  {
    slug: "pune",
    path: "/spoken-english-classes-pune",
    name: "Pune",
    state: "Maharashtra",
    geoRegion: "IN-MH",
    lat: "18.5204",
    lng: "73.8567",
    neighborhoods: "Hinjewadi, Baner, Kothrud, Viman Nagar, Hadapsar, Pimpri-Chinchwad",
    commute: "Hinjewadi traffic that can eat a whole evening",
    industries: "IT, auto, manufacturing and campus placements",
    medium: "Marathi, Hindi or English-medium schooling",
    localRoom: "FC Road or Baner classrooms of 25–40",
    title: "Spoken English Classes Pune | From ₹999",
    description:
      "Live Spoken English for Pune and PCMC. Skip Hinjewadi traffic. ₹999/month, inclusive of taxes, around 6 learners. Morning, evening, weekend IST. Kolkata.",
  },
  {
    slug: "hyderabad",
    path: "/spoken-english-classes-hyderabad",
    name: "Hyderabad",
    state: "Telangana",
    geoRegion: "IN-TS",
    lat: "17.3850",
    lng: "78.4867",
    neighborhoods: "HITEC City, Gachibowli, Madhapur, Secunderabad, Kukatpally",
    commute: "an Outer Ring Road hop that turns a 60-minute class into a three-hour evening",
    industries: "IT, pharma, GCCs and customer support",
    medium: "Telugu, Hindi, Urdu or English-medium schooling",
    localRoom: "Ameerpet or Madhapur classrooms of 25–40",
    title: "Spoken English Hyderabad | Live From ₹999",
    description:
      "Live Spoken English for Hyderabad. HITEC City and Gachibowli join the same ₹999/month batch of around 6. Inclusive of taxes. IST live timings. Kolkata.",
  },
  {
    slug: "chennai",
    path: "/spoken-english-classes-chennai",
    name: "Chennai",
    state: "Tamil Nadu",
    geoRegion: "IN-TN",
    lat: "13.0827",
    lng: "80.2707",
    neighborhoods: "OMR, Anna Nagar, T. Nagar, Velachery, Tambaram, Adyar",
    commute: "OMR traffic that makes a twice-a-week class a twice-a-week argument",
    industries: "IT, auto, manufacturing and BPO",
    medium: "Tamil-medium or English-medium schooling",
    localRoom: "T. Nagar or Anna Nagar classrooms of 25–40",
    title: "Spoken English Chennai | Live From ₹999",
    description:
      "Live Spoken English for Chennai. Tamil-medium welcome. ₹999/month, inclusive of taxes, around 6 learners. IST morning, evening and weekend batches. Kolkata.",
  },
  {
    slug: "ahmedabad",
    path: "/spoken-english-classes-ahmedabad",
    name: "Ahmedabad",
    state: "Gujarat",
    geoRegion: "IN-GJ",
    lat: "23.0225",
    lng: "72.5714",
    neighborhoods: "SG Highway, Navrangpura, Maninagar, Bopal, GIFT City commuters",
    commute: "an SG Highway crawl for a classroom that still seats 30",
    industries: "manufacturing, diamond, pharma, IT and GIFT City finance",
    medium: "Gujarati-medium or English-medium schooling",
    localRoom: "CG Road or SG Highway classrooms of 25–40",
    title: "Spoken English Ahmedabad | From ₹999",
    description:
      "Live Spoken English for Ahmedabad. Gujarati-medium is not a wall. ₹999/month, inclusive of taxes, around 6 learners. IST live batches, pan-India. Kolkata.",
  },
  {
    slug: "nagpur",
    path: "/spoken-english-classes-nagpur",
    name: "Nagpur",
    state: "Maharashtra",
    geoRegion: "IN-MH",
    lat: "21.1458",
    lng: "79.0882",
    neighborhoods: "Dharampeth, Sadar, Wardha Road, MIHAN, Civil Lines, Sitabuldi",
    commute: "a Wardha Road crawl that turns a 60-minute class into a three-hour evening",
    industries: "IT, logistics, orange trade, education and MIHAN GCCs",
    medium: "Marathi, Hindi or English-medium schooling",
    localRoom: "Dharampeth or Sadar classrooms of 25–40",
    title: "Spoken English Nagpur | Live From ₹999",
    description:
      "Live Spoken English for Nagpur and MIHAN. Skip the commute. ₹999/month, inclusive of taxes, around 6 learners. IST morning, evening and weekend batches.",
  },
  {
    slug: "surat",
    path: "/spoken-english-classes-surat",
    name: "Surat",
    state: "Gujarat",
    geoRegion: "IN-GJ",
    lat: "21.1702",
    lng: "72.8311",
    neighborhoods: "Adajan, Vesu, Varachha, Athwa, Ring Road, Pal",
    commute: "Ring Road traffic that eats the hour you meant to spend speaking",
    industries: "textiles, diamonds, trading and a growing IT corridor",
    medium: "Gujarati-medium or English-medium schooling",
    localRoom: "Adajan or Vesu classrooms of 25–40",
    title: "Spoken English Surat | Live From ₹999",
    description:
      "Live Spoken English for Surat. Gujarati-medium is welcome. ₹999/month, inclusive of taxes, around 6 live learners. IST live batches. Same fee as Kolkata.",
  },
  {
    slug: "coimbatore",
    path: "/spoken-english-classes-coimbatore",
    name: "Coimbatore",
    state: "Tamil Nadu",
    geoRegion: "IN-TN",
    lat: "11.0168",
    lng: "76.9558",
    neighborhoods: "RS Puram, Peelamedu, Gandhipuram, Saravanampatti, Saibaba Colony",
    commute: "an Avinashi Road hop that costs more time than the class",
    industries: "textiles, manufacturing, education and IT services",
    medium: "Tamil-medium or English-medium schooling",
    localRoom: "RS Puram or Peelamedu classrooms of 25–40",
    title: "Spoken English Coimbatore | From ₹999",
    description:
      "Live Spoken English for Coimbatore. Tamil-medium welcome. ₹999/month, inclusive of taxes, around 6 learners. IST morning, evening and weekend batches.",
  },
  {
    slug: "kochi",
    path: "/spoken-english-classes-kochi",
    name: "Kochi",
    state: "Kerala",
    geoRegion: "IN-KL",
    lat: "9.9312",
    lng: "76.2673",
    neighborhoods: "Kakkanad, Edappally, Panampilly Nagar, Vyttila, Fort Kochi, Infopark",
    commute: "an Infopark commute that turns twice-a-week class into twice-a-week traffic",
    industries: "IT, shipbuilding, tourism, healthcare and Infopark GCCs",
    medium: "Malayalam-medium or English-medium schooling",
    localRoom: "Kakkanad or Edappally classrooms of 25–40",
    title: "Spoken English Kochi | Live From ₹999",
    description:
      "Live Spoken English for Kochi and Infopark. Skip the commute. ₹999/month, inclusive of taxes, around 6 learners. IST live morning batches. Office in Kolkata.",
  },
  {
    slug: "visakhapatnam",
    path: "/spoken-english-classes-visakhapatnam",
    name: "Visakhapatnam",
    state: "Andhra Pradesh",
    geoRegion: "IN-AP",
    lat: "17.6868",
    lng: "83.2185",
    neighborhoods: "MVP Colony, Siripuram, Gajuwaka, Madhurawada, Beach Road, Pendurthi",
    commute: "a Beach Road or Gajuwaka crawl for a 60-minute classroom hour",
    industries: "port, steel, navy-adjacent, IT and pharma",
    medium: "Telugu-medium or English-medium schooling",
    localRoom: "MVP Colony or Siripuram classrooms of 25–40",
    title: "Spoken English Vizag | Live From ₹999",
    description:
      "Live Spoken English for Visakhapatnam / Vizag. Telugu-medium is welcome. ₹999/month, inclusive of taxes, around 6 learners. IST live batches, pan-India.",
  },
  {
    slug: "patna",
    path: "/spoken-english-classes-patna",
    name: "Patna",
    state: "Bihar",
    geoRegion: "IN-BR",
    lat: "25.5941",
    lng: "85.1376",
    neighborhoods: "Boring Road, Kankarbagh, Patliputra, Bailey Road, Fraser Road",
    commute: "Bailey Road traffic that costs more than the class fee in time",
    industries: "government, education, banking, coaching and a growing services floor",
    medium: "Hindi-medium or English-medium schooling",
    localRoom: "Boring Road or Kankarbagh classrooms of 25–40",
    title: "Spoken English Patna | Live From ₹999",
    description:
      "Live Spoken English for Patna. Hindi-medium is not a wall. ₹999/month, inclusive of taxes, around 6 learners. IST morning, evening and weekend batches.",
  },
  {
    slug: "guwahati",
    path: "/spoken-english-classes-guwahati",
    name: "Guwahati",
    state: "Assam",
    geoRegion: "IN-AS",
    lat: "26.1445",
    lng: "91.7362",
    neighborhoods: "GS Road, Dispur, Beltola, Zoo Road, Paltan Bazaar, Six Mile",
    commute: "a GS Road crawl that turns a 60-minute class into a lost evening",
    industries: "oil, tea, government, education and a growing services floor",
    medium: "Assamese, Hindi, Bengali or English-medium schooling",
    localRoom: "GS Road or Dispur classrooms of 25–40",
    title: "Spoken English Guwahati | From ₹999",
    description:
      "Live Spoken English for Guwahati. Assamese, Hindi and Bengali welcome. ₹999/month, inclusive of taxes, around 6 learners. IST live batches from Kolkata.",
  },
];

export const CITY_PATHS: Record<string, string> = {
  Kolkata: "/spoken-english-classes-kolkata",
  Delhi: "/spoken-english-classes-delhi",
  Mumbai: "/spoken-english-classes-mumbai",
  Pune: "/spoken-english-classes-pune",
  Nagpur: "/spoken-english-classes-nagpur",
  Ahmedabad: "/spoken-english-classes-ahmedabad",
  Surat: "/spoken-english-classes-surat",
  Bengaluru: "/spoken-english-classes-bengaluru",
  Hyderabad: "/spoken-english-classes-hyderabad",
  Chennai: "/spoken-english-classes-chennai",
  Coimbatore: "/spoken-english-classes-coimbatore",
  Kochi: "/spoken-english-classes-kochi",
  Visakhapatnam: "/spoken-english-classes-visakhapatnam",
  Patna: "/spoken-english-classes-patna",
  Guwahati: "/spoken-english-classes-guwahati",
};

/** Footer + coverage chips. Kolkata is a custom page, not in CITIES. */
export const FOOTER_CITIES: { to: string; label: string }[] = [
  { to: "/spoken-english-classes-kolkata", label: "Kolkata" },
  ...CITIES.map((c) => ({ to: c.path, label: c.name })),
];

export function getCity(slug: string): CityRecord {
  const city = CITIES.find((c) => c.slug === slug);
  if (!city) throw new Error(`Unknown city slug: ${slug}`);
  return city;
}

export function cityFaqs(city: CityRecord): Faq[] {
  return [
    {
      q: `Where in ${city.name} are your spoken English classes held?`,
      a: `They are not held in a ${city.name} classroom. Every class is live online. Our registered address is an office in Kolkata you can visit by appointment, not a teaching campus. Learners join from ${city.neighborhoods}. The teacher is Kolkata-based; batch timings are IST.`,
    },
    {
      q: `How much do spoken English classes cost in ${city.name}?`,
      a: `Offline centres in ${city.name} generally charge ₹1,500–₹6,000 for a 3-month spoken English course, often in batches of 25–40. Learn With Smile charges ₹999 per month for Basic Spoken English in a batch of approximately 6 learners, inclusive of taxes, with no registration or material fee. The fee is the same in ${city.name} as in Kolkata or Kochi.`,
    },
    {
      q: `Can the teacher explain if I studied in ${city.medium}?`,
      a: `Yes. Instruction is in English and practice stays in English. When a concept is not landing, the teacher explains in Hindi or Bengali (and then you go back to English). ${city.medium} decided how much English you heard in school. It did not decide whether you can run a standup at 28.`,
    },
    {
      q: `What batch timings work with a ${city.name} job?`,
      a: `Morning batches before office hours, evening batches from about 7pm IST, and weekend batches. Every class is recorded, so a missed session because of a release or a shift does not wipe the week. Message anytime; we reply 09:00–12:00 IST.`,
    },
    {
      q: `Is online better than a coaching centre in ${city.name}?`,
      a: `For speaking minutes, usually yes. ${city.localRoom} cannot give each learner more than a minute or two per class. A live batch of around 6 gives roughly 8–10 minutes. You also save ${city.commute}. What an offline centre does better is peer energy in the same room. We replace that with debates, prompts and a WhatsApp batch group.`,
    },
  ];
}

export function cityBody(city: CityRecord): ArticleBody {
  return [
    {
      t: "p",
      text: `**Short answer.** Spoken English classes in ${city.name} do not have to mean ${city.commute}. Learn With Smile is live online: approximately 6 learners, ₹999/month inclusive of taxes, morning / evening / weekend IST. Learners join from ${city.neighborhoods}. The office is in Kolkata; it is not a walk-in campus.`,
    },
    { t: "h2", text: `Why ${city.name} learners take this online` },
    {
      t: "p",
      text: `${city.name} has no shortage of classrooms. The shortage is **minutes you speak**. A room of 25–40 — ${city.localRoom} — sounds like a class and behaves like a lecture. In a 60-minute hour you often wait a week for the mic. In a batch of around 6 you speak every hour. That is the product. See the arithmetic in [speaking minutes](/blog/speaking-minutes-in-a-60-minute-class).`,
    },
    {
      t: "ul",
      items: [
        `**Commute.** ${city.commute} is longer than the class.`,
        `**Industry English.** ${city.industries} need names, numbers and a next step — not a fake accent. That is [client-call English](/english-for-client-calls-india) and [Workplace English](/workplace-english-course-online-india).`,
        `**School medium.** ${city.medium} is not a wall. [Hindi- and Bengali-medium learners](/english-hindi-bengali-medium) are the majority of our rooms.`,
      ],
    },
    { t: "h2", text: "Fees, in full" },
    {
      t: "table",
      caption: `Same pan-India fees. Inclusive of taxes. No registration or material fee. ${city.name} is not a different price list.`,
      head: ["Course", "Duration", "Fee"],
      rows: [
        ["Basic Spoken English", "6 months, ~6 learners", "₹999/month"],
        ["Interactive Speaking", "3 months", "₹1,199/month"],
        ["Interview Preparation", "2 months", "₹1,499/month"],
        ["Workplace English", "3 months", "₹1,999/month"],
        ["IELTS Preparation", "3 months, 6 mocks", "₹2,499/month"],
        ["Career Counselling", "3 × 60 min, 1:1", "₹1,999 total"],
      ],
    },
    {
      t: "p",
      text: `Market bands for ${city.name} offline rooms are in the [India fees guide](/english-class-fees-india). Confirm any other provider on their site before you pay.`,
    },
    { t: "h2", text: `Who in ${city.name} this is for` },
    {
      t: "ul",
      items: [
        "Adults 15+ who cannot yet hold a two-minute turn — [beginners](/spoken-english-for-beginners-india).",
        "Working people who keep the job and still need the mic — [working professionals](/english-for-working-professionals-india).",
        "IT and GCC staff who freeze in standups — [English for IT](/english-for-it-professionals-india).",
        "Freshers before campus or an HR screen — [freshers](/spoken-english-for-freshers-india).",
        "Homemakers who want shops, school meetings and a voice — [homemakers](/spoken-english-for-homemakers-india).",
      ],
    },
    {
      t: "p",
      text: `Children under 14 need a children's platform, not an adult batch of 6. We will say so on WhatsApp.`,
    },
    { t: "h2", text: "What we do not claim" },
    {
      t: "ul",
      items: [
        "No walk-in campus in " + city.name + ".",
        "No certificate. Indian interviews hear you. Visas read an exam board score — we prep IELTS live; the board issues the band.",
        "No 30-day fluency from zero. Everyday conversation is about 6 months of live practice. [How long it takes](/how-long-to-learn-spoken-english).",
      ],
    },
    {
      t: "cta",
      text: `Sit in the next ${city.name} IST slot. Approx. 6 learners. From ₹999/mo, inclusive of taxes.`,
      course: "/book-free-demo",
      label: "Book a Free Demo",
    },
  ];
}
