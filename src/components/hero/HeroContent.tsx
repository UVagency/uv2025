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
    <div className="w-full min-h-[calc(100vh-4rem)] flex flex-col justify-center">
      <div className={`transition-all duration-500 ${showMainText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-left">
          <h1 className="text-[clamp(5rem,6vw,4.5rem)] leading-[1.2] text-portfolio-text">
            <span className="text-portfolio-accent font-bold">UV</span>{" "}          
            <span className="font-normal italic">is</span>{" "}
            <span className="font-normal italic">the integrated marketing agency</span>{". "}
            <span className="text-[#EBA3A9] italic hover:underline">Advertising</span>{" "}
            <span className="font-normal italic">that champions your brand</span>{", "}
            <span className="text-portfolio-muted-purple italic hover:underline">campaigns</span>{" "}
            <span className="font-normal italic">that move people and</span>{" "}
            <span className="font-normal italic underline">create customers</span>{". "}
            <span className="text-portfolio-highlight italic hover:underline">Media</span>{" "}
            <span className="font-normal italic">that drives results</span>{". "}
            <br />
            <Link to="/about" className="text-portfolio-accent font-bold hover:underline">
              <span className="text-portfolio-accent italic hover:underline">One agency, all in.</span>
            </Link>
            
            {/*showHashtags && (
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
            {!showHashtags && <span className="animate-pulse">|</span>*/}
          </h1>
        </div>
      </div>
    </div>
  );
};
