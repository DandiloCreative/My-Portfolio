// Meta (Facebook/Instagram) Pixel.
// Paste your Pixel ID below (Meta Events Manager → Data sources → your pixel → ID).
// While it's empty, nothing loads and every call below does nothing.
import { onConsentChange, trackingAllowed } from "./consent";
import { getFacebookClick } from "./attribution";

export const META_PIXEL_ID = "1153704343895256";

type Fbq = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[];
  loaded: boolean;
  version: string;
  push: Fbq;
};

declare global {
  interface Window {
    fbq?: Fbq;
    _fbq?: Fbq;
  }
}

let started = false;

/** Load the pixel script (Meta's standard base code, without the automatic PageView). */
export function initMetaPixel() {
  if (started || !META_PIXEL_ID || typeof window === "undefined") return;
  started = true;

  if (!window.fbq) {
    const fbq = function (...args: unknown[]) {
      if (fbq.callMethod) fbq.callMethod(...args);
      else fbq.queue.push(args);
    } as Fbq;
    fbq.push = fbq;
    fbq.loaded = true;
    fbq.version = "2.0";
    fbq.queue = [];
    window.fbq = fbq;
    if (!window._fbq) window._fbq = fbq;

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://connect.facebook.net/en_US/fbevents.js";
    document.head.appendChild(script);
  }

  // Visitors in Europe aren't tracked until they accept cookies (the pixel queues events until then)
  if (!trackingAllowed()) window.fbq("consent", "revoke");
  onConsentChange((choice) => window.fbq?.("consent", choice === "granted" ? "grant" : "revoke"));

  window.fbq("init", META_PIXEL_ID);
  trackContactClicks();
}

/** Call on every page change (the site is a single-page app, so this isn't automatic). */
export function trackPageView() {
  window.fbq?.("track", "PageView");
}

type LeadUser = { email?: string; phone?: string; name?: string };

/** A form enquiry. Sent from the browser (Pixel) and from our server (Conversions API, see api/meta-event.js). */
export function trackLead(user: LeadUser = {}, formName?: string) {
  sendEvent("Lead", { content_name: formName }, user);
}

/**
 * Sends one event both ways with the same ID, so Meta counts it once but still gets it
 * when the browser blocks the Pixel (ad blockers, iPhone privacy settings).
 */
function sendEvent(name: "Lead" | "Contact", params: Record<string, string | undefined>, user: LeadUser = {}) {
  if (!window.fbq) return;
  const eventId = newEventId();
  window.fbq("track", name, params, { eventID: eventId });
  if (!trackingAllowed()) return;
  fetch("/api/meta-event", {
    method: "POST",
    keepalive: true,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      event_name: name,
      event_id: eventId,
      event_source_url: window.location.href,
      content_name: params.content_name,
      fbp: readCookie("_fbp"),
      fbc: readCookie("_fbc") || fbcFromAdClick(),
      email: user.email,
      phone: user.phone,
      name: user.name,
    }),
  }).catch(() => {});
}

function newEventId() {
  return typeof crypto !== "undefined" && crypto.randomUUID
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function readCookie(name: string) {
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : undefined;
}

/** Rebuilds Meta's click ID cookie from a stored ad click, in case the Pixel couldn't set it. */
function fbcFromAdClick() {
  const click = getFacebookClick();
  return click ? `fb.1.${click.time}.${click.fbclid}` : undefined;
}

/** Count clicks on WhatsApp and email links as "Contact", wherever they are on the site. */
function trackContactClicks() {
  document.addEventListener(
    "click",
    (e) => {
      const link = (e.target as HTMLElement | null)?.closest?.("a");
      const href = link?.getAttribute("href") || "";
      if (/whatsapp\.com|wa\.me/i.test(href)) {
        sendEvent("Contact", { content_name: "WhatsApp" });
      } else if (href.startsWith("mailto:")) {
        sendEvent("Contact", { content_name: "Email" });
      }
    },
    { capture: true }
  );
}
