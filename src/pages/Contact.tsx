import React from 'react';
import { SEO } from '../components/SEO';

const Contact = () => {
  return (
    <div className="min-h-[100dvh] bg-portfolio-bg">
      <SEO 
        title="Contact UV Agency | Get in Touch"
        description="Get in touch with UV Agency for your next media experience project. We're here to help bring your creative vision to life."
        pageType="contact"
      />
      <div className="max-w-[90%] mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-portfolio-text mb-8">Contact</h1>
        <p className="text-portfolio-text">Contact page content goes here.</p>
      </div>
    </div>
  );
};

export default Contact;
