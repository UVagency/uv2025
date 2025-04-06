
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger } from '../components/ui/sheet';
import AnimatedEye from './hero/AnimatedEye';

const Navbar = () => {
  return <nav className="w-full px-8 py-4 font-sans bg-portfolio-bg z-50 relative">
      <div className="max-w-[90%] mx-auto flex justify-between items-center">
        <div className="flex space-x-12">
          <Sheet>
            <SheetTrigger asChild>
              <button className="text-portfolio-text uppercase font-bold hover:text-portfolio-highlight transition-colors">
                About
              </button>
            </SheetTrigger>
            <SheetContent side="top" className="w-full max-w-full h-screen bg-[#283618] pt-20 px-4 overflow-auto">
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
        <div>
          <AnimatedEye />
        </div>
      </div>
    </nav>;
};

// Contenido del About que se mostrará en el Sheet
const AboutContent = () => {
  return <div className="max-w-[90%] mx-auto flex flex-col gap-16 items-start">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
        <div className="w-full md:w-1/3">
          <div className="rounded-full overflow-hidden w-80 h-80 mx-auto">
            <img alt="Award trophy" className="w-full h-full object-cover bg-[#f9f8e2]" src="/lovable-uploads/af5c0765-b397-4bf4-b0db-667ed840a472.png" />
          </div>
        </div>
        <div className="w-full md:w-2/3 text-[#f9f8e2] opacity-80">
          <h1 className="text-5xl font-bold text-portfolio-highlight mb-6">
            <span className="italic">UV</span>, founded by <span className="italic">Mookie Tenembaun</span>,
          </h1>
          <p className="text-3xl leading-relaxed mb-8">
            is a motion studio driven by design & creative thinking.
          </p>
          <p className="text-3xl leading-relaxed mb-6">
            We specialize in crafting <span className="italic">graphics packages</span> for films & series, 
            building <span className="italic">design systems</span> for brands, creating stunning <span className="italic">explainers</span> and 
            mind-blowing <span className="italic">Music Videos</span>.
          </p>
          <p className="text-3xl leading-relaxed mb-6">
            We're grateful to be working with top brands, production houses, ad agencies and music labels to create
            <span className="italic"> unique & fresh</span> moving content.
          </p>
          <p className="text-3xl leading-relaxed">
            We love what we do and we know that <span className="italic">hard work pays off</span>.
          </p>
        </div>
      </div>
      
      {/* Values Section */}
      <div className="w-full">
        <h2 className="text-4xl font-bold text-portfolio-highlight mb-8">Values</h2>
        <p className="text-3xl leading-relaxed text-[#f9f8e2] opacity-80">
          UV is Zero Bullshit & Crazy High Standards &<br/>
          Endless Passion & Celebrating Emotion & Taking<br/>
          Risks & Trusting Our Instincts & Being Human &<br/>
          Making Work That's Human & Taking Work Seriously<br/>
          & Not Taking Ourselves Too Seriously
        </p>
      </div>
    </div>;
};

export default Navbar;
