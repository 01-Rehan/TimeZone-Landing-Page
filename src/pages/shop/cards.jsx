import React from 'react'
import WatchFilter from './filter'

const Cards = ({product}) => {
  return (
     <div className=" text-white p-4 rounded-lg shadow">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded mb-2" />
      <h3 className="font-bold text-lg">{product.name}</h3>
      <p className="text-sm">{product.brand}</p>
      <p className="text-sm text-gray-500">₹{product.price}</p>
    </div>
  )
}

export default Cards