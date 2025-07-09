import { React, useState } from "react";
import { IoMdStar } from "react-icons/io";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import Button from "../Button/Button";
import { IoStarOutline } from "react-icons/io5";
import { MdOutlineStarPurple500 } from "react-icons/md";

function Items() {
  const [color, setColor] = useState(false);
  const data = [
    {
      id: 1,
      name: "Classic Margherita Pizza",
      ingredients: [
        "Pizza dough",
        "Tomato sauce",
        "Fresh mozzarella cheese",
        "Fresh basil leaves",
        "Olive oil",
        "Salt and pepper to taste",
      ],
      instructions: [
        "Preheat the oven to 475°F (245°C).",
        "Roll out the pizza dough and spread tomato sauce evenly.",
        "Top with slices of fresh mozzarella and fresh basil leaves.",
        "Drizzle with olive oil and season with salt and pepper.",
        "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
        "Slice and serve hot.",
      ],
      prepTimeMinutes: 20,
      cookTimeMinutes: 15,
      servings: 4,
      latest: "$199",
      cuisine: "Italian",
      price: 300,
      tags: ["Pizza", "Italian"],
      userId: 166,
      image: "https://cdn.dummyjson.com/recipe-images/1.webp",
      rating: 4,
      reviewCount: 98,
      mealType: ["Dinner"],
    },
    {
      id: 2,
      name: "Vegetarian Stir-Fry",
      ingredients: [
        "Tofu, cubed",
        "Broccoli florets",
        "Carrots, sliced",
        "Bell peppers, sliced",
        "Soy sauce",
        "Ginger, minced",
        "Garlic, minced",
        "Sesame oil",
        "Cooked rice for serving",
      ],
      instructions: [
        "In a wok, heat sesame oil over medium-high heat.",
        "Add minced ginger and garlic, sauté until fragrant.",
        "Add cubed tofu and stir-fry until golden brown.",
        "Add broccoli, carrots, and bell peppers. Cook until vegetables are tender-crisp.",
        "Pour soy sauce over the stir-fry and toss to combine.",
        "Serve over cooked rice.",
      ],
      prepTimeMinutes: 15,
      cookTimeMinutes: 20,
      latest: "$199",
      price: 300,
      servings: 3,
      difficulty: "Medium",
      cuisine: "Asian",
      caloriesPerServing: 250,
      tags: ["Vegetarian", "Stir-fry", "Asian"],
      userId: 143,
      image: "https://cdn.dummyjson.com/recipe-images/2.webp",
      rating: 4,
      reviewCount: 26,
      mealType: ["Lunch"],
    },
  ];

  return (
    <div>
      <div className="flex flex-wrap gap-6 justify-center p-6 bg-white rounded-3xl">
        {data.map((item, i) => (
          <div
            key={i}
            className="w-full sm:w-[48%] lg:w-[22%] bg-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-gray-400 transition duration-300"
          >
            <div className="relative flex justify-end">
              <img
                src={item?.image}
                alt={item?.name}
                className="h-40 w-full object-cover"
              />
              <div className="absolute top-2 right-2 shadow-white cursor-pointer">
                {color == true ? (
                  <FiHeart
                    className={" text-white"}
                    style={{
                      textShadow:
                        "0 0 10px white, 0 0 1px white, 0 0 1px white",
                    }}
                    onClick={() => setColor(!color)}
                  />
                ) : (
                  <FaHeart
                    className={" text-red-500"}
                    style={{
                      textShadow:
                        "0 0 10px white, 0 0 1px white, 0 0 1px white",
                    }}
                    onClick={() => setColor(!color)}
                  />
                )}
              </div>
            </div>

            <div className="p-4 flex flex-col gap-2">
              <div className="text-sm text-gray-500 text-center">
                {item?.mealType}
              </div>
              <div className="flex justify-between items-top">
                <div className="text-lg font-bold text-black">{item?.name}</div>
                <div className="flex text-yellow-400 text-xl font-bold">
                  {[...Array(item?.rating)].map((_, index) => (
                    <MdOutlineStarPurple500 key={index} />
                  ))}
                  {[...Array(5 - item?.rating)].map((_, index) => (
                    <IoStarOutline key={index} />
                  ))}
                </div>
              </div>
              <div className="flex justify-around">
                <div className="flex flex-col items-center">
                  <del className="text-[#f58021]">
                    <div className="text-sl text-[#f58021] my-[-5px]">
                      {item?.price}
                    </div>
                  </del>
                  <div className="text-[#f58021] font-bold">{item?.latest}</div>
                </div>

                <button className="bg-[#f58021] w-40  hover:bg-[#e07115] text-white font-semibold text-sm px-4 py-2 rounded-full shadow-md hover:shadow-lg transition duration-300">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Items;
