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
     with the comma after it.
   ===================================================================== */

window.SITE = {
  /* ---------- Name & headline ---------- */
  fullName: "[Full name]",          // as you want it shown, e.g. "Dr. First Last"
  title: "Dentist",
  tagline: "[One-sentence introduction, e.g. what kind of dentistry you enjoy and who you see]",
  clinicName: "[Clinic name]",      // where you currently work
  city: "[City]",
  country: "[Country]",

  /* Optional photo. Put the image in the "assets" folder and write its
     name here, e.g. "assets/photo.jpg". Leave "" to show your initials. */
  photo: "",

  /* ---------- About (one or more paragraphs) ---------- */
  about: [
    "[Paragraph 1 — a short introduction: your background and how long you have been practising.]",
    "[Paragraph 2 — your approach to patient care and what you are working towards.]"
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
     These are general descriptions of common treatments. Delete any you
     do not offer, edit the wording freely, or add your own. */
  services: [
    {
      name: "Check-ups & examinations",
      text: "A routine examination of the teeth, gums and mouth, with X-rays when clinically needed, and advice on keeping your mouth healthy."
    },
    {
      name: "Fillings",
      text: "Repairing teeth affected by decay or minor damage, usually with tooth-coloured composite material."
    },
    {
      name: "Root canal treatment",
      text: "Treating an infected or inflamed tooth nerve by cleaning, shaping and sealing the root canals, with the aim of keeping the natural tooth."
    },
    {
      name: "Extractions",
      text: "Removal of teeth that cannot be restored, carried out under local anaesthetic with aftercare instructions to support healing."
    },
    {
      name: "Scaling & oral hygiene",
      text: "Professional cleaning to remove plaque and tartar, plus personalised tips on brushing, interdental cleaning and gum health."
    },
    {
      name: "Crowns & bridges",
      text: "Fixed restorations that cover a weakened tooth (crown) or replace a missing tooth by attaching to neighbouring teeth (bridge)."
    },
    {
      name: "Dentures",
      text: "Removable partial or complete dentures to replace missing teeth, made and adjusted for fit and function."
    },
    {
      name: "Teeth whitening",
      text: "Lightening the natural shade of teeth after an examination to check whether whitening is suitable for you."
    }
  ],

  /* ---------- Contact ----------
     whatsapp:  full international number, digits only, no "+" or spaces
                (country code first, then the number without its leading 0).
     instagram: your username only, without "@".
     Leave any of them "" to hide that button. */
  contact: {
    whatsapp: "[WhatsApp number]",
    email: "[Email]",
    instagram: "[Instagram username]"
  }
};
