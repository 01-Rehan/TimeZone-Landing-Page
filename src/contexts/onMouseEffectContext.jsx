import { createContext, useRef, useContext } from "react";

const CursorHoverContext = createContext(null);

export function CursorHoverProvider({ children }) {
  const hoverRefs = useRef([]);

  function registerHoverRef(ref) {
    if (ref && !hoverRefs.current.includes(ref)) {
      hoverRefs.current.push(ref);
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
