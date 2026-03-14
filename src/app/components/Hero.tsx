import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import profileImage from "figma:asset/3f11642fd33c5a4bb6a269c8340161a5ced1b197.png";
import logoImg from "../assets/Dandilo-creative-logo.png";

const platformLogos = [
  { name: "WordPress", color: "#21759B", position: "top-[10%] left-0 sm:left-[5%] md:-left-[10%]" },
  { name: "Frontend Developer", color: "#38bdf8", position: "top-[20%] right-0 sm:right-[5%] md:-right-[15%]" },
  { name: "Shopify", color: "#FFFFFF", position: "bottom-[20%] left-0 sm:left-[5%] md:-left-[15%]" },
  { name: "Wix", color: "#0C6EFC", position: "bottom-[10%] right-0 sm:right-[5%] md:-right-[10%]" },
];

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-32 md:pt-44 pb-20 bg-zinc-950 relative overflow-hidden min-h-screen flex items-center">
      {/* Background glowing orbs */}
      <div className="absolute top-0 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-violet-600/20 rounded-full blur-[80px] md:blur-[120px] pointer-events-none will-change-[filter]" />
      <div className="absolute bottom-0 right-1/4 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-indigo-600/20 rounded-full blur-[70px] md:blur-[100px] pointer-events-none will-change-[filter]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[800px] h-[200px] md:h-[400px] bg-cyan-600/10 rounded-full blur-[100px] md:blur-[150px] pointer-events-none will-change-[filter]" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiIC8+CjxwYXRoIGQ9Ik0wIDBoNHY0SDB6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiAvPgo8L3N2Zz4=')] opacity-50 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start will-change-transform"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 md:mb-8 backdrop-blur-md"
            >
              <Sparkles className="w-4 h-4 text-violet-400" />
              <span className="text-xs md:text-sm font-medium text-zinc-300">Premium Web Design Studio</span>
            </motion.div>

            {/* Logo */}
            <motion.img
              src={logoImg}
              alt="Dandilo Creative Logo"
              className="h-16 md:h-20 w-auto mb-6 drop-shadow-[0_0_20px_rgba(124,58,237,0.4)]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.6 }}
            />

            <motion.h1
              className="text-4xl sm:text-5xl md:text-[5rem] leading-[1.2] md:leading-[1.1] font-bold mb-6 text-white tracking-tight will-change-transform"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Turn Your Website Into a <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400">
                Customer-Generating Machine
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-2xl text-zinc-200 mb-8 md:mb-10 leading-relaxed font-light max-w-xl will-change-transform"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              I help small businesses build fast, modern websites that convert visitors into paying customers.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 md:gap-5 w-full sm:w-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ rotateX: 360, transition: { duration: 0.6, ease: "easeInOut" } }}
                className="w-full sm:w-auto"
                style={{ perspective: 1000 }}
              >
                <a
                  href="https://api.whatsapp.com/send/?phone=%2B12246200930&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full sm:w-auto flex items-center justify-center bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white backdrop-blur-md shadow-[0_0_20px_rgba(124,58,237,0.4)] rounded-full px-7 py-3 md:px-9 md:py-4 text-sm md:text-base font-bold tracking-wide transition-all uppercase no-underline"
                >
                  Get Free Website Audit <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                </a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ rotateX: 360, transition: { duration: 0.6, ease: "easeInOut" } }}
                className="w-full sm:w-auto"
                style={{ perspective: 1000 }}
              >
                <Button size="lg" variant="outline" onClick={() => {
                  const element = document.getElementById("featured-work");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }} className="group w-full sm:w-auto rounded-full px-7 py-3 md:px-9 md:py-4 text-sm md:text-base font-bold bg-white/10 hover:bg-white/20 border-white/20 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all tracking-wide uppercase h-auto text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400">
                  View Our Work
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          <div className="relative">
            {/* Main profile image container with glowing effects */}
            <div className="relative z-10 flex justify-center items-center lg:min-h-[600px] py-8 md:py-12">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
                {/* Profile Image with modern rings */}
                <div className="absolute inset-0 rounded-full border border-white/20 scale-110 animate-[spin_10s_linear_infinite] will-change-transform" />
                <div className="absolute inset-0 rounded-full border border-violet-500/30 scale-[1.25] animate-[spin_15s_linear_infinite_reverse] hide-on-mobile will-change-transform" />

                <motion.div
                  initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative z-10 w-full h-full p-2 rounded-full bg-gradient-to-tr from-violet-600/50 to-cyan-600/50 backdrop-blur-xl will-change-transform"
                >
                  <img
                    src={profileImage}
                    alt="Dandilo Creative Founder"
                    className="w-full h-full rounded-full object-cover shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                    width={384}
                    height={384}
                  />
                  {/* Inner glow */}
                  <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(255,255,255,0.2)] mix-blend-overlay"></div>
                </motion.div>

                {/* Floating Platform Logos */}
                {platformLogos.map((platform, index) => (
                  <motion.div
                    key={platform.name}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1, y: [0, -15, 0] }}
                    transition={{
                      opacity: { delay: 0.6 + index * 0.1, duration: 0.5 },
                      scale: { delay: 0.6 + index * 0.1, duration: 0.5, type: "spring" },
                      y: {
                        delay: 1,
                        duration: 3 + index * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }}
                    className={`absolute z-20 will-change-transform ${platform.position}`}
                  >
                    <div className="flex items-center justify-center px-3 py-2 md:px-5 md:py-3 rounded-xl md:rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
                      <span className="text-white font-semibold tracking-wide text-[10px] md:text-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full shadow-[0_0_10px_currentColor]" style={{ backgroundColor: platform.color, color: platform.color }}></span>
                        {platform.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}