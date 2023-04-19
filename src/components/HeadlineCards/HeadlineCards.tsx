import React from "react";
import Card from "./Card";

const HeadlineCards = () => {
  return (
    <div className="container grid sm:grid-cols-2 lg:grid-cols-4 gap-5 p-4">
      <Card
        title="Sun's Out, BOGO's Out"
        subtitle="Through 8/28"
        image="https://images.pexels.com/photos/3228646/pexels-photo-3228646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      <Card
        title="New Restaurant"
        subtitle="Added Daily"
        image="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      <Card
        title="We Deliver Desserts Too"
        subtitle="Tasty Treats"
        image="https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      <Card
        title="Fresh Drink, Fresh Shrink"
        subtitle="Sweet and Healty"
        image="https://images.pexels.com/photos/2789328/pexels-photo-2789328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
    </div>
  );
};

export default HeadlineCards;
