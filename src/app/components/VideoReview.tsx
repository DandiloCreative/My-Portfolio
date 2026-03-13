import { memo } from "react";
import { Play, Eye, CheckCircle, TrendingUp, Shield } from "lucide-react";
import { Card } from "./ui/card";
import { motion } from "motion/react";

const auditPoints = [
    { icon: Eye, title: "Visual Audit", description: "Reviewing design consistency, typography, and visual hierarchy" },
    { icon: TrendingUp, title: "Performance Check", description: "Analyzing load times, Core Web Vitals, and optimization" },
    { icon: CheckCircle, title: "UX Analysis", description: "Evaluating user flow, navigation, and conversion paths" },
    { icon: Shield, title: "Security Review", description: "Checking SSL, headers, and security best practices" }
];

export const VideoReview = memo(function VideoReview() {
    return (
        <section id="video-review" className="py-20 bg-zinc-950 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-violet-950/20 via-transparent to-cyan-950/20"></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-20px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 will-change-transform"
                >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 font-semibold tracking-wider uppercase text-sm mb-4 block">See It In Action</span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Example Website Review</h2>
                    <p className="text-lg md:text-xl text-zinc-200 max-w-2xl mx-auto font-light">
                        Watch how I audit a website and identify opportunities for improvement. This builds instant trust with my clients.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {/* Video Player Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-20px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative mb-16 will-change-transform"
                    >
                        <div className="relative rounded-3xl overflow-hidden bg-zinc-900 border border-white/10 shadow-2xl shadow-violet-500/10">
                            {/* Video Thumbnail Background */}
                            <div className="aspect-video relative bg-gradient-to-br from-violet-900/40 to-cyan-900/40 flex items-center justify-center">
                                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOCAxOC04LjA1OSAxOC0xOC04LjA1OS0xOC0xOC0xOHptMCAzMmMtNy43MzIgMC0xNC02LjI2OC0xNC0xNHM2LjI2OC0xNCAxNC0xNCAxNCA2LjI2OCAxNCAxNC02LjI2OCAxNC0xNCAxNHoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-30"></div>

                                {/* Play Button */}
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="relative z-10 w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group cursor-pointer"
                                >
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 opacity-80 group-hover:opacity-100 transition-opacity"></div>
                                    <Play className="w-10 h-10 text-white fill-white ml-1" />
                                </motion.button>

                                {/* Duration Badge */}
                                <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-sm text-white text-sm font-medium">
                                    1:00
                                </div>
                            </div>
                        </div>

                        {/* Video Title Overlay */}
                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-zinc-900/90 backdrop-blur-sm border border-white/10">
                            <p className="text-white text-sm font-medium whitespace-nowrap">Complete Website Audit Demo</p>
                        </div>
                    </motion.div>

                    {/* Audit Process Cards */}
                    <div className="grid md:grid-cols-2 gap-4">
                        {auditPoints.map((point, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-20px" }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.3 + index * 0.1,
                                    ease: "easeOut"
                                }}
                                className="will-change-transform"
                            >
                                <Card className="p-5 bg-white/5 border-white/10 hover:bg-white/10 hover:border-violet-500/30 transition-all duration-300 backdrop-blur-xl rounded-2xl">
                                    <div className="flex items-start gap-4">
                                        <div className="p-2.5 rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 border border-white/10">
                                            <point.icon className="w-5 h-5 text-violet-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-semibold mb-1">{point.title}</h3>
                                            <p className="text-zinc-400 text-sm leading-relaxed">{point.description}</p>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-20px" }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className="text-center mt-12 will-change-transform"
                    >
                        <p className="text-zinc-300 mb-4">Want a similar detailed review of your website?</p>
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-medium hover:from-violet-500 hover:to-cyan-500 transition-all duration-300 shadow-lg shadow-violet-500/25"
                        >
                            Get Your Free Website Audit
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
});
