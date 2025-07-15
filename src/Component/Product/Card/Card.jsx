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
        className="w-72 bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden cursor-pointer"
      >
        <div className="relative">
          <img
            src={item?.image}
            alt={item?.name}
            className="w-full h-44 object-cover rounded-t-2xl"
          />
          <div className="absolute top-2 right-2 z-10">
            {likedItems[item.id] ? (
              <FaHeart
                className="text-red-500 drop-shadow-md"
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
                className="text-white drop-shadow"
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

        <div className="p-4 flex flex-col gap-3">
          <div className="text-sm text-gray-400 text-center">
            {item?.mealType}
          </div>

          <div className="flex justify-between items-start">
            <h3 className="text-lg font-bold text-gray-800">{item?.name}</h3>
            <div className="flex text-yellow-400 text-xl">
              {[...Array(Math.floor(item?.rating))].map((_, i) => (
                <MdOutlineStarPurple500 key={i} />
              ))}
              {[...Array(5 - Math.floor(item?.rating))].map((_, i) => (
                <IoStarOutline key={i} />
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="text-center text-[#f58021] font-bold">
              <div className="flex items-center justify-center gap-1 text-sm">
                <span className="line-through">
                  ${item?.caloriesPerServing}
                </span>
              </div>
              <div className="text-xl">${item?.price}</div>
            </div>

            <Button
              onClick={(e) => {
                e.stopPropagation();
                handleClick(item);
              }}
              title={cart ? "Added to cart" : "Add to cart"}
              className={`w-36 text-white font-semibold text-sm px-4 py-2 rounded-full shadow-md hover:shadow-lg transition duration-300 ${
                cart
                  ? "bg-blue-500 hover:bg-blue-600"
                  : "bg-[#f58021] hover:bg-[#e07115]"
              }`}
            />
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center px-4 py-8">
          <Productinfo data={item} setShowmodel={setShowModal} />
        </div>
      )}
    </div>
  );
};

export default Card;
