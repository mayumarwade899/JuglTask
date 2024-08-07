import React from "react";

const orders = [
  {
    id: "001",
    customer: "Wade Warren",
    orderNo: "15478256",
    amount: "$124.00",
    status: "Delivered",
  },
  {
    id: "002",
    customer: "Jane Cooper",
    orderNo: "48967586",
    amount: "$305.02",
    status: "Delivered",
  },
  {
    id: "003",
    customer: "Guy Hawkins",
    orderNo: "78985215",
    amount: "$45.88",
    status: "Cancelled",
  },
  {
    id: "004",
    customer: "Kristin Watson",
    orderNo: "20965732",
    amount: "$96.00",
    status: "Pending",
  },
  {
    id: "005",
    customer: "Cody Fisher",
    orderNo: "95715620",
    amount: "$545.00",
    status: "Delivered",
  },
  {
    id: "006",
    customer: "Savannah Nguyen",
    orderNo: "78514568",
    amount: "$128.20",
    status: "Delivered",
  },
  {
    id: "007",
    customer: "Wade Warren",
    orderNo: "15478256",
    amount: "$124.00",
    status: "Cancelled",
  },
  {
    id: "008",
    customer: "Jane Cooper",
    orderNo: "48967586",
    amount: "$305.02",
    status: "Delivered",
  },
  {
    id: "009",
    customer: "Cody Fisher",
    orderNo: "95715620",
    amount: "$545.00",
    status: "Delivered",
  },
  {
    id: "010",
    customer: "Kristin Watson",
    orderNo: "20965732",
    amount: "$96.00",
    status: "Pending",
  },
];

const RecentOrders = () => {
  return (
    <div className="bg-[#1f2029] text-white rounded-md md:px-4 md:pb-3 md:pt-3 pt-1 md:min-w-[888px] w-[358px]">
      <strong className="md:text-2xl text-xl ml-3 font-medium">Recent Orders</strong>
      <div className="md:mt-3 ml-3 h-[250px] md:overflow-y-auto overflow-auto">
        <table className="w-full">
          <thead className="border-b-[1px] md:text-base text-sm border-b-gray-800 pb-4 bg-[#1f2029] sticky top-0">
            <tr>
              <td className="py-2">ID</td>
              <td>Customer</td>
              <td>Order No</td>
              <td>Amount</td>
              <td>Status</td>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="text-gray-400 border-b-[1px] border-b-gray-800 md:text-base text-sm"
              >
                <td>{order.id}</td>
                <td>{order.customer}</td>
                <td>{order.orderNo}</td>
                <td>{order.amount}</td>
                <td
                  className={`py-2 ${
                    order.status === "Delivered"
                      ? "text-green-500"
                      : order.status === "Cancelled"
                      ? "text-red-500"
                      : "text-yellow-500"
                  }`}
                >
                  {order.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;
