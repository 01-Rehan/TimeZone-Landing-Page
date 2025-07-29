export const Button = ({ config }) => {
  const { bgcolor, text, textColor } = config;

  return (
    <button
      className="w-40 h-12 border m-2.5 border-white rounded-xl hover:scale-105 transition"
      style={{ backgroundColor: bgcolor, color: textColor }}
    >
      {text}
    </button>
  );
};
