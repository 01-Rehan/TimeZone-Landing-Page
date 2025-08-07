import { useState, useRef, useEffect, createRef } from "react";
import { useCursorEffect } from "../../contexts/onMouseEffectContext";
import { motion, AnimatePresence } from "framer-motion";
import Hamburger from "hamburger-react";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [isMenuOpen, setNavOption] = useState(false);
  const [isUserMenu, setUserMenu] = useState(false);
  const [isCartMenu, setCartMenu] = useState(false);

  const { registerHoverRef } = useCursorEffect();

  const navItems = ["Home", "Shop", "About", "Blog", "Contact"];
  const navRefs = useRef(navItems.map(() => createRef()));
  const search = useRef();
  const user = useRef();
  const cart = useRef();
  useEffect(() => {
    navRefs.current.forEach((ref) => {
      if (ref.current) registerHoverRef(ref.current);
    });

    if (search.current) registerHoverRef(search.current);
    if (user.current) registerHoverRef(user.current);
    if (cart.current) registerHoverRef(cart.current);
  }, [registerHoverRef]);

  return (
    <>
      <nav className="w-full h-16 bg-black  px-4 sm:px-16 flex items-center justify-between z-20">
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
              >
                {({ isActive }) => (
                  <motion.li
                    className=" h-max w-max relative flex justify-center items-center p-1 "
                    initial={false}
                    animate={{
                      scale: isActive ? 1.1 : 1,
                      color: isActive ? "#e00700" : "#ffffff",
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="absolute bounde w-full h-full hover:scale-150 z-0 " />
                    <span ref={navRefs.current[index]} className="z-1">
                      {item}
                    </span>

                    <motion.div
                      layout
                      className="absolute  bottom-0  h-[2px] bg-red-700 rounded-full"
                      initial={{ width: 0, opacity: 0 }}
                      animate={
                        isActive
                          ? { width: "100%", opacity: 1 }
                          : { width: 0, opacity: 0 }
                      }
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                  </motion.li>
                )}
              </NavLink>
            ))}
          </motion.ul>
        </div>

        {/* right side icons of the navbar */}

        <div className="Nav-Icons flex gap-2 items-center">
          <span className="searchIcon relative w-7 h-7 mix-blend-difference m-1">
            <span ref={search}>
              <div className="absolute bounde w-full h-full hover:scale-150 " />
              <img
                src="./assets/SVGs/Icons/search-01.svg"
                className=" w-full h-full pointer-events-none"
                alt=""
              />
            </span>
          </span>

          <span className="userIcon relative w-7 h-7 mix-blend-difference m-1 text-white">
            <span ref={user} onClick={() => setUserMenu(!isUserMenu)}>
              <div className="absolute bounde w-full h-full hover:scale-150 " />
              <img
                src="./assets/SVGs/Icons/user-circle.svg"
                className=" w-full h-full pointer-events-none"
                alt=""
              />
            </span>
          </span>

          {/* <span className="text-white">HI, Rehan</span> */}

          <span className="cartIcon relative w-7 h-7 mix-blend-difference m-1">
            <span ref={cart} onClick={() => setCartMenu(!isCartMenu)}>
              <div className="absolute bounde w-full h-full hover:scale-150 " />
              <img
                src="./assets/SVGs/Icons/shopping-cart-01.svg"
                className=" w-full h-full pointer-events-none"
                alt=""
              />
            </span>
          </span>

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
            className={` absolute w-screen z-20 md:hidden flex flex-row-reverse p-1 origin-top-right`}
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
                >
                  {({ isActive }) => (
                    <motion.li
                      className=" h-max w-full relative flex  items-center p-1 "
                      initial={false}
                      animate={{
                        scale: isActive ? 1.01 : 1,
                        color: isActive ? "#e00700" : "#ffffff",
                      }}
                      transition={{ type: "spring", stiffness: 100 }}
                    >
                      {item}
                      <motion.div
                        layout
                        className="absolute  bottom-0 left-0 h-[2px] bg-red-700 rounded-full"
                        initial={{ width: 0, opacity: 0 }}
                        animate={
                          isActive
                            ? { width: "100%", opacity: 1 }
                            : { width: 0, opacity: 0 }
                        }
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      />
                    </motion.li>
                  )}
                </NavLink>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Feature menus */}

      <AnimatePresence>
        {isUserMenu && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
            className=" absolute right-0 w-11/12 sm:w-100 h-max z-20 flex flex-col p-4 m-1 origin-top sm:origin-top-right bg-zinc-800 text-white"
          >

            {/* logged users */}

            {/* <div className="logged">
              <div className="head w-full h-max flex items-center gap-2">
                <img
                  src="./assets/SVGs/Icons/user-circle.svg"
                  className=" w-max h-10 pointer-events-none"
                  alt=""
                />
                <div className="head-text flex flex-col">
                  <span className="Name font-bold">Hello, Rehan</span>
                  <span className="text-sm hover:font-bold transition-all">
                    account settings
                  </span>
                </div>
              </div>
            </div> */}


            {/* for user who is not logged in  */}

            <div className="Unknown w-full h-max p-2 flex gap-5 flex-col">
              <div className="notLogged ">You are not logged in</div>
              <div className="AuthButtons w-full h-max flex items-center justify-between ">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    to="/login"
                    className="px-5 py-2 rounded-lg bg-white text-black font-semibold shadow hover:bg-gray-200 transition-all"
                  >
                    Login
                  </Link>
                </motion.div>
                <span>New user?</span>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    to="/register"
                    className="px-5 py-2 rounded-lg bg-red-600 text-white font-semibold shadow hover:bg-red-700 transition-all"
                  >
                    Register
                  </Link>
                </motion.div>
              </div> 
            </div>


          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
