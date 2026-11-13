// Sends page views of the landing page to Dandilo CRM (Dashboard: visitors, pages, sources, countries, devices),
// the same way the main website does. No cookies and nothing personal.
// The visit id lasts for this browser tab only, so the landing page and thank-you page count as one visit.
// To leave your own visits out, open the page once with ?notrack=1 (undo with ?notrack=0).
(function () {
  var DD = window.DD || {};
  if (!DD.CRM_URL || !/(^|\.)dandilodigitals\.com$/.test(location.hostname)) return;
  if (/bot|crawler|spider|crawling|lighthouse|inspectiontool|headless/i.test(navigator.userAgent)) return;
  var q = new URLSearchParams(location.search);
  try {
    if (q.get("notrack") === "1") localStorage.setItem("dd-notrack", "1");
    if (q.get("notrack") === "0") localStorage.removeItem("dd-notrack");
    if (localStorage.getItem("dd-notrack") === "1") return;
  } catch (e) {}

  var sid = "", entry = false;
  try { sid = sessionStorage.getItem("dd_sid") || ""; } catch (e) {}
  if (!sid) {
    entry = true;
    sid = (Math.random().toString(36).slice(2) + Date.now().toString(36)).slice(0, 24);
    try { sessionStorage.setItem("dd_sid", sid); } catch (e) {}
  }

  var body = { path: location.pathname.replace(/\/$/, "") || "/", sid: sid, entry: entry, w: window.innerWidth };
  if (entry) {
    ["utm_source", "utm_medium", "utm_campaign"].forEach(function (k) { if (q.get(k)) body[k] = q.get(k).slice(0, 120); });
    if (q.get("gclid") || q.get("gbraid") || q.get("wbraid")) body.click = "google";
    else if (q.get("msclkid")) body.click = "microsoft";
    else if (q.get("fbclid")) body.click = "facebook";
    try { var ref = document.referrer ? new URL(document.referrer).host : ""; if (ref && ref !== location.host) body.ref = ref.slice(0, 200); } catch (e) {}
  }

  var post = function (path, data) {
    return fetch(DD.CRM_URL + path, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data), keepalive: true });
  };

  // How long the page was visible, sent when the visitor leaves or switches app
  var viewId = null, visibleMs = 0, since = document.visibilityState === "visible" ? performance.now() : 0;
  var engage = function () {
    if (!viewId) return;
    var s = Math.round((visibleMs + (since ? performance.now() - since : 0)) / 1000);
    if (s >= 1) post("/api/public/track/engage", { id: viewId, sid: sid, seconds: s }).catch(function () {});
  };
  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "hidden") { if (since) visibleMs += performance.now() - since; since = 0; engage(); }
    else since = performance.now();
  });
  window.addEventListener("pagehide", engage);

  post("/api/public/track", body)
    .then(function (r) { return r.ok ? r.json() : null; })
    .then(function (d) { viewId = (d && d.id) || null; })
    .catch(function () {});
})();
