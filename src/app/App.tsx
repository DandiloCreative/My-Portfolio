import { lazy, Suspense } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";

// Lazy-load below-fold sections for faster initial paint
const StatsCounter = lazy(() => import("./components/StatsCounter").then(m => ({ default: m.StatsCounter })));
const Services = lazy(() => import("./components/Services").then(m => ({ default: m.Services })));
const Platforms = lazy(() => import("./components/Platforms").then(m => ({ default: m.Platforms })));
const SecuritySection = lazy(() => import("./components/SecuritySection").then(m => ({ default: m.SecuritySection })));
const Portfolio = lazy(() => import("./components/Portfolio").then(m => ({ default: m.Portfolio })));
const Reviews = lazy(() => import("./components/Reviews").then(m => ({ default: m.Reviews })));
const Contact = lazy(() => import("./components/Contact").then(m => ({ default: m.Contact })));
const Footer = lazy(() => import("./components/Footer").then(m => ({ default: m.Footer })));

export default function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-background">
      <Header />
      <main className="w-full relative">
        <Hero />
        <Suspense fallback={null}>
          <StatsCounter />
          <Services />
          <Platforms />
          <SecuritySection />
          <Portfolio />
          <Reviews />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}