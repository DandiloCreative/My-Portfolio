// Free Prototype landing page: WhatsApp links, sticky mobile button and the form.
// The form is sent to Dandilo CRM and to the email inbox at the same time; it counts as sent if either works.
(function () {
  var DD = window.DD || {};
  var waUrl = "https://wa.me/" + DD.WHATSAPP_NUMBER + "?text=" + encodeURIComponent(DD.WHATSAPP_TEXT || "");

  // WhatsApp buttons
  document.querySelectorAll(".js-wa").forEach(function (a) {
    a.href = waUrl;
    a.target = "_blank";
    a.rel = "noopener";
  });

  // Sticky mobile button: hidden while the form is on screen
  var sticky = document.getElementById("sticky-cta");
  var formSection = document.getElementById("get-prototype");
  var hero = document.getElementById("hero-cta");
  if (sticky && formSection && "IntersectionObserver" in window) {
    var formVisible = false, heroVisible = true;
    var update = function () { sticky.classList.toggle("is-hidden", formVisible || heroVisible); };
    new IntersectionObserver(function (e) { formVisible = e[0].isIntersecting; update(); }, { threshold: 0.05 }).observe(formSection);
    if (hero) new IntersectionObserver(function (e) { heroVisible = e[0].isIntersecting; update(); }).observe(hero);
  }

  var form = document.getElementById("prototype-form");
  if (!form) return;
  var errorBox = document.getElementById("form-error");
  var button = form.querySelector("button[type=submit]");
  var params = new URLSearchParams(location.search);

  // Where the visitor came from, so each lead can be traced to its ad
  form.elements.source.value = "free-prototype-landing" + (location.search || "");

  // Cloudflare Turnstile ("are you human?"), loaded only once the visitor starts filling in the form
  var token = "", tsStarted = false, tsWaiters = [];
  function startTurnstile() {
    if (tsStarted || !DD.TURNSTILE_SITE_KEY) return;
    tsStarted = true;
    window.ddTurnstileReady = function () {
      try {
        window.turnstile.render("#ts-box", {
          sitekey: DD.TURNSTILE_SITE_KEY,
          appearance: "interaction-only",
          callback: function (t) { token = t; tsWaiters.splice(0).forEach(function (fn) { fn(); }); },
          "expired-callback": function () { token = ""; },
        });
      } catch (e) {}
    };
    var s = document.createElement("script");
    s.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?onload=ddTurnstileReady&render=explicit";
    s.async = true;
    document.head.appendChild(s);
  }
  form.addEventListener("focusin", startTurnstile);
  form.addEventListener("pointerdown", startTurnstile);
  function waitForToken(ms) {
    if (token || !tsStarted) return Promise.resolve(token);
    return new Promise(function (resolve) {
      var done = function () { resolve(token); };
      tsWaiters.push(done);
      setTimeout(done, ms);
    });
  }

  function showError(html) {
    errorBox.innerHTML = html;
    errorBox.hidden = false;
    errorBox.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    errorBox.hidden = true;
    if (!form.checkValidity()) {
      form.reportValidity();
      var first = form.querySelector(":invalid");
      showError("Please fill in every field" + (first && first.dataset.label ? ' (missing: <b>' + first.dataset.label + "</b>)" : "") + ".");
      return;
    }
    if (form.elements._gotcha.value) { location.href = "/free-prototype/thank-you"; return; } // bot

    var f = form.elements;
    var data = {
      name: f.name.value.trim(),
      business: f.business.value.trim(),
      email: f.email.value.trim(),
      phone: f.phone.value.trim(),
      business_type: f.business_type.value,
      has_website: f.has_website.value,
    };
    var message =
      "Free website prototype request\n" +
      "Business: " + data.business + "\n" +
      "Type of business: " + data.business_type + "\n" +
      "Has a website: " + data.has_website;
    var source = params.get("fbclid") ? "Facebook / Instagram" : params.get("gclid") ? "Google Ads" : params.get("utm_source") || "Free prototype page";

    button.disabled = true;
    button.textContent = "Sending…";

    waitForToken(4000).then(function (turnstileToken) {
      var crm = fetch(DD.CRM_URL + "/api/public/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        keepalive: true,
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: message,
          intent: "new-website",
          formName: "Free prototype (ads)",
          source: source,
          medium: params.get("utm_medium") || (params.get("fbclid") ? "paid social" : undefined),
          campaign: params.get("utm_campaign") || undefined,
          keyword: params.get("utm_term") || undefined,
          landingPage: "/free-prototype" + location.search,
          turnstileToken: turnstileToken || undefined,
        }),
      }).then(function (r) { if (!r.ok) throw new Error("CRM " + r.status); });

      var email = fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: DD.WEB3FORMS_KEY,
          subject: "Free prototype request: " + data.business,
          from_name: "Dandilo Digitals free prototype page",
          replyto: data.email,
          Name: data.name,
          Business: data.business,
          Email: data.email,
          "Phone / WhatsApp": data.phone,
          "Type of business": data.business_type,
          "Has a website": data.has_website,
          Source: f.source.value,
        }),
      }).then(function (r) { return r.json().then(function (j) { if (!r.ok || String(j.success) !== "true") throw new Error("Email " + r.status); }); });

      return Promise.allSettled([crm, email]);
    }).then(function (results) {
      var ok = results.some(function (r) { return r.status === "fulfilled"; });
      if (!ok) throw new Error("not sent");
      try { sessionStorage.setItem("dd_lead_pending", "lead-" + Date.now()); } catch (e) {}
      location.href = "/free-prototype/thank-you";
    }).catch(function () {
      button.disabled = false;
      button.textContent = "Send Me My Free Prototype";
      showError(
        "Sorry, your details couldn't be sent. Please try again, or " +
        '<a class="js-wa" href="' + waUrl + '" target="_blank" rel="noopener">message us on WhatsApp</a> and we\'ll reply right away.'
      );
    });
  });
  // Popup: after 12 seconds, show the same form in a popup with an X at the top.
  // Not shown if the visitor is already at the form or typing in it; closing it hides it for 7 days.
  (function () {
    var pop = document.getElementById("pop"), slot = document.getElementById("pop-slot"), closeBtn = document.getElementById("pop-x");
    var card = form.closest(".card");
    if (!pop || !slot || !closeBtn || !card || /bot|crawler|spider|lighthouse/i.test(navigator.userAgent)) return;
    var home = card.parentNode, KEY = "dd_proto_pop_closed", touched = false, lastFocus = null;
    function get(k, store) { try { return (store || localStorage).getItem(k); } catch (e) { return null; } }
    if (Date.now() - Number(get(KEY) || 0) < 7 * 864e5 || get("dd_lead_pending", window.sessionStorage)) return;
    form.addEventListener("focusin", function () { touched = true; });
    function onKey(e) { if (e.key === "Escape") close(); }
    function open() {
      var r = formSection && formSection.getBoundingClientRect();
      if (touched || (r && r.top < window.innerHeight && r.bottom > 0)) return;
      lastFocus = document.activeElement;
      slot.appendChild(card);
      pop.hidden = false;
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", onKey);
      closeBtn.focus();
    }
    function close() {
      try { localStorage.setItem(KEY, String(Date.now())); } catch (e) {}
      home.appendChild(card);
      pop.hidden = true;
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }
    closeBtn.addEventListener("click", close);
    pop.addEventListener("mousedown", function (e) { if (e.target === pop) close(); });
    setTimeout(open, 12000);
  })();
})();
