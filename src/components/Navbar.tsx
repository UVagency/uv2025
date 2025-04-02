
import React from 'react';
import { Eye, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '../components/ui/sheet';

const Navbar = () => {
  return <nav className="w-full px-8 py-4 font-sans bg-portfolio-bg z-50 relative">
      <div className="max-w-[90%] mx-auto flex justify-between items-center">
        <div className="flex space-x-12">
          <Sheet>
            <SheetTrigger asChild>
              <button className="text-portfolio-highlight uppercase font-bold hover:text-portfolio-highlight/80 transition-colors">
                About
              </button>
            </SheetTrigger>
            <SheetContent side="top" className="w-full max-w-full h-screen bg-[#283618] pt-10 px-4 overflow-auto border-none">
              <SheetClose className="absolute left-4 top-4 text-portfolio-highlight hover:text-portfolio-highlight/80 rounded-full">
                <X size={24} />
              </SheetClose>
              <AboutContent />
            </SheetContent>
          </Sheet>
          <Link to="/" className="text-portfolio-text uppercase font-bold hover:text-portfolio-highlight transition-colors">
            Work
          </Link>
          <Link to="/contact" className="text-portfolio-text uppercase font-bold hover:text-portfolio-highlight transition-colors">
            Contact
          </Link>
        </div>
        <div className="cursor-pointer">
          <Eye size={28} className="text-portfolio-text hover:text-portfolio-highlight transition-colors" />
        </div>
      </div>
    </nav>;
};

// Contenido del About que se mostrará en el Sheet
const AboutContent = () => {
  return (
    <div className="max-w-[90%] mx-auto flex flex-col md:flex-row gap-12 pt-16 items-start">
      <div className="w-full md:w-1/3 md:sticky md:top-16">
        <div className="rounded-full overflow-hidden w-64 h-64 mx-auto bg-[#f9f8e2]">
          <img 
            alt="Award trophy" 
            className="w-full h-full object-contain p-4" 
            src="/lovable-uploads/af5c0765-b397-4bf4-b0db-667ed840a472.png" 
          />
        </div>
      </div>
      <div className="w-full md:w-2/3 text-[#f9f8e2]/90">
        <div className="text-4xl sm:text-5xl md:text-6xl font-normal leading-tight">
          <span className="text-portfolio-highlight italic font-light">Yellow Fellow</span>, founded by <span className="text-portfolio-highlight italic font-light">Guy Trefler</span>, is a motion studio driven by design & creative thinking.
          <div className="mt-8"></div>
          We specialize in crafting <span className="text-portfolio-highlight italic font-light">graphics packages</span> for films & series, building <span className="text-portfolio-highlight italic font-light">design systems</span> for brands, creating stunning <span className="text-portfolio-highlight italic font-light">explainers</span> and mind-blowing <span className="text-portfolio-highlight italic font-light">Music Videos</span>.
          <div className="mt-8"></div>
          We're grateful to be working with top brands, production houses, ad agencies and music labels to create <span className="text-portfolio-highlight italic font-light">unique & fresh</span> moving content.
          <div className="mt-8"></div>
          We love what we do and we know that <span className="text-portfolio-highlight italic font-light">hard work pays off</span>.
        </div>
      </div>
    </div>
  );
};

export default Navbar;
