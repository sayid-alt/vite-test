import React, { Fragment } from "react";

interface Props {
  title: string;
  subtitle: string;
  image: string;
}

const Card = ({ title, subtitle, image }: Props) => {
  return (
    <Fragment>
      {/* Cards */}
      <div className="group relative max-h-[150px]">
        {/* Overlay */}
        <div className="absolute p-2 bg-black/30 rounded-xl text-white h-full flex flex-col w-full justify-center duration-500 ease-in-out group-hover:shadow-xl group-hover:bg-black/50 ">
          <h1 className="font-bold text-2xl sm:text-xl">{title}</h1>
          <p>{subtitle}</p>
          <button className="opacity-0 group/button mt-7 w-fit text-white border-none font-bold text-sm py-2 hover:shadow-xl hover:text-black group-hover:opacity-100 hover:bg-white">
            Order Now
            <span className=" relative duration-500 ease-in-out ps-2 group-hover/button:left-1 ">
              +
            </span>
          </button>
        </div>
        <img
          className="max-h-[200px] w-full h-full object-cover rounded-xl"
          src={image}
          alt="/"
        />
      </div>
    </Fragment>
  );
};

export default Card;
