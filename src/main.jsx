import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CursorHoverProvider } from "./contexts/onMouseEffectContext";
import { CursorEffect } from "./components/Cursor/cursor";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CursorHoverProvider>
      <CursorEffect />
      <App />
    </CursorHoverProvider>
  </StrictMode>
);
