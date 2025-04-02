
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect to home page, since About is now a slide-down panel
    navigate('/');
  }, [navigate]);
  
  return null;
};

export default About;
