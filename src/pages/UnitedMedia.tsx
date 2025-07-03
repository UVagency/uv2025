import React, { Suspense, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, ArrowRight, BarChart3, Users, TrendingUp, Target, Award, PlayCircle, Eye, MousePointer, DollarSign } from 'lucide-react';
import Footer from '../components/Footer';
import { SEO } from '../components/SEO';
import { CompanyVideo } from '../components/lazy';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import OptimizedImage from "@/components/ui/optimized-image";

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

// Casos de éxito específicos de United Media
const successStories = [
  {
    id: "ecommerce-fashion",
    title: "E-commerce Fashion Brand",
    client: "Luxury Fashion Retailer",
    industry: "Fashion & Retail",
    challenge: "Low online conversion rate and high cart abandonment",
    solution: "Complete digital transformation with GA4, enhanced ecommerce tracking, and personalized campaigns",
    results: {
      roas: "+350%",
      conversion: "+185%",
      revenue: "$2.8M",
      period: "6 months"
    },
    metrics: [
      { label: "ROAS Increase", value: "350%", icon: DollarSign },
      { label: "Conversion Rate", value: "+185%", icon: TrendingUp },
      { label: "Revenue Generated", value: "$2.8M", icon: BarChart3 }
    ],
    image: "/projects/enjoy-the-unexpected/enjoy-the-unexpected_profile.webp",
    tags: ["E-commerce", "GA4", "Google Ads"]
  },
  {
    id: "b2b-saas",
    title: "B2B SaaS Platform",
    client: "Tech Startup",
    industry: "Software & Technology",
    challenge: "Inefficient lead generation and poor attribution tracking",
    solution: "Advanced analytics setup, lead scoring, and multi-touch attribution model",
    results: {
      leads: "+420%",
      quality: "+230%",
      cost: "-65%",
      period: "4 months"
    },
    metrics: [
      { label: "Quality Leads", value: "+420%", icon: Users },
      { label: "Lead Quality Score", value: "+230%", icon: Target },
      { label: "Cost per Lead", value: "-65%", icon: TrendingUp }
    ],
    image: "/projects/closer-to-sun/closer-to-sun_profile.webp",
    tags: ["B2B", "Lead Generation", "Attribution"]
  },
  {
    id: "local-restaurant",
    title: "Restaurant Chain Expansion",
    client: "Regional Restaurant Group",
    industry: "Food & Beverage",
    challenge: "Expanding to new markets with limited brand awareness",
    solution: "Local SEO optimization, geo-targeted campaigns, and social media strategy",
    results: {
      locations: "12 new",
      awareness: "+280%",
      footfall: "+150%",
      period: "8 months"
    },
    metrics: [
      { label: "New Locations", value: "12", icon: Target },
      { label: "Brand Awareness", value: "+280%", icon: Eye },
      { label: "Foot Traffic", value: "+150%", icon: Users }
    ],
    image: "/projects/sabor-de-barrio/sabor-de-barrio_profile.webp",
    tags: ["Local SEO", "Geo-targeting", "Social Media"]
  }
];

const UnitedMedia = () => {
  const navigate = useNavigate();
  const [selectedStory, setSelectedStory] = useState<string | null>(null);
  
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
    videoRecapUrl: "https://vimeo.com/1079829750", // Placeholder video
    categories: ["Off-line", "Digital", "Outdoor", "In-Store", "Radio", "TV"],
    client: "United Media Services. One Agency, All In.",
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
                <div className="p-4 sm:p-6 border-2 border-portfolio-accent rounded-lg hover:border-portfolio-accent/80 transition-colors bg-portfolio-bg shadow-sm">
                  <h3 className="text-xl sm:text-2xl font-bold text-portfolio-text mb-3 sm:mb-4">Targeted Branding</h3>
                  <p className="text-base sm:text-lg text-portfolio-text/80">Reach truly relevant clients by enhancing the visibility of your brand, product, or event through:</p>
                  <ul className="list-disc pl-5 mt-2 text-base sm:text-lg">
                    <li>Programmatic</li>
                    <li>Digital PR</li>
                  </ul>
                </div>
                <div className="p-4 sm:p-6 border-2 border-portfolio-accent rounded-lg hover:border-portfolio-accent/80 transition-colors bg-portfolio-bg shadow-sm">
                  <h3 className="text-xl sm:text-2xl font-bold text-portfolio-text mb-3 sm:mb-4">SXO</h3>
                  <p className="text-base sm:text-lg text-portfolio-text/80">Enhance the performance and ROI of the Google Search channel through an integrated strategy between:</p>
                  <ul className="list-disc pl-5 mt-2 text-base sm:text-lg">
                    <li>SEO</li>
                    <li>SEM</li>
                  </ul>
                </div>
                <div className="p-4 sm:p-6 border-2 border-portfolio-accent rounded-lg hover:border-portfolio-accent/80 transition-colors bg-portfolio-bg shadow-sm">
                  <h3 className="text-xl sm:text-2xl font-bold text-portfolio-text mb-3 sm:mb-4">Conversion Boost</h3>
                  <p className="text-base sm:text-lg text-portfolio-text/80">Maximize ROI and conversion rates by improving decision-making through experimentation and data with:</p>
                  <ul className="list-disc pl-5 mt-2 text-base sm:text-lg">
                    <li>CRO</li>
                    <li>Data analytics</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Technology Stack Section */}
            <div className="mb-6 sm:mb-12">
              <h2 className="text-2xl sm:text-4xl font-bold text-portfolio-text mb-4 sm:mb-8">
                Our Technology Stack
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {['Google Analytics 4', 'Google Ads', 'Facebook Ads Manager', 'SEMrush', 'Hotjar', 'Google Tag Manager'].map(tool => (
                  <div key={tool} className="p-4 border border-portfolio-divider rounded-lg text-center hover:border-portfolio-accent transition-colors">
                    <span className="text-portfolio-text font-medium text-sm">{tool}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Success Stories Section */}
            <div className="mb-6 sm:mb-12">
              <div className="flex items-center mb-8">
                <h2 className="text-2xl sm:text-4xl font-bold text-portfolio-text mr-2">Success Stories</h2>
                <Award className="w-6 h-6 text-portfolio-accent" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {successStories.map((story) => (
                  <div 
                    key={story.id}
                    className="cursor-pointer group"
                    onClick={() => setSelectedStory(selectedStory === story.id ? null : story.id)}
                  >
                    <div className="relative w-full overflow-hidden rounded-lg mb-4">
                      <OptimizedImage
                        src={story.image}
                        alt={story.title}
                        aspectRatio={16/9}
                        className="w-full object-cover transition-transform group-hover:scale-105"
                        wrapperClassName=""
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <PlayCircle className="w-12 h-12 text-white" />
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        {story.tags.map((tag) => (
                          <span key={tag} className="text-xs px-2 py-1 bg-portfolio-accent/20 text-portfolio-accent rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <h3 className="font-bold text-lg text-portfolio-text group-hover:text-portfolio-accent transition-colors">
                        {story.title}
                      </h3>
                      
                      <p className="text-sm text-portfolio-text/70">
                        {story.industry} • {story.results.period}
                      </p>
                      
                      <div className="grid grid-cols-3 gap-2 pt-2">
                        {story.metrics.map((metric, idx) => (
                          <div key={idx} className="text-center">
                            <metric.icon className="w-4 h-4 mx-auto mb-1 text-portfolio-accent" />
                            <div className="text-sm font-bold text-portfolio-text">{metric.value}</div>
                            <div className="text-xs text-portfolio-text/60">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Expanded Details */}
                    {selectedStory === story.id && (
                      <div className="mt-4 p-4 bg-portfolio-text/5 rounded-lg border border-portfolio-text/10">
                        <div className="space-y-3">
                          <div>
                            <h4 className="font-semibold text-portfolio-text mb-1">Challenge</h4>
                            <p className="text-sm text-portfolio-text/70">{story.challenge}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-portfolio-text mb-1">Solution</h4>
                            <p className="text-sm text-portfolio-text/70">{story.solution}</p>
                          </div>
                          <div className="pt-2 border-t border-portfolio-text/10">
                            <h4 className="font-semibold text-portfolio-text mb-2">Key Results</h4>
                            <div className="grid grid-cols-2 gap-2 text-sm">
                              {Object.entries(story.results).map(([key, value]) => (
                                <div key={key} className="flex justify-between">
                                  <span className="text-portfolio-text/70 capitalize">{key}:</span>
                                  <span className="font-semibold text-portfolio-text">{value}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Methodology Section */}
            <div className="mb-6 sm:mb-12">
              <h2 className="text-2xl sm:text-4xl font-bold text-portfolio-text mb-4 sm:mb-8">
                Our Methodology
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { step: "01", title: "Analyze", desc: "Deep dive into your current performance and market position" },
                  { step: "02", title: "Strategy", desc: "Design integrated campaigns across all relevant channels" },
                  { step: "03", title: "Execute", desc: "Launch optimized campaigns with continuous monitoring" },
                  { step: "04", title: "Optimize", desc: "Data-driven improvements for maximum ROI" }
                ].map(item => (
                  <div key={item.step} className="text-center">
                    <div className="w-16 h-16 bg-portfolio-accent text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold text-portfolio-text mb-2">{item.title}</h3>
                    <p className="text-portfolio-text/80">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Needs Quadrant */}
            <div className="mb-6 sm:mb-12">
              <h2 className="text-2xl sm:text-4xl font-bold text-portfolio-text mb-4 sm:mb-8">How to Resolve Your Needs?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
                <div className="p-4 sm:p-6 border-2 border-portfolio-accent rounded-lg hover:border-portfolio-accent/80 transition-colors bg-portfolio-bg shadow-sm">
                  <p className="text-base sm:text-lg text-portfolio-text/80">1. We increase conversions on your website or app by reaching more potential clients.</p>
                </div>
                <div className="p-4 sm:p-6 border-2 border-portfolio-accent rounded-lg hover:border-portfolio-accent/80 transition-colors bg-portfolio-bg shadow-sm">
                  <p className="text-base sm:text-lg text-portfolio-text/80">2. We reduce acquisition costs to maximize the efficiency of digital investments.</p>
                </div>
                <div className="p-4 sm:p-6 border-2 border-portfolio-accent rounded-lg hover:border-portfolio-accent/80 transition-colors bg-portfolio-bg shadow-sm">
                  <p className="text-base sm:text-lg text-portfolio-text/80">3. We enhance visibility, trust, and brand recognition among potential clients.</p>
                </div>
                <div className="p-4 sm:p-6 border-2 border-portfolio-accent rounded-lg hover:border-portfolio-accent/80 transition-colors bg-portfolio-bg shadow-sm">
                  <p className="text-base sm:text-lg text-portfolio-text/80">4. We help your clients with a better digital experience and facilitate their path to conversion.</p>
                </div>
              </div>
            </div>

            {/* Partners and Certifications Section */}
            <div className="mb-6 sm:mb-12">
              <h2 className="text-2xl sm:text-4xl font-bold text-portfolio-text mb-4 sm:mb-8">
                Our Partners & Certifications
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
                <div className="flex flex-col items-center p-4 border border-portfolio-divider rounded-lg hover:border-portfolio-accent transition-colors">
                  <div className="w-16 h-16 bg-blue-600 rounded-lg mb-2 flex items-center justify-center text-white font-bold">
                    META
                  </div>
                  <span className="text-sm text-portfolio-text text-center">Business Partner</span>
                </div>
                <div className="flex flex-col items-center p-4 border border-portfolio-divider rounded-lg hover:border-portfolio-accent transition-colors">
                  <div className="w-16 h-16 bg-green-600 rounded-lg mb-2 flex items-center justify-center text-white font-bold text-2xl">
                    G
                  </div>
                  <span className="text-sm text-portfolio-text text-center">Google Partner</span>
                </div>
                <div className="flex flex-col items-center p-4 border border-portfolio-divider rounded-lg hover:border-portfolio-accent transition-colors">
                  <div className="w-16 h-16 bg-red-600 rounded-lg mb-2 flex items-center justify-center text-white font-bold">
                    YT
                  </div>
                  <span className="text-sm text-portfolio-text text-center">YouTube Certified</span>
                </div>
                <div className="flex flex-col items-center p-4 border border-portfolio-divider rounded-lg hover:border-portfolio-accent transition-colors">
                  <div className="w-16 h-16 bg-purple-600 rounded-lg mb-2 flex items-center justify-center text-white font-bold">
                    HJ
                  </div>
                  <span className="text-sm text-portfolio-text text-center">Hotjar Partner</span>
                </div>
              </div>
            </div>

            {/* Enhanced CTA Section */}
            <div className="mb-6 sm:mb-12 text-center bg-portfolio-accent/10 p-8 rounded-lg">
              <h2 className="text-2xl sm:text-4xl font-bold text-portfolio-text mb-3 sm:mb-4">
                Ready to scale your digital growth?
              </h2>
              <p className="text-lg text-portfolio-text/80 mb-6">
                Get a free audit of your current digital strategy and discover opportunities for growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-portfolio-accent text-white px-6 py-3 rounded-full hover:bg-portfolio-accent/80 transition-colors font-medium">
                  Get Free Audit
                </button>
                <button className="border-2 border-portfolio-accent text-portfolio-accent px-6 py-3 rounded-full hover:bg-portfolio-accent hover:text-white transition-colors font-medium">
                  Schedule a Call
                </button>
              </div>
            </div>

          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default UnitedMedia; 