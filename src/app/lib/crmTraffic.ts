// Sends page views to Dandilo CRM so its dashboard can show visitors, pages, sources, countries and devices.
// No cookies and nothing personal: the CRM never stores IP addresses. The visit id below lives only in
// memory for this tab, so it is forgotten on reload.
// To leave your own visits out of the numbers, open the site once with ?notrack=1 (undo with ?notrack=0).
import { CRM_API_URL } from "./leads";

const NOTRACK_KEY = "dd-notrack";
const BOT = /bot|crawler|spider|crawling|lighthouse|inspectiontool|headless/i;

let sessionId = "";
let viewId: string | null = null;
let visibleMs = 0;
let visibleSince = 0;
let listening = false;

function excluded() {
  try {
    const q = new URLSearchParams(window.location.search).get("notrack");
    if (q === "1") localStorage.setItem(NOTRACK_KEY, "1");
    if (q === "0") localStorage.removeItem(NOTRACK_KEY);
    return localStorage.getItem(NOTRACK_KEY) === "1";
  } catch {
    return false;
  }
}

function enabled() {
  if (typeof window === "undefined") return false;
  if (!/(^|\.)dandilodigitals\.com$/.test(window.location.hostname)) return false; // not on local copies
  if (BOT.test(navigator.userAgent)) return false;
  return !excluded();
}

function post(path: string, body: object) {
  return fetch(CRM_API_URL + path, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
    keepalive: true,
  });
}

/** Sends how long the current page has been visible (the total so far; the CRM keeps the latest). */
function sendEngagement() {
  if (!viewId) return;
  const ms = visibleMs + (visibleSince ? performance.now() - visibleSince : 0);
  const seconds = Math.round(ms / 1000);
  if (seconds < 1) return;
  post("/api/public/track/engage", { id: viewId, sid: sessionId, seconds }).catch(() => {});
}

/** Text of a button or link, for the CRM's "Actions that signal intent". Never anything the visitor typed. */
function labelOf(el: Element) {
  return (el.getAttribute("aria-label") || el.textContent || "").replace(/\s+/g, " ").trim().slice(0, 80);
}

/** Works out what kind of click this was. Plain internal links outside the header/footer are skipped. */
function classify(el: HTMLElement): { kind: string; target?: string } | null {
  const href = el.getAttribute("href") ?? "";
  if (/calendly\.com/i.test(href)) return { kind: "booking", target: "calendly.com" };
  if (/wa\.me|whatsapp\.com/i.test(href)) return { kind: "whatsapp", target: "WhatsApp" };
  if (href.startsWith("mailto:")) return { kind: "email" };
  if (href.startsWith("tel:")) return { kind: "phone" };
  if (el.tagName === "A" && href) {
    let url: URL;
    try {
      url = new URL(href, window.location.href);
    } catch {
      return null;
    }
    if (url.host !== window.location.host) return { kind: "outbound", target: url.host };
    if (/^\/(contact|free-website-audit|free-prototype)/.test(url.pathname) || url.hash === "#get-prototype") {
      return { kind: "cta", target: url.pathname + url.hash };
    }
    if (el.closest("header, nav, footer")) return { kind: "link", target: url.pathname };
    return null;
  }
  if (el.tagName === "BUTTON" && (el as HTMLButtonElement).type !== "submit") return { kind: "button" };
  return null;
}

/** Sends one click to the CRM (only for visits that are already being counted). */
function sendEvent(kind: string, label: string, target?: string) {
  if (!sessionId) return;
  post("/api/public/track/event", {
    sid: sessionId,
    path: window.location.pathname,
    kind,
    ...(label ? { label } : {}),
    ...(target ? { target: target.slice(0, 200) } : {}),
  }).catch(() => {});
}

function listen() {
  if (listening) return;
  listening = true;
  document.addEventListener(
    "click",
    (e) => {
      const el = (e.target as Element | null)?.closest?.("a, button") as HTMLElement | null;
      if (!el) return;
      const c = classify(el);
      if (c) sendEvent(c.kind, labelOf(el), c.target);
    },
    true,
  );
  // A form passed the browser's checks and is being sent
  document.addEventListener(
    "submit",
    (e) => {
      const form = e.target as HTMLFormElement;
      if (!form.checkValidity()) return; // not filled in yet
      const btn = form.querySelector("button[type=submit], button:not([type])");
      sendEvent("submit", form.getAttribute("aria-label") || (btn ? labelOf(btn) : "") || "Form");
    },
    true,
  );
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
      if (visibleSince) visibleMs += performance.now() - visibleSince;
      visibleSince = 0;
      sendEngagement();
    } else {
      visibleSince = performance.now();
    }
  });
  window.addEventListener("pagehide", sendEngagement);
}

/** Where this visit came from: only sent with the first page of the visit. */
function arrival() {
  const q = new URLSearchParams(window.location.search);
  const out: Record<string, string> = {};
  for (const k of ["utm_source", "utm_medium", "utm_campaign"]) {
    const v = q.get(k);
    if (v) out[k] = v.slice(0, 120);
  }
  if (q.get("gclid") || q.get("gbraid") || q.get("wbraid")) out.click = "google";
  else if (q.get("msclkid")) out.click = "microsoft";
  else if (q.get("fbclid")) out.click = "facebook";
  try {
    const ref = document.referrer ? new URL(document.referrer).host : "";
    if (ref && ref !== window.location.host) out.ref = ref.slice(0, 200);
  } catch {
    // ignore malformed referrers
  }
  return out;
}

/** Call on every page change. */
export function trackCrmPageView(path: string) {
  if (!enabled()) return;
  listen();
  sendEngagement(); // finish the previous page
  const entry = !sessionId;
  if (entry) sessionId = (Math.random().toString(36).slice(2) + Date.now().toString(36)).slice(0, 24);
  viewId = null;
  visibleMs = 0;
  visibleSince = document.visibilityState === "visible" ? performance.now() : 0;
  post("/api/public/track", { path, sid: sessionId, entry, w: window.innerWidth, ...(entry ? arrival() : {}) })
    .then((r) => (r.ok ? r.json() : null))
    .then((data: { id?: string | null } | null) => {
      viewId = data?.id ?? null;
    })
    .catch(() => {});
}
