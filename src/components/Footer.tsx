import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { trackEvent, GA_EVENTS } from '@/lib/analytics';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

const Footer = () => {
  const { t } = useTranslation();

  const handleEmailClick = () => {
    trackEvent('EMAIL_CLICK', {
      location: 'footer',
      email: 'hello@uv.agency'
    });
  };

  return (
    <footer className="bg-portfolio-about-bg text-white py-16">
      <div className="max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Contact Section */}
        <div className="flex flex-col space-y-4">
          <div className="flex items-center mb-2">
            <span className="text-portfolio-highlight mr-2">👋</span>
            <h3 className="text-xl uppercase">{t('footer.contact')}</h3>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4 text-portfolio-highlight" />
            <a
              href="mailto:hello@uv.agency"
              onClick={handleEmailClick}
              className="uppercase email-link"
            >
              hello@uv.agency
            </a>
          </div>
        </div>

        {/* Address Section */}
        <div className="flex flex-col space-y-4">
          <div className="flex items-center mb-2">
            <span className="text-portfolio-highlight mr-2">🏠</span>
            <h3 className="text-xl uppercase">{t('footer.address')}</h3>
          </div>
          <div className="flex items-start space-x-2">
            <MapPin className="w-4 h-4 text-portfolio-highlight mt-1" />
            <div>
              <p>{t('footer.worldwide')}</p>
              <p>{t('footer.planetEarth')}</p>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col space-y-4">
          <Link to="https://www.instagram.com/agencyuv" target="_blank" rel="noopener noreferrer" className="text-xl uppercase underline hover:text-portfolio-highlight transition-colors">
            Instagram
          </Link>
          <Link to="https://www.linkedin.com/company/uvagency" target="_blank" rel="noopener noreferrer" className="text-xl uppercase underline hover:text-portfolio-highlight transition-colors">
            LinkedIn
          </Link>
          <Link to="/jobs" className="text-xl uppercase underline hover:text-portfolio-highlight transition-colors">
            {t('footer.workWithUs')}
          </Link>
        </div>
      </div>

      {/* Credits */}
      <div className="max-w-[90%] mx-auto mt-16 flex flex-col md:flex-row md:items-center md:justify-between text-sm text-gray-400 space-y-4 md:space-y-0">
        <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0">
          <div className="flex items-center">
            <span>{t('footer.withLove')} </span>
            <a href="/our-company" className="ml-1 text-white hover:text-portfolio-highlight">UV</a>
            <span className="mx-2 text-portfolio-highlight">✦</span>
          </div>
          <div className="flex items-center">
            <span>{t('footer.partners')} </span>
            <a href="https://www.linkedin.com/in/gastonsilberman/" target="_blank" rel="noopener noreferrer" className="ml-1 text-white hover:text-portfolio-highlight">Gastón Silberman</a>,
            <a href="https://www.linkedin.com/in/ebrenman/" target="_blank" rel="noopener noreferrer" className="ml-1 text-white hover:text-portfolio-highlight">Esteban Brenman</a>, and
            <a href="https://www.linkedin.com/in/javierseverini/" target="_blank" rel="noopener noreferrer" className="ml-1 text-white hover:text-portfolio-highlight">Javier Severini</a>
          </div>
          <div className="flex items-center">
            <span>&nbsp;{t('footer.foundedBy')}</span>
            <a href="https://en.wikipedia.org/wiki/Mookie_Tenembaum" target="_blank" rel="noopener noreferrer" className="ml-1 text-white hover:text-portfolio-highlight">Mookie &amp; Hebe.</a>
          </div>
        </div>

        {/* Language Selector */}
        <LanguageSelector />
      </div>
    </footer>
  );
};

export default Footer;
