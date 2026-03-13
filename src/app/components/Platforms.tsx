import { memo } from "react";
import { CheckCircle2 } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";

const platforms = [
  {
    name: "WordPress",
    color: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    description: "The world's most popular CMS, engineered for high-performance and scale.",
    features: [
      "Headless architecture",
      "Dynamic data binding",
      "E-commerce pipelines",
      "Advanced SEO tactics"
    ]
  },
  {
    name: "Frontend Developer",
    color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    description: "Modern web applications built with cutting-edge frameworks like React, Vue, and Next.js.",
    features: [
      "Responsive UI/UX",
      "Interactive Animations",
      "API Integrations",
      "Performance Optimization"
    ]
  },
  {
    name: "Shopify",
    color: "bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/20",
    description: "Striking templates supercharged with custom code for a luxury feel.",
    features: [
      "Bespoke layout injected",
      "Micro-animations",
      "Interactive portfolios",
      "Custom WebGL rendering"
    ]
  },
  {
    name: "Wix Studio",
    color: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    description: "Ultra-modern scalable sites crafted with code-first Wix APIs.",
    features: [
      "Velo custom logic",
      "Database architecture",
      "Animated dynamic panels",
      "Third-party deep integrations"
    ]
  }
];

export const Platforms = memo(function Platforms() {
  return (
    <section id="platforms" className="py-16 bg-black relative">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[150px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none translate-x-1/3" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 will-change-transform"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 font-semibold tracking-wider uppercase text-sm mb-4 block">Ecosystem</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Platforms We Master</h2>
          <p className="text-lg md:text-xl text-zinc-200 max-w-2xl mx-auto font-light leading-relaxed">
            Enterprise-grade engineering across all dominant content architectures.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {platforms.map((platform, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut"
              }}
              className="group will-change-transform"
            >
              <Card className="p-8 h-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-md rounded-3xl relative overflow-hidden flex flex-col">
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-20px" }}
                    transition={{ delay: index * 0.1 + 0.2, type: "spring", stiffness: 200 }}
                    className="will-change-transform"
                  >
                    <Badge className={`px-4 py-1.5 text-sm rounded-full border ${platform.color} font-medium tracking-wide`}>
                      {platform.name}
                    </Badge>
                  </motion.div>
                </div>
                <p className="text-zinc-200 font-light mb-8 text-lg leading-relaxed relative z-10">{platform.description}</p>
                <ul className="space-y-4 relative z-10 mt-auto">
                  {platform.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-center gap-3 will-change-transform"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-20px" }}
                      transition={{ delay: index * 0.1 + 0.3 + idx * 0.1 }}
                    >
                      <div className="w-6 h-6 rounded-full bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                      </div>
                      <span className="text-zinc-400 font-light">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});