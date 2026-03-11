import { memo } from "react";
import { motion } from "motion/react";
import { Search, Gauge, TrendingUp, ArrowRight } from "lucide-react";

const auditPoints = [
    {
        iconName: "search" as const,
        title: "What's stopping visitors from becoming customers",
        desc: "I identify friction points, confusing layouts, and trust gaps that cause visitors to leave without taking action.",
    },
    {
        iconName: "gauge" as const,
        title: "How to improve design and speed",
        desc: "I review your site's visual hierarchy, mobile experience, and load performance — and show you exactly what to fix.",
    },
    {
        iconName: "trending" as const,
        title: "How to generate more leads",
        desc: "I highlight missed conversion opportunities and give you actionable steps to turn more visitors into paying customers.",
    },
];

function AuditIcon({ name }: { name: "search" | "gauge" | "trending" }) {
    if (name === "search") return <Search className="text-violet-400" size={24} />;
    if (name === "gauge") return <Gauge className="text-cyan-400" size={24} />;
    return <TrendingUp className="text-indigo-400" size={24} />;
}

export const SecuritySection = memo(function SecuritySection() {
    return (
        <section id="security" className="py-24 bg-zinc-950 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-20px" }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6 font-medium text-violet-400 text-sm">
                        <Search size={14} /> Free Audit
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Free Website Audit for Business Owners
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
                        I review your website and show you exactly what's holding it back — and how to fix it.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {auditPoints.map((item, i) => (
                        <motion.div
                            key={i}
                            className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-violet-500/30 transition-all group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-20px" }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <AuditIcon name={item.iconName} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                            <p className="text-zinc-400 font-light">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
                <motion.div
                    className="mt-14 flex justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-20px" }}
                    transition={{ delay: 0.3 }}
                >
                    <a
                        href="https://api.whatsapp.com/send/?phone=%2B12246200930&text=Hi%2C+I%27d+like+a+free+website+audit&type=phone_number&app_absent=0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-transparent hover:bg-white/5 border border-violet-400/50 hover:border-cyan-400/70 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400 rounded-lg px-9 py-4 text-base font-bold tracking-wide transition-all uppercase no-underline [&>svg]:text-cyan-400"
                    >
                        Send Me Your Website on WhatsApp <ArrowRight className="w-5 h-5" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
});
