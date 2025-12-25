import React from "react";
import OptimizedImage from "@/components/ui/optimized-image";

interface Brand {
  name: string;
  logoUrl: string;
}

// Brand list with client logos from client-logos directory
const brands: Brand[] = [
  { name: "Ball", logoUrl: "/images/client-logos/ball.svg" },
  { name: "Barbie", logoUrl: "/images/client-logos/barbie.svg" },
  { name: "Deliciosa", logoUrl: "/images/client-logos/deliciosa.svg" },
  { name: "Anker", logoUrl: "/images/client-logos/anker.svg" },
  /*{ name: "Edusoft", logoUrl: "/images/client-logos/edusoft.svg" },*/
  { name: "Gobierno de Chile", logoUrl: "/images/client-logos/gobiernochile.svg" },
  { name: "Heineken", logoUrl: "/images/client-logos/heineken.svg" },
  /*{ name: "Igenix", logoUrl: "/images/client-logos/igenix.svg" },*/
  { name: "Inaba", logoUrl: "/images/client-logos/inaba.svg" },
  { name: "Churu", logoUrl: "/images/client-logos/churu.svg" },
  /*{ name: "Keds", logoUrl: "/images/client-logos/keds.svg" },*/
  { name: "Krispy Kreme", logoUrl: "/images/client-logos/krispy_kreme.svg" },
  { name: "KSB", logoUrl: "/images/client-logos/ksb.svg" },
  { name: "Little Caesars", logoUrl: "/images/client-logos/littlecaesars.svg" },
  { name: "Loreal", logoUrl: "/images/client-logos/loreal.svg" },
  { name: "Me-Elecmetal", logoUrl: "/images/client-logos/melecmetal.svg" },
  { name: "Merrell", logoUrl: "/images/client-logos/merrell.svg" },
  { name: "On", logoUrl: "/images/client-logos/on.svg" },
  { name: "Paris Cencosud", logoUrl: "/images/client-logos/pariscencosud.svg" },
  { name: "Pepsico", logoUrl: "/images/client-logos/pepsico.svg" },
  { name: "Philips", logoUrl: "/images/client-logos/philips.svg" },
  { name: "ProChile", logoUrl: "/images/client-logos/prochile.svg" },
  { name: "Soundcore", logoUrl: "/images/client-logos/soundcore.svg" },
  { name: "Royal Canin", logoUrl: "/images/client-logos/royalcanin.svg" },
  { name: "Tierra Hotels", logoUrl: "/images/client-logos/tierrahotels.svg" },
  { name: "Under Armour", logoUrl: "/images/client-logos/underarmour.svg" }
];

const extendedBrands = [...brands, ...brands, ...brands];

const BrandCarousel = () => {
  return (
    <div className="mb-8 md:mb-12 mt-0 bg-portfolio-bg overflow-hidden">
      <div className="max-w-[90%] mx-auto">
        <div className="logos">
          <div className="logos-slide">
            {extendedBrands.map((brand, index) => (
              <div key={index} className="logo-container">
                <OptimizedImage
                  src={brand.logoUrl}
                  alt={`${brand.name} logo`}
                  className={`logo-image${brand.name === "Me-Elecmetal" ? " logo-melecmetal" : ""}${brand.name === "Philips" ? " logo-philips" : ""}`}
                  wrapperClassName=""
                  responsive={false}
                  fit="contain"
                  priority={index < brands.length}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandCarousel;
