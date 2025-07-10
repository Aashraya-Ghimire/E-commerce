import React from "react";
import Items from "../../Landing/Items";
import { useState } from "react";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { IoStarOutline } from "react-icons/io5";
import { GrFavorite } from "react-icons/gr";
function Productinfo({ data, setShowmodel }) {
  return (
    <div
      className="bg-white flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 w-full max-w-3xl mx-auto"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="relative w-full md:w-1/2 h-60 md:h-auto text-black">
        <img
          src={data?.image}
          alt={data?.name}
          className="w-full h-full object-cover"
        />
        <button
          className="h-8 w-8 absolute top-2 left-2 z-10 bg-[#fa7516] rounded-[50%] text-3xl text-white box-border" 
          onClick={() => setShowmodel(false)}
        >
          <IoIosArrowBack />
        </button>
      </div>
      <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
        <div>
          <div className="text-sm text-gray-400 uppercase tracking-widest mb-2 text-center md:text-left">
            {data?.mealType}
          </div>
          <div className="flex justify-between items-start gap-2 mb-4">
            <h2 className="text-xl font-bold text-gray-800">{data?.name}</h2>
            <div className="flex gap-[2px] text-yellow-400 text-lg">
              {[...Array(Math.floor(data?.rating) || 0)].map((_, idx) => (
                <MdOutlineStarPurple500 key={idx} />
              ))}
              {[...Array(5 - (Math.floor(data?.rating) || 0))].map((_, idx) => (
                <IoStarOutline key={idx} />
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <span className="text-2xl font-extrabold text-[#fa7516]">
            ${data?.caloriesPerServing}
          </span>
          <button
            onClick={() => alert("Added to cart")}
            className="flex items-center gap-2 bg-[#fa7516] hover:bg-[#f97216] text-white text-sm px-4 py-2 rounded-lg transition-all duration-200 shadow-md"
          >
            <FaShoppingCart />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Productinfo;
