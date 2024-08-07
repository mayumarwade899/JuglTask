import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const data = {
  labels: ["5", "9", "11", "13", "15", "17", "19", "21", "23", "25", "27"],
  datasets: [
    {
      label: "Activity",
      backgroundColor: "#4c51bf",
      borderColor: "#4c51bf",
      data: [4000, 3000, 2000, 2780, 1890, 2390, 3490, 2000, 1500, 1000, 3400],
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
};
 
const Activity = () => {
  return (
    <div className="md:min-w-[888px] w-[358px]">
      <div className="bg-[#1f2029] text-white rounded-md">
        <div className="px-3 pb-9 pt-2 h-72">
          <h3 className="text-xl mb-2 font-bold">Activity</h3>
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default Activity;
