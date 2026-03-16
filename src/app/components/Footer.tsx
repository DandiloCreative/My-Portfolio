import { Facebook, Twitter, Instagram, Linkedin, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import brandLogo from "../../assets/Dandilo-creative-logo.png";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

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
                className="h-12 md:h-14 w-auto drop-shadow-[0_20px_25px_rgba(124,58,237,0.3)] mb-2"
                animate={{ rotateY: [0, -15, 15, 0], rotateX: [0, 10, -10, 0], y: [0, -5, 5, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                style={{ transformStyle: "preserve-3d" }}
              />
            </div>
            <p className="text-zinc-300 font-light leading-relaxed max-w-sm mb-6">
              Engineering exceptional, high-bandwidth web experiences across premier content architectures.
            </p>
            <div className="flex gap-3">
              <a href="https://web.facebook.com/profile.php?id=61576876557950" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-violet-500/20 hover:border-violet-500/50 transition-all duration-300">
                <Facebook size={18} />
              </a>
              {[Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-violet-500/20 hover:border-violet-500/50 transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
              <a
                href="https://api.whatsapp.com/send/?phone=%2B12246200930&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-emerald-400 hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>
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
              <li className="hover:text-white transition-colors cursor-pointer">Shopify Premium</li>
              <li className="hover:text-white transition-colors cursor-pointer">Wix Studio Native</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide">Initialize</h4>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/5">
              <p className="text-zinc-400 text-sm mb-4 font-light">Ready to deploy your next generation web presence?</p>
              <div className="flex flex-wrap gap-3">
                <a href="mailto:dandilodigital@gmail.com" className="inline-block text-sm font-semibold text-white uppercase tracking-wider bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-colors">Email Us</a>
                <a href="https://api.whatsapp.com/send/?phone=%2B12246200930&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="inline-block text-sm font-semibold text-white uppercase tracking-wider bg-emerald-600/20 hover:bg-emerald-600/40 px-4 py-2 rounded-full transition-colors">WhatsApp</a>
              </div>
              <a href="https://api.whatsapp.com/send/?phone=%2B12246200930&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="inline-block text-sm font-semibold text-white uppercase tracking-wider bg-violet-600/20 hover:bg-violet-600/40 px-4 py-2 rounded-full transition-colors mt-4">Start Project</a>
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