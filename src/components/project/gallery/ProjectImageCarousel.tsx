import React, { useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-autoplay";
import OptimizedImage from '@/components/ui/optimized-image';

interface ProjectImageCarouselProps {
  images: string[];
  projectName: string;
  carouselSpeed?: number;
}

const ProjectImageCarousel: React.FC<ProjectImageCarouselProps> = ({ 
  images, 
  projectName,
  carouselSpeed = 30
}) => {
  const delayMs = carouselSpeed > 0 ? Math.max(5000 - (carouselSpeed * 40), 1000) : 5000;
  
  useEffect(() => {
    document.documentElement.style.setProperty('--carousel-duration', `${delayMs}ms`);
  }, [delayMs]);

  const options = {
    loop: true,
    align: "center" as const,
    containScroll: "trimSnaps" as const,
  };

  const autoScrollPlugin = AutoScroll({ delay: delayMs, stopOnInteraction: false });

  return (
    <div className="mb-12">
      <Carousel
        opts={options}
        plugins={[autoScrollPlugin]}
        className="project-images-carousel"
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
              <OptimizedImage
                src={image}
                alt={`${projectName} - Slide ${index}`}
                aspectRatio={1}
                priority={index < 3} // Load first 3 images eagerly
                className="object-contain bg-portfolio-bg"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default ProjectImageCarousel;
