
import { useState, useEffect } from "react";

export const HeroContent = () => {
  const [showMainText, setShowMainText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowMainText(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="max-w-[90%] mx-auto z-10 relative">
      <div className={`transition-all duration-700 ${showMainText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-8">
          <div className="inline-block bg-portfolio-tag-bg text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
            Driving business growth through creativity, media, and phygital innovation
          </div>
          <h1 className="text-[clamp(3rem,14vw,10rem)] leading-[0.9] font-black text-portfolio-highlight mx-auto">
            United<br />Visions
          </h1>
          <p className="text-xl md:text-2xl text-portfolio-text-secondary max-w-2xl mx-auto mt-8 mb-6">
            (The integrated marketing agency)
          </p>
        </div>
      </div>
    </div>
  );
};
