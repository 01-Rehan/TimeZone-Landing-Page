import { motion } from "motion/react";
export const Button = ({ config }) => {
  const { bgcolor, text, textColor } = config;

  return (
    <motion.button
      whileHover={{
        scale:1.05
      }}
      className="w-40 h-12 border m-2.5 border-white rounded-xl"
      style={{ backgroundColor: bgcolor, color: textColor }}
    >
      {text}
    </motion.button>
  );
};
