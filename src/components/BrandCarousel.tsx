
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

interface Brand {
  name: string;
  logoUrl: string;
}

const brands: Brand[] = [
  { name: "Flaviar", logoUrl: "/lovable-uploads/61a9efdd-45b8-476f-8dd8-8847b5637f42.png" },
  { name: "VAXA", logoUrl: "/lovable-uploads/61a9efdd-45b8-476f-8dd8-8847b5637f42.png" },
  { name: "Doritos", logoUrl: "/lovable-uploads/61a9efdd-45b8-476f-8dd8-8847b5637f42.png" },
  { name: "MSD", logoUrl: "/lovable-uploads/61a9efdd-45b8-476f-8dd8-8847b5637f42.png" },
  { name: "Faraway Road Productions", logoUrl: "/lovable-uploads/61a9efdd-45b8-476f-8dd8-8847b5637f42.png" },
  { name: "BARTENURA", logoUrl: "/lovable-uploads/61a9efdd-45b8-476f-8dd8-8847b5637f42.png" }
];

const BrandCarousel = () => {
  return (
    <div className="py-16 bg-portfolio-bg">
      <div className="max-w-[90%] mx-auto">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="flex items-center">
            {brands.map((brand, index) => (
              <CarouselItem key={index} className="basis-1/3 md:basis-1/4 lg:basis-1/6 pl-4 flex items-center justify-center">
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
