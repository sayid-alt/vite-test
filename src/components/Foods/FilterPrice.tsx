import React, { useState } from "react";
import { data } from "../data/data.js";

interface Props {
  onSelectedItem: (price: string) => void;
}

const FilterPrice = ({ onSelectedItem }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const foodPrices: any[] = [10, 20, 30];

  return (
    <div>
      <p className="font-bold py-2">Filter Price</p>
      {foodPrices.map((price, index) => (
        <button
          onClick={() => {
            setSelectedIndex(index);
            onSelectedItem(price);
          }}
          className={
            selectedIndex === index
              ? "mr-2 mt-2 border-orange-500 bg-orange-500 text-white duration-500 ease-in-out hover:bg-orange-500 hover:text-white"
              : "mr-2 mt-2 border-orange-500 text-orange-500 duration-500 ease-in-out hover:bg-orange-500 hover:text-white"
          }
          key={price}
        >
          {typeof price === "string"
            ? price.charAt(0).toUpperCase() + price.slice(1)
            : index === foodPrices.length - 1
            ? `> ${price}`
            : `${price} - ${price + 10}`}
        </button>
      ))}
    </div>
  );
};

export default FilterPrice;
