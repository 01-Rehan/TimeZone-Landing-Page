"use client";
import { motion } from "framer-motion";
import useMousePosition from "../../utils/onMousePosition";
import { useCursorEffect } from "../../contexts/onMouseEffectContext";

export const CursorEffect = () => {
  const { hoverRefs } = useCursorEffect();
  const { x, y, cursorSize, scale } = useMousePosition({ hoverRefs });

  return (
    <motion.div
      className="MouseCursor hidden md:fixed  md:block bg-white rounded-full pointer-events-none z-50 mix-blend-difference"
      style={{
        x,
        y,
        scale,
      }}
      animate={{
        width: cursorSize,
        height: cursorSize,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 30,
      }}
    ></motion.div>
  );
};
