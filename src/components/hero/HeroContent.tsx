import { useState, useEffect } from "react";
import OptimizedImage from "@/components/ui/optimized-image";

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
    <div className="w-full flex flex-col justify-start pt-8 md:pt-10">
      <div className={`max-w-[95%] md:max-w-[95%] lg:max-w-[95%] xl:max-w-[95%] mx-auto transition-all duration-500 ${showMainText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-left">
          <h1 className="font-hero text-[clamp(1.5rem,2.5vw,2rem)] md:text-[clamp(1.75rem,3vw,2.5rem)] lg:text-[clamp(2rem,3.5vw,3rem)] leading-[1.4] text-portfolio-text">
            <div className="mb-6">
              <span className="font-normal">
                You know that nothing replaces real human connection.
              </span>
            </div>
            
            <div className="mb-6">
              <span className="font-normal">
                Since 1999, we've helped brands find meaning in constant change — where data brings clarity and empathy creates connection.
              </span>
            </div>

            <div className="mb-8">
              <span className="font-normal">
                Modern is not about chasing new — it's about making new make sense.
              </span>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <div className={`w-12 h-12 md:w-16 md:h-16 flex-shrink-0 transition-all duration-300 ${showOneAgency ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <OptimizedImage
                  src="/images/uv_logo.webp"
                  alt="UV Logo"
                  className="w-full h-full object-cover rounded-full"
                  wrapperClassName="rounded-full overflow-hidden"
                />
              </div>
              <button 
                onClick={handleInfoClick} 
                className={`transition-all duration-300 ${showOneAgency ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              >
                <strong><span className="text-portfolio-accent hover:underline">One agency, all in.</span></strong>
              </button>
            </div>
          </h1>
        </div>
      </div>
    </div>
  );
};
