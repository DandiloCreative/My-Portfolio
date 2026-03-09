import { Code, Palette, Rocket, Users } from "lucide-react";
import { Card } from "./ui/card";
import { motion } from "motion/react";

const services = [
  {
    icon: <Code className="w-10 h-10 text-violet-400" />,
    title: "Custom Development",
    description: "Tailored solutions built to match your unique business needs and goals with robust architecture."
  },
  {
    icon: <Palette className="w-10 h-10 text-cyan-400" />,
    title: "Design & Branding",
    description: "Eye-catching designs and immersive 3D/glassmorphic aesthetics that capture your audience."
  },
  {
    icon: <Rocket className="w-10 h-10 text-indigo-400" />,
    title: "Performance Optimization",
    description: "Lightning-fast websites optimized for speed, SEO, and flawless user experience."
  },
  {
    icon: <Users className="w-10 h-10 text-fuchsia-400" />,
    title: "Ongoing Support",
    description: "Continuous maintenance and agile support to keep your scaling website running smoothly."
  }
];

export function Services() {
  return (
    <section id="services" className="py-16 bg-zinc-950 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 will-change-transform"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 font-semibold tracking-wider uppercase text-sm mb-4 block">Capabilities</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Our Services</h2>
          <p className="text-lg md:text-xl text-zinc-200 max-w-2xl mx-auto font-light">
            Comprehensive web solutions to help your business thrive online in the modern digital era.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group will-change-transform"
            >
              <Card className="p-8 h-full bg-white/5 border-white/10 hover:bg-white/10 hover:border-violet-500/30 transition-all duration-500 backdrop-blur-xl rounded-[2rem] overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-violet-500/20 to-cyan-500/20 blur-3xl rounded-full group-hover:opacity-100 opacity-0 transition-opacity duration-500"></div>
                <motion.div
                  className="mb-6 p-4 rounded-2xl bg-white/5 inline-block border border-white/5 group-hover:border-white/20 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-2xl font-semibold mb-3 text-white tracking-tight">{service.title}</h3>
                <p className="text-zinc-200 font-light leading-relaxed">{service.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}