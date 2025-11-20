import Hero from "../components/Hero";
import Highlights from "../components/Highlights";
import Portfolio from "../components/Portfolio";
import BrandCarousel from "../components/BrandCarousel";
import Footer from "../components/Footer";
import { SEO } from "../components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-portfolio-bg">
      <SEO pageType="home" />
      <div className="main-content">
        <Hero />
        <BrandCarousel />
        <Highlights />
        <Portfolio />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
