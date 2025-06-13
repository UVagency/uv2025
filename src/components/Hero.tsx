import { HeroContent } from "./hero/HeroContent";
import { trackEvent, GA_EVENTS } from '@/lib/analytics';

const Hero = () => {
  const handleCtaClick = () => {
    trackEvent('CTA_CLICK', {
      location: 'hero',
      button_text: 'Contact Us' // or whatever your CTA text is
    });
  };

  return (
    <div className="relative bg-portfolio-bg overflow-hidden flex items-start mb-16 md:mb-24">
      <div className="max-w-[90%] mx-auto w-full pt-8 md:pt-12">
        {/* Main content */}
        <HeroContent />
        <button 
          onClick={handleCtaClick}
          className="cta-button"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Hero;