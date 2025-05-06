import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '../components/ui/sheet';
import AnimatedEye from './hero/AnimatedEye';
import { X } from 'lucide-react';
import Footer from './Footer';

const Navbar = () => {
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const handleToggleInfo = () => {
      toggleInfo();
    };

    window.addEventListener('toggleInfo', handleToggleInfo);
    return () => {
      window.removeEventListener('toggleInfo', handleToggleInfo);
    };
  }, []);

  const toggleInfo = () => {
    if (isContactOpen) {
      setIsContactOpen(false);
      document.body.classList.remove('contact-open');
    }
    setIsInfoOpen(!isInfoOpen);
    if (!isInfoOpen) {
      document.body.classList.add('info-open');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.body.classList.remove('info-open');
    }
  };

  const toggleContact = () => {
    if (isInfoOpen) {
      setIsInfoOpen(false);
      document.body.classList.remove('info-open');
    }
    setIsContactOpen(!isContactOpen);
    if (!isContactOpen) {
      document.body.classList.add('contact-open');
    } else {
      document.body.classList.remove('contact-open');
    }
  };

  // Cleanup effect
  useEffect(() => {
    return () => {
      document.body.classList.remove('info-open');
      document.body.classList.remove('contact-open');
    };
  }, []);

  return (
    <>
      <nav className="w-full px-4 py-2 font-sans bg-portfolio-bg z-50 sticky top-0 overflow-x-hidden">
        <div className="max-w-[90%] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4 md:gap-8">
            <div className="relative flex items-center">
              <button 
                onClick={isContactOpen ? toggleContact : toggleInfo}
                className={`absolute left-0 text-portfolio-text hover:text-portfolio-highlight transition-all duration-500 ease-in-out rounded-full size-6 md:size-8 flex items-center justify-center border border-portfolio-text hover:border-portfolio-highlight ${(isInfoOpen || isContactOpen) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
              >
                <X size={16} className="md:w-5 md:h-5" />
              </button>
              <div className={`flex items-center gap-4 md:gap-8 transition-transform duration-500 ease-in-out ${(isInfoOpen || isContactOpen) ? 'translate-x-8 md:translate-x-12' : ''}`}>
                <button 
                  onClick={toggleInfo}
                  className={`text-portfolio-text uppercase font-bold hover:text-portfolio-highlight transition-all duration-500 ease-in-out text-sm md:text-base ${isInfoOpen ? 'text-portfolio-highlight underline underline-offset-8' : ''}`}
                >
                  INFO
                </button>
                <Link 
                  to="/#highlights" 
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById('highlights');
                    if (element) {
                      const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
                      const startPosition = window.pageYOffset;
                      const distance = targetPosition - startPosition;
                      const duration = 1000;
                      let start = null;

                      function animation(currentTime) {
                        if (start === null) start = currentTime;
                        const timeElapsed = currentTime - start;
                        const progress = Math.min(timeElapsed / duration, 1);
                        const easeInOutCubic = progress < 0.5
                          ? 4 * progress * progress * progress
                          : 1 - Math.pow(-2 * progress + 2, 3) / 2;

                        window.scrollTo(0, startPosition + distance * easeInOutCubic);

                        if (timeElapsed < duration) {
                          requestAnimationFrame(animation);
                        }
                      }

                      requestAnimationFrame(animation);
                    }
                  }}
                  className="text-portfolio-text uppercase font-bold hover:text-portfolio-highlight transition-colors text-sm md:text-base"
                >
                  Work
                </Link>
                <button 
                  onClick={toggleContact}
                  className={`text-portfolio-text uppercase font-bold hover:text-portfolio-highlight transition-all duration-500 ease-in-out text-sm md:text-base ${isContactOpen ? 'text-portfolio-highlight underline underline-offset-8' : ''}`}
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
          <div>
            <AnimatedEye />
          </div>
        </div>
      </nav>

      {/* Info Section */}
      <div 
        className="w-full bg-[#283618] transition-all duration-500 ease-in-out hideScrollbar"
        style={{ 
          height: isInfoOpen ? '100vh' : '0',
          opacity: isInfoOpen ? 1 : 0,
          overflowY: isInfoOpen ? 'scroll' : 'hidden'
        }}
      >
        <div className="max-w-[90%] mx-auto relative h-full">
          <div className="pt-24 pb-32 px-4 h-full hideScrollbar">
            <InfoContent />
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div 
        className={`fixed bottom-0 left-0 w-full bg-portfolio-about-bg overflow-hidden z-40 transition-all ${isContactOpen ? 'duration-500' : 'duration-300'}`}
        style={{ 
          height: isContactOpen ? '80vh' : '0',
          transform: `translateY(${isContactOpen ? '0' : '100%'})`,
          opacity: 1
        }}
      >
        <div className="max-w-[90%] mx-auto relative h-full">
          <div className="pt-24 px-4 h-full overflow-hidden">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

const InfoContent = () => {
  return (
    <div className="max-w-[90%] mx-auto flex flex-col items-center md:items-start pb-16">
      <div className="w-full flex flex-col md:flex-row md:gap-16 items-center md:items-start">
        <div className="w-32 h-32 overflow-hidden">
          <img 
            alt="UV Logo" 
            className="w-full h-full object-cover rounded-full" 
            src="/images/uv_logo.png" 
          />
        </div>
        <div className="text-[#f9f8e2] md:w-2/3 text-center md:text-left">
          <h1 className="text-4xl md:text-4xl mb-6">
            <span className="italic text-portfolio-highlight">The Integrated Marketing Agency</span>
          </h1>
          <p className="text-2xl md:text-3xl leading-relaxed mb-6">
            UV is a Full-service in house indepentent agency that champions brands through <span className="italic">advertising</span>, engineers <span className="italic">events</span> that move people to create customers, and drives results through smart<span className="italic"> media</span>.
          </p>
          <p className="text-2xl md:text-3xl leading-relaxed mb-6">
            We specialize in <span className="italic">strategy, creativity, content, media and experiences</span>- all connected to help brands{" "}
            <span className="italic">grow, inspire,</span> and stay <span className="italic">relevant</span> in a constantly shifting world.
          </p>
          <p className="text-2xl md:text-3xl leading-relaxed mb-6">
            We're grateful to be working with top brands and passionate teams to create work that{" "}
            <span className="italic">resonates - emotionally</span> and <span className="italic">measurably</span>.
          </p>
          <p className="text-2xl md:text-3xl leading-relaxed">
            We love what we do and we know that <span className="italic">hard work pays off</span>.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="w-full mt-16 text-center md:text-left md:pl-48">
        <h2 className="text-xl uppercase font-bold text-[#f9f8e2] mb-8">Values<span> 🥰</span></h2>
        <div className="text-[#f9f8e2] space-y-6">
          <div>
            <p className="text-lg font-semibold inline-block mr-2">UV is Zero Bullshit</p>
            <p className="text-sm opacity-80 inline">Direct and honest communication in everything we do</p>
          </div>
          <div>
            <p className="text-lg font-semibold inline-block mr-2">Crazy High Standards</p>
            <p className="text-sm opacity-80 inline">Excellence is not an option, it's our standard</p>
          </div>
          <div>
            <p className="text-lg font-semibold inline-block mr-2">Taking Risks</p>
            <p className="text-sm opacity-80 inline">Bold moves lead to breakthrough results</p>
          </div>
          <div>
            <p className="text-lg font-semibold inline-block mr-2">Trusting Our Instincts</p>
            <p className="text-sm opacity-80 inline">Experience and intuition guide our decisions</p>
          </div>
          <div>
            <p className="text-lg font-semibold inline-block mr-2">Being Human</p>
            <p className="text-sm opacity-80 inline">Authenticity is at the core of our work</p>
          </div>
          <div>
            <p className="text-lg font-semibold inline-block mr-2">Making Work That's Humane</p>
            <p className="text-sm opacity-80 inline">We create with empathy and understanding</p>
          </div>
          <div>
            <p className="text-lg font-semibold inline-block mr-2">Taking Work Seriously</p>
            <p className="text-sm opacity-80 inline">Professional excellence in every detail</p>
          </div>
          <div>
            <p className="text-lg font-semibold inline-block mr-2">Not Taking Ourselves Too Seriously</p>
            <p className="text-sm opacity-80 inline">We maintain a light heart while doing serious work</p>
          </div>
        </div>
      </div>
      
      {/* Services Section */}
      <div className="w-full mt-16 text-center md:text-left md:pl-48">
        <h2 className="text-xl uppercase font-bold text-[#f9f8e2] mb-8">Our Services<span> 🤝</span></h2>
        <div className="text-[#f9f8e2] space-y-6">
  <div>
    <p className="text-lg font-semibold inline-block mr-2">Brand Building</p>
    <p className="text-sm opacity-80 inline">Developing and positioning brands with clarity and impact</p>
  </div>
  <div>
    <p className="text-lg font-semibold inline-block mr-2">Advertising</p>
    <p className="text-sm opacity-80 inline">Crafting creative and results-driven campaigns</p>
  </div>
  <div>
    <p className="text-lg font-semibold inline-block mr-2">Exhibition</p>
    <p className="text-sm opacity-80 inline">Designing immersive event and brand experiences</p>
  </div>
  <div>
    <p className="text-lg font-semibold inline-block mr-2">Target Audience</p>
    <p className="text-sm opacity-80 inline">Engaging the right people with precision</p>
  </div>
  <div>
    <p className="text-lg font-semibold inline-block mr-2">Social Strategy & Content</p>
    <p className="text-sm opacity-80 inline">Planning and producing content that connects</p>
  </div>
</div>
      </div>

      {/* Products Section */}
      <div className="w-full mt-16 text-center md:text-left md:pl-48">
        <h2 className="text-xl uppercase font-bold text-[#f9f8e2] mb-8">Our Products<span> 🛠️</span></h2>
        <div className="text-[#f9f8e2] space-y-6">
          <div>
            <p className="text-lg font-semibold inline-block mr-2">Sense</p>
            <p className="text-sm opacity-80 inline">Physical presence to digital insights</p>
          </div>
          <div>
            <p className="text-lg font-semibold inline-block mr-2">Grateful</p>
            <p className="text-sm opacity-80 inline">Empower your businesses with crypto payments that are fast, secure, and cost-effective, so you keep more of what you earn.</p>
          </div>
          <div>
            <p className="text-lg font-semibold inline-block mr-2">Tril</p>
            <p className="text-sm opacity-80 inline">A social platform for discovering and sharing personalized recommendations in music, movies, books, and more — connecting users through cultural taste and trusted suggestions.</p>
          </div>
        </div>
      </div>

      {/* Awards & Festivals Section */}
      <div className="w-full mt-16 text-center md:text-left md:pl-48">
        <h2 className="text-xl uppercase font-bold text-[#f9f8e2] mb-8">Awards & Festivals 🏆</h2>
        <div className="text-[#f9f8e2]">
          <p>2025 AWWWARDS Honorable Mention</p>
          <p>2025 THE FWA Website Of The Day</p>
          <p>2025 CSS DESIGN AWARDS Website Of The Day</p>
        </div>
      </div>
    </div>
  );
};

const ServiceItem = ({ name }: { name: string }) => {
  return (
    <div className="flex items-center gap-3 justify-center md:justify-start">
      <EyeOfCuriosity />
      <span className="text-xl md:text-2xl text-[#f9f8e2] opacity-80">{name}</span>
    </div>
  );
};

const EyeOfCuriosity = () => {
  const colorPalette = [
    { bg: 'bg-portfolio-accent', iris: 'bg-portfolio-text' },         // Turquoise with dark green
  ];

  const [colorScheme, setColorScheme] = useState(() => {
    return colorPalette[Math.floor(Math.random() * colorPalette.length)];
  });

  return (
    <span className="inline-flex items-center justify-center mx-2 transform scale-75">
      <div className="relative w-[28px] h-[28px]">
        <div className={`absolute inset-0 rounded-full ${colorScheme.bg} border border-portfolio-text overflow-hidden`}>
          <div 
            className={`absolute left-1/2 top-1/2 w-[18px] h-[18px] rounded-full ${colorScheme.iris} 
                     transition-all duration-300`}
            style={{ 
              transform: 'translate(-50%, -50%)',
            }}
          >
            <div 
              className="absolute left-1/2 top-1/2 w-[10px] h-[10px] rounded-full bg-portfolio-bg transition-all duration-300"
              style={{ 
                transform: 'translate(-50%, -50%)',
              }}
            >
              <div className="absolute top-1 left-1 w-[3px] h-[3px] rounded-full bg-white opacity-80"></div>
            </div>
          </div>
        </div>
      </div>
    </span>
  );
};

const NavButton = ({ onClick, isOpen, label }) => (
  <div className="relative flex items-center">
    <button 
      onClick={onClick}
      className={`absolute text-portfolio-text hover:text-portfolio-highlight transition-all duration-500 ease-in-out rounded-full size-8 flex items-center justify-center border border-portfolio-text hover:border-portfolio-highlight ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
    >
      <X size={20} />
    </button>
    <button 
      onClick={onClick}
      className={`text-portfolio-text uppercase font-bold hover:text-portfolio-highlight transition-all duration-500 ease-in-out ${isOpen ? 'text-portfolio-highlight underline underline-offset-8 translate-x-12' : ''}`}
    >
      {label}
    </button>
  </div>
);

export default Navbar;
