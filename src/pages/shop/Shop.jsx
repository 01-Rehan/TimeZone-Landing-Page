import React, { useState } from "react";
import HeroVideo from "../../components/HeroSection/heroVideo";
import Cards from "./cards";
import FilteredItems from "./filter";

export const Shop = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  return (
    <>
      <div className="w-full min-h-screen bg-black text-white relative ">
        <div className="videoBG absolute w-full h-full bg-red-950"></div>

        <div className="con p-2 sm:p-4">
          <div className="Container relative z-10 flex flex-col md:flex-row gap-6  mx-auto py-10 px-4 bg-gray-950 rounded-2xl">
            {/* Main Content */}
            <div className="flex-1">
              <div className="header flex justify-between px-10">
                <h1 className="text-4xl font-bold mb-6">Shop</h1>
                <FilteredItems onDataLoaded={setFilteredProducts} />
              </div>

              <div className="itemCon flex flex-wrap justify-center gap-5">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <Cards key={product.id} product={product} />
                  ))
                ) : (
                  <p className="text-gray-400">
                    No products match your filters.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
