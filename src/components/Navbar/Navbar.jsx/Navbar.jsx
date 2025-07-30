import { useState, useRef, useEffect, createRef } from "react";
import { useCursorEffect } from "../../../contexts/onMouseEffectContext";
import { motion } from "motion/react";

export const Navbar = () => {
  const [isMenuOpen, setNavOption] = useState(false);

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const { registerHoverRef } = useCursorEffect();

  const navItems = ["Home", "Shop", "About", "Blog", "Contact"];
  const navRefs = useRef(navItems.map(() => createRef()));
  useEffect(() => {
    navRefs.current.forEach((ref) => {
      if (ref.current) registerHoverRef(ref.current);
    });
  }, []);

  const navIconsImage = [
    "./assets/SVGs/Icons/search-01.svg",
    "./assets/SVGs/Icons/user-circle.svg",
    "./assets/SVGs/Icons/shopping-cart-01.svg",
  ];
  const navIconRefs = useRef(navIconsImage.map(() => createRef()));
  useEffect(() => {
    navIconRefs.current.forEach((ref) => {
      if (ref.current) registerHoverRef(ref.current);
    });
  }, []);

  return (
    <>
      <nav className="w-full h-16 bg-zinc-900  px-6 sm:px-16 flex items-center justify-between z-50">
        <div className="text-white text-2xl">
          Time
          <span className="text-red-600"> Zone</span>
        </div>

        {/* Options for DeskTop  */}
        <div className=" hidden md:block Nav-Options w-80 text-white">
          <motion.ul className="flex justify-between gap-8">
            {navItems.map((item, index) => (
              <motion.li key={item} className="h-max w-max relative flex justify-center items-center" >
                <div className="absolute bounde w-full h-full hover:scale-150 " ref={navRefs.current[index]} />
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <div className="Nav-Icons flex gap-4">
          {navIconsImage.map((image, index) => (
            <span className="searchIcon relative w-7 h-7 mix-blend-difference" >
              <div className="absolute bounde w-full h-full hover:scale-150 " ref={navIconRefs.current[index]} />
              <img
                src={image}
                className=" w-full h-full pointer-events-none"
                alt=""
              />

            </span>
          ))}

          <span
            className="hamburger block md:hidden"
            onClick={() => setNavOption(!isMenuOpen)}
          >
            <svg class="w-6 h-5 text-white fill-current" viewBox="-15 0 130 50">
              <rect width="90" height="10"></rect>
              <rect y="30" width="90" height="10"></rect>
              <rect y="60" width="90" height="10"></rect>
            </svg>
          </span>
        </div>
      </nav>

      {/* Navbar Options For Mobiles */}
      <div
        className={`Nav-Options ${
          isMenuOpen ? "block" : "hidden"
        } absolute z-10 sm:hidden bg-zinc-800 w-full text-white`}
      >
        <ul className="flex flex-col p-4 gap-6  justify-between  ">
          <li>Home</li>
          <li>Shop</li>
          <li>About</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>
    </>
  );
};
