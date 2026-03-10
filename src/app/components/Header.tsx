import { Menu, X, Facebook } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";

import logoImg from "figma:asset/logo.png";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMenuOpen(false);
    } else if (id === "portfolio") {
      const featured = document.getElementById("featured-work");
      if (featured) {
        const offsetPosition = featured.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        setIsMenuOpen(false);
      }
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-2 left-0 right-0 z-50 pointer-events-none transition-all duration-300"
    >
      <nav className={`mx-auto px-4 pointer-events-auto transition-all duration-500 ease-in-out ${isScrolled ? "max-w-2xl" : "max-w-[95vw] md:max-w-5xl"}`}>
        <div className={`flex items-center justify-between bg-black/40 backdrop-blur-2xl border border-white/10 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-500 ease-in-out ${isScrolled ? "px-4 py-1" : "px-6 py-2"}`}>
          <motion.div
            className="flex items-center gap-2 relative group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={() => scrollToSection("home")}
          >
            <div className="absolute inset-0 bg-violet-600/20 blur-xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <motion.img
              src={logoImg}
              alt="Dandilo Creative"
              className={`w-auto relative z-10 drop-shadow-[0_0_15px_rgba(124,58,237,0.4)] transition-all duration-300 ${isScrolled ? "h-8" : "h-10"}`}
              animate={{ y: [0, -2, 2, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              loading="lazy"
            />
            <div className="hidden sm:block">
              <span className={`text-white font-black tracking-widest uppercase opacity-90 group-hover:opacity-100 transition-opacity ${isScrolled ? "text-sm" : "text-lg"}`}>Dandilo</span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {["home", "services", "platforms", "portfolio"].map((item) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`text-white hover:text-cyan-400 capitalize transition-colors font-bold tracking-widest ${isScrolled ? "text-xs" : "text-sm"}`}
                whileHover={{ y: -1, scale: 1.05 }}
              >
                {item}
              </motion.button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <a
                href="https://web.facebook.com/profile.php?id=61576876557950"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <a
                href="https://api.whatsapp.com/send/?phone=%2B12246200930&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-emerald-400 transition-colors"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="https://api.whatsapp.com/send/?phone=%2B12246200930&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 border-0 text-white rounded-full font-bold uppercase tracking-wider transition-all ${isScrolled ? "px-4 py-1 text-[10px]" : "px-5 py-2 text-xs"}`}
              >
                Contact
              </a>
            </motion.div>
            <div className="ml-2">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <button
              className="text-zinc-300 hover:text-white transition-colors p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 pb-6 flex flex-col gap-4 overflow-hidden rounded-3xl bg-black/60 backdrop-blur-3xl border border-white/10 p-6"
            >
              {["home", "services", "platforms", "portfolio"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-zinc-300 hover:text-white transition-colors text-left py-2 text-xl font-bold tracking-widest capitalize"
                >
                  {item}
                </button>
              ))}
              <div className="flex items-center gap-6 mt-2 mb-4">
                <a
                  href="https://web.facebook.com/profile.php?id=61576876557950"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-300 hover:text-blue-400 transition-colors flex items-center gap-2 text-lg font-bold"
                >
                  <Facebook size={24} /> Facebook
                </a>
                <a
                  href="https://api.whatsapp.com/send/?phone=%2B12246200930&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-300 hover:text-emerald-400 transition-colors flex items-center gap-2 text-lg font-bold"
                >
                  <WhatsAppIcon className="w-6 h-6" /> WhatsApp
                </a>
              </div>
              <a
                href="https://api.whatsapp.com/send/?phone=%2B12246200930&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-full py-4 text-center text-lg font-semibold shadow-[0_0_20px_rgba(124,58,237,0.4)]"
              >
                Get in Touch
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}