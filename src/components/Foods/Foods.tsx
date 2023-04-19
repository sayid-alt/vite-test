import React, { useState } from "react";
import { data } from "../data/data.js";
import FilterType from "./FilterType.js";
import FilterPrice from "./FilterPrice.js";

const Foods = () => {
  const [foods, setFoods] = useState(data);

  const handleSetFoods = (category: any) => {
    setFoods(
      category !== "All"
        ? data.filter((item: any) => item.category === category)
        : data
    );
  };

  const handleSetPrices = (price: any) => {
    setFoods(
      data.filter(
        (item: any) => item.price >= price && item.price <= price + 10
      )
    );
  };

  return (
    <div className="container p-5">
      <h1 className="text-orange-500 font-bold text-4xl flex justify-center">
        Top Rated Menu
      </h1>

      <div className="lg:flex justify-between">
        <FilterType onSelectedItem={handleSetFoods} />
        <FilterPrice onSelectedItem={handleSetPrices} />
      </div>

      {/* Display foods */}
      <div className="py-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {foods.map((item: any, index: any) => (
          <div
            key={index.id}
            className="my-3 shadow-xl rounded-xl duration-500 ease-in-out cursor-pointer hover:scale-105"
          >
            <img
              className="object-cover rounded-t-xl w-full h-[200px]"
              src={item.image}
              key={index.id}
              alt="/"
            />
            <div className="px-2 py-2">
              <div className="flex justify-between items-center" key={index.id}>
                <p className="font-bold text-sm" key={index.id}>
                  {item.name}
                </p>
                <p
                  className="font-bold text-center text-xs text-white bg-orange-500 px-2 py-1 rounded-full"
                  key={index.id}
                >
                  {item.price} SR
                </p>
              </div>
              <p className="text-sm text-slate-500">{item.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Foods;
