import React from "react";
import { Home } from "../pages/Home/home";
import { About } from "../pages/about/About";
import { Shop } from "../pages/shop/Shop";
import { Contact } from "../pages/contact/Contact";
import { Blog } from "../pages/blog/Blog";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Inner from "../utils/Inner";

export const AppRouter = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Inner><Home /></Inner>} />
        <Route path="/about" element={<Inner><About /></Inner>} />
        <Route path="/shop" element={<Inner><Shop /></Inner>} />
        <Route path="/contact" element={<Inner><Contact /></Inner>} />
        <Route path="/blog" element={<Inner><Blog /></Inner>} />
      </Routes>
    </AnimatePresence>
  );
};
