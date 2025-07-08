import React from "react";

function Airoll() {
  const num = Math.floor(Math.random() * 6) + 1;
  console.log("Dice rolled:", num);

  const dotClass = "w-3 h-3 rounded-full bg-black";
  const emptyDot = <div className="w-3 h-3" />;

  // Dice dot positions in a 3x3 grid
  const getDotGrid = () => {
    const positions = {
      1: [4],
      2: [0, 8],
      3: [0, 4, 8],
      4: [0, 2, 6, 8],
      5: [0, 2, 4, 6, 8],
      6: [0, 2, 3, 5, 6, 8],
    };

    const dots = Array(9)
      .fill(null)
      .map((_, i) =>
        positions[num].includes(i) ? (
          <div key={i} className={dotClass}></div>
        ) : (
          <div key={i} className="w-3 h-3" />
        )
      );

    return (
      <div className="grid grid-cols-3 gap-2 w-20 h-20 bg-white rounded-xl p-3">
        {dots}
      </div>
    );
  };

  return (
    <div className="bg-black w-full h-screen flex justify-center items-center">
      {getDotGrid()}
    </div>
  );
}

export default Airoll;
