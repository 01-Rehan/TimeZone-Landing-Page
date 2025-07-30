import { useEffect, useState } from "react";
import { springValue, useMotionValue, useSpring } from "motion/react";

export default function useMousePosition({ hoverRefs }) {
  const y = useMotionValue(0);
  const x = useMotionValue(0);
  const [isHovered, setHoverd] = useState(false);

  const SpringValues = { stiffness: 1000, damping: 50 };

  const SpringX = useSpring(x, SpringValues);
  const SpringY = useSpring(y, SpringValues);

  const cursorSize = isHovered ? 60 : 20;

  function updateMousePosition({ clientX, clientY }) {
    x.set(clientX - cursorSize / 2);
    y.set(clientY - cursorSize / 2);
  }

  
  useEffect(() => {
    const elements = hoverRefs?.current;
     elements.forEach(el => {
      el.addEventListener("mouseover", () => setHoverd(true));
      el.addEventListener("mouseleave", () => setHoverd(false));
    });

    window.addEventListener("mousemove",updateMousePosition);

    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
       elements.forEach(el => {
      el.removeEventListener("mouseover", () => setHoverd(true));
      el.removeEventListener("mouseleave", () => setHoverd(false));
    });
    };
  }, [hoverRefs, cursorSize]);

  return { x: SpringX, y: SpringY, cursorSize };
}
