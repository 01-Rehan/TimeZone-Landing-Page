import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CursorHoverProvider } from "./contexts/onMouseEffectContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CursorHoverProvider>
      
      <App />
    </CursorHoverProvider>
  </StrictMode>
);
