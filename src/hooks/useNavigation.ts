import { useState, useEffect } from 'react';
import { NavigationState } from '../types';
import { NAVBAR_CONSTANTS } from '../constants/navbarConstants';

export const useNavigation = (): NavigationState => {
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
      document.body.classList.remove(NAVBAR_CONSTANTS.CLASSES.CONTACT_OPEN);
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
    setIsContactOpen(!isContactOpen);
    if (!isContactOpen) {
      document.body.classList.add(NAVBAR_CONSTANTS.CLASSES.CONTACT_OPEN);
    } else {
      document.body.classList.remove(NAVBAR_CONSTANTS.CLASSES.CONTACT_OPEN);
    }
  };

  // Cleanup effect
  useEffect(() => {
    return () => {
      document.body.classList.remove(NAVBAR_CONSTANTS.CLASSES.INFO_OPEN);
      document.body.classList.remove(NAVBAR_CONSTANTS.CLASSES.CONTACT_OPEN);
    };
  }, []);

  return {
    isInfoOpen,
    isContactOpen,
    toggleInfo,
    toggleContact,
  };
}; 