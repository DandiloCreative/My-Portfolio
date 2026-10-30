// Meta (Facebook/Instagram) Pixel.
// Paste your Pixel ID below (Meta Events Manager → Data sources → your pixel → ID).
// While it's empty, nothing loads and every call below does nothing.
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

  window.fbq("init", META_PIXEL_ID);
  trackContactClicks();
}

/** Call on every page change (the site is a single-page app, so this isn't automatic). */
export function trackPageView() {
  window.fbq?.("track", "PageView");
}

export function trackLead() {
  window.fbq?.("track", "Lead");
}

/** Count clicks on WhatsApp and email links as "Contact", wherever they are on the site. */
function trackContactClicks() {
  document.addEventListener(
    "click",
    (e) => {
      const link = (e.target as HTMLElement | null)?.closest?.("a");
      const href = link?.getAttribute("href") || "";
      if (/whatsapp\.com|wa\.me/i.test(href)) {
        window.fbq?.("track", "Contact", { content_name: "WhatsApp" });
      } else if (href.startsWith("mailto:")) {
        window.fbq?.("track", "Contact", { content_name: "Email" });
      }
    },
    { capture: true }
  );
}
