import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Platforms } from "./components/Platforms";
import { Portfolio } from "./components/Portfolio";
import { Reviews } from "./components/Reviews";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { StatsCounter } from "./components/StatsCounter";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <StatsCounter />
        <Services />
        <Platforms />
        <Portfolio />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}