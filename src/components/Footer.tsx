import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-portfolio-about-bg text-white py-16">
      <div className="max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Contact Section */}
        <div className="flex flex-col space-y-4">
          <div className="flex items-center mb-2">
            <span className="text-portfolio-highlight mr-2">👋</span>
            <h3 className="text-xl uppercase">Contact</h3>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4 text-portfolio-highlight" />
            <a href="mailto:hi@uv.agency" className="uppercase">hi@uv.agency</a>
          </div>
        </div>

        {/* Address Section */}
        <div className="flex flex-col space-y-4">
          <div className="flex items-center mb-2">
            <span className="text-portfolio-highlight mr-2">🏠</span>
            <h3 className="text-xl uppercase">Address</h3>
          </div>
          <div className="flex items-start space-x-2">
            <MapPin className="w-4 h-4 text-portfolio-highlight mt-1" />
            <div>
              <p>WORLDWIDE</p>
              <p>PLANET EARTH</p>
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
        </div>
      </div>

      {/* Credits */}
      <div className="max-w-[90%] mx-auto mt-16 flex flex-col md:flex-row md:items-center text-sm text-gray-400 space-y-2 md:space-y-0">
        <div className="flex items-center">
          <span>with  💖  by </span>
          <a href="#" className="ml-1 text-white hover:text-portfolio-highlight">UV</a>
          <span className="mx-2 text-portfolio-highlight">✦</span>
        </div>
        <div className="flex items-center">
          <span>partners </span>
          <a href="https://www.linkedin.com/in/gastonsilberman/" target="_blank" rel="noopener noreferrer" className="ml-1 text-white hover:text-portfolio-highlight">Gastón Silberman</a>,
          <a href="https://www.linkedin.com/in/ebrenman/" target="_blank" rel="noopener noreferrer" className="ml-1 text-white hover:text-portfolio-highlight">Esteban Brenman</a>, and
          <a href="https://www.linkedin.com/in/javierseverini/" target="_blank" rel="noopener noreferrer" className="ml-1 text-white hover:text-portfolio-highlight">Javier Severini</a>
        </div>
        <div className="flex items-center">
          <span>&nbsp;founded by</span>
          <a href="https://en.wikipedia.org/wiki/Mookie_Tenembaum" target="_blank" rel="noopener noreferrer" className="ml-1 text-white hover:text-portfolio-highlight">Mookie & Hebe.</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
