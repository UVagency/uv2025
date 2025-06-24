import React, { Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Footer from '../components/Footer';
import { SEO } from '../components/SEO';
import { CompanyVideo, CompanyValues, CompanyAwards } from '../components/lazy';
import { useNavigation } from '../hooks/useNavigation';

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

const OurCompany = () => {
  const navigate = useNavigate();
  const { toggleOurCompany } = useNavigation();
  
  const handleClose = () => {
    toggleOurCompany();
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
  const companyInfo = {
    name: "United Visions",
    year: "1999",
    tagline: "UV is the integrated marketing agency that grows your brand through Omnichannel campaigns, crafts Events that move people to create customers, and delivers results through Smart Media.\nOne agency, all in.",
    description: "UV is a Full-service in house independent agency that champions brands through advertising, engineers events that move people to create customers, and drives results through smart media. We specialize in strategy, creativity, content, media and experiences- all connected to help brands grow, inspire, and stay relevant in a constantly shifting world. We're grateful to be working with top brands and passionate teams to create work that resonates - emotionally and measurably. We love what we do and we know that hard work pays off.",
    history: "Founded with a vision to blend cutting-edge technology with creative storytelling, UV has grown from a small team of passionate individuals into a powerhouse of innovation. Our journey has been marked by a relentless pursuit of excellence, a commitment to our clients' success, and a culture that fosters creativity and collaboration. We've embraced challenges, celebrated milestones, and continuously evolved to meet the ever-changing demands of the digital landscape.",
    videoRecapUrl: "", // Placeholder video
    categories: ["Advertising", "Media", "Events"],
    client: "One Agency, All In. Full Service Independent Agency",
  };

  const values = [
    { name: "Multicultural by Design", description: "We thrive in diverse contexts. Different cultures, languages, and perspectives enrich our creativity and sharpen our thinking. We build for a global world — with local understanding." },
    { name: "Human-Centered Thinking", description: "People come first. We design and communicate with empathy, emotional intelligence, and awareness — never losing sight of the human on the other side." },
    { name: "Radical Transparency", description: "We speak with honesty and clarity — with clients, within our team, always. Open dialogue is how we build trust and move forward, even through tension." },
    { name: "Co-Creation", description: "The best work happens when we build together. We collaborate with clients and teammates as partners, listening actively and shaping ideas collectively." },
    { name: "Bold Intuition", description: "We trust our instincts and take calculated risks. Experience, curiosity, and courage guide us to solutions that make a real difference." },
    { name: "Excellence in the Details", description: "We don't do things halfway. Every touchpoint matters — from a campaign to a line of code. We aim for professional excellence, every time." },
    { name: "Balanced Flow", description: "We believe that giving and receiving are part of the same cycle. Our work is rooted in reciprocity, acknowledgment, and shared growth." },
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

  const coreTeam = [
    { name: "Cristina Recalde", title: "Creative Director", url: "https://www.linkedin.com/in/cristinarecalde/", photo: "/images/team/cristinarecalde.jpeg" },
    { name: "Lorena Cambas", title: "CFO", url: "https://www.linkedin.com/in/lorena-vanesa-cambas-5a714a23/", photo: "/images/team/lorenacambas.jpeg" },
    { name: "Agustin Herrero", title: "COO", url: "https://www.linkedin.com/in/agustinherrero/", photo: "/images/team/agustinherrero.jpeg" },
    { name: "Javier Severini", title: "CEO", url: "https://www.linkedin.com/in/javierseverini/", photo: "/images/team/javierseverini.jpeg" },
  ];

  const careers = [
    { title: "Strategic Sales Executive", description: "Drive growth through strategic partnerships and sales initiatives" },
    { title: "Senior Strategy Director", description: "Lead strategic initiatives and shape the future of our agency" },
    { title: "Media Planner", description: "Develop and execute strategic media plans across multiple channels" },
    { title: "Senior Producer", description: "Oversee production of high-impact creative campaigns and content" },
    { title: "AI Technical Director", description: "Lead the integration of AI technologies into creative solutions" },
    { title: "Data Scientist", description: "Transform data into actionable insights for campaign optimization" },
    { title: "AI Creative Tech", description: "Pioneer innovative AI-driven creative solutions and experiences" },
  ];
  

  return (
    <div className="min-h-screen bg-portfolio-bg">
      <SEO 
        title="Our Company | UV Agency"
        description="Learn about UV Agency's mission, values, and the team behind our innovative media experiences. Discover how we're shaping the future of creative events."
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
                
                <h1 className="text-2xl sm:text-4xl md:text-7xl font-bold text-portfolio-text">{companyInfo.name}</h1>
                
                <span className="project-year-tag text-xs sm:text-base px-3 sm:px-6 py-1 sm:py-2 rounded-full bg-portfolio-tag-bg text-portfolio-tag-text">
                  {companyInfo.year}
                </span>
                  
                {companyInfo.categories.map((category) => (
                  <span key={category} className="project-category-tag text-xs sm:text-base px-3 sm:px-6 py-1 sm:py-2 border rounded-full">
                    {category}
                  </span>
                ))}
              </div>
              
              <p className="text-base sm:text-2xl md:text-4xl text-portfolio-text/90 font-light leading-tight mt-3 sm:mt-6">
                {companyInfo.tagline}
              </p>
              
              <div className="mt-4 sm:mt-6 flex flex-wrap gap-2 sm:gap-4">
                <div className="text-portfolio-text/70 text-xs sm:text-base">
                  <span className="font-semibold">Type:</span> {companyInfo.client}
                </div>
              </div>
            </div>

            {/* Video Section */}
            <Suspense fallback={<SectionLoading />}>
              <CompanyVideo videoUrl={companyInfo.videoRecapUrl} />
            </Suspense>

            {/* History Section */}
            <div className="mb-6 sm:mb-12">
              <h2 className="text-2xl sm:text-4xl font-bold text-portfolio-text mb-3 sm:mb-4">Our Story</h2>
              <div className="text-lg sm:text-2xl text-portfolio-text/80 font-light whitespace-pre-line">
                {companyInfo.history}
              </div>
            </div>

            {/* Description Section */}
            <div className="mb-6 sm:mb-12">
              <h2 className="text-2xl sm:text-4xl font-bold text-portfolio-text mb-3 sm:mb-4">About Us</h2>
              <div className="text-lg sm:text-2xl text-portfolio-text/80 font-light whitespace-pre-line">
                {companyInfo.description}
              </div>
            </div>

            {/* Core Team Management Section */}
            <div className="mb-6 sm:mb-12">
              <h2 className="text-2xl sm:text-4xl font-bold text-portfolio-text mb-3 sm:mb-4">Core Team</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
                {coreTeam.map((member) => (
                  <div key={member.url} className="flex flex-col items-center bg-portfolio-bg/80 rounded-lg p-4 sm:p-6 shadow-md">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover mb-3 sm:mb-4 border-2 border-portfolio-accent"
                    />
                    <a
                      href={member.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base sm:text-xl font-semibold underline hover:text-portfolio-text text-portfolio-text text-center"
                    >
                      {member.name}
                    </a>
                    <p className="text-sm sm:text-lg text-portfolio-text/70 mt-1">{member.title}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Values Section */}
            <Suspense fallback={<SectionLoading />}>
              <CompanyValues values={values} />
            </Suspense>

            {/* Services Section */}
            <div className="mb-6 sm:mb-12">
              <h2 className="text-2xl sm:text-4xl font-bold text-portfolio-text mb-4 sm:mb-8">Our Services <span role="img" aria-label="handshake">🤝</span></h2>
              <div className="text-lg sm:text-2xl text-portfolio-text/80 font-light space-y-3 sm:space-y-6">
                <div>
                  <p className="font-semibold inline-block mr-2">Brand Building</p>
                  <p className="inline">Developing and positioning brands with clarity and impact</p>
                </div>
                <div>
                  <p className="font-semibold inline-block mr-2">Advertising</p>
                  <p className="inline">Crafting creative and results-driven campaigns</p>
                </div>
                <div>
                  <p className="font-semibold inline-block mr-2">Exhibition</p>
                  <p className="inline">Designing immersive event and brand experiences</p>
                </div>
                <div>
                  <p className="font-semibold inline-block mr-2">Target Audience</p>
                  <p className="inline">Engaging the right people with precision</p>
                </div>
                <div>
                  <p className="font-semibold inline-block mr-2">Social Strategy & Content</p>
                  <p className="inline">Planning and producing content that connects</p>
                </div>
              </div>
            </div>

            {/* Careers Section */}
            <div className="mb-6 sm:mb-12">
              <h2 className="text-2xl sm:text-4xl font-bold text-portfolio-text mb-3 sm:mb-4">Careers <span role="img" aria-label="rocket">🚀</span></h2>
              <p className="text-lg sm:text-2xl text-portfolio-text/80 font-light mb-4 sm:mb-8">Your next adventure starts here.</p>
              <div className="text-lg sm:text-2xl text-portfolio-text/80 font-light space-y-3 sm:space-y-6">
                {careers.map((career, index) => (
                  <div key={index}>
                    <p className="font-semibold inline-block mr-2">{career.title}</p>
                    <p className="inline">{career.description}</p>
                  </div>
                ))}
              </div>
            </div>

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

export default OurCompany; 