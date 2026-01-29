import { useState, useEffect } from "react";
import OptimizedImage from "@/components/ui/optimized-image";
import { HeroLogo } from "./HeroLogo";
import { useTranslation } from 'react-i18next';

export const HeroContent = () => {
  const { t } = useTranslation();
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

    <div className="w-full flex flex-col justify-start pt-4 md:pt-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6">
        <div className="md:col-span-7 lg:col-span-7 text-portfolio-text space-y-6 hero-text-container">
          <h1 className="font-headline text-3xl md:text-5xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight max-w-[15em] lg:max-w-[20em]">
            <span className="whitespace-nowrap">
              {t('hero.titlePart1')}
            </span> <br /> <span className="whitespace-nowrap"><span className="brush-underline">{t('hero.titlePart2')}</span></span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6">
            <div className="md:col-span-12 lg:col-span-12 space-y-6 max-w-lg">
              <p className="font-body text-xl md:text-2xl text-portfolio-text/80 font-normal leading-relaxed">
                {t('hero.description1')}
              </p>

              <p className="font-body text-xl md:text-2xl text-portfolio-text/80 font-normal leading-relaxed">
                {t('hero.description2Part1')}<br />
                {t('hero.description2Part2')}
              </p>

              <div className={`transition-all duration-300 ${showOneAgency ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <div className="font-bold text-lg md:text-xl mb-1 text-portfolio-text">{t('hero.unitedVisions')}</div>
                <strong><span className="text-portfolio-accent">{t('hero.tagline')}</span></strong>
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
