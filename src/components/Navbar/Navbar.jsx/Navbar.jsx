import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setNavOption] = useState(false);

  return (
    <>
      <nav className="w-full h-16 bg-zinc-900  px-6 sm:px-16 flex items-center justify-between">
        <div className="text-white">
          Time
          <span className="text-red-600"> Zone</span>
        </div>

        {/* Options for DeskTop  */}
        <div className=" hidden sm:block Nav-Options w-80 text-white">
          <ul className="flex justify-between  ">
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="Nav-Icons flex gap-4">
          <span className="searchIcon ">
            <img
              src="src\assets\SVG's\Icons\search-01.svg"
              className="w-6 h-6"
              alt=""
            />
          </span>
          <span className="UserIcon ">
            <img
              src="src\assets\SVG's\Icons\user-circle.svg"
              className="w-6 h-6"
              alt=""
            />
          </span>
          <span className="CartIcon">
            <img
              src="src\assets\SVG's\Icons\shopping-cart-01.svg"
              className="w-6 h-6"
              alt=""
            />
          </span>
          <span className="hamburger block sm:hidden" onClick={() => setNavOption(!isMenuOpen)}>
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

