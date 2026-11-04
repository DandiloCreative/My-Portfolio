// Cloudflare Turnstile: an invisible "are you human?" check on our forms.
// The CRM checks the token with Cloudflare before saving an enquiry.
import { useCallback, useEffect, useRef } from "react";

// Public site key (safe to publish). On localhost we use Cloudflare's always-pass test key.
const SITE_KEY =
  typeof window !== "undefined" && /^(localhost|127\.0\.0\.1)$/.test(window.location.hostname)
    ? "1x00000000000000000000AA"
    : "0x4AAAAAAFzgWU8srwiu33c7";
const SCRIPT_URL = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

type TurnstileApi = {
  render: (el: HTMLElement, options: Record<string, unknown>) => string;
  reset: (id: string) => void;
  remove: (id: string) => void;
};
declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

let scriptPromise: Promise<TurnstileApi> | null = null;
function loadTurnstile() {
  if (window.turnstile) return Promise.resolve(window.turnstile);
  scriptPromise ??= new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = SCRIPT_URL;
    script.async = true;
    script.onload = () => (window.turnstile ? resolve(window.turnstile) : reject(new Error("Turnstile missing")));
    script.onerror = () => {
      scriptPromise = null;
      reject(new Error("Turnstile failed to load"));
    };
    document.head.appendChild(script);
  });
  return scriptPromise;
}

/**
 * Renders the Turnstile check into the returned ref. It stays hidden unless Cloudflare
 * needs the visitor to click. `getToken()` waits (up to 8s) for a token; "" if none.
 */
export function useTurnstile() {
  const ref = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);
  const token = useRef("");
  const waiters = useRef<((t: string) => void)[]>([]);

  useEffect(() => {
    let cancelled = false;
    loadTurnstile()
      .then((ts) => {
        if (cancelled || !ref.current) return;
        widgetId.current = ts.render(ref.current, {
          sitekey: SITE_KEY,
          theme: "dark",
          appearance: "interaction-only",
          callback: (t: string) => {
            token.current = t;
            waiters.current.splice(0).forEach((w) => w(t));
          },
          "expired-callback": () => (token.current = ""),
          "error-callback": () => {
            token.current = "";
          },
        });
      })
      .catch(() => {
        /* blocked by an ad blocker or offline: the email copy of the enquiry still goes through */
      });
    return () => {
      cancelled = true;
      if (widgetId.current && window.turnstile) window.turnstile.remove(widgetId.current);
      widgetId.current = null;
    };
  }, []);

  const getToken = useCallback(
    () =>
      token.current
        ? Promise.resolve(token.current)
        : new Promise<string>((resolve) => {
            waiters.current.push(resolve);
            setTimeout(() => resolve(token.current), 8000);
          }),
    []
  );

  /** Tokens work once, so get a fresh one after each send. */
  const reset = useCallback(() => {
    token.current = "";
    if (widgetId.current && window.turnstile) window.turnstile.reset(widgetId.current);
  }, []);

  return { ref, getToken, reset };
}
