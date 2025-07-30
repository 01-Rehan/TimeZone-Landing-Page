import { useEffect, useState } from "react";
import { hover, springValue, useMotionValue, useSpring } from "motion/react";

export default function useMousePosition({ hoverRefs }) {
  const y = useMotionValue(-100);
  const x = useMotionValue(-100);
  const [hoveredElement, setHoveredElement] = useState(null);

  const SpringValues = { stiffness: 1000, damping: 50, mass: 0.5 };

  const SpringX = useSpring(x, SpringValues);
  const SpringY = useSpring(y, SpringValues);

  const cursorSize = hoveredElement ? 50 : 30;

  function updateMousePosition({ clientX, clientY }) {
    if (hoveredElement) {
      const { top, left, width, height } =
        hoveredElement.getBoundingClientRect();
      const center = { x: left + width / 2, y: top + height / 2 };
      const distance = { x: clientX - center.x, y: clientY - center.y };

      x.set((center.x - cursorSize / 2) + distance.x * 0.2);
      y.set((center.y - cursorSize / 2) + distance.y * 0.2);
    } else {
      x.set(clientX - cursorSize / 2);
      y.set(clientY - cursorSize / 2);
    }
  }

  useEffect(() => {
    const elements = hoverRefs?.current;

    const handleMouseEnter = (e) => setHoveredElement(e.target);
    const handleMouseLeave = (e) => setHoveredElement(null);

    elements.forEach((el) => {
      el.addEventListener("mouseover", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      elements.forEach((el) => {
        el.removeEventListener("mouseover", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [hoverRefs, cursorSize]);

  return { x: SpringX, y: SpringY, cursorSize, hoveredElement };
}
