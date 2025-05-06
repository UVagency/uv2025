import { useState, useEffect } from "react";

export const HeroContent = () => {
  const [showMainText, setShowMainText] = useState(false);
  const [showPhrases, setShowPhrases] = useState({
    uv: false,
    omnichannel: false,
    events: false,
    smartMedia: false,
    oneAgency: false
  });

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

    const phraseTimers = {
      uv: 500,
      omnichannel: 1500,
      events: 2500,
      smartMedia: 3500,
      oneAgency: 4500
    };

    Object.entries(phraseTimers).forEach(([phrase, delay]) => {
      setTimeout(() => {
        setShowPhrases(prev => ({ ...prev, [phrase]: true }));
      }, delay);
    });
  }, [showMainText]);

  return (
    <div className="w-full flex flex-col justify-start pt-16 md:pt-20">
      <div className={`max-w-[95%] md:max-w-[85%] lg:max-w-[75%] xl:max-w-[70%] mx-auto transition-all duration-500 ${showMainText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-left">
          <h1 className="text-[clamp(2rem,4vw,3rem)] sm:text-[clamp(2.5rem,5vw,4rem)] md:text-[clamp(3rem,5vw,5rem)] lg:text-[clamp(4rem,5vw,6rem)] leading-[1.2] text-portfolio-text">
            <span className={`transition-all duration-500 ${showPhrases.uv ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <span className="text-portfolio-accent font-bold">UV</span>
            </span>{" "}
            <span className="font-normal italic">is the integrated marketing agency that champions your brand through</span>{" "}
            <span className={`transition-all duration-500 ${showPhrases.omnichannel ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <span className="text-[#EBA3A9] italic hover:underline">Omnichannel Campaigns</span>
            </span>{", "}
            <span className="font-normal italic">designs</span>{" "}
            <span className={`transition-all duration-500 ${showPhrases.events ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <span className="text-portfolio-muted-purple italic hover:underline">Events</span>
            </span>{" "}
            <span className="font-normal italic">that move people to create customers, and drives results through</span>{" "}
            <span className={`transition-all duration-500 ${showPhrases.smartMedia ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <span className="text-portfolio-highlight italic hover:underline">Smart Media</span>
            </span>{"."}
            <button 
              onClick={handleInfoClick} 
              className={`transition-all duration-500 ${showPhrases.oneAgency ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
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
