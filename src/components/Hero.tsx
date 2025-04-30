import { HeroContent } from "./hero/HeroContent";

const Hero = () => {
  return (
    <div className="relative bg-portfolio-bg overflow-hidden flex items-start mb-16 md:mb-24">
      <div className="max-w-[90%] mx-auto w-full pt-8 md:pt-12">
        {/* Main content */}
        <HeroContent />
      </div>
    </div>
  );
};

export default Hero;