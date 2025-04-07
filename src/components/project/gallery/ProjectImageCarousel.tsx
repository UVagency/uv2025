
import React, { useRef, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ProjectImageCarouselProps {
  images: string[];
  projectName: string;
  carouselSpeed?: number; // New prop for carousel speed
}

const ProjectImageCarousel: React.FC<ProjectImageCarouselProps> = ({ 
  images, 
  projectName,
  carouselSpeed = 30 // Default value of 30
}) => {
  // Calculate the proper delay based on speed
  // Lower speed value means faster carousel (inverse relationship)
  const delay = carouselSpeed > 0 ? 2000 / carouselSpeed : 0;
  
  // Use autoplay plugin with Embla Carousel with continuous movement settings
  const autoplayRef = useRef(
    Autoplay({ 
      delay: delay,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      rootNode: (emblaRoot) => emblaRoot.parentElement,
    })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: true,
      dragFree: true,
      containScroll: false,
    },
    [autoplayRef.current]
  );

  // Effect to recreate the autoplay instance when carouselSpeed changes
  useEffect(() => {
    if (emblaApi) {
      autoplayRef.current.options.delay = delay;
      autoplayRef.current.reset();
    }
  }, [carouselSpeed, delay, emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      const onPointerDown = () => {
        autoplayRef.current.stop();
      };

      const onPointerUp = () => {
        autoplayRef.current.play();
      };

      emblaApi.on('pointerDown', onPointerDown);
      emblaApi.on('pointerUp', onPointerUp);
      
      return () => {
        emblaApi.off('pointerDown', onPointerDown);
        emblaApi.off('pointerUp', onPointerUp);
      };
    }
  }, [emblaApi]);

  return (
    <div className="mb-12">
      <div className="embla w-full overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="flex-[0_0_430px] mx-2 min-w-0"
            >
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectImageCarousel;
