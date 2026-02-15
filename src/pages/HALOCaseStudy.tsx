import React from "react";
import Footer from "../components/Footer";
import { SEO } from "../components/SEO";
import InfluencerReels from "../components/project/InfluencerReels";

// Influencer videos data
const influencerVideos = [
  { id: "1", name: "Fernando Altamirano", videoUrl: "/videos/halo/fernando-altamirano.mp4" },
  { id: "2", name: "Cate Ceccarelli", videoUrl: "/videos/halo/cate-ceccarelli-1.mp4" },
  { id: "3", name: "Cate Ceccarelli", videoUrl: "/videos/halo/cate-ceccarelli-2.mp4" },
  { id: "4", name: "Coni Araya", videoUrl: "/videos/halo/coni-araya.mp4" },
  { id: "5", name: "Connie Araya", videoUrl: "/videos/halo/connie-araya.mp4" },
  { id: "6", name: "Cata Rozas", videoUrl: "/videos/halo/cata-rozas-1.mp4" },
  { id: "7", name: "Cata Rozas", videoUrl: "/videos/halo/cata-rozas-2.mp4" },
  { id: "8", name: "Pepe Lopez", videoUrl: "/videos/halo/pepe-lopez.mp4" },
  { id: "9", name: "Nicolás Cifuentes", videoUrl: "/videos/halo/nicolas-cifuentes.mp4" },
];

const HALOCaseStudy: React.FC = () => {
  return (
    <>
      <SEO 
        title="Under Armour HALO collection Launch | Case Study | UV"
        description="An immersive brand activation that transformed Under Armour HALO collection launch into a content-generating machine."
      />
      
      <main className="bg-portfolio-bg">
        {/* Hero Section with Video */}
        <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black z-10" />
            <iframe
              src="https://player.vimeo.com/video/1138086846?background=1&autoplay=1&loop=1&muted=1"
              className="w-full h-full object-cover scale-150"
              allow="autoplay; fullscreen"
              style={{ border: 0 }}
            />
          </div>
          
          <div className="relative z-20 text-center px-4 max-w-5xl">
            <span className="inline-block px-4 py-2 bg-red-600 text-white text-sm font-bold mb-6 rounded">
              UNDER ARMOUR
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tight">
              HALO
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
              We didn't want to just do a launch—we wanted to create a cultural moment.
              Not just a product reveal. A statement.
            </p>
          </div>
          
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
            <svg className="w-8 h-8 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>

        {/* The Challenge */}
        <section className="py-20 md:py-32 bg-portfolio-bg">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl md:text-6xl font-bold text-portfolio-text mb-8">
              The Challenge
            </h2>
            <p className="text-xl md:text-2xl text-portfolio-text/80 leading-relaxed mb-8">
              Under Armour came to us with a challenge: launch HALO—their most innovative 
              collection—in a way that would cut through the noise and resonate with a new 
              generation of athletes.
            </p>
            <p className="text-xl md:text-2xl text-portfolio-text/80 leading-relaxed">
              The insight was simple but powerful: in 2024, the best marketing doesn't look 
              like marketing. So we designed an experience where every guest became a content 
              creator, every corner became a photo opportunity, and the brand message spread 
              organically through the feeds of Chile's most influential voices.
            </p>
          </div>
        </section>

        {/* Content First - Full width image grid */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 text-center">
              Content-First Design
            </h2>
            <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto text-lg">
              Every decision—lighting angles, LED placements, spatial flow—was made with 
              one question: Will this look incredible on camera?
            </p>
            
            {/* Photo Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
              <div className="aspect-square">
                <img src="/images/projects/under-armour-halo/under-armour-halo-01.webp" alt="HALO Event" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square">
                <img src="/images/projects/under-armour-halo/under-armour-halo-02.webp" alt="HALO Event" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square">
                <img src="/images/projects/under-armour-halo/under-armour-halo-03.webp" alt="HALO Event" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square">
                <img src="/images/projects/under-armour-halo/under-armour-halo-04.webp" alt="HALO Event" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square">
                <img src="/images/projects/under-armour-halo/under-armour-halo-05.webp" alt="HALO Event" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square">
                <img src="/images/projects/under-armour-halo/under-armour-halo-06.webp" alt="HALO Event" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Influencer Reels Section */}
        <InfluencerReels 
          videos={influencerVideos}
          title="The Content Machine"
        />

        {/* Results */}
        <section className="py-20 md:py-32 bg-portfolio-bg">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl md:text-6xl font-bold text-portfolio-text mb-12 text-center">
              Results
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-4xl md:text-6xl font-black text-red-600">50+</div>
                <div className="text-portfolio-text/60 mt-2">Influencers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-6xl font-black text-red-600">100%</div>
                <div className="text-portfolio-text/60 mt-2">Organic Content</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-6xl font-black text-red-600">0</div>
                <div className="text-portfolio-text/60 mt-2">Directed Posts</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-6xl font-black text-red-600">↑</div>
                <div className="text-portfolio-text/60 mt-2">Retail Lift</div>
              </div>
            </div>
            
            <p className="text-xl text-portfolio-text/80 text-center italic">
              "Guests didn't share because we asked them to. They shared because not sharing 
              would have meant missing out on the moment."
            </p>
          </div>
        </section>

        {/* Full Video Case */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 text-center">
              Watch the Full Case Study
            </h2>
            <div className="aspect-video">
              <iframe
                src="https://player.vimeo.com/video/1138086846"
                className="w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                style={{ border: 0 }}
              />
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default HALOCaseStudy;
