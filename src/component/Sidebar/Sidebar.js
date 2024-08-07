import React from "react";
import { TfiHome } from "react-icons/tfi";
import { SlNotebook } from "react-icons/sl";
import { BsFileBarGraph } from "react-icons/bs";
import { IoWalletOutline, IoBagCheckOutline } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";

const Sidebar = () => {
  return (
    <div className="w-14 md:w-24 bg-[#1f2029] h-[calc(100vh-75px)] fixed">
      <div className="text-gray-300 flex flex-col gap-8 items-center pt-9 md:pt-4 text-xl md:text-3xl">
        <TfiHome className="hover:fill-[#7396fe]" />
        <SlNotebook className="hover:fill-[#7396fe]" />
        <BsFileBarGraph className="hover:text-[#7396fe]" />
        <IoWalletOutline className="hover:text-[#7396fe]" />
        <IoBagCheckOutline className="hover:text-[#7396fe]" />
        <IoMdLogOut className=" text-gray-300 hover:text-[#7396fe] md:mt-60 mt-[370px]" />
      </div>
    </div>
  );
};

export default Sidebar;
