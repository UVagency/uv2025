
import { useEffect, useRef } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface Brand {
  name: string;
  logoUrl: string;
}

// Expanded brand list to include more clients
const brands: Brand[] = [
  { name: "Flaviar", logoUrl: "/lovable-uploads/61a9efdd-45b8-476f-8dd8-8847b5637f42.png" },
  { name: "VAXA", logoUrl: "/lovable-uploads/61a9efdd-45b8-476f-8dd8-8847b5637f42.png" },
  { name: "Doritos", logoUrl: "/lovable-uploads/61a9efdd-45b8-476f-8dd8-8847b5637f42.png" },
  { name: "MSD", logoUrl: "/lovable-uploads/61a9efdd-45b8-476f-8dd8-8847b5637f42.png" },
  { name: "Faraway Road Productions", logoUrl: "/lovable-uploads/61a9efdd-45b8-476f-8dd8-8847b5637f42.png" },
  { name: "BARTENURA", logoUrl: "/lovable-uploads/61a9efdd-45b8-476f-8dd8-8847b5637f42.png" },
  { name: "Apple", logoUrl: "/lovable-uploads/61a9efdd-45b8-476f-8dd8-8847b5637f42.png" },
  { name: "Google", logoUrl: "/lovable-uploads/61a9efdd-45b8-476f-8dd8-8847b5637f42.png" },
  { name: "Microsoft", logoUrl: "/lovable-uploads/61a9efdd-45b8-476f-8dd8-8847b5637f42.png" },
  { name: "Amazon", logoUrl: "/lovable-uploads/61a9efdd-45b8-476f-8dd8-8847b5637f42.png" },
  { name: "Netflix", logoUrl: "/lovable-uploads/61a9efdd-45b8-476f-8dd8-8847b5637f42.png" },
  { name: "Meta", logoUrl: "/lovable-uploads/61a9efdd-45b8-476f-8dd8-8847b5637f42.png" },
  { name: "Tesla", logoUrl: "/lovable-uploads/61a9efdd-45b8-476f-8dd8-8847b5637f42.png" },
  { name: "Spotify", logoUrl: "/lovable-uploads/61a9efdd-45b8-476f-8dd8-8847b5637f42.png" },
  { name: "Adobe", logoUrl: "/lovable-uploads/61a9efdd-45b8-476f-8dd8-8847b5637f42.png" }
];

const BrandCarousel = () => {
  const autoplayPlugin = useRef(
    Autoplay({ 
      delay: 0,    // No delay for continuous scrolling
      stopOnInteraction: false, // Don't stop on user interaction
      playOnInit: true, // Start playing immediately
    })
  );

  return (
    <div className="py-16 bg-portfolio-bg overflow-hidden">
      <div className="max-w-[90%] mx-auto">
        <Carousel
          opts={{
            align: "start",
            loop: true,
            dragFree: true, // Enable free-form dragging
            skipSnaps: true, // Allow the carousel to skip snap points
          }}
          plugins={[autoplayPlugin.current]}
          className="w-full"
        >
          <CarouselContent className="flex items-center">
            {brands.map((brand, index) => (
              <CarouselItem 
                key={index} 
                className="basis-1/4 md:basis-1/5 lg:basis-1/6 pl-4 flex items-center justify-center"
              >
                <div className="h-16 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
                  <img 
                    src={brand.logoUrl} 
                    alt={`${brand.name} logo`} 
                    className="max-h-full max-w-full object-contain filter brightness-0 invert-[.25] sepia-[.25] saturate-[.25] hue-rotate-[20deg]"
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
