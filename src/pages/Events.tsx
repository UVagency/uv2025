import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
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

  const methodViews = {
    'strategy': {
      eyebrow: 'How do we design events that move people?',
      title: 'Strategy Starts with the Audience',
      body: `We begin with people, not venues. Our event strategy is rooted in understanding behavior, motivations, and what truly moves audiences. Every event brief starts by asking: who are we trying to move, and what experience will create lasting impact?`,
    },
    'conceptualization': {
      eyebrow: 'How do we bring ideas to life?',
      title: 'Conceptualization That Inspires',
      body: `We transform strategic insights into compelling event concepts. Our conceptualization process combines creative vision with practical execution, ensuring every idea is both inspiring and achievable. We craft narratives that resonate and experiences that matter.`,
    },
    'execution': {
      eyebrow: 'What does flawless execution look like?',
      title: 'End-to-End Execution Excellence',
      body: `From concept to completion, we handle every detail. Our execution capabilities span venue selection, technical setup, content creation, and seamless coordination. We ensure every element works in harmony to create unforgettable moments.`,
    },
    'measurement': {
      eyebrow: 'What impact did the event have on the business?',
      title: 'Data-Driven Event Intelligence',
      body: `We measure what matters. From attendance metrics to brand sentiment, engagement rates to conversion tracking, we provide clear visibility into event performance and ROI. Every event is an opportunity to learn and optimize.`,
    },
  } as const;

  const eventInfo = {
    videoRecapUrl: "https://vimeo.com/1138099986",
  };

  return (
    <div className="min-h-screen bg-portfolio-bg">
      <SEO
        title="United Experiences - Live Experiences @ UV"
        description="United Experiences: Crafting experiences that move people to create customers. From brand activations to physical experiences that connect brands with people in real life."
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
                    United Experiences
                  </h1>
                  <span className="project-year-tag text-xs sm:text-base px-3 sm:px-6 py-1 sm:py-2 rounded-full bg-portfolio-tag-bg text-portfolio-tag-text">
                    Live Experiences
                  </span>
                  <span className="project-category-tag text-xs sm:text-base px-3 sm:px-6 py-1 sm:py-2 border rounded-full">
                    Brand Experiences
                  </span>
                  <span className="project-category-tag text-xs sm:text-base px-3 sm:px-6 py-1 sm:py-2 border rounded-full">
                    Physical Activation
                  </span>
                </div>
                <p className="w-full max-w-[95vw] sm:max-w-full mx-auto text-base sm:text-2xl md:text-4xl text-portfolio-text/90 font-light leading-tight mt-3 sm:mt-6 text-left">
                  Events that move people to create customers
                </p>
                <div className="mt-4 sm:mt-6 flex flex-wrap gap-2 sm:gap-4 justify-start">
                  <div className="text-portfolio-text/70 text-xs sm:text-base">
                    <span className="font-semibold">Crafting experiences that connect brands with people in real life</span>
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
                    The UX Method
                  </h2>
                  {/* Contenido dinámico con altura mínima fija para evitar saltos */}
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
                      <span>Strategic Planning</span>
                      <span>Flawless Execution</span>
                      <span>Measurable Impact</span>
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
                    Event Capabilities
                  </h2>
                </div>

                {/* Listado de capacidades a la derecha */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6 text-sm sm:text-base">
                  {/* Brand Activations */}
                  <div>
                    <p className="uppercase tracking-[0.14em] text-portfolio-text font-semibold mb-1">
                      Brand Activations
                    </p>
                    <p className="text-portfolio-text/80 flex flex-wrap gap-x-3 gap-y-1">
                      <span>Product Launches</span>
                      <span>Pop-Ups</span>
                      <span>Experiential</span>
                      <span>Sampling</span>
                    </p>
                  </div>

                  {/* Event Production */}
                  <div>
                    <p className="uppercase tracking-[0.14em] text-portfolio-text font-semibold mb-1">
                      Event Production
                    </p>
                    <p className="text-portfolio-text/80 flex flex-wrap gap-x-3 gap-y-1">
                      <span>Corporate Events</span>
                      <span>Conferences</span>
                      <span>Trade Shows</span>
                      <span>Festivals</span>
                    </p>
                  </div>

                  {/* Live Experiences */}
                  <div>
                    <p className="uppercase tracking-[0.14em] text-portfolio-text font-semibold mb-1">
                      Live Experiences
                    </p>
                    <p className="text-portfolio-text/80 flex flex-wrap gap-x-3 gap-y-1">
                      <span>Entertainment</span>
                      <span>Music Events</span>
                      <span>Sports Activation</span>
                      <span>Cultural</span>
                    </p>
                  </div>

                  {/* Experiential Marketing */}
                  <div>
                    <p className="uppercase tracking-[0.14em] text-portfolio-text font-semibold mb-1">
                      Experiential Marketing
                    </p>
                    <p className="text-portfolio-text/80 flex flex-wrap gap-x-3 gap-y-1">
                      <span>Immersive</span>
                      <span>Interactive</span>
                      <span>Multi-Sensory</span>
                    </p>
                  </div>

                  {/* Venue & Logistics */}
                  <div>
                    <p className="uppercase tracking-[0.14em] text-portfolio-text font-semibold mb-1">
                      Venue &amp; Logistics
                    </p>
                    <p className="text-portfolio-text/80 flex flex-wrap gap-x-3 gap-y-1">
                      <span>Venue Selection</span>
                      <span>Catering</span>
                      <span>Transportation</span>
                    </p>
                  </div>

                  {/* Technical Production */}
                  <div>
                    <p className="uppercase tracking-[0.14em] text-portfolio-text font-semibold mb-1">
                      Technical Production
                    </p>
                    <p className="text-portfolio-text/80 flex flex-wrap gap-x-3 gap-y-1">
                      <span>AV Equipment</span>
                      <span>Lighting</span>
                      <span>Staging</span>
                    </p>
                  </div>

                  {/* Content & Creative */}
                  <div>
                    <p className="uppercase tracking-[0.14em] text-portfolio-text font-semibold mb-1">
                      Content &amp; Creative
                    </p>
                    <p className="text-portfolio-text/80 flex flex-wrap gap-x-3 gap-y-1">
                      <span>Event Design</span>
                      <span>Branding</span>
                      <span>Content Creation</span>
                    </p>
                  </div>

                  {/* Measurement & Analytics */}
                  <div>
                    <p className="uppercase tracking-[0.14em] text-portfolio-text font-semibold mb-1">
                      Measurement &amp; Analytics
                    </p>
                    <p className="text-portfolio-text/80 flex flex-wrap gap-x-3 gap-y-1">
                      <span>Attendance Tracking</span>
                      <span>Engagement Metrics</span>
                      <span>ROI Analysis</span>
                    </p>
                  </div>

                  {/* Specialties */}
                  <div>
                    <p className="uppercase tracking-[0.14em] text-portfolio-text font-semibold mb-1">
                      Specialties
                    </p>
                    <p className="text-portfolio-text/80 flex flex-wrap gap-x-3 gap-y-1">
                      <span>B2B Events</span>
                      <span>Consumer Events</span>
                      <span>Hybrid Events</span>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Clients Section */}
            <section className="mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-portfolio-text mb-3 sm:mb-4">
                We&apos;ve created events for these brands
              </h2>
              <p className="text-base sm:text-lg text-portfolio-text/80 mb-6 max-w-5xl">
                From global brands to regional leaders, United Experiences connects ambitious brands with audiences through memorable experiences.
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
                    &quot;They transformed our product launch into an unforgettable experience. The attention to detail and strategic approach exceeded all expectations.&quot;
                  </p>
                  <p className="text-sm font-semibold text-portfolio-text">
                    Marketing Director, Global Beauty Brand
                  </p>
                </div>
                <div className="p-6 border border-portfolio-divider rounded-lg bg-portfolio-bg">
                  <p className="text-sm sm:text-base text-portfolio-text/80 italic mb-4">
                    &quot;UV Events doesn&apos;t just execute events—they create moments that move people. Every touchpoint was designed with intention, and the results speak for themselves.&quot;
                  </p>
                  <p className="text-sm font-semibold text-portfolio-text">
                    Brand Manager, Consumer Goods Company
                  </p>
                </div>
                <div className="p-6 border border-portfolio-divider rounded-lg bg-portfolio-bg">
                  <p className="text-sm sm:text-base text-portfolio-text/80 italic mb-4">
                    &quot;From concept to execution, their team was collaborative, creative, and results-driven. The event generated significant brand awareness and measurable business impact.&quot;
                  </p>
                  <p className="text-sm font-semibold text-portfolio-text">
                    CMO, Retail Company
                  </p>
                </div>
              </div>
            </section>

            {/* Contact / CTA Section */}
            <section className="mb-10 sm:mb-16 text-center bg-portfolio-accent/10 p-8 rounded-lg">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-portfolio-text mb-3 sm:mb-4">
                Let&apos;s create events that move people
              </h2>
              <p className="text-base sm:text-lg text-portfolio-text/80 max-w-2xl mx-auto mb-6">
                Ready to craft experiences that connect your brand with people in real life? Connect with UX to create moments that drive real business outcomes.
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

export default Events;
