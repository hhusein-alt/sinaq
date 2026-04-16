const logos = [
  { src: "/images/logos/bloomberg.svg", alt: "Bloomberg" },
  { src: "/images/logos/clifford-chance-black.svg", alt: "Clifford Chance" },
  { src: "/images/logos/cbre.svg", alt: "CBRE" },
  { src: "/images/logos/pfizer.svg", alt: "Pfizer" },
  { src: "/images/logos/british-airways.svg", alt: "British Airways" },
  { src: "/images/logos/lloyds.svg", alt: "Lloyds" },
  { src: "/images/logos/morrison-foerster.svg", alt: "Morrison Foerster" },
  { src: "/images/logos/citi.svg", alt: "Citi" },
  { src: "/images/logos/whitecase.svg", alt: "White & Case" },
  { src: "/images/logos/skyscanner.svg", alt: "Skyscanner" },
  { src: "/images/logos/walmart.svg", alt: "Walmart" },
  { src: "/images/logos/goldman-sachs.svg", alt: "Goldman Sachs" },
];

export function LogoTicker() {
  return (
    <section className="bg-white pb-12">
      <p
        className="mb-6 px-4 text-center text-[16px] font-medium text-[#3F3F3F]"
      >
        Featuring job simulations and jobs from leading companies
      </p>

      <div className="w-full overflow-hidden">
        <div className="animate-ticker flex items-center gap-x-12">
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={`${logo.alt}-${index}`}
              src={logo.src}
              alt={logo.alt}
              className="h-10 w-auto flex-shrink-0 object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
