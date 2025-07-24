import React from "react";

function Hero() {
  return (
    <div className="relative bg-none w-[98.5vw] h-[90vh] mt-24 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 rounded-3xl overflow-hidden">
      <div className="absolute items-center inset-0 rounded-3xl overflow-hidden z-0 mx-4 sm:mx-6 md:mx-10 lg:mx-20">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-[95vw] h-[98.5vh] object-cover mask-cover overflow-hidden"
        >
          <source src="/Vid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center h-full gap-6 px-2 sm:px-6 md:px-16 lg:px-20">
        <h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold drop-shadow-md">
          Order Your
        </h1>

        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-gradient-to-r from-yellow-300 to-orange-500 bg-clip-text drop-shadow-md">
          favorite food here
        </h2>

        <p className="text-white sm:text-lg md:text-xl font-medium max-w-[60%] drop-shadow-lg">
          Discover fresh, delicious meals and ingredients delivered right to
          your door. From farm-fresh produce to ready-to-eat favorites, we make
          shopping for food easy, fast, and affordable. Enjoy the taste of
          quality with every bite!
        </p>

        <button className="w-fit bg-orange-500 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition duration-300">
          View Menu
        </button>
      </div>
    </div>
  );
}

export default Hero;
