import React, { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { useNavigation } from '../hooks/useNavigation';
import { smoothScrollToElement } from '../lib/scrollUtils';
import { NAVBAR_CONSTANTS } from '../constants/navbarConstants';

const Footer = lazy(() => import('./Footer'));
const InfoSection = lazy(() => import('./InfoSection'));

const Navbar = () => {
  const { isInfoOpen, isContactOpen, isOurCompanyOpen, toggleInfo, toggleContact, toggleOurCompany } = useNavigation();

  const handleWorkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    smoothScrollToElement('highlights', NAVBAR_CONSTANTS.SCROLL_DURATION);
  };

  return (
    <>
      <nav className={`w-full py-2 bg-portfolio-bg sticky top-0 overflow-x-hidden z-${NAVBAR_CONSTANTS.Z_INDEX.NAVBAR}`}>
        <div className="w-full max-w-[90%] mx-auto flex items-center">
          <div className="w-full relative flex items-center">
            <button
              onClick={isContactOpen ? toggleContact : isOurCompanyOpen ? toggleOurCompany : toggleInfo}
              aria-label="Close"
              className={`absolute left-0 text-portfolio-text hover:text-portfolio-highlight transition-all duration-${NAVBAR_CONSTANTS.ANIMATION_DURATION} ease-in-out rounded-full size-5 sm:size-6 md:size-8 flex items-center justify-center border border-portfolio-text hover:border-portfolio-highlight ${(isInfoOpen || isContactOpen || isOurCompanyOpen) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'}`}
            >
              <X size={14} className="sm:w-4 sm:h-4 md:w-5 md:h-5" />
            </button>
            <div className={`w-full flex items-center justify-between transition-transform duration-${NAVBAR_CONSTANTS.ANIMATION_DURATION} ease-in-out ${(isInfoOpen || isContactOpen || isOurCompanyOpen) ? 'translate-x-6 sm:translate-x-8 md:translate-x-12' : ''}`}>
              <Link
                to="/our-company"
                onClick={() => {
                  if (isInfoOpen) toggleInfo();
                  if (isContactOpen) toggleContact();
                  if (isOurCompanyOpen) toggleOurCompany();
                }}
                className={`text-portfolio-text uppercase font-bold hover:text-portfolio-highlight transition-all duration-${NAVBAR_CONSTANTS.ANIMATION_DURATION} ease-in-out text-base sm:text-lg md:text-xl`}
              >
                OUR COMPANY
              </Link>
              <Link
                to="/um"
                onClick={() => {
                  if (isInfoOpen) toggleInfo();
                  if (isContactOpen) toggleContact();
                  if (isOurCompanyOpen) toggleOurCompany();
                }}
                className={`text-portfolio-text uppercase font-bold hover:text-portfolio-highlight transition-all duration-${NAVBAR_CONSTANTS.ANIMATION_DURATION} ease-in-out text-base sm:text-lg md:text-xl`}
              >
                MEDIA
              </Link>
              <Link
                to="/events"
                onClick={() => {
                  if (isInfoOpen) toggleInfo();
                  if (isContactOpen) toggleContact();
                  if (isOurCompanyOpen) toggleOurCompany();
                }}
                className={`text-portfolio-text uppercase font-bold hover:text-portfolio-highlight transition-all duration-${NAVBAR_CONSTANTS.ANIMATION_DURATION} ease-in-out text-base sm:text-lg md:text-xl`}
              >
                Events
              </Link>
              <button
                onClick={toggleContact}
                className={`text-portfolio-text uppercase font-bold hover:text-portfolio-highlight transition-all duration-${NAVBAR_CONSTANTS.ANIMATION_DURATION} ease-in-out text-base sm:text-lg md:text-xl ${isContactOpen ? 'text-portfolio-highlight underline underline-offset-4 sm:underline-offset-8' : ''}`}
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Info Section */}
      <div
        className="w-full bg-portfolio-about-bg transition-all duration-500 ease-in-out hideScrollbar"
        style={{
          height: isInfoOpen ? '100vh' : '0',
          opacity: isInfoOpen ? 1 : 0,
          overflowY: isInfoOpen ? 'scroll' : 'hidden'
        }}
      >
        <div className="max-w-[95%] sm:max-w-[90%] mx-auto relative h-full">
          <div className="pt-16 sm:pt-24 pb-16 sm:pb-32 px-2 sm:px-4 h-full hideScrollbar">
            <Suspense fallback={<div className="h-full w-full flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-portfolio-accent"></div></div>}>
              {isInfoOpen && <InfoSection />}
            </Suspense>
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
        <div className="max-w-[95%] sm:max-w-[90%] mx-auto relative h-full">
          <div className="pt-16 sm:pt-24 px-2 sm:px-4 h-full overflow-hidden">
            <Suspense fallback={<div className="h-full w-full flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-portfolio-accent"></div></div>}>
              {isContactOpen && <Footer />}
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
