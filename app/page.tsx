import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Features from './components/Features';
import About from './components/About';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Portfolio />
      <Features />
      <About />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
