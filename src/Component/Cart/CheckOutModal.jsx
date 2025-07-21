import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import totalAmount from "../CustomFunction/totalAmount";
import Ordersuccess from "./Ordersuccess";
import OrangeButton from "../Button/OrangeButton";
import UserDetails from "./UserDetails";
import { IoCloseSharp } from "react-icons/io5";

function CheckOutModal({ visible, setVisible, dta }) {
  const [success, setSuccess] = useState(false);

  const handleNext = () => {
    setVisible(false);
    setSuccess(true);
  };

  return (
    <>
      <div
        className={`${
          visible ? "flex" : "hidden"
        } fixed inset-0 z-50 items-center justify-center bg-black/30 backdrop-blur-sm px-2 md:px-4`}
      >
        <div className="w-full max-w-6xl h-[90vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          {/* Modal Header */}
          <div className="px-4 sm:px-6 py-4 sm:py-5 border-b bg-orange-500 flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white/20 text-white rounded-full text-xl sm:text-2xl">
                <FiShoppingCart />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white leading-none">
                  Checkout
                </h2>
                <p className="text-xs sm:text-sm text-white/80 mt-1">
                  Complete your order details below.
                </p>
              </div>
            </div>
            <button
              className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800 transition-all duration-200 shadow-sm"
              onClick={() => setVisible(false)}
              aria-label="Close"
            >
              <IoCloseSharp className="w-5 h-5" />
            </button>
          </div>

          {/* Content Section */}
          <div className="flex flex-col lg:flex-row flex-grow overflow-hidden">
            {/* Left: User Details */}
            <div className="w-full lg:w-7/12 h-full overflow-y-auto p-4 sm:p-6 border-b lg:border-b-0 lg:border-r border-gray-200">
              <UserDetails />
            </div>

            {/* Right: Item Summary */}
            <div className="w-full lg:w-5/12 h-full overflow-y-auto px-4 sm:px-4 py-2 flex flex-col">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 text-center mb-1">
                Item Summary
              </h3>

              <div className="flex justify-between px-2 text-sm text-gray-500 font-semibold border-b">
                <span className="w-1/2">Item</span>
                <span className="w-1/4 text-center">Qty</span>
                <span className="w-1/4 text-right">Price</span>
              </div>

              <div className="flex-grow overflow-y-auto py-3 space-y-2">
                {dta.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-lg"
                  >
                    <div className="w-1/2 text-gray-800 font-medium truncate">
                      {item.name}
                    </div>
                    <div className="w-1/4 text-center text-gray-600">
                      x{item.quantity}
                    </div>
                    <div className="w-1/4 text-right font-semibold text-gray-700">
                      ${item.caloriesPerServing}
                    </div>
                  </div>
                ))}
              </div>

              <div className=" border-t pt-2">
                <div className="flex justify-between text-base sm:text-lg font-semibold text-gray-800 mb-2">
                  <span>Total:</span>
                  <span>${totalAmount(dta)}</span>
                </div>

                <div className="flex justify-end">
                  <div className="w-full sm:w-1/2">
                    <OrangeButton title="Next" onClick={handleNext} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Ordersuccess success={success} setSuccess={setSuccess} />
    </>
  );
}

export default CheckOutModal;
