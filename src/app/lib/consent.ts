// Cookie consent (GDPR / UK GDPR) and Google Consent Mode v2.
//
// - Google: visitors in the EEA, UK and Switzerland start with tracking "denied" (Google works out
//   their location itself). Everyone else starts with it "granted".
// - Meta Pixel and Microsoft Clarity don't know the visitor's location, so we use the browser's
//   time zone: visitors in Europe aren't tracked until they click "Accept".
// - The banner is shown to visitors in Europe. Anyone can reopen it with the footer's "Cookie settings".

export type ConsentChoice = "granted" | "denied";

const STORAGE_KEY = "dd-cookie-consent";
const OPEN_EVENT = "dd-open-cookie-settings";
const CHANGE_EVENT = "dd-consent-change";

/** EEA countries plus the UK and Switzerland (ISO codes, as Google expects). */
export const CONSENT_REGIONS = [
  "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE", "IT", "LV",
  "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE", "IS", "LI", "NO", "GB", "CH",
];

export function getConsent(): ConsentChoice | null {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

/** True when the visitor's time zone is in Europe, so we ask before tracking. */
export function isEuropeanVisitor(): boolean {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    return tz.startsWith("Europe/") || tz === "Atlantic/Reykjavik" || tz === "Atlantic/Canary" || tz === "Atlantic/Madeira";
  } catch {
    return false;
  }
}

/** Whether non-Google tracking (Meta Pixel, Clarity) may run right now. */
export function trackingAllowed(): boolean {
  const choice = getConsent();
  if (choice) return choice === "granted";
  return !isEuropeanVisitor();
}

export function setConsent(choice: ConsentChoice) {
  try {
    localStorage.setItem(STORAGE_KEY, choice);
  } catch {
    // Storage blocked: the choice still applies for this visit
  }
  window.dispatchEvent(new CustomEvent<ConsentChoice>(CHANGE_EVENT, { detail: choice }));
}

export function onConsentChange(handler: (choice: ConsentChoice) => void) {
  const listener = (e: Event) => handler((e as CustomEvent<ConsentChoice>).detail);
  window.addEventListener(CHANGE_EVENT, listener);
  return () => window.removeEventListener(CHANGE_EVENT, listener);
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

export function onOpenCookieSettings(handler: () => void) {
  window.addEventListener(OPEN_EVENT, handler);
  return () => window.removeEventListener(OPEN_EVENT, handler);
}

/** The four Consent Mode v2 signals, all set the same way. */
export function googleConsentState(choice: ConsentChoice) {
  return {
    ad_storage: choice,
    ad_user_data: choice,
    ad_personalization: choice,
    analytics_storage: choice,
  };
}
