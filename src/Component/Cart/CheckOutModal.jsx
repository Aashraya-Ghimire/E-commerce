import React, { useState } from "react";
import totalAmount from "../CustomFunction/totalAmount";
import Ordersuccess from "./Ordersuccess";
import OrangeButton from "../Button/OrangeButton";

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
        } fixed inset-0 z-50 items-center justify-center bg-opacity-40 backdrop-blur-sm`}
      >
        <div className="w-[90%] max-w-lg max-h-[80vh] p-6 rounded-2xl bg-white shadow-2xl flex flex-col relative">
          <div className="text-center font-bold text-2xl text-orange-500 mb-4">
            Checkout
          </div>

          <div className="flex justify-between px-3 text-gray-500 text-sm font-medium border-b pb-2">
            <span className="w-1/2">Item</span>
            <span className="w-1/4 text-center">Qty</span>
            <span className="w-1/4 text-right">Price</span>
          </div>

          <div className="overflow-auto flex-grow py-2 space-y-3">
            {dta.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center bg-gray-50 px-3 py-2 rounded-md"
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

          <div>
            <div className="flex justify-between items-center border-t pt-4 mt-4 text-lg font-semibold">
              <div>Total:</div>
              <div>${totalAmount(dta)}</div>
            </div>
            <div className="flex justify-between mt-6">
              <button
                className="px-4 py-2 rounded-md bg-gray-200 text-gray-800 font-medium hover:bg-gray-300 transition cursor-pointer"
                onClick={() => setVisible(false)}
              >
                Cancel
              </button>
              <OrangeButton title="Next" onClick={handleNext} />
            </div>
          </div>
        </div>
      </div>
      <Ordersuccess success={success} setSuccess={setSuccess} />
    </>
  );
}

export default CheckOutModal;
