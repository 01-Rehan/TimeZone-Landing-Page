import { useState, useRef, useEffect, createRef } from "react";
import { useCursorEffect } from "../../../contexts/onMouseEffectContext";
import { motion, AnimatePresence } from "framer-motion";
import Hamburger from 'hamburger-react'
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [isMenuOpen, setNavOption] = useState(false);

  const { registerHoverRef } = useCursorEffect();

  const navItems = ["Home", "Shop", "About", "Blog", "Contact"];
  const navRefs = useRef(navItems.map(() => createRef()));
  useEffect(() => {
    navRefs.current.forEach((ref) => {
      if (ref.current) registerHoverRef(ref.current);
    });
  }, [registerHoverRef]);

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
  }, [registerHoverRef]);

  return (
    <>
      <nav className="w-full h-16 bg-zinc-900  px-4 sm:px-16 flex items-center justify-between z-50">
        <div className="text-white text-2xl">
          Time
          <span className="text-red-600"> Zone</span>
        </div>

        {/* Options for DeskTop  */}
        <div className=" hidden md:block Nav-Options w-max text-white">
          <motion.ul className="flex justify-between gap-8">
            {navItems.map((item, index) => (
              <NavLink
                key={item}
                to={
                  item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}`
                }
                className={({ isActive }) =>
                  `${isActive ? "border-b-3 border-red-700" : ""}`
                }
              >
                <motion.li className=" `h-max w-max relative flex justify-center items-center p-1 ">
                  <div
                    className="absolute bounde w-full h-full hover:scale-150 "
                    ref={navRefs.current[index]}
                  />
                  {item}
                </motion.li>
              </NavLink>
            ))}
          </motion.ul>
        </div>

        <div className="Nav-Icons flex gap-2 items-center">
          {navIconsImage.map((image, index) => (
            <span
              className="searchIcon relative w-7 h-7 mix-blend-difference m-1"
              key={index}
            >
              <div
                className="absolute bounde w-full h-full hover:scale-150 "
                ref={navIconRefs.current[index]}
              />
              <img
                src={image}
                className=" w-full h-full pointer-events-none"
                alt=""
              />
            </span>
          ))}

          <span
            className="hamburger md:hidden text-white scale-60"
            onClick={() => setNavOption(!isMenuOpen)}
          >
            <Hamburger />
          </span>
        </div>
      </nav>

      {/* Navbar Options For Mobiles */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
            className={` absolute w-screen  z-10 sm:hidden flex flex-row-reverse p-1 origin-top-right`}
          >
            <ul className="flex w-[75%] relative flex-col p-4 gap-6 justify-between bg-zinc-800 text-white rounded-xl ">
              {navItems.map((item, index) => (
                <NavLink
                  key={item}
                  to={
                    item.toLowerCase() === "home"
                      ? "/"
                      : `/${item.toLowerCase()}`
                  }
                  className={({ isActive }) =>
                    ` py-1 ${isActive ? "border-b-[3px] border-red-700" : ""}`
                  }
                >
                  <li>{item}</li>
                </NavLink>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
