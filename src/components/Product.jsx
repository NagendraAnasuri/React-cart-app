import React from "react";

export default function Product({ img, title, price, addToCart, isAdded }) {
  return (
    <div className="border rounded-md p-3 shadow hover:shadow-lg transition">
      <img
        src={img}
        alt={title}
        className="w-full h-40 object-cover rounded mb-2"
      />
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-gray-600 mb-2">Price: ${price}</p>
      <button
        disabled={isAdded}
        className={`px-4 py-2 rounded text-white ${
          isAdded
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600"
        }`}
        onClick={addToCart}
      >
        {isAdded ? "Added to Cart" : "Add to Cart"}
      </button>
    </div>
  );
}
