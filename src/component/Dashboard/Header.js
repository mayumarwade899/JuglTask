import React from "react";
import { BsBagDashFill, BsBagCheckFill, BsBagXFill } from "react-icons/bs";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import CountUp from "react-countup";

const Header = () => {
  const data = [
    {
      icon: <BsBagDashFill className="text-5xl text-blue-600 hover:text-blue-500" />,
      title: "Total Orders",
      number: 75,
      profit_loss: <TiArrowSortedUp className="md:ml-[88px] ml-[115px] text-green-400" />,
      percent: <p className="text-green-400">3%</p>,
    },
    {
      icon: <BsBagCheckFill className="text-5xl text-green-500 hover:text-green-400" />,
      title: "Total Delivered",
      number: 70,
      profit_loss: <TiArrowSortedDown className="md:ml-[88px] ml-[115px] text-red-400" />,
      percent: <p className="text-red-400">3%</p>,
    },
    {
      icon: <BsBagXFill className="text-5xl text-red-500 hover:text-red-400" />,
      title: "Total Cancelled",
      number: "05",
      profit_loss: <TiArrowSortedUp className="md:ml-[100px] ml-[130px] text-green-400" />,
      percent: <p className="text-green-400">3%</p>,
    },
  ];

  return (
    <div className="flex md:flex-row flex-col items-center gap-10">
      {data.map((item, index) => (
        <div key={index} className="bg-[#1f2029] md:max-w-48 w-56 px-3 py-2 rounded-md hover:scale-105 transition duration-150">
          {item.icon}
          <p className="text-sm text-gray-300 mt-1">{item.title}</p>
          <div className="flex justify-between mt-4 items-center">
            <p className="text-3xl font-bold">
              <span>
                <CountUp start={0} end={item.number} duration={2} />
              </span>
            </p>
            {item.profit_loss}
            {item.percent}
          </div>
        </div>
      ))}
      <div className="bg-[#1f2029] md:max-w-48 w-56 px-3 py-2 rounded-md hover:scale-105 transition duration-150">
        <img
          className="w-12"
          src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-revenue-digital-nomading-relocation-flaticons-flat-flat-icons.png"
          alt="external-revenue-digital-nomading-relocation-flaticons-flat-flat-icons"
        />
        <p className="text-sm text-gray-300 mt-1">Total Revenue</p>
        <div className="flex justify-between mt-4 items-center">
          <p className="text-3xl font-bold">
            <span>
              $<CountUp start={0} end={12} duration={2}/>k
            </span>
          </p>
          <TiArrowSortedDown className="md:ml-14 ml-20 text-red-400" />
          <p className="text-red-400">3%</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
