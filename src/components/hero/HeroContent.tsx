
import { useState, useEffect } from "react";

export const HeroContent = () => {
  const [showMainText, setShowMainText] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "United Visions es una agencia creativa independiente. Creamos experiencias innovadoras para marcas audaces en";
  const words = fullText.split(" ");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => setShowMainText(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!showMainText) return;
    
    if (currentWordIndex < words.length) {
      const timer = setTimeout(() => {
        setTypedText(prev => prev + (prev ? " " : "") + words[currentWordIndex]);
        setCurrentWordIndex(currentWordIndex + 1);
      }, 80); // Speed of typing animation
      
      return () => clearTimeout(timer);
    }
  }, [currentWordIndex, showMainText, words]);

  return (
    <div className="max-w-[90%] mx-auto z-10 relative py-10">
      <div className={`transition-all duration-500 ${showMainText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-left mb-8">
          <h1 className="text-[clamp(2rem,5vw,3.5rem)] leading-[1.2] font-black text-portfolio-text max-w-5xl mx-auto min-h-[6rem]">
            {typedText}
            <span className="animate-pulse">|</span>
          </h1>
          <div className={`flex flex-wrap gap-4 mt-6 max-w-5xl mx-auto ${currentWordIndex >= words.length ? 'animate-fade-in' : 'opacity-0'}`}>
            <span className="text-[#EBA3A9] text-[clamp(1.2rem,2.5vw,2rem)] font-bold">#marketing</span>
            <span className="text-portfolio-highlight text-[clamp(1.2rem,2.5vw,2rem)] font-bold">#branding</span>
            <span className="text-portfolio-accent text-[clamp(1.2rem,2.5vw,2rem)] font-bold">#digital</span>
            <span className="text-portfolio-muted-purple text-[clamp(1.2rem,2.5vw,2rem)] font-bold">#social&content</span>
            <span className="text-portfolio-text text-[clamp(1rem,1.5vw,1.2rem)] font-bold mt-1">.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
