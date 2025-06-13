import React, { Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';
import Footer from '../components/Footer';
import { SEO } from '../components/SEO';
import { CompanyVideo } from '../components/lazy';

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
    name: "United Media",
    year: "Smart Media",
    tagline: "Connecting brands with people in a phygital world",
    description: "Our UnitedMedia service is designed to enhance your business results in a scalable, effective, and efficient manner. We reach truly relevant clients by enhancing the visibility of your brand, product, or event through Programmatic and Digital PR.",
    history: "Since 2011, we have collaborated with leaders and teams of major global brands to help them achieve their goals and growth challenges by understanding their clients' behavior and connecting them with them.",
    videoRecapUrl: "https://player.vimeo.com/video/123456789?color=EBA3A9&title=0&byline=0&portrait=0", // Placeholder video
    categories: ["Off-line", "Digital", "Outdoor", "In-Store", "Radio", "TV"],
    client: "United Media Services",
  };

  const values = [
    { name: "Targeted Branding", description: "Reach truly relevant clients by enhancing the visibility of your brand, product, or event through Programmatic and Digital PR." },
    { name: "SXO", description: "Enhance the performance and ROI of the Google Search channel through an integrated strategy between SEO and SEM." },
    { name: "Conversion Boost", description: "Maximize ROI and conversion rates by improving decision-making through experimentation and data with CRO and Data analytics." },
  ];
  
  return (
    <div className="min-h-screen bg-portfolio-bg">
      <SEO 
        title="United Media @ UV Agency"
        description="Learn about UV Agency's United Media service, designed to connect brands with people in a phygital world."
        pageType="company"
      />
      <div className="fixed inset-0 z-50 bg-portfolio-bg overflow-y-auto">
        <div className="w-full mx-auto pt-8 pb-16">
          {/* Header Section */}
          <div className="max-w-[95%] sm:max-w-[90%] mx-auto">
            <div className="border-b border-portfolio-divider pb-4 sm:pb-6 mb-4 sm:mb-8">
              <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
                <button
                  onClick={handleClose}
                  aria-label="Close"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-transparent border border-portfolio-text flex items-center justify-center text-portfolio-text hover:bg-portfolio-text hover:text-portfolio-bg transition-colors"
                >
                  <X size={16} className="sm:w-5 sm:h-5" />
                </button>
                
                <h1 className="text-2xl sm:text-4xl md:text-7xl font-bold text-portfolio-text">{mediaInfo.name}</h1>
                
                <span className="project-year-tag text-xs sm:text-base px-3 sm:px-6 py-1 sm:py-2 rounded-full bg-portfolio-tag-bg text-portfolio-tag-text">
                  {mediaInfo.year}
                </span>
                  
                {mediaInfo.categories.map((category) => (
                  <span key={category} className="project-category-tag text-xs sm:text-base px-3 sm:px-6 py-1 sm:py-2 border rounded-full">
                    {category}
                  </span>
                ))}
              </div>
              
              <p className="text-base sm:text-2xl md:text-4xl text-portfolio-text/90 font-light leading-tight max-w-4xl mt-3 sm:mt-6">
                {mediaInfo.tagline}
              </p>
              
              <div className="mt-4 sm:mt-6 flex flex-wrap gap-2 sm:gap-4">
                <div className="text-portfolio-text/70 text-xs sm:text-base">
                  <span className="font-semibold">Type:</span> {mediaInfo.client}
                </div>
              </div>
            </div>

            {/* Video Section */}
            <Suspense fallback={<SectionLoading />}>
              <CompanyVideo videoUrl={mediaInfo.videoRecapUrl} />
            </Suspense>

            {/* Closing Statement */}
            <div className="mb-6 sm:mb-12 text-center">
              <h2 className="text-2xl sm:text-4xl font-bold text-portfolio-text mb-3 sm:mb-4">Maximize the acquisition of new clients by enhancing your media strategy, investment, and team</h2>
            </div>

            {/* History Section */}
            <div className="mb-6 sm:mb-12">
              <h2 className="text-2xl sm:text-4xl font-bold text-portfolio-text mb-3 sm:mb-4">Our Story</h2>
              <div className="text-lg sm:text-2xl text-portfolio-text/80 font-light whitespace-pre-line">
                {mediaInfo.history}
              </div>
            </div>

            {/* Description Section */}
            <div className="mb-6 sm:mb-12">
              <h2 className="text-2xl sm:text-4xl font-bold text-portfolio-text mb-3 sm:mb-4">About Us</h2>
              <div className="text-lg sm:text-2xl text-portfolio-text/80 font-light whitespace-pre-line">
                {mediaInfo.description}
              </div>
            </div>

            {/* Service Blocks */}
            <div className="mb-6 sm:mb-12">
              <h2 className="text-2xl sm:text-4xl font-bold text-portfolio-text mb-4 sm:mb-8">Our Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
                <div className="p-4 sm:p-6 border border-portfolio-divider rounded-lg">
                  <h3 className="text-xl sm:text-2xl font-bold text-portfolio-text mb-3 sm:mb-4">Targeted Branding</h3>
                  <p className="text-base sm:text-lg text-portfolio-text/80">Reach truly relevant clients by enhancing the visibility of your brand, product, or event through:</p>
                  <ul className="list-disc pl-5 mt-2 text-base sm:text-lg">
                    <li>Programmatic</li>
                    <li>Digital PR</li>
                  </ul>
                </div>
                <div className="p-4 sm:p-6 border border-portfolio-divider rounded-lg">
                  <h3 className="text-xl sm:text-2xl font-bold text-portfolio-text mb-3 sm:mb-4">SXO</h3>
                  <p className="text-base sm:text-lg text-portfolio-text/80">Enhance the performance and ROI of the Google Search channel through an integrated strategy between:</p>
                  <ul className="list-disc pl-5 mt-2 text-base sm:text-lg">
                    <li>SEO</li>
                    <li>SEM</li>
                  </ul>
                </div>
                <div className="p-4 sm:p-6 border border-portfolio-divider rounded-lg">
                  <h3 className="text-xl sm:text-2xl font-bold text-portfolio-text mb-3 sm:mb-4">Conversion Boost</h3>
                  <p className="text-base sm:text-lg text-portfolio-text/80">Maximize ROI and conversion rates by improving decision-making through experimentation and data with:</p>
                  <ul className="list-disc pl-5 mt-2 text-base sm:text-lg">
                    <li>CRO</li>
                    <li>Data analytics</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Needs Quadrant */}
            <div className="mb-6 sm:mb-12">
              <h2 className="text-2xl sm:text-4xl font-bold text-portfolio-text mb-4 sm:mb-8">How to Resolve Your Needs?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
                <div className="p-4 sm:p-6 border border-portfolio-divider rounded-lg">
                  <p className="text-base sm:text-lg text-portfolio-text/80">1. We increase conversions on your website or app by reaching more potential clients.</p>
                </div>
                <div className="p-4 sm:p-6 border border-portfolio-divider rounded-lg">
                  <p className="text-base sm:text-lg text-portfolio-text/80">2. We reduce acquisition costs to maximize the efficiency of digital investments.</p>
                </div>
                <div className="p-4 sm:p-6 border border-portfolio-divider rounded-lg">
                  <p className="text-base sm:text-lg text-portfolio-text/80">3. We enhance visibility, trust, and brand recognition among potential clients.</p>
                </div>
                <div className="p-4 sm:p-6 border border-portfolio-divider rounded-lg">
                  <p className="text-base sm:text-lg text-portfolio-text/80">4. We help your clients with a better digital experience and facilitate their path to conversion.</p>
                </div>
              </div>
            </div>

            {/* Certifications and Partners */}
            <div className="mb-6 sm:mb-12">
              <h2 className="text-2xl sm:text-4xl font-bold text-portfolio-text mb-4 sm:mb-8">Certifications and Partners</h2>
              <div className="flex flex-wrap gap-2 sm:gap-4">
                <span className="px-3 sm:px-4 py-1 sm:py-2 bg-portfolio-tag-bg text-portfolio-tag-text rounded-full text-xs sm:text-base">Facebook BluePrint</span>
                <span className="px-3 sm:px-4 py-1 sm:py-2 bg-portfolio-tag-bg text-portfolio-tag-text rounded-full text-xs sm:text-base">Google Partner</span>
                <span className="px-3 sm:px-4 py-1 sm:py-2 bg-portfolio-tag-bg text-portfolio-tag-text rounded-full text-xs sm:text-base">eEcommerce Awards</span>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mb-6 sm:mb-12 text-left">
              <h2 className="text-2xl sm:text-4xl font-bold text-portfolio-text mb-3 sm:mb-4">Looking for more leads?</h2>
              <button className="bg-portfolio-highlight text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-portfolio-highlight/80 transition-colors text-sm sm:text-base">
                Contact Us
              </button>
            </div>

          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default UnitedMedia; 