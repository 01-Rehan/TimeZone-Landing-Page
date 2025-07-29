import { motion } from "motion/react";
("use client");
import useMousePosition from "../../utils/onMousePosition";

export const CursorEffect = () => {

    const { x, y } = useMousePosition();

  return (
    <motion.div
      className="MouseCursor fixed w-5 h-5 hidden sm:block bg-white rounded-full pointer-events-none z-10"
      style={{ left: x, top: y, translateX: "-50%", translateY: "-50%" }}
    ></motion.div>
  );
};
