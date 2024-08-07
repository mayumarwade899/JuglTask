import React from "react";
import { FaCircleArrowRight } from "react-icons/fa6";

const MenuItems = () => {
  const menuItems = [
    { icon: <img src="/icons/target.png" alt="target_icon" className="w-[60px]"/>, label: "Goals" },
    { icon: <img src="/icons/dish.png" alt="dish_icon" className="w-14"/>, label: "Popular Dishes" },
    { icon: <img src="/icons/menu.png" alt="menu_icon" className="w-14"/>, label: "Menus" },
  ]; 

  return (
    <div className="bg-[#1f2029] md:w-full w-[358px] rounded-md">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className="flex justify-between items-center px-5 m-6 pt-1 hover:scale-105 transition duration-150"
        >
          <div className="flex items-center gap-6">
            <div className="text-6xl text-[#4c51bf] hover:text-[#2e37e3]">
              {item.icon}
            </div>
            <div className="text-gray-300 text-[20px] font-semibold">{item.label}</div>
          </div>
          <div className="text-3xl hover:text-[#4c51bf]">
            {<FaCircleArrowRight />}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuItems;
