import { HeroContent } from "./hero/HeroContent";

const Hero = () => {
  return (
    <div className="relative bg-portfolio-bg overflow-hidden flex items-start mb-8 md:mb-12">
      <div className="max-w-[90%] mx-auto w-full">
        {/* Main content */}
        <HeroContent />
      </div>
    </div>
  );
};

export default Hero;
