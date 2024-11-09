import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [passwordVisible, setPasswordVisible] = useState(false);
  // const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async () => {
    // Perform form validation if needed

    // Perform form validation if needed
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch("/api/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          confirmPassword,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Redirect to login or another page upon successful registration
        navigate("/login");
      } else {
        // Handle errors (e.g., display them to the user)
        setError(data.error || "Signup failed. Please try again.");
      }
    } catch (err) {
      // Catch network or other errors
      setError("An error occurred. Please try again later.");
    }
  };
  return (
    <div className="pb-4">
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
        <div>
          <div className="flex flex-col gap-4 px-4 mb-16 md:max-w-[768px] md:mx-auto">
            <input
              type="text"
              placeholder="Enter your full name"
              className="bg-white py-3 px-6 text-gray-600 outline-none placeholder:text-sm rounded-full w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-white py-3 px-6 text-gray-600 outline-none placeholder:text-sm rounded-full w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Enter password"
                className="bg-white py-3 px-6 text-gray-600 outline-none placeholder:text-sm rounded-full w-full"
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
            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Confirm password"
                className="bg-white py-3 px-6 text-gray-600 outline-none placeholder:text-sm rounded-full w-full"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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
            onClick={handleRegister}
            className="bg-[#FAA885] text-white py-4 px-2 font-bold md:max-w-[768px] md:self-center md:w-full"
          >
            Register
          </button>
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
