import { motion } from "motion/react";
import { Shield, Lock, CheckCircle, Smartphone, Globe, Zap } from "lucide-react";

export function SecuritySection() {
    return (
        <section id="security" className="py-24 bg-zinc-950 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-20px" }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6 font-medium text-emerald-400 text-sm">
                        <Lock size={14} /> Security First
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Built for Absolute Trust</h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
                        We implement enterprise-grade security protocols in every project, ensuring your
                        data and your users' privacy are protected by the latest encryption standards.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: <Shield className="text-emerald-400" />,
                            title: "End-to-End Encryption",
                            desc: "All data transmission is secured via 256-bit SSL/TLS encryption protocols."
                        },
                        {
                            icon: <Smartphone className="text-cyan-400" />,
                            title: "Mobile Privacy",
                            desc: "Secure mobile architectures that prevent data leakage and unauthorized access."
                        },
                        {
                            icon: <Zap className="text-amber-400" />,
                            title: "Brute Force Protection",
                            desc: "Intelligent firewall and rate-limiting to stop automated attacks before they start."
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-emerald-500/30 transition-all group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, margin: "-20px" }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                            <p className="text-zinc-400 font-light">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Security Badge Wall */}
                <motion.div
                    className="mt-20 pt-12 border-t border-white/5 flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-700"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.5 }}
                    viewport={{ once: false }}
                >
                    <div className="flex items-center gap-2 text-white font-bold tracking-tighter">
                        <CheckCircle size={20} className="text-emerald-500" /> ISO 27001 COMPLIANT
                    </div>
                    <div className="flex items-center gap-2 text-white font-bold tracking-tighter">
                        <Globe size={20} className="text-blue-500" /> GDPR READY
                    </div>
                    <div className="flex items-center gap-2 text-white font-bold tracking-tighter">
                        <Shield size={20} className="text-cyan-500" /> SOC2 TYPE II
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
