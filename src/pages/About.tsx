
import React from 'react';
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <div className="min-h-screen bg-portfolio-bg">
      <Navbar />
      <div className="max-w-[90%] mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-portfolio-text mb-8">About</h1>
        <p className="text-portfolio-text">About page content goes here.</p>
      </div>
    </div>
  );
};

export default About;
