import React from "react";

const Hero = () => {
  return (
    <div className="container p-4">
      <div className="max-h-[500px] relative">
        <div className="absolute text-white w-full h-full bg-black/40 flex flex-col justify-center px-8 leading-snug font-bold z-0">
          <h1 className="text-4xl sm:text-5xl md:texl-6xl lg:text-7xl">
            The <span className="text-orange-500">Best</span>
          </h1>
          <h1 className="text-4xl sm:text-5xl md:texl-6xl lg:text-7xl">
            <span className="text-orange-500">Foods</span> Delivered
          </h1>
        </div>
        <img
          className="w-full max-h-[500px] object-cover"
          src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="/"
        />
      </div>
    </div>
  );
};

export default Hero;
