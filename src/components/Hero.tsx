
import { HeroContent } from "./hero/HeroContent";
import { ScrollIndicator } from "./hero/ScrollIndicator";

const Hero = () => {
  return (
    <div className="relative bg-portfolio-bg overflow-hidden min-h-[65vh] flex items-center mb-6">
      {/* Main content */}
      <HeroContent />

      {/* Scroll indicator */}
      <ScrollIndicator />
    </div>
  );
};

export default Hero;
