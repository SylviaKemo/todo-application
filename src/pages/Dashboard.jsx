import React from "react";
import TaskList from "../components/TaskList";

const Dashboard = () => {
  return (
    <div className="h-screen relative">
      <div className="bg-[#CF7751]">
        <img src="/assets/shape.png" alt="svg" className="" />
        <p className="text-center text-white pb-4 font-bold">
          Welcome Olivia Grace
        </p>
      </div>
      <div className="mt-4">
        <div className="relative">
          <h3 className="absolute right-4 font-bold text-[14px] text-gray-700 ">
            Good Afternoon
          </h3>
        </div>
        <div className="flex justify-center pt-14">
          <img src="/assets/clock.png" alt="clock" />
        </div>
      </div>
      <div>
        <TaskList />
      </div>
    </div>
  );
};

export default Dashboard;
