
import { useIsMobile } from "../hooks/use-mobile";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const isMobile = useIsMobile();

  return (
    <div className="relative bg-portfolio-bg overflow-hidden">
      <div className="max-w-[90%] mx-auto">
        <div className="flex flex-col md:flex-row items-center py-12 md:py-24 gap-8">
          {/* Text content */}
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
            <div className="inline-block bg-portfolio-tag-bg text-white px-4 py-1 rounded-full text-sm font-medium">
              STUDIO
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-portfolio-text">
              Creative production studio for ambitious brands
            </h1>
            <p className="text-lg text-portfolio-text/80 max-w-md mx-auto md:mx-0">
              We create motion design and animation for brands that want to stand out and make an impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="bg-portfolio-text text-white hover:bg-portfolio-text/90 gap-2">
                View our work
                <ArrowRight size={16} />
              </Button>
              <Button 
                variant="outline" 
                className="border-portfolio-text text-portfolio-text hover:bg-portfolio-text/10"
              >
                Contact us
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 relative">
            <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-portfolio-highlight/20 mix-blend-multiply z-10"></div>
              <img 
                src="/lovable-uploads/630d3839-8c19-4e9a-a57e-198ff13a4be8.png" 
                alt="Creative studio work" 
                className="w-full h-full object-cover"
              />
              
              {/* Decorative elements */}
              <div className="absolute -right-6 -bottom-6 w-36 h-36 bg-portfolio-highlight rounded-full blur-3xl opacity-60 z-0"></div>
              <div className="absolute -left-10 -top-10 w-48 h-48 bg-portfolio-text rounded-full blur-3xl opacity-20 z-0"></div>
            </div>

            {/* Stats - Only show on desktop */}
            {!isMobile && (
              <div className="absolute -bottom-8 -right-8 bg-white rounded-lg shadow-lg p-4 z-20">
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-portfolio-text">120+</div>
                    <div className="text-sm text-portfolio-text/70">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-portfolio-text">10+</div>
                    <div className="text-sm text-portfolio-text/70">Years</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-portfolio-text">35</div>
                    <div className="text-sm text-portfolio-text/70">Countries</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
