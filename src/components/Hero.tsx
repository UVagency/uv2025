
import { HeroContent } from "./hero/HeroContent";

const Hero = () => {
  return (
    <div className="relative bg-portfolio-bg overflow-hidden min-h-[65vh] flex items-center mb-6">
      {/* Main content */}
      <HeroContent />
    </div>
  );
};

export default Hero;
