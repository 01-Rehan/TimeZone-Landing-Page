import { useEffect } from "react";
import { springValue, useMotionValue, useSpring } from "motion/react";

export default function useMousePosition() {
  const y = useMotionValue(0);
  const x = useMotionValue(0);

  const SpringValues = { stiffness: 1000, damping: 50 };

  const SpringX = useSpring(x,SpringValues);
  const SpringY = useSpring(y,SpringValues);

  useEffect(() => {
    function updateMousePosition({ clientX, clientY }) {
      x.set(clientX);
      y.set(clientY);
    }

    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  });

  return { x: SpringX,y: SpringY };
}
