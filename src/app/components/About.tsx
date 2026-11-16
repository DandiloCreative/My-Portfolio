import { memo } from "react";
import { motion } from "motion/react";
import { ExternalLink, Code2, Sparkles, Layers, ShoppingBag, LayoutTemplate, RefreshCw } from "lucide-react";

const FIVERR_URL = "https://www.fiverr.com/dandilodigitals";

const builds = [
  { icon: Code2, title: "Custom websites", text: "Designed around your brand and your customers, not a template everyone else uses." },
  { icon: Sparkles, title: "AI-powered features", text: "Chat assistants that answer questions and book appointments 24/7, smart lead forms and automated follow-ups." },
  { icon: Layers, title: "Full-stack web apps", text: "React and Next.js frontends, NestJS backends and databases, with admin dashboards you control." },
  { icon: ShoppingBag, title: "Online stores", text: "Shopify and WooCommerce stores that are easy to manage." },
  { icon: LayoutTemplate, title: "Platform websites", text: "WordPress, Wix Studio and Squarespace sites you can update yourself." },
  { icon: RefreshCw, title: "Website redesigns", text: "Outdated sites turned into modern ones without losing your Google rankings." },
];

const steps = [
  { title: "Plan", text: "A call about your goals, customers and must-have features, then a written plan with pages, features and a timeline." },
  { title: "Design", text: "You see and approve a design draft before any code is written, so there are no surprises." },
  { title: "Build", text: "Clean, mobile-first code, set up for speed, security and Google search from day one." },
  { title: "Test", text: "Every page, form and feature checked on phones, tablets and desktops before you see the final version." },
  { title: "Review", text: "You check everything and ask for changes. We fine-tune until it's right." },
  { title: "Launch & support", text: "We launch, connect your domain and stay available for updates and fixes." },
];

const reasons = [
  "Clear communication and regular progress updates",
  "You own your website and everything we build",
  "Honest advice: what you need, and what you don't",
  "Built to bring in enquiries, not just to look nice",
];

const fadeUp = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-20px" } };

export const About = memo(function About() {
  return (
    <section id="about" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div className="text-center mb-16" {...fadeUp}>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 font-semibold tracking-wider uppercase text-sm mb-4 block">
            About us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">About Dandilo Digitals</h2>
          <p className="text-zinc-300 max-w-3xl mx-auto text-lg">
            We build websites that connect, convert and grow. Dandilo Digitals is a web design and development agency for small
            businesses. We create custom websites and web apps that look professional, load fast and turn visitors into customers.
          </p>
        </motion.div>

        <h3 className="text-2xl font-bold text-white mb-8 text-center">What we build</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {builds.map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              className="p-7 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-violet-500/30 transition-colors"
              {...fadeUp}
              transition={{ delay: (i % 3) * 0.08 }}
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-5">
                <Icon className={i % 2 ? "text-cyan-400" : "text-violet-400"} size={24} aria-hidden="true" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{title}</h4>
              <p className="text-zinc-400 font-light">{text}</p>
            </motion.div>
          ))}
        </div>

        <h3 className="text-2xl font-bold text-white mb-8 text-center">How we deliver quality work</h3>
        <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 list-none p-0">
          {steps.map((s, i) => (
            <motion.li key={s.title} className="p-7 rounded-3xl bg-white/[0.03] border border-white/10" {...fadeUp} transition={{ delay: (i % 3) * 0.08 }}>
              <div className="flex items-center gap-4 mb-4">
                <span className="w-11 h-11 shrink-0 rounded-full bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center font-bold text-white">
                  {i + 1}
                </span>
                <h4 className="text-xl font-bold text-white">{s.title}</h4>
              </div>
              <p className="text-zinc-400 font-light">{s.text}</p>
            </motion.li>
          ))}
        </ol>

        <motion.div className="max-w-3xl mx-auto p-8 md:p-10 rounded-3xl bg-white/[0.03] border border-violet-500/20 text-center" {...fadeUp}>
          <h3 className="text-2xl font-bold text-white mb-6">Why clients work with us</h3>
          <ul className="grid sm:grid-cols-2 gap-4 text-left mb-10 list-none p-0">
            {reasons.map((r) => (
              <li key={r} className="flex gap-3 text-zinc-300">
                <span className="text-cyan-400 font-bold" aria-hidden="true">✓</span>
                {r}
              </li>
            ))}
          </ul>
          <a
            href={FIVERR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white rounded-full px-8 py-4 font-bold uppercase tracking-wide shadow-[0_0_20px_rgba(124,58,237,0.4)] transition-all no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
          >
            Hire Us on Fiverr
            <ExternalLink className="w-5 h-5" aria-hidden="true" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
});
