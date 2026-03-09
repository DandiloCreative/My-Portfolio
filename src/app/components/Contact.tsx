import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card } from "./ui/card";
import { useState } from "react";
import { motion } from "motion/react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    platform: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", platform: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 bg-zinc-950 relative overflow-hidden">
      {/* Background glowing orbs matching Hero */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiIC8+CjxwYXRoIGQ9Ik0wIDBoNHY0SDB6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiAvPgo8L3N2Zz4=')] opacity-50 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 will-change-transform"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 font-semibold tracking-wider uppercase text-sm mb-4 block">Connect</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Initiate Project</h2>
          <p className="text-lg md:text-xl text-zinc-200 max-w-2xl mx-auto font-light leading-relaxed">
            Ready to architect your vision? Let's discuss requirements and scale.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="will-change-transform"
          >
            <Card className="p-8 md:p-10 bg-white/[0.02] border border-white/10 backdrop-blur-2xl rounded-[2rem] shadow-[0_0_50px_rgba(0,0,0,0.5)]">
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="will-change-transform">
                  <label className="block text-sm font-medium mb-2 text-zinc-300">Name</label>
                  <Input
                    type="text"
                    placeholder="E.g. Sarah Connor"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-white/5 border-white/10 text-white placeholder-zinc-600 focus:border-violet-500/50 focus:ring-violet-500/30 rounded-xl h-12"
                  />
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="will-change-transform">
                  <label className="block text-sm font-medium mb-2 text-zinc-300">Email Address</label>
                  <Input
                    type="email"
                    placeholder="sarah@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-white/5 border-white/10 text-white placeholder-zinc-600 focus:border-violet-500/50 focus:ring-violet-500/30 rounded-xl h-12"
                  />
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="will-change-transform">
                  <label className="block text-sm font-medium mb-2 text-zinc-300">Target Ecosystem</label>
                  <select
                    className="w-full px-4 h-12 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500/30 focus:border-violet-500/50 text-white placeholder-zinc-600 appearance-none"
                    value={formData.platform}
                    onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                    required
                    style={{ WebkitAppearance: 'none', MozAppearance: 'none' }}
                  >
                    <option value="" disabled className="text-zinc-500 bg-zinc-900">Select an architecture</option>
                    <option value="wordpress" className="text-white bg-zinc-900">WordPress</option>
                    <option value="frontend" className="text-white bg-zinc-900">Frontend Development</option>
                    <option value="squarespace" className="text-white bg-zinc-900">Squarespace</option>
                    <option value="wix" className="text-white bg-zinc-900">Wix Studio</option>
                    <option value="not-sure" className="text-white bg-zinc-900">Needs Assessment</option>
                  </select>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="will-change-transform">
                  <label className="block text-sm font-medium mb-2 text-zinc-300">Project Brief</label>
                  <Textarea
                    placeholder="Describe your vision, scale, and timeline..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="bg-white/5 border-white/10 text-white placeholder-zinc-600 focus:border-violet-500/50 focus:ring-violet-500/30 rounded-xl resize-none p-4"
                  />
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="pt-2 will-change-transform">
                  <Button type="submit" className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white rounded-xl h-14 text-lg font-medium shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] transition-all border-0 flex items-center justify-center gap-2">
                    Initialize Project <ArrowRight className="w-5 h-5" />
                  </Button>
                </motion.div>
              </form>
            </Card>
          </motion.div>

          <motion.div
            className="space-y-10 will-change-transform"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h3 className="text-3xl font-bold mb-8 text-white tracking-tight">Direct Comms</h3>
              <div className="space-y-8">
                <motion.div
                  className="flex items-center gap-6 group cursor-pointer will-change-transform"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-violet-500/20 group-hover:border-violet-500/50 transition-colors">
                    <Mail className="w-6 h-6 text-violet-400" />
                  </div>
                  <div>
                    <p className="text-zinc-500 font-light text-sm mb-1 uppercase tracking-wider">Email Inquiry</p>
                    <a href="mailto:hello@dandilocreative.com" className="text-xl text-zinc-200 font-medium group-hover:text-white transition-colors">
                      hello@dandilocreative.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-6 group cursor-pointer will-change-transform"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-cyan-500/20 group-hover:border-cyan-500/50 transition-colors">
                    <Phone className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-zinc-500 font-light text-sm mb-1 uppercase tracking-wider">Direct Line</p>
                    <a href="tel:+1234567890" className="text-xl text-zinc-200 font-medium group-hover:text-white transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-6 group will-change-transform"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-indigo-500/20 group-hover:border-indigo-500/50 transition-colors">
                    <MapPin className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-zinc-500 font-light text-sm mb-1 uppercase tracking-wider">Operating Base</p>
                    <p className="text-xl text-zinc-200 font-medium transition-colors">
                      Global Remote Distribution
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="will-change-transform"
            >
              <Card className="p-8 bg-gradient-to-br from-violet-600/10 to-transparent border-white/10 rounded-3xl relative overflow-hidden backdrop-blur-xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/20 blur-3xl rounded-full"></div>
                <h4 className="text-2xl font-bold mb-4 text-white tracking-tight relative z-10">Dandilo Advantage</h4>
                <ul className="space-y-3 text-zinc-400 font-light relative z-10 text-lg">
                  <li className="flex items-center gap-3"><span className="text-violet-400">✦</span> 10+ Years Full-Stack Expertise</li>
                  <li className="flex items-center gap-3"><span className="text-violet-400">✦</span> Highly Optimized Architectures</li>
                  <li className="flex items-center gap-3"><span className="text-violet-400">✦</span> Dedicated Support Pipelines</li>
                  <li className="flex items-center gap-3"><span className="text-violet-400">✦</span> Elite Performance Metrics</li>
                </ul>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}