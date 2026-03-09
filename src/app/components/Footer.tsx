import { Facebook, Twitter, Instagram, Linkedin, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import brandLogo from "figma:asset/logo.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-zinc-950 text-white pt-24 pb-12 relative overflow-hidden border-t border-white/5">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-1">
            <div className="flex flex-col items-start gap-3 mb-6" style={{ perspective: 1000 }}>
              <motion.img
                src={brandLogo}
                alt="Dandilo Creative"
                className="h-[6.5rem] md:h-[7rem] w-auto drop-shadow-[0_20px_25px_rgba(124,58,237,0.3)] mb-2"
                animate={{ rotateY: [0, -15, 15, 0], rotateX: [0, 10, -10, 0], y: [0, -5, 5, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                style={{ transformStyle: "preserve-3d" }}
              />
            </div>
            <p className="text-zinc-300 font-light leading-relaxed max-w-sm mb-6">
              Engineering exceptional, high-bandwidth web experiences across premier content architectures.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-violet-500/20 hover:border-violet-500/50 transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide">Architecture</h4>
            <ul className="space-y-4 font-light">
              {['Home', 'Services', 'Platforms', 'Portfolio'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-zinc-500 hover:text-cyan-400 transition-colors inline-flex items-center gap-1 group">
                    {item}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide">Ecosystems</h4>
            <ul className="space-y-4 text-zinc-500 font-light">
              <li className="hover:text-white transition-colors cursor-pointer">WordPress Core</li>
              <li className="hover:text-white transition-colors cursor-pointer">Frontend Development</li>
              <li className="hover:text-white transition-colors cursor-pointer">Squarespace Premium</li>
              <li className="hover:text-white transition-colors cursor-pointer">Wix Studio Native</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide">Initialize</h4>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/5">
              <p className="text-zinc-400 text-sm mb-4 font-light">Ready to deploy your next generation web presence?</p>
              <a href="#contact" className="inline-block text-sm font-semibold text-white uppercase tracking-wider bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-colors">Start Project</a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between text-zinc-500 text-sm font-light">
          <p>© {currentYear} Dandilo Creative. Global Reach.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Paradigm</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <button onClick={scrollToTop} className="hover:text-white transition-colors">Back to Top ↑</button>
          </div>
        </div>
      </div>
    </footer>
  );
}