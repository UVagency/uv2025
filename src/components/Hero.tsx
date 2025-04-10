import { HeroContent } from "./hero/HeroContent";

const Hero = () => {
  return (
    <div className="relative bg-portfolio-bg overflow-hidden min-h-screen flex items-center mb-6">
      <div className="max-w-[90%] mx-auto px-6 w-full">
        {/* Main content */}
        <HeroContent />
      </div>
    </div>
  );
};

export default Hero;
