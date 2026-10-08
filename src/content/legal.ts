export type LegalSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  id?: string;
};

export type LegalDoc = {
  path: "/privacy" | "/terms" | "/refunds" | "/child-protection";
  eyebrow: string;
  h1: string;
  standfirst: string;
  updated: string;
  sections: LegalSection[];
};

export const LEGAL_UPDATED = "2026-10-08";

const YOUR_CHOICES: LegalSection = {
  heading: "Your choices",
  paragraphs: [
    "You may ask us to access, correct, delete, restrict or export personal information we hold, to object to a use that is only in our own interest, or to stop enrolment messages. These requests are open to learners in India and outside India. Message WhatsApp or email. We reply 10am–midnight IST every day and aim to answer within 30 days. Deleting a chat from our devices does not erase the copy on your phone or on WhatsApp/Meta. You may also complain to a data-protection or consumer authority where you live.",
  ],
};

const GRIEVANCE_OFFICER: LegalSection = {
  id: "grievance-officer",
  heading: "Grievance Officer",
  paragraphs: [
    "Our Grievance Officer is Soumyakanta Bera. Under the Consumer Protection (E-Commerce) Rules, 2020, you may send a complaint about this website, a consultation, enrolment, a fee or a refund to the Grievance Officer. The same officer receives privacy complaints. We acknowledge complaints within 48 hours and aim to resolve them within 30 days.",
  ],
  bullets: [
    "Name: Soumyakanta Bera",
    "Address: 108 Shri Krishna Nagar, Kolkata 700056, West Bengal, India",
    "Email: learnwithsmile.in@gmail.com",
    "Phone / WhatsApp: +91 96744 79949",
  ],
};

/** Same wording on privacy, terms and refunds. */
const SCHEDULE_AND_LATENESS: LegalSection = {
  heading: "Weekly schedule, lateness and refunds",
  paragraphs: [
    "You follow the weekly schedule we send on WhatsApp. A missed class can be moved only inside that same week, and only if a teacher and a free slot exist. We do not promise a make-up seat.",
    "A class from this week cannot be pushed to next week. Next week runs only on next week’s schedule. A missed class that was not moved inside the same week is treated as delivered.",
    "Tell us the times you can attend before we send that week’s schedule. If you do not, or if you ask to change after the schedule is already sent, that is not a refund. We do not hold a seat for times you never gave us.",
    "Joining late is your responsibility, not the teacher’s. The class starts at the time on the schedule. Minutes you miss because you joined late are not taught again and are not refunded.",
    "If something is wrong — slot, teacher, batch, fee, or a class we did not hold — tell us on WhatsApp in that same week. A problem you never raise is not a refund. We cannot review what you did not tell us.",
  ],
};

export const LEGAL: Record<LegalDoc["path"], LegalDoc> = {
  "/privacy": {
    path: "/privacy",
    eyebrow: "Privacy",
    h1: "Privacy Policy",
    standfirst:
      "This page explains what personal information Learn With Smile collects, why we collect it, and how you can ask us to correct or delete it. Complaints go to the Grievance Officer named on this page.",
    updated: LEGAL_UPDATED,
    sections: [
      {
        heading: "Who we are",
        paragraphs: [
          "Learn With Smile provides live online English classes. The business is LEARN WITH SMILE SOLE PROPRIETORSHIP, GSTIN 19CFGPD7931C1ZL, at 75/2/4, Raja Ram Mohan Roy Road, Kolkata 700008, West Bengal, India. We teach from Kolkata. Learners in India and learners outside India may use this site and enrol in the same live online batch.",
          "For privacy questions, message us on WhatsApp at +91 96744 79949 or email learnwithsmile.in@gmail.com. Office address: 75/2/4, Raja Ram Mohan Roy Road, Kolkata 700008, West Bengal, India. The office is not a walk-in campus.",
          "The Grievance Officer for this policy is Soumyakanta Bera. Name, address, email and phone are in the Grievance Officer section below.",
        ],
      },
      {
        heading: "What this policy covers",
        paragraphs: [
          "This policy applies to www.learnwithsmile.app and to personal information you give us when you enquire, get a free consultation (counselling on WhatsApp — not a class), enrol, pay, or attend a class, whether you are in India or outside India. It does not apply to websites, apps or payment pages we do not control, including WhatsApp and Razorpay.",
        ],
      },
      {
        heading: "Information we collect",
        paragraphs: [
          "We collect only what we need to answer you, run a consultation, run a class, or process a fee.",
        ],
        bullets: [
          "Identity and contact: name, WhatsApp number, email address, city or state, and preferred class slot.",
          "Consultation notes: the problem you describe, questions you ask (fees, GST, batch, timings, Hindi or Bengali support, certificate, IELTS, kids, refunds), the bottleneck we name, and the one course we recommend — or that we told you to stay free.",
          "Course details: the programme you ask about, goals you mention, and notes needed to place you in a suitable batch.",
          "Class delivery: attendance, teacher feedback, and recordings of live sessions for enrolled learners to revise.",
          "Payments: amount, date, course, and payment status. Card, UPI and wallet details are collected and processed by Razorpay. We do not store full card numbers on this website.",
          "Technical data: basic server logs such as IP address, browser type and pages requested, which our host may keep to operate and secure the site.",
        ],
      },
      {
        heading: "How we use information",
        paragraphs: [
          "We use personal information to reply on WhatsApp, run a free consultation (diagnose the bottleneck, answer your queries, recommend one course), confirm a batch, deliver live classes, share class recordings with the enrolled learner, send fee and timetable details, process payments through Razorpay, and keep records we reasonably need for accounts, tax and dispute handling.",
          "The consultation is counselling, not a class. Notes from it are used to place you — or to leave you unenrolled if the room is not a fit. We do not sell personal information. We do not use it to run advertising networks or third-party marketing lists.",
        ],
      },
      {
        heading: "Legal basis, in plain terms",
        paragraphs: [
          "We process information because you asked us for a consultation, a class or a reply (steps before a contract), because we have a contract to teach you after you enrol, because Indian tax law requires us to keep certain payment records, or because we have a legitimate interest in running and securing the website that is not overridden by your rights. Where a law that applies to you requires consent for a specific use, we will ask before that use.",
          "If you live outside India, we use the same grounds. A law such as the EU or UK GDPR, or a US state privacy law, may give those grounds different names. We do not claim a GDPR, UK GDPR or CCPA certificate. We do honour the rights listed on this page for every learner.",
        ],
      },
      {
        heading: "WhatsApp, email and payments",
        paragraphs: [
          "WhatsApp is our preferred admissions and consultation channel. When you tap Get Free Consultation or message us, WhatsApp (Meta) also processes that conversation under its own terms and privacy policy. The diagnosis, course recommendation, fee and slot stay in that written thread so you can re-read them.",
          "We use the WhatsApp Business app on our devices. We do not run the WhatsApp Cloud API, and we do not copy full chat logs into a CRM, helpdesk or this website. Notes we need to place you (name, number, bottleneck, recommended course, slot) may be written down by staff for that purpose only.",
          "End-to-end encryption, where WhatsApp applies it, protects messages in transit. It does not replace this policy. Meta still processes business metadata (that a number messaged us, when, and delivery status) under WhatsApp’s rules. We cannot erase Meta’s copy of a chat, or the copy on your phone. We can delete the chat from our devices and stop writing to you.",
          "Fees are collected through Razorpay. Razorpay’s privacy policy and security practices apply to data you enter on Razorpay’s checkout. We receive confirmation that a payment succeeded or failed, not your full card number. Do not send full card numbers, UPI PINs or OTPs on WhatsApp.",
        ],
      },
      {
        heading: "Class recordings",
        paragraphs: [
          "Live classes are recorded so enrolled learners can revise or catch up. Recordings are for personal study by learners in that batch. They are not posted on this website or used as public marketing without a separate, specific permission.",
          "Please do not share a recording outside your batch. If you do not wish to appear in a recording, tell us on WhatsApp before the session so we can discuss a practical arrangement.",
        ],
      },
      SCHEDULE_AND_LATENESS,
      {
        heading: "Cookies and browser storage",
        paragraphs: [
          "This website uses no analytics, advertising or tracking cookies, so it does not ask you to accept any. WhatsApp links on this site carry no tracking code — only a plain message that names the page you tapped from.",
          "It stores one small item in your browser: your country choice, so the page shows the India fee or the fee for a learner outside India. You can remove it at any time by clearing this site’s data in your browser.",
          "The country selector in the footer may look up a coarse country from your IP address or timezone in the browser, and remember your choice on this device. That lookup decides whether this browser shows the India fee or the fee for a learner outside India. We do not send that lookup to an advertising network.",
        ],
      },
      {
        heading: "Who we share information with",
        paragraphs: [
          "We share information only with people and providers who help us deliver the service, and only as needed:",
        ],
        bullets: [
          "Teachers and operations staff who run your batch.",
          "Razorpay, for fee collection.",
          "WhatsApp / Meta, when you choose to message us there.",
          "Our website host, currently GitHub Pages, which stores the public site files.",
          "Professional advisers or authorities when the law requires it, or to protect learners, staff or the public.",
        ],
      },
      {
        heading: "Where information is processed",
        paragraphs: [
          "We are established in India. Staff use your information from India. Some providers may process it in other countries when you use them: WhatsApp/Meta if you message us, Razorpay if you pay, and GitHub Pages which hosts the public site. We do not claim that every country those providers use has been declared adequate by a European or UK authority. We share only what that provider needs for the task.",
          "You may email learnwithsmile.in@gmail.com instead of WhatsApp. Class placement and the written fee are still confirmed on WhatsApp before you pay.",
        ],
      },
      {
        heading: "We do not sell personal information",
        paragraphs: [
          "We do not sell personal information. We do not share it for cross-context behavioural advertising. We do not use it to build advertising profiles. Country detection in your browser is used only to show the fee that applies to you. It is not sent to an advertising network.",
        ],
      },
      {
        heading: "Your privacy rights",
        paragraphs: [
          "Wherever you live, you may ask us to see the personal information we hold, correct it, delete it (subject to records we must keep), restrict how we use it while a dispute is open, object to a use that rests only on our legitimate interests, and receive a copy of the notes we wrote down — name, number, course, slot and the bottleneck we named — in a common electronic format.",
          "We do not decide enrolment or fees by solely automated means.",
          "We aim to answer within 30 days. We may ask you to confirm you are the person the information is about. We will not charge a fee unless a request is manifestly unfounded or repeated without reason.",
          "You may complain to a data-protection authority in your country, and to our Grievance Officer in India. Writing to us first is useful. It is not a condition of complaining to an authority.",
        ],
      },
      {
        heading: "How long we keep information",
        paragraphs: [
          "We keep personal information only while we need it for the purpose you contacted us, or while a law requires a hold. WhatsApp chats live in two places: on our devices, which we control, and on WhatsApp/Meta’s systems, which we do not.",
        ],
        bullets: [
          "Consultation chats that do not lead to enrolment: kept on our devices for 90 days after the last message, then deleted from our devices. We may keep a one-line note (number, date, “consulted, did not enrol”) for up to 12 months so we do not message you again by mistake. Diagnosis notes are not kept after that.",
          "Enrolled learners: the WhatsApp thread is kept for the paid course and 12 months after the last paid month (refunds, missed-class records, recordings). We then delete the chat from our devices.",
          "Batch WhatsApp groups: for the duration of that batch and 30 days after it ends, then the group is closed.",
          "Payment, invoice and GST records: kept for 8 years from the end of the relevant financial year, as Indian tax rules require, even if the chat is deleted. These are amount, date, course and status — not the full consultation thread.",
          "Class recordings: for the batch to revise during the course, then deleted or overwritten within 12 months after the batch ends, unless a genuine dispute is open.",
          "Server logs: as long as our host reasonably needs them to run and secure the site, typically weeks rather than years.",
        ],
      },
      {
        heading: "If you ask us to stop or delete",
        paragraphs: [
          "Message WhatsApp or email and say you want us to stop, or to delete what we hold. We reply 10am–midnight IST every day. We aim to close a deletion request within 30 days.",
          "Stopping contact: we will not write to you about enrolment after that, except as needed to finish a paid month already running or a refund already in progress.",
          "Deleting a WhatsApp chat: we delete it from our devices. We cannot delete the copy on your phone, or Meta’s processing of that conversation. If you paid, we still keep the invoice for the tax period above.",
          "Correcting a note: if we named the wrong bottleneck or course in the consultation thread, message us and we will correct our notes and confirm in writing.",
        ],
      },
      YOUR_CHOICES,
      GRIEVANCE_OFFICER,
      {
        heading: "Children and young people",
        paragraphs: [
          "Adult rooms are for learners aged 15 and above.",
          "If the learner is under 18, a parent or guardian must complete enrolment and payment and is the person we message on WhatsApp. Under the Digital Personal Data Protection Act, 2023, we treat that parent or guardian as the person who consents to our use of the child’s information for running the class. We do not use children’s data to show ads. We do not publish children’s photos or class recordings.",
          "We do not claim a COPPA, GDPR or children’s-privacy certificate. Learners outside India may enrol. Adult rooms are for ages 15 and above. We do not knowingly collect personal information from anyone under 13, and we do not enrol anyone under 15. If the learner is 15, 16 or 17, a parent or guardian must enrol and is the person we message, in India or outside India. If we learn that we collected a child’s information without the right consent, we delete it where we reasonably can. Indian law applies to how we run the school. A child-protection or privacy right in the child’s own country that cannot be waived still applies. The operating rules are at https://www.learnwithsmile.app/child-protection.",
        ],
      },
      {
        heading: "Security",
        paragraphs: [
          "We take reasonable technical and organisational steps to protect personal information. No website, messaging app or payment provider is perfectly secure. Please do not send full card numbers to us on WhatsApp.",
        ],
      },
      {
        heading: "Changes",
        paragraphs: [
          "We may update this policy when our practices or the law change. The date at the top of this page is the latest version. Continued use of the site or the classes after an update means the new version applies to later use.",
        ],
      },
    ],
  },
  "/terms": {
    path: "/terms",
    eyebrow: "Terms",
    h1: "Terms of Use",
    standfirst:
      "These terms govern use of this website, the free consultation, and enrolment in Learn With Smile live online classes. Please read them before you pay a fee. A complaint about the site, a consultation, a fee or a class goes to the Grievance Officer named on this page.",
    updated: LEGAL_UPDATED,
    sections: [
      {
        heading: "Agreement",
        paragraphs: [
          "By using www.learnwithsmile.app, messaging us for a consultation, or paying a course fee, you agree to these terms, our Privacy Policy and our Refunds and Cancellation Policy. If you do not agree, do not use the site or enrol.",
          "These pages describe how we run the school. They are not legal advice to you. If a term conflicts with a right that cannot be waived — under Indian law, or under a consumer, privacy or child-protection law in the country where you normally live — that right still applies.",
          "The Grievance Officer for these terms is Soumyakanta Bera. Write there first about the website, a consultation, enrolment, a fee or a refund. We acknowledge a complaint within 48 hours.",
        ],
      },
      {
        heading: "Who we are and what we offer",
        paragraphs: [
          "Learn With Smile is LEARN WITH SMILE SOLE PROPRIETORSHIP, GSTIN 19CFGPD7931C1ZL, registered at 75/2/4, Raja Ram Mohan Roy Road, Kolkata — 700008. We offer live online English communication classes: Spoken English, Interactive Speaking, Business English and Interview Preparation. We do not offer career counselling. Every class is taught live by a trained teacher over the internet.",
          "We also offer a paid Demo Class: one 90-minute seat in a live batch, at ₹199 inclusive of taxes, for a learner who wants to see a real class before enrolling. It is not a sixth programme and it is not the free consultation. The fee rule for that session is only in the Demo Class section below.",
          "We are not a university, board or test authority. We do not issue a school certificate. IELTS and similar exam scores are issued only by the relevant test board. We do not sell IELTS as a course. Interview Preparation is a live English room for HR screens and mocks — it is not a placement guarantee.",
        ],
      },
      {
        heading: "Eligibility",
        paragraphs: [
          "Adult English rooms are for learners aged 15 and above, in India and outside India. We do not currently run Kids or Teens courses. Classes are live online and run on India Standard Time.",
          "Fees published in search results, guides and these policies are India pricing, in Indian Rupees, inclusive of taxes. Those published figures are for learners in India. A learner outside India is not charged that figure. The fee that applies is the one shown for them in the browser and confirmed in writing on WhatsApp before they pay. We do not change that confirmed fee for the same paid period.",
          "If the learner is under 18, a parent or guardian must agree to these terms, complete payment, and remain the account holder we message. You are responsible for a working internet connection, a device with a microphone, and joining at the scheduled IST time.",
        ],
      },
      {
        heading: "Website",
        paragraphs: [
          "The website is provided as general information about our classes, fees and policies. We try to keep it accurate, but timetables, batch availability and examples may change. Course fees and inclusions on a course page apply at the time you enrol, as confirmed on WhatsApp.",
          "You may not copy, scrape for resale, or misuse the site in a way that harms other users or our systems. You may not present our materials as your own.",
        ],
      },
      {
        heading: "Free consultation (counselling, not a class)",
        paragraphs: [
          "Get Free Consultation is a 100% free, small-batch counselling session with personalised advice. We name the bottleneck, show the course and the fee in writing, then you decide. There is no payment, card or UPI to book. Messaging us does not create an obligation to enrol. We hear each person's requirements one by one. It is not a class.",
          "In the session we diagnose your English bottleneck, discuss courses and curriculum, understand your requirements one by one, answer the questions you bring, and recommend one course — or tell you to stay free. Fee, duration, batch size and IST slot come in writing on WhatsApp.",
          "The consultation is not a class, not a sample of the paid hour, and not a placement test with a score. You will not receive speaking minutes on a microphone in the consultation. Those minutes are the paid room. People who search for a free demo class are offered this counselling instead.",
        ],
      },
      {
        id: "demo-session",
        heading: "Demo Class",
        paragraphs: [
          "The Demo Class is a paid seat in a live batch. It lasts 90 minutes. For a learner in India the fee is ₹199, inclusive of taxes. For a learner outside India it is the demo fee shown before payment, confirmed on WhatsApp. It is for a person who wants to seriously see a session taught by our teacher, in a batch, before taking admission. It is not the free consultation, and it is not a free class.",
          "Message us on WhatsApp first (+91 96744 79949). We send the payment link. The session has to be scheduled within 72 hours after payment. If you do not contact us, we cannot place you in a batch, and the fee is not held as a credit for a later week.",
          "The Demo Class fee is not refunded in cash. Within 48 hours after the session, if you take admission in the course you attended, or in any other course we currently offer, that fee is adjusted against the course fee.",
          "By paying and asking us to schedule within 72 hours, you ask us to perform the session promptly. Missing it, joining late, or changing your mind after it was held does not create a cash refund.",
          "Nothing in this section removes a right that cannot be waived under Indian law or under the law where you live.",
        ],
      },
      {
        heading: "Enrolment and fees",
        paragraphs: [
          "Enrolment is open to learners in India and outside India. It is confirmed when we accept you into a batch and the fee confirmed on WhatsApp is paid. For a learner in India, that fee is the Indian Rupee price on the course page, inclusive of taxes. For a learner outside India, it is the price shown for them before payment, repeated in writing on WhatsApp. There is no material fee. We do not charge a second fee for the same period after you have paid.",
          "Payments are collected through Razorpay or another method we specify on WhatsApp. We do not operate a student login or an in-site checkout cart.",
        ],
      },
      {
        heading: "Classes",
        paragraphs: [
          "English group classes are live, with a typical batch of approximately six learners, and up to two class days per week unless a course page says otherwise.",
          "Every live class is the primary lesson. Recordings, where provided, are for revision. A recording is not a substitute for attending.",
        ],
      },
      SCHEDULE_AND_LATENESS,
      {
        heading: "Cancelling before the first class",
        paragraphs: [
          "You may cancel a paid course month and receive a full refund of that month if you tell us on WhatsApp or by email before the first live class of that month has been held. The refund goes back to the original payment method where the provider allows it.",
          "If you ask us to hold that first class, the month is treated as started once the class has been held. We do not then refund that month because you changed your mind, missed later classes, found the work difficult, or did not get a job, visa, exam score or other result. You may still cancel any later month that has not been billed.",
          "If the law where you live gives you a longer right to withdraw from a distance contract, and that right cannot be waived, the longer right still applies. Asking us to start teaching can end that right for teaching already performed. We will confirm the position in writing if you cancel inside such a window.",
        ],
      },
      {
        heading: "Your conduct",
        paragraphs: [
          "Join on time, keep your microphone ready, and treat teachers and other learners with respect. Do not harass anyone, share another learner’s contact details, or record or redistribute class video without our written permission.",
          "We may mute, remove or discontinue access, without a routine refund, if conduct makes a live room unsafe or unworkable. We will say so on WhatsApp if that happens.",
        ],
      },
      {
        heading: "No guaranteed outcome",
        paragraphs: [
          "Speaking ability, interview results, job offers and exam scores depend on your starting level, attendance, practice and many factors outside a classroom. We do not guarantee fluency in a fixed number of days, a particular IELTS band, a job, a visa or any other result.",
        ],
      },
      {
        heading: "Intellectual property",
        paragraphs: [
          "Lesson plans, worksheets, recordings, website copy and branding belong to Learn With Smile or our licensors. Enrolment gives you a personal, non-transferable right to use materials for your own study during the course. You may not sell, publish or teach from our materials.",
        ],
      },
      {
        heading: "Limitation of liability",
        paragraphs: [
          "Our total liability for a paid period is limited to the fees you paid us for that period, except where the law does not allow a limit. We are not liable for loss of profit, loss of a job or visa, or for interruption caused by your internet, your device, WhatsApp, or a payment provider.",
          "We do not limit liability for fraud, for death or personal injury caused by our negligence, or for any other liability the law does not allow us to limit. A mandatory right where you live is not cut down by this clause.",
        ],
      },
      {
        heading: "Changes",
        paragraphs: [
          "We may update these terms. The date at the top of this page is the latest version. Material changes to an ongoing paid course will be messaged to enrolled learners on WhatsApp.",
        ],
      },
      {
        heading: "Governing law",
        paragraphs: [
          "The contract is governed by the laws of India. Courts in Kolkata, West Bengal, India may hear disputes about the website or the classes.",
          "That choice does not remove a mandatory consumer, privacy or child-protection right in the country where you normally live, where that right cannot be waived. You may also use a consumer authority there. Please write to our Grievance Officer first so we can fix the problem.",
        ],
      },
      YOUR_CHOICES,
      GRIEVANCE_OFFICER,
    ],
  },
  "/refunds": {
    path: "/refunds",
    eyebrow: "Refunds",
    h1: "Refunds and Cancellation",
    standfirst:
      "Please read this before you pay. The free consultation is counselling, not a class. You may cancel a paid month for a full refund before its first live class is held. After that class, that month is not refunded for a change of mind. A right that cannot be waived, in India or where you live, still applies.",
    updated: LEGAL_UPDATED,
    sections: [
      {
        heading: "Please get a free consultation first",
        paragraphs: [
          "The consultation is free. There is nothing to refund on a consultation. Join it on WhatsApp, ask every question, and confirm the fee, slot and syllabus in writing before you pay. Enrol only if the format fits.",
          "What you get: a named diagnosis of your bottleneck, one course recommendation (or an honest “this is not us”), and answers to fees, GST, recordings, refunds, Hindi or Bengali support, certificate, IELTS, kids and timings. What you do not get: a sample class, 8–10 minutes on a mic, or a fluency promise. Speaking minutes are the paid batch of approximately six learners.",
        ],
      },
      {
        heading: "How fees work",
        paragraphs: [
          "For a learner in India, English course fees are charged in Indian Rupees, inclusive of taxes, usually by the month in advance, as confirmed on WhatsApp. For a learner outside India, the fee is the price shown for them before they pay, and the same figure confirmed in writing on WhatsApp. A live seat is reserved when you pay.",
        ],
      },
      {
        heading: "Before the first class, and after it",
        paragraphs: [
          "Cancel on WhatsApp or by email before the first live class of a paid month has been held, and we refund that month in full to the original payment method where the provider allows it.",
          "Once that first class has been held, we do not refund the month because you changed your mind, missed later classes, found the work difficult, or did not obtain a job, visa, band score or other result. Your internet, electricity or device, or a later inability to attend the IST slot you confirmed, is also not a refund of that month.",
          "You may still stop any later month before it is billed. If the law where you live gives a longer withdrawal right that cannot be waived, that right still applies, including where asking us to start the class ends the right only for the teaching already given.",
          "The free consultation includes no class, so there is no refund of a class you expected to sit for free. The paid Demo Class fee is not refunded in cash; it is adjusted against a course fee if you take admission within 48 hours of the session.",
        ],
      },
      SCHEDULE_AND_LATENESS,
      {
        heading: "What we will review in good faith",
        paragraphs: [
          "Message us on WhatsApp as soon as you notice a problem. We will review, and where appropriate reverse or refund, cases such as:",
        ],
        bullets: [
          "A duplicate or accidental payment for the same period.",
          "A payment taken in error, or a successful charge where we cannot place you in any suitable batch.",
          "A class we cancel and cannot reasonably replace in the same week.",
          "A situation where we are unable to deliver the live teaching you paid for.",
        ],
      },
      {
        heading: "Cancelling future months",
        paragraphs: [
          "To stop a later month, message us on WhatsApp before that month is billed. We do not run an automatic card subscription on this website. If you have arranged a repeat payment with us, we will confirm how to stop it in writing on WhatsApp.",
          "Unused time in a month that has already started is not carried forward as a cash refund, unless we agree otherwise in writing for one of the good-faith cases above.",
        ],
      },
      {
        heading: "Career counselling",
        paragraphs: [
          "We do not offer career counselling. The live rooms are Spoken English, Interactive Speaking, Business English and Interview Preparation.",
        ],
      },
      {
        heading: "How to ask",
        paragraphs: [
          "Send one WhatsApp message to +91 96744 79949 with your name, the course, the payment date and the reason. You may also email learnwithsmile.in@gmail.com. We reply during 10am–midnight IST every day. Approved refunds, if any, go back to the original payment method where the provider allows it, and can take several working days after we confirm.",
        ],
      },
      {
        heading: "Chargebacks",
        paragraphs: [
          "Please contact us before you raise a dispute with your bank or UPI app. Many issues are a misplaced batch or a duplicate charge that we can correct faster than a chargeback. Unjustified chargebacks may lead to us pausing a seat while the dispute is open.",
        ],
      },
      {
        heading: "Your legal rights",
        paragraphs: [
          "This policy is our usual practice for learners in India and outside India. It does not take away a right under Indian consumer law, or under the consumer law where you live, that cannot be waived. If that right requires a remedy, the remedy still applies.",
        ],
      },
      YOUR_CHOICES,
      GRIEVANCE_OFFICER,
    ],
  },
  "/child-protection": {
    path: "/child-protection",
    eyebrow: "Child protection",
    h1: "Child Protection Policy",
    standfirst:
      "Learn With Smile currently runs adult English rooms for learners aged 15 and above. We do not offer Kids (6–11) or Teens (12–17) courses. These are operating rules for anyone under 18 in an adult room — not a government seal or a foreign children’s-privacy certificate.",
    updated: LEGAL_UPDATED,
    sections: [
      {
        heading: "What this page is — and is not",
        paragraphs: [
          "This policy describes how we place, teach, message and record learners under 18 in our live online rooms. It sits next to our Privacy Policy, Terms of Use and Refunds page. Those four pages together are the written rules.",
          "We are a live online English school in Kolkata, not a child-welfare authority, counsellor or hospital. We do not claim a safeguarding certificate, an NCPCR licence, a COPPA seal, a GDPR children’s-privacy badge, or any other official stamp. We still follow the rules below for every learner under 18, in India or outside India.",
        ],
      },
      {
        heading: "Adult rooms only",
        paragraphs: [
          "The live catalogue is Spoken English, Interactive Speaking, Business English and Interview Preparation. We do not offer career counselling. All of those rooms are for learners 15+.",
          "We do not currently run Spoken English for Kids or Spoken English for Teens. A child under 15 is not placed in an adult batch. For children, look at a dedicated kids platform.",
        ],
      },
      {
        heading: "India — the laws we treat as the floor",
        paragraphs: [
          "We are based in Kolkata, West Bengal, India. Classes are online and open to learners outside India. The contract is governed by Indian law. For under-18 learners we treat the following Indian laws as the floor, not a marketing list:",
        ],
        bullets: [
          "The Digital Personal Data Protection Act, 2023: a parent or guardian consents to our use of a child’s information to run the class. We do not use that information to show ads.",
          "The Protection of Children from Sexual Offences Act, 2012 (POCSO): sexual offences against anyone under 18 are crimes. We do not tolerate them. Where the law requires a report, we will report.",
          "The Juvenile Justice (Care and Protection of Children) Act, 2015: we are not a childcare institution. If we reasonably believe a child is in need of care and protection, we may contact the parent and, where required, the appropriate authority.",
          "The Information Technology Act, 2000 and the rules made under it, for online content and the handling of electronic records.",
          "The Commission for Protection of Child Rights Act, 2005, in the sense that a parent may approach NCPCR or a State Commission if they believe a child’s rights were ignored. This page does not replace that right.",
        ],
      },
      {
        heading: "Published fees are India pricing",
        paragraphs: [
          "The prices in these pages, in search results, and in this policy are India pricing, in Indian Rupees, inclusive of taxes. They are the fees for learners in India. They are not the fee for a learner outside India. That fee is confirmed on WhatsApp before payment. This file and the public pages do not publish a second currency for search engines or answer engines.",
          "We do not claim compliance with the US COPPA rule, the EU GDPR children’s provisions, the UK Age Appropriate Design Code, or any other foreign children’s-privacy regime, and we do not display a badge for them. We still apply the stricter of our own rules and a non-waivable child-protection rule in the child’s country. Our own rules are stricter than a simple age-13 cutoff: we do not knowingly collect information from anyone under 13, and we do not enrol anyone under 15, anywhere. A 15-to-17-year-old needs a parent or guardian on the enrolment, in India or outside India. The contract remains under Indian law and Kolkata courts, subject to any right that cannot be waived.",
        ],
      },
      {
        heading: "Who is in which room",
        paragraphs: [
          "Adult English rooms: 15+, batches of about 6, 1 hr 30 min, up to 2 classes/week.",
          "A 15–17-year-old may join an adult Spoken room only with the parent on WhatsApp and a clear written confirmation. We will not mix under-15s into adult rooms.",
        ],
      },
      {
        heading: "The parent is the customer when the learner is under 18",
        paragraphs: [
          "Fees, WhatsApp, timetable and class recordings sit on the parent’s or guardian’s number. The learner does not need a phone. The parent takes the free consultation on WhatsApp (counselling — not a class) and must enrol and pay if the learner is under 18.",
          "We do not open a private chat with a learner under 18 on a number the parent does not control. If a teenager messages us from their own phone, we still copy the parent on enrolment, fees and recordings.",
        ],
      },
      {
        heading: "How class is kept safe",
        paragraphs: [
          "For a 15–17-year-old in an adult room, the parent is informed of the slot and may sit in.",
          "No 1:1 video with a learner under 18 unless the parent stays on the call. Group classes are the default. We do not offer career counselling.",
          "Teachers do not ask a learner under 18 to turn off the camera so they are alone, to share passwords, or to move to a different app the parent has not agreed to.",
        ],
      },
      {
        heading: "Photos, recordings and marketing",
        paragraphs: [
          "We do not publish under-18 photos or class recordings on this website, on ads, or on social media as a default. A live class is recorded so that batch can revise. Recordings are for that batch and that parent, not for the public.",
          "We do not run ads aimed at children. We do not sell a child’s information. We do not use a child’s name, face or voice in marketing unless a parent gives a separate, specific written yes for that use — and even then we prefer not to.",
        ],
      },
      {
        heading: "What teachers and staff must do",
        paragraphs: [
          "Treat every under-18 learner with ordinary professional care. Keep WhatsApp on the parent’s number. Do not arrange private 1:1 video without the parent. Do not share recordings outside the batch. Raise a concern instead of hoping it goes away.",
        ],
      },
      {
        heading: "How to raise a concern",
        paragraphs: [
          "Message +91 96744 79949 on WhatsApp or email learnwithsmile.in@gmail.com. Name the learner only as needed, the batch, the date, and what happened. We reply 10am–midnight IST every day. The Grievance Officer is Soumyakanta Bera. The contact block is at the end of this page.",
          "If we reasonably believe a child is at immediate risk of harm, we may contact the parent and, where Indian law requires it, the police or a child-welfare authority, even if you asked us not to. We will not promise secrecy that the law does not allow.",
          "A parent may also approach the National Commission for Protection of Child Rights (NCPCR), a State Commission, or the police. This school is not those bodies.",
        ],
      },
      {
        heading: "If this policy is broken",
        paragraphs: [
          "We may pause a seat, move a learner, refuse a later month, or end a teacher’s work on a batch. That is in addition to whatever the law requires. We do not run a public disciplinary scoreboard.",
        ],
      },
      GRIEVANCE_OFFICER,
      {
        heading: "Changes",
        paragraphs: [
          "We may update this policy when our rooms or the law change. The date at the top is the latest version. Material changes that affect an under-18 learner will be messaged to the parent on WhatsApp.",
        ],
      },
    ],
  },
};
