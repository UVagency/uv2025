
import { HeroBackgroundAnimations } from "./hero/HeroBackgroundAnimations";
import { HeroContent } from "./hero/HeroContent";
import { ScrollIndicator } from "./hero/ScrollIndicator";

const Hero = () => {
  return (
    <div className="relative bg-portfolio-bg overflow-hidden min-h-[85vh] flex items-center">
      {/* Background elements */}
      <HeroBackgroundAnimations />

      {/* Main content */}
      <HeroContent />

      {/* Scroll indicator */}
      <ScrollIndicator />
    </div>
  );
};

export default Hero;
