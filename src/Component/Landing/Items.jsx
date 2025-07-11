import React, { useEffect, useState } from "react";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import Button from "../Button/Button";
import { IoStarOutline } from "react-icons/io5";
import { MdOutlineStarPurple500 } from "react-icons/md";
import productDataApi from "../Api/productData.api";
import Productinfo from "../Product/Modal/Productinfo";

function Items() {
  const [showModal, setShowModal] = useState(false);
  const [cart, setCart] = useState({});

  const [likedItems, setLikedItems] = useState({});
  const [productData, setProductData] = useState([]);
  const [selectedData, setSelectedData] = useState(null);

  useEffect(() => {
    productDataApi(setProductData);
  },[]);

  const openModal = (id) => {
    const selected = productData.find((item) => item.id === id);
    setSelectedData(selected);
    setShowModal(true);
  };
  const handleClick = (id) => {
    setCart((prev) => ({
      ...prev,
      [id]:true,
      
    }
 
  ));
  };

  return (
    <div className="relative flex justify-center items-center">
      <div className="flex flex-wrap gap-6 justify-center p-6 bg-white rounded-3xl w-[85vw]">
        {productData.map((item, i) => (
          <div
            key={i}
            onClick={() => openModal(item?.id)}
            className="w-40 sm:w-[49%] lg:w-[25%] bg-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-gray-400 transition duration-300 cursor-pointer"
          >
            <div className="relative flex justify-end">
              <img
                src={item?.image}
                alt={item?.name}
                className="h-40 w-full object-cover"
              />
              <div className="absolute top-2 right-2 cursor-pointer z-10">
                {likedItems[item.id] ? (
                  <FaHeart
                    className="text-red-500"
                    style={{
                      textShadow:
                        "0 0 10px white, 0 0 1px white, 0 0 1px white",
                    }}
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
                    className="text-white"
                    style={{
                      textShadow:
                        "0 0 10px white, 0 0 1px white, 0 0 1px white",
                    }}
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
                <div className="flex flex-col items-center text-[#f58021]">
                  <div className="flex justify-center items-center font-bold">
                    <div className="mr-1">$</div>
                    <del className="text-sl text-[#f58021]">
                      {item?.caloriesPerServing}
                    </del>
                  </div>
                  <div className="flex items-center text-[#f58021] font-bold text-xl">
                    <div>$</div>
                    <div>{item?.userId}</div>
                  </div>
                </div>
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClick(item.id);
                       console.log("order is comming")
                       localStorage.setItem("Cart", [JSON.stringify(item)]);
                  }}
                  title={cart[item.id] ? "Added to cart" : "Add to cart"}
                  className={`cursor-pointer w-40 text-white font-semibold text-sm px-4 py-2 rounded-full shadow-md hover:shadow-lg transition duration-300 ${
                    cart[item.id]
                      ? "bg-blue-500 hover:bg-blue-600"
                      : "bg-[#f58021] hover:bg-[#e07115]"
                  }`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {showModal && selectedData && (
        <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center px-4 py-8">
          <Productinfo data={selectedData} setShowmodel={setShowModal} />
        </div>
      )}
    </div>
  );
}

export default Items;
