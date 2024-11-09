import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset any previous errors
    setError(null);

    try {
      const response = await fetch("/api/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log("Login response data:", data);

      // Check for successful response
      if (!response.ok) {
        setError("Login failed");
      }

      // Assuming the backend returns a token upon successful login
      localStorage.setItem("token", data.token);
      localStorage.setItem("userName", data.name);
      localStorage.setItem("userId", data._id);
      console.log(data._id, data.name);

      // Redirect to dashboard
      if (response.ok) {
        navigate("/dashboard");
      } else {
        setError(data.error || "Signup failed. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
      console.log(err.message);
    }
  };
  return (
    <div className="pb-4">
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
          <img src="/assets/notification.png" alt="notification" />
        </div>

        <div>
          <div className="flex flex-col gap-4 px-4 mb-16 md:max-w-[768px] md:mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="bg-white text-gray-600 py-3 px-6 placeholder:text-sm rounded-full outline-none md:w-full"
            />
            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Enter password"
                className="bg-white text-gray-600 py-3 px-6 placeholder:text-sm rounded-full outline-none w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="absolute right-4 top-3 cursor-pointer text-gray-500"
                onClick={() => setPasswordVisible(!passwordVisible)} // Toggle visibility
              >
                {passwordVisible ? <FaEye /> : <FaEyeSlash />}{" "}
                {/* Show eye icon */}
              </span>
            </div>
          </div>
        </div>

        <div>
          {error && (
            <div className="text-red-500 px-4 text-center my-2">
              <p>{error}</p>
            </div>
          )}
        </div>

        <div className="flex flex-col text-center px-4 mb-4">
          <button
            onClick={handleSubmit}
            className="bg-[#FAA885] text-white py-4 px-2 font-bold md:max-w-[768px] md:self-center md:w-full"
          >
            Login
          </button>
        </div>
        <div className="px-4">
          <p className="text-sm text-gray-800 text-center">
            Dont have an account?
            <Link to="/signup" className="text-[#AD491E] font-bold">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
