
import { HeroContent } from "./hero/HeroContent";

const Hero = () => {
  return (
    <div className="relative bg-portfolio-bg overflow-hidden min-h-[65vh] flex items-center mb-6">
      <div className="w-full max-w-[95%] mx-auto">
        {/* Main content */}
        <HeroContent />
      </div>
    </div>
  );
};

export default Hero;
