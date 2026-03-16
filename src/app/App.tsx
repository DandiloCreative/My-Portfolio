import { lazy, Suspense, useEffect, useRef, useState, type ReactNode } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";

// Lazy-load below-fold sections for faster initial paint
const StatsCounter = lazy(() => import("./components/StatsCounter").then(m => ({ default: m.StatsCounter })));
const Services = lazy(() => import("./components/Services").then(m => ({ default: m.Services })));
const Platforms = lazy(() => import("./components/Platforms").then(m => ({ default: m.Platforms })));
const SecuritySection = lazy(() => import("./components/SecuritySection").then(m => ({ default: m.SecuritySection })));
const Portfolio = lazy(() => import("./components/Portfolio").then(m => ({ default: m.Portfolio })));
const Contact = lazy(() => import("./components/Contact").then(m => ({ default: m.Contact })));
const Footer = lazy(() => import("./components/Footer").then(m => ({ default: m.Footer })));

// On mobile, defer rendering until the section is near the viewport
function LazySection({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    // On desktop, render immediately
    if (!isMobile) {
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
  }, [isMobile]);

  return (
    <div ref={ref} className={className}>
      {visible ? children : <div style={{ minHeight: 200 }} />}
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-background">
      <Header />
      <main className="w-full relative">
        <Hero />
        <Suspense fallback={null}>
          <LazySection className="below-fold-section">
            <StatsCounter />
          </LazySection>
          <LazySection className="below-fold-section">
            <Portfolio />
          </LazySection>
          <LazySection className="below-fold-section">
            <Services />
          </LazySection>
          <LazySection className="below-fold-section">
            <Platforms />
          </LazySection>
          <LazySection className="below-fold-section">
            <SecuritySection />
          </LazySection>
          <LazySection className="below-fold-section">
            <Contact />
          </LazySection>
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}