import React from 'react';

const InfoSection = () => {
  return (
    <div className="max-w-[90%] mx-auto flex flex-col items-center md:items-start pb-16">
      <div className="w-full flex flex-col md:flex-row md:gap-16 items-center md:items-start">
        <div className="w-32 h-32 overflow-hidden">
          <img 
            alt="UV Logo" 
            className="w-full h-full object-cover rounded-full" 
            src="/images/uv_logo.png" 
          />
        </div>
        <div className="text-[#f9f8e2] md:w-2/3 text-center md:text-left">
          <h1 className="text-4xl md:text-4xl mb-6">
            <span className="italic text-portfolio-highlight">One Agency, All In.</span>
          </h1>
          <p className="text-2xl md:text-3xl leading-relaxed mb-6">
            UV is a Full-service in house indepentent agency that champions brands through <span className="italic">advertising</span>, engineers <span className="italic">events</span> that move people to create customers, and drives results through smart<span className="italic"> media</span>.
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
      
      {/* Services Section */}
      <div className="w-full mt-16 text-center md:text-left md:pl-48">
        <h2 className="text-xl uppercase font-bold text-[#f9f8e2] mb-8">Our Services<span> 🤝</span></h2>
        <div className="text-[#f9f8e2] space-y-6">
          <div>
            <p className="text-lg font-semibold inline-block mr-2">Brand Building</p>
            <p className="text-sm opacity-80 inline">Developing and positioning brands with clarity and impact</p>
          </div>
          <div>
            <p className="text-lg font-semibold inline-block mr-2">Advertising</p>
            <p className="text-sm opacity-80 inline">Crafting creative and results-driven campaigns</p>
          </div>
          <div>
            <p className="text-lg font-semibold inline-block mr-2">Exhibition</p>
            <p className="text-sm opacity-80 inline">Designing immersive event and brand experiences</p>
          </div>
          <div>
            <p className="text-lg font-semibold inline-block mr-2">Target Audience</p>
            <p className="text-sm opacity-80 inline">Engaging the right people with precision</p>
          </div>
          <div>
            <p className="text-lg font-semibold inline-block mr-2">Social Strategy & Content</p>
            <p className="text-sm opacity-80 inline">Planning and producing content that connects</p>
          </div>
        </div>
      </div>

      {/* Careers Section */}
      <div className="w-full mt-16 text-center md:text-left md:pl-48">
        <h2 className="text-xl uppercase font-bold text-[#f9f8e2] mb-8">Careers<span> 🚀</span></h2>
        <p className="text-lg text-[#f9f8e2] mb-8 italic">Your next adventure starts here.</p>
        <div className="text-[#f9f8e2] space-y-6">
          <div>
            <p className="text-lg font-semibold inline-block mr-2">Strategic Sales Executive</p>
            <p className="text-sm opacity-80 inline">Drive growth through strategic partnerships and sales initiatives</p>
          </div>
          <div>
            <p className="text-lg font-semibold inline-block mr-2">Senior Strategy Director</p>
            <p className="text-sm opacity-80 inline">Lead strategic initiatives and shape the future of our agency</p>
          </div>
          <div>
            <p className="text-lg font-semibold inline-block mr-2">Media Planner</p>
            <p className="text-sm opacity-80 inline">Develop and execute strategic media plans across multiple channels</p>
          </div>
          <div>
            <p className="text-lg font-semibold inline-block mr-2">Senior Producer</p>
            <p className="text-sm opacity-80 inline">Oversee production of high-impact creative campaigns and content</p>
          </div>
          <div>
            <p className="text-lg font-semibold inline-block mr-2">AI Technical Director</p>
            <p className="text-sm opacity-80 inline">Lead the integration of AI technologies into creative solutions</p>
          </div>
          <div>
            <p className="text-lg font-semibold inline-block mr-2">Data Scientist</p>
            <p className="text-sm opacity-80 inline">Transform data into actionable insights for campaign optimization</p>
          </div>
          <div>
            <p className="text-lg font-semibold inline-block mr-2">AI Creative Tech</p>
            <p className="text-sm opacity-80 inline">Pioneer innovative AI-driven creative solutions and experiences</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection; 