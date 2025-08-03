export const Brands = () => {
  const BrandLogos = [
    "/TimeZone-Landing-Page/assets/SVGs/Brands/Ap.svg",
    "/TimeZone-Landing-Page/assets/SVGs/Brands/HUBLOT.svg",
    "/TimeZone-Landing-Page/assets/SVGs/Brands/OMEGAsvg.svg",
    "/TimeZone-Landing-Page/assets/SVGs/Brands/PATEKphilipee.svg",
    "/TimeZone-Landing-Page/assets/SVGs/Brands/Rolex.svg",
  ];

  return (
    <section className="BrandsContainer h-max p-5 w-full bg-black flex justify-center items-center">
      <div className="brands w-200 h-max  text-white font-light flex flex-col items-center ">
        <span className="heading ">Supported Brands</span>
        <div className="brandLogos w-full flex flex-row justify-around flex-wrap ">
          {BrandLogos?.map((brand, index) => (
            <span className="BrandIcon">
              <img
                src={brand}
                className="w-30 h-30"
                alt=""
              />
            </span>
          ))}
          
        </div>
      </div>
    </section>
  );
};
