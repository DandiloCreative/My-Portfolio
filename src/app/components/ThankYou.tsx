import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=%2B12246200930&text=Hi%2C+I+just+sent+the+form+on+your+website&type=phone_number&app_absent=0";

export function ThankYou() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 min-h-[80vh] flex items-center pt-32 pb-20">
      <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-violet-600/20 rounded-full blur-[110px] pointer-events-none" />
      <div className="container mx-auto px-4 md:px-12 relative z-10 max-w-2xl text-center">
        <CheckCircle2 className="w-14 h-14 text-cyan-400 mx-auto mb-6" />
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-5">Thanks, we've got your message</h1>
        <p className="text-lg text-zinc-300 font-light leading-relaxed mb-10">
          We'll look at what you sent and reply by email soon. Check your inbox, and your spam folder just in case.
          Want to talk sooner? Message us on WhatsApp.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 px-7 py-3 font-bold uppercase tracking-wide text-sm text-white"
          >
            Chat on WhatsApp
          </a>
          <Link
            to="/portfolio"
            className="rounded-lg border border-violet-400/50 hover:border-white/70 hover:bg-white/10 px-7 py-3 font-bold uppercase tracking-wide text-sm"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400">See Our Work</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
