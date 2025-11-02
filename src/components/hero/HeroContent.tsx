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
      <div className={`max-w-[96%] md:max-w-[96%] lg:max-w-[96%] xl:max-w-[96%] mx-auto transition-all duration-500 ${showMainText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-left">
          <div className="font-headline text-5xl font-bold text-portfolio-text space-y-6">
            <p className="mb-6">
              YOU KNOW THAT NOTHING REPLACES REAL HUMAN CONNECTION.
            </p>
            
            <p className="mb-6">
              SINCE 1999, WE'VE HELPED BRANDS FIND MEANING IN CONSTANT CHANGE, WHERE DATA BRINGS CLARITY AND EMPATHY SHAPES RELATIONSHIPS.
            </p>

            <p className="mb-8">
              MODERN IS NOT ABOUT CHASING NEW, IT'S ABOUT MAKING NEW MAKE SENSE.
            </p>

            <div className="flex items-center gap-3 mt-16 md:mt-20">
              <div className={`w-12 h-12 md:w-16 md:h-16 flex-shrink-0 transition-all duration-300 ${showOneAgency ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <OptimizedImage
                  src="/images/uv_logo.webp"
                  alt="United Visions"
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
          </div>
        </div>
      </div>
    </div>
  );
};
