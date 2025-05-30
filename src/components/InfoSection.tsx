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

      {/* Values Section */}
      <div className="w-full mt-16 text-center md:text-left md:pl-48">
        <h2 className="text-xl uppercase font-bold text-[#f9f8e2] mb-8">Values<span> 🥰</span></h2>
        <div className="text-[#f9f8e2] space-y-6">
          <div>
            <p className="text-lg font-semibold inline-block mr-2">Multicultural by Design</p>
            <p className="text-sm opacity-80 inline">We thrive in diverse contexts. Different cultures, languages, and perspectives enrich our creativity and sharpen our thinking. We build for a global world — with local understanding.</p>
          </div>
          <div>
            <p className="text-lg font-semibold inline-block mr-2">Human-Centered Thinking</p>
            <p className="text-sm opacity-80 inline">People come first. We design and communicate with empathy, emotional intelligence, and awareness — never losing sight of the human on the other side.</p>
          </div>
          <div>
            <p className="text-lg font-semibold inline-block mr-2">Radical Transparency</p>
            <p className="text-sm opacity-80 inline">We speak with honesty and clarity — with clients, within our team, always. Open dialogue is how we build trust and move forward, even through tension.</p>
          </div>
          <div>
            <p className="text-lg font-semibold inline-block mr-2">Co-Creation</p>
            <p className="text-sm opacity-80 inline">The best work happens when we build together. We collaborate with clients and teammates as partners, listening actively and shaping ideas collectively.</p>
          </div>
          <div>
            <p className="text-lg font-semibold inline-block mr-2">Bold Intuition</p>
            <p className="text-sm opacity-80 inline">We trust our instincts and take calculated risks. Experience, curiosity, and courage guide us to solutions that make a real difference.</p>
          </div>
          <div>
            <p className="text-lg font-semibold inline-block mr-2">Excellence in the Details</p>
            <p className="text-sm opacity-80 inline">We don't do things halfway. Every touchpoint matters — from a campaign to a line of code. We aim for professional excellence, every time.</p>
          </div>
          <div>
            <p className="text-lg font-semibold inline-block mr-2">Balanced Flow</p>
            <p className="text-sm opacity-80 inline">We believe that giving and receiving are part of the same cycle. Our work is rooted in reciprocity, acknowledgment, and shared growth.</p>
          </div>
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

      {/* Products Section */}
      <div className="w-full mt-16 text-center md:text-left md:pl-48">
        <h2 className="text-xl uppercase font-bold text-[#f9f8e2] mb-8">Our Products<span> 🛠️</span></h2>
        <div className="text-[#f9f8e2] space-y-6">
          <div>
            <p className="text-lg font-semibold inline-block mr-2">Sense</p>
            <p className="text-sm opacity-80 inline">Physical presence to digital insights</p>
          </div>
          <div>
            <p className="text-lg font-semibold inline-block mr-2">Grateful</p>
            <p className="text-sm opacity-80 inline">Empower your businesses with crypto payments that are fast, secure, and cost-effective, so you keep more of what you earn.</p>
          </div>
          <div>
            <p className="text-lg font-semibold inline-block mr-2">Tril</p>
            <p className="text-sm opacity-80 inline">A social platform for discovering and sharing personalized recommendations in music, movies, books, and more — connecting users through cultural taste and trusted suggestions.</p>
          </div>
        </div>
      </div>

      {/* Awards & Festivals Section */}
      <div className="w-full mt-16 text-center md:text-left md:pl-48">
        <h2 className="text-xl uppercase font-bold text-[#f9f8e2] mb-8">Awards & Festivals 🏆</h2>
        <div className="text-[#f9f8e2]">
          <p>2025 AWWWARDS Honorable Mention</p>
          <p>2025 THE FWA Website Of The Day</p>
          <p>2025 CSS DESIGN AWARDS Website Of The Day</p>
        </div>
      </div>
    </div>
  );
};

export default InfoSection; 