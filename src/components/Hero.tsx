import { HeroContent } from "./hero/HeroContent";
import { HeroBackground } from "./hero/HeroBackground";
import { HeroVideoBackground } from "./hero/HeroVideoBackground";
import BrandCarousel from "./BrandCarousel";
import { useIsMobile } from "@/hooks/use-mobile";

const HERO_VIDEO_URL = "https://vimeo.com/1158913129";

const Hero = () => {
  const isMobile = useIsMobile();

  return (
    <div className="relative bg-portfolio-bg overflow-hidden flex flex-col items-start mb-0 min-h-fit">
      {/* Video background - desktop only */}
      {!isMobile && <HeroVideoBackground videoUrl={HERO_VIDEO_URL} />}

      {/* Dot grid overlay */}
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