/* =====================================================================
   SITE CONTENT — this is the ONLY file you need to edit.
   ---------------------------------------------------------------------
   • Anything inside [square brackets] is a placeholder. Replace the
     whole thing, brackets included, e.g.
         fullName: "[Full name]"   →   fullName: "Dr. Jane Smith"
   • Keep the quotation marks "..." and the commas at the end of lines.
   • While a placeholder is still unfilled, the site shows it with a
     dashed yellow outline so it is easy to spot.
   • To hide an optional line completely, set it to an empty string: ""
   • To remove a whole entry from a list, delete it from { to }, together
     with the comma after it. An empty list [] hides that section.
   ===================================================================== */

window.SITE = {
  /* ---------- Name & headline ---------- */
  fullName: "[Full name]",          // as you want it shown, e.g. "Dr. First Last"
  title: "Dentist",
  tagline: "[One-sentence introduction, e.g. what kind of dentistry you enjoy and who you see]",
  clinicName: "[Clinic name]",      // where you currently work
  city: "[City]",
  country: "[Country]",

  /* Short line on the small card beside your photo. "" hides it. */
  heroNote: "Gentle, honest care",

  /* Short facts shown as small badges under your name (keep them short). */
  heroBadges: [
    "[Degree, e.g. BDS]",
    "[University]",
    "[Years of experience, e.g. 5+ years]"
  ],

  /* Optional photo. Put the image in the "assets" folder and write its
     name here, e.g. "assets/photo.jpg". Leave "" to show your initials.
     A portrait (taller than wide) photo looks best. */
  photo: "",

  /* ---------- About ---------- */
  aboutQuote: "[A short sentence that sums up how you care for patients]",
  about: [
    "[Paragraph 1 — a short introduction: your background and how long you have been practising.]",
    "[Paragraph 2 — your approach to patient care and what you are working towards.]"
  ],

  /* ---------- What patients can expect (edit or delete freely) ---------- */
  values: [
    { icon: "chat",   title: "Clear explanations", text: "Your options, what each involves and the likely costs are explained before any treatment starts." },
    { icon: "heart",  title: "Comfort first",      text: "Unhurried appointments, and you can ask to pause at any point." },
    { icon: "shield", title: "Prevention-focused", text: "Advice to help you keep your own teeth healthy between visits." },
    { icon: "check",  title: "Evidence-based care", text: "Treatment recommendations follow current clinical guidance." }
  ],

  /* ---------- Qualifications & training (newest first) ---------- */
  qualifications: [
    { title: "[Degree, e.g. Bachelor of Dental Surgery]", place: "[University]", year: "[Graduation year]" },
    { title: "[Course, certificate or further training]", place: "[Institution or provider]", year: "[Year]" }
  ],

  /* Professional registration — optional. Leave "" to hide this line. */
  registration: "[Registration body and number, e.g. dental council / syndicate]",

  /* ---------- Experience (newest first) ---------- */
  experience: [
    {
      role: "[Job title, e.g. General Dentist]",
      place: "[Clinic name], [City]",
      period: "[Start year] – [End year or Present]",
      details: "[One or two lines about what you do there]"
    },
    {
      role: "[Previous role, e.g. Internship / House officer]",
      place: "[Hospital or clinic], [City]",
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
    { icon: "hygiene",    name: "Scaling & oral hygiene",   text: "Professional cleaning to remove plaque and tartar, plus personalised tips on brushing, interdental cleaning and gum health." },
    { icon: "crown",      name: "Crowns & bridges",         text: "Fixed restorations that cover a weakened tooth (crown) or replace a missing tooth by attaching to neighbouring teeth (bridge)." },
    { icon: "denture",    name: "Dentures",                 text: "Removable partial or complete dentures to replace missing teeth, made and adjusted for fit and function." },
    { icon: "whitening",  name: "Teeth whitening",          text: "Lightening the natural shade of teeth after an examination to check whether whitening is suitable for you." }
  ],

  /* ---------- Your first visit (steps) ---------- */
  firstVisit: [
    { title: "Get in touch",          text: "Send a message on WhatsApp or by email with a convenient time and a short note about your concern." },
    { title: "Examination",           text: "A full check of your teeth and gums, with X-rays only if they are clinically needed." },
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
      q: "What happens at a first appointment?",
      a: "You will be asked about your medical history and any concerns, then your teeth, gums and soft tissues are examined. X-rays are taken only if needed. Findings and options are explained before anything is agreed."
    },
    {
      q: "How often should I have a check-up?",
      a: "It depends on your oral health. Some people need to be seen every few months, others less often. Your dentist will recommend an interval that suits you after your examination."
    },
    {
      q: "Does root canal treatment hurt?",
      a: "It is carried out under local anaesthetic, so the procedure itself should feel similar to having a filling. Some tenderness for a few days afterwards is common and usually settles with simple painkillers."
    },
    {
      q: "Is teeth whitening safe?",
      a: "Whitening should only be carried out after an examination, by a dental professional, using approved products. Temporary tooth sensitivity is a common side effect. Fillings and crowns do not change colour."
    },
    {
      q: "What should I do in a dental emergency?",
      a: "For toothache or a broken tooth, get in touch as soon as you can. If you have swelling that is spreading to your eye or neck, difficulty breathing or swallowing, or bleeding that will not stop, go to your nearest emergency department."
    }
  ],

  /* ---------- Clinic, hours & contact ----------
     whatsapp:  full international number, digits only, no "+" or spaces
                (country code first, then the number without its leading 0).
     phone:     as you want it shown and dialled, e.g. "+20 100 000 0000".
     instagram: your username only, without "@".
     mapLink:   paste a Google Maps "Share" link to your clinic.
     Leave any of them "" to hide it. */
  address: "[Clinic address]",
  mapLink: "[Google Maps link]",
  hours: [
    { days: "[Days, e.g. Saturday – Thursday]", time: "[Hours, e.g. 2:00 pm – 10:00 pm]" },
    { days: "[Days, e.g. Friday]",              time: "[Closed]" }
  ],
  contact: {
    whatsapp: "[WhatsApp number]",
    phone: "[Phone number]",
    email: "[Email]",
    instagram: "[Instagram username]"
  },
  /* Message that appears ready-typed when a patient taps a WhatsApp button. */
  whatsappMessage: "Hello Doctor, I would like to book an appointment."
};
