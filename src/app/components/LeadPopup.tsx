import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { LeadForm } from "./LeadForm";

// Enquiry popup shown to visitors a few seconds after they arrive.
// Closing it (X, Escape or tapping outside) hides it for a day; sending the form hides it for good.
// Add ?popup=1 to any page address to see it again after 3 seconds (for testing).
const FORCE = typeof location !== "undefined" && new URLSearchParams(location.search).get("popup") === "1";
const SHOW_AFTER_MS = FORCE ? 3_000 : 12_000;
const DISMISS_KEY = "dd_popup_dismissed_at";
const SENT_KEY = "dd_popup_sent";
const HIDE_FOR_MS = 24 * 60 * 60 * 1000;
// Pages that already are a form (or come after one) don't get the popup
const SKIP_PATHS = ["/contact", "/free-website-audit", "/thank-you", "/privacy", "/terms"];
const IS_BOT = typeof navigator !== "undefined" && /bot|crawler|spider|crawling|lighthouse|inspectiontool/i.test(navigator.userAgent);

function read(key: string) {
  try { return localStorage.getItem(key); } catch { return null; }
}
function write(key: string, value: string) {
  try { localStorage.setItem(key, value); } catch { /* storage blocked: popup may show again next visit */ }
}

function shouldShow() {
  if (FORCE) return true;
  if (IS_BOT || read(SENT_KEY)) return false;
  const dismissedAt = Number(read(DISMISS_KEY) || 0);
  return Date.now() - dismissedAt > HIDE_FOR_MS;
}

export function LeadPopup({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);
  // A tap that started before the popup opened (e.g. while scrolling) must not close it
  const openedAt = useRef(0);
  const downOnBackdrop = useRef(false);
  const skip = SKIP_PATHS.includes(pathname);

  // Start the timer once per visit (not again on every page change)
  useEffect(() => {
    if (!shouldShow()) return;
    const timer = setTimeout(() => {
      if (shouldShow()) setOpen(true);
    }, SHOW_AFTER_MS);
    return () => clearTimeout(timer);
  }, []);

  const close = () => {
    write(DISMISS_KEY, String(Date.now()));
    setOpen(false);
  };

  const visible = open && !skip;

  useEffect(() => {
    if (!visible) return;
    openedAt.current = Date.now();
    lastFocus.current = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
      lastFocus.current?.focus?.();
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onPointerDown={(e) => {
        downOnBackdrop.current = e.target === e.currentTarget && Date.now() - openedAt.current > 800;
      }}
      onClick={(e) => {
        if (downOnBackdrop.current && e.target === e.currentTarget) close();
        downOnBackdrop.current = false;
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="lead-popup-title"
        className="relative w-full max-w-lg max-h-[calc(100dvh-2rem)] overflow-y-auto rounded-3xl border border-white/15 bg-zinc-950 shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
      >
        {/* Close button pinned to the top so it's always reachable */}
        <div className="sticky top-0 z-10 flex justify-end p-3 bg-zinc-950/95 backdrop-blur rounded-t-3xl">
          <button
            ref={closeRef}
            type="button"
            onClick={close}
            aria-label="Close"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
        <div className="px-6 pb-6 -mt-4 md:px-8 md:pb-8">
          <p className="text-violet-400 font-semibold tracking-widest uppercase text-xs mb-2">Free website audit</p>
          <h2 id="lead-popup-title" className="text-2xl md:text-3xl font-bold text-white mb-2">
            Want more customers from your website?
          </h2>
          <p className="text-zinc-400 mb-6">
            Tell us a little about your business and we'll reply with free, honest advice on what to improve.
          </p>
          <LeadForm
            formName="Popup form"
            submitLabel="Get My Free Audit"
            idPrefix="popup"
            variant="popup"
            onSent={() => {
              write(SENT_KEY, "1");
              setOpen(false);
            }}
          />
        </div>
      </div>
    </div>
  );
}
