
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
        <div className="text-left mb-8">
          <h1 className="text-[clamp(2.5rem,8vw,6rem)] leading-[1.1] font-black text-portfolio-text max-w-5xl mx-auto">
            United Visions <span className="font-normal italic">es una</span> agencia creativa independiente. <span className="font-normal italic">Creamos</span> experiencias innovadoras <span className="font-normal italic">para</span> marcas audaces <span className="font-normal italic">en</span>
          </h1>
          <div className="flex flex-wrap gap-4 mt-8 max-w-5xl mx-auto">
            <span className="text-[#EBA3A9] text-[clamp(1.5rem,4vw,3rem)] font-bold">#marketing</span>
            <span className="text-portfolio-highlight text-[clamp(1.5rem,4vw,3rem)] font-bold">#branding</span>
            <span className="text-portfolio-accent text-[clamp(1.5rem,4vw,3rem)] font-bold">#digital</span>
            <span className="text-portfolio-muted-purple text-[clamp(1.5rem,4vw,3rem)] font-bold">#social&content</span>
            <span className="text-portfolio-text text-[clamp(1.5rem,2vw,1.5rem)] font-bold mt-2">.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
