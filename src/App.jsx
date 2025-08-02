import React from "react";
import { useRef } from "react";
import { Navbar } from "./components/Navbar/Navbar.jsx/Navbar";
import { Home } from "./pages/Home/home";
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
