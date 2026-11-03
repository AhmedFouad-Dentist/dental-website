# dental-website

Personal website for a dentist working in the **United Kingdom**. It's a plain static site (HTML + CSS + a little JavaScript) with no build step. Fonts (Fraunces and Plus Jakarta Sans) load from Google Fonts. It works on GitHub Pages exactly as it is.

> **Do not publish yet.** In the UK it is a criminal offence for anyone not on the General Dental Council (GDC) register to use the title "dentist" or to imply they are a registered dentist (Dentists Act 1984, section 39). Keep GitHub Pages **off** until your GDC registration is confirmed. See the checklist below.

## Two modes: job search now, patients later

`content.js` starts with `mode: "job"`:

- **`"job"` (now):** the site is a professional profile for practice owners and recruiters. It has no "Dentist" title, no booking and no patient sections. It shows clinical experience, what you're looking for, CPD, skills and a **Download CV** button. Fill in the `job: { ... }` details.
- **`"patients"` (after GDC registration):** change it to `mode: "patients"` and the full patient website appears (services, NHS & private, FAQ, booking, GDC number).

**The CV** (`cv.html`) is built automatically from the same `content.js`. Open it and click **Save as PDF** to get an A4 PDF to send with applications.

## Files

| File | What it is |
| --- | --- |
| `content.js` | **All personal details. This is the only file you need to edit.** |
| `index.html` | Page structure (sections, headings). |
| `assets/style.css` | Design: colours, layout, light/dark mode. |
| `assets/main.js` | Puts the content from `content.js` into the page. No need to edit it. |
| `cv.html`, `assets/cv.js`, `assets/cv.css` | The CV page, built from `content.js`. |
| `assets/favicon.svg` | Browser tab icon. |
| `.nojekyll` | Tells GitHub Pages to serve the files as they are. |

## How to fill in your details

1. Open `content.js` (on GitHub: click the file, then the ✏️ pencil icon).
2. Replace every value in `[square brackets]` with your real information, brackets included.
   Example: `fullName: "[Full name]"` → `fullName: "Dr First Last"`.
3. Keep the quotation marks `"..."` and the commas at the end of lines.
4. To hide an optional item, set it to `""`. To remove an entry from a list (a qualification, a job, a service or an FAQ), delete it from `{` to `}` along with its comma.
5. Click **Commit changes**.

Until a placeholder is filled in, the site shows it with a **dashed yellow outline** so you can see what's missing.

### Placeholders to fill (TODO)

**For job mode and the CV (do these first):**

- [ ] `fullName` (without "Dr" until GDC registered), `qualification`, `qualificationCountry`
- [ ] `job.status`, `job.seeking`, `job.preferredLocation`, `job.availableFrom`, `job.rightToWork`
- [ ] `job.email`, `job.phone`, `job.linkedin`
- [ ] `job.highlights`, `job.statement`, `job.clinical` (approximate case numbers help)
- [ ] `job.cpd`, `job.skills`, `job.languages`, `job.memberships`
- [ ] `about`, `aboutQuote`, `qualifications`, `experience`

**For patient mode (after GDC registration):**

- [ ] `fullName`: [Full name] (UK style: `Dr First Last`, no full stop)
- [ ] `tagline`: one-sentence introduction
- [ ] `clinicName`, `city`: [Practice name], [Town or city]
- [ ] `qualification`, `qualificationCountry`, `gdcNumber`: e.g. BDS, [Country of qualification], [GDC number]
- [ ] `heroBadges`: two short facts under your name
- [ ] `photo` (optional): add e.g. `assets/photo.jpg` (portrait shape works best) and write its path; otherwise your initials are shown
- [ ] `aboutQuote` and `about`: one short sentence plus two short paragraphs
- [ ] `values`: check the four "what to expect" points; edit or delete
- [ ] `qualifications`: degree, [University], [Graduation year], the year you passed the ORE, plus any further training
- [ ] `experience`: job title, place, years, short description for each role
- [ ] `services`: check the 8 general-dentistry entries; delete any you don't offer and edit the wording
- [ ] `nhsDays`, `privateDays`: which days you see NHS and private patients (or `""` to hide); check the `nhs` / `private` points and `careIntro`
- [ ] `nhsChargesLink`: already set to the NHS England charges page; change it if the practice is in Wales, Scotland or Northern Ireland
- [ ] `firstVisit` and `faqs`: check the wording matches how your practice works
- [ ] `reviews` (optional): genuine patient reviews only, with permission; the section stays hidden while the list is empty
- [ ] `address`, `mapLink`, `patients`, `feesLink`, `complaintsLink`, `hours`: practice details
- [ ] `bookingUrl`: the practice's online booking page, or `""` (the Book buttons then scroll to the contact options)
- [ ] `contact.phone`, `contact.email`, `contact.instagram`; `contact.whatsapp` is optional and hidden while `""`
- [ ] `lastUpdated`: month and year, e.g. `March 2027`

## What the site already does for UK rules

- Shows your **qualification, the country it is from, and your GDC number** under your name, in the Background section and in the footer, as GDC advertising guidance asks. It also links to the [GDC online register](https://olr.gdc-uk.org/) so patients can check.
- If your name starts with **"Dr"**, it automatically adds a footer note that "Dr" is a courtesy title and that you do not hold a medical qualification.
- Gives urgent-care advice in line with NHS guidance: **NHS 111** when the practice is closed, **999 / A&E** for swelling that affects breathing, swallowing, speech, the eye or the neck.
- Includes spaces for the practice address, NHS/private status, a fee-guide link, a complaints-policy link and a "last updated" date.
- Leaves the reviews section hidden until you add genuine reviews.
- Has an "NHS & private" section for a mixed practice. It explains what each covers, links to the official NHS charges, and says patients get a treatment plan with costs before treatment.
- States in the footer that you are regulated by the GDC and links to the GDC *Standards for the Dental Team*, as the Electronic Commerce Regulations 2002 (regulation 6) expect for regulated professions.

Before going live, ask your practice (or your indemnity provider) to check the wording. The practice may have its own rules for associate websites.

## Before going live: checklist

1. Pass ORE Part 2.
2. Your **GDC registration is confirmed**, and you appear on the [GDC online register](https://olr.gdc-uk.org/).
3. Fill in every placeholder in `content.js`, including `gdcNumber`.
4. Then turn on GitHub Pages:
   1. On GitHub, open this repository → **Settings** → **Pages** (left sidebar).
   2. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
   3. Set **Branch** to `main` and folder to `/ (root)`, then click **Save**.
   4. After about a minute, the address appears at the top of that page, usually
      `https://<your-github-username>.github.io/dental-website/`.

Note: this repository is public, so anything committed here can be seen even before Pages is turned on. You may prefer to add your personal details only when you are ready to publish.

## Previewing locally

Double-click `index.html` to open it in a browser. No server or install is needed.
