import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "motion/react";

import logoImg from "figma:asset/logo.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 left-0 right-0 z-50 pointer-events-none"
    >
      <nav className="max-w-5xl mx-auto px-4 pointer-events-auto">
        <div className="flex items-center justify-between bg-black/40 backdrop-blur-2xl border border-white/10 rounded-full px-6 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
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
              className="h-14 w-auto relative z-10 drop-shadow-[0_0_15px_rgba(124,58,237,0.4)]"
              animate={{ y: [0, -2, 2, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="hidden sm:block">
              <span className="text-white font-black text-lg tracking-widest uppercase opacity-90 group-hover:opacity-100 transition-opacity">Dandilo</span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {["home", "services", "platforms", "portfolio"].map((item) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-white hover:text-cyan-400 capitalize transition-colors text-sm font-bold tracking-widest"
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
                className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 border-0 text-white rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all"
              >
                Contact
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-zinc-300 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
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
              className="md:hidden mt-4 pb-6 flex flex-col gap-4 overflow-hidden"
            >
              {["home", "services", "platforms", "portfolio"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-zinc-400 hover:text-white transition-colors text-left text-lg font-medium capitalize"
                >
                  {item}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection("contact")}
                className="w-full mt-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-full py-6 text-lg font-semibold shadow-[0_0_20px_rgba(124,58,237,0.4)]"
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