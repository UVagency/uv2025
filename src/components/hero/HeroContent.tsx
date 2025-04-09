import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BreathingUVLogo from "./BreathingUVLogo";

export const HeroContent = () => {
  const [showMainText, setShowMainText] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "United Visions es una agencia creativa independiente. Creamos experiencias innovadoras para marcas audaces en";
  const words = fullText.split(" ");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showHashtags, setShowHashtags] = useState(false);
  
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
      }, 80);
      
      return () => clearTimeout(timer);
    } else {
      setShowHashtags(true);
    }
  }, [currentWordIndex, showMainText, words]);

  return (
    <div className="w-full">
      <div className={`transition-all duration-500 ${showMainText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-left">
          <h1 className="text-[clamp(2rem,5vw,3.5rem)] leading-[1.2] text-portfolio-text">
            <BreathingUVLogo />{" "}
            <span className="font-normal italic">is</span>{" "}
            <span className="font-black">the integrated marketing agency</span>{" "}
            <span className="font-normal italic">Advertising that</span>{" "}
            <span className="font-black">champions your brand</span>{". "}
            <span className="font-normal italic">Campaigns that move people and</span>{" "}
            <span className="font-black">create customers</span>{". "}
            <span className="font-normal italic">Media that</span>{" "}
            <span className="font-black">drives results</span>{". "}
            <span className="font-normal italic">One agency, all in.</span>
            {showHashtags && (
              <>
                {" "}
                <Link to="/services/marketing" className="text-[#EBA3A9] font-bold hover:underline">
                  #marketing
                </Link>
                <span>,</span>{" "}
                <Link to="/services/branding" className="text-portfolio-highlight font-bold hover:underline">
                  #branding
                </Link>
                <span>,</span>{" "}
                <Link to="/services/digital" className="text-portfolio-accent font-bold hover:underline">
                  #digital
                </Link>
                <span>,</span>{" "}
                <Link to="/services/social" className="text-portfolio-muted-purple font-bold hover:underline">
                  #social&content
                </Link>
                <span>.</span>
              </>
            )}
            {!showHashtags && <span className="animate-pulse">|</span>}
          </h1>
        </div>
      </div>
    </div>
  );
};
