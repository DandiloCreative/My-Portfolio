// Metricool web analytics (shows website visits next to your social media stats in Metricool).
// Follows the same cookie rules as the Meta Pixel: visitors in the UK and Europe only after "Accept".
import { onConsentChange, trackingAllowed } from "./consent";

const METRICOOL_HASH = "d9091b267494e37f2116d32be417648c";
const SCRIPT_URL = "https://tracker.metricool.com/resources/be.js";

declare global {
  interface Window {
    beTracker?: { t: (options: { hash: string }) => void };
  }
}

let loading = false;
let watching = false;
let lastTracked = "";

function load() {
  if (loading) return;
  loading = true;
  const script = document.createElement("script");
  script.async = true;
  script.src = SCRIPT_URL;
  script.onload = () => trackMetricoolPageView();
  script.onerror = () => {
    loading = false;
  };
  document.head.appendChild(script);
}

/** Records the current page. Called on load and after every page change. */
export function trackMetricoolPageView() {
  if (!window.beTracker || !trackingAllowed()) return;
  const page = window.location.pathname;
  if (page === lastTracked) return;
  lastTracked = page;
  window.beTracker.t({ hash: METRICOOL_HASH });
}

export function initMetricool() {
  if (typeof window === "undefined") return;
  if (trackingAllowed()) load();
  if (watching) return;
  watching = true;
  onConsentChange((choice) => {
    if (choice === "granted") load();
  });
}
