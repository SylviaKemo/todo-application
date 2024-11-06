import React from "react";
import { Link } from "react-router-dom";

const SplashScreen = () => {
  return (
    <div>
      <div>
        <img src="/assets/shape.svg" alt="svg" />
      </div>
      <div className="flex justify-center mb-16">
        <img
          src="/assets/undraw_mobile_ux_o0e1 1.png"
          alt="mobile"
          className="w-1/2"
        />
      </div>
      <div className="flex flex-col gap-5 text-center mb-16">
        <h1 className="font-bold">Get things done with TODO</h1>
        <p className="px-6 text-sm text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
          reprehenderit minima.
        </p>
      </div>
      <div className="flex flex-col text-center items-center">
        <Link
          to="/registration"
          className="bg-[#FAA885] text-white py-4 px-2 w-3/4"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default SplashScreen;
