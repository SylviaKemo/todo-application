import React from "react";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div>
      <div>
        <img src="/assets/shape.svg" alt="svg" />
      </div>
      <div className="flex flex-col">
        <div className="mb-16 text-center">
          <h1 className="font-bold mb-4 text-3xl">Welcome onboard</h1>
          <p className="px-6 text-sm text-gray-700">
            Lets help you meet your tasks
          </p>
        </div>
        <div className="flex flex-col gap-4 px-4 mb-16">
          <input
            type="text"
            placeholder="Enter your full name"
            className="bg-white py-3 px-6 placeholder:text-sm rounded-full"
          />
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
          <input
            type="text"
            placeholder="Confirm password"
            className="bg-white py-3 px-6 placeholder:text-sm rounded-full"
          />
        </div>
        <div className="flex flex-col text-center px-4 mb-4">
          <Link
            to="/login"
            className="bg-[#FAA885] text-white py-4 px-2 font-bold"
          >
            Register
          </Link>
        </div>
        <div className="px-4">
          <p className="text-sm text-gray-800 text-center">
            Already have an account?
            <Link to="/login" className="text-[#AD491E] font-bold">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
