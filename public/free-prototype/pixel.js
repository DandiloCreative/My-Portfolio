// Meta Pixel for the landing page.
//   PageView: every page.
//   Lead:     thank-you.html only, and only right after a real form submit (not on refresh or a direct visit).
//   Contact:  a click on any WhatsApp button (.js-wa).
//   BookCallClick (custom): a click on a Book a Call button (.js-call). Not a Lead.
(function () {
  var id = window.DD && window.DD.PIXEL_ID;
  if (!id || /YOUR_/.test(id)) return;

  !(function (f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); };
    if (!f._fbq) f._fbq = n;
    n.push = n; n.loaded = !0; n.version = "2.0"; n.queue = [];
    t = b.createElement(e); t.async = !0; t.src = v;
    s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s);
  })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");

  fbq("init", id);
  fbq("track", "PageView");

  if (document.body && document.body.getAttribute("data-page") === "thank-you") {
    var pending = null;
    try { pending = sessionStorage.getItem("dd_lead_pending"); sessionStorage.removeItem("dd_lead_pending"); } catch (e) {}
    if (pending) fbq("track", "Lead", { content_name: "Free website prototype" }, { eventID: pending });
  }

  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest(".js-wa, .js-call");
    if (!a) return;
    if (a.classList.contains("js-call")) fbq("trackCustom", "BookCallClick");
    else fbq("track", "Contact", { content_name: "WhatsApp" });
  });
})();
