import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { X } from 'lucide-react';
import Footer from '../components/Footer';
import { SEO } from '../components/SEO';
import { Button } from "@/components/ui/button";
import BrandCarousel from "../components/BrandCarousel";
import CompanyVideo from "../components/company/CompanyVideo";
import EventsMethodWheel from "../components/company/EventsMethodWheel";

const Events = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleClose = useCallback(() => {
    navigate('/');
  }, [navigate]);

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleClose]);

  const [activeMethod, setActiveMethod] = React.useState<'strategy' | 'conceptualization' | 'execution' | 'measurement'>('strategy');

  const getMethodView = (method: string) => ({
    eyebrow: t(`events.methodViews.${method}.eyebrow`),
    title: t(`events.methodViews.${method}.title`),
    body: t(`events.methodViews.${method}.body`),
  });

  const eventInfo = {
    videoRecapUrl: "https://vimeo.com/1138099986",
  };

  return (
    <div className="min-h-screen bg-portfolio-bg">
      <SEO
        title={t('events.pageTitle')}
        description={t('events.metaDescription')}
        url="/events"
        pageType="company"
        type="website"
      />
      <Helmet>
        <meta property="og:url" content="https://www.uv.agency/events" />
        <link rel="canonical" href="https://www.uv.agency/events" />
      </Helmet>

      <div className="fixed inset-0 z-50 bg-portfolio-bg overflow-y-auto">
        <div className="w-full mx-auto pt-8 pb-16">
          <div className="max-w-[95%] sm:max-w-[90%] mx-auto">
            {/* Header / Hero */}
            <div className="border-b border-portfolio-divider pb-4 sm:pb-6 mb-6 sm:mb-10">
              <div className="w-full flex flex-col items-start text-left">
                <div className="inline-flex flex-wrap items-center gap-2 sm:gap-4 mb-2 sm:mb-0">
                  <button
                    onClick={handleClose}
                    aria-label="Close"
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-transparent border border-portfolio-text flex items-center justify-center text-portfolio-text hover:bg-portfolio-text hover:text-portfolio-bg transition-colors"
                  >
                    <X size={16} className="sm:w-5 sm:h-5" />
                  </button>
                  <h1 className="text-2xl sm:text-4xl md:text-7xl font-bold text-portfolio-text leading-tight break-words max-w-[90vw] sm:max-w-full">
                    {t('events.title')}
                  </h1>
                  <span className="project-year-tag text-xs sm:text-base px-3 sm:px-6 py-1 sm:py-2 rounded-full bg-portfolio-tag-bg text-portfolio-tag-text">
                    {t('events.liveExperiences')}
                  </span>
                  <span className="project-category-tag text-xs sm:text-base px-3 sm:px-6 py-1 sm:py-2 border rounded-full">
                    {t('events.brandExperiences')}
                  </span>
                  <span className="project-category-tag text-xs sm:text-base px-3 sm:px-6 py-1 sm:py-2 border rounded-full">
                    {t('events.physicalActivation')}
                  </span>
                </div>
                <p className="w-full max-w-[95vw] sm:max-w-full mx-auto text-base sm:text-2xl md:text-4xl text-portfolio-text/90 font-light leading-tight mt-3 sm:mt-6 text-left">
                  {t('events.tagline')}
                </p>
                <div className="mt-4 sm:mt-6 flex flex-wrap gap-2 sm:gap-4 justify-start">
                  <div className="text-portfolio-text/70 text-xs sm:text-base">
                    <span className="font-semibold">{t('events.description')}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Recap Section */}
            <section className="mb-10 sm:mb-16">
              <CompanyVideo videoUrl={eventInfo.videoRecapUrl} />
            </section>

            {/* The UX Method */}
            <section className="mb-10 sm:mb-16">
              <div className="grid gap-8 lg:gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,2fr)] items-center">
                <div>
                  <EventsMethodWheel
                    activeSegmentId={activeMethod}
                    onSegmentChange={setActiveMethod}
                  />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-portfolio-text mb-3 sm:mb-4">
                    {t('events.theUXMethod')}
                  </h2>
                  {/* Contenido dinámico con altura mínima fija para evitar saltos */}
                  <div className="min-h-[220px] sm:min-h-[250px] md:min-h-[260px]">
                    <p className="text-xs sm:text-sm uppercase tracking-[0.16em] text-portfolio-text/70 mb-3">
                      {getMethodView(activeMethod).eyebrow}
                    </p>
                    <h3 className="text-lg sm:text-2xl md:text-3xl font-semibold text-portfolio-text mb-3">
                      {getMethodView(activeMethod).title}
                    </h3>
                    <p className="text-base sm:text-lg text-portfolio-text/80 max-w-3xl">
                      {getMethodView(activeMethod).body}
                    </p>
                  </div>
                  <div className="mt-6 text-sm sm:text-base text-portfolio-text">
                    <div className="inline-flex flex-wrap gap-x-8 gap-y-2 font-semibold">
                      <span>{t('events.strategicPlanning')}</span>
                      <span>{t('events.flawlessExecution')}</span>
                      <span>{t('events.measurableImpact')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Event Capabilities */}
            <section className="mb-10 sm:mb-16">
              <div className="grid gap-8 lg:gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,2fr)] items-start">
                {/* Título grande a la izquierda */}
                <div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-portfolio-text leading-tight">
                    {t('events.eventCapabilities')}
                  </h2>
                </div>

                {/* Listado de capacidades a la derecha */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6 text-sm sm:text-base">
                  {/* Brand Activations */}
                  <div>
                    <p className="uppercase tracking-[0.14em] text-portfolio-text font-semibold mb-1">
                      {t('events.capabilities.brandActivations.title')}
                    </p>
                    <p className="text-portfolio-text/80 flex flex-wrap gap-x-3 gap-y-1">
                      {(t('events.capabilities.brandActivations.items', { returnObjects: true }) as string[]).map((item, idx) => (
                        <span key={idx}>{item}</span>
                      ))}
                    </p>
                  </div>

                  {/* Event Production */}
                  <div>
                    <p className="uppercase tracking-[0.14em] text-portfolio-text font-semibold mb-1">
                      {t('events.capabilities.eventProduction.title')}
                    </p>
                    <p className="text-portfolio-text/80 flex flex-wrap gap-x-3 gap-y-1">
                      {(t('events.capabilities.eventProduction.items', { returnObjects: true }) as string[]).map((item, idx) => (
                        <span key={idx}>{item}</span>
                      ))}
                    </p>
                  </div>

                  {/* Live Experiences */}
                  <div>
                    <p className="uppercase tracking-[0.14em] text-portfolio-text font-semibold mb-1">
                      {t('events.capabilities.liveExperiences.title')}
                    </p>
                    <p className="text-portfolio-text/80 flex flex-wrap gap-x-3 gap-y-1">
                      {(t('events.capabilities.liveExperiences.items', { returnObjects: true }) as string[]).map((item, idx) => (
                        <span key={idx}>{item}</span>
                      ))}
                    </p>
                  </div>

                  {/* Experiential Marketing */}
                  <div>
                    <p className="uppercase tracking-[0.14em] text-portfolio-text font-semibold mb-1">
                      {t('events.capabilities.experientialMarketing.title')}
                    </p>
                    <p className="text-portfolio-text/80 flex flex-wrap gap-x-3 gap-y-1">
                      {(t('events.capabilities.experientialMarketing.items', { returnObjects: true }) as string[]).map((item, idx) => (
                        <span key={idx}>{item}</span>
                      ))}
                    </p>
                  </div>

                  {/* Venue & Logistics */}
                  <div>
                    <p className="uppercase tracking-[0.14em] text-portfolio-text font-semibold mb-1">
                      {t('events.capabilities.venueLogistics.title')}
                    </p>
                    <p className="text-portfolio-text/80 flex flex-wrap gap-x-3 gap-y-1">
                      {(t('events.capabilities.venueLogistics.items', { returnObjects: true }) as string[]).map((item, idx) => (
                        <span key={idx}>{item}</span>
                      ))}
                    </p>
                  </div>

                  {/* Technical Production */}
                  <div>
                    <p className="uppercase tracking-[0.14em] text-portfolio-text font-semibold mb-1">
                      {t('events.capabilities.technicalProduction.title')}
                    </p>
                    <p className="text-portfolio-text/80 flex flex-wrap gap-x-3 gap-y-1">
                      {(t('events.capabilities.technicalProduction.items', { returnObjects: true }) as string[]).map((item, idx) => (
                        <span key={idx}>{item}</span>
                      ))}
                    </p>
                  </div>

                  {/* Content & Creative */}
                  <div>
                    <p className="uppercase tracking-[0.14em] text-portfolio-text font-semibold mb-1">
                      {t('events.capabilities.contentCreative.title')}
                    </p>
                    <p className="text-portfolio-text/80 flex flex-wrap gap-x-3 gap-y-1">
                      {(t('events.capabilities.contentCreative.items', { returnObjects: true }) as string[]).map((item, idx) => (
                        <span key={idx}>{item}</span>
                      ))}
                    </p>
                  </div>

                  {/* Measurement & Analytics */}
                  <div>
                    <p className="uppercase tracking-[0.14em] text-portfolio-text font-semibold mb-1">
                      {t('events.capabilities.measurementAnalytics.title')}
                    </p>
                    <p className="text-portfolio-text/80 flex flex-wrap gap-x-3 gap-y-1">
                      {(t('events.capabilities.measurementAnalytics.items', { returnObjects: true }) as string[]).map((item, idx) => (
                        <span key={idx}>{item}</span>
                      ))}
                    </p>
                  </div>

                  {/* Specialties */}
                  <div>
                    <p className="uppercase tracking-[0.14em] text-portfolio-text font-semibold mb-1">
                      {t('events.capabilities.specialties.title')}
                    </p>
                    <p className="text-portfolio-text/80 flex flex-wrap gap-x-3 gap-y-1">
                      {(t('events.capabilities.specialties.items', { returnObjects: true }) as string[]).map((item, idx) => (
                        <span key={idx}>{item}</span>
                      ))}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Clients Section */}
            <section className="mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-portfolio-text mb-3 sm:mb-4">
                {t('events.clientsTitle')}
              </h2>
              <p className="text-base sm:text-lg text-portfolio-text/80 mb-6 max-w-5xl">
                {t('events.clientsDescription')}
              </p>
              {/* Reutilizamos el carrusel de marcas de la home */}
              <div className="-mx-[5%] sm:-mx-[10%]">
                <BrandCarousel />
              </div>
            </section>

            {/* Testimonials Section */}
            <section className="mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-portfolio-text mb-6">
                {t('events.testimonialsTitle')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {(t('events.testimonials', { returnObjects: true }) as Array<{ quote: string; attribution: string }>).map((testimonial, idx) => (
                  <div key={idx} className="p-6 border border-portfolio-divider rounded-lg bg-portfolio-bg">
                    <p className="text-sm sm:text-base text-portfolio-text/80 italic mb-4">
                      &quot;{testimonial.quote}&quot;
                    </p>
                    <p className="text-sm font-semibold text-portfolio-text">
                      {testimonial.attribution}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Contact / CTA Section */}
            <section className="mb-10 sm:mb-16 text-center bg-portfolio-accent/10 p-8 rounded-lg">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-portfolio-text mb-3 sm:mb-4">
                {t('events.ctaTitle')}
              </h2>
              <p className="text-base sm:text-lg text-portfolio-text/80 max-w-2xl mx-auto mb-6">
                {t('events.ctaDescription')}
              </p>
              <Button
                variant="default"
                className="bg-portfolio-accent text-white hover:bg-portfolio-accent/80 rounded-full px-8 py-3 text-sm sm:text-base font-medium"
                onClick={() => {
                  window.location.href = 'mailto:hello@uv.agency';
                }}
              >
                {t('events.contactUs')}
              </Button>
            </section>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Events;
