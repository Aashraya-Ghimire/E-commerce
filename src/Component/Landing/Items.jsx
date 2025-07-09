import { React, useEffect, useState } from "react";
import { IoMdStar } from "react-icons/io";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import Button from "../Button/Button";
import { IoStarOutline } from "react-icons/io5";
import { MdOutlineStarPurple500 } from "react-icons/md";
import productDataApi from "../Api/productData.api";

function Items() {
  const [likedItems, setLikedItems] = useState({});

  const [productData, setProductData] = useState([]);
  useEffect(() => {
    productDataApi(setProductData);
  });
  console.log("product data from product", productData);

  return (
    <div>
      <div className="flex flex-wrap gap-6 justify-center p-6 bg-white rounded-3xl">
        {productData.map((item, i) => (
          <div
            key={i}
            className="w-full sm:w-[48%] lg:w-[22%] bg-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-gray-400 transition duration-300"
          >
            <div className="relative flex justify-end">
              <img
                src={item?.image}
                alt={item?.name}
                className="h-40 w-full object-cover"
              />
              <div className="absolute top-2 right-2 cursor-pointer">
                {likedItems[item.id] ? (
                  <FaHeart
                    className="text-red-500"
                    style={{
                      textShadow:
                        "0 0 10px white, 0 0 1px white, 0 0 1px white",
                    }}
                    onClick={() =>
                      setLikedItems((prev) => ({ ...prev, [item.id]: false }))
                    }
                  />
                ) : (
                  <FiHeart
                    className="text-white"
                    style={{
                      textShadow:
                        "0 0 10px white, 0 0 1px white, 0 0 1px white",
                    }}
                    onClick={() =>
                      setLikedItems((prev) => ({ ...prev, [item.id]: true }))
                    }
                  />
                )}
              
                
              </div>
            </div>

            <div className="p-4 flex flex-col gap-2">
              <div className="text-sm text-gray-500 text-center">
                {item?.mealType}
              </div>
              <div className="flex justify-between items-top min-h-15">
                <div className="text-lg font-bold text-black">{item?.name}</div>
                <div className="flex text-yellow-400 text-xl font-bold">
                  {[...Array(Math.floor(item?.rating))].map((_, index) => (
                    <MdOutlineStarPurple500 key={index} />
                  ))}
                  {[...Array(5 - Math.floor(item?.rating))].map((_, index) => (
                    <IoStarOutline key={index} />
                  ))}
                </div>
              </div>
              <div className="flex justify-around">
                <div className="flex flex-col items-center text-[#f58021] gap-[-2px]">
                  <div className="flex justify-center items-center">
                    <div className="font-bold"> $</div>
                    <del className="">
                      <div className="text-sl text-[#f58021] my-[-5px] font-bold">
                        {item?.caloriesPerServing}
                      </div>
                    </del>
                  </div>
                  <div className="flex items-center text-[#f58021] font-bold text-xl">
                    <div>$</div>
                    <div>{item?.userId}</div>
                  </div>
                </div>

                <button className="cursor-pointer bg-[#f58021] w-40  hover:bg-[#e07115] text-white font-semibold text-sm px-4 py-2 rounded-full shadow-md hover:shadow-lg transition duration-300">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Items;
