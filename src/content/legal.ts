export type LegalSection = { heading: string; paragraphs: string[]; bullets?: string[] };

export type LegalDoc = {
  path: "/privacy" | "/terms" | "/refunds" | "/child-protection";
  eyebrow: string;
  h1: string;
  standfirst: string;
  updated: string;
  sections: LegalSection[];
};

export const LEGAL_UPDATED = "2026-09-22";

export const LEGAL: Record<LegalDoc["path"], LegalDoc> = {
  "/privacy": {
    path: "/privacy",
    eyebrow: "Privacy",
    h1: "Privacy Policy",
    standfirst:
      "This page explains what personal information Learn With Smile collects, why we collect it, and how you can ask us to correct or delete it.",
    updated: LEGAL_UPDATED,
    sections: [
      {
        heading: "Who we are",
        paragraphs: [
          "Learn With Smile provides live online English communication and career classes. We are based in Kolkata, West Bengal, India, and teach learners across India over the internet.",
          "For privacy questions, message us on WhatsApp at +91 96744 79949 or email info@learnwithsmile.app. Office address: 75/2/4, Raja Ram Mohan Roy Road, Kolkata 700008, West Bengal, India. The office is not a walk-in campus.",
        ],
      },
      {
        heading: "What this policy covers",
        paragraphs: [
          "This policy applies to www.learnwithsmile.app and to personal information you give us when you enquire, get a free consultation (counselling on WhatsApp — not a class), enrol, pay, or attend a class. It does not apply to websites, apps or payment pages we do not control, including WhatsApp and Razorpay.",
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
          "We process information because you asked us for a consultation, a class or a reply, because we have a contract to teach you after you enrol, because we must keep certain payment and tax records, or because we have a legitimate need to run and secure the website. Where Indian law requires consent for a specific use, we will ask before that use.",
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
      {
        heading: "Cookies and analytics",
        paragraphs: [
          "This website uses cookies and similar technologies in two groups.",
          "Strictly necessary storage is used to deliver the pages, keep the site available and secure, and remember this notice and similar choices on your device. This group runs whether you choose Accept or Reject.",
          "Analytics storage, including Google Analytics or a comparable measurement tool, is used only if you choose Accept. It helps us understand how the site is used (for example, which pages are opened) so we can improve it. It is not used to show you advertisements, and we do not sell this information. Google may process measurement data on servers outside India under Google’s terms. WhatsApp links on this site are not tagged with advertising pixels.",
          "You may Reject optional analytics. Necessary functions still work. You can change your mind later by clearing this site’s data in your browser.",
          "The country selector in the footer may look up a coarse country from your IP address or timezone in the browser, and remember your choice on this device. That is for later fee and tax display. We do not use it to enrol you outside India, and we do not send that lookup to an advertising network.",
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
          "Google, if you Accept analytics, for site measurement (Google Analytics or a similar tool).",
          "Professional advisers or authorities when the law requires it, or to protect learners, staff or the public.",
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
          "Message WhatsApp or email and say you want us to stop, or to delete what we hold. We reply 09:00–12:00 IST. We aim to close a deletion request within 30 days.",
          "Stopping contact: we will not write to you about enrolment after that, except as needed to finish a paid month already running or a refund already in progress.",
          "Deleting a WhatsApp chat: we delete it from our devices. We cannot delete the copy on your phone, or Meta’s processing of that conversation. If you paid, we still keep the invoice for the tax period above.",
          "Correcting a note: if we named the wrong bottleneck or course in the consultation thread, message us and we will correct our notes and confirm in writing.",
        ],
      },
      {
        heading: "Children and young people",
        paragraphs: [
          "Adult rooms are for learners aged 15 and above.",
          "If the learner is under 18, a parent or guardian must complete enrolment and payment and is the person we message on WhatsApp. Under the Digital Personal Data Protection Act, 2023, we treat that parent or guardian as the person who consents to our use of the child’s information for running the class. We do not use children’s data to show ads. We do not publish children’s photos or class recordings.",
          "We do not claim a COPPA, GDPR or children’s-privacy certificate. Enrolment is for learners in India only. We do not enrol students outside India. Indian law and this policy apply. If we learn that we have collected information from a child without appropriate parental consent, we will delete it where we reasonably can. We currently run adult rooms only (15+). How we handle under-18 learners in those rooms, and how to report a concern, is in our Child Protection Policy at https://www.learnwithsmile.app/child-protection.",
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
      "These terms govern use of this website, the free consultation, and enrolment in Learn With Smile live online classes. Please read them before you pay a fee.",
    updated: LEGAL_UPDATED,
    sections: [
      {
        heading: "Agreement",
        paragraphs: [
          "By using www.learnwithsmile.app, messaging us for a consultation, or paying a course fee, you agree to these terms, our Privacy Policy and our Refunds and Cancellation Policy. If you do not agree, do not use the site or enrol.",
          "These pages describe how we run the school. They are not legal advice to you. If a term conflicts with a right under Indian law that cannot be waived, that right still applies.",
        ],
      },
      {
        heading: "Who we are and what we offer",
        paragraphs: [
          "Learn With Smile is LEARN WITH SMILE SOLE PROPRIETORSHIP, GSTIN 19CFGPD7931C1ZL, registered at 75/2/4, Raja Ram Mohan Roy Road, Kolkata — 700008. We offer live online English communication and career classes: Spoken English, Interactive Speaking, Workplace English, Interview Preparation and 1:1 Career Counselling. Classes are taught by a real teacher over the internet. There is no physical campus and no walk-in centre.",
          "We are not a university, board or test authority. We do not issue a school certificate. IELTS and similar exam scores are issued only by the relevant test board. We do not sell IELTS as a course. Interview Preparation is a live English room for HR screens and mocks — it is not a placement guarantee.",
        ],
      },
      {
        heading: "Eligibility",
        paragraphs: [
          "Adult English rooms are for learners aged 15 and above. We do not currently run Kids or Teens courses.",
          "Enrolment is for learners who are in India. We do not take enrolment from outside India. Fees on this site are India pricing, in Indian Rupees, inclusive of taxes.",
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
          "Get Free Consultation is a one-to-one counselling session on WhatsApp. It is free. There is no payment, card or UPI to book. Messaging us does not create an obligation to enrol.",
          "In the session we diagnose your English bottleneck, discuss courses and curriculum, understand your requirements one by one, answer the questions you bring, and recommend one course — or tell you to stay free. Fee, duration, batch size and IST slot come in writing on WhatsApp.",
          "The consultation is not a class, not a sample of the paid hour, and not a placement test with a score. You will not receive speaking minutes on a microphone in the consultation. Those minutes are the paid room. People who search for a free demo class are offered this counselling instead.",
        ],
      },
      {
        heading: "Enrolment and fees",
        paragraphs: [
          "Enrolment is confirmed when we accept you into a batch and the applicable fee is paid. Fees are listed in Indian Rupees and are inclusive of taxes unless a page clearly says otherwise. Monthly group English courses (Spoken English, Interactive Speaking, Workplace English, Interview Preparation) have a one-time ₹600 admission fee, inclusive of taxes. It is not a ₹2,000 joining fee. It is charged when you first enrol, and again if you finish one course and enrol in another, or if you change course mid-way. Continuing the same monthly course does not attract another admission. Career Counselling (1:1 package) has no admission fee. There is no material fee.",
          "Payments are collected through Razorpay or another method we specify on WhatsApp. We do not operate a student login or an in-site checkout cart.",
        ],
      },
      {
        heading: "Classes",
        paragraphs: [
          "English group classes are live, with a typical batch of approximately six learners, and up to two class days per week unless a course page says otherwise. Career Counselling is a separate 1:1 service.",
          "Every live class is the primary lesson. Recordings, where provided, are for revision. A recording is not a substitute for attending.",
          "A missed class may be rescheduled only within the same week and only if a teacher and slot are available. We do not guarantee a make-up slot.",
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
          "The website and classes are provided as a live teaching service. To the extent permitted by Indian law, we are not liable for loss of profit, loss of opportunity, or indirect or consequential loss, or for interruption caused by internet failure, device failure, third-party apps (including WhatsApp) or payment providers.",
          "Nothing in these terms excludes liability that Indian law does not allow us to exclude, including liability for fraud or for personal injury caused by our negligence.",
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
          "These terms are governed by the laws of India. Subject to any non-waivable consumer rights, courts in Kolkata, West Bengal, India have jurisdiction over disputes arising from the website or the classes.",
        ],
      },
    ],
  },
  "/refunds": {
    path: "/refunds",
    eyebrow: "Refunds",
    h1: "Refunds and Cancellation",
    standfirst:
      "Please read this before you pay. Get a free consultation first — counselling on courses, curriculum and your requirements, one by one. It is not a full class and not a demo class. Statutory rights under Indian law still apply.",
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
          "English course fees are charged in Indian Rupees, inclusive of taxes, usually by the month in advance, as confirmed on WhatsApp. Monthly group courses also take a one-time ₹600 admission fee (not a ₹2,000 joining fee) at first enrolment, and again if you finish a course and enrol in another or switch mid-way. Career Counselling is a prepaid 1:1 package as described on its course page, with no admission fee.",
          "A live seat is reserved when you pay. That is why we do not run a routine, no-questions-asked refund after a paid period has started. The admission fee is part of that enrolment and is not refunded as a matter of course once the paid period has started.",
        ],
      },
      {
        heading: "What we do not refund as a matter of course",
        paragraphs: [
          "Once a paid billing period has started, we do not ordinarily refund that period because you changed your mind, missed classes, found the work difficult, or did not obtain a particular job, visa, band score or other result.",
          "We also do not ordinarily refund because of your internet, electricity or device problems, or because you cannot attend the IST slot you confirmed.",
          "We do not offer a demo class. There is no refund of a class you expected to sit for free in the consultation. The consultation is counselling. Speaking minutes are the paid room.",
        ],
      },
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
        heading: "Career Counselling packages",
        paragraphs: [
          "Career Counselling is prepaid for a set number of 1:1 sessions. If we have not delivered a session, we will try to reschedule. If we cannot deliver a remaining session, we will discuss a fair adjustment for the unused session. Sessions you skip without notice may be treated as delivered.",
        ],
      },
      {
        heading: "How to ask",
        paragraphs: [
          "Send one WhatsApp message to +91 96744 79949 with your name, the course, the payment date and the reason. You may also email info@learnwithsmile.app. We reply during 09:00–12:00 IST. Approved refunds, if any, go back to the original payment method where the provider allows it, and can take several working days after we confirm.",
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
          "This policy explains our usual practice. It does not take away rights you have under applicable Indian consumer law that cannot be waived. If those rights require a remedy in a particular case, that remedy still applies.",
        ],
      },
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
          "We are a live online English school, not a child-welfare authority, counsellor or hospital. We do not claim a safeguarding certificate, an NCPCR licence, a COPPA seal, a GDPR children’s-privacy badge, or any other official stamp. Indian law still applies even when we do not hold those badges.",
        ],
      },
      {
        heading: "Adult rooms only",
        paragraphs: [
          "The live catalogue is Spoken English, Interactive Speaking, Workplace English, Interview Preparation and 1:1 Career Counselling. All of those rooms are for learners 15+.",
          "We do not currently run Spoken English for Kids or Spoken English for Teens. A child under 15 is not placed in an adult batch. For children, look at a dedicated kids platform.",
        ],
      },
      {
        heading: "India — the laws we treat as the floor",
        paragraphs: [
          "We are based in Kolkata, West Bengal, India. Classes are online. The contract is governed by Indian law. For under-18 learners we treat the following as the minimum, not a marketing list:",
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
        heading: "India only — no enrolment outside India",
        paragraphs: [
          "We enrol learners who are in India. We do not take enrolment from outside India. The prices published on this site are for India only, in Indian Rupees, inclusive of taxes.",
          "We do not claim compliance with the US COPPA rule, the EU GDPR children’s provisions, the UK Age Appropriate Design Code, or any other foreign children’s-privacy regime. The contract remains under Indian law and Kolkata courts, subject to any non-waivable consumer or child-rights law.",
        ],
      },
      {
        heading: "Who is in which room",
        paragraphs: [
          "Adult English rooms: 15+, batches of about 6, 1 hr 30 min, up to 2 classes/week. Career Counselling is 1:1 and is an adult service.",
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
          "No 1:1 video with a learner under 18 unless the parent stays on the call. Group classes are the default. Career Counselling 1:1 is an adult service and is not sold as a children’s session.",
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
          "Message +91 96744 79949 on WhatsApp or email info@learnwithsmile.app. Name the learner only as needed, the batch, the date, and what happened. We reply 09:00–12:00 IST.",
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
      {
        heading: "Changes",
        paragraphs: [
          "We may update this policy when our rooms or the law change. The date at the top is the latest version. Material changes that affect an under-18 learner will be messaged to the parent on WhatsApp.",
        ],
      },
    ],
  },
};
