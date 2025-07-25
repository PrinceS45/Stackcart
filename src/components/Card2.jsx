import React, { useState } from 'react';

const Card2 = ({ image, image2, title, price, originalPrice, isOnSale }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className="bg-[] text-white rounded-xl shadow-lg p-4 w-[300px] h-[430px] relative flex flex-col"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {/* Product Image */}
      <div className="relative bg-white rounded-md overflow-hidden" style={{ height: 250, minHeight: 250 }}>
        <img
          src={isHover ? image2 : image}
          alt={title}
          className="w-full h-full object-contain rounded-md"
        />
        {isOnSale && (
          <span className="absolute top-2 right-2 bg-white text-black text-xs font-semibold px-2 py-1 rounded-full">
            Sale
          </span>
        )}
        <button className="absolute bottom-2 right-2 text-red-700 hover:text-white">
          ♥
        </button>
      </div>

      {/* Title, Brand, Price */}
      <div className="flex-1 flex flex-col justify-between h-25">
        <div className="mt-4">
          <h3 className="text-sm font-semibold line-clamp-2">{title}</h3>
          <p className="text-xs text-gray-400 mt-1">Stackcart</p>
        </div>
        <div className="mt-2">
          <span className="text-sm line-through text-gray-400 mr-2">
            ₹{originalPrice}
          </span>
          <span className="text-lg font-bold">₹{price}</span>
        </div>
      </div>

      {/* Button */}
      <button className="mt-6 w-full bg-transparent border border-white py-2 rounded-md hover:bg-white hover:text-[#2a0a47] transition">
        Add to cart
      </button>
    </div>
  );
};

export default Card2;