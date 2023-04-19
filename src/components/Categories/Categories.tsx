import React from "react";
import { categories } from "../data/data.js";
import CategoryCard from "./CategoryCard.js";

const Categories = () => {
  console.log(categories);
  return (
    <div className="container px-5">
      <h1 className="text-orange-500 font-bold text-4xl flex justify-center">
        Category
      </h1>
      <div className="grid gap-2 grid-cols-2 justify-center sm:grid-cols-3 lg:grid-cols-4 py-5">
        {categories.map((category: any, id: any) => (
          <CategoryCard
            key={id}
            category={category.name}
            image={category.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
