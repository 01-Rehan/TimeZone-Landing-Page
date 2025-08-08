import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { FooterComponent } from "./components/footer/footer";
import { CursorEffect } from "./components/Cursor/cursor";
import { AppRouter } from "./router/AppRouter";
const App = () => {
  return (
    <>
      <CursorEffect />
      <Navbar />
        <AppRouter />
      <FooterComponent />
    </>
  );
};

export default App;
