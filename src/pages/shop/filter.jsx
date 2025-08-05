import React, { useEffect, useState, useRef } from "react";
import fetchWatches from "../../api/Items";
import { useCursorEffect } from "../../contexts/onMouseEffectContext";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

const FilteredItems = ({ onDataLoaded }) => {
  const [data, setData] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [isFilterOpen, setFilterMenu] = useState(false);

  const { registerHoverRef } = useCursorEffect();
  const filterRef = useRef();
  useEffect(() => {
    if (filterRef.current) registerHoverRef(filterRef.current);
  }, [registerHoverRef]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchWatches();
        setData(data);
        onDataLoaded(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [onDataLoaded]);

  useEffect(() => {
  const filtered = data.filter((product) =>
    product.brand.toLowerCase().includes(selectedBrand.toLowerCase())
  );
  onDataLoaded(filtered);
}, [selectedBrand, data, onDataLoaded]);
  return (
    <>
      <div
        className="Icon h-max w-max flex justify-center items-center"
        ref={filterRef}
        onClick={() => setFilterMenu(!isFilterOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="pointer-events-none"
        >
          <polygon points="3 4 21 4 14 12.5 14 19 10 21 10 12.5 3 4" />
        </svg>
      </div>

      <AnimatePresence>
        {isFilterOpen &&( <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="filterContainer absolute top-20 right-20 w-max h-max bg-gray-800 rounded p-5 origin-top-right"
        >
          <div className="w-max mb-4">
            <label className="block text-sm font-medium text-white mb-1">
              Brand
            </label>
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 text-sm "
            >
              <option value="" className="text-black">
                All Brands
              </option>
              <option value="Rolex" className="text-black">
                Rolex
              </option>
              <option value="Omega" className="text-black">
                Omega
              </option>
              <option value="IWC" className="text-black">
                IWC
              </option>
              <option value="Generic" className="text-black">
                Generic
              </option>
              <option value="Montblanc" className="text-black">
                Montblanc
              </option>
              <option value="Seiko" className="text-black">
                Seiko
              </option>
              <option value="Apple" className="text-black">
                Apple
              </option>
            </select>
          </div> 
        </motion.div>)
}
      </AnimatePresence>
    </>
  );
};

export default FilteredItems;
