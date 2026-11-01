import { Check } from "lucide-react";
import { Toaster } from "sonner";
import { LeadForm } from "./LeadForm";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=%2B12246200930&text=Hi%2C+I%27d+like+a+free+website+audit&type=phone_number&app_absent=0";

const CHECKS = [
  "Design and first impression: does your site look trustworthy?",
  "Mobile experience and page speed",
  "Where visitors drop off and enquiries are lost",
  "Basic SEO: can customers find you on Google?",
  "Platform advice: WordPress, Shopify, Wix Studio or custom",
];

const STEPS = [
  { title: "Send your website", text: "Fill in the short form with your website address." },
  { title: "We review it", text: "We look at your design, mobile experience, speed, SEO and how easy it is to contact you." },
  { title: "Get clear fixes", text: "You get practical recommendations by email. Use them yourself, or ask us to help." },
];

const FAQS = [
  { q: "Is the audit really free?", a: "Yes. There's no cost and no obligation. You can use the recommendations yourself or with any developer." },
  { q: "What if I don't have a website yet?", a: "Send the form anyway and tell us about your business. We'll suggest the right platform and what your first site needs." },
  { q: "Where are your clients based?", a: "We work remotely with small businesses in the United States, Canada, the UK, Australia, Europe and beyond." },
  { q: "Which platforms do you work with?", a: "WordPress, Shopify, Wix Studio and custom websites built with React and Next.js." },
];

export function AuditLanding() {
  return (
    <>
      <Toaster theme="dark" position="top-center" richColors />
      <section className="relative overflow-hidden bg-zinc-950 pt-32 md:pt-40 pb-16">
        <div className="absolute top-0 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-violet-600/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-indigo-600/20 rounded-full blur-[90px] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-12 relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-6xl">
          <div>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 font-semibold tracking-wider uppercase text-sm mb-4 block">
              Free · No obligation
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
              Get a Free Website Audit for Your Business
            </h1>
            <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed mb-8">
              Find out what's stopping visitors from becoming customers. We'll review your website and send you
              clear, practical fixes to get more enquiries and sales.
            </p>
            <h2 className="text-white font-semibold text-lg mb-4">What we check</h2>
            <ul className="space-y-3">
              {CHECKS.map((c) => (
                <li key={c} className="flex gap-3 text-zinc-300">
                  <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-cyan-400" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          <div id="audit-form" className="rounded-[2rem] bg-white/[0.03] border border-white/10 backdrop-blur-2xl p-6 md:p-8 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <h2 className="text-2xl font-bold text-white mb-1">Request your free audit</h2>
            <p className="text-zinc-400 text-sm mb-6">Takes less than a minute.</p>
            <LeadForm formName="Free audit (ads page)" submitLabel="Get My Free Audit" idPrefix="audit" variant="audit" />
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 py-16 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-12 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-10 text-center">How it works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {STEPS.map((s, i) => (
              <div key={s.title} className="rounded-3xl bg-white/5 border border-white/10 p-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold flex items-center justify-center mb-4">
                  {i + 1}
                </div>
                <h3 className="text-white font-semibold text-xl mb-2">{s.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 py-16 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-12 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-8 text-center">Questions</h2>
          <div className="space-y-4">
            {FAQS.map((f) => (
              <details key={f.q} className="group rounded-2xl bg-white/5 border border-white/10 p-5">
                <summary className="cursor-pointer list-none text-white font-semibold flex justify-between gap-4">
                  {f.q}
                  <span className="text-violet-400 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="text-zinc-400 mt-3 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-zinc-300 mb-5">Prefer to chat? Send us your website on WhatsApp.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="#audit-form"
                className="rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 px-7 py-3 font-bold uppercase tracking-wide text-sm text-white"
              >
                Get My Free Audit
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-violet-400/50 hover:border-white/70 hover:bg-white/10 px-7 py-3 font-bold uppercase tracking-wide text-sm"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400">WhatsApp +1 224-620-0930</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
