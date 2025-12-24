import { HeroContent } from "./hero/HeroContent";
import { HeroBackground } from "./hero/HeroBackground";
import { trackEvent, GA_EVENTS } from '@/lib/analytics';

const Hero = () => {
  const handleCtaClick = () => { };

  return (
    <div className="relative bg-portfolio-bg overflow-hidden flex items-start mb-8 md:mb-12 min-h-fit">
      <HeroBackground />
      <div className="max-w-[90%] mx-auto w-full pt-8 md:pt-12 relative z-10">
        {/* Main content */}
        <HeroContent />
      </div>
    </div>
  );
};

export default Hero;