import { useState, useEffect } from "react";
import OptimizedImage from "@/components/ui/optimized-image";
import { HeroLogo } from "./HeroLogo";

export const HeroContent = () => {
  const [showMainText, setShowMainText] = useState(false);
  const [showOneAgency, setShowOneAgency] = useState(false);



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
      <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6">
        <div className="md:col-span-10 lg:col-span-9 text-portfolio-text space-y-6">
          <h1 className="font-headline text-3xl md:text-5xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
            You know that nothing replaces real human connection.
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6">
            <div className="md:col-span-10 lg:col-span-8 space-y-6">
              <p className="font-body text-xl md:text-2xl text-portfolio-text/80 font-normal leading-relaxed">
                Since 1999, we've helped brands find meaning in constant change, bringing reason and feeling back together.
              </p>

              <p className="font-body text-xl md:text-2xl text-portfolio-text/80 font-normal leading-relaxed">
                Modern is not about chasing new, it's about making new make sense.
              </p>

              <div className={`transition-all duration-300 ${showOneAgency ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <div className="font-bold text-lg md:text-xl mb-1 text-portfolio-text">United Visions</div>
                <strong><span className="text-portfolio-accent">One agency, all in.</span></strong>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Logo Section */}
        <div className="hidden md:flex md:col-span-2 lg:col-span-3 items-center justify-center relative -mt-8">
          <HeroLogo />
        </div>
      </div>
    </div>
  );
};
