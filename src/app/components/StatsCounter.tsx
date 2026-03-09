import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";

export function StatsCounter() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useInView(sectionRef, { once: false, margin: "-100px" });

  const stats = [
    { number: 500, suffix: "+", label: "Projects Delivered" },
    { number: 250, suffix: "+", label: "Global Clients" },
    { number: 8, suffix: "+", label: "Years Experience" },
    { number: 4, suffix: "", label: "Enterprise CMS" },
  ];

  return (
    <section ref={sectionRef} className="bg-zinc-950 py-16 overflow-hidden relative border-y border-white/5">
      {/* Background glowing orbs matching Hero */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiIC8+CjxwYXRoIGQ9Ik0wIDBoNHY0SDB6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiAvPgo8L3N2Zz4=')] opacity-50 pointer-events-none" />

      {/* Transparent Heading */}
      <motion.div
        className="text-center mb-20 relative z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 font-semibold tracking-wider uppercase text-sm mb-4 block">Milestones</span>
        <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">
          Our Impact
        </h2>
      </motion.div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              targetNumber={stat.number}
              suffix={stat.suffix}
              label={stat.label}
              isVisible={isVisible}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatItem({
  targetNumber,
  suffix,
  label,
  isVisible,
  index,
}: {
  targetNumber: number;
  suffix: string;
  label: string;
  isVisible: boolean;
  index: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) {
      setCount(0);
      return;
    }

    const duration = 2000;
    const steps = 60;
    const increment = targetNumber / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetNumber) {
        setCount(targetNumber);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, targetNumber]);

  return (
    <motion.div
      className="text-center relative p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-sm group hover:bg-white/[0.04] transition-colors"
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ type: "spring", stiffness: 100, delay: index * 0.1 }}
    >
      <div className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-zinc-500 mb-3 tracking-tighter decoration-clone">
        {count}{suffix}
      </div>
      <div className="text-zinc-400 text-sm md:text-base font-light tracking-wide uppercase">
        {label}
      </div>
    </motion.div>
  );
}