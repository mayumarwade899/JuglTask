import React, { useState } from "react";
import { IoMailUnreadOutline, IoSettingsOutline } from "react-icons/io5";
import { VscBellDot } from "react-icons/vsc";
import { FiSearch } from "react-icons/fi";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const Topbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="bg-[#1f2029] text-white flex justify-between md:justify-between items-center md:h-[75px] h-[85px] fixed w-[100%] top-0">
        <img src="/icons/logo.png" alt="icon" className="md:ml-5 ml-3 md:w-16 w-11"/>
        <div className="bg-[#292b2f] md:flex hidden mr-auto ml-8 items-center justify-center rounded">
          <div className="relative">
            <input
              type="text"
              placeholder="search"
              className="bg-[#292b2f] text-white px-8 py-1 rounded border-none outline-none"
            />
            <div className="absolute left-2 top-[17px] transform -translate-y-1/2">
              <FiSearch className="text-gray-400" />
            </div>
          </div>
        </div>
        <div className="md:flex gap-8 items-center hidden text-gray-400 text-3xl">
          <IoMailUnreadOutline className="hover:text-[#7396fe]" />
          <IoSettingsOutline className="hover:text-[#7396fe]" />
          <VscBellDot className="hover:fill-[#7396fe]" />
          <img
            src="https://docs.material-tailwind.com/img/face-2.jpg"
            alt="avatar"
            className="h-9 w-9 rounded-full mr-5"
          />
        </div>
        <div className="md:hidden">
          <button className="p-3 text-xl" onClick={handleMenu}>
            {isOpen ? <IoMdClose /> : <IoMdMenu />}
          </button>
        </div>
        {isOpen && (
          <div className="flex basis-full flex-col gap-2 items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="search"
                className="bg-[#292b2f] text-white px-8 py-1 rounded border-none outline-none"
              />
              <div className="absolute left-2 top-[17px] transform -translate-y-1/2">
                <FiSearch className="text-gray-400" />
              </div>
            </div>
            <div className="text-gray-400 flex gap-4 items-center text-2xl">
              <IoMailUnreadOutline className="hover:text-[#7396fe]" />
              <IoSettingsOutline className="hover:text-[#7396fe]" />
              <VscBellDot className="hover:fill-[#7396fe]" />
              <img
                src="https://docs.material-tailwind.com/img/face-2.jpg"
                alt="avatar"
                className="h-7 w-7 rounded-full mr-5"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Topbar;
