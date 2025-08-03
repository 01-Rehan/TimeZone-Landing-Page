import React, { useState } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import {
  brands,
  categories,
  subcategories,
  priceRanges,
  movements,
  caseMaterials,
  watchProducts,
} from "./itms.js";

export default function WatchFilter({ onFilterChange }) {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [selectedMovement, setSelectedMovement] = useState("");
  const [selectedCaseMaterial, setSelectedCaseMaterial] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const applyFilters = () => {
    let filtered = watchProducts;

    if (selectedBrand) {
      filtered = filtered.filter((w) => w.brand === selectedBrand);
    }
    if (selectedCategory) {
      filtered = filtered.filter((w) => w.category === selectedCategory);
    }
    if (selectedSubcategory) {
      filtered = filtered.filter((w) => w.subcategory === selectedSubcategory);
    }
    if (selectedPriceRange) {
      filtered = filtered.filter(
        (w) =>
          w.price >= selectedPriceRange.min && w.price < selectedPriceRange.max
      );
    }
    if (selectedMovement) {
      filtered = filtered.filter((w) =>
        w.movement.toLowerCase().includes(selectedMovement.toLowerCase())
      );
    }
    if (selectedCaseMaterial) {
      filtered = filtered.filter((w) =>
        w.caseMaterial
          .toLowerCase()
          .includes(selectedCaseMaterial.toLowerCase())
      );
    }
    if (inStockOnly) {
      filtered = filtered.filter((w) => w.inStock);
    }

    onFilterChange(filtered);
  };

  const clearAll = () => {
    setSelectedBrand("");
    setSelectedCategory("");
    setSelectedSubcategory("");
    setSelectedPriceRange(null);
    setSelectedMovement("");
    setSelectedCaseMaterial("");
    setInStockOnly(false);
    onFilterChange(watchProducts);
  };

  return (
    // Desktop Filter Section

    <>
      <div className="filter-container hidden md:flex w-80 h-full items-center p-7 ">
        <div className="w-full h-full bg-black rounded-xl shadow-lg p-6 font-sans text-white  ">
          <h2 className="font-serif text-xl mb-6">Filter Watches</h2>

          {/* Brand */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Brand</label>
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="w-full p-2 bg-gray-800 text-white rounded"
            >
              <option value="">All Brands</option>
              {brands.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </div>

          {/* Category */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full p-2 bg-gray-800 text-white rounded"
            >
              <option value="">All Categories</option>
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          {/* Subcategory */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">
              Subcategory
            </label>
            <select
              value={selectedSubcategory}
              onChange={(e) => setSelectedSubcategory(e.target.value)}
              className="w-full p-2 bg-gray-800 text-white rounded"
            >
              <option value="">All Subcategories</option>
              {subcategories.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          {/* Price Range */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">
              Price Range
            </label>
            <select
              value={selectedPriceRange?.label || ""}
              onChange={(e) => {
                const found = priceRanges.find(
                  (p) => p.label === e.target.value
                );
                setSelectedPriceRange(found || null);
              }}
              className="w-full p-2 bg-gray-800 text-white rounded"
            >
              <option value="">All Prices</option>
              {priceRanges.map(({ label }) => (
                <option key={label} value={label}>
                  {label}
                </option>
              ))}
            </select>
          </div>

          {/* Movement */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Movement</label>
            <select
              value={selectedMovement}
              onChange={(e) => setSelectedMovement(e.target.value)}
              className="w-full p-2 bg-gray-800 text-white rounded"
            >
              <option value="">All Movements</option>
              {movements.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>

          {/* Case Material */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">
              Case Material
            </label>
            <select
              value={selectedCaseMaterial}
              onChange={(e) => setSelectedCaseMaterial(e.target.value)}
              className="w-full p-2 bg-gray-800 text-white rounded"
            >
              <option value="">All Materials</option>
              {caseMaterials.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>

          {/* In Stock */}
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              checked={inStockOnly}
              onChange={() => setInStockOnly(!inStockOnly)}
              className="mr-2"
            />
            <label className="text-sm">In Stock Only</label>
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-6">
            <button
              onClick={clearAll}
              className="text-sm text-gray-400 underline"
            >
              Clear All
            </button>
            <button
              onClick={applyFilters}
              className="bg-white text-black px-4 py-2 rounded"
            >
              Show Results
            </button>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden px-4 py-5">
        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full bg-black text-white px-4 py-2 rounded-lg font-semibold"
        >
          {isOpen ? "Filters ▲" : "Filters ▼"}
        </button>

        {/* Slide Down Container */}
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden bg-black ${
            isOpen ? "max-h-auto" : "max-h-0"
          }`}
        >
            <AnimatePresence>
        {isOpen && (
          <motion.div
            key="filters"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="origin-top bg-black p-4"
          >
            {/* Title */}
            <h2 className="font-serif text-xl mb-4">Filter Watches</h2>

            {/* Reuse your filters here, unchanged */}
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">Brand</label>
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-full p-2 bg-gray-800 text-white rounded"
              >
                <option value="">All Brands</option>
                {brands.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>

            {/* Category */}
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full p-2 bg-gray-800 text-white rounded"
              >
                <option value="">All Categories</option>
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            {/* Subcategory */}
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">
                Subcategory
              </label>
              <select
                value={selectedSubcategory}
                onChange={(e) => setSelectedSubcategory(e.target.value)}
                className="w-full p-2 bg-gray-800 text-white rounded"
              >
                <option value="">All Subcategories</option>
                {subcategories.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Range */}
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">
                Price Range
              </label>
              <select
                value={selectedPriceRange?.label || ""}
                onChange={(e) => {
                  const found = priceRanges.find(
                    (p) => p.label === e.target.value
                  );
                  setSelectedPriceRange(found || null);
                }}
                className="w-full p-2 bg-gray-800 text-white rounded"
              >
                <option value="">All Prices</option>
                {priceRanges.map(({ label }) => (
                  <option key={label} value={label}>
                    {label}
                  </option>
                ))}
              </select>
            </div>

            {/* Movement */}
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">
                Movement
              </label>
              <select
                value={selectedMovement}
                onChange={(e) => setSelectedMovement(e.target.value)}
                className="w-full p-2 bg-gray-800 text-white rounded"
              >
                <option value="">All Movements</option>
                {movements.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </div>

            {/* Case Material */}
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">
                Case Material
              </label>
              <select
                value={selectedCaseMaterial}
                onChange={(e) => setSelectedCaseMaterial(e.target.value)}
                className="w-full p-2 bg-gray-800 text-white rounded"
              >
                <option value="">All Materials</option>
                {caseMaterials.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </div>

            {/* In Stock */}
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                checked={inStockOnly}
                onChange={() => setInStockOnly(!inStockOnly)}
                className="mr-2"
              />
              <label className="text-sm">In Stock Only</label>
            </div>

            {/* Buttons */}
            <div className="flex justify-between mt-6">
              <button
                onClick={clearAll}
                className="text-sm text-gray-400 underline"
              >
                Clear All
              </button>
              <motion.button
                onClick={applyFilters}
                whileTap={{
                  scale:0.95
                }}
                className="bg-white text-black px-4 py-2 rounded"
              >
                Show Results
              </motion.button>
            </div>
          </motion.div>
        )}
        </AnimatePresence>
        </div>
      </div>
    </>
  );
}

export {watchProducts};
