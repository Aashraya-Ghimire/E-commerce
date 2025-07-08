import React, { useState } from "react";

function Roll() {
  const [num, setNum] = useState(1);
  const [isRolling, setIsRolling] = useState(false);

  const face = () => {
    if (isRolling) return;

    setIsRolling(true);

    setTimeout(() => {
      const random = Math.floor(Math.random() * 6) + 1;
      setNum(random);
      setIsRolling(false);
    }, 600);
  };

  const diceClass = `w-20 h-20 bg-white rounded-xl ${
    isRolling ? "animate-roll" : ""
  }`;

  return (
    <div className="bg-black min-h-screen flex flex-col justify-center items-center gap-8">
     
      {num === 1 && (
        <div
          className={`${diceClass} flex flex-wrap justify-center items-center`}
        >
          <div className="w-3 h-3 rounded-full bg-black"></div>
        </div>
      )}
      {num === 2 && (
        <div className={diceClass}>
          <div className="flex justify-start items-center m-5">
            <div className="w-3 h-3 rounded-full bg-black"></div>
          </div>
          <div className="flex justify-end items-center m-5">
            <div className="w-3 h-3 rounded-full bg-black"></div>
          </div>
        </div>
      )}
      {num === 3 && (
        <div className={diceClass}>
          <div className="flex justify-start items-center m-2">
            <div className="w-3 h-3 rounded-full bg-black"></div>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-3 h-3 rounded-full bg-black m-1"></div>
          </div>
          <div className="flex justify-end items-center m-2">
            <div className="w-3 h-3 rounded-full bg-black"></div>
          </div>
        </div>
      )}
      {num === 4 && (
        <div className={diceClass}>
          <div className="flex justify-around items-center m-2 mt-4">
            <div className="w-3 h-3 rounded-full bg-black"></div>
            <div className="w-3 h-3 rounded-full bg-black"></div>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-3 h-3 rounded-full bg-white"></div>
          </div>
          <div className="flex justify-around items-center m-2">
            <div className="w-3 h-3 rounded-full bg-black"></div>
            <div className="w-3 h-3 rounded-full bg-black"></div>
          </div>
        </div>
      )}
      {num === 5 && (
        <div className={diceClass}>
          <div className="flex justify-around items-center m-2 mt-4">
            <div className="w-3 h-3 rounded-full bg-black"></div>
            <div className="w-3 h-3 rounded-full bg-black"></div>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-3 h-3 rounded-full bg-black"></div>
          </div>
          <div className="flex justify-around items-center m-2">
            <div className="w-3 h-3 rounded-full bg-black"></div>
            <div className="w-3 h-3 rounded-full bg-black"></div>
          </div>
        </div>
      )}
      {num === 6 && (
        <div className={diceClass}>
          <div className="flex justify-around items-center m-2 mt-4">
            <div className="w-3 h-3 rounded-full bg-black"></div>
            <div className="w-3 h-3 rounded-full bg-black"></div>
            <div className="w-3 h-3 rounded-full bg-black"></div>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-3 h-3 rounded-full bg-white"></div>
          </div>
          <div className="flex justify-around items-center m-2">
            <div className="w-3 h-3 rounded-full bg-black"></div>
            <div className="w-3 h-3 rounded-full bg-black"></div>
            <div className="w-3 h-3 rounded-full bg-black"></div>
          </div>
        </div>
      )}

      <button
        className="text-white bg-red-700 rounded-2xl px-4 py-2 cursor-pointer shadow-md hover:shadow-lg transition duration-300"
        onClick={face}
        disabled={isRolling}
      >
        {isRolling ? "Rolling..." : "Roll Dice 🎲"}
      </button>

      <style>
        {`
          @keyframes roll {
            0% { transform: rotate(0deg) scale(1); }
            25% { transform: rotate(90deg) scale(1.1); }
            50% { transform: rotate(180deg) scale(0.95); }
            75% { transform: rotate(270deg) scale(1.1); }
            100% { transform: rotate(360deg) scale(1); }
          }
          .animate-roll {
            animation: roll 0.6s ease-in-out;
          }
        `}
      </style>
    </div>
  );
}

export default Roll;
