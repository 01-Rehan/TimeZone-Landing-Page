import { useEffect, useState, useRef } from "react";
import { useMotionValue, useSpring } from "framer-motion";

export default function useMousePosition({ hoverRefs }) {
  const y = useMotionValue(-100);
  const x = useMotionValue(-100);
  const scale = useMotionValue(1);
  const [hoveredElement, setHoveredElement] = useState(null);
  
  // Track previous mouse position and timestamp for velocity calculation
  const prevPosition = useRef({ x: 0, y: 0, timestamp: Date.now() });
  const velocityRef = useRef(0);

  const SpringValues = { stiffness: 1000, damping: 50, mass: 0.5 };
  const ScaleSpringValues = { stiffness: 600, damping: 30, mass: 0.2 }; // Snappier for movement

  const SpringX = useSpring(x, SpringValues);
  const SpringY = useSpring(y, SpringValues);
  const SpringScale = useSpring(scale, ScaleSpringValues);

  const baseCursorSize = hoveredElement ? 50 : 30;
  const cursorSize = baseCursorSize;

  function updateMousePosition({ clientX, clientY }) {
    const currentTime = Date.now();
    const deltaTime = currentTime - prevPosition.current.timestamp;
    
    // Calculate distance moved
    const deltaX = clientX - prevPosition.current.x;
    const deltaY = clientY - prevPosition.current.y;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    
    // Calculate velocity (pixels per millisecond, then convert to pixels per second)
    const velocity = deltaTime > 0 ? (distance / deltaTime) * 1000 : 0;
    velocityRef.current = velocity;
    
    // Apply squeeze based on velocity
    // Higher velocity = more squeeze (smaller scale)
    // Adjust these values to fine-tune the effect:
    const maxVelocity = 3000; // Max velocity to consider for scaling
    const minScale = 0.6; // Minimum scale when moving fast
    const maxScale = 1.2; // Maximum scale when moving slow/stationary
    
    // Normalize velocity and invert it (fast movement = small scale)
    const normalizedVelocity = Math.min(velocity / maxVelocity, 1);
    const targetScale = maxScale - (normalizedVelocity * (maxScale - minScale));
    
    scale.set(targetScale);
    
    // Update cursor position
    if (hoveredElement) {
      const { top, left, width, height } =
        hoveredElement.getBoundingClientRect();
      const center = { x: left + width / 2, y: top + height / 2 };
      const distance = { x: clientX - center.x, y: clientY - center.y };

      x.set(center.x - cursorSize / 2 + distance.x * 0.2);
      y.set(center.y - cursorSize / 2 + distance.y * 0.2);
    } else {
      x.set(clientX - cursorSize / 2);
      y.set(clientY - cursorSize / 2);
    }
    
    // Update previous position and timestamp
    prevPosition.current = { x: clientX, y: clientY, timestamp: currentTime };
  }

  // Optional: Reset scale when mouse stops moving
  useEffect(() => {
    const resetTimer = setTimeout(() => {
      // If velocity is very low, gradually return to normal scale
      if (velocityRef.current < 100) {
        scale.set(1);
      }
    }, 100);

    return () => clearTimeout(resetTimer);
  });

  useEffect(() => {
    const elements = hoverRefs?.current;

    if (!elements) {
      console.log("No elements found");
      return;
    }

    const handleMouseEnter = (e) => {
      setHoveredElement(e.target);
    };
    
    const handleMouseLeave = (e) => {
      setHoveredElement(null);
    };

    elements.forEach((el) => {
      el.addEventListener("mouseover", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition, {passive:true});
      
      elements.forEach((el) => {
        el.removeEventListener("mouseover", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [hoverRefs, cursorSize]);

  return { 
    x: SpringX, 
    y: SpringY, 
    scale: SpringScale,
    cursorSize, 
    hoveredElement,
    velocity: velocityRef.current // Optional: return velocity for debugging
  };
}