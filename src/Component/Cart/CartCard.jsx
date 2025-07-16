import React, { useState } from "react";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { IoStarOutline } from "react-icons/io5";
import { FiTrash2 } from "react-icons/fi";
import removeFromCart from "../Local/removeFromCart";

const CartCard = ({ item, setDta }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => setQuantity((q) => q + 1);
  const handleDecrease = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  return (
    <div className="flex justify-center px-4 py-4">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-md p-4">
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">
          <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden shadow">
            <img
              src={item?.image}
              alt={item?.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 grid sm:grid-cols-4 gap-4 items-center w-full">
            <div className="col-span-2 flex flex-col justify-center">
              <h2 className="text-lg font-bold text-gray-800">{item?.name}</h2>
              <p className="text-sm text-gray-500">{item?.mealType}</p>
              <div className="flex mt-1 text-yellow-400">
                {[...Array(Math.floor(item?.rating))].map((_, i) => (
                  <MdOutlineStarPurple500 key={i} />
                ))}
                {[...Array(5 - Math.floor(item?.rating))].map((_, i) => (
                  <IoStarOutline key={i} />
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center gap-3">
              <button
                onClick={handleDecrease}
                className="cursor-pointer w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 text-lg font-bold"
              >
                -
              </button>
              <span className="text-lg font-semibold">{quantity}</span>
              <button
                onClick={handleIncrease}
                className="cursor-pointer w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 text-lg font-bold"
              >
                +
              </button>
            </div>

            <div className="flex flex-col items-center justify-center gap-2">
              <div className="text-xl font-bold text-orange-500">
                ${quantity * item?.caloriesPerServing}
              </div>
              <button
                onClick={() => removeFromCart(item, setDta)}
                className="cursor-pointer text-red-500 hover:text-red-600 transition"
              >
                <FiTrash2 size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
