/* Renders the content from content.js into the page.
   You should not need to edit this file — change content.js instead. */
(function () {
  "use strict";

  var S = window.SITE || {};
  var SVG_NS = "http://www.w3.org/2000/svg";

  // A value counts as a placeholder while it still contains [square brackets].
  function isPlaceholder(value) {
    return typeof value === "string" && /\[[^\]]*\]/.test(value);
  }

  function isEmpty(value) {
    return value == null || String(value).trim() === "";
  }

  function isFilled(value) {
    return !isEmpty(value) && !isPlaceholder(value);
  }

  function get(path) {
    return path.split(".").reduce(function (obj, key) {
      return obj == null ? undefined : obj[key];
    }, S);
  }

  function setText(node, value) {
    node.textContent = value == null ? "" : value;
    node.classList.toggle("is-placeholder", isPlaceholder(value));
  }

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) setText(node, text);
    return node;
  }

  function byId(id) { return document.getElementById(id); }

  function list(value) { return Array.isArray(value) ? value : []; }

  // Line icons for services and values (24×24, drawn with strokes).
  var ICONS = {
    tooth: '<path d="M8 3c-2.5 0-4 2-4 4.5 0 2 .8 3.5 1.3 5.3.6 2 .8 4 1.2 6 .3 1.5.8 2.2 1.6 2.2 1 0 1.3-1.1 1.6-2.4.3-1.7.6-3.6 2.3-3.6s2 1.9 2.3 3.6c.3 1.3.6 2.4 1.6 2.4.8 0 1.3-.7 1.6-2.2.4-2 .6-4 1.2-6 .5-1.8 1.3-3.3 1.3-5.3C20 5 18.5 3 16 3c-1.8 0-2.6 1-4 1S9.8 3 8 3Z"/>',
    checkup: '<circle cx="10.5" cy="10.5" r="6"/><path d="m15 15 6 6"/><path d="M8 10.5h5M10.5 8v5"/>',
    filling: '<path d="M8 3c-2.5 0-4 2-4 4.5 0 2 .8 3.5 1.3 5.3.6 2 .8 4 1.2 6 .3 1.5.8 2.2 1.6 2.2 1 0 1.3-1.1 1.6-2.4.3-1.7.6-3.6 2.3-3.6s2 1.9 2.3 3.6c.3 1.3.6 2.4 1.6 2.4.8 0 1.3-.7 1.6-2.2.4-2 .6-4 1.2-6 .5-1.8 1.3-3.3 1.3-5.3C20 5 18.5 3 16 3c-1.8 0-2.6 1-4 1S9.8 3 8 3Z"/><path d="M9.5 8.5c1.6 1 3.4 1 5 0"/>',
    rootcanal: '<path d="M8 3c-2.5 0-4 2-4 4.5 0 2 .8 3.5 1.3 5.3.6 2 .8 4 1.2 6 .3 1.5.8 2.2 1.6 2.2 1 0 1.3-1.1 1.6-2.4.3-1.7.6-3.6 2.3-3.6s2 1.9 2.3 3.6c.3 1.3.6 2.4 1.6 2.4.8 0 1.3-.7 1.6-2.2.4-2 .6-4 1.2-6 .5-1.8 1.3-3.3 1.3-5.3C20 5 18.5 3 16 3c-1.8 0-2.6 1-4 1S9.8 3 8 3Z"/><path d="M9.2 8.5 8.6 18M14.8 8.5l.6 9.5"/>',
    extraction: '<path d="M8 8c-2 0-3 1.5-3 3.3 0 1.5.6 2.6 1 3.9.4 1.4.5 2.8.9 4.2.2 1 .6 1.6 1.2 1.6.7 0 1-.8 1.2-1.7.2-1.2.4-2.5 1.7-2.5s1.5 1.3 1.7 2.5c.2.9.5 1.7 1.2 1.7.6 0 1-.6 1.2-1.6.4-1.4.5-2.8.9-4.2.4-1.3 1-2.4 1-3.9C17 9.5 16 8 14 8c-1.2 0-1.8.7-3 .7S9.2 8 8 8Z" transform="translate(1 0)"/><path d="M12 2v3.5M9.5 4 12 1.8 14.5 4"/>',
    hygiene: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4"/><path d="m6.3 6.3 2.1 2.1M15.6 15.6l2.1 2.1M6.3 17.7l2.1-2.1M15.6 8.4l2.1-2.1"/><circle cx="12" cy="12" r="2.2"/>',
    crown: '<path d="M3.5 8.5 7.5 12 12 6l4.5 6 4-3.5-1.8 9.5H5.3L3.5 8.5Z"/><path d="M5.5 21h13"/>',
    denture: '<path d="M3 9c2.5 6 15.5 6 18 0"/><path d="M5 11.5c3 4.5 11 4.5 14 0"/><path d="M8 12.6v1.9M12 13.3v2M16 12.6v1.9"/>',
    whitening: '<path d="M12 3c.6 3.6 2.4 5.4 6 6-3.6.6-5.4 2.4-6 6-.6-3.6-2.4-5.4-6-6 3.6-.6 5.4-2.4 6-6Z"/><path d="M18.5 15.5c.3 1.5 1 2.2 2.5 2.5-1.5.3-2.2 1-2.5 2.5-.3-1.5-1-2.2-2.5-2.5 1.5-.3 2.2-1 2.5-2.5Z"/>',
    chat: '<path d="M4 5h16v11H9l-5 4V5Z"/><path d="M8 9.5h8M8 12.5h5"/>',
    heart: '<path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7a4.3 4.3 0 0 1 7.5 2.8C19.5 15.4 12 20 12 20Z"/>',
    shield: '<path d="M12 3 4.5 6v5.5c0 4.6 3.2 8.2 7.5 9.5 4.3-1.3 7.5-4.9 7.5-9.5V6L12 3Z"/><path d="m8.8 12 2.2 2.2 4.2-4.4"/>',
    check: '<circle cx="12" cy="12" r="9"/><path d="m8 12.2 2.8 2.8L16.2 9.5"/>'
  };

  function icon(name, className) {
    var svg = document.createElementNS(SVG_NS, "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("class", "line-icon" + (className ? " " + className : ""));
    svg.setAttribute("fill", "none");
    svg.setAttribute("stroke", "currentColor");
    svg.setAttribute("stroke-width", "1.6");
    svg.setAttribute("stroke-linecap", "round");
    svg.setAttribute("stroke-linejoin", "round");
    svg.innerHTML = ICONS[name] || ICONS.tooth;
    return svg;
  }

  function spriteIcon(id, className) {
    var svg = document.createElementNS(SVG_NS, "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("class", className || "icon");
    var use = document.createElementNS(SVG_NS, "use");
    use.setAttribute("href", "#" + id);
    svg.appendChild(use);
    return svg;
  }

  /* ---------- Single fields: <span data-field="city"> ---------- */
  document.querySelectorAll("[data-field]").forEach(function (node) {
    var value = get(node.getAttribute("data-field"));
    if (value === undefined) return;
    setText(node, value);
    if (isEmpty(value)) node.hidden = true;
  });

  /* ---------- Page title & description ---------- */
  var name = S.fullName || "";
  var title = S.title || "Dentist";
  document.title = isFilled(name) ? name + " — " + title : title;
  if (isFilled(S.tagline)) {
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", S.tagline);
  }

  /* ---------- Qualification & GDC number: "BDS (Egypt) · GDC No. 123456" ---------- */
  document.querySelectorAll(".js-credentials").forEach(function (node) {
    var parts = [];
    if (!isEmpty(S.qualification)) {
      var q = el("span", null, S.qualification);
      if (!isEmpty(S.qualificationCountry)) {
        q = el("span");
        q.appendChild(el("span", null, S.qualification));
        q.appendChild(document.createTextNode(" ("));
        q.appendChild(el("span", null, S.qualificationCountry));
        q.appendChild(document.createTextNode(")"));
      }
      parts.push(q);
    }
    if (!isEmpty(S.gdcNumber)) {
      var g = el("span");
      g.appendChild(document.createTextNode("GDC No. "));
      g.appendChild(el("span", null, S.gdcNumber));
      parts.push(g);
    }
    parts.forEach(function (part, i) {
      if (i > 0) node.appendChild(document.createTextNode(" · "));
      node.appendChild(part);
    });
    if (!parts.length) node.hidden = true;
  });

  /* "Dr" is a courtesy title for dentists in the UK, so say so. */
  var courtesy = byId("courtesy-note");
  if (courtesy && isFilled(name) && /^dr\.?\s/i.test(name)) {
    var plainName = name.replace(/^dr\.?\s+/i, "");
    courtesy.textContent = "\u201CDr\u201D is used as a courtesy title. " + plainName +
      " is a dentist and does not hold a medical qualification.";
    courtesy.hidden = false;
  }

  /* ---------- Location: "City, Country" ---------- */
  var locationText = byId("location-text");
  if (locationText) {
    [S.city, S.country].filter(function (p) { return !isEmpty(p); }).forEach(function (part, i) {
      if (i > 0) locationText.appendChild(document.createTextNode(", "));
      locationText.appendChild(el("span", null, part));
    });
  }

  /* ---------- Hero badges ---------- */
  var badges = byId("hero-badges");
  if (badges) {
    list(S.heroBadges).forEach(function (text) {
      if (isEmpty(text)) return;
      var li = el("li", "badge");
      li.appendChild(icon("check", "badge-icon"));
      li.appendChild(el("span", null, text));
      badges.appendChild(li);
    });
    if (!badges.children.length) badges.hidden = true;
  }

  /* ---------- Portrait: photo, initials, or a tooth mark ---------- */
  var avatar = byId("avatar");
  if (avatar) {
    if (!isEmpty(S.photo)) {
      var img = el("img");
      img.src = S.photo;
      img.alt = isFilled(name) ? "Portrait of " + name : "Portrait";
      img.width = 480;
      img.height = 600;
      avatar.appendChild(img);
      avatar.classList.add("has-photo");
    } else {
      var mono = el("span", "portrait-mono");
      mono.setAttribute("aria-hidden", "true");
      if (isFilled(name)) {
        var initials = name
          .replace(/^(dr\.?|doctor)\s+/i, "")
          .split(/\s+/)
          .filter(Boolean)
          .map(function (part) { return part.charAt(0).toUpperCase(); });
        mono.textContent = initials.length > 1
          ? initials[0] + initials[initials.length - 1]
          : initials.join("");
      } else {
        mono.appendChild(spriteIcon("i-tooth", "portrait-icon"));
      }
      avatar.appendChild(mono);
    }
  }

  if (isEmpty(S.heroNote)) {
    var note = document.querySelector(".float-card-quote");
    if (note) note.hidden = true;
  }

  /* ---------- Values strip ---------- */
  var values = byId("values-list");
  if (values) {
    list(S.values).forEach(function (v) {
      var li = el("li", "value reveal");
      var ic = el("span", "value-icon");
      ic.appendChild(icon(v.icon));
      li.appendChild(ic);
      var body = el("div");
      body.appendChild(el("h3", "value-title", v.title));
      body.appendChild(el("p", null, v.text));
      li.appendChild(body);
      values.appendChild(li);
    });
    if (!values.children.length) values.closest("section").hidden = true;
  }

  /* ---------- About ---------- */
  var about = byId("about-text");
  if (about) {
    list(S.about).forEach(function (paragraph) {
      if (!isEmpty(paragraph)) about.appendChild(el("p", null, paragraph));
    });
  }
  if (isEmpty(S.aboutQuote)) {
    var quote = document.querySelector(".pull-quote");
    if (quote) quote.hidden = true;
  }

  /* ---------- Services ---------- */
  var services = byId("services-list");
  if (services) {
    list(S.services).forEach(function (s) {
      var li = el("li", "service reveal");
      var ic = el("span", "service-icon");
      ic.appendChild(icon(s.icon));
      li.appendChild(ic);
      li.appendChild(el("h3", "service-title", s.name));
      li.appendChild(el("p", null, s.text));
      services.appendChild(li);
    });
    if (!services.children.length) services.closest("section").hidden = true;
  }

  /* ---------- NHS & private cards ---------- */
  [["nhs-points", S.nhs], ["private-points", S["private"]]].forEach(function (pair) {
    var ul = byId(pair[0]);
    if (!ul) return;
    list(pair[1]).forEach(function (text) {
      if (isEmpty(text)) return;
      var li = el("li");
      li.appendChild(icon("check", "care-check"));
      li.appendChild(el("span", null, text));
      ul.appendChild(li);
    });
    if (!ul.children.length) ul.closest(".care-card").hidden = true;
  });
  if (isEmpty(S.nhsDays)) byId("nhs-days-line").hidden = true;
  if (isEmpty(S.privateDays)) byId("private-days-line").hidden = true;
  if (!list(S.nhs).length && !list(S["private"]).length) byId("fees").hidden = true;

  /* ---------- First visit steps ---------- */
  var journey = byId("journey-list");
  if (journey) {
    list(S.firstVisit).forEach(function (step, i) {
      var li = el("li", "step reveal");
      li.appendChild(el("span", "step-num", String(i + 1).padStart(2, "0")));
      li.appendChild(el("h3", "step-title", step.title));
      li.appendChild(el("p", null, step.text));
      journey.appendChild(li);
    });
    if (!journey.children.length) journey.closest("section").hidden = true;
  }

  /* ---------- Qualifications & experience timelines ---------- */
  function timelineItem(period, heading, place, details) {
    var li = el("li", "timeline-item");
    if (!isEmpty(period)) li.appendChild(el("p", "timeline-period", period));
    li.appendChild(el("h4", "timeline-role", heading));
    if (!isEmpty(place)) li.appendChild(el("p", "timeline-place", place));
    if (!isEmpty(details)) li.appendChild(el("p", "timeline-details", details));
    return li;
  }

  var quals = byId("qualifications-list");
  if (quals) {
    list(S.qualifications).forEach(function (q) {
      quals.appendChild(timelineItem(q.year, q.title, q.place));
    });
  }

  var exp = byId("experience-list");
  if (exp) {
    list(S.experience).forEach(function (job) {
      exp.appendChild(timelineItem(job.period, job.role, job.place, job.details));
    });
  }

  /* ---------- Reviews (only shown when genuine reviews are added) ---------- */
  var reviews = byId("reviews-list");
  if (reviews && list(S.reviews).length) {
    list(S.reviews).forEach(function (r) {
      var li = el("li", "review reveal");
      var fig = el("figure");
      var bq = el("blockquote");
      bq.appendChild(el("p", null, r.quote));
      fig.appendChild(bq);
      fig.appendChild(el("figcaption", null, r.name));
      li.appendChild(fig);
      reviews.appendChild(li);
    });
    byId("reviews").hidden = false;
  }

  /* ---------- FAQ (native <details> accordion) ---------- */
  var faq = byId("faq-list");
  if (faq) {
    list(S.faqs).forEach(function (item, i) {
      var d = el("details", "faq-item");
      if (i === 0) d.open = true;
      var s = el("summary");
      s.appendChild(el("span", null, item.q));
      var plus = el("span", "faq-plus");
      plus.setAttribute("aria-hidden", "true");
      s.appendChild(plus);
      d.appendChild(s);
      d.appendChild(el("div", "faq-answer", item.a));
      faq.appendChild(d);
    });
    if (!faq.children.length) faq.closest("section").hidden = true;
  }

  /* ---------- Practice links: map, fees, complaints ---------- */
  function optionalLink(linkId, wrapId, value) {
    var link = byId(linkId);
    var wrap = byId(wrapId);
    if (!link || !wrap) return;
    if (isFilled(value)) {
      link.href = value;
    } else if (isPlaceholder(value)) {
      // Not filled yet: show the placeholder text instead of a dead link.
      wrap.textContent = "";
      wrap.appendChild(el("span", null, value));
    } else {
      wrap.hidden = true;
    }
  }
  optionalLink("map-link", "map-link-wrap", S.mapLink);
  optionalLink("fees-link", "fees-link-wrap", S.feesLink);
  optionalLink("complaints-link", "complaints-wrap", S.complaintsLink);
  optionalLink("nhs-link", "nhs-link-wrap", S.nhsChargesLink);
  optionalLink("private-link", "private-link-wrap", S.feesLink);
  if (isEmpty(S.patients)) byId("patients-line").hidden = true;

  var hours = byId("hours-list");
  if (hours) {
    list(S.hours).forEach(function (h) {
      var row = el("div", "hours-row");
      row.appendChild(el("dt", null, h.days));
      row.appendChild(el("dd", null, h.time));
      hours.appendChild(row);
    });
    if (!hours.children.length) byId("hours-card").hidden = true;
  }

  /* ---------- Contact ---------- */
  var contact = S.contact || {};
  var digits = function (v) { return String(v).replace(/\D/g, ""); };
  var whatsappUrl = isFilled(contact.whatsapp)
    ? "https://wa.me/" + digits(contact.whatsapp) +
      (isFilled(S.whatsappMessage) ? "?text=" + encodeURIComponent(S.whatsappMessage) : "")
    : null;
  var phoneUrl = isFilled(contact.phone) ? "tel:" + String(contact.phone).replace(/[^\d+]/g, "") : null;

  var channels = [
    { key: "booking",   label: "Book online", sprite: "i-calendar", value: S.bookingUrl,
      display: function () { return "Choose a time"; }, href: function (v) { return v; } },
    { key: "phone",     label: "Phone",     sprite: "i-phone",     value: contact.phone,
      display: function (v) { return v; }, href: function () { return phoneUrl; } },
    { key: "email",     label: "Email",     sprite: "i-mail",      value: contact.email,
      display: function (v) { return v; }, href: function (v) { return "mailto:" + v; } },
    { key: "whatsapp",  label: "WhatsApp",  sprite: "i-whatsapp",  value: contact.whatsapp,
      display: function (v) { return "+" + digits(v); }, href: function () { return whatsappUrl; } },
    { key: "instagram", label: "Instagram", sprite: "i-instagram", value: contact.instagram,
      display: function (v) { return "@" + String(v).replace(/^@/, ""); },
      href: function (v) { return "https://www.instagram.com/" + encodeURIComponent(String(v).replace(/^@/, "")) + "/"; } }
  ];

  var contactList = byId("contact-list");
  if (contactList) {
    channels.forEach(function (c) {
      if (isEmpty(c.value)) return;
      var filled = !isPlaceholder(c.value);
      var li = el("li");
      // Until a real value is entered, show a non-clickable placeholder card.
      var card = el(filled ? "a" : "div", "contact-card");
      if (filled) {
        card.href = c.href(c.value);
        if (c.key !== "phone" && c.key !== "email") {
          card.target = "_blank";
          card.rel = "noopener noreferrer";
        }
      }
      var ic = el("span", "contact-icon");
      ic.appendChild(spriteIcon(c.sprite));
      card.appendChild(ic);
      var text = el("span", "contact-text");
      text.appendChild(el("span", "contact-label", c.label));
      text.appendChild(el("span", "contact-value", filled ? c.display(c.value) : c.value));
      card.appendChild(text);
      li.appendChild(card);
      contactList.appendChild(li);
    });
  }

  // "Book" buttons open the online booking page once it is set;
  // otherwise they scroll to the contact options.
  if (isFilled(S.bookingUrl)) {
    document.querySelectorAll(".js-book").forEach(function (a) {
      a.href = S.bookingUrl;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
    });
  }
  if (phoneUrl) {
    document.querySelectorAll(".js-call").forEach(function (a) { a.href = phoneUrl; });
  } else if (isEmpty(contact.phone)) {
    document.querySelectorAll(".js-call").forEach(function (a) { a.hidden = true; });
  }

  /* ---------- Footer year ---------- */
  var year = byId("year");
  if (year) year.textContent = new Date().getFullYear();

  /* ---------- Header: shadow on scroll ---------- */
  var header = byId("site-header");
  if (header) {
    var onScroll = function () { header.classList.toggle("is-scrolled", window.scrollY > 8); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------- Mobile menu ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = byId("site-nav");
  if (toggle && nav) {
    var setOpen = function (open) {
      toggle.setAttribute("aria-expanded", String(open));
      nav.classList.toggle("is-open", open);
    };
    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) setOpen(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        setOpen(false);
        toggle.focus();
      }
    });
  }

  /* ---------- Gentle fade-in on scroll ---------- */
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var revealables = document.querySelectorAll(".reveal");
  if (!reduceMotion && "IntersectionObserver" in window) {
    document.documentElement.classList.add("js-reveal");
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    revealables.forEach(function (node) { io.observe(node); });
  }
})();
