import { motion } from "motion/react";
import { forwardRef } from "react";

export const Button = forwardRef(({ bgcolor, text, textColor }, ref) => {
  return (
    <motion.button
      ref={ref}
      className="w-40 h-12 border m-2.5 border-white rounded-xl"
      style={{ backgroundColor: bgcolor, color: textColor }}
    >
      {text}
    </motion.button>
  );
});
