import React, { useRef } from "react";

function TextInput({ label, placeholder, ref, err }) {
  const inputref = useRef();
  return (
    <div>
      <div className="text-sm font-semibold text-gray-700 my-1">{label}:</div>
      <input
        className={`border  w-full ${
          err
            ? "border-gray-300"
            : "rounded-sm bg-slate-50 p-1 px-2 border-gray-300 focus:outline-none"
        }`}
        placeholder={placeholder}
        ref={ref}
      />

      <div className="h-5 text-red-500 text-sm px-2 ">
        {err && "Please provide a valid input"}
      </div>
    </div>
  );
}

export default TextInput;
