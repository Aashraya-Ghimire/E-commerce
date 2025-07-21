import React, { useRef, useState } from "react";
import TextInput from "../InputField/TextInput";
import OrangeButton from "../Button/OrangeButton";
import { FaMoneyBillWave, FaCreditCard } from "react-icons/fa";

function UserDetails() {
  const [err, setErr] = useState(0);
  const name = useRef("");
  const phone = useRef("");
  const address = useRef("");
  const emailaddress = useRef("");
  const [paymentMethod, setPaymentMethod] = useState("cash");

  const handleProcess = () => {
    if (name.current?.value.trim().length < 3) {
      setErr(1);
    } else if (
      !phone.current?.value ||
      !/^\d+$/.test(phone.current.value) ||
      phone.current.value.length < 8 ||
      phone.current.value.length > 10 ||
      phone.current.value.length === 9
    ) {
      setErr(2);
    } else if (address.current?.value.trim() === "") {
      setErr(3);
    } else if (
      emailaddress.current?.value.trim() === "" ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailaddress.current.value.trim())
    ) {
      setErr(4);
    } else {
      setErr(0);
      console.log("Submitted Successfully");
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-md px-6 py-2">
      <div className="text-2xl font-semibold text-gray-800 text-center mb-4">
        User Details
      </div>

      {/* Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
        <TextInput
          label="Name"
          placeholder="Enter your name"
          ref={name}
          err={err === 1}
        />
        <TextInput
          label="Phone"
          placeholder="Enter your phone number"
          ref={phone}
          err={err === 2}
        />
        <TextInput
          label="Address"
          placeholder="Enter your address"
          ref={address}
          err={err === 3}
        />
        <TextInput
          label="Email Address"
          placeholder="Enter your email address"
          ref={emailaddress}
          err={err === 4}
        />
      </div>

      {/* Payment Method */}
      <div className="pt-4 border-t border-gray-200 space-y-4">
        <h3 className="text-xl font-semibold text-gray-700">Payment Method</h3>

        <div className="space-y-3">
          <label
            htmlFor="cash"
            className={`flex items-center gap-4 p-4 rounded-xl transition cursor-pointer border ${
              paymentMethod === "cash"
                ? "bg-orange-100 border-orange-400"
                : "bg-white hover:shadow-md border-gray-300"
            }`}
          >
            <input
              type="radio"
              name="payment"
              id="cash"
              value="cash"
              checked={paymentMethod === "cash"}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="accent-blue-500"
            />
            <div className="text-2xl text-green-600">
              <FaMoneyBillWave />
            </div>
            <span className="text-gray-800 font-medium">Cash on Delivery</span>
          </label>

          <label
            htmlFor="online"
            className="flex items-center gap-4 p-4 rounded-xl bg-gray-100 opacity-60 cursor-not-allowed border border-gray-300"
          >
            <input
              type="radio"
              name="payment"
              id="online"
              value="online"
              disabled
              className="accent-orange-500 cursor-not-allowed"
            />
            <div className="text-2xl text-orange-600">
              <FaCreditCard />
            </div>
            <div className="flex flex-col">
              <span className="text-gray-800 font-medium">Online Payment</span>
              <span className="text-xs text-red-500 font-semibold">
                Coming Soon
              </span>
            </div>
          </label>
        </div>
      </div>

      {/* Submit Button */}
      <div className="pt-2 flex justify-center">
        <OrangeButton title="Process" onClick={handleProcess} />
      </div>
    </div>
  );
}

export default UserDetails;
