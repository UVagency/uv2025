import React, { useState } from 'react';

const EyeOfCuriosity = () => {
  const colorPalette = [
    { bg: 'bg-portfolio-accent', iris: 'bg-portfolio-text' },         // Turquoise with dark green
  ];

  const [colorScheme, setColorScheme] = useState(() => {
    return colorPalette[Math.floor(Math.random() * colorPalette.length)];
  });

  return (
    <span className="inline-flex items-center justify-center mx-2 transform scale-75">
      <div className="relative w-[28px] h-[28px]">
        <div className={`absolute inset-0 rounded-full ${colorScheme.bg} border border-portfolio-text overflow-hidden`}>
          <div 
            className={`absolute left-1/2 top-1/2 w-[18px] h-[18px] rounded-full ${colorScheme.iris} 
                     transition-all duration-300`}
            style={{ 
              transform: 'translate(-50%, -50%)',
            }}
          >
            <div 
              className="absolute left-1/2 top-1/2 w-[10px] h-[10px] rounded-full bg-portfolio-bg transition-all duration-300"
              style={{ 
                transform: 'translate(-50%, -50%)',
              }}
            >
              <div className="absolute top-1 left-1 w-[3px] h-[3px] rounded-full bg-white opacity-80"></div>
            </div>
          </div>
        </div>
      </div>
    </span>
  );
};

export default EyeOfCuriosity; 