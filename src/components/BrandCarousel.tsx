
import { useRef } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface Brand {
  name: string;
  logoUrl: string;
}

// Updated brand list with different logo URLs for each brand
const brands: Brand[] = [
  { name: "Flaviar", logoUrl: "/lovable-uploads/630d3839-8c19-4e9a-a57e-198ff13a4be8.png" },
  { name: "VAXA", logoUrl: "/lovable-uploads/af5c0765-b397-4bf4-b0db-667ed840a472.png" },
  { name: "Doritos", logoUrl: "/lovable-uploads/c15594f5-19d0-42d5-9d84-3379cd2243a3.png" },
  { name: "MSD", logoUrl: "/lovable-uploads/328b3bd3-2f60-41c0-8e3a-77b754e362a6.png" },
  { name: "Apple", logoUrl: "/lovable-uploads/61a9efdd-45b8-476f-8dd8-8847b5637f42.png" },
  { name: "Google", logoUrl: "/lovable-uploads/630d3839-8c19-4e9a-a57e-198ff13a4be8.png" },
  { name: "Microsoft", logoUrl: "/lovable-uploads/af5c0765-b397-4bf4-b0db-667ed840a472.png" },
  { name: "Amazon", logoUrl: "/lovable-uploads/c15594f5-19d0-42d5-9d84-3379cd2243a3.png" },
  { name: "Netflix", logoUrl: "/lovable-uploads/328b3bd3-2f60-41c0-8e3a-77b754e362a6.png" },
  { name: "Meta", logoUrl: "/lovable-uploads/61a9efdd-45b8-476f-8dd8-8847b5637f42.png" },
  { name: "Tesla", logoUrl: "/lovable-uploads/630d3839-8c19-4e9a-a57e-198ff13a4be8.png" },
  { name: "Spotify", logoUrl: "/lovable-uploads/af5c0765-b397-4bf4-b0db-667ed840a472.png" },
  { name: "Adobe", logoUrl: "/lovable-uploads/c15594f5-19d0-42d5-9d84-3379cd2243a3.png" },
  { name: "IBM", logoUrl: "/lovable-uploads/328b3bd3-2f60-41c0-8e3a-77b754e362a6.png" },
  { name: "Intel", logoUrl: "/lovable-uploads/61a9efdd-45b8-476f-8dd8-8847b5637f42.png" }
];

const BrandCarousel = () => {
  const autoplayPlugin = useRef(
    Autoplay({ 
      delay: 2000,    // 2 segundos entre cada movimiento automático
      stopOnInteraction: true, // Detener al interactuar
      playOnInit: true, // Comenzar a reproducir inmediatamente
      rootNode: (emblaRoot) => emblaRoot.parentElement, // Necesario para el funcionamiento correcto
      stopOnMouseEnter: true, // Detener al pasar el mouse
      stopOnFocusIn: true, // Detener al enfocar con teclado,
    })
  );

  return (
    <div className="py-16 bg-portfolio-bg overflow-hidden">
      <div className="max-w-[90%] mx-auto">
        <Carousel
          opts={{
            align: "start",
            loop: true,
            direction: "ltr", // Cambiado de 'rtl' a 'ltr' para cambiar la dirección
            dragFree: false, // Desactivar arrastre libre para mejor control
            skipSnaps: false, // Mantener snap points para un desplazamiento más controlado
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
