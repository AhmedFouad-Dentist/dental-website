/* =====================================================================
   SITE CONTENT — this is the ONLY file you need to edit.
   ---------------------------------------------------------------------
   • Anything inside [square brackets] is a placeholder. Replace the
     whole thing, brackets included, e.g.
         fullName: "[Full name]"   →   fullName: "Dr Jane Smith"
   • Keep the quotation marks "..." and the commas at the end of lines.
   • While a placeholder is still unfilled, the site shows it with a
     dashed yellow outline so it is easy to spot.
   • To hide an optional line completely, set it to an empty string: ""
   • To remove a whole entry from a list, delete it from { to }, together
     with the comma after it. An empty list [] hides that section.

   UK NOTE: this site is written for a UK dental practice. Only publish it
   once you are registered with the General Dental Council (GDC) — in the
   UK it is an offence for anyone not on the GDC register to use the title
   "dentist" (Dentists Act 1984, section 39). See README for the checklist.
   ===================================================================== */

window.SITE = {
  /* ---------- Name & headline ---------- */
  /* UK style is "Dr First Last" (no full stop). If your name starts with
     "Dr", the site automatically adds the note that "Dr" is a courtesy
     title, as UK advertising rules expect for dentists. */
  fullName: "[Full name]",
  title: "Dentist",
  tagline: "[One-sentence introduction, e.g. what kind of dentistry you enjoy and who you see]",
  clinicName: "[Practice name]",    // the practice where you work
  city: "[Town or city]",
  country: "United Kingdom",

  /* ---------- GDC details (must be shown on UK dental websites) ---------- */
  qualification: "[Primary dental qualification, e.g. BDS]",
  qualificationCountry: "[Country of qualification]",
  gdcNumber: "[GDC number]",

  /* Short line on the small card beside your photo. "" hides it. */
  heroNote: "Gentle, honest care",

  /* Short facts shown as small badges under your name (keep them short). */
  heroBadges: [
    "[Years of experience, e.g. 5+ years' experience]",
    "[Who you see, e.g. NHS & private patients]"
  ],

  /* Optional photo. Put the image in the "assets" folder and write its
     name here, e.g. "assets/photo.jpg". Leave "" to show your initials.
     A portrait (taller than wide) photo looks best. */
  photo: "",

  /* ---------- About ---------- */
  aboutQuote: "[A short sentence that sums up how you care for patients]",
  about: [
    "[Paragraph 1 — a short introduction: where you qualified, your background and how long you have been practising.]",
    "[Paragraph 2 — your approach to patient care and your clinical interests.]"
  ],

  /* ---------- What patients can expect (edit or delete freely) ---------- */
  values: [
    { icon: "chat",   title: "Clear explanations", text: "Your options, what each involves and the costs are explained before any treatment starts." },
    { icon: "heart",  title: "Comfort first",      text: "Unhurried appointments, and you can ask to pause at any point." },
    { icon: "shield", title: "Prevention-focused", text: "Advice to help you keep your own teeth healthy between visits." },
    { icon: "check",  title: "Evidence-based care", text: "Treatment recommendations follow current UK clinical guidance." }
  ],

  /* ---------- Qualifications & training (newest first) ---------- */
  qualifications: [
    { title: "[Degree, e.g. Bachelor of Dental Surgery (BDS)]", place: "[University], [Country]", year: "[Graduation year]" },
    { title: "Overseas Registration Exam (ORE)", place: "General Dental Council, UK", year: "[Year passed]" },
    { title: "[Course, certificate or further training]", place: "[Institution or provider]", year: "[Year]" }
  ],

  /* ---------- Experience (newest first) ---------- */
  experience: [
    {
      role: "[Job title, e.g. Associate Dentist]",
      place: "[Practice name], [Town or city]",
      period: "[Start year] – [End year or Present]",
      details: "[One or two lines about what you do there]"
    },
    {
      role: "[Previous role, e.g. General Dentist]",
      place: "[Clinic or hospital], [City, Country]",
      period: "[Start year] – [End year]",
      details: "[One or two lines about this role]"
    }
  ],

  /* ---------- Services / clinical interests ----------
     General descriptions of common treatments. Delete any you do not
     offer, edit the wording freely, or add your own.
     icon can be: checkup, filling, rootcanal, extraction, hygiene,
     crown, denture, whitening, tooth */
  services: [
    { icon: "checkup",    name: "Check-ups & examinations", text: "A routine examination of the teeth, gums and mouth, with X-rays when clinically needed, and advice on keeping your mouth healthy." },
    { icon: "filling",    name: "Fillings",                 text: "Repairing teeth affected by decay or minor damage, usually with tooth-coloured composite material." },
    { icon: "rootcanal",  name: "Root canal treatment",     text: "Treating an infected or inflamed tooth nerve by cleaning, shaping and sealing the root canals, with the aim of keeping the natural tooth." },
    { icon: "extraction", name: "Extractions",              text: "Removal of teeth that cannot be restored, carried out under local anaesthetic with aftercare instructions to support healing." },
    { icon: "hygiene",    name: "Scaling & gum health",     text: "Professional cleaning to remove plaque and tartar, plus personalised advice on brushing, interdental cleaning and gum health." },
    { icon: "crown",      name: "Crowns & bridges",         text: "Fixed restorations that cover a weakened tooth (crown) or replace a missing tooth by attaching to neighbouring teeth (bridge)." },
    { icon: "denture",    name: "Dentures",                 text: "Removable partial or complete dentures to replace missing teeth, made and adjusted for fit and function." },
    { icon: "whitening",  name: "Teeth whitening",          text: "Lightening the natural shade of teeth after an examination to check whether whitening is suitable for you. In the UK, whitening may only be provided by a registered dental professional." }
  ],

  /* ---------- Your first visit (steps) ---------- */
  firstVisit: [
    { title: "Book",                  text: "Contact the practice by phone, email or online booking to arrange a convenient time." },
    { title: "Examination",           text: "A full check of your teeth, gums and mouth, with X-rays only if they are clinically needed." },
    { title: "Your options",          text: "We talk through the findings, the treatment options (including no treatment) and the costs, so you can decide." },
    { title: "Treatment & aftercare", text: "Treatment at a pace that suits you, with written aftercare advice and follow-up where needed." }
  ],

  /* ---------- Patient reviews ----------
     Add ONLY genuine reviews, with the patient's permission. While this
     list is empty [], the section is hidden. Example entry:
       { quote: "Exact words of the review.", name: "First name, initial" } */
  reviews: [],

  /* ---------- Frequently asked questions (edit or delete freely) ---------- */
  faqs: [
    {
      q: "Do you see NHS or private patients?",
      a: "[Explain whether you see NHS patients, private patients or both, and where patients can find the practice fees.]"
    },
    {
      q: "What happens at a first appointment?",
      a: "You will be asked about your medical history and any concerns, then your teeth, gums and soft tissues are examined. X-rays are taken only if needed. Findings, options and costs are explained before anything is agreed."
    },
    {
      q: "How often should I have a check-up?",
      a: "It depends on your oral health. NICE guidance suggests intervals of between 3 months and 2 years for adults, and up to 1 year for under-18s. Your dentist will recommend an interval that suits you."
    },
    {
      q: "Does root canal treatment hurt?",
      a: "It is carried out under local anaesthetic, so the procedure itself should feel similar to having a filling. Some tenderness for a few days afterwards is common and usually settles with simple painkillers."
    },
    {
      q: "Is teeth whitening safe?",
      a: "In the UK, tooth whitening can only legally be carried out by a registered dental professional, or on their prescription, after an examination. Temporary sensitivity is a common side effect. Fillings, crowns and veneers do not change colour."
    },
    {
      q: "What should I do in a dental emergency?",
      a: "During opening hours, call the practice. When the practice is closed, call NHS 111 for urgent dental advice. Call 999 or go to A&E if swelling in your mouth or neck makes it hard to breathe, swallow or speak, or if the area around your eye or your neck is swollen."
    }
  ],

  /* ---------- Practice, hours & contact ----------
     phone:      as you want it shown and dialled, e.g. "020 0000 0000".
     bookingUrl: the practice's online booking page, if it has one.
     whatsapp:   full international number, digits only, no "+" or spaces.
     instagram:  your username only, without "@".
     mapLink:    paste a Google Maps "Share" link to the practice.
     Leave any of them "" to hide it. */
  address: "[Practice address, including postcode]",
  mapLink: "[Google Maps link]",
  patients: "[NHS, private, or both]",
  feesLink: "[Link to the practice fee guide]",
  complaintsLink: "[Link to the practice complaints policy]",
  hours: [
    { days: "[Days, e.g. Monday – Friday]", time: "[Hours, e.g. 8:30am – 5:30pm]" },
    { days: "[Days, e.g. Saturday]",        time: "[Hours, or Closed]" },
    { days: "[Days, e.g. Sunday]",          time: "[Hours, or Closed]" }
  ],
  bookingUrl: "[Online booking link]",
  contact: {
    phone: "[Practice phone number]",
    email: "[Email]",
    whatsapp: "",
    instagram: "[Instagram username]"
  },
  /* Message that appears ready-typed when a patient taps WhatsApp. */
  whatsappMessage: "Hello, I would like to book an appointment.",

  /* Month and year you last updated this site, e.g. "March 2027". */
  lastUpdated: "[Month year]"
};
