import { useState, useEffect } from 'react';
import { NavigationState } from '../types';
import { NAVBAR_CONSTANTS } from '../constants/navbarConstants';

export const useNavigation = (): NavigationState => {
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isOurCompanyOpen, setIsOurCompanyOpen] = useState(false);

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
      document.body.classList.remove(NAVBAR_CONSTANTS.CLASSES.CONTACT_OPEN);
    }
    if (isOurCompanyOpen) {
      setIsOurCompanyOpen(false);
      document.body.classList.remove(NAVBAR_CONSTANTS.CLASSES.OUR_COMPANY_OPEN);
    }
    setIsInfoOpen(!isInfoOpen);
    if (!isInfoOpen) {
      document.body.classList.add(NAVBAR_CONSTANTS.CLASSES.INFO_OPEN);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.body.classList.remove(NAVBAR_CONSTANTS.CLASSES.INFO_OPEN);
    }
  };

  const toggleContact = () => {
    if (isInfoOpen) {
      setIsInfoOpen(false);
      document.body.classList.remove(NAVBAR_CONSTANTS.CLASSES.INFO_OPEN);
    }
    if (isOurCompanyOpen) {
      setIsOurCompanyOpen(false);
      document.body.classList.remove(NAVBAR_CONSTANTS.CLASSES.OUR_COMPANY_OPEN);
    }
    setIsContactOpen(!isContactOpen);
    if (!isContactOpen) {
      document.body.classList.add(NAVBAR_CONSTANTS.CLASSES.CONTACT_OPEN);
    } else {
      document.body.classList.remove(NAVBAR_CONSTANTS.CLASSES.CONTACT_OPEN);
    }
  };

  const toggleOurCompany = () => {
    if (isInfoOpen) {
      setIsInfoOpen(false);
      document.body.classList.remove(NAVBAR_CONSTANTS.CLASSES.INFO_OPEN);
    }
    if (isContactOpen) {
      setIsContactOpen(false);
      document.body.classList.remove(NAVBAR_CONSTANTS.CLASSES.CONTACT_OPEN);
    }
    setIsOurCompanyOpen(!isOurCompanyOpen);
    if (!isOurCompanyOpen) {
      document.body.classList.add(NAVBAR_CONSTANTS.CLASSES.OUR_COMPANY_OPEN);
    } else {
      document.body.classList.remove(NAVBAR_CONSTANTS.CLASSES.OUR_COMPANY_OPEN);
    }
  };

  // Cleanup effect
  useEffect(() => {
    return () => {
      document.body.classList.remove(NAVBAR_CONSTANTS.CLASSES.INFO_OPEN);
      document.body.classList.remove(NAVBAR_CONSTANTS.CLASSES.CONTACT_OPEN);
      document.body.classList.remove(NAVBAR_CONSTANTS.CLASSES.OUR_COMPANY_OPEN);
    };
  }, []);

  return {
    isInfoOpen,
    isContactOpen,
    isOurCompanyOpen,
    toggleInfo,
    toggleContact,
    toggleOurCompany,
  };
}; 