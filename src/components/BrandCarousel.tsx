import React from "react";
import OptimizedImage from "@/components/ui/optimized-image";

interface Brand {
  name: string;
  logoUrl: string;
}

// Brand list with client logos from client-logos directory
const brands: Brand[] = [
  { name: "Philips", logoUrl: "/client-logos/philips.svg" },
  { name: "Gobierno de Chile", logoUrl: "/client-logos/gobiernochile.svg" },
  { name: "Paris Cencosud", logoUrl: "/client-logos/pariscencosud.svg" },
  { name: "Hot Wheels", logoUrl: "/client-logos/hotwheels.svg" },
  { name: "PepsiCo", logoUrl: "/client-logos/pepsico.svg" },
  { name: "L'Oréal Paris", logoUrl: "/client-logos/loreal.svg" },
  { name: "Soundcore", logoUrl: "/client-logos/soundcore.svg" },
  { name: "Barcelo", logoUrl: "/client-logos/barbie.svg" },
  { name: "Me-Elecmetal", logoUrl: "/client-logos/melecmetal.svg" },
  { name: "Anker", logoUrl: "/client-logos/anker.svg" },
  { name: "Little Caesars", logoUrl: "/client-logos/littlecaesars.svg" },
  { name: "Procter & Gamble", logoUrl: "/client-logos/prochile.svg" },
  { name: "Ball", logoUrl: "/client-logos/ball.svg" },
  { name: "Heineken", logoUrl: "/client-logos/heineken.svg" },
  { name: "Chancaca Deliciosa", logoUrl: "/client-logos/deliciosa.svg" },
  { name: "Royal Canin", logoUrl: "/client-logos/royalcanin.svg" },
  { name: "Edusoft", logoUrl: "/client-logos/edusoft.svg" },
  { name: "Krispy Kreme", logoUrl: "/client-logos/krispy_kreme.svg" }
];

const extendedBrands = [...brands, ...brands, ...brands];

const BrandCarousel = () => {
  return (
    <div className="my-4 md:my-8 bg-portfolio-bg overflow-hidden">
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
