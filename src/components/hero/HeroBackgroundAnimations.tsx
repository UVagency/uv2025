
import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import { useIsMobile } from "../../hooks/use-mobile";
import { clockAnimation, bubbleAnimation, floatingAnimation } from "../../animations/heroAnimations";

export const HeroBackgroundAnimations = () => {
  const isMobile = useIsMobile();
  const [showBubble1, setShowBubble1] = useState(false);
  const [showBubble2, setShowBubble2] = useState(false);
  const [showBubble3, setShowBubble3] = useState(false);

  // Staggered animation timing
  useEffect(() => {
    const timer1 = setTimeout(() => setShowBubble1(true), 300);
    const timer2 = setTimeout(() => setShowBubble2(true), 600);
    const timer3 = setTimeout(() => setShowBubble3(true), 900);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-20 left-20">
        {showBubble1 && (
          <div className="animate-fade-in">
            <Lottie 
              animationData={clockAnimation} 
              style={{ width: isMobile ? 60 : 120, height: isMobile ? 60 : 120 }}
              loop={true}
            />
          </div>
        )}
      </div>
      <div className="absolute bottom-10 left-1/4">
        {showBubble2 && (
          <div className="animate-fade-in">
            <Lottie 
              animationData={bubbleAnimation} 
              style={{ width: isMobile ? 60 : 100, height: isMobile ? 60 : 100 }}
              loop={true}
            />
          </div>
        )}
      </div>
      <div className="absolute top-1/3 right-20">
        {showBubble3 && (
          <div className="animate-fade-in">
            <Lottie 
              animationData={floatingAnimation} 
              style={{ width: isMobile ? 60 : 100, height: isMobile ? 60 : 100 }}
              loop={true}
            />
          </div>
        )}
      </div>
      <div className="absolute -right-6 -bottom-6 w-36 h-36 bg-portfolio-highlight rounded-full blur-3xl opacity-60 z-0"></div>
      <div className="absolute -left-10 -top-10 w-48 h-48 bg-portfolio-text rounded-full blur-3xl opacity-20 z-0"></div>
    </div>
  );
};
