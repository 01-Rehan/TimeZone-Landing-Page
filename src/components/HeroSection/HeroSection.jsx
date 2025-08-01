import heroImage from "/assets/image.jpg";
import { Button } from "./Button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="HeroSection relative w-full h-max ">
      <div className="img w-full h-screen overflow-hidden bg-black">
        {/* The Hero Section Video */}
        <motion.video
          className="background-video w-full h-full object-cover z-0"
          preload="none"
          autoPlay
          muted
          loop
          playsInline
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 2,
          }}
        >
          <source
            src="public/assets/Videos/9965968-hd_1280_720_50fps.mp4"
            type="video/mp4"
            media="(max-width: 768px)"
          />
          <source
            src="public/assets/Videos/9965968-hd_1920_1080_25fps.mp4"
            type="video/mp4"
            media="(min-width: 769px)"
          />
          Your browser does not support the video tag.
        </motion.video>

        {/* The Hero Section Image (Optional) */}

        {/* <motion.img
          initial={{
            scale: 1,
            opacity: 0,
          }}
          animate={{
            scale: 1.03,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          src={heroImage}
          alt="Herobackground"
          className=" w-full h-full object-cover z-0"
        /> */}
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-150 sm:h-110 bg-gradient-to-t from-black to-transparent"></div>
      <div className="HeroContent-MainContainer w-full h-2/5 absolute  bottom-0 flex items-center justify-center ">
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
            bottom: 20,
          }}
          viewport={{
            once: true,
            margin: "10px",
          }}
          transition={{
            duration: 1,
          }}
          className="HeroContetnt-innerContainer w-130  flex flex-col justify-around relative "
        >
          <div className="heading flex justify-center flex-wrap text-center ">
            <span className="text-white  text-3xl sm:text-5xl p-2 sm:p-1 font-extralight">
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
            <Button text="Shop Now" bgcolor="#ffffff" textColor="#000000" />
            <Button
              text="New Collection"
              bgcolor="#000000"
              textColor="#ffffff"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export { HeroSection };
