/* Builds the CV page from content.js. Edit content.js, not this file. */
(function () {
  "use strict";

  var S = window.SITE || {};
  var JOB = S.job || {};

  function isPlaceholder(v) { return typeof v === "string" && /\[[^\]]*\]/.test(v); }
  function isEmpty(v) { return v == null || String(v).trim() === ""; }
  function list(v) { return Array.isArray(v) ? v : []; }
  function byId(id) { return document.getElementById(id); }

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) {
      node.textContent = text;
      node.classList.toggle("is-placeholder", isPlaceholder(text));
    }
    return node;
  }

  function hideSection(id) { var s = byId(id); if (s) s.hidden = true; }

  // Name: no "Dr" on the CV until you are GDC registered.
  var name = S.fullName || "";
  byId("cv-name").appendChild(el("span", null, name));
  if (!isPlaceholder(name) && !isEmpty(name)) document.title = name + " — CV";

  // Headline: "BDS (Country) · ORE Part 2 passed · GDC registration in progress"
  var headline = byId("cv-headline");
  var parts = [];
  if (!isEmpty(S.qualification)) {
    var q = el("span");
    q.appendChild(el("span", null, S.qualification));
    if (!isEmpty(S.qualificationCountry)) {
      q.appendChild(document.createTextNode(" ("));
      q.appendChild(el("span", null, S.qualificationCountry));
      q.appendChild(document.createTextNode(")"));
    }
    parts.push(q);
  }
  if (S.mode === "patients" && !isEmpty(S.gdcNumber)) {
    var g = el("span");
    g.appendChild(document.createTextNode("GDC No. "));
    g.appendChild(el("span", null, S.gdcNumber));
    parts.push(g);
  } else if (!isEmpty(JOB.status)) {
    parts.push(el("span", null, JOB.status));
  }
  parts.forEach(function (p, i) {
    if (i) headline.appendChild(document.createTextNode(" · "));
    headline.appendChild(p);
  });

  // Contact line
  var contact = byId("cv-contact");
  var items = [];
  if (!isEmpty(JOB.phone)) items.push(el("span", null, JOB.phone));
  if (!isEmpty(JOB.email)) {
    if (isPlaceholder(JOB.email)) items.push(el("span", null, JOB.email));
    else { var m = el("a", null, JOB.email); m.href = "mailto:" + JOB.email; items.push(m); }
  }
  if (!isEmpty(JOB.linkedin)) {
    if (isPlaceholder(JOB.linkedin)) items.push(el("span", null, JOB.linkedin));
    else {
      var l = el("a", null, String(JOB.linkedin).replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, ""));
      l.href = JOB.linkedin;
      items.push(l);
    }
  }
  if (!isEmpty(JOB.preferredLocation)) items.push(el("span", null, JOB.preferredLocation));
  items.forEach(function (n, i) {
    if (i) contact.appendChild(el("span", "sep", "•"));
    contact.appendChild(n);
  });

  // Statement
  if (isEmpty(JOB.statement)) hideSection("sec-statement");
  else byId("cv-statement").replaceWith(el("p", null, JOB.statement));

  // Facts lists (label → value)
  function facts(id, rows) {
    var dl = byId(id);
    rows.forEach(function (r) {
      if (isEmpty(r[1])) return;
      var row = el("div", "cv-fact");
      row.appendChild(el("dt", null, r[0]));
      row.appendChild(el("dd", null, r[1]));
      dl.appendChild(row);
    });
    return dl.children.length;
  }

  var regValue = S.mode === "patients" && !isEmpty(S.gdcNumber)
    ? "GDC No. " + S.gdcNumber
    : JOB.status;
  if (!facts("cv-eligibility", [
    ["GDC registration", regValue],
    ["Right to work", JOB.rightToWork],
    ["Looking for", JOB.seeking],
    ["Location", JOB.preferredLocation],
    ["Available from", JOB.availableFrom]
  ])) hideSection("sec-eligibility");

  if (!facts("cv-clinical", list(JOB.clinical).map(function (c) { return [c.area, c.detail]; })))
    hideSection("sec-clinical");

  // Entries with a date column
  function entries(id, rows) {
    var box = byId(id);
    rows.forEach(function (r) {
      var row = el("div", "cv-entry");
      row.appendChild(el("p", "cv-date", r.date || ""));
      var body = el("div");
      body.appendChild(el("h3", null, r.title));
      if (!isEmpty(r.place)) body.appendChild(el("p", "cv-place", r.place));
      if (!isEmpty(r.details)) body.appendChild(el("p", "cv-details", r.details));
      row.appendChild(body);
      box.appendChild(row);
    });
    return rows.length;
  }

  entries("cv-qualifications", list(S.qualifications).map(function (q) {
    return { date: q.year, title: q.title, place: q.place };
  }));
  entries("cv-experience", list(S.experience).map(function (j) {
    return { date: j.period, title: j.role, place: j.place, details: j.details };
  }));
  if (!entries("cv-cpd", list(JOB.cpd).map(function (c) {
    return { date: c.year, title: c.title, place: c.provider };
  }))) hideSection("sec-cpd");

  // Bullet lists
  function bullets(id, sectionId, values) {
    var ul = byId(id);
    list(values).forEach(function (v) { if (!isEmpty(v)) ul.appendChild(el("li", null, v)); });
    if (!ul.children.length) hideSection(sectionId);
  }
  bullets("cv-skills", "sec-skills", JOB.skills);
  bullets("cv-languages", "sec-languages", JOB.languages);
  bullets("cv-memberships", "sec-memberships", JOB.memberships);

  if (isEmpty(JOB.references)) hideSection("sec-references");
  else byId("cv-references").replaceWith(el("p", null, JOB.references));

  byId("print-btn").addEventListener("click", function () { window.print(); });
})();
