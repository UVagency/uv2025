
import React, { useCallback, useEffect } from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useCarousel } from "@/components/ui/carousel/carousel-context";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-autoplay";

interface ProjectImageCarouselProps {
  images: string[];
  projectName: string;
  carouselSpeed?: number; // Speed prop
}

const ProjectImageCarousel: React.FC<ProjectImageCarouselProps> = ({ 
  images, 
  projectName,
  carouselSpeed = 30 // Default value of 30
}) => {
  // Calculate autoplay delay: higher carouselSpeed value means faster carousel
  // Convert the carouselSpeed (1-100) to delay in ms (5000ms-1000ms)
  const delayMs = carouselSpeed > 0 ? Math.max(5000 - (carouselSpeed * 40), 1000) : 5000;
  
  // Store the slideshow duration as a CSS variable for animations
  useEffect(() => {
    document.documentElement.style.setProperty('--carousel-duration', `${delayMs}ms`);
  }, [delayMs]);

  const options = {
    loop: true,
    align: "center",
    containScroll: "trimSnaps",
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
              <div className="overflow-hidden rounded-md">
                <AspectRatio ratio={430/240}>
                  <img
                    src={image}
                    alt={`${projectName} - Slide ${index}`}
                    className="w-full h-full object-cover"
                    width={430}
                    height={240}
                    loading="eager"
                  />
                </AspectRatio>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default ProjectImageCarousel;
