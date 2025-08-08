import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ product }) => {
  return (
    <Link
      to={`/product/${product.id}`}
      className="focus:outline-none focus:ring-2 focus:ring-red-600 rounded"
    >
      <div className="text-white w-40 sm:h-110 sm:w-75 h-80 p-4 rounded-lg shadow bg-gray-900 hover:shadow-lg transition-shadow m-2">
        <div className="img h-7/12 sm:h-80  flex justify-center">
        <img
          src={`/TimeZone-Landing-Page/assets/watchPics/${product.image}`}
          alt={`${product.brand} ${product.model}`}
          className=" object-cover rounded mb-2"
        />
        </div>
        <h3 className="font-bold text-lg">{product.model}</h3>
        <p className="text-sm">{product.category}</p>
        <p className="text-sm text-gray-500">{product.price}</p>
      </div>
    </Link>
  );
};

export default Cards;
