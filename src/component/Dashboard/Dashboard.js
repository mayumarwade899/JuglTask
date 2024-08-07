import React from "react";
import Header from "./Header";
import Netprofit from "./Netprofit";
import Activity from "./Activity";
import MenuItems from "./MenuItems";
import RecentOrders from "./RecentOrders";
import Feedback from "./Feedback";

const Dashboard = () => {
  return (
    <div>
      <div className="text-white flex flex-col gap-5 md:pl-32 pl-16 py-5 px-8 md:w-full md:mt-2 ">
        <h1 className="text-2xl font-semibold mb-4 md:ml-[1px] m-auto">Dashboard</h1>
        <div className="flex md:flex-row flex-col gap-11 justify-center">
          <Header />
          <Netprofit />
        </div>
        <div className="flex md:flex-row flex-col gap-11 justify-between mt-4">
          <Activity />
          <MenuItems />
        </div>
        <div className="flex md:flex-row flex-col gap-11 justify-between mt-4">
          <RecentOrders />
          <Feedback />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
