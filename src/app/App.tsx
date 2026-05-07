import { lazy, Suspense, useEffect, useRef, useState, type ReactNode } from "react";
import { Routes, Route, useLocation } from "react-router";

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";

// Lazy-load below-fold sections for faster initial paint
const StatsCounter = lazy(() => import("./components/StatsCounter").then(m => ({ default: m.StatsCounter })));
const Services = lazy(() => import("./components/Services").then(m => ({ default: m.Services })));
const Platforms = lazy(() => import("./components/Platforms").then(m => ({ default: m.Platforms })));
const SecuritySection = lazy(() => import("./components/SecuritySection").then(m => ({ default: m.SecuritySection })));
const Portfolio = lazy(() => import("./components/Portfolio").then(m => ({ default: m.Portfolio })));
const Reviews = lazy(() => import("./components/Reviews").then(m => ({ default: m.Reviews })));
const VideoReview = lazy(() => import("./components/VideoReview").then(m => ({ default: m.VideoReview })));
const Contact = lazy(() => import("./components/Contact").then(m => ({ default: m.Contact })));
const Footer = lazy(() => import("./components/Footer").then(m => ({ default: m.Footer })));

// Map URL paths to section element IDs
const ROUTE_SECTION_MAP: Record<string, string> = {
  '/': 'home',
  '/services': 'services',
  '/platforms': 'platforms',
  '/portfolio': 'portfolio',
  '/contact': 'contact',
  '/reviews': 'reviews',
  '/security': 'security',
};

/**
 * Watches the current route and scrolls to the matching section.
 * Uses retry logic to handle lazy-loaded sections that may not be in the DOM yet.
 */
function ScrollToSection() {
  const { pathname } = useLocation();

  useEffect(() => {
    const sectionId = ROUTE_SECTION_MAP[pathname];
    if (!sectionId) return;

    // For home/root, just scroll to top
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const headerOffset = 100;
    let findAttempts = 0;
    const maxFindAttempts = 50;
    let correctionAttempts = 0;
    const maxCorrections = 10;
    let timer: ReturnType<typeof setTimeout>;

    // Phase 1: Wait until the target element is in the DOM (lazy-loading)
    const waitForElement = () => {
      const element = document.getElementById(sectionId)
        || (sectionId === 'portfolio' ? document.getElementById('featured-work') : null);

      if (element) {
        // Element found — start scrolling with correction
        scrollWithCorrection(element);
        return;
      }

      findAttempts++;
      if (findAttempts < maxFindAttempts) {
        timer = setTimeout(waitForElement, 200);
      }
    };

    // Phase 2: Scroll to the element, then re-check position to handle
    // layout shifts from images/videos loading in sections above the target.
    const scrollWithCorrection = (element: HTMLElement) => {
      const rect = element.getBoundingClientRect();
      const distanceFromTarget = Math.abs(rect.top - headerOffset);

      // If we're within 10px of the correct position, we're done
      if (distanceFromTarget < 10 && correctionAttempts > 0) {
        return;
      }

      // Scroll to the calculated position
      const offsetPosition = rect.top + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });

      correctionAttempts++;
      if (correctionAttempts < maxCorrections) {
        // Re-check after a delay to catch layout shifts
        timer = setTimeout(() => scrollWithCorrection(element), 800);
      }
    };

    // Initial delay to let React start rendering lazy chunks
    timer = setTimeout(waitForElement, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [pathname]);

  return null;
}

// On mobile, defer rendering until the section is near the viewport
function LazySection({ children, className, forceVisible }: { children: ReactNode; className?: string; forceVisible?: boolean }) {
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
    // On desktop, or when forced by route navigation, render immediately
    if (!isMobile || forceVisible) {
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

function PageContent() {
  const { pathname } = useLocation();
  // When navigating directly to a section route (e.g. /contact),
  // force all lazy sections to render so the scroll target is in the DOM.
  const forceLoad = pathname !== '/';

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-background">
      <Header />
      <ScrollToSection />
      <main className="w-full relative">
        <Hero />
        <Suspense fallback={null}>
          <LazySection className="below-fold-section" forceVisible={forceLoad}>
            <StatsCounter />
          </LazySection>
          <LazySection className="below-fold-section" forceVisible={forceLoad}>
            <Portfolio />
          </LazySection>
          <LazySection className="below-fold-section" forceVisible={forceLoad}>
            <Services />
          </LazySection>
          <LazySection className="below-fold-section" forceVisible={forceLoad}>
            <Platforms />
          </LazySection>
          <LazySection className="below-fold-section" forceVisible={forceLoad}>
            <SecuritySection />
          </LazySection>
          <LazySection className="below-fold-section" forceVisible={forceLoad}>
            <VideoReview />
          </LazySection>
          <LazySection className="below-fold-section" forceVisible={forceLoad}>
            <Reviews />
          </LazySection>
          <LazySection className="below-fold-section" forceVisible={forceLoad}>
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

export default function App() {
  return (
    <Routes>
      <Route path="*" element={<PageContent />} />
    </Routes>
  );
}