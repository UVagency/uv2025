import React from 'react';
import { SEO } from '../components/SEO';

const About = () => {
  // About page content is now handled by the panel in the Navbar
  // This component is kept for compatibility with existing routes
  return (
    <div className="min-h-screen bg-portfolio-bg">
      <SEO 
        title="About UV Agency | Creative Media Experiences"
        description="Discover UV Agency's journey in creating innovative media experiences and events. Learn about our team, values, and commitment to excellence."
        pageType="about"
      />
    </div>
  );
};

export default About;
