import Image from "../../assets/undefined.png";
export const SecondHero = () => {
  return (
    <section className="h-180 relative ">
      <div className="image  h-full  bg-black">
        <img
          src={Image}
          alt=""
          className="h-full w-full opacity-70 object-cover"
        />
      </div>
      <div className="heading absolute w-full p-5 top-5 text-center sm:text-left sm:w-130 sm:top-10 sm:right-10   ">
        <span className="text-white  text-sm p-2 font-light ">
          Own a piece of history with our limited-edition watches, crafted in
          small quantities and featuring rare materials. Limited Editions
          Discover the charm of vintage watches or invest in pre-owned
          timepieces that stand the test of time.
        </span>
      </div>
      <div className="heading absolute w-full p-10 bottom-0 sm:w-130 ">
        <span className="text-white text-3xl sm:text-5xl  sm:p-1  font-extralight block">
          Limited Editions
        </span>
        <span className="text-white text-sm  font-light text-left">
          Discover the charm of vintage watches or invest in pre-owned
          timepieces that stand the test of time.
        </span>
      </div>
    </section>
  );
};
