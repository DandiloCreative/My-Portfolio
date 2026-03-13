import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card } from "./ui/card";
import { useState } from "react";
import { motion } from "motion/react";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    platform: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to mailto as a simple way to "go to" the email for static sites
    const subject = encodeURIComponent(`Project Inquiry: ${formData.platform}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:dandilocreative@gmail.com?subject=${subject}&body=${body}`;

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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Get Your Free Website Review</h2>
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
                    <option value="shopify" className="text-white bg-zinc-900">Shopify</option>
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
                    Get Your Free Website Review <ArrowRight className="w-5 h-5" />
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
                    <a href="mailto:dandilocreative@gmail.com" className="text-xl text-zinc-200 font-medium group-hover:text-white transition-colors">
                      dandilocreative@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-6 group cursor-pointer will-change-transform"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-emerald-500/20 group-hover:border-emerald-500/50 transition-colors">
                    <WhatsAppIcon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-zinc-500 font-light text-sm mb-1 uppercase tracking-wider">WhatsApp</p>
                    <a href="https://api.whatsapp.com/send/?phone=%2B12246200930&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="text-xl text-zinc-200 font-medium group-hover:text-white transition-colors">
                      +1 224-620-0930
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
                  <li className="flex items-center gap-3"><span className="text-violet-400">✦</span> 8+ Years Full-Stack Expertise</li>
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