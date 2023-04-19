import React from "react";

interface Props {
  category: string;
  image: string;
}

const CategoryCard = ({ category, image }: Props) => {
  return (
    <div className="flex justify-between items-center bg-gray-100 rounded-xl px-5 cursor-pointer duration-500 ease-in-out hover:shadow-md">
      <p className="text-sm font-bold">{category}</p>
      <img className="block w-20" src={image} alt={category} />
    </div>
  );
};

export default CategoryCard;
