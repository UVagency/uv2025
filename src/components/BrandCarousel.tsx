
import { useRef } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface Brand {
  name: string;
  logoUrl: string;
}

// Updated brand list with a more consistent set of logos
const brands: Brand[] = [
  { name: "MSD", logoUrl: "/lovable-uploads/328b3bd3-2f60-41c0-8e3a-77b754e362a6.png" },
  { name: "Apple", logoUrl: "/lovable-uploads/61a9efdd-45b8-476f-8dd8-8847b5637f42.png" },
  { name: "Flaviar", logoUrl: "/lovable-uploads/630d3839-8c19-4e9a-a57e-198ff13a4be8.png" },
  { name: "VAXA", logoUrl: "/lovable-uploads/af5c0765-b397-4bf4-b0db-667ed840a472.png" },
  { name: "Doritos", logoUrl: "/lovable-uploads/c15594f5-19d0-42d5-9d84-3379cd2243a3.png" },
  { name: "MSD", logoUrl: "/lovable-uploads/328b3bd3-2f60-41c0-8e3a-77b754e362a6.png" },
  { name: "Apple", logoUrl: "/lovable-uploads/61a9efdd-45b8-476f-8dd8-8847b5637f42.png" },
  { name: "Flaviar", logoUrl: "/lovable-uploads/630d3839-8c19-4e9a-a57e-198ff13a4be8.png" },
  { name: "VAXA", logoUrl: "/lovable-uploads/af5c0765-b397-4bf4-b0db-667ed840a472.png" },
  { name: "Doritos", logoUrl: "/lovable-uploads/c15594f5-19d0-42d5-9d84-3379cd2243a3.png" },
];

const BrandCarousel = () => {
  const autoplayPlugin = useRef(
    Autoplay({ 
      delay: 2000,
      stopOnInteraction: true,
      playOnInit: true,
      rootNode: (emblaRoot) => emblaRoot.parentElement,
      stopOnMouseEnter: true,
      stopOnFocusIn: true,
    })
  );

  return (
    <div className="py-16 bg-portfolio-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-center text-portfolio-text mb-12">Trusted by Brands Worldwide</h2>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
            skipSnaps: false,
          }}
          plugins={[autoplayPlugin.current]}
          className="w-full"
        >
          <CarouselContent className="flex items-center">
            {brands.map((brand, index) => (
              <CarouselItem 
                key={index} 
                className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 pl-4 flex items-center justify-center"
              >
                <div className="h-16 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0">
                  <img 
                    src={brand.logoUrl} 
                    alt={`${brand.name} logo`} 
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default BrandCarousel;
