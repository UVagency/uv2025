
import React, { useState, useEffect } from 'react';

const BreathingUVLogo = () => {
  const [scale, setScale] = useState(1);
  
  // Breathing animation effect
  useEffect(() => {
    const breathingAnimation = () => {
      let startTime = Date.now();
      const duration = 4000; // 4 seconds per breath cycle
      
      const animate = () => {
        const now = Date.now();
        const elapsed = now - startTime;
        const progress = (elapsed % duration) / duration;
        
        // Sinusoidal breathing pattern - smoother and more natural
        const breatheValue = Math.sin(progress * Math.PI * 2);
        const normalizedScale = 1 + (breatheValue * 0.05); // Scale between 0.95 and 1.05
        
        setScale(normalizedScale);
        requestAnimationFrame(animate);
      };
      
      const animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    };
    
    return breathingAnimation();
  }, []);

  return (
    <div className="inline-flex items-center">
      <svg 
        width="110" 
        height="60" 
        viewBox="0 0 110 60" 
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        {/* Main breathing group */}
        <g style={{ transform: `scale(${scale})`, transformOrigin: 'center' }}>
          {/* Turquoise circle background */}
          <circle cx="50" cy="30" r="30" fill="#6BD8D7" />
          
          {/* U letter */}
          <path 
            d="M30 18v8c0 4.4 3.6 8 8 8s8-3.6 8-8v-8" 
            stroke="white" 
            strokeWidth="5" 
            strokeLinecap="round"
            fill="none"
          />
          
          {/* V letter */}
          <path 
            d="M52 18l6 16 6-16" 
            stroke="white" 
            strokeWidth="5" 
            strokeLinecap="round"
            fill="none"
          />
          
          {/* Dot after V */}
          <circle cx="70" cy="34" r="2.5" fill="white" />
        </g>
      </svg>
    </div>
  );
};

export default BreathingUVLogo;
