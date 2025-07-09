import React, { useState } from "react";
import { GrSearch } from "react-icons/gr";
import { FaCartShopping } from "react-icons/fa6";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import Button from "../Button/Button";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full shadow-md px-4 sm:px-8 md:px-12 bg-white z-50 fixed top-0">
      <div className="flex justify-between items-center h-[70px]">
        <div className="w-16">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="hidden md:flex gap-8 text-gray-700 font-medium text-sm">
          {["Home", "Menu", "About", "Contact"].map((item, i) => (
            <a
              key={i}
              href="#"
              className="hover:text-[#f58021] transition duration-200 cursor-pointer"
            >
              {item}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <div className="w-full flex md:hidden items-center bg-[#e6e5e5] rounded-xl px-3 py-1.5 text-black">
            <input
              type="text"
              placeholder="Search"
              className="outline-none bg-transparent text-sm placeholder-gray-600 sm:w-32"
            />
            <button className="pl-2 text-gray-700 hover:text-black cursor-pointer">
              <GrSearch size={18} />
            </button>
          </div>
          <div className="hidden md:flex items-center bg-[#e6e5e5] rounded-xl px-3 py-1.5 text-black">
            <input
              type="text"
              placeholder="Search"
              className="outline-none w-30 bg-transparent text-sm placeholder-gray-600 sm:w-32"
            />
            <button className="pl-2 text-gray-700 hover:text-black cursor-pointer">
              <GrSearch size={18} />
            </button>
          </div>
          <button className="text-gray-700 hover:text-black transition cursor-pointer">
           <div className="relative"> <FaCartShopping size={20} /><span className="absolute bg-blue-700 rounded-[50%] text-white h-4 w-4 flex justify-center items-center bottom-3 left-3 text-[13px]">0</span></div> 
          </button>
          <div className="w-24 hidden sm:block">
            <Button
              className="cursor-pointer text-center w-20 px-4 py-1.5 rounded-xl bg-[#f58021] hover:bg-[#e07115] text-white text-sm transition"
              title={"Sign In"}
            />
          </div>
          <button
            className="block md:hidden text-2xl text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
      <div
        className={`fixed top-0 right-0 h-screen w-[80%] sm:w-[60%] bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out
        ${menuOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setMenuOpen(false)}
            className="text-2xl text-gray-700"
          >
            <HiX />
          </button>
        </div>
        <div className="flex flex-col gap-4 px-6 text-gray-700 font-medium text-sm">
          {["Home", "Menu", "About", "Contact"].map((item, i) => (
            <a
              key={i}
              href="#"
              className="py-1 border-b border-gray-100 hover:text-[#f58021] transition"
            >
              {item}
            </a>
          ))}
          <div className="w-full mt-4">
            <Button
              className="cursor-pointer w-fit px-4 py-2 rounded-xl bg-[#f58021] hover:bg-[#e07115] text-white text-sm transition"
              title={"Sign In"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
