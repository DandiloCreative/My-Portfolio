import { Link } from "react-router";
import { ArrowRight, ChevronDown, ChevronRight, Check } from "lucide-react";
import type { ContentPageData } from "../content/types";
import { ROUTE_MAP } from "../routes";

const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=%2B12246200930&text=Hi%2C+I%27d+like+a+free+website+audit&type=phone_number&app_absent=0";

const LINK_LABELS: Record<string, string> = {
  "/portfolio": "Our Portfolio",
  "/contact": "Contact Us",
  "/services": "Services",
  "/blog": "Blog",
};

export function labelFor(path: string) {
  return ROUTE_MAP[path]?.content?.label ?? LINK_LABELS[path] ?? path;
}

function Breadcrumbs({ page }: { page: ContentPageData }) {
  const parent =
    page.kind === "service" ? { path: "/services", label: "Services" } : page.kind === "blog" ? { path: "/blog", label: "Blog" } : null;
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-sm text-zinc-400 mb-8">
      <Link to="/" className="hover:text-white transition-colors">Home</Link>
      {parent && (
        <>
          <ChevronRight className="w-4 h-4" />
          <Link to={parent.path} className="hover:text-white transition-colors">{parent.label}</Link>
        </>
      )}
      <ChevronRight className="w-4 h-4" />
      <span className="text-zinc-300" aria-current="page">{page.label}</span>
    </nav>
  );
}

const PROCESS = [
  { title: "Free audit & call", text: "We look at your current website (if you have one) and learn about your goals." },
  { title: "Plan & design", text: "We map out your pages and design a layout built around getting you more customers." },
  { title: "Build & test", text: "We build your site on the right platform and test it on phones, tablets and desktops." },
  { title: "Launch & handover", text: "We launch your site, set up tracking and show you how to update it yourself." },
];

export function formatDate(iso: string) {
  return new Date(iso + "T12:00:00Z").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
}

export function ContentPage({ page }: { page: ContentPageData }) {
  const isLegal = page.kind === "legal";
  const showProcess = page.kind === "service" || page.kind === "industry";

  return (
    <article className="bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-violet-600/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Header */}
      <header className="relative z-10 container mx-auto px-6 md:px-12 pt-32 md:pt-40 pb-12 max-w-4xl">
        <Breadcrumbs page={page} />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 font-semibold tracking-wider uppercase text-sm mb-4 block">
          {page.eyebrow}
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">{page.h1}</h1>
        {page.date && (
          <p className="text-zinc-400 text-sm mb-6">
            {formatDate(page.date)}{page.readMinutes ? ` · ${page.readMinutes} min read` : ""}
          </p>
        )}
        {page.intro.map((p) => (
          <p key={p} className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed mb-4">{p}</p>
        ))}
        {!isLegal && (
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white rounded-full px-8 py-4 font-bold uppercase tracking-wide text-sm shadow-[0_0_20px_rgba(124,58,237,0.4)]"
            >
              Get a free website audit <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full px-8 py-4 font-bold uppercase tracking-wide text-sm bg-white/10 hover:bg-white/20 border border-white/20 text-white"
            >
              Chat on WhatsApp
            </a>
          </div>
        )}
      </header>

      {/* Body */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 pb-16 max-w-4xl">
        {page.sections.map((section) => (
          <section key={section.heading} className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-5">{section.heading}</h2>
            {section.paragraphs?.map((p) => (
              <p key={p} className="text-zinc-300 font-light leading-relaxed text-lg mb-4">{p}</p>
            ))}
            {section.bullets && (
              <ul className="space-y-3 mt-2">
                {section.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-zinc-300 text-lg font-light leading-relaxed">
                    <span className="mt-1.5 flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" strokeWidth={3} />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        {showProcess && (
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-6">How we work</h2>
            <ol className="grid sm:grid-cols-2 gap-4">
              {PROCESS.map((step, i) => (
                <li key={step.title} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 font-bold text-2xl">0{i + 1}</span>
                  <h3 className="text-white font-semibold text-lg mt-2 mb-1">{step.title}</h3>
                  <p className="text-zinc-400 font-light leading-relaxed">{step.text}</p>
                </li>
              ))}
            </ol>
          </section>
        )}

        {page.faqs && page.faqs.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-6">Frequently asked questions</h2>
            <div className="space-y-4">
              {page.faqs.map((item) => (
                <details key={item.q} className="group rounded-2xl bg-white/5 border border-white/10 open:border-violet-500/40">
                  <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-5 text-left text-white font-semibold text-lg [&::-webkit-details-marker]:hidden">
                    <h3 className="font-semibold text-lg">{item.q}</h3>
                    <ChevronDown className="w-5 h-5 flex-shrink-0 text-violet-400 transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="px-5 pb-5 -mt-1 text-zinc-300 font-light leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          </section>
        )}

        {page.related && page.related.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-6">Related</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {page.related.map((path) => (
                <Link
                  key={path}
                  to={path}
                  className="group flex items-center justify-between gap-3 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-violet-500/40 transition-colors"
                >
                  <span className="text-white font-semibold">{labelFor(path)}</span>
                  <ArrowRight className="w-4 h-4 text-violet-400 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </Link>
              ))}
            </div>
          </section>
        )}

        {!isLegal && (
          <section className="rounded-[2rem] p-8 md:p-12 bg-gradient-to-br from-violet-600/20 via-indigo-600/10 to-cyan-600/10 border border-white/10 text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight mb-4">Get a free website audit</h2>
            <p className="text-zinc-300 text-lg font-light max-w-xl mx-auto mb-8">
              We'll review your website and show you what's holding it back, and how to fix it. No cost, no pressure.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white rounded-full px-8 py-4 font-bold uppercase tracking-wide text-sm"
            >
              Request your audit <ArrowRight className="w-4 h-4" />
            </Link>
          </section>
        )}
      </div>
    </article>
  );
}
