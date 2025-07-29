export const Brands = () => {
  return (
    <section className="BrandsContainer h-max p-5 w-full bg-black flex justify-center items-center">
      <div className="brands w-200 h-max  text-white font-light flex flex-col items-center ">
        <span className="heading ">Supported Brands</span>
        <div className="brandLogos w-full flex flex-row justify-around flex-wrap" >
          <span className="BrandIcon">
            <img
              src="src\assets\SVG's\Brands\Ap.svg"
              className="w-30 h-30"
              alt=""
            />
          </span>
          <span className="BrandIcon">
            <img
              src="src\assets\SVG's\Brands\HUBLOT.svg"
              className="w-30 h-30"
              alt=""
            />
          </span>
          <span className="BrandIcon">
            <img
              src="src\assets\SVG's\Brands\OMEGAsvg.svg"
              className="w-30 h-30"
              alt=""
            />
          </span>
          <span className="BrandIcon">
            <img
              src="src\assets\SVG's\Brands\PATEKphilipee.svg"
              className="w-30 h-30"
              alt=""
            />
          </span>
          <span className="BrandIcon">
            <img
              src="src\assets\SVG's\Brands\Rolex.svg"
              className="w-30 h-30"
              alt=""
            />
          </span>
        </div>
      </div>
    </section>
  );
};
