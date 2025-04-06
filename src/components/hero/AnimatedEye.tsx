
import React, { useState, useEffect } from 'react';

export const AnimatedEye = () => {
  const [isBlinking, setIsBlinking] = useState(false);
  const [isLooking, setIsLooking] = useState(false);
  const [lookDirection, setLookDirection] = useState({ x: 0, y: 0 });

  // Handle random blinking
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 200);
    }, Math.random() * 3000 + 2000);

    return () => clearInterval(blinkInterval);
  }, []);

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calculate normalized position (-1 to 1)
      const x = (clientX / innerWidth) * 2 - 1;
      const y = (clientY / innerHeight) * 2 - 1;
      
      setIsLooking(true);
      setLookDirection({ x, y });
      
      // Reset looking state after some time
      clearTimeout(lookTimeout);
      const lookTimeout = setTimeout(() => {
        setIsLooking(false);
      }, 5000);
    };

    let lookTimeout: number;
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(lookTimeout);
    };
  }, []);

  // Calculate pupil position
  const getPupilStyle = () => {
    const maxMove = 4;
    const x = isLooking ? lookDirection.x * maxMove : 0;
    const y = isLooking ? lookDirection.y * maxMove : 0;
    
    return {
      transform: `translate(${x}px, ${y}px)`,
    };
  };

  return (
    <div className="relative w-[28px] h-[28px] cursor-pointer group">
      {/* Eye outer */}
      <div className="absolute inset-0 rounded-full bg-white border border-portfolio-text overflow-hidden transition-all duration-300
                     group-hover:border-portfolio-highlight">
        {/* Eyelid animation */}
        <div 
          className={`absolute inset-0 bg-portfolio-bg transition-all duration-150 
                     ${isBlinking ? 'h-full' : 'h-0'}`}
          style={{ transformOrigin: 'center center' }}
        ></div>
        
        {/* Iris */}
        <div 
          className="absolute left-1/2 top-1/2 w-[18px] h-[18px] rounded-full bg-portfolio-text 
                   transition-all duration-300 group-hover:bg-portfolio-highlight"
          style={{ 
            transform: 'translate(-50%, -50%)',
          }}
        >
          {/* Pupil */}
          <div 
            className="absolute left-1/2 top-1/2 w-[10px] h-[10px] rounded-full bg-portfolio-bg transition-all duration-300"
            style={{ 
              transform: `translate(-50%, -50%) ${getPupilStyle().transform}`,
            }}
          >
            {/* Light reflection */}
            <div className="absolute top-1 left-1 w-[3px] h-[3px] rounded-full bg-white opacity-80"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedEye;
