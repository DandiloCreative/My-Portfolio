import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "../routes";
import { blogCover, formatDate } from "./ContentPage";

export function BlogIndex() {
  const posts = [...blogPosts].sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));
  return (
    <section className="bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-violet-600/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="relative z-10 container mx-auto px-6 md:px-12 pt-32 md:pt-40 pb-20 max-w-5xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 font-semibold tracking-wider uppercase text-sm mb-4 block">
          Blog
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
          Web Design Tips & Guides for Small Businesses
        </h1>
        <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed max-w-2xl mb-12">
          Practical advice on websites, platforms and getting more customers online, written for business owners, not developers.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <Link
              key={post.path}
              to={post.path}
              className="group flex flex-col p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-violet-500/40 transition-colors"
            >
              <div className="-mx-8 -mt-8 mb-6 overflow-hidden rounded-t-[2rem] border-b border-white/10">
                <img
                  src={blogCover(post.path).small}
                  srcSet={`${blogCover(post.path).small} 600w, ${blogCover(post.path).large} 1200w`}
                  sizes="(min-width: 768px) 480px, 100vw"
                  alt={`Cover image for the Dandilo Digitals guide: ${post.label}`}
                  width={600}
                  height={315}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
              <p className="text-zinc-400 text-sm mb-3">
                {post.date && formatDate(post.date)}{post.readMinutes ? ` · ${post.readMinutes} min read` : ""}
              </p>
              <h2 className="text-2xl font-bold text-white tracking-tight mb-3">{post.h1}</h2>
              <p className="text-zinc-300 font-light leading-relaxed mb-6 flex-1">{post.description}</p>
              <span className="inline-flex items-center gap-2 text-violet-400 font-semibold">
                Read the guide <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-10 text-zinc-300 font-light leading-relaxed">
          <div>
            <h2 className="text-2xl font-bold text-white tracking-tight mb-3">What you'll find here</h2>
            <p>
              Straightforward guides for small business owners planning a new website, a redesign or an online
              store: what websites cost, how to choose between WordPress, Shopify and Wix Studio, how to keep your
              Google rankings when you redesign, and how to turn more visitors into calls, bookings and sales.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white tracking-tight mb-3">Want advice on your own website?</h2>
            <p className="mb-4">
              Every business is different. Send us your website and we'll review it for free, then tell you which
              changes would bring in the most customers.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 text-violet-400 font-semibold hover:text-violet-300">
              Get a free website audit <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
