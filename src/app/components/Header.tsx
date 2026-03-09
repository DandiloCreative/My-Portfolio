import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";

import logoImg from "figma:asset/logo.png";

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
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-2 left-0 right-0 z-50 pointer-events-none transition-all duration-300"
    >
      <nav className={`mx-auto px-4 pointer-events-auto transition-all duration-500 ease-in-out ${isScrolled ? "max-w-2xl" : "max-w-5xl"}`}>
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

          <div className="hidden md:block">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => scrollToSection("contact")}
                className={`bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 border-0 text-white rounded-full font-bold uppercase tracking-wider transition-all ${isScrolled ? "px-4 py-1 text-[10px]" : "px-5 py-2 text-xs"}`}
              >
                Contact
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-zinc-300 hover:text-white transition-colors p-2 -mr-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
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
              <Button
                onClick={() => scrollToSection("contact")}
                className="w-full mt-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-full py-6 text-lg font-semibold shadow-[0_0_20px_rgba(124,58,237,0.4)]"
              >
                Get in Touch
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}