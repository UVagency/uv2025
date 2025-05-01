import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-autoplay";

interface Brand {
  name: string;
  logoUrl: string;
}

// Brand list with client logos from client-logos directory
const brands: Brand[] = [
  { name: "Philips", logoUrl: "/client-logos/philips.svg" },
  { name: "PepsiCo", logoUrl: "/client-logos/pepsico.svg" },
  { name: "Little Caesars", logoUrl: "/client-logos/littlecaesars.svg" },
  { name: "Me-Elecmetal", logoUrl: "/client-logos/melecmetal.svg" },
  { name: "Ball", logoUrl: "/client-logos/ball.svg" },
  { name: "Heineken", logoUrl: "/client-logos/heineken.svg" },
  { name: "Royal Canin", logoUrl: "/client-logos/royalcanin.svg" },
  { name: "Edusoft", logoUrl: "/client-logos/edusoft.svg" }
];

const BrandCarousel = () => {
  const options = {
    loop: true,
    dragFree: false,
    containScroll: "trimSnaps" as const,
    align: "start" as const,
    slidesToScroll: 1,
    inViewThreshold: 0,
  };

  // Configuración del plugin AutoScroll con valores más suaves
  const autoScrollPlugin = AutoScroll({
    delay: 1700,
    stopOnInteraction: false,
    playOnInit: true,
    rootNode: (emblaRoot) => emblaRoot.parentElement,
  });

  // Duplicamos las marcas para crear un efecto de desplazamiento continuo
  const extendedBrands = [...brands, ...brands];

  return (
    <div className="py-16 bg-portfolio-bg overflow-hidden">
      <div className="max-w-[108%] mx-auto">
        <Carousel
          opts={options}
          plugins={[autoScrollPlugin]}
          className="brand-carousel"
        >
          <CarouselContent>
            {extendedBrands.map((brand, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/4 lg:basis-1/5 px-4"
              >
                <div
                  style={{ width: 432, aspectRatio: '5 / 1' }}
                  className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
                >
                  <img
                    src={brand.logoUrl}
                    alt={`${brand.name} logo`}
                    className="max-h-full max-w-full object-contain hover:brightness-0 hover:saturate-100 hover:[filter:invert(77%)_sepia(13%)_saturate(1162%)_hue-rotate(132deg)_brightness(95%)_contrast(92%)] transition-all duration-300"
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
