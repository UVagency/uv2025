
import React from 'react';
import Flickity from 'react-flickity-component';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import 'flickity/css/flickity.css';

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
  // Calculate autoplay speed: lower carouselSpeed value means slower carousel
  // We invert the relationship: higher input number = faster carousel
  // With a base of 8000ms for the slowest speed (value of 1)
  const autoPlaySpeed = carouselSpeed > 0 ? 8000 / carouselSpeed : false;
  
  const flickityOptions = {
    autoPlay: autoPlaySpeed,
    wrapAround: true,
    contain: true,
    prevNextButtons: false,
    pageDots: false,
    freeScroll: true,
    cellAlign: 'center',
    pauseAutoPlayOnHover: true,
    draggable: true,
    selectedAttraction: 0.01,
    friction: 0.15
  };

  return (
    <div className="mb-12">
      <Flickity
        className="project-images-carousel"
        options={flickityOptions}
        reloadOnUpdate
        static
      >
        {images.map((image, index) => (
          <div 
            key={index} 
            className="w-[430px] mx-2 carousel-cell"
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
      </Flickity>
    </div>
  );
};

export default ProjectImageCarousel;
