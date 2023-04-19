import React, { Fragment, useState } from "react";
import { data } from "../data/data.js";

interface Props {
  onSelectedItem: (category: string) => void;
}

const FilterType = ({ onSelectedItem }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const foodCategories: string[] = ["All"];

  data.map((e: any) => {
    !foodCategories.includes(e.category) ? foodCategories.push(e.category) : "";
  });

  return (
    <div>
      <p className="font-bold py-2">Filter Type</p>
      {foodCategories.map((category, index) => (
        <button
          onClick={() => {
            setSelectedIndex(index);
            onSelectedItem(category);
          }}
          // className="mr-2 mt-2 border-orange-500 text-orange-500 duration-500 ease-in-out hover:bg-orange-500 hover:text-white"
          className={
            selectedIndex === index
              ? "mr-2 mt-2 border-orange-500 bg-orange-500 text-white duration-500 ease-in-out hover:bg-orange-500 hover:text-white"
              : "mr-2 mt-2 border-orange-500 text-orange-500 duration-500 ease-in-out hover:bg-orange-500 hover:text-white"
          }
          key={index}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default FilterType;
