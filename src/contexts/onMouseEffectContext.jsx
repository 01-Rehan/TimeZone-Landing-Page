import { createContext, useRef, useContext } from "react";

const CursorHoverContext = createContext(null);

export function CursorHoverProvider({ children }) {
  const hoverRefs = useRef(new Set());

  function registerHoverRef(ref) {
    if (ref && !hoverRefs.current.has(ref)) {
      hoverRefs.current.add(ref);
    }
  }

  return (
    <CursorHoverContext.Provider value={{ hoverRefs, registerHoverRef }}>
      {children}
    </CursorHoverContext.Provider>
  );
}
export function useCursorEffect() {
  return useContext(CursorHoverContext);
}
