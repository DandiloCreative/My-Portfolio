// Microsoft Clarity: free session recordings and heatmaps.
// Paste your Project ID below (clarity.microsoft.com → your project → Settings → Overview,
// it looks like "abcd1234ef"). While it's empty, nothing loads.
import { onConsentChange, trackingAllowed } from "./consent";

export const CLARITY_PROJECT_ID = "";

declare global {
  interface Window {
    clarity?: ((...args: unknown[]) => void) & { q?: unknown[] };
  }
}

let loaded = false;
let watching = false;

function load() {
  if (loaded) return;
  loaded = true;
  window.clarity =
    window.clarity ||
    Object.assign((...args: unknown[]) => {
      (window.clarity!.q = window.clarity!.q || []).push(args);
    }, {});
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.clarity.ms/tag/${CLARITY_PROJECT_ID}`;
  document.head.appendChild(script);
}

export function initClarity() {
  if (!CLARITY_PROJECT_ID || typeof window === "undefined") return;
  if (trackingAllowed()) load();
  if (watching) return;
  watching = true;
  onConsentChange((choice) => {
    if (choice === "granted") load();
    else window.clarity?.("consent", false);
  });
}
