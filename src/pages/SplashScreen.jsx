import React from "react";
import { Link } from "react-router-dom";

const SplashScreen = () => {
  return (
    <div className="pb-3">
      <div>
        <img src="/assets/shape.svg" alt="svg" />
      </div>
      <div className="lg:grid lg:grid-cols-2 lg:max-w-[1024px] lg:my-0 lg:mx-auto">
        <div className="flex justify-center mb-16">
          <img
            src="/assets/mobile.png"
            alt="mobile"
            className="w-1/2 lg:w-[80%]"
          />
        </div>
        <div className="lg:self-center">
          <div className="flex flex-col gap-5 text-center mb-16">
            <h1 className="font-bold">Get things done with TODO</h1>
            <p className="px-6 text-sm text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequuntur reprehenderit minima.
            </p>
          </div>
          <div className="flex flex-col text-center items-center">
            <Link
              to="/signup"
              className="bg-[#FAA885] text-white py-4 px-2 w-3/4"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
