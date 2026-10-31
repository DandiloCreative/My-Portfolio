import { useState, useEffect } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { useNavigate } from "react-router";
import profileImage from "../../assets/hero-profile.webp";

const TypewriterText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText === text) {
      // Pause at the end before deleting
      timeout = setTimeout(() => setIsDeleting(true), 2500);
    } else if (isDeleting && displayText === "") {
      // Pause before typing again
      timeout = setTimeout(() => setIsDeleting(false), 500);
    } else {
      // Typing or deleting
      const nextDelay = isDeleting ? 40 : 80;
      timeout = setTimeout(() => {
        setDisplayText(current =>
          isDeleting
            ? current.slice(0, -1)
            : text.slice(0, current.length + 1)
        );
      }, nextDelay);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, text]);

  return (
    <>
      <span className={displayText.length === 0 ? "opacity-0" : ""}>{displayText || "C"}</span>
      <span className="animate-pulse opacity-70 ml-[1px]">|</span>
    </>
  );
};

const platformLogos = [
  { name: "WordPress", color: "#21759B", position: "top-[10%] left-0 sm:left-[5%] md:-left-[10%]" },
  { name: "Frontend Developer", color: "#38bdf8", position: "top-[20%] right-0 sm:right-[5%] md:-right-[15%]" },
  { name: "Shopify", color: "#FFFFFF", position: "bottom-[20%] left-0 sm:left-[5%] md:-left-[15%]" },
  { name: "Wix", color: "#0C6EFC", position: "bottom-[10%] right-0 sm:right-[5%] md:-right-[10%]" },
];

export function Hero() {
  const navigate = useNavigate();

  const navigateToContact = () => {
    navigate("/contact");
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
          <div className="relative order-1 md:order-2">
            {/* Main profile image container with glowing effects */}
            <div className="relative z-10 flex justify-center items-center py-4 md:py-12 lg:min-h-[600px]">
              <div className="relative w-[82vw] h-[82vw] max-w-[24rem] max-h-[24rem] md:w-96 md:h-96 md:max-w-none md:max-h-none">
                {/* Soft glow behind the image (radial gradient instead of blur, so phones don't render a square edge) */}
                <div className="hero-glow absolute -inset-[30%] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.35)_0%,rgba(99,102,241,0.15)_40%,transparent_70%)] pointer-events-none" />

                {/* Faded rings around the image */}
                <div className="hero-ring absolute inset-0 rounded-full border border-white/20 scale-110 animate-[spin_10s_linear_infinite]" />
                <div className="hero-ring absolute inset-0 rounded-full border border-violet-500/30 scale-[1.18] md:scale-[1.25] animate-[spin_15s_linear_infinite_reverse]" />
                {/* Mobile-only ripple rings that pulse outward */}
                <div className="hero-ripple absolute inset-0 rounded-full border border-violet-400/40 md:hidden" />
                <div className="hero-ripple hero-ripple-delay absolute inset-0 rounded-full border border-cyan-400/30 md:hidden" />

                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative z-10 w-full h-full p-[5px] md:p-2 rounded-full bg-gradient-to-tr from-violet-500 via-indigo-500 to-cyan-400 md:from-violet-600/50 md:via-transparent md:to-cyan-600/50 md:backdrop-blur-xl shadow-[0_0_40px_rgba(124,58,237,0.55),0_0_90px_rgba(34,211,238,0.2)] md:shadow-none"
                >
                  <img
                    src={profileImage}
                    alt="Founder of Dandilo Digitals, a web design and development agency"
                    className="w-full h-full rounded-full object-cover border-4 border-zinc-950 md:border-0 contrast-[1.05] saturate-[1.1] md:contrast-100 md:saturate-100 shadow-[0_0_60px_rgba(124,58,237,0.8)]"
                    loading="eager"
                    {...{ fetchpriority: "high" }}
                    decoding="async"
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

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start will-change-transform order-2 md:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md"
            >
              <Sparkles className="w-4 h-4 text-violet-400" />
              <span className="text-xs md:text-sm font-medium text-zinc-300">Best Website Development Agency</span>
            </motion.div>

            {/* Logo - removed from Hero to improve mobile load time */}

            <motion.h1
              className="text-4xl sm:text-5xl md:text-[5rem] leading-[1.2] md:leading-[1.1] font-bold mb-6 text-white tracking-tight will-change-transform"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span>Turn Your Website Into a <br /></span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400 inline-block min-h-[1.2em]">
                <TypewriterText text="Customer-Generating Machine" />
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-2xl mb-8 md:mb-10 leading-relaxed font-light max-w-xl will-change-transform italic text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Web design & development for small businesses. Websites that connect, convert, and grow.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-start gap-3 md:gap-5 w-full sm:w-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ rotateX: 360, transition: { duration: 0.6, ease: "easeInOut" } }}
                className="w-auto"
                style={{ perspective: 1000 }}
              >
                <button
                  onClick={navigateToContact}
                  className="group w-auto flex items-center justify-center whitespace-nowrap bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white backdrop-blur-md shadow-[0_0_20px_rgba(124,58,237,0.4)] rounded-full px-5 py-2.5 md:px-9 md:py-4 text-xs md:text-base font-bold tracking-wide transition-all uppercase"
                >
                  Get Free Website Audit <ArrowRight className="ml-2 flex-shrink-0 w-4 h-4 md:w-5 md:h-5" />
                </button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ rotateX: 360, transition: { duration: 0.6, ease: "easeInOut" } }}
                className="w-auto"
                style={{ perspective: 1000 }}
              >
                <Button size="lg" variant="outline" onClick={() => navigate("/portfolio")} className="group w-auto whitespace-nowrap rounded-full px-5 py-2.5 md:px-9 md:py-4 text-xs md:text-base font-bold bg-white/10 hover:bg-white/20 border-white/20 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all tracking-wide uppercase h-auto text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400">
                  View My Portfolio
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>


        </div>
      </div>
    </section>
  );
}