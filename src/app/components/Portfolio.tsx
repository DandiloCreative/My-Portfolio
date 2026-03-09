import { useState, useEffect, useRef } from "react";
import { ExternalLink, ArrowRight, Eye, Star, Sparkles } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { motion, AnimatePresence, useInView } from "motion/react";
import mockup1 from "figma:asset/f7089e12afdc2e6682c069b7e396e71d23770ae2.png";
import mockup3 from "figma:asset/232d34fbe23a1ca670bd00e527a319bb055372f1.png";
import mockup4 from "figma:asset/cbfadb7bbb7a585953b0a0fca4c1157492892fe3.png";
import realEstateProject from "figma:asset/realestate-project.jpg";
import yachtProject from "figma:asset/yacht-project.jpg";
import apartmentProject from "figma:asset/apartment-project.jpg";

type Category = "All" | "Frontend" | "WordPress" | "Squarespace" | "Wix Studio";

const categories: Category[] = ["All", "Frontend", "WordPress", "Squarespace", "Wix Studio"];

const projects = [
  {
    id: 1,
    title: "Clothy E-Commerce Store",
    category: "Frontend" as Category,
    description: "Modern fashion platform with dynamic 3D product displays and seamless shopping pipeline. Features real-time inventory, wishlist, and animated checkout flow.",
    image: mockup1,
    tags: ["React", "Three.js", "Stripe"],
    accentColor: "from-green-500 to-emerald-500",
    badgeColor: "bg-green-500/20 text-green-300 border border-green-500/30",
    glowColor: "rgba(34,197,94,0.15)",
    stats: { views: "12K", rating: 4.9 },
    featured: true,
  },
  {
    id: 2,
    title: "Jadoo Travel Platform",
    category: "WordPress" as Category,
    description: "Immersive travel booking architecture with interactive destination mapping, trip customizer, and real-time availability syncing.",
    image: mockup3,
    tags: ["WordPress", "WooCommerce", "Maps API"],
    accentColor: "from-blue-500 to-cyan-500",
    badgeColor: "bg-blue-500/20 text-blue-300 border border-blue-500/30",
    glowColor: "rgba(59,130,246,0.15)",
    stats: { views: "8.4K", rating: 4.8 },
    featured: false,
  },
  {
    id: 3,
    title: "Medipresse Health",
    category: "Squarespace" as Category,
    description: "Professional medical catalog rebuilt with custom injection layers, advanced filtering, and integrated appointment booking system.",
    image: mockup4,
    tags: ["Squarespace", "Custom CSS", "Acuity"],
    accentColor: "from-fuchsia-500 to-pink-500",
    badgeColor: "bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-500/30",
    glowColor: "rgba(217,70,239,0.15)",
    stats: { views: "6.1K", rating: 4.7 },
    featured: false,
  },
  {
    id: 4,
    title: "Smart Real Estate",
    category: "Wix Studio" as Category,
    description: "Premium property management platform with interactive building previews, real-time market data, and a sleek modern dashboard design.",
    image: realEstateProject,
    tags: ["Wix Studio", "Velo API", "Real Estate"],
    accentColor: "from-orange-500 to-amber-500",
    badgeColor: "bg-orange-500/20 text-orange-300 border border-orange-500/30",
    glowColor: "rgba(249,115,22,0.15)",
    stats: { views: "7.2K", rating: 4.9 },
    featured: false,
  },
  {
    id: 5,
    title: "Aqua Yacht Shop",
    category: "Frontend" as Category,
    description: "High-end luxury yacht e-commerce platform with professional product catalogs, booking integrations, and a sophisticated AQUA brand identity.",
    image: yachtProject,
    tags: ["Next.js", "E-commerce", "Luxury"],
    accentColor: "from-violet-500 to-indigo-500",
    badgeColor: "bg-violet-500/20 text-violet-300 border border-violet-500/30",
    glowColor: "rgba(124,58,237,0.15)",
    stats: { views: "14.4K", rating: 5.0 },
    featured: false,
  },
  {
    id: 6,
    title: "Mandma Apartments",
    category: "WordPress" as Category,
    description: "Futuristic apartment showcase featuring unique architectural designs, financial solution integration, and immersive spatial previews.",
    image: apartmentProject,
    tags: ["WordPress", "Architecture", "Fintech"],
    accentColor: "from-rose-500 to-pink-500",
    badgeColor: "bg-rose-500/20 text-rose-300 border border-rose-500/30",
    glowColor: "rgba(244,63,94,0.15)",
    stats: { views: "10.1K", rating: 4.8 },
    featured: false,
  }
];

const portfolioStats = [
  { value: 500, suffix: "+", label: "Projects Delivered" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 4, suffix: "", label: "Platforms Mastered" },
  { value: 5, suffix: "★", label: "Average Rating" },
];

function StatCounter({ value, suffix, label, delay = 0 }: { value: number; suffix: string; label: string; delay?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    } else {
      setCount(0);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
      <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 mb-1">
        {count}{suffix}
      </div>
      <div className="text-zinc-400 text-sm font-light">{label}</div>
    </div>
  );
}

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const featured = projects.find(p => p.featured);

  return (
    <section id="portfolio" className="py-16 bg-black relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-violet-600/8 rounded-full blur-[150px] pointer-events-none -translate-x-1/3" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-cyan-600/8 rounded-full blur-[120px] pointer-events-none translate-x-1/3" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 will-change-transform"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 will-change-transform"
          >
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 font-semibold tracking-wider uppercase text-xs">Showcase</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400">
              Featured Work
            </span>
          </h2>
          <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto font-light leading-relaxed">
            High-end digital experiences delivered to industry-leading clients across every major platform.
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-20 will-change-transform"
        >
          {portfolioStats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="will-change-transform"
            >
              <StatCounter
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                delay={i * 0.1}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Project */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9 }}
            className="mb-16 will-change-transform"
          >
            <div className="flex items-center gap-3 mb-6">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span className="text-amber-400 font-semibold uppercase text-xs tracking-widest">Featured Project</span>
            </div>
            <Card className="overflow-hidden bg-white/5 border border-white/10 hover:border-violet-500/40 transition-all duration-500 rounded-[2rem] shadow-none hover:shadow-[0_0_60px_rgba(124,58,237,0.15)] group">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative overflow-hidden aspect-[4/3] md:aspect-auto min-h-[300px]">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/80 hidden md:block" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden" />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 scale-75 group-hover:scale-100 transition-transform duration-300">
                      <Eye className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-10 md:p-14 flex flex-col justify-center">
                  <Badge className={`w-fit px-3 py-1 text-xs font-semibold rounded-full shadow-none mb-6 ${featured.badgeColor}`}>
                    {featured.category}
                  </Badge>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-cyan-400 transition-all duration-300">
                    {featured.title}
                  </h3>
                  <p className="text-zinc-300 font-light leading-relaxed mb-6 text-lg">{featured.description}</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {featured.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-zinc-300 border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5 text-sm text-zinc-400">
                      <Eye className="w-4 h-4" />
                      <span>{featured.stats.views} views</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-amber-400">
                      <Star className="w-4 h-4 fill-amber-400" />
                      <span>{featured.stats.rating}</span>
                    </div>
                    <Button className="ml-auto bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white rounded-full px-6 py-4 text-sm font-medium shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] transition-all border-0 inline-flex items-center gap-2">
                      View Project <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Category Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12 will-change-transform"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat
                ? "text-white"
                : "text-zinc-400 hover:text-white bg-white/5 border border-white/10 hover:border-white/20"
                }`}
            >
              {activeCategory === cat && (
                <motion.span
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 shadow-[0_0_20px_rgba(124,58,237,0.4)]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85, y: -20 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: "easeOut",
                  layout: { duration: 0.4 }
                }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                onHoverStart={() => setHoveredId(project.id)}
                onHoverEnd={() => setHoveredId(null)}
                className="group"
              >
                <Card
                  className="overflow-hidden bg-white/5 border border-white/10 hover:border-violet-500/40 transition-all duration-500 rounded-[2rem] shadow-none flex flex-col h-full"
                  style={{
                    boxShadow: hoveredId === project.id
                      ? `0 0 50px ${project.glowColor}`
                      : "none"
                  }}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden aspect-[4/3] bg-zinc-900 ring-1 ring-white/5 mx-2 mt-2 rounded-t-[1.5rem] rounded-b-xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />
                    {/* Hover action circle */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        initial={false}
                        animate={{
                          scale: hoveredId === project.id ? 1 : 0.5,
                          opacity: hoveredId === project.id ? 1 : 0
                        }}
                        transition={{ duration: 0.25 }}
                        className="w-14 h-14 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center border border-white/20"
                      >
                        <ExternalLink className="w-5 h-5 text-white" />
                      </motion.div>
                    </div>
                    {/* Stats overlay */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex items-center gap-1 text-xs text-white/80 bg-black/40 backdrop-blur-sm px-2 py-1 rounded-full">
                        <Eye className="w-3 h-3" />
                        <span>{project.stats.views}</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-amber-400 bg-black/40 backdrop-blur-sm px-2 py-1 rounded-full">
                        <Star className="w-3 h-3 fill-amber-400" />
                        <span>{project.stats.rating}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-7 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge className={`px-3 py-1 text-xs font-semibold rounded-full shadow-none ${project.badgeColor}`}>
                        {project.category}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-cyan-400 transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-zinc-400 font-light leading-relaxed mb-5 text-sm flex-1">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/5 text-zinc-400 border border-white/10">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <motion.button
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-2 text-sm text-violet-400 hover:text-violet-300 font-medium transition-colors mt-auto"
                    >
                      View Project <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-center mt-20 will-change-transform"
        >
          <p className="text-zinc-500 text-sm mb-6">Ready to join our portfolio of premium clients?</p>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Button className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white rounded-full px-10 py-6 text-lg font-semibold shadow-[0_0_30px_rgba(124,58,237,0.35)] hover:shadow-[0_0_50px_rgba(124,58,237,0.55)] transition-all border-0 inline-flex items-center gap-3">
              Start Your Project <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}