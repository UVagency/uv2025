
import React from 'react';
import { Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="w-full px-8 py-4 font-sans bg-portfolio-bg">
      <div className="max-w-[90%] mx-auto flex justify-between items-center">
        <div className="flex space-x-12">
          <Link to="/about" className="text-portfolio-text uppercase font-bold hover:text-portfolio-highlight transition-colors">
            About
          </Link>
          <Link to="/" className="text-portfolio-text uppercase font-bold hover:text-portfolio-highlight transition-colors">
            Work
          </Link>
          <Link to="/contact" className="text-portfolio-text uppercase font-bold hover:text-portfolio-highlight transition-colors">
            Contact
          </Link>
        </div>
        <div className="cursor-pointer">
          <Eye 
            size={28} 
            className="text-portfolio-text hover:text-portfolio-highlight transition-colors" 
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
