import React from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import Footer from './Footer';
import InfoSection from './InfoSection';
import { useNavigation } from '../hooks/useNavigation';
import { smoothScrollToElement } from '../lib/scrollUtils';
import { NAVBAR_CONSTANTS } from '../constants/navbarConstants';

const Navbar = () => {
  const { isInfoOpen, isContactOpen, isOurCompanyOpen, toggleInfo, toggleContact, toggleOurCompany } = useNavigation();

  const handleWorkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    smoothScrollToElement('highlights', NAVBAR_CONSTANTS.SCROLL_DURATION);
  };

  return (
    <>
      <nav className={`w-full px-4 py-2 font-sans bg-portfolio-bg sticky top-0 overflow-x-hidden z-${NAVBAR_CONSTANTS.Z_INDEX.NAVBAR}`}>
        <div className="max-w-[90%] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4 md:gap-8">
            <div className="relative flex items-center">
              <button 
                onClick={isContactOpen ? toggleContact : isOurCompanyOpen ? toggleOurCompany : toggleInfo}
                className={`absolute left-0 text-portfolio-text hover:text-portfolio-highlight transition-all duration-${NAVBAR_CONSTANTS.ANIMATION_DURATION} ease-in-out rounded-full size-6 md:size-8 flex items-center justify-center border border-portfolio-text hover:border-portfolio-highlight ${(isInfoOpen || isContactOpen || isOurCompanyOpen) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
              >
                <X size={16} className="md:w-5 md:h-5" />
              </button>
              <div className={`flex items-center gap-4 md:gap-8 transition-transform duration-${NAVBAR_CONSTANTS.ANIMATION_DURATION} ease-in-out ${(isInfoOpen || isContactOpen || isOurCompanyOpen) ? 'translate-x-8 md:translate-x-12' : ''}`}>
                <button 
                  onClick={toggleInfo}
                  className={`text-portfolio-text uppercase font-bold hover:text-portfolio-highlight transition-all duration-${NAVBAR_CONSTANTS.ANIMATION_DURATION} ease-in-out text-xl ${isInfoOpen ? 'text-portfolio-highlight underline underline-offset-8' : ''}`}
                >
                  INFO
                </button>
                <Link 
                  to="/united-media"
                  className="text-portfolio-text uppercase font-bold hover:text-portfolio-highlight transition-colors text-xl"
                >
                  United Media
                </Link>
                <Link 
                  to="/our-company"
                  onClick={toggleOurCompany}
                  className={`text-portfolio-text uppercase font-bold hover:text-portfolio-highlight transition-all duration-${NAVBAR_CONSTANTS.ANIMATION_DURATION} ease-in-out text-xl ${isOurCompanyOpen ? 'text-portfolio-highlight underline underline-offset-8' : ''}`}
                >
                  Our Company
                </Link>
                <button 
                  onClick={toggleContact}
                  className={`text-portfolio-text uppercase font-bold hover:text-portfolio-highlight transition-all duration-${NAVBAR_CONSTANTS.ANIMATION_DURATION} ease-in-out text-xl ${isContactOpen ? 'text-portfolio-highlight underline underline-offset-8' : ''}`}
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
          <div>
            {/* AnimatedEye component removed */}
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
            <InfoSection />
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div 
        className={`fixed bottom-0 left-0 w-full bg-portfolio-about-bg overflow-hidden z-${NAVBAR_CONSTANTS.Z_INDEX.CONTACT_SECTION} transition-all ${isContactOpen ? 'duration-500' : 'duration-300'}`}
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

export default Navbar;
