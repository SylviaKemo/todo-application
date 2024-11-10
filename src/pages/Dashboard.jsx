import React, { useEffect, useState } from "react";
// import TaskList from "../components/TaskList";
import { AiOutlineLogout } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import DailyReflectionsForm from "../components/DailyReflectionsForm";

const Dashboard = () => {
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Get the user's  name and id from localStorage
    const name = localStorage.getItem("userName");
    const id = localStorage.getItem("userId");
    if (name) {
      setUserName(name);
    }
    if (id) {
      setUserId(id); // Set userId in state
    }
  }, []);

  const handleLogout = () => {
    // Remove the user information from localStorage
    localStorage.removeItem("userName");
    localStorage.removeItem("userId");
    localStorage.removeItem("token");

    // Redirect to the login page
    navigate("/login");
  };

  return (
    <div className="h-screen relative">
      <div className="bg-[#CF7751]">
        <img src="/assets/shape.png" alt="svg" className="" />
        <AiOutlineLogout
          onClick={handleLogout}
          className="absolute top-0 right-0 text-[24px]"
        />
        <p className="text-center text-white pb-4 font-bold">
          Welcome {userName || "User"}
        </p>
      </div>
      <div className="mt-4">
        <div className="relative">
          <h3 className="absolute right-4 font-bold text-[14px] text-gray-700 ">
            Good Afternoon
          </h3>
        </div>
        {/* <div className="flex justify-center pt-14">
          <img src="/assets/clock.png" alt="clock" />
        </div> */}
      </div>
      <div>
        {/* <TaskList userId={userId} /> */}
        <DailyReflectionsForm />
      </div>
    </div>
  );
};

export default Dashboard;
