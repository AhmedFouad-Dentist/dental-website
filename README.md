# dental-website

Personal website for a dentist: a plain static site (HTML + CSS + a little JavaScript) with no build step. Fonts (Fraunces and Plus Jakarta Sans) load from Google Fonts. It works on GitHub Pages exactly as it is.

## Files

| File | What it is |
| --- | --- |
| `content.js` | **All personal details. This is the only file you need to edit.** |
| `index.html` | Page structure (sections, headings). |
| `assets/style.css` | Design: colours, layout, light/dark mode. |
| `assets/main.js` | Puts the content from `content.js` into the page. No need to edit it. |
| `assets/favicon.svg` | Browser tab icon. |
| `.nojekyll` | Tells GitHub Pages to serve the files as they are. |

## How to fill in your details

1. Open `content.js` (on GitHub: click the file, then the ✏️ pencil icon).
2. Replace every value in `[square brackets]` with your real information, brackets included.
   Example: `fullName: "[Full name]"` → `fullName: "Dr. First Last"`.
3. Keep the quotation marks `"..."` and the commas at the end of lines.
4. To hide an optional item, set it to `""`. To remove an entry from a list (a qualification, a job or a service), delete it from `{` to `}` along with its comma.
5. Click **Commit changes**. The live site updates within a minute or two.

Until a placeholder is filled in, the site shows it with a **dashed yellow outline** so you can see what's missing.

### Placeholders to fill (TODO)

- [ ] `fullName`: [Full name]
- [ ] `tagline`: one-sentence introduction
- [ ] `clinicName`, `city`, `country`: [Clinic name], [City], [Country]
- [ ] `heroBadges`: three short facts under your name ([Degree], [University], [Years of experience])
- [ ] `photo` (optional): add e.g. `assets/photo.jpg` (portrait shape works best) and write its path; otherwise your initials are shown
- [ ] `aboutQuote` and `about`: one short sentence plus two short paragraphs
- [ ] `values`: check the four "what to expect" points; edit or delete
- [ ] `qualifications`: degree, [University], [Graduation year], plus any further training
- [ ] `registration` (optional): registration body and number, or `""` to hide
- [ ] `experience`: job title, [Clinic name], [City], years, short description for each role
- [ ] `services`: check the 8 general-dentistry entries; delete any you don't offer and edit the wording
- [ ] `firstVisit` and `faqs`: check the general wording matches how you work
- [ ] `reviews` (optional): genuine patient reviews only, with permission; the section stays hidden while the list is empty
- [ ] `address`, `mapLink`, `hours`: [Clinic address], [Google Maps link], opening days and times
- [ ] `contact.whatsapp`: [WhatsApp number], international format, digits only (country code first, no `+`, no leading `0`)
- [ ] `contact.phone`: [Phone number], or `""` to hide the Call button
- [ ] `contact.email`: [Email]
- [ ] `contact.instagram`: [Instagram username], without `@`

Once the WhatsApp number is filled in, every "Book" button on the site opens a WhatsApp chat with a ready-typed message (`whatsappMessage`).

## Turning on GitHub Pages (one-time)

1. On GitHub, open this repository → **Settings** → **Pages** (left sidebar).
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
3. Set **Branch** to `main` and folder to `/ (root)`, then click **Save**.
4. After about a minute, the address appears at the top of that page, usually
   `https://<your-github-username>.github.io/dental-website/`.

After this, every change committed to `main` is published automatically.

## Previewing locally

Double-click `index.html` to open it in a browser. No server or install is needed.
