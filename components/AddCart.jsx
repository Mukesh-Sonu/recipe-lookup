"use client";
import React from "react";

function AddCart({ name }) {
  return (
    <div>
      <button
        onClick={() => {
          alert(`Added ${name} to cart!`);
        }}
        className="bg-red-500 transition duration-150 ease-in-out text-white hover:bg-red-900 px-2 py-2 rounded-lg"
      >
        Add to cart
      </button>
    </div>
  );
}

export default AddCart;
