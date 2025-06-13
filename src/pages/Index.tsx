import Hero from "../components/Hero";
import Highlights from "../components/Highlights";
import Portfolio from "../components/Portfolio";
import BrandCarousel from "../components/BrandCarousel";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-[100dvh] bg-portfolio-bg">
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
