
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
        const normalizedScale = 1 + (breatheValue * 0.1); // Scale between 0.9 and 1.1
        
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
        width="100" 
        height="48" 
        viewBox="0 0 100 48" 
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        {/* U shape with circles */}
        <g style={{ transform: `scale(${scale})`, transformOrigin: 'center' }}>
          {/* First circle for the U left side */}
          <circle cx="20" cy="24" r="15" fill="none" stroke="#6BD8D7" strokeWidth="4" />
          
          {/* Second circle for the U bottom curve */}
          <circle cx="40" cy="32" r="15" fill="none" stroke="#6BD8D7" strokeWidth="4" />
          
          {/* Third circle for the U right side */}
          <circle cx="60" cy="24" r="15" fill="none" stroke="#6BD8D7" strokeWidth="4" />
          
          {/* V shape with circles */}
          <circle cx="80" cy="10" r="8" fill="none" stroke="#6BD8D7" strokeWidth="4" />
          <circle cx="90" cy="24" r="8" fill="none" stroke="#6BD8D7" strokeWidth="4" />
          <circle cx="70" cy="24" r="8" fill="none" stroke="#6BD8D7" strokeWidth="4" />
          
          {/* Small bubbles/spheres for animation embellishment */}
          <circle 
            cx="30" 
            cy="15" 
            r="3" 
            fill="#6BD8D7" 
            opacity="0.7"
            style={{ animation: 'float 4s ease-in-out infinite' }}
          />
          <circle 
            cx="50" 
            cy="20" 
            r="2" 
            fill="#6BD8D7" 
            opacity="0.6" 
            style={{ animation: 'float 5s ease-in-out infinite 0.5s' }}
          />
          <circle 
            cx="75" 
            cy="32" 
            r="2.5" 
            fill="#6BD8D7" 
            opacity="0.8" 
            style={{ animation: 'float 3.5s ease-in-out infinite 1s' }}
          />
        </g>
      </svg>
    </div>
  );
};

export default BreathingUVLogo;
