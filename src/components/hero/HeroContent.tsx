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
      <div className={`max-w-[98%] md:max-w-[98%] lg:max-w-[98%] xl:max-w-[98%] mx-auto transition-all duration-500 ${showMainText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-left">
          <div className="font-headline text-2xl md:text-4xl lg:text-5xl font-bold text-portfolio-text space-y-6">
            <p className="mb-6">
              You know that nothing replaces real human connection.
            </p>

            <p className="mb-6">
              Since 1999, we've helped brands find meaning in constant change, bringing reason and feeling back together.
            </p>

            <p className="mb-8">
              Modern is not about chasing new, it's about making new make sense.
            </p>

            <div className="flex items-center gap-3 mt-16 md:mt-20">
              <div className={`w-12 h-12 md:w-16 md:h-16 flex-shrink-0 transition-all duration-300 ${showOneAgency ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <OptimizedImage
                  src="/images/uv_logo.webp"
                  alt="United Visions"
                  className="w-full h-full object-cover rounded-full"
                  wrapperClassName="rounded-full overflow-hidden"
                  priority={true}
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
