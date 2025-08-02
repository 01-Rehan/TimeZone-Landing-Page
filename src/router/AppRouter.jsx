import React from "react";
import { Home } from "../pages/Home/home";
import { About } from "../pages/about/About";
import { Shop } from "../pages/shop/Shop";
import { Contact } from "../pages/contact/Contact";
import { Blog } from "../pages/blog/Blog";
import { Routes, Route } from "react-router-dom";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
};
