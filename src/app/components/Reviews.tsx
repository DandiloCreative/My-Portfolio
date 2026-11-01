import { useRef } from "react";
import { motion, useAnimationFrame, useMotionValue } from "motion/react";
import { Star, Quote } from "lucide-react";

// Real client reviews from our Google Business Profile (shortened ones end with …).
const reviews = [
    { name: "Prescott Sims", role: "Google review", avatar: "PS", rating: 5, review: "Excellent experience! He helped me with my website development and did a great job. Communication was smooth…", color: "from-violet-500 to-purple-600" },
    { name: "Louis Gregory", role: "Google review", avatar: "LG", rating: 5, review: "He design my Shopify store from start he also manage my store inventory, products and my product page looks more unique I really love it store in general, Thank you DandiloDigitals. Highly recommend!!", color: "from-cyan-500 to-blue-600" },
    { name: "Theresa", role: "Google review", avatar: "TH", rating: 5, review: "Dandilo digitals is highly competent and efficient. Their attention to detail is commendable and I will recommend their services to everyone. My problem got fixed in less than 24hrs of contacting them.", color: "from-fuchsia-500 to-pink-600" },
    { name: "Topzy Lawrence", role: "Google review", avatar: "TL", rating: 5, review: "Great work from their team of experts. They did an excellent job designing and optimizing my website; it runs perfectly. Communication throughout the process was clear, professional, and efficient.", color: "from-amber-500 to-orange-600" },
    { name: "Charlotte Johnson", role: "Google review", avatar: "CJ", rating: 5, review: "I recommend Dandilo, he is professional. Made my website exactly the way i want it", color: "from-emerald-500 to-teal-600" },
    { name: "Adex Berry", role: "Google review", avatar: "AB", rating: 5, review: "The website development he made for my brand looks superb and attract more customer to my woocommerce wordpress store…", color: "from-indigo-500 to-violet-600" },
    { name: "Johnstone", role: "Google review", avatar: "JO", rating: 5, review: "I have been looking for a website developer for a long time until I found Dandilo Digitals…", color: "from-violet-500 to-purple-600" },
    { name: "Allen Samuel", role: "Google review", avatar: "AS", rating: 5, review: "It was nice working with agency. Their response and work rate is exceptionally good.", color: "from-cyan-500 to-blue-600" },
    { name: "Jephthah Nwakaji", role: "Google review", avatar: "JN", rating: 5, review: "I'm so happy with the way he handled my website; the integrations are functional and responsive ☺️", color: "from-fuchsia-500 to-pink-600" },
    { name: "Sophia", role: "Google review", avatar: "SO", rating: 5, review: "I am happy I have choosen dandilo, he upscale our online presence…", color: "from-amber-500 to-orange-600" },
    { name: "Great Idris", role: "Google review", avatar: "GI", rating: 5, review: "Dandilo Digitals delivers creativity, quality, and results all in one place…", color: "from-emerald-500 to-teal-600" },
];

export const GOOGLE_RATING = 5.0;
export const GOOGLE_REVIEW_COUNT = reviews.length;
export const GOOGLE_REVIEWS_URL = "https://www.google.com/search?q=Dandilo+Digitals";

// Duplicate for infinite loop
const allReviews = [...reviews, ...reviews];

function StarRating({ count }: { count: number }) {
    return (
        <div className="flex gap-0.5 md:gap-1">
            {Array.from({ length: count }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
        </div>
    );
}

function ReviewCard({ review, inGrid = false }: { review: (typeof reviews)[0]; inGrid?: boolean }) {
    return (
        <div className={`relative flex-shrink-0 ${inGrid ? "w-full h-full" : "w-[290px] md:w-[380px] max-w-[85vw] mx-3 md:mx-4"} p-7 rounded-[2rem] bg-white/[0.03] border border-white/10 backdrop-blur-sm group hover:border-violet-500/40 hover:bg-white/[0.06] transition-all duration-500 cursor-default`}>
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

export function Reviews({ isPage = false }: { isPage?: boolean }) {
    const Heading = isPage ? "h1" : "h2";
    return (
        <section id="reviews" className={`py-16 bg-zinc-950 relative overflow-hidden${isPage ? " pt-32 md:pt-40" : ""}`}>
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
                    viewport={{ once: true, margin: "-20px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 font-semibold tracking-wider uppercase text-sm mb-4 block">
                        Testimonials
                    </span>
                    <Heading className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
                        {isPage ? "Client Reviews" : "What Clients Say"}
                    </Heading>
                    <p className="text-xl text-zinc-300 max-w-2xl mx-auto font-light leading-relaxed">
                        Real reviews from our clients on Google.
                    </p>
                </motion.div>
            </div>

            {isPage ? (
                /* Full reviews page: show every review in a readable grid */
                <div className="container mx-auto px-6 md:px-12 relative z-10">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {reviews.map((review) => (
                            <ReviewCard key={review.name} review={review} inGrid />
                        ))}
                    </div>
                </div>
            ) : (
                /* Marquee rows */
                <div className="flex flex-col gap-6">
                    <MarqueeRow items={allReviews} direction={1} speed={35} />
                </div>
            )}

            {/* Overall Google rating */}
            <div className="flex justify-center mt-12 relative z-10 px-4">
                <a
                    href={GOOGLE_REVIEWS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 md:gap-4 px-4 py-2 md:px-8 md:py-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm hover:border-violet-500/40 transition-colors"
                >
                    <div className="flex gap-0.5 md:gap-1">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <Star key={i} className="w-3.5 h-3.5 md:w-5 md:h-5 fill-amber-400 text-amber-400" />
                        ))}
                    </div>
                    <span className="text-white font-semibold text-sm md:text-lg">{GOOGLE_RATING.toFixed(1)}</span>
                    <div className="w-px h-4 md:h-5 bg-white/20" />
                    <span className="text-zinc-400 text-xs md:text-sm font-light whitespace-nowrap">
                        {GOOGLE_REVIEW_COUNT} reviews on Google
                    </span>
                </a>
            </div>
        </section>
    );
}
