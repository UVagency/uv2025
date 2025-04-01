
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirigir a la página principal, ya que About ahora es un panel desplegable
    navigate('/');
  }, [navigate]);
  
  return null; // No renderizamos nada, ya que se redirigirá
};

export default About;
