import React from "react";

function Hero() {
  return (
    <div>
      <div className="mt-22 sm:px-6 md:px-6 lg:px-24 xl:px-32">
        <div className="bg-[url('/Hero.jpg')] h-[90vh] bg-cover bg-center rounded-3xl flex flex-col justify-center gap-6 px-4 sm:px-6 md:px-16 lg:px-20 opacity-90 bg-black">
          <div
            className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"
            style={{
              textShadow: "0 0 1px gray, 0 0 1px gray, 0 0 1px gray",
            }}
          >
            <h1>Order Your</h1>
            <h1>favorite food here</h1>
          </div>

          <div
            className="text-white text-medium sm:text-lg md:text-xl font-medium max-w-[60%]"
            style={{
              textShadow: "0 0 10px gray, 0 0 1px gray, 0 0 1px gray",
            }}
          >
            "Discover fresh, delicious meals and ingredients delivered right to
            your door. From farm-fresh produce to ready-to-eat favorites, we
            make shopping for food easy, fast, and affordable. Enjoy the taste
            of quality with every bite!"
          </div>

          <div>
              <button className="cursor-pointer bg-white text-black font-semibold px-6 py-3 rounded-full transition duration-300 ease-in-out hover:shadow-xl hover:scale-105">
                View Menu
              </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
