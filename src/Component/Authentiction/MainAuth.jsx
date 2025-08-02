import React, { useState } from "react";
import Signup from "./Signup/Signup";
import Login from "./Login/Login";

function MainAuth() {
  const [screen, setScreen] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-no-repeat bg-[url(../.././public/ecom.png)] p-4">
      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-xs z-0" />

      <div className="relative z-10 w-full max-w-sm sm:max-w-md bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl shadow-black/30 p-4 transition-all duration-300 ease-in-out">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800">
            {screen ? "Create Account" : "Welcome Back"}
          </h2>
          <p className="text-sm text-gray-500">
            {screen ? "Signup to get started" : "Login to continue"}
          </p>
        </div>
        {screen ? (
          <Signup setScreen={setScreen} />
        ) : (
          <Login setScreen={setScreen} />
        )}
      </div>
    </div>
  );
}
export default MainAuth;
