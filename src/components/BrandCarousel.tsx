
import { useRef } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface Brand {
  name: string;
  logoUrl: string;
}

// Updated brand list with actual client logos from client-logos directory
const brands: Brand[] = [
  { name: "Philips", logoUrl: "/client-logos/philips.svg" },
  { name: "PepsiCo", logoUrl: "/client-logos/pepsico.svg" },
  { name: "Royal Canin", logoUrl: "/client-logos/royalcanin.svg" },
  { name: "Little Caesars", logoUrl: "/client-logos/littlecaesars.svg" },
  { name: "Me-Elecmetal", logoUrl: "/client-logos/melecmetal.svg" },
  { name: "Ball", logoUrl: "/client-logos/ball.svg" },
  { name: "Heineken", logoUrl: "/client-logos/heineken.svg" },
  { name: "Edusoft", logoUrl: "/client-logos/edusoft.svg" }
];

const BrandCarousel = () => {
  const autoplayPlugin = useRef(
    Autoplay({ 
      delay: 2000,    // 2 seconds between each automatic movement
      stopOnInteraction: true, // Stop on interaction
      playOnInit: true, // Start playing immediately
      rootNode: (emblaRoot) => emblaRoot.parentElement, // Required for proper functioning
      stopOnMouseEnter: true, // Stop when mouse enters
      stopOnFocusIn: true, // Stop when focused with keyboard
    })
  );

  return (
    <div className="py-16 bg-portfolio-bg overflow-hidden">
      <div className="max-w-[90%] mx-auto">
        <Carousel
          opts={{
            align: "start",
            loop: true,
            direction: "ltr",
            dragFree: false,
            skipSnaps: false,
          }}
          plugins={[autoplayPlugin.current]}
          className="w-full"
        >
          <CarouselContent className="flex items-center">
            {brands.map((brand, index) => (
              <CarouselItem 
                key={index} 
                className="basis-1/3 md:basis-1/4 lg:basis-1/6 pl-4 flex items-center justify-center"
              >
                <div className="h-16 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
                  <img 
                    src={brand.logoUrl} 
                    alt={`${brand.name} logo`} 
                    className="max-h-full max-w-full object-contain filter brightness-0 invert sepia-[.25] saturate-[1.5] hue-rotate-[40deg]"
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
