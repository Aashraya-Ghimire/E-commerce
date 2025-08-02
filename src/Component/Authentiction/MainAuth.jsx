import React, { useState } from "react";
import Signup from "./Signup/Signup";
import Login from "./Login/Login";

function MainAuth() {
  const [screen, setScreen] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-400 via-rose-300 to-orange-200 p-4">
      <div className="w-full max-w-sm sm:max-w-md bg-white rounded-3xl shadow-2xl shadow-black/30 p-6 transition-all duration-300 ease-in-out">
        <div className="text-center mb-4">
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
        <div className=" text-center">
          <button
            className="text-sm text-blue-600 hover:underline transition"
            onClick={() => setScreen(!screen)}
          >
            {screen
              ? "Already have an account? Login"
              : "Don't have an account? Signup"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainAuth;
