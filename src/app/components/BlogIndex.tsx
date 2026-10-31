import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "../routes";
import { formatDate } from "./ContentPage";

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
      </div>
    </section>
  );
}
