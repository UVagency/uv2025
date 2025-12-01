import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { X } from 'lucide-react';
import Footer from '../components/Footer';
import { SEO } from '../components/SEO';
import { Button } from "@/components/ui/button";
import OptimizedImage from "@/components/ui/optimized-image";
import BrandCarousel from "../components/BrandCarousel";
import MediaMethodWheel from "../components/company/MediaMethodWheel";
import CompanyVideo from "../components/company/CompanyVideo";
import { mediaInfo } from "@/data/unitedMediaData";

const UnitedMedia = () => {
  const navigate = useNavigate();

  const handleClose = React.useCallback(() => {
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

  const [activeMethod, setActiveMethod] = React.useState<'who' | 'what' | 'so-what' | 'whats-next' | 'how'>('who');

  const methodViews = {
    'who': {
      eyebrow: 'Who are we trying to move and what moves them',
      title: 'Strategy Starts with the Audience',
      body: `We begin with people, not platforms. Our UM principles are rooted in behavior, not just demographics, and act as filters to ensure a brand shows up in ways that matter. Every brief starts by asking: who are we trying to move, and what moves them?`,
    },
    'what': {
      eyebrow: 'What is the role media plays in creating impact?',
      title: 'Creativity Fuels the Media Engine',
      body: `UM is more than a delivery system, it's an amplifier. We build the stage for creative to thrive, selecting unexpected formats and emerging platforms that spark conversation and cultural resonance. At UM, media and creative aren't siloed — they speak fluently.`,
    },
    'so-what': {
      eyebrow: 'So what impact did it have on the business?',
      title: 'Tech-Forward, Platform-Agnostic',
      body: `We're fluent in every tool, but beholden to none. Our tech stack is custom-built to the business and deep marketplace knowledge lets us choose the best partners for the job — unlocking value others miss and maximizing accountability across every tactic.`,
    },
    'whats-next': {
      eyebrow: "What are we doing with what we've learned?",
      title: 'Always On. Always Optimizing.',
      body: `Testing isn’t a task, it’s a mindset. We establish the framework upfront to measure what matters most, and then adapt in real-time to what’s working. Our goal isn’t just media efficiency — it’s delivering business outcomes with clarity and speed.`,
    },
    'how': {
      eyebrow: 'How do we activate across the full funnel?',
      title: 'Omni-Channel. No Smoke, No Mirrors.',
      body: `We plan holistically across the full funnel — because real people don’t live in silos. That means no brand vs. performance trade-offs, and no murky models. Every investment is transparent, every channel earns its place, and every dollar is treated like it’s our own.`,
    },
  } as const;

  return (
    <div className="min-h-screen bg-portfolio-bg">
      <SEO
        title="United Media Strategy & Buying @ UV"
        description="United Media is UV's media practice: bold ideas, executed with the craft and clarity of seasoned marketplace operators driving business outcomes."
        pageType="company"
      />
      <Helmet>
        <title>United Media Strategy & Buying @ UV</title>
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
                    United Media
                  </h1>
                  <span className="project-year-tag text-xs sm:text-base px-3 sm:px-6 py-1 sm:py-2 rounded-full bg-portfolio-tag-bg text-portfolio-tag-text">
                    Smart Media
                  </span>
                  <span className="project-category-tag text-xs sm:text-base px-3 sm:px-6 py-1 sm:py-2 border rounded-full">
                    Media Strategy
                  </span>
                  <span className="project-category-tag text-xs sm:text-base px-3 sm:px-6 py-1 sm:py-2 border rounded-full">
                    Planning &amp; Buying
                  </span>
                </div>
                <p className="w-full max-w-[95vw] sm:max-w-full mx-auto text-base sm:text-2xl md:text-4xl text-portfolio-text/90 font-light leading-tight mt-3 sm:mt-6 text-left">
                Breaking convention and buying with intention
                </p>
                <div className="mt-4 sm:mt-6 flex flex-wrap gap-2 sm:gap-4 justify-start">
                  <div className="text-portfolio-text/70 text-xs sm:text-base">
                    <span className="font-semibold">Bold ideas, executed with the craft and clarity of seasoned marketplace operators driving business outcomes.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Recap Section */}
            <section className="mb-10 sm:mb-16">
              <CompanyVideo videoUrl={mediaInfo.videoRecapUrl} />
            </section>

            {/* The United Media Method / Strategy Starts with the Audience */}
            <section className="mb-10 sm:mb-16">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div>
                  <MediaMethodWheel
                    activeSegmentId={activeMethod}
                    onSegmentChange={setActiveMethod}
                  />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-portfolio-text mb-3 sm:mb-4">
                    The UM Method
                  </h2>
                  {/* Contenido dinámico con altura mínima fija para evitar saltos al hacer hover */}
                  <div className="min-h-[220px] sm:min-h-[250px] md:min-h-[260px]">
                    <p className="text-xs sm:text-sm uppercase tracking-[0.16em] text-portfolio-text/70 mb-3">
                      {methodViews[activeMethod].eyebrow}
                    </p>
                    <h3 className="text-lg sm:text-2xl md:text-3xl font-semibold text-portfolio-text mb-3">
                      {methodViews[activeMethod].title}
                    </h3>
                    <p className="text-base sm:text-lg text-portfolio-text/80 max-w-3xl">
                      {methodViews[activeMethod].body}
                    </p>
                  </div>
                  <div className="mt-6 text-sm sm:text-base text-portfolio-text">
                    <div className="inline-flex flex-wrap gap-x-8 gap-y-2 font-semibold">
                      <span>Faster Process</span>
                      <span>Smarter Spend</span>
                      <span>Accelerated Path of Outcomes</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Planning & Buying Capabilities */}
            <section className="mb-10 sm:mb-16">
              <div className="grid gap-8 lg:gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,2fr)] items-start">
                {/* Título grande a la izquierda */}
                <div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-portfolio-text leading-tight">
                    Planning &amp; Buying Capabilities
                  </h2>
                </div>

                {/* Listado de capacidades a la derecha, siguiendo la estructura de la referencia */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6 text-sm sm:text-base">
                  {/* Video */}
                  <div>
                    <p className="uppercase tracking-[0.14em] text-portfolio-text font-semibold mb-1">
                      Video
                    </p>
                    <p className="text-portfolio-text/80 flex flex-wrap gap-x-3 gap-y-1">
                      <span>Linear</span>
                      <span>OLV</span>
                      <span>CTV/OTT</span>
                      <span>Local/National</span>
                    </p>
                  </div>

                  {/* Social */}
                  <div>
                    <p className="uppercase tracking-[0.14em] text-portfolio-text font-semibold mb-1">
                      Social
                    </p>
                    <p className="text-portfolio-text/80 flex flex-wrap gap-x-3 gap-y-1">
                      <span>Paid</span>
                      <span>Organic</span>
                      <span>Creator</span>
                      <span>Influencer</span>
                    </p>
                  </div>

                  {/* Audio */}
                  <div>
                    <p className="uppercase tracking-[0.14em] text-portfolio-text font-semibold mb-1">
                      Audio
                    </p>
                    <p className="text-portfolio-text/80 flex flex-wrap gap-x-3 gap-y-1">
                      <span>Terrestrial</span>
                      <span>Streaming</span>
                      <span>Podcasts</span>
                      <span>Local/National</span>
                    </p>
                  </div>

                  {/* OOH */}
                  <div>
                    <p className="uppercase tracking-[0.14em] text-portfolio-text font-semibold mb-1">
                      OOH
                    </p>
                    <p className="text-portfolio-text/80 flex flex-wrap gap-x-3 gap-y-1">
                      <span>Traditional</span>
                      <span>Digital</span>
                      <span>Guerilla</span>
                    </p>
                  </div>

                  {/* Specialties */}
                  <div>
                    <p className="uppercase tracking-[0.14em] text-portfolio-text font-semibold mb-1">
                      Specialties
                    </p>
                    <p className="text-portfolio-text/80 flex flex-wrap gap-x-3 gap-y-1">
                      <span>B2B</span>
                      <span>Partnerships</span>
                      <span>Mar Tech</span>
                    </p>
                  </div>

                  {/* Display */}
                  <div>
                    <p className="uppercase tracking-[0.14em] text-portfolio-text font-semibold mb-1">
                      Display
                    </p>
                    <p className="text-portfolio-text/80 flex flex-wrap gap-x-3 gap-y-1">
                      <span>Site Direct</span>
                      <span>Programmatic</span>
                      <span>Native</span>
                    </p>
                  </div>

                  {/* Search */}
                  <div>
                    <p className="uppercase tracking-[0.14em] text-portfolio-text font-semibold mb-1">
                      Search
                    </p>
                    <p className="text-portfolio-text/80 flex flex-wrap gap-x-3 gap-y-1">
                      <span>SEM</span>
                      <span>SEO</span>
                      <span>AEO</span>
                      <span>GEO</span>
                    </p>
                  </div>

                  {/* Print */}
                  <div>
                    <p className="uppercase tracking-[0.14em] text-portfolio-text font-semibold mb-1">
                      Print
                    </p>
                    <p className="text-portfolio-text/80 flex flex-wrap gap-x-3 gap-y-1">
                      <span>Direct Mail</span>
                      <span>Premium Publications</span>
                      <span>Local/National</span>
                    </p>
                  </div>

                  {/* Analytics & Measurement */}
                  <div>
                    <p className="uppercase tracking-[0.14em] text-portfolio-text font-semibold mb-1">
                      Analytics &amp; Measurement
                    </p>
                    <p className="text-portfolio-text/80 flex flex-wrap gap-x-3 gap-y-1">
                      <span>Funnel Metrics</span>
                      <span>Campaign Reporting</span>
                      <span>Dashboards</span>
                      <span>Business Intelligence</span>
                      <span>Attribution</span>
                      <span>Cross-Channel</span>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Clients Section */}
            <section className="mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-portfolio-text mb-3 sm:mb-4">
                We&apos;ve planned &amp; purchased media for these brands
              </h2>
              <p className="text-base sm:text-lg text-portfolio-text/80 mb-6 max-w-3xl">
                From global brands to regional leaders, United Media connects ambitious clients with the audiences that
                matter most.
              </p>
              {/* Reutilizamos el carrusel de marcas de la home */}
              <div className="-mx-[5%] sm:-mx-[10%]">
                <BrandCarousel />
              </div>
            </section>

            {/* Testimonials Section */}
            <section className="mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-portfolio-text mb-6">
                What our clients say
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 border border-portfolio-divider rounded-lg bg-portfolio-bg">
                  <p className="text-sm sm:text-base text-portfolio-text/80 italic mb-4">
                    “They are uniquely positioned in the space of media-meets-innovation-meets-tech. They bring
                    something very special to the practice of connecting with today&apos;s consumer.”
                  </p>
                  <p className="text-sm font-semibold text-portfolio-text">
                    Former CMO, Global Industrial Brand
                  </p>
                </div>
                <div className="p-6 border border-portfolio-divider rounded-lg bg-portfolio-bg">
                  <p className="text-sm sm:text-base text-portfolio-text/80 italic mb-4">
                    “Working with every member of the team felt like being part of one organization, all moving toward a
                    shared goal. From creative conversations to plan refinement and optimizations, every step was
                    collaborative.”
                  </p>
                  <p className="text-sm font-semibold text-portfolio-text">
                    Senior Brand Director, Consumer Health Brand
                  </p>
                </div>
                <div className="p-6 border border-portfolio-divider rounded-lg bg-portfolio-bg">
                  <p className="text-sm sm:text-base text-portfolio-text/80 italic mb-4">
                    “Their expertise and creativity helped us evolve our audience strategy and connect brand and
                    performance, giving our teams clear visibility into growth.”
                  </p>
                  <p className="text-sm font-semibold text-portfolio-text">
                    CMO, Financial Services Company
                  </p>
                </div>
              </div>
            </section>

            {/* Contact / CTA Section */}
            <section className="mb-10 sm:mb-16 text-center bg-portfolio-accent/10 p-8 rounded-lg">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-portfolio-text mb-3 sm:mb-4">
                Let&apos;s talk media
              </h2>
              <p className="text-base sm:text-lg text-portfolio-text/80 max-w-2xl mx-auto mb-6">
                Ready to rethink how your brand shows up in the world? Connect with United Media to design a media
                ecosystem built around the audiences that matter most.
              </p>
              <Button
                variant="default"
                className="bg-portfolio-accent text-white hover:bg-portfolio-accent/80 rounded-full px-8 py-3 text-sm sm:text-base font-medium"
                onClick={() => {
                  window.location.href = 'mailto:hello@uv.agency';
                }}
              >
                Contact us
              </Button>
            </section>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default UnitedMedia;


