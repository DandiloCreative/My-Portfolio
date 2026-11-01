import { useEffect, useState } from "react";
import { getConsent, isEuropeanVisitor, onOpenCookieSettings, setConsent, type ConsentChoice } from "../lib/consent";

/** Cookie notice for visitors in Europe (GDPR / UK GDPR). Reopened from the footer's "Cookie settings". */
export function CookieBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!getConsent() && isEuropeanVisitor()) setOpen(true);
    return onOpenCookieSettings(() => setOpen(true));
  }, []);

  if (!open) return null;

  const choose = (choice: ConsentChoice) => {
    setConsent(choice);
    setOpen(false);
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie preferences"
      className="fixed z-[110] left-4 right-4 bottom-4 md:left-6 md:right-auto md:max-w-md"
      style={{ marginBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <div className="rounded-2xl border border-white/15 bg-zinc-950/90 backdrop-blur-xl p-5 shadow-[0_8px_32px_rgba(0,0,0,0.45)]">
        <p className="text-white font-semibold mb-1">Cookies</p>
        <p className="text-zinc-300 text-sm leading-relaxed mb-4">
          We use cookies to understand how visitors use our site and to measure our ads. You can accept or
          reject them. See our{" "}
          <a href="/privacy" className="text-violet-400 underline underline-offset-2 hover:text-violet-300">
            Privacy Policy
          </a>
          .
        </p>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => choose("denied")}
            className="flex-1 rounded-full border border-white/20 px-4 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
          >
            Reject
          </button>
          <button
            type="button"
            onClick={() => choose("granted")}
            className="cookie-accept flex-1 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 px-4 py-2.5 text-sm font-semibold text-white transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
