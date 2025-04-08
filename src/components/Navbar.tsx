import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '../components/ui/sheet';
import AnimatedEye from './hero/AnimatedEye';
import { X } from 'lucide-react';
import Footer from './Footer';

const Navbar = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const toggleAbout = () => {
    setIsAboutOpen(!isAboutOpen);
    setIsContactOpen(false); // Close contact when opening about
    if (!isAboutOpen) {
      document.body.classList.add('about-open');
    } else {
      document.body.classList.remove('about-open');
    }
  };

  const toggleContact = () => {
    setIsContactOpen(!isContactOpen);
    setIsAboutOpen(false); // Close about when opening contact
    if (!isContactOpen) {
      document.body.classList.add('contact-open');
    } else {
      document.body.classList.remove('contact-open');
    }
  };

  // Cleanup effect
  useEffect(() => {
    return () => {
      document.body.classList.remove('about-open');
      document.body.classList.remove('contact-open');
    };
  }, []);

  return (
    <>
      <nav className="w-full px-8 py-4 font-sans bg-portfolio-bg z-50 sticky top-0 overflow-x-hidden">
        <div className="max-w-[90%] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-8">
            <div className="relative flex items-center">
              <button 
                onClick={toggleAbout}
                className={`absolute text-portfolio-text hover:text-portfolio-highlight transition-all duration-500 ease-in-out rounded-full size-8 flex items-center justify-center border border-portfolio-text hover:border-portfolio-highlight ${isAboutOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
              >
                <X size={20} />
              </button>
              <button 
                onClick={toggleAbout}
                className={`text-portfolio-text uppercase font-bold hover:text-portfolio-highlight transition-all duration-500 ease-in-out ${isAboutOpen ? 'text-portfolio-highlight underline underline-offset-8 translate-x-12' : 'translate-x-0'}`}
              >
                About
              </button>
            </div>
            <div className={`flex items-center gap-8 transition-transform duration-500 ease-in-out ${isAboutOpen ? 'translate-x-14' : 'translate-x-0'}`}>
              <Link to="/" className="text-portfolio-text uppercase font-bold hover:text-portfolio-highlight transition-colors">
                Work
              </Link>
              <div className="relative flex items-center">
                <button 
                  onClick={toggleContact}
                  className={`absolute text-portfolio-text hover:text-portfolio-highlight transition-all duration-500 ease-in-out rounded-full size-8 flex items-center justify-center border border-portfolio-text hover:border-portfolio-highlight ${isContactOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                >
                  <X size={20} />
                </button>
                <button 
                  onClick={toggleContact}
                  className={`text-portfolio-text uppercase font-bold hover:text-portfolio-highlight transition-all duration-500 ease-in-out ${isContactOpen ? 'text-portfolio-highlight underline underline-offset-8 translate-x-12' : 'translate-x-0'}`}
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

      {/* About Section */}
      <div 
        className="w-full bg-[#283618] overflow-hidden transition-all duration-500 ease-in-out"
        style={{ 
          height: isAboutOpen ? '80vh' : '0',
          opacity: isAboutOpen ? 1 : 0
        }}
      >
        <div className="max-w-[90%] mx-auto relative h-full">
          <div className="pt-24 px-4 h-full overflow-hidden">
            <AboutContent />
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

const AboutContent = () => {
  return (
    <div className="max-w-[90%] mx-auto flex flex-col items-center md:items-start">
      <div className="w-full flex flex-col md:flex-row md:gap-16 items-center md:items-start">
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-[#f9f8e2] mb-4 md:mb-0 md:w-1/3">
          <img 
            alt="Award trophy" 
            className="w-full h-full object-cover" 
            src="/lovable-uploads/af5c0765-b397-4bf4-b0db-667ed840a472.png" 
          />
        </div>
        <div className="text-[#f9f8e2] md:w-2/3 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl mb-6">
            <span className="italic text-portfolio-highlight">The Integrated Marketing Agency</span>
          </h1>
          <p className="text-2xl md:text-3xl leading-relaxed mb-8">
            that champions brands through <span className="italic">advertising</span>, creates <span className="italic">events</span> that move people and turn them into customers, and drives results through smart<span className="italic"> media</span>.
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
      <div className="w-full mt-16 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-portfolio-highlight mb-8">Values</h2>
        <p className="text-2xl md:text-3xl leading-relaxed text-[#f9f8e2] opacity-80">
          UV is Zero Bullshit <EyeOfCuriosity /> Crazy High Standards <EyeOfCuriosity /><br/>
          Endless Passion <EyeOfCuriosity /> Celebrating Emotion <EyeOfCuriosity /> Taking<br/>
          Risks <EyeOfCuriosity /> Trusting Our Instincts <EyeOfCuriosity /> Being Human <EyeOfCuriosity /><br/>
          Making Work That's Human <EyeOfCuriosity /> Taking Work Seriously<br/>
          <EyeOfCuriosity /> Not Taking Ourselves Too Seriously
        </p>
      </div>
      
      {/* Services Section */}
      <div className="w-full mt-16 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-portfolio-highlight mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-x-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <ServiceItem name="Advertising" />
            <ServiceItem name="Art Direction" />
            <ServiceItem name="Animation" />
            <ServiceItem name="Branding" />
            <ServiceItem name="Brand Strategy" />
            <ServiceItem name="Consultancy" />
            <ServiceItem name="Copywriting" />
            <ServiceItem name="Concepts" />
            <ServiceItem name="Commercials" />
          </div>
          <div className="flex flex-col items-center md:items-start gap-4">
            <ServiceItem name="Digital" />
            <ServiceItem name="Design" />
            <ServiceItem name="Environmental" />
            <ServiceItem name="Exhibition" />
            <ServiceItem name="Film & Video" />
            <ServiceItem name="Identity" />
            <ServiceItem name="Illustration" />
            <ServiceItem name="Installation" />
            <ServiceItem name="Interactive" />
          </div>
          <div className="flex flex-col items-center md:items-start gap-4">
            <ServiceItem name="Naming" />
            <ServiceItem name="Mural Design" />
            <ServiceItem name="Packaging" />
            <ServiceItem name="Photography" />
            <ServiceItem name="Print / OOH" />
            <ServiceItem name="Social Strategy" />
            <ServiceItem name="Social Content" />
            <ServiceItem name="Strategy" />
            <ServiceItem name="Target Audience" />
            <ServiceItem name="Website Design" />
          </div>
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
    { bg: 'bg-portfolio-highlight', iris: 'bg-portfolio-text' },      // Default colors
    { bg: 'bg-white', iris: 'bg-portfolio-accent' },                  // White with turquoise
    { bg: 'bg-portfolio-accent', iris: 'bg-portfolio-text' },         // Turquoise with dark green
    { bg: 'bg-portfolio-soft-pink', iris: 'bg-portfolio-text' },      // Soft pink with dark green
    { bg: 'bg-portfolio-muted-purple', iris: 'bg-white' },            // Muted purple with white
    { bg: 'bg-portfolio-text-secondary', iris: 'bg-portfolio-highlight' }, // Gray with yellow
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

export default Navbar;
