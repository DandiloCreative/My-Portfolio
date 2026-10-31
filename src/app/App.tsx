import { lazy, Suspense, useEffect, useRef, useState, type ReactNode } from "react";
import { Routes, Route, useLocation, Link } from "react-router";

import { Header } from "./components/Header";
import { ROUTE_MAP, SITE_URL, normalizePath } from "./routes";
import { initMetaPixel, trackPageView } from "./lib/metaPixel";
import { initAnalytics, trackAnalyticsPageView } from "./lib/analytics";
import { Hero } from "./components/Hero";

// Lazy-load below-fold sections for faster initial paint
const StatsCounter = lazy(() => import("./components/StatsCounter").then(m => ({ default: m.StatsCounter })));
const Services = lazy(() => import("./components/Services").then(m => ({ default: m.Services })));
const Platforms = lazy(() => import("./components/Platforms").then(m => ({ default: m.Platforms })));
const SecuritySection = lazy(() => import("./components/SecuritySection").then(m => ({ default: m.SecuritySection })));
const Portfolio = lazy(() => import("./components/Portfolio").then(m => ({ default: m.Portfolio })));
const Reviews = lazy(() => import("./components/Reviews").then(m => ({ default: m.Reviews })));
const FAQ = lazy(() => import("./components/FAQ").then(m => ({ default: m.FAQ })));
const Contact = lazy(() => import("./components/Contact").then(m => ({ default: m.Contact })));
const Footer = lazy(() => import("./components/Footer").then(m => ({ default: m.Footer })));
const ContentPage = lazy(() => import("./components/ContentPage").then(m => ({ default: m.ContentPage })));
const BlogIndex = lazy(() => import("./components/BlogIndex").then(m => ({ default: m.BlogIndex })));
const ServiceLinks = lazy(() => import("./components/ServiceLinks").then(m => ({ default: m.ServiceLinks })));
const FloatingWhatsApp = lazy(() => import("./components/FloatingWhatsApp").then(m => ({ default: m.FloatingWhatsApp })));

/** Jump to the top of the page whenever the route changes, and record the page view. */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    initMetaPixel(); // no-op after the first call, or if no Pixel ID is set
    trackPageView();
    initAnalytics(); // no-op until a GA4 Measurement ID is set
    // Wait a tick so the page title has updated before recording the view
    setTimeout(trackAnalyticsPageView, 0);
  }, [pathname]);
  return null;
}

function setMeta(selector: string, attr: "content" | "href", value: string) {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}

/** Keep the browser tab title, Google description and share-preview tags in sync with the page. */
function usePageMeta(pathname: string) {
  useEffect(() => {
    const meta = ROUTE_MAP[pathname];
    if (!meta) return;
    const url = SITE_URL + (pathname === "/" ? "/" : pathname);
    document.title = meta.title;
    setMeta('meta[name="description"]', "content", meta.description);
    setMeta('link[rel="canonical"]', "href", url);
    setMeta('meta[property="og:url"]', "content", url);
    setMeta('meta[property="og:title"]', "content", meta.title);
    setMeta('meta[property="og:description"]', "content", meta.description);
    setMeta('meta[name="twitter:title"]', "content", meta.title);
    setMeta('meta[name="twitter:description"]', "content", meta.description);
  }, [pathname]);
}

// On mobile, defer rendering until the section is near the viewport
// Search engine crawlers should see every section without needing to scroll
const IS_BOT = typeof navigator !== "undefined" && /bot|crawler|spider|crawling|lighthouse|inspectiontool/i.test(navigator.userAgent);

function LazySection({ children, className, forceVisible }: { children: ReactNode; className?: string; forceVisible?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  // Render everything during the build-time prerender (no window there)
  const [visible, setVisible] = useState(() => typeof window === "undefined");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    // On desktop, or when forced by route navigation, render immediately
    if (!isMobile || forceVisible || IS_BOT) {
      setVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" } // start loading 300px before entering viewport
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [isMobile, forceVisible]);

  return (
    <div ref={ref} className={className}>
      {visible ? children : <div style={{ minHeight: 200 }} />}
    </div>
  );
}

function NotFound() {
  // Tell search engines not to index unknown URLs
  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex";
    document.head.appendChild(meta);
    const prevTitle = document.title;
    document.title = "Page Not Found | Dandilo Digitals";
    return () => {
      meta.remove();
      document.title = prevTitle;
    };
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-zinc-950">
      <p className="text-violet-400 font-semibold tracking-widest uppercase text-sm mb-4">404</p>
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Page not found</h1>
      <p className="text-zinc-400 text-lg mb-8">The page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white rounded-full px-8 py-3 font-bold uppercase tracking-wide"
      >
        Back to Home
      </Link>
    </main>
  );
}

function Section({ children, eager }: { children: ReactNode; eager: boolean }) {
  return (
    <LazySection className="below-fold-section" forceVisible={eager}>
      {children}
    </LazySection>
  );
}

/** Which sections each page shows, in order. */
function PageSections({ pathname }: { pathname: string }) {
  // Sub-pages are short, so render them straight away
  const eager = pathname !== "/";
  const content = ROUTE_MAP[pathname]?.content;
  if (content) {
    return (
      <>
        <ContentPage page={content} />
        {content.kind !== "legal" && <Section eager><Contact /></Section>}
      </>
    );
  }
  switch (pathname) {
    case "/services":
      return (
        <>
          <Section eager={eager}><Services isPage /></Section>
          <Section eager={eager}><ServiceLinks /></Section>
          <Section eager={eager}><SecuritySection /></Section>
          <Section eager={eager}><FAQ /></Section>
          <Section eager={eager}><Contact /></Section>
        </>
      );
    case "/platforms":
      return (
        <>
          <Section eager={eager}><Platforms isPage /></Section>
          <Section eager={eager}><ServiceLinks /></Section>
          <Section eager={eager}><StatsCounter /></Section>
          <Section eager={eager}><Contact /></Section>
        </>
      );
    case "/portfolio":
      return (
        <>
          <Section eager={eager}><Portfolio isPage /></Section>
          <Section eager={eager}><Reviews /></Section>
          <Section eager={eager}><Contact /></Section>
        </>
      );
    case "/reviews":
      return (
        <>
          <Section eager={eager}><Reviews isPage /></Section>
          <Section eager={eager}><StatsCounter /></Section>
          <Section eager={eager}><Contact /></Section>
        </>
      );
    case "/blog":
      return <BlogIndex />;
    case "/contact":
      return (
        <>
          <Section eager={eager}><Contact isPage /></Section>
          <Section eager={eager}><FAQ /></Section>
        </>
      );
    default:
      // Homepage: everything
      return (
        <>
          <Section eager={eager}><Reviews /></Section>
          <Section eager={eager}><StatsCounter /></Section>
          <Section eager={eager}><Portfolio /></Section>
          <Section eager={eager}><Services /></Section>
          <Section eager={eager}><Platforms /></Section>
          <Section eager={eager}><SecuritySection /></Section>
          <Section eager={eager}><FAQ /></Section>
          <Section eager={eager}><Contact /></Section>
        </>
      );
  }
}

function PageContent() {
  const pathname = normalizePath(useLocation().pathname);
  const isKnownPage = pathname in ROUTE_MAP;
  usePageMeta(pathname);

  if (!isKnownPage) {
    return (
      <div className="min-h-screen w-full overflow-x-hidden bg-background">
        <Header />
        <ScrollToTop />
        <NotFound />
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-background">
      <Header />
      <ScrollToTop />
      <main className="w-full relative">
        {pathname === "/" && <Hero />}
        <Suspense fallback={<div className="min-h-screen" />}>
          <PageSections pathname={pathname} />
        </Suspense>
        <Suspense fallback={null}>
          <FloatingWhatsApp />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="*" element={<PageContent />} />
    </Routes>
  );
}