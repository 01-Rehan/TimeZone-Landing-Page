import heroImage from "../../assets/image.jpg";
import { Button } from "./Button";

export const HeroSection = () => {
  const Buttons = {
    shopNow: {
        bgcolor: "#ffffff",
        text: "Shop Now", 
        textColor: "#000000",
    },
    newCollection: {
        bgcolor: "#000000",
        text: "New Collection",
        textColor: "#ffffff",
    }

  };

  return (
    <section className="HeroSection relative h-max ">
      <div className="img w-full h-screen xl:h-max ">
        <img
          src={heroImage}
          alt="Herobackground"
          className=" w-full h-full object-cover "
        />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-160 bg-gradient-to-t from-black to-transparent"></div>
      <div className="HeroContent-MainContainer w-full h-2/5 absolute  bottom-0 flex items-center justify-center ">
        <div className="HeroContetnt-innerContainer w-130  flex flex-col justify-around relative ">
          <div className="heading flex justify-center flex-wrap text-center ">
            <span className="text-white  text-3xl sm:text-5xl p-2 sm:p-1  font-extralight">
              Discover Timeless Elegance with TimeZone
            </span>
            <span className="text-white  text-sm p-2 font-light ">
              we believe that every second counts. Our carefully curated
              collection of luxury and everyday timepieces offers more than just
              a way to keep time—they reflect your style, precision, and
              craftsmanship.
            </span>
          </div>
          <div className="heroButtons  full flex justify-center  ">
            <Button config={Buttons.shopNow} />
            <Button config={Buttons.newCollection} />
          </div>
        </div>
      </div>
    </section>
  );
};
