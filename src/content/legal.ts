export type LegalSection = { heading: string; paragraphs: string[]; bullets?: string[] };

export type LegalDoc = {
  path: "/privacy" | "/terms" | "/refunds" | "/child-protection";
  eyebrow: string;
  h1: string;
  standfirst: string;
  updated: string;
  sections: LegalSection[];
};

export const LEGAL_UPDATED = "2026-09-12";

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
          "This policy applies to www.learnwithsmile.app and to personal information you give us when you enquire, book a free demo, enrol, pay, or attend a class. It does not apply to websites, apps or payment pages we do not control, including WhatsApp and Razorpay.",
        ],
      },
      {
        heading: "Information we collect",
        paragraphs: [
          "We collect only what we need to answer you, run a class, or process a fee.",
        ],
        bullets: [
          "Identity and contact: name, WhatsApp number, email address, city or state, and preferred class slot.",
          "Course details: the programme you ask about, goals you mention, and notes needed to place you in a suitable batch.",
          "Class delivery: attendance, teacher feedback, and recordings of live sessions for enrolled learners to revise.",
          "Payments: amount, date, course, and payment status. Card, UPI and wallet details are collected and processed by Razorpay. We do not store full card numbers on this website.",
          "Technical data: basic server logs such as IP address, browser type and pages requested, which our host may keep to operate and secure the site.",
        ],
      },
      {
        heading: "How we use information",
        paragraphs: [
          "We use personal information to reply on WhatsApp, confirm a demo or batch, deliver live classes, share class recordings with the enrolled learner, send fee and timetable details, process payments through Razorpay, and keep records we reasonably need for accounts, tax and dispute handling.",
          "We do not sell personal information. We do not use it to run advertising networks or third-party marketing lists.",
        ],
      },
      {
        heading: "Legal basis, in plain terms",
        paragraphs: [
          "We process information because you asked us for a class or a reply, because we have a contract to teach you after you enrol, because we must keep certain payment and tax records, or because we have a legitimate need to run and secure the website. Where Indian law requires consent for a specific use, we will ask before that use.",
        ],
      },
      {
        heading: "WhatsApp, email and payments",
        paragraphs: [
          "WhatsApp is our preferred admissions channel. When you message us, WhatsApp (Meta) also processes that conversation under its own terms and privacy policy.",
          "Fees are collected through Razorpay. Razorpay’s privacy policy and security practices apply to data you enter on Razorpay’s checkout. We receive confirmation that a payment succeeded or failed, not your full card number.",
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
          "Enquiry messages that do not lead to enrolment are kept only as long as needed to reply and for a short follow-up. Enrolment, attendance and payment records are kept for the duration of the course and for a reasonable period afterwards for accounts, tax and genuine disputes. We then delete or anonymise what we no longer need, unless the law requires a longer hold.",
        ],
      },
      {
        heading: "Your choices",
        paragraphs: [
          "You may ask us, via WhatsApp or email, to access the information we hold about you, correct it, or delete it where we do not need to keep it. You may also ask us to stop contacting you about enrolment.",
          "We may need to keep some records (for example a paid invoice) even after you leave a course. We will explain if we cannot complete a deletion request in full.",
        ],
      },
      {
        heading: "Children and young people",
        paragraphs: [
          "Adult rooms are for learners aged 15 and above. Spoken English for Kids is for ages 6–11. Spoken English for Teens is for ages 12–17. Those rooms are never mixed with each other or with adult batches.",
          "If the learner is under 18, a parent or guardian must complete enrolment and payment and is the person we message on WhatsApp. Under the Digital Personal Data Protection Act, 2023, we treat that parent or guardian as the person who consents to our use of the child’s information for running the class. We do not use children’s data to show ads. We do not publish children’s photos or class recordings.",
          "We do not claim a COPPA, GDPR or children’s-privacy certificate. Enrolment is for learners in India only. We do not enrol students outside India. Indian law and this policy apply. If we learn that we have collected information from a child without appropriate parental consent, we will delete it where we reasonably can. How the kids and teen rooms are run, and how to report a concern, is in our Child Protection Policy at https://www.learnwithsmile.app/child-protection.",
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
      "These terms govern use of this website and enrolment in Learn With Smile live online classes. Please read them before you pay a fee.",
    updated: LEGAL_UPDATED,
    sections: [
      {
        heading: "Agreement",
        paragraphs: [
          "By using www.learnwithsmile.app, messaging us for a demo, or paying a course fee, you agree to these terms, our Privacy Policy and our Refunds and Cancellation Policy. If you do not agree, do not use the site or enrol.",
          "These pages describe how we run the school. They are not legal advice to you. If a term conflicts with a right under Indian law that cannot be waived, that right still applies.",
        ],
      },
      {
        heading: "Who we are and what we offer",
        paragraphs: [
          "Learn With Smile is LEARN WITH SMILE SOLE PROPRIETORSHIP, GSTIN 19CFGPD7931C1ZL, registered at 75/2/4, Raja Ram Mohan Roy Road, Kolkata — 700008. We offer live online English communication and career classes, including Spoken English, Interactive Speaking, Workplace English, Interview Preparation, IELTS preparation, Spoken English for Kids (ages 6–11), Spoken English for Teens (ages 12–17) and 1:1 Career Counselling. Classes are taught by a real teacher over the internet. There is no physical campus and no walk-in centre. Kids, teens and adult rooms are never mixed.",
          "We are not a university, board or test authority. We do not issue a school certificate. IELTS and similar exam scores are issued only by the relevant test board. We train for the paper; we do not award the score.",
        ],
      },
      {
        heading: "Eligibility",
        paragraphs: [
          "Adult English rooms are for learners aged 15 and above. Kids rooms are ages 6–11. Teen rooms are ages 12–17. Rooms are never mixed.",
          "Enrolment is for learners who are in India. We do not take enrolment from outside India. Fees on this site are India pricing, in Indian Rupees, inclusive of taxes.",
          "If the learner is under 18, a parent or guardian must agree to these terms, complete payment, and remain the account holder we message. You are responsible for a working internet connection, a device with a microphone, and joining at the scheduled IST time. For ages 6–11, a parent should stay within earshot of the room.",
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
        heading: "Demo, enrolment and fees",
        paragraphs: [
          "A demo is free and does not require payment. Messaging us does not create an obligation to enrol.",
          "Enrolment is confirmed when we accept you into a batch and the applicable fee is paid. Fees are listed in Indian Rupees and are inclusive of taxes unless a page clearly says otherwise. There is no separate registration fee or material fee for the standard English batches described on this site.",
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
      "Please read this before you pay. A free demo is available so you can see the class. Statutory rights under Indian law still apply.",
    updated: LEGAL_UPDATED,
    sections: [
      {
        heading: "Please try a demo first",
        paragraphs: [
          "The demo is free. There is nothing to refund on a demo. We ask you to join a live session, ask questions, and confirm the fee, slot and syllabus on WhatsApp before you pay. Enrol only if the format fits.",
        ],
      },
      {
        heading: "How fees work",
        paragraphs: [
          "English course fees are charged in Indian Rupees, inclusive of taxes, usually by the month in advance, as confirmed on WhatsApp. Career Counselling is a prepaid 1:1 package as described on its course page.",
          "A live seat is reserved when you pay. That is why we do not run a routine, no-questions-asked refund after a paid period has started.",
        ],
      },
      {
        heading: "What we do not refund as a matter of course",
        paragraphs: [
          "Once a paid billing period has started, we do not ordinarily refund that period because you changed your mind, missed classes, found the work difficult, or did not obtain a particular job, visa, band score or other result.",
          "We also do not ordinarily refund because of your internet, electricity or device problems, or because you cannot attend the IST slot you confirmed.",
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
      "How Learn With Smile runs Spoken English for Kids (6–11) and Teens (12–17). These are operating rules, not a government seal or a foreign children’s-privacy certificate.",
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
        heading: "India — the laws we treat as the floor",
        paragraphs: [
          "We are based in Kolkata, West Bengal, India. Classes are online. The contract is governed by Indian law. For under-18 rooms we treat the following as the minimum, not a marketing list:",
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
          "India is a party to the UN Convention on the Rights of the Child. We take the idea of the child’s best interests as a working attitude: parent on the account, rooms not mixed, no 1:1 video with a child unless the parent stays on the call. That is practice, not a UN accreditation.",
          "We do not claim compliance with the US COPPA rule, the EU GDPR children’s provisions, the UK Age Appropriate Design Code, or any other foreign children’s-privacy regime. The contract remains under Indian law and Kolkata courts, subject to any non-waivable consumer or child-rights law.",
        ],
      },
      {
        heading: "Who is in which room",
        paragraphs: [
          "Spoken English for Kids: ages 6–11, batches of 4–6, 1 hr 30 min, twice a week. Spoken English for Teens: ages 12–17, about 6, 1 hr 30 min, twice a week. Adult English rooms: 15+. Those three are never mixed. A 12-year-old is not placed with working adults. A 9-year-old is not placed with 16-year-olds.",
          "If a parent wants a 15–17-year-old in an adult Spoken room for work English, we will only do that with the parent on WhatsApp and a clear written confirmation. We will not mix 12–14-year-olds into adult rooms.",
        ],
      },
      {
        heading: "The parent is the customer",
        paragraphs: [
          "Fees, WhatsApp, timetable and class recordings sit on the parent’s or guardian’s number. The child does not need a phone. The parent joins the free demo on camera. Under 18, a parent or guardian must enrol and pay.",
          "We do not open a private chat with a child on a number the parent does not control. If a teenager messages us from their own phone, we still copy the parent on enrolment, fees and recordings.",
        ],
      },
      {
        heading: "How class is kept safe",
        paragraphs: [
          "Ages 6–11: a parent or another responsible adult should stay within earshot of the room for the 1 hr 30 min class. Ages 12–17: the parent is informed of the slot and may sit in.",
          "No 1:1 video with a child unless the parent stays on the call. Group classes are the default. Career Counselling 1:1 is an adult service and is not sold as a children’s session.",
          "Teachers do not ask a child to turn off the camera so they are alone, to share passwords, or to move to a different app the parent has not agreed to.",
        ],
      },
      {
        heading: "Photos, recordings and marketing",
        paragraphs: [
          "We do not publish children’s photos or class recordings on this website, on ads, or on social media as a default. A live class is recorded so that batch can revise. Recordings are for that batch and that parent, not for the public.",
          "We do not run ads aimed at children. We do not sell a child’s information. We do not use a child’s name, face or voice in marketing unless a parent gives a separate, specific written yes for that use — and even then we prefer not to.",
        ],
      },
      {
        heading: "What teachers and staff must do",
        paragraphs: [
          "Treat every under-18 learner with ordinary professional care. Keep rooms age-split. Keep WhatsApp on the parent’s number. Do not arrange private 1:1 video without the parent. Do not share recordings outside the batch. Raise a concern instead of hoping it goes away.",
        ],
      },
      {
        heading: "How to raise a concern",
        paragraphs: [
          "Message +91 96744 79949 on WhatsApp or email info@learnwithsmile.app. Name the child only as needed, the batch, the date, and what happened. We reply 09:00–12:00 IST.",
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
          "We may update this policy when our rooms or the law change. The date at the top is the latest version. Material changes to an ongoing kids or teen batch will be messaged to the parent on WhatsApp.",
        ],
      },
    ],
  },
};
