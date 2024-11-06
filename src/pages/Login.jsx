import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div>
        <img src="/assets/shape.svg" alt="svg" />
      </div>
      <div className="flex flex-col">
        <div className="mb-12 text-center">
          <h1 className="font-bold mb-4 text-2xl">Welcome back!</h1>
          <p className="px-6 text-sm text-gray-700">
            Lets help you meet your tasks
          </p>
        </div>

        <div className="self-center mb-10">
          <img src="/assets/my_notifications_rjej 1.png" alt="notification" />
        </div>

        <div className="flex flex-col gap-4 px-4 mb-16">
          <input
            type="text"
            placeholder="Enter your email"
            className="bg-white py-3 px-6 placeholder:text-sm rounded-full"
          />
          <input
            type="text"
            placeholder="Enter password"
            className="bg-white py-3 px-6 placeholder:text-sm rounded-full"
          />
        </div>

        <div className="flex flex-col text-center px-4 mb-4">
          <Link
            to="/dashboard"
            className="bg-[#FAA885] text-white py-4 px-2 font-bold"
          >
            Login
          </Link>
        </div>
        <div className="px-4">
          <p className="text-sm text-gray-800 text-center">
            Dont have an account?
            <Link to="/register" className="text-[#AD491E] font-bold">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
