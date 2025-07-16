import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import CartCard from "./CartCard";
import { NavLink } from "react-router";
import { FiShoppingCart } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { FaShoppingBag } from "react-icons/fa";

import Footer from "../Footer/Footer";

function Cart() {
  let data = localStorage.getItem("cart");
  // const [cartData, setCartData] = useState(JSON.parse(data));

  const [dta, setDta] = useState(JSON.parse(data));
  useEffect(() => {
    setDta(JSON.parse(localStorage.getItem("cart")));
  }, []);
  if (dta != 0)
    return (
      <div>
        <Navbar />

        <div className="mt-30">
          <div className="flex justify-center px-4 py-6">
            <div className="w-full max-w-4xl rounded-2xl bg-white shadow-lg overflow-hidden">
              <div className="bg-orange-500 flex flex-col sm:flex-row justify-between items-center px-6 py-5 text-white rounded-t-2xl">
                <div className="text-center sm:text-left">
                  <div className="text-2xl font-bold">Your Cart</div>
                  <div className="text-sm text-orange-100">
                    Items in the cart
                  </div>
                </div>
                <NavLink
                  to={"/"}
                  className="mt-3 sm:mt-0 bg-white text-orange-500 font-semibold text-sm px-4 py-2 rounded-full shadow hover:bg-gray-100 transition"
                >
                  Continue Shopping
                </NavLink>
              </div>

              {dta.map((item, index) => (
                <CartCard item={item} key={index} setDta={setDta} />
              ))}

              <div className="border-t px-6 py-5 bg-gray-50">
                <div className="flex justify-between items-center text-lg font-semibold text-gray-700 mb-4">
                  <span>Total</span>
                  <span className="text-orange-500 text-xl">
                    $
                    {dta.reduce(
                      (acc, item) => acc + item.caloriesPerServing,
                      0
                    )}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-6">
                  <button
                    onClick={() => {
                      localStorage.removeItem("cart");
                      setDta([]);
                    }}
                    className="flex items-center justify-center w-full sm:w-auto gap-2 px-6 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-full shadow hover:bg-gray-100 transition duration-300"
                  >
                    <MdDeleteOutline className="text-xl" />
                    Clear Cart
                  </button>

                  <button className="flex items-center justify-center w-full sm:w-auto gap-2 px-6 py-3 bg-gradient-to-r from-[#f58021] to-[#f56200] text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:scale-[1.02] transition duration-300">
                    <FaShoppingBag className="text-lg" />
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  else
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
        <Navbar />
        <div className="flex flex-col items-center justify-center h-[80vh] px-4 text-center animate-fadeIn">
          <div className="bg-white p-10 rounded-3xl shadow-xl max-w-md w-full">
            <div className="flex justify-center mb-6">
              <FiShoppingCart size={80} className="text-orange-400" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-3">
              Your Cart is Empty
            </h2>
            <p className="text-gray-500 mb-6">
              Looks like you haven’t added anything yet. Start exploring our
              delicious options!
            </p>
            <NavLink to="/">
              <button className="bg-gradient-to-r from-[#f58021] to-[#f56200] hover:opacity-90 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-md">
                Start Shopping
              </button>
            </NavLink>
          </div>
        </div>
        <Footer />
      </div>
    );
}

export default Cart;
