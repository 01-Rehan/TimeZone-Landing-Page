import React from "react";
// import WatchFilter from './filter'

const Cards = ({ product }) => {
  return (
    <div className=" text-white p-4 rounded-lg shadow">
      <img
        src={`/TimeZone-Landing-Page/assets/watchPics/${product.image}`}
        alt={product.name}
        className="h-50 w-30  sm:h-80 sm:w-50 object-cover rounded mb-2"
      />
      <h3 className="font-bold text-lg">{product.name}</h3>
      <p className="text-sm">{product.brand}</p>
      <p className="text-sm text-gray-500">{product.price}</p>
    </div>
  );
};

export default Cards;
