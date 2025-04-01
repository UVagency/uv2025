
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import { useIsMobile } from "../hooks/use-mobile";
import { ArrowDown } from "lucide-react";

// Import Lottie animation data
// Note: These are placeholder animations - in production you would use your own animations
const clockAnimation = {
  v: "5.7.11",
  fr: 30,
  ip: 0,
  op: 180,
  w: 150,
  h: 150,
  nm: "Clock",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Circle",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [75, 75, 0], ix: 2, l: 2 },
        a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 }
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "rc",
              d: 1,
              s: { a: 0, k: [150, 150], ix: 2 },
              p: { a: 0, k: [0, 0], ix: 3 },
              r: { a: 0, k: 75, ix: 4 },
              nm: "Rectangle Path 1",
              mn: "ADBE Vector Shape - Rect",
              hd: false
            },
            {
              ty: "fl",
              c: { a: 0, k: [1, 0.851, 0.02, 1], ix: 4 },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              bm: 0,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: false
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 1, k: [{ t: 0, s: [0], h: 0 }, { t: 180, s: [360], h: 0 }], ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform"
            }
          ],
          nm: "Group 1",
          np: 2,
          cix: 2,
          bm: 0,
          ix: 1,
          mn: "ADBE Vector Group",
          hd: false
        }
      ],
      ip: 0,
      op: 180,
      st: 0,
      bm: 0
    }
  ],
  markers: []
};

const bubbleAnimation = {
  v: "5.7.11",
  fr: 30,
  ip: 0,
  op: 180,
  w: 150,
  h: 150,
  nm: "Bubble",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Bubble",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 1, k: [
          { t: 0, s: [75, 120, 0], o: { x: 0.167, y: 0.167 }, i: { x: 0.833, y: 0.833 } },
          { t: 90, s: [75, 30, 0], o: { x: 0.167, y: 0.167 }, i: { x: 0.833, y: 0.833 } },
          { t: 180, s: [75, 120, 0] }
        ], ix: 2, l: 2 },
        a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 }
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "el",
              d: 1,
              s: { a: 0, k: [40, 40], ix: 2 },
              p: { a: 0, k: [0, 0], ix: 3 },
              nm: "Ellipse Path 1",
              mn: "ADBE Vector Shape - Ellipse",
              hd: false
            },
            {
              ty: "fl",
              c: { a: 0, k: [1, 0.851, 0.02, 1], ix: 4 },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              bm: 0,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: false
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 1, k: [
                { t: 0, s: [80, 80], o: { x: 0.167, y: 0.167 }, i: { x: 0.833, y: 0.833 } },
                { t: 90, s: [120, 120], o: { x: 0.167, y: 0.167 }, i: { x: 0.833, y: 0.833 } },
                { t: 180, s: [80, 80] }
              ], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform"
            }
          ],
          nm: "Group 1",
          np: 2,
          cix: 2,
          bm: 0,
          ix: 1,
          mn: "ADBE Vector Group",
          hd: false
        }
      ],
      ip: 0,
      op: 180,
      st: 0,
      bm: 0
    }
  ],
  markers: []
};

// More animation data
const floatingAnimation = {
  v: "5.7.11",
  fr: 30,
  ip: 0,
  op: 180,
  w: 150,
  h: 150,
  nm: "Floating",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Object",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 1, k: [
          { t: 0, s: [-10], o: { x: 0.167, y: 0.167 }, i: { x: 0.833, y: 0.833 } },
          { t: 90, s: [10], o: { x: 0.167, y: 0.167 }, i: { x: 0.833, y: 0.833 } },
          { t: 180, s: [-10] }
        ], ix: 10 },
        p: { a: 1, k: [
          { t: 0, s: [75, 75, 0], o: { x: 0.167, y: 0.167 }, i: { x: 0.833, y: 0.833 } },
          { t: 90, s: [75, 65, 0], o: { x: 0.167, y: 0.167 }, i: { x: 0.833, y: 0.833 } },
          { t: 180, s: [75, 75, 0] }
        ], ix: 2, l: 2 },
        a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 }
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "rc",
              d: 1,
              s: { a: 0, k: [50, 50], ix: 2 },
              p: { a: 0, k: [0, 0], ix: 3 },
              r: { a: 0, k: 10, ix: 4 },
              nm: "Rectangle Path 1",
              mn: "ADBE Vector Shape - Rect",
              hd: false
            },
            {
              ty: "fl",
              c: { a: 0, k: [0.086, 0.255, 0.447, 1], ix: 4 },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              bm: 0,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: false
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform"
            }
          ],
          nm: "Group 1",
          np: 2,
          cix: 2,
          bm: 0,
          ix: 1,
          mn: "ADBE Vector Group",
          hd: false
        }
      ],
      ip: 0,
      op: 180,
      st: 0,
      bm: 0
    }
  ],
  markers: []
};

const Hero = () => {
  const isMobile = useIsMobile();
  const [showBubble1, setShowBubble1] = useState(false);
  const [showBubble2, setShowBubble2] = useState(false);
  const [showBubble3, setShowBubble3] = useState(false);
  const [showMainText, setShowMainText] = useState(false);

  // Staggered animation timing
  useEffect(() => {
    const timer1 = setTimeout(() => setShowBubble1(true), 300);
    const timer2 = setTimeout(() => setShowBubble2(true), 600);
    const timer3 = setTimeout(() => setShowBubble3(true), 900);
    const timer4 = setTimeout(() => setShowMainText(true), 1200);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  return (
    <div className="relative bg-portfolio-bg overflow-hidden min-h-[85vh] flex items-center">
      {/* Background elements */}
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

      {/* Main content */}
      <div className="max-w-[90%] mx-auto z-10 relative">
        <div className={`transition-all duration-700 ${showMainText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-8">
            <div className="inline-block bg-portfolio-tag-bg text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
              YELLOW FELLOW
            </div>
            <h1 className="text-[clamp(3rem,14vw,10rem)] leading-[0.9] font-black text-portfolio-highlight mx-auto">
              Yellow<br />Fellow
            </h1>
            <p className="text-xl md:text-2xl text-portfolio-text/80 max-w-2xl mx-auto mt-8 mb-6">
              (A motion studio with a twist)
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-portfolio-text/70 animate-bounce">
          <span className="text-sm mb-1">Scroll Down</span>
          <ArrowDown size={16} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
