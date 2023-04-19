import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  IoWalletSharp,
  MdOutlineFavorite,
  TbTruckDelivery,
  BsFillCartFill,
  IoMdHelpCircle,
  AiFillTag,
  BsFillSave2Fill,
  IoPeopleSharp,
} from "react-icons/all";

import ListItem from "./ListItem";
import List from "./List";
import { useState } from "react";
import ToggleBtn from "./ToggleBtn";

const Navbar = () => {
  const categories = [
    { heading: "Orders", icon: <TbTruckDelivery /> },
    { heading: "Favorite", icon: <MdOutlineFavorite /> },
    { heading: "Wallet", icon: <IoWalletSharp /> },
    { heading: "Help", icon: <IoMdHelpCircle /> },
    { heading: "Promotions", icon: <AiFillTag /> },
    { heading: "Best Ones", icon: <BsFillSave2Fill /> },
    { heading: "Invite Friends", icon: <IoPeopleSharp /> },
  ];

  const [nav, setNav] = useState(false);

  return (
    <div className="container flex justify-between p-4">
      {/* Left side Navbar */}
      <div className="flex items-center space-x-5">
        <AiOutlineMenu
          onClick={() => setNav(!nav)}
          className="cursor-pointer duration-500 ease-in-out hover:scale-125"
          size={30}
        />
        <h1 className="text-xl sm:text-2xl lg:text-3xl px-2">
          Best <span className="font-bold">Eats</span>
        </h1>

        <section className="hidden lg:block">
          <ToggleBtn leftButton="Delivery" rightButton="Pickup" />
        </section>
      </div>

      {/* Search bar */}
      <div className="flex items-center bg-gray-200 px-5 w-[150px] sm:w-[350px] lg:w-[500px] space-x-3 rounded-full">
        <AiOutlineSearch size={20} />
        <input
          className="bg-transparent w-full p-2 focus:outline-none"
          type="Search"
          placeholder="Search Menu"
        />
      </div>

      {/* right bar */}
      <button className="hidden lg:block bg-black text-white font-medium rounded-full text-sm hover:bg-black/80">
        <BsFillCartFill className="inline-block -mt-1 mr-1" size={15} /> Cart
      </button>

      {/* Mobile Navbar */}
      {/* overlay */}
      {nav && (
        <div className="fixed bg-black/80 w-full top-0 left-0 h-screen duration-500 ease-in-out z-10"></div>
      )}

      {/* side bar */}

      <aside
        className={
          nav
            ? "fixed top-0 left-0 w-[75%] sm:w-[-35%] md:w-[50%] lg:w-[25%] h-screen bg-white p-5 duration-500 ease-in-out shadow-2xl z-10"
            : "fixed top-0 left-[-100%] w-[75%] sm:w-[-35%] md:w-[50%] lg:w-[25%] h-screen bg-white p-5 duration-500 ease-in-out shadow-2xl z-10"
        }
      >
        <div className="flex justify-between">
          <h1 className="font-medium text-lg">
            Best <span className="font-bold">Eats</span>
          </h1>
          <AiOutlineClose
            onClick={() => setNav(!nav)}
            className="cursor-pointer duration-300 ease-in-out font-bold hover:scale-125"
            size={25}
          />
        </div>

        <section className="lg:hidden mt-10 flex justify-between ">
          <ToggleBtn leftButton="Delivery" rightButton="Pickup" />

          <button className="lg:hidden block bg-black text-white font-medium rounded-full text-sm hover:bg-black/80">
            <BsFillCartFill className="inline-block -mt-1 mr-1" size={15} />{" "}
            Cart
          </button>
        </section>

        <nav className="mt-10">
          <List>
            {categories.map((category) => (
              <ListItem key={category.heading} heading={category.heading}>
                {category.icon}
              </ListItem>
            ))}
          </List>
        </nav>
      </aside>
    </div>
  );
};

export default Navbar;
