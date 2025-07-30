import { forwardRef } from "react";

export const Button = forwardRef(({ bgcolor, text, textColor }, ref) => {
  return (
    <button
      className= "Button w-40 h-12 border m-2.5 border-white rounded-xl hover:scale-105 transition"
      style={{ backgroundColor: bgcolor, color: textColor }}
    >
      {text}
    </button>
  );
});
