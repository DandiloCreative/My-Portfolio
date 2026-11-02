import { Link } from "react-router";
import { ArrowRight, Check } from "lucide-react";
import { pricingFaqs, pricingPackages } from "../content/pricing";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=%2B12246200930&text=Hi%2C+I%27d+like+a+quote+for+a+website&type=phone_number&app_absent=0";

const formatPrice = (n: number) => `$${n.toLocaleString("en-US")}`;

export function Pricing() {
  return (
    <section className="bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-violet-600/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 md:px-12 pt-32 md:pt-40 pb-20 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 font-semibold tracking-wider uppercase text-sm mb-4 block">
            Pricing
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
            Affordable Web Design Pricing for Small Businesses
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
            Clear starting prices, no surprises. Every project gets a fixed quote before work begins, and you own
            your website.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingPackages.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col rounded-[2rem] p-7 md:p-8 border ${
                p.per ? "sm:col-span-2 lg:col-span-1 lg:col-start-2 " : ""
              }${
                p.popular
                  ? "bg-gradient-to-b from-violet-600/20 to-indigo-600/5 border-violet-500/50 shadow-[0_0_40px_rgba(124,58,237,0.25)]"
                  : "bg-white/[0.04] border-white/10"
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-7 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  Most popular
                </span>
              )}
              <h2 className="text-xl font-bold text-white mb-2">{p.name}</h2>
              <p className="text-zinc-400 font-light leading-relaxed mb-5">{p.summary}</p>
              <p className="mb-6">
                <span className="text-zinc-400 text-sm mr-1">from</span>
                <span className="text-4xl font-bold text-white">{formatPrice(p.price)}</span>
                {p.per && <span className="text-zinc-400 ml-1">{p.per}</span>}
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-3 text-zinc-300">
                    <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-cyan-400" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-bold uppercase tracking-wide text-sm transition-colors ${
                  p.popular
                    ? "bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white"
                    : "border border-white/20 text-white hover:bg-white/10"
                }`}
              >
                Get a quote <ArrowRight className="w-4 h-4" />
              </Link>
              {p.link && (
                <Link to={p.link} className="mt-3 text-center text-sm text-violet-400 hover:text-violet-300">
                  Learn more
                </Link>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-zinc-400 text-sm mt-8">
          All prices are starting prices in US dollars. Domain, hosting and platform plans are paid directly to the
          provider.
        </p>

        <div className="mt-16 rounded-[2rem] p-8 md:p-12 bg-gradient-to-br from-violet-600/20 via-indigo-600/10 to-cyan-600/10 border border-white/10 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight mb-4">Not sure which package you need?</h2>
          <p className="text-zinc-300 text-lg font-light max-w-xl mx-auto mb-8">
            Send us your website (or tell us about your business). We'll review it for free and send you a clear,
            fixed quote.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white rounded-full px-8 py-4 font-bold uppercase tracking-wide text-sm"
            >
              Get a free website audit <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-violet-400/50 hover:border-white/70 hover:bg-white/10 px-8 py-4 font-bold uppercase tracking-wide text-sm"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400">Ask on WhatsApp</span>
            </a>
          </div>
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-8 text-center">Pricing questions</h2>
          <div className="space-y-4">
            {pricingFaqs.map((f) => (
              <details key={f.q} className="group rounded-2xl bg-white/5 border border-white/10 p-5">
                <summary className="cursor-pointer list-none text-white font-semibold flex justify-between gap-4">
                  {f.q}
                  <span className="text-violet-400 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="text-zinc-300 mt-3 leading-relaxed font-light">{f.a}</p>
              </details>
            ))}
          </div>
          <p className="text-center text-zinc-400 mt-8">
            Want to know how our prices compare? Read our guide:{" "}
            <Link to="/blog/small-business-website-cost" className="text-violet-400 hover:text-violet-300 underline underline-offset-2">
              How much does a small business website cost?
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
