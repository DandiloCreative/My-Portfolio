import { useRef } from "react";
import { motion, useAnimationFrame, useMotionValue } from "motion/react";
import { Star, Quote } from "lucide-react";

const reviews = [
    {
        name: "Sarah Mitchell",
        role: "Founder, Lumea Studio",
        avatar: "SM",
        rating: 5,
        review:
            "Dandilo transformed our outdated site into a sleek, high-converting platform. The attention to design detail is unmatched — every animation feels intentional.",
        color: "from-violet-500 to-purple-600",
    },
    {
        name: "James Okoye",
        role: "CEO, NovaBrand Agency",
        avatar: "JO",
        rating: 5,
        review:
            "Absolutely world-class work. Our WordPress build was completed ahead of schedule and the performance score went from 54 to 97. Incredible.",
        color: "from-cyan-500 to-blue-600",
    },
    {
        name: "Priya Sharma",
        role: "CMO, Veltrix Health",
        avatar: "PS",
        rating: 5,
        review:
            "The Squarespace site they built for us outperforms our competitors by a huge margin. User engagement doubled in the first month after launch.",
        color: "from-fuchsia-500 to-pink-600",
    },
    {
        name: "Luca Ferrari",
        role: "Director, Arteza Milan",
        avatar: "LF",
        rating: 5,
        review:
            "Every pixel is perfected. Dandilo understands brand identity deeply — the result felt premium, modern, and exactly on-point for our audience.",
        color: "from-amber-500 to-orange-600",
    },
    {
        name: "Amara Diop",
        role: "E-Commerce Lead, Kinnect",
        avatar: "AD",
        rating: 5,
        review:
            "Our Wix Studio store rebuild drove a 3x increase in conversions. The mobile experience especially blew our team away. Highly recommend.",
        color: "from-emerald-500 to-teal-600",
    },
    {
        name: "Tom Hargrove",
        role: "CTO, Stackbloom Inc.",
        avatar: "TH",
        rating: 5,
        review:
            "The frontend build was clean, scalable, and beautifully documented. Working with Dandilo feels like collaborating with a top-tier product team.",
        color: "from-indigo-500 to-violet-600",
    },
];

// Duplicate for infinite loop
const allReviews = [...reviews, ...reviews];

function StarRating({ count }: { count: number }) {
    return (
        <div className="flex gap-1">
            {Array.from({ length: count }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
        </div>
    );
}

function ReviewCard({ review }: { review: (typeof reviews)[0] }) {
    return (
        <div className="relative flex-shrink-0 w-[290px] md:w-[380px] max-w-[85vw] mx-3 md:mx-4 p-7 rounded-[2rem] bg-white/[0.03] border border-white/10 backdrop-blur-sm group hover:border-violet-500/40 hover:bg-white/[0.06] transition-all duration-500 cursor-default">
            {/* Quote icon */}
            <div className="absolute top-6 right-7 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-10 h-10 text-white" />
            </div>

            {/* Star rating */}
            <StarRating count={review.rating} />

            {/* Review text */}
            <p className="mt-4 mb-6 text-zinc-300 font-light leading-relaxed text-[0.95rem]">
                "{review.review}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-3">
                <div
                    className={`w-11 h-11 rounded-full bg-gradient-to-br ${review.color} flex items-center justify-center text-white text-sm font-bold flex-shrink-0 ring-2 ring-white/10`}
                >
                    {review.avatar}
                </div>
                <div>
                    <p className="text-white font-semibold text-sm">{review.name}</p>
                    <p className="text-zinc-500 text-xs font-light">{review.role}</p>
                </div>
            </div>
        </div>
    );
}

function MarqueeRow({
    items,
    direction = 1,
    speed = 40,
}: {
    items: typeof allReviews;
    direction?: 1 | -1;
    speed?: number;
}) {
    const x = useMotionValue(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const isPaused = useRef(false);

    useAnimationFrame((_, delta) => {
        if (isPaused.current) return;
        const containerWidth = containerRef.current?.scrollWidth ?? 0;
        const halfWidth = containerWidth / 2;
        const move = (speed * delta) / 1000;
        x.set(x.get() - move * direction);

        // Reset seamlessly
        if (direction === 1 && x.get() <= -halfWidth) {
            x.set(x.get() + halfWidth);
        } else if (direction === -1 && x.get() >= 0) {
            x.set(x.get() - halfWidth);
        }
    });

    return (
        <div
            className="overflow-hidden"
            onMouseEnter={() => (isPaused.current = true)}
            onMouseLeave={() => (isPaused.current = false)}
        >
            <motion.div ref={containerRef} style={{ x }} className="flex w-max">
                {items.map((review, i) => (
                    <ReviewCard key={i} review={review} />
                ))}
            </motion.div>
        </div>
    );
}

export function Reviews() {
    return (
        <section id="reviews" className="py-16 bg-zinc-950 relative overflow-hidden">
            {/* Background glows */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-violet-600/15 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[350px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

            {/* Edge fade masks */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 relative z-10 mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 font-semibold tracking-wider uppercase text-sm mb-4 block">
                        Testimonials
                    </span>
                    <h2 className="text-5xl font-bold mb-6 text-white tracking-tight">
                        What Clients Say
                    </h2>
                    <p className="text-xl text-zinc-300 max-w-2xl mx-auto font-light leading-relaxed">
                        Real feedback from founders, CMOs, and teams who trusted us to build
                        their digital presence.
                    </p>
                </motion.div>
            </div>

            {/* Marquee rows */}
            <div className="flex flex-col gap-6">
                <MarqueeRow items={allReviews} direction={1} speed={35} />
                <MarqueeRow items={[...allReviews].reverse()} direction={-1} speed={28} />
            </div>

            {/* Overall rating badge */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="flex justify-center mt-16 relative z-10"
            >
                <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                    <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                        ))}
                    </div>
                    <span className="text-white font-semibold text-lg">5.0</span>
                    <div className="w-px h-5 bg-white/20" />
                    <span className="text-zinc-400 text-sm font-light">
                        Based on 200+ client reviews
                    </span>
                </div>
            </motion.div>
        </section>
    );
}
