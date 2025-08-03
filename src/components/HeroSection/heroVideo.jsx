import React from "react";
import { motion } from "framer-motion";

const HeroVideo = () => {
  return (
    <>
    <div className="relative w-full h-[100vh] overflow-hidden z-0">
      <motion.video
        className="background-video absolute top-0 left-0 w-full h-full object-cover z-0"
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
          src="/TimeZone-Landing-Page/9965968-hd_1280_720_50fps.mp4"
          type="video/mp4"
          // media="(max-width: 768px)"
        />
        {/* <source
            src="/9965968-hd_1920_1080_25fps.mp4"
            type="video/mp4"
            media="(min-width: 769px)"
          /> */}
        Your browser does not support the video tag.
      </motion.video>
      </div>
      
    </>
  );
};

export default HeroVideo;
