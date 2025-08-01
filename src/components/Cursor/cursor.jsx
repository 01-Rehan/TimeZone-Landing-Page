import { motion } from "framer-motion";
("use client");
import useMousePosition from "../../utils/onMousePosition";
import { useCursorEffect } from "../../contexts/onMouseEffectContext";

export const CursorEffect = () => {
  const { hoverRefs } = useCursorEffect();
  const { x, y, cursorSize, scale } = useMousePosition({ hoverRefs });

  return (
    <motion.div
      className="MouseCursor hidden sm:fixed  w-5 h-5 sm:block bg-white rounded-full pointer-events-none z-100 mix-blend-difference"
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
