import React from "react";

interface Brand {
  name: string;
  logoUrl: string;
}

// Brand list with client logos from client-logos directory
const brands: Brand[] = [
  { name: "Ball", logoUrl: "/client-logos/ball.svg" },
  { name: "Barbie", logoUrl: "/client-logos/barbie.svg" },
  { name: "Deliciosa", logoUrl: "/client-logos/deliciosa.svg" },
  { name: "Anker", logoUrl: "/client-logos/anker.svg" },
  /*{ name: "Edusoft", logoUrl: "/client-logos/edusoft.svg" },*/
  { name: "Gobierno de Chile", logoUrl: "/client-logos/gobiernochile.svg" },
  { name: "Heineken", logoUrl: "/client-logos/heineken.svg" },
  /*{ name: "Igenix", logoUrl: "/client-logos/igenix.svg" },*/
  { name: "Inaba", logoUrl: "/client-logos/inaba.svg" },
  { name: "Churu", logoUrl: "/client-logos/churu.svg" },
  /*{ name: "Keds", logoUrl: "/client-logos/keds.svg" },*/
  { name: "Krispy Kreme", logoUrl: "/client-logos/krispy_kreme.svg" },
  { name: "KSB", logoUrl: "/client-logos/ksb.svg" },
  { name: "Little Caesars", logoUrl: "/client-logos/littlecaesars.svg" },
  { name: "Loreal", logoUrl: "/client-logos/loreal.svg" },
  { name: "Me-Elecmetal", logoUrl: "/client-logos/melecmetal.svg" },
  { name: "Merrell", logoUrl: "/client-logos/merrell.svg" },
  { name: "On", logoUrl: "/client-logos/on.svg" },
  { name: "Paris Cencosud", logoUrl: "/client-logos/pariscencosud.svg" },
  { name: "Pepsico", logoUrl: "/client-logos/pepsico.svg" },
  { name: "Philips", logoUrl: "/client-logos/philips.svg" },
  { name: "ProChile", logoUrl: "/client-logos/prochile.svg" },
  { name: "Soundcore", logoUrl: "/client-logos/soundcore.svg" },
  { name: "Royal Canin", logoUrl: "/client-logos/royalcanin.svg" },
  { name: "Tierra Hotels", logoUrl: "/client-logos/tierrahotels.svg" },
  { name: "Under Armour", logoUrl: "/client-logos/underarmour.svg" }
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
