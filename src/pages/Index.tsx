
import Navbar from "../components/Navbar";
import Highlights from "../components/Highlights";
import Portfolio from "../components/Portfolio";
import BrandCarousel from "../components/BrandCarousel";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-portfolio-bg">
      <Navbar />
      <Highlights />
      <Portfolio />
      <BrandCarousel />
      <Footer />
    </div>
  );
};

export default Index;
