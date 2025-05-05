import React from "react";

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
  { name: "Chancaca Deliciosa", logoUrl: "/client-logos/chancaca.svg" },
  { name: "Ball", logoUrl: "/client-logos/ball.svg" },
  { name: "Heineken", logoUrl: "/client-logos/heineken.svg" },
  { name: "Royal Canin", logoUrl: "/client-logos/royalcanin.svg" },
  { name: "Edusoft", logoUrl: "/client-logos/edusoft.svg" },
  { name: "Krispy Kreme", logoUrl: "/client-logos/krispy_kreme.svg" }
];

const extendedBrands = [...brands, ...brands, ...brands];

const BrandCarousel = () => {
  return (
    <div className="my-16 md:my-24 bg-portfolio-bg overflow-hidden">
      <div className="max-w-[90%] mx-auto">
        <div className="logos">
          <div className="logos-slide">
            {extendedBrands.map((brand, index) => (
              <div key={index} className="logo-container">
                <img
                  src={brand.logoUrl}
                  alt={`${brand.name} logo`}
                  className={`logo-image${brand.name === "Me-Elecmetal" ? " logo-melecmetal" : ""}${brand.name === "Philips" ? " logo-philips" : ""}`}
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
