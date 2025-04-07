
import React from "react";
import Flickity from 'react-flickity-component';
import 'flickity/css/flickity.css';

interface Brand {
  name: string;
  logoUrl: string;
}

// Brand list with client logos from client-logos directory
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

// Flickity options
const flickityOptions = {
  autoPlay: 2000,
  wrapAround: true,
  contain: true,
  prevNextButtons: false,
  pageDots: false,
  freeScroll: true,
  cellAlign: 'left',
  pauseAutoPlayOnHover: true
};

const BrandCarousel = () => {
  return (
    <div className="py-16 bg-portfolio-bg overflow-hidden">
      <div className="max-w-[90%] mx-auto">
        <Flickity
          className="brand-carousel" // This element is used as the Flickity element
          options={flickityOptions}
          reloadOnUpdate
          static
        >
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-1/3 md:w-1/4 lg:w-1/6 px-4"
            >
              <div className="h-16 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
                <img
                  src={brand.logoUrl}
                  alt={`${brand.name} logo`}
                  className="max-h-full max-w-full object-contain filter brightness-0 invert sepia-[.25] saturate-[1.5] hue-rotate-[40deg]"
                />
              </div>
            </div>
          ))}
        </Flickity>
      </div>
    </div>
  );
};

export default BrandCarousel;
