import React from 'react';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Footer from '../components/Footer';

const OurCompany = () => {
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
  const companyInfo = {
    name: "United Vision",
    year: "1999",
    tagline: "UV is the integrated marketing agency that grows your brand through Omnichannel campaigns, crafts Events that move people to create customers, and delivers results through Smart Media.\nOne agency, all in.",
    description: "UV is the integrated marketing agency that grows your brand through Omnichannel campaigns, crafts Events that move people to create customers, and delivers results through Smart Media.\nOne agency, all in.",
    history: "Founded with a vision to blend cutting-edge technology with creative storytelling, UV has grown from a small team of passionate individuals into a powerhouse of innovation. Our journey has been marked by a relentless pursuit of excellence, a commitment to our clients' success, and a culture that fosters creativity and collaboration. We've embraced challenges, celebrated milestones, and continuously evolved to meet the ever-changing demands of the digital landscape.",
    videoRecapUrl: "https://player.vimeo.com/video/123456789?color=EBA3A9&title=0&byline=0&portrait=0", // Placeholder video
    categories: ["Advertising", "Media", "Events"],
    client: "Independent Agency",
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
    "2025 AWWWARDS Honorable Mention",
    "2025 THE FWA Website Of The Day",
    "2025 CSS DESIGN AWARDS Website Of The Day",
  ];

  return (
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
              
              <h1 className="text-7xl font-bold text-portfolio-text">{companyInfo.name}</h1>
              
              <span className="project-year-tag text-base px-6 py-2 rounded-full bg-portfolio-tag-bg text-portfolio-tag-text">
                {companyInfo.year}
              </span>
                
              {companyInfo.categories.map((category) => (
                <span key={category} className="project-category-tag text-base px-6 py-2 border rounded-full">
                  {category}
                </span>
              ))}
            </div>
            
            <p className="text-4xl text-portfolio-text/90 font-light leading-tight max-w-4xl mt-6">
              {companyInfo.tagline}
            </p>
            
            <div className="mt-6 flex flex-wrap gap-4">
              <div className="text-portfolio-text/70">
                <span className="font-semibold">Type:</span> {companyInfo.client}
              </div>
              
              {companyInfo.emojis && (
                <div className="text-portfolio-text/70 flex items-center">
                  <span className="font-semibold mr-2">Vibes:</span>
                  {companyInfo.emojis.map((emoji, index) => (
                    <span key={index} className="text-2xl mx-1">{emoji}</span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Video Section */}
          <div className="mb-16 overflow-hidden rounded-lg bg-black">
            <AspectRatio ratio={16/9}>
              <iframe
                src={companyInfo.videoRecapUrl}
                width="100%"
                height="100%"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                style={{ background: "black" }}
                title="UV Company Recap"
              />
            </AspectRatio>
          </div>

          {/* Description Section */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-portfolio-text mb-4">About Us</h2>
            <div className="text-2xl text-portfolio-text/80 font-light whitespace-pre-line">
              {companyInfo.description}
            </div>
          </div>

          {/* History Section */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-portfolio-text mb-4">Our Story</h2>
            <div className="text-2xl text-portfolio-text/80 font-light whitespace-pre-line">
              {companyInfo.history}
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-portfolio-text mb-8">Our Values <span role="img" aria-label="love">🥰</span></h2>
            <div className="text-2xl text-portfolio-text/80 font-light space-y-6">
              {values.map((value) => (
                <div key={value.name}>
                  <p className="font-semibold inline-block mr-2">{value.name}</p>
                  <p className="inline">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Awards Section */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-portfolio-text mb-8">Awards & Recognition <span role="img" aria-label="trophy">🏆</span></h2>
            <div className="text-2xl text-portfolio-text/80 font-light">
              {awards.map((award, index) => (
                <p key={index}>{award}</p>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default OurCompany; 