export type LegalSection = { heading: string; paragraphs: string[]; bullets?: string[] };

export type LegalDoc = {
  path: "/privacy" | "/terms" | "/refunds";
  eyebrow: string;
  h1: string;
  standfirst: string;
  updated: string;
  sections: LegalSection[];
};

export const LEGAL_UPDATED = "2026-09-11";

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
          "This website is a static brochure. We do not load Google Analytics, advertising pixels or campaign tracking on WhatsApp links. The host may set cookies or logs that are strictly necessary to deliver the pages and keep the site available.",
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
          "Our classes are designed for Indian learners aged 15 and above. If you are under 18, a parent or guardian should complete enrolment and payment. If we learn that we have collected information from a child without appropriate consent, we will delete it where we reasonably can.",
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
          "Learn With Smile offers live online English communication and career classes, including Spoken English, Interactive Speaking, Workplace English, Interview Preparation, IELTS preparation and 1:1 Career Counselling. Classes are taught by a real teacher over the internet. There is no physical campus and no walk-in centre.",
          "We are not a university, board or test authority. We do not issue a school certificate. IELTS and similar exam scores are issued only by the relevant test board. We train for the paper; we do not award the score.",
        ],
      },
      {
        heading: "Eligibility",
        paragraphs: [
          "You should be at least 15 years old. If you are under 18, a parent or guardian must agree to these terms and complete payment. You are responsible for a working internet connection, a device with a microphone, and joining at the scheduled IST time.",
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
};
