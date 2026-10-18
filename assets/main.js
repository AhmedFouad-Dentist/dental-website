/* Renders the content from content.js into the page.
   You should not need to edit this file — change content.js instead. */
(function () {
  "use strict";

  var S = window.SITE || {};

  // A value counts as a placeholder while it still contains [square brackets].
  function isPlaceholder(value) {
    return typeof value === "string" && /\[[^\]]*\]/.test(value);
  }

  function isEmpty(value) {
    return value == null || String(value).trim() === "";
  }

  function get(path) {
    return path.split(".").reduce(function (obj, key) {
      return obj == null ? undefined : obj[key];
    }, S);
  }

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) setText(node, text);
    return node;
  }

  function setText(node, value) {
    node.textContent = value == null ? "" : value;
    node.classList.toggle("is-placeholder", isPlaceholder(value));
  }

  /* ---------- Single fields: <span data-field="city"> ---------- */
  document.querySelectorAll("[data-field]").forEach(function (node) {
    var value = get(node.getAttribute("data-field"));
    if (value !== undefined) setText(node, value);
  });

  /* ---------- Location line: "Clinic, City, Country" ---------- */
  var locationText = document.getElementById("location-text");
  if (locationText) {
    var parts = [S.clinicName, S.city, S.country].filter(function (p) { return !isEmpty(p); });
    parts.forEach(function (part, i) {
      if (i > 0) locationText.appendChild(document.createTextNode(", "));
      locationText.appendChild(el("span", null, part));
    });
    if (!parts.length) locationText.parentNode.hidden = true;
  }

  /* ---------- Page title & description ---------- */
  var name = S.fullName || "";
  var title = S.title || "Dentist";
  document.title = isPlaceholder(name) || isEmpty(name) ? title : name + " — " + title;
  if (!isPlaceholder(S.tagline) && !isEmpty(S.tagline)) {
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", S.tagline);
  }

  /* ---------- Avatar: photo, initials, or a tooth icon ---------- */
  var avatar = document.getElementById("avatar");
  if (avatar) {
    if (!isEmpty(S.photo)) {
      var img = el("img");
      img.src = S.photo;
      img.alt = "";
      img.width = 160;
      img.height = 160;
      avatar.appendChild(img);
      avatar.classList.add("has-photo");
    } else if (!isPlaceholder(name) && !isEmpty(name)) {
      var initials = name
        .replace(/^(dr\.?|doctor)\s+/i, "")
        .split(/\s+/)
        .filter(Boolean)
        .map(function (part) { return part.charAt(0).toUpperCase(); });
      avatar.textContent = initials.length > 1
        ? initials[0] + initials[initials.length - 1]
        : initials.join("");
    } else {
      avatar.innerHTML =
        '<svg viewBox="0 0 64 64" class="avatar-icon"><path d="M20 6c-7 0-12 5.5-12 13.5 0 6 2.4 10.4 4 15.5 1.7 5.5 2.3 11 3.6 16.5C16.6 56 18.3 58 20.5 58c2.7 0 3.7-3 4.4-6.5.9-4.6 1.6-10.5 7.1-10.5s6.2 5.9 7.1 10.5c.7 3.5 1.7 6.5 4.4 6.5 2.2 0 3.9-2 4.9-6.5 1.3-5.5 1.9-11 3.6-16.5 1.6-5.1 4-9.5 4-15.5C56 11.5 51 6 44 6c-5 0-7.5 2.5-12 2.5S25 6 20 6Z"/></svg>';
    }
  }

  /* ---------- About ---------- */
  var about = document.getElementById("about-text");
  if (about) {
    (S.about || []).forEach(function (paragraph) {
      if (!isEmpty(paragraph)) about.appendChild(el("p", null, paragraph));
    });
  }

  /* ---------- Qualifications ---------- */
  var quals = document.getElementById("qualifications-list");
  if (quals) {
    (S.qualifications || []).forEach(function (q) {
      var li = el("li", "card");
      li.appendChild(el("h3", "card-title", q.title));
      var metaLine = el("p", "card-meta");
      metaLine.appendChild(el("span", null, q.place));
      if (!isEmpty(q.year)) {
        metaLine.appendChild(document.createTextNode(" · "));
        metaLine.appendChild(el("span", null, q.year));
      }
      li.appendChild(metaLine);
      quals.appendChild(li);
    });
  }
  if (isEmpty(S.registration)) {
    var reg = document.getElementById("registration-line");
    if (reg) reg.hidden = true;
  }

  /* ---------- Services ---------- */
  var services = document.getElementById("services-list");
  if (services) {
    (S.services || []).forEach(function (s) {
      var li = el("li", "service");
      li.appendChild(el("h3", "service-title", s.name));
      li.appendChild(el("p", null, s.text));
      services.appendChild(li);
    });
  }

  /* ---------- Experience ---------- */
  var exp = document.getElementById("experience-list");
  if (exp) {
    (S.experience || []).forEach(function (job) {
      var li = el("li", "timeline-item");
      li.appendChild(el("p", "timeline-period", job.period));
      li.appendChild(el("h3", "timeline-role", job.role));
      li.appendChild(el("p", "timeline-place", job.place));
      if (!isEmpty(job.details)) li.appendChild(el("p", "timeline-details", job.details));
      exp.appendChild(li);
    });
  }

  /* ---------- Contact buttons ---------- */
  var icons = {
    whatsapp: '<path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.3-.4.8-1.2.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z"/>',
    email: '<path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm1 2.4V17h16V7.4l-8 5.3-8-5.3ZM5.6 7 12 11.2 18.4 7H5.6Z"/>',
    instagram: '<path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.3-3.3a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"/>'
  };

  var contact = S.contact || {};
  var channels = [
    {
      key: "whatsapp",
      label: "WhatsApp",
      value: contact.whatsapp,
      display: function (v) { return "+" + String(v).replace(/\D/g, ""); },
      href: function (v) { return "https://wa.me/" + String(v).replace(/\D/g, ""); }
    },
    {
      key: "email",
      label: "Email",
      value: contact.email,
      display: function (v) { return v; },
      href: function (v) { return "mailto:" + v; }
    },
    {
      key: "instagram",
      label: "Instagram",
      value: contact.instagram,
      display: function (v) { return "@" + String(v).replace(/^@/, ""); },
      href: function (v) { return "https://www.instagram.com/" + encodeURIComponent(String(v).replace(/^@/, "")) + "/"; }
    }
  ];

  var list = document.getElementById("contact-list");
  if (list) {
    channels.forEach(function (c) {
      if (isEmpty(c.value)) return;
      var filled = !isPlaceholder(c.value);
      var li = el("li");
      // Until a real value is entered, show a non-clickable placeholder card.
      var link = el(filled ? "a" : "div", "contact-card contact-" + c.key);
      if (filled) {
        link.href = c.href(c.value);
        if (c.key !== "email") {
          link.target = "_blank";
          link.rel = "noopener noreferrer";
        }
      }
      var icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      icon.setAttribute("viewBox", "0 0 24 24");
      icon.setAttribute("aria-hidden", "true");
      icon.setAttribute("class", "contact-icon");
      icon.innerHTML = icons[c.key];
      link.appendChild(icon);
      var textWrap = el("span", "contact-text");
      textWrap.appendChild(el("span", "contact-label", c.label));
      textWrap.appendChild(el("span", "contact-value", filled ? c.display(c.value) : c.value));
      link.appendChild(textWrap);
      li.appendChild(link);
      list.appendChild(li);
    });
  }

  /* ---------- Footer year ---------- */
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  /* ---------- Mobile menu ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
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
})();
