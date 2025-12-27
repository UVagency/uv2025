import { HeroContent } from "./hero/HeroContent";
import { HeroBackground } from "./hero/HeroBackground";
import BrandCarousel from "./BrandCarousel";
import { trackEvent, GA_EVENTS } from '@/lib/analytics';

const Hero = () => {
  const handleCtaClick = () => { };

  return (
    <div className="relative bg-portfolio-bg overflow-hidden flex flex-col items-start mb-0 min-h-fit">
      <HeroBackground />
      <div className="max-w-[90%] mx-auto w-full pt-4 md:pt-12 relative z-10">
        {/* Main content */}
        <HeroContent />
      </div>
      <div className="w-full relative z-10">
        <BrandCarousel />
      </div>
    </div>
  );
};

export default Hero;