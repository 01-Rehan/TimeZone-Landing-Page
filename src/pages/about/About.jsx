import React from "react";
import { motion } from "framer-motion";

function Paragraph({ para }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale : 0.95
      }}
      whileInView={{
        opacity: 1,
        scale : 1,
        bottom: 5,
      }}
      viewport={{
        once: true,
        margin:"50px"
      }}
      transition={{
        duration: 1,
      }}
      className="w-full flex flex-col gap-5 items-center"
    >
      <span className=" text-2xl text-center ">{para.head}</span>
      <p className="w-screen px-3 md:w-8/12 text-center">{para.data}</p>
    </motion.div>
  );
}

export const About = () => {
  return (
    <section className="w-full h-max p-15 text-white">
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          bottom: 5,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 2,
        }}
        className=" relative heading w-full mb-10 text-5xl text-center "
      >
        <p> About Time<span className="text-red-600">Zone</span> </p>
        <p>Where Time Becomes Legacy</p>
      </motion.div>

        <div className="Data flex  flex-col gap-10">

      <Paragraph
        para={{
          head: "Our Story",
          data: "Founded with a passion for precision and a reverence for timeless design, TimeZone emerged as more than a watch brand—it became a symbol of mastery. From our earliest sketches to our latest collection, every detail reflects an unwavering commitment to elegance, engineering, and endurance.",
        }}
      />
      <Paragraph
        para={{
          head: "The Art of Craftsmanship",
          data: "At TimeZone, each timepiece is hand-assembled by master horologists using meticulously sourced materials. Our movements—crafted in the heart of Switzerland—are engineered to perform with uncompromising accuracy. From sapphire crystal faces to hand-stitched leather straps, no element is left untouched by excellence",
        }}
      />
      <Paragraph
        para={{
          head: "Designed for the Few",
          data: "Every collection we release is created in limited runs to ensure exclusivity. Our pieces are designed not just to tell time—but to embody it. Whether you wear a TimeZone chronograph or minimalist automatic, you carry a story of heritage, precision, and personal legacy.",
        }}
      />
      <Paragraph
        para={{
          head: "Global Presence",
          data: "With clientele in over 40 countries and boutique partners across Europe, the Middle East, and Asia, TimeZone is a name spoken where luxury meets legacy. Our watches have adorned the wrists of visionaries, artists, diplomats, and discerning collectors.",
        }}
      />
      <Paragraph
        para={{
          head: "A Commitment to Integrity",
          data: "We stand behind every watch we produce. With each piece comes: A certificate of authenticity A lifetime service guarantee Access to our global concierge network Our values are as precise as our movements: transparency, quality, and lasting trust.",
        }}
      />
      <Paragraph
        para={{
          head: "Join the TimeZone Legacy",
          data: "Whether you’re a lifelong collector or purchasing your first heirloom, we welcome you to experience time as we see it—not fleeting, but eternal.",
        }}
      />
      <p className="text-center text-2xl">Time <span className="text-red-600">Zone</span> — Time, well told.</p>
      </div>
    </section>
  );
};
