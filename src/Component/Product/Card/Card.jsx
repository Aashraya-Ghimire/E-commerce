import React, { useState } from "react";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import Button from "../../Button/Button";
import { IoStarOutline } from "react-icons/io5";
import { MdOutlineStarPurple500 } from "react-icons/md";
import addToCart from "../../Local/addToCart";
import Productinfo from "../Modal/Productinfo";

const Card = ({ item }) => {
  const [showModal, setShowModal] = useState(false);
  const [cart, setCart] = useState(false);
  const [likedItems, setLikedItems] = useState({});

  const handleClick = (item) => {
    setCart((prev) => !prev);
    if (!cart) addToCart(item);
  };

  return (
    <div>
      <div
        onClick={() => setShowModal(true)}
        className="w-72 h-[300px] rounded-3xl shadow-xl bg-white bg-opacity-80 backdrop-blur-md border border-gray-100 hover:shadow-2xl transition-transform duration-300 transform hover:scale-[1.025] cursor-pointer flex flex-col overflow-hidden"
      >
        {/* Image */}
        <div className="relative h-36 overflow-hidden">
          <img
            src={item?.image}
            alt={item?.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-3 right-3 z-10">
            {likedItems[item.id] ? (
              <FaHeart
                className="text-red-500 bg-white rounded-full p-1 shadow-md"
                size={24}
                onClick={(e) => {
                  e.stopPropagation();
                  setLikedItems((prev) => ({
                    ...prev,
                    [item.id]: false,
                  }));
                }}
              />
            ) : (
              <FiHeart
                className="text-gray-800 bg-white rounded-full p-1 shadow-md"
                size={24}
                onClick={(e) => {
                  e.stopPropagation();
                  setLikedItems((prev) => ({
                    ...prev,
                    [item.id]: true,
                  }));
                }}
              />
            )}
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col justify-between flex-grow p-4">
          <div className="text-[11px] text-center text-gray-500 tracking-wide uppercase">
            {item?.mealType}
          </div>

          <div className="flex justify-between items-start mt-1 gap-2">
            <h3 className="text-[15px] font-medium text-gray-800 w-2/3 line-clamp-2 leading-tight">
              {item?.name}
            </h3>
            <div className="flex items-center gap-[1px] text-yellow-400 text-sm">
              {[...Array(Math.floor(item?.rating))].map((_, i) => (
                <MdOutlineStarPurple500 key={i} />
              ))}
              {[...Array(5 - Math.floor(item?.rating))].map((_, i) => (
                <IoStarOutline key={i} />
              ))}
            </div>
          </div>

          {/* Price + Button */}
          <div className="flex justify-between items-center mt-auto pt-3">
            <div className="text-[#f58021] font-bold text-[15px]">
              ${item?.caloriesPerServing}
            </div>
            <Button
              onClick={(e) => {
                e.stopPropagation();
                handleClick(item);
              }}
              title={cart ? "Added to cart" : "Add to cart"}
              className={`w-32 text-white text-xs font-semibold px-4 py-2 rounded-full shadow-md hover:shadow-lg transition duration-300 ${
                cart
                  ? "bg-blue-500 hover:bg-blue-600"
                  : "bg-gradient-to-r from-[#f58021] to-[#f56200] hover:brightness-110"
              }`}
            />
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center px-4 py-8">
          <Productinfo data={item} setShowmodel={setShowModal} />
        </div>
      )}
    </div>
  );
};

export default Card;
