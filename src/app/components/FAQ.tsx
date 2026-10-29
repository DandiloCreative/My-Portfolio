import { ChevronDown } from "lucide-react";

// Keep this text in sync with the FAQPage structured data in index.html
// (Google requires the structured data to match what's visible on the page).
const faqs = [
  {
    q: "What kind of websites do you build?",
    a: "We design and build business websites, online stores, landing pages and custom web apps on WordPress, Shopify, Wix Studio and custom code (React and Next.js).",
  },
  {
    q: "Can you redesign my existing website?",
    a: "Yes. We can redesign your current website with a modern look, clearer messaging and faster loading, while keeping the content and pages that already work for you.",
  },
  {
    q: "What's included in the free website audit?",
    a: "We review your website and show you what's stopping visitors from becoming customers, how to improve your design, mobile experience and speed, and where you're missing chances to get more leads.",
  },
  {
    q: "Which platform is right for my business: WordPress, Shopify or Wix?",
    a: "It depends on what you need. WordPress suits businesses that want flexibility and lots of content, Shopify is best for online stores, and Wix Studio is great if you want a site that's easy to manage yourself. We'll recommend the right fit during your free audit.",
  },
  {
    q: "Do you work with small businesses across the US?",
    a: "Yes. We work remotely with small businesses across the United States, so you can reach us by WhatsApp, email or the contact form wherever you're based.",
  },
  {
    q: "How do I get started?",
    a: "Send us a message through the contact form or on WhatsApp at +1 224-620-0930. Tell us about your business and what you need, and we'll get back to you with next steps.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-16 bg-zinc-950 relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-3xl">
        <div className="text-center mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 font-semibold tracking-wider uppercase text-sm mb-4 block">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
            Web Design Questions, Answered
          </h2>
          <p className="text-lg text-zinc-300 font-light leading-relaxed">
            Common questions small business owners ask before starting a new website or redesign.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl bg-white/5 border border-white/10 open:border-violet-500/40 transition-colors"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-5 md:p-6 text-left text-white font-semibold text-base md:text-lg [&::-webkit-details-marker]:hidden">
                {item.q}
                <ChevronDown className="w-5 h-5 flex-shrink-0 text-violet-400 transition-transform group-open:rotate-180" />
              </summary>
              <p className="px-5 md:px-6 pb-5 md:pb-6 -mt-1 text-zinc-300 font-light leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
