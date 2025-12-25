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
        <div className="md:col-span-7 lg:col-span-7 text-portfolio-text space-y-6">
          <h1 className="font-headline text-3xl md:text-5xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight max-w-[15em] lg:max-w-[20em]">
            <span className="whitespace-nowrap">Nothing replaces real</span> <br /> <span className="whitespace-nowrap">human connection.</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6">
            <div className="md:col-span-12 lg:col-span-12 space-y-6 max-w-lg">
              <p className="font-body text-xl md:text-2xl text-portfolio-text/80 font-normal leading-relaxed">
                Since 1999, we've helped brands find meaning in constant change, bringing reason and feeling back together.
              </p>

              <p className="font-body text-xl md:text-2xl text-portfolio-text/80 font-normal leading-relaxed">
                Modern isn't about chasing the new. It’s about making the new make sense.
              </p>

              <div className={`transition-all duration-300 ${showOneAgency ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <div className="font-bold text-lg md:text-xl mb-1 text-portfolio-text">United Visions</div>
                <strong><span className="text-portfolio-accent">One agency, all in.</span></strong>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Logo Section */}
        <div className="hidden md:flex md:col-span-5 lg:col-span-5 items-center justify-start lg:pl-0 relative -mt-8">
          <HeroLogo />
        </div>
      </div>
    </div>
  );
};
