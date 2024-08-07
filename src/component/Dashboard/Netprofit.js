import React from "react";
import { TiArrowSortedUp } from "react-icons/ti";
import CountUp from "react-countup";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Netprofit = () => {
  const percentage = 70;
  return (
    <div className="flex items-center justify-between md:w-full w-[358px] bg-[#1f2029] rounded-md hover:scale-105 transition duration-150">
      <div className="py-1 px-4">
        <p className="text-gray-300 font-semibold">Net Profit</p>
        <p className="text-3xl font-bold mt-5">
          <span>
            $ <CountUp start={0} end={6759} duration={1} />
            .25
          </span>
        </p>
        <div className="flex mt-1 items-center gap-1">
          <TiArrowSortedUp className=" text-green-400" />
          <p className="text-green-400">3%</p>
        </div>
      </div>
      <div className="flex flex-col items-center py-1 px-2">
        <div className="w-[75px]">
          <CircularProgressbar value={percentage} text={`${percentage}%`} />
        </div>
        <p className="text-[8px] text-gray-400 mt-3">
          *The values here has been rounded off.
        </p>
      </div>
    </div>
  );
};

export default Netprofit;
