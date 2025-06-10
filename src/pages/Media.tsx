import React, { Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';
import Footer from '../components/Footer';
import { SEO } from '../components/SEO';
import { CompanyVideo, CompanyValues, CompanyAwards } from '../components/lazy';

// Loading component for lazy-loaded sections
const SectionLoading = () => (
  <div className="animate-pulse">
    <div className="h-8 bg-portfolio-text/10 rounded w-1/3 mb-4"></div>
    <div className="space-y-3">
      <div className="h-4 bg-portfolio-text/10 rounded w-3/4"></div>
      <div className="h-4 bg-portfolio-text/10 rounded w-5/6"></div>
      <div className="h-4 bg-portfolio-text/10 rounded w-2/3"></div>
    </div>
  </div>
);

const UnitedMedia = () => {
  const navigate = useNavigate();
  
  const handleClose = () => {
    navigate('/');
  };

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Datos de ejemplo, idealmente vendrían de un CMS o archivo de datos
  const mediaInfo = {
    name: "UnitedMedia",
    year: "2023",
    tagline: "Conectamos digitalmente marcas con personas",
    description: "Nuestro servicio de UnitedMedia está diseñado para potenciar sus resultados de negocio de forma escalable, eficaz y eficiente. Llegamos a clientes verdaderamente relevantes potenciando la visibilidad de su marca, producto o evento por medio de Programmatic y Digital PR.",
    history: "Desde 2011 colaboramos con los líderes y los equipos de las principales marcas globales para ayudarlos a cumplir sus objetivos y desafíos de crecimiento entendiendo el comportamiento de sus clientes y conectándolos con ellos.",
    videoRecapUrl: "https://player.vimeo.com/video/123456789?color=EBA3A9&title=0&byline=0&portrait=0", // Placeholder video
    categories: ["Media", "Digital"],
    client: "Servicio de UnitedMedia",
  };

  const values = [
    { name: "Targeted Branding", description: "Llega a clientes verdaderamente relevantes potenciando la visibilidad de su marca, producto o evento por medio de Programmatic y Digital PR." },
    { name: "SXO", description: "Potencia la performance y el ROI del canal Google Search por medio de una estrategia integrada entre SEO y SEM." },
    { name: "Conversion Boost", description: "Máximiza el ROI y su tasa de conversión mejorando la toma de decisiones por medio de experimentación y datos con CRO y Data analytics." },
  ];

  const awards = [
    { name: "New York Festival", detail: "Bronze" },
    { name: "Cannes Lions", detail: "Shortlist ×2" },
    { name: "Web Awards", detail: "Gold" },
    { name: "Lápiz de Oro", detail: "Silver ×3" },
    { name: "Diente", detail: "Silver, Bronze" },
    { name: "IAB", detail: "Gold ×3" },
    { name: "Prix Ars Electrónica", detail: "Honorable Mention" },
    { name: "El Ojo de Iberoamérica", detail: "Bronze" },
    { name: "Amauta", detail: "Silver ×2, Bronze" },
    { name: "FePI Festival", detail: "Silver" },
    { name: "FIP Iberoamérica", detail: "Grand Prix, Gold ×5" },
    { name: "AMDIA", detail: "Silver ×2, Bronze ×3" }
  ];
  
  return (
    <div className="min-h-screen bg-portfolio-bg">
      <SEO 
        title="UnitedMedia | UV Agency"
        description="Learn about UV Agency's UnitedMedia service, designed to connect brands with people digitally."
        pageType="company"
      />
      <div className="fixed inset-0 z-50 bg-portfolio-bg overflow-y-auto">
        <div className="w-full mx-auto pt-8 pb-16">
          {/* Header Section */}
          <div className="max-w-[90%] mx-auto">
            <div className="border-b border-portfolio-divider pb-6 mb-8">
              <div className="flex items-center gap-4 flex-wrap">
                <button 
                  onClick={handleClose}
                  className="w-10 h-10 rounded-full bg-transparent border border-portfolio-text flex items-center justify-center text-portfolio-text hover:bg-portfolio-text hover:text-portfolio-bg transition-colors"
                >
                  <X size={18} />
                </button>
                
                <h1 className="text-7xl font-bold text-portfolio-text">{mediaInfo.name}</h1>
                
                <span className="project-year-tag text-base px-6 py-2 rounded-full bg-portfolio-tag-bg text-portfolio-tag-text">
                  {mediaInfo.year}
                </span>
                  
                {mediaInfo.categories.map((category) => (
                  <span key={category} className="project-category-tag text-base px-6 py-2 border rounded-full">
                    {category}
                  </span>
                ))}
              </div>
              
              <p className="text-4xl text-portfolio-text/90 font-light leading-tight max-w-4xl mt-6">
                {mediaInfo.tagline}
              </p>
              
              <div className="mt-6 flex flex-wrap gap-4">
                <div className="text-portfolio-text/70">
                  <span className="font-semibold">Type:</span> {mediaInfo.client}
                </div>
              </div>
            </div>

            {/* Video Section */}
            <Suspense fallback={<SectionLoading />}>
              <CompanyVideo videoUrl={mediaInfo.videoRecapUrl} />
            </Suspense>

            {/* History Section */}
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-portfolio-text mb-4">Our Story</h2>
              <div className="text-2xl text-portfolio-text/80 font-light whitespace-pre-line">
                {mediaInfo.history}
              </div>
            </div>

            {/* Description Section */}
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-portfolio-text mb-4">About Us</h2>
              <div className="text-2xl text-portfolio-text/80 font-light whitespace-pre-line">
                {mediaInfo.description}
              </div>
            </div>

            {/* Values Section */}
            <Suspense fallback={<SectionLoading />}>
              <CompanyValues values={values} />
            </Suspense>

            {/* Awards Section */}
            <Suspense fallback={<SectionLoading />}>
              <CompanyAwards awards={awards} />
            </Suspense>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default UnitedMedia; 