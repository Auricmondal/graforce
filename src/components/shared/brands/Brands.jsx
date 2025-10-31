import React from 'react'

const BrandLogos = () => {
  const brandLogoBase = "/brand/img/";

  // Hardcoded fallback logos
  const fallbackLogos = [
    { src: `${brandLogoBase}digicert_icon.png.webp`, name: "Brand 1" },
    { src: `${brandLogoBase}Group.webp`, name: "Brand 2" },
    { src: `${brandLogoBase}Vector.webp`, name: "Brand 3" },
    { src: `${brandLogoBase}WSJ.webp`, name: "Brand 4" },
    { src: `${brandLogoBase}WSJ.webp`, name: "Brand 5" },
    { src: `${brandLogoBase}Vector.webp`, name: "Brand 6" },
  ];
  return (
    <div
      id="brands"
      className="grid md:grid-cols-3 grid-cols-2 gap-4 p-0 h-fit w-full bg-cst-neutral-1 rounded-lg"
    >
      {fallbackLogos.map((logo, i) => (
        <div
          key={i}
          className="group flex items-center justify-center bg-cst-neutral-1 border border-cst-neutral-2 rounded-lg h-[131px] md:h-[196px]"
        >
          <img
            src={logo.src}
            alt={logo.name}
            className="w-[25%] h-[25%] object-contain rounded-lg filter grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
          />
        </div>
      ))}
    </div>
  )
}

export default BrandLogos