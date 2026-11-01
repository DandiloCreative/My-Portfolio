// Google Analytics 4 and Google Ads, sharing one Google tag.
import { CONSENT_REGIONS, getConsent, googleConsentState, onConsentChange } from "./consent";

// Google Analytics → Admin → Data streams → your web stream ("G-XXXXXXXXXX").
export const GA_MEASUREMENT_ID = "G-T81ZEL1547";

// Google Ads conversion tracking (optional; you can import the GA4 "generate_lead" key event instead).
// Google Ads → Goals → Conversions → your "Lead" conversion → Tag setup → "Install the tag yourself":
//   GOOGLE_ADS_ID is the "AW-123456789" part, GOOGLE_ADS_LEAD_LABEL is the text after the slash.
// While either is empty, no Google Ads conversion is sent.
export const GOOGLE_ADS_ID = "";
export const GOOGLE_ADS_LEAD_LABEL = "";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

let started = false;

export function initAnalytics() {
  if (started || !GA_MEASUREMENT_ID || typeof window === "undefined") return;
  started = true;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // gtag expects the arguments object itself
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };

  // Consent Mode v2: ask first in Europe, allowed by default elsewhere. Must run before "config".
  window.gtag("consent", "default", { ...googleConsentState("denied"), region: CONSENT_REGIONS, wait_for_update: 500 });
  window.gtag("consent", "default", googleConsentState("granted"));
  const saved = getConsent();
  if (saved) window.gtag("consent", "update", googleConsentState(saved));
  window.gtag("set", "ads_data_redaction", true);
  onConsentChange((choice) => window.gtag?.("consent", "update", googleConsentState(choice)));

  window.gtag("js", new Date());
  // We send page views ourselves on every page change (single-page app)
  window.gtag("config", GA_MEASUREMENT_ID, { send_page_view: false });
  if (GOOGLE_ADS_ID) window.gtag("config", GOOGLE_ADS_ID, { allow_enhanced_conversions: true });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  // Count WhatsApp and email clicks anywhere on the site
  document.addEventListener(
    "click",
    (e) => {
      const href = (e.target as HTMLElement | null)?.closest?.("a")?.getAttribute("href") || "";
      if (/whatsapp\.com|wa\.me/i.test(href)) trackEvent("contact", { method: "whatsapp" });
      else if (href.startsWith("mailto:")) trackEvent("contact", { method: "email" });
    },
    { capture: true }
  );
}

export function trackAnalyticsPageView() {
  window.gtag?.("event", "page_view", {
    page_location: window.location.href,
    page_path: window.location.pathname,
    page_title: document.title,
  });
}

export function trackEvent(name: string, params?: Record<string, unknown>) {
  window.gtag?.("event", name, params);
}

/** Google Ads lead conversion, with enhanced conversions (Google hashes the email/phone before sending). */
export function trackAdsLead(email?: string, phone?: string) {
  if (!GOOGLE_ADS_ID || !GOOGLE_ADS_LEAD_LABEL || !window.gtag) return;
  const userData: Record<string, string> = {};
  if (email) userData.email = email.trim().toLowerCase();
  const digits = phone?.replace(/[^\d+]/g, "");
  if (digits && digits.startsWith("+") && digits.length > 8) userData.phone_number = digits;
  if (Object.keys(userData).length) window.gtag("set", "user_data", userData);
  window.gtag("event", "conversion", { send_to: `${GOOGLE_ADS_ID}/${GOOGLE_ADS_LEAD_LABEL}` });
}
