import { useState, useEffect } from "react";

export const HeroContent = () => {
  const [showMainText, setShowMainText] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "United Visions is the integrated marketing agency that champions your brand, campaigns that move people and create customers, media that drives results. One agency, all in.";
  const words = fullText.split(" ");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showHashtags, setShowHashtags] = useState(true);
  
  const handleInfoClick = () => {
    // Dispatch a custom event that Navbar will listen to
    const event = new CustomEvent('toggleInfo');
    window.dispatchEvent(event);
  };

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
    <div className="w-full flex flex-col justify-start pt-16 md:pt-20">
      <div className={`max-w-[95%] md:max-w-[85%] lg:max-w-[75%] xl:max-w-[70%] mx-auto transition-all duration-500 ${showMainText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-left">
          <h1 className="text-[clamp(2rem,4vw,3rem)] sm:text-[clamp(2.5rem,5vw,4rem)] md:text-[clamp(3rem,5vw,5rem)] lg:text-[clamp(4rem,5vw,6rem)] leading-[1.2] text-portfolio-text">
            <span className="text-portfolio-accent font-bold">UV</span>{" "}
            <span className="font-normal italic">is</span>{" "}
            <span className="font-normal italic">the integrated marketing agency that champions your brand through</span>{" "}
            <span className="text-[#EBA3A9] italic hover:underline">Omnichannel Campaigns</span>{", "}
            <span className="font-normal italic">designs</span>{" "}
            <span className="text-portfolio-muted-purple italic hover:underline"> Events</span>{" "}
            <span className="font-normal italic">that move people to</span>{" "}
            <span className="font-normal italic underline">create customers</span>{", "}
            <span className="font-normal italic">and drives results through</span>{" "}
            <span className="text-portfolio-highlight italic hover:underline">Smart Media</span>{"."}
            <br className="hidden md:block" />
            <button onClick={handleInfoClick} className="text-portfolio-accent font-bold hover:underline inline-block mt-2 md:mt-0">
              <span className="text-portfolio-accent italic hover:underline">One agency, all in.</span>
            </button>
            
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
