import { Menu, X, Facebook } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useMotionValue, useSpring, useTransform } from "motion/react";
import { useNavigate, useLocation } from "react-router";
import { ThemeToggle } from "./ThemeToggle";

import logoImg from "../../assets/dandilo-logo.webp";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const NAV_ITEMS = ["home", "services", "platforms", "portfolio", "reviews", "contact"];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { scrollY } = useScroll();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Shrink progress: 0 = full size, 1 = smallest.
  // Scrolling down shrinks the bar a little at a time, scrolling up grows it back.
  const SHRINK_DISTANCE = 250; // px of scrolling to go from full size to smallest
  const rawProgress = useMotionValue(0);
  const progress = useSpring(rawProgress, { stiffness: 260, damping: 32, mass: 0.6 });

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? latest;
    // Cap each step so sudden page jumps (content loading above) don't snap the bar
    const delta = Math.max(-80, Math.min(80, latest - previous));
    const next = latest <= 10
      ? 0 // always full size at the very top
      : Math.min(1, Math.max(0, rawProgress.get() + delta / SHRINK_DISTANCE));
    rawProgress.set(next);
    setIsScrolled(next > 0.5);
  });

  const navMaxWidth = useTransform(progress, [0, 1], isMobile ? ["95vw", "60vw"] : ["70rem", "60rem"]);
  const pillPaddingY = useTransform(progress, [0, 1], isMobile ? [6, 2] : [8, 4]);
  const pillPaddingX = useTransform(progress, [0, 1], isMobile ? [12, 8] : [24, 16]);
  const logoHeight = useTransform(progress, [0, 1], isMobile ? [32, 22] : [40, 28]);
  const brandFontSize = useTransform(progress, [0, 1], [18, 14]);
  const linkFontSize = useTransform(progress, [0, 1], [14, 12]);
  const controlsScale = useTransform(progress, [0, 1], [1, 0.82]);
  const linkGap = useTransform(progress, [0, 1], [32, 18]);

  const pathFor = (item: string) => (item === "home" ? "/" : `/${item}`);
  const currentPath = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;

  // Real links (good for Google), but handled by the router so the page doesn't reload
  const goTo = (item: string, e?: React.MouseEvent) => {
    e?.preventDefault();
    setIsMenuOpen(false);
    const targetPath = pathFor(item);
    if (currentPath === targetPath) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate(targetPath);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-2 left-0 right-0 z-50 pointer-events-none transition-all duration-300"
    >
      <motion.nav className="mx-auto px-4 pointer-events-auto" style={{ maxWidth: navMaxWidth }}>
        <motion.div
          className="flex items-center justify-between bg-black/40 backdrop-blur-2xl border border-white/10 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
          style={{ paddingTop: pillPaddingY, paddingBottom: pillPaddingY, paddingLeft: pillPaddingX, paddingRight: pillPaddingX }}
        >
          <motion.div
            className="flex items-center gap-2 relative group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={() => goTo("home")}
          >
            <div className="absolute inset-0 bg-violet-600/20 blur-xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <motion.img
              src={logoImg}
              alt="Dandilo Creative"
              className="relative z-10 drop-shadow-[0_0_15px_rgba(124,58,237,0.4)] object-contain"
              style={{
                height: logoHeight,
                maxWidth: isMobile ? 120 : 'none',
                width: 'auto',
              }}
              loading="eager"
            />
            <div className="hidden sm:block">
              <motion.span className="text-white font-black tracking-widest uppercase opacity-90 group-hover:opacity-100 transition-opacity" style={{ fontSize: brandFontSize }}>Dandilo</motion.span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div className="hidden lg:flex items-center mx-4" style={{ gap: linkGap }}>
            {NAV_ITEMS.map((item) => {
              const active = currentPath === pathFor(item);
              return (
                <motion.a
                  key={item}
                  href={pathFor(item)}
                  onClick={(e) => goTo(item, e)}
                  aria-current={active ? "page" : undefined}
                  className={`capitalize transition-colors font-bold tracking-widest whitespace-nowrap ${active ? "text-cyan-400" : "text-white hover:text-cyan-400"}`}
                  style={{ fontSize: linkFontSize }}
                  whileHover={{ y: -1, scale: 1.05 }}
                >
                  {item}
                </motion.a>
              );
            })}
          </motion.div>

          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle />
            <motion.div className="hidden xl:block" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
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
            <motion.div className="hidden xl:block" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
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
              <button
                onClick={() => goTo("contact")}
                className={`flex items-center justify-center whitespace-nowrap bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 border-0 text-white rounded-full font-bold uppercase tracking-wider transition-all ${isScrolled ? "px-4 py-1 text-[10px]" : "px-5 py-2 text-xs"}`}
              >
                Get in Touch
              </button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.div className="flex items-center gap-4 lg:hidden origin-right" style={{ scale: controlsScale }}>
            <ThemeToggle />
            <button
              className="text-zinc-300 hover:text-white transition-colors p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </motion.div>
        </motion.div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-4 pb-6 flex flex-col gap-4 overflow-hidden rounded-3xl bg-black/60 backdrop-blur-3xl border border-white/10 p-6"
            >
              {NAV_ITEMS.map((item) => {
                const active = currentPath === pathFor(item);
                return (
                  <a
                    key={item}
                    href={pathFor(item)}
                    onClick={(e) => goTo(item, e)}
                    aria-current={active ? "page" : undefined}
                    className={`transition-colors text-left py-2 text-xl font-bold tracking-widest capitalize ${active ? "text-cyan-400" : "text-zinc-300 hover:text-white"}`}
                  >
                    {item}
                  </a>
                );
              })}
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
              <button
                onClick={() => goTo("contact")}
                className="w-full mt-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-full py-4 text-center text-lg font-semibold shadow-[0_0_20px_rgba(124,58,237,0.4)]"
              >
                Get in Touch
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </motion.header>
  );
}
