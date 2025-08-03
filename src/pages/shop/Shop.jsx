import React, { useState } from "react";
import HeroVideo from "../../components/HeroSection/heroVideo";
import WatchFilter from "./filter";
import { watchProducts } from "./filter";
import Cards from "./cards";

export const Shop = () => {
  const [filteredProducts, setFilteredProducts] = useState(watchProducts);

  return (
    <>
      <div className="w-full min-h-screen bg-black text-white relative " >
        <div className="videoBG absolute w-full h-full bg-red-950">
        </div>

<div className="con p-2 sm:p-4">
        <div className="Container relative z-10 flex flex-col md:flex-row gap-6  mx-auto py-10 px-4 bg-gray-950 rounded-2xl">
          {/* Sidebar Filters */}
          <WatchFilter onFilterChange={setFilteredProducts} />

          {/* Main Content */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-6">Shop</h1>

            <div className="itemCon grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <Cards key={product.id} product={product} />
                ))
              ) : (
                <p className="text-gray-400">No products match your filters.</p>
              )}
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};
