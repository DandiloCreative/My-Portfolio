import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { servicePages, industryPages } from "../routes";

/** Links to every service and industry page (good for visitors and for Google). */
export function ServiceLinks() {
  return (
    <section className="py-16 bg-zinc-950 relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-3 text-center">Explore our web design services</h2>
        <p className="text-zinc-300 text-lg font-light text-center mb-10">Pick a service or industry to see exactly what's included.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {servicePages.map((page) => (
            <Link
              key={page.path}
              to={page.path}
              className="group flex items-center justify-between gap-3 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-violet-500/40 transition-colors"
            >
              <span className="text-white font-semibold">{page.label}</span>
              <ArrowRight className="w-4 h-4 text-violet-400 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </Link>
          ))}
        </div>
        <h3 className="text-xl font-semibold text-white mb-4 text-center">By industry</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {industryPages.map((page) => (
            <Link
              key={page.path}
              to={page.path}
              className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:border-violet-500/40 text-zinc-300 hover:text-white transition-colors"
            >
              {page.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
