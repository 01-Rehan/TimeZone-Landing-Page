import React from "react";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import fetchWatches from "../../api/Items";
import { useState, useEffect } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8 },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.6 }
  },
};

const detailsVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, delay: 0.2 }
  },
};

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadProduct() {
      try {
        setLoading(true);
        const allProducts = await fetchWatches();
        const foundProduct = allProducts.find(
          (item) => item.id === parseInt(id, 10)
        );
        if (!foundProduct) {
          setError("Product not found");
          setProduct(null);
        } else {
          setProduct(foundProduct);
          setError(null);
        }
      } catch (err) {
        setError("Failed to load product");
        setProduct(null);
      } finally {
        setLoading(false);
      }
    }
    loadProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
          <p className="text-xl">Loading product details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 text-xl mb-4">{error}</p>
          <button
            onClick={() => navigate(-1)}
            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  if (!product) return null;

  return (
    <motion.div
      className="min-h-screen bg-black text-white font-sans"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Navigation */}
      <div className="px-6 py-4 border-b border-gray-800">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-red-600 hover:text-red-400 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Products
        </button>
      </div>

      {/* Product Details */}
      <div className="px-6 py-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Product Image */}
          <motion.div
            variants={imageVariants}
            className="space-y-4"
          >
            <div className="bg-gray-900 rounded-2xl border border-red-600 p-8 aspect-square flex items-center justify-center">
              <img
                src={`/TimeZone-Landing-Page/assets/watchPics/${product.image}`}
                alt={`${product.brand} ${product.model}`}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
            
            {/* Additional product images could go here */}
            <div className="grid grid-cols-4 gap-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-gray-800 border border-gray-700 rounded-lg aspect-square p-2">
                  <img
                    src={`/TimeZone-Landing-Page/assets/watchPics/${product.image}`}
                    alt="Product view"
                    className="w-full h-full object-contain opacity-60 hover:opacity-100 cursor-pointer transition-opacity"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Product Information */}
          <motion.div
            variants={detailsVariants}
            className="space-y-6"
          >
            {/* Brand and Model */}
            <div>
              <p className="text-red-600 font-semibold text-lg mb-1">{product.brand}</p>
              <h1 className="text-4xl font-bold text-white mb-2">{product.model}</h1>
              <p className="text-2xl font-bold text-red-600">{product.price}</p>
            </div>

            {/* Description */}
            <div className="border-t border-gray-800 pt-6">
              <h2 className="text-xl font-semibold mb-3">Description</h2>
              <p className="text-gray-300 leading-relaxed">{product.description}</p>
            </div>

            {/* Specifications */}
            <div className="border-t border-gray-800 pt-6">
              <h2 className="text-xl font-semibold mb-4">Specifications</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
                  <p className="text-red-600 font-semibold mb-1">Category</p>
                  <p className="text-white">{product.category}</p>
                </div>
                <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
                  <p className="text-red-600 font-semibold mb-1">Material</p>
                  <p className="text-white">{product.material}</p>
                </div>
                <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
                  <p className="text-red-600 font-semibold mb-1">Year</p>
                  <p className="text-white">{product.year}</p>
                </div>
                <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
                  <p className="text-red-600 font-semibold mb-1">Model ID</p>
                  <p className="text-white">#{product.id}</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="border-t border-gray-800 pt-6 space-y-4">
              <button className="w-full bg-red-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-all transform hover:scale-105">
                Add to Cart
              </button>
              <div className="grid grid-cols-2 gap-4">
                <button className="border border-red-600 text-red-600 py-3 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-colors">
                  Add to Wishlist
                </button>
                <button className="border border-gray-600 text-gray-300 py-3 rounded-lg font-semibold hover:bg-gray-600 hover:text-white transition-colors">
                  Share
                </button>
              </div>
            </div>

            {/* Additional Info */}
            <div className="border-t border-gray-800 pt-6">
              <div className="grid grid-cols-1 gap-3 text-sm">
                <div className="flex items-center text-gray-400">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Free shipping on orders over $100
                </div>
                <div className="flex items-center text-gray-400">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
                  </svg>
                  30-day return policy
                </div>
                <div className="flex items-center text-gray-400">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                  </svg>
                  1-year warranty included
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductPage;