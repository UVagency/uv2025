import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const HeroContent = () => {
  const [showMainText, setShowMainText] = useState(false);
  const [showOneAgency, setShowOneAgency] = useState(false);

  const handleInfoClick = () => {
    // Dispatch a custom event that Navbar will listen to
    const event = new CustomEvent('toggleInfo');
    window.dispatchEvent(event);
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowMainText(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowOneAgency(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full flex flex-col justify-start pt-8 md:pt-12">
      <div className={`max-w-[100%] md:max-w-[85%] lg:max-w-[95%] xl:max-w-[85%] mx-auto transition-all duration-500 ${showMainText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-left">
          <h1 className="font-hero text-[clamp(1.725rem,3.45vw,2.875rem)] sm:text-[clamp(2.3rem,4.6vw,3.45rem)] md:text-[clamp(2.875rem,4.6vw,4.6rem)] lg:text-[clamp(3.45rem,4.6vw,5.75rem)] leading-[1.2] text-portfolio-text">
            <span>
              <span className="text-portfolio-accent font-bold">UV</span>
            </span>{" "}
            <span>
              <span className="font-normal italic">is the</span>
            </span>{" "}
            <span>
              <span className="font-normal italic">integrated</span>
            </span>{" "}
            <span>
              <span className="font-normal italic">marketing</span>
            </span>{" "}
            <span>
              <span className="font-normal italic">agency</span>
            </span>{" "}
            <span>
              <span className="font-normal italic">that grows</span>
            </span>{" "}
            <span>
              <span className="font-normal italic">your brand</span>
            </span>{" "}
            <span>
              <span className="font-normal italic">through</span>
            </span>{" "}
            <span>
              <span className="text-[#EBA3A9] italic hover:underline">Omnichannel</span>
            </span>{" "}
            <span>
              <span className="font-normal italic">campaigns, crafts</span>
            </span>{" "}
            <span>
              <span className="text-portfolio-muted-purple italic hover:underline">Events</span>
            </span>{" "}
            <span>
              <span className="font-normal italic">that move</span>
            </span>{" "}
            <span>
              <span className="font-normal italic">people to</span>
            </span>{" "}
            <span>
              <span className="font-normal italic"><u>create customers</u></span>
            </span>,{" "}
            <span>
              <span className="font-normal italic">and delivers</span>
            </span>{" "}
            <span>
              <span className="font-normal italic">results through</span>
            </span>{" "}
            <span>
              <Link to="/united-media" className="smart-media-text">Smart Media.</Link>
            </span>
            <div className="mt-2">
              <button 
                onClick={handleInfoClick} 
                className={`transition-all duration-300 ${showOneAgency ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              >
                <strong><span className="text-portfolio-accent italic hover:underline">One agency, all in.</span></strong>
              </button>
            </div>
          </h1>
        </div>
      </div>
    </div>
  );
};
