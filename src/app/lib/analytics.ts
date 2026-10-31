// Google Analytics 4.
// Paste your Measurement ID below (Google Analytics → Admin → Data streams → your web stream,
// it looks like "G-XXXXXXXXXX"). While it's empty, nothing loads and every call does nothing.
export const GA_MEASUREMENT_ID = "";

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
  window.gtag("js", new Date());
  // We send page views ourselves on every page change (single-page app)
  window.gtag("config", GA_MEASUREMENT_ID, { send_page_view: false });

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
