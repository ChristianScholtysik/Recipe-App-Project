import { useState } from "react";
import LogoLight from "../assets/LogoLight";
import LogoDark from "../assets/LogoDark";

const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm flex flex-col justify-center ">
          <p className="flex justify-center items-center gap-8 mb-10 bg-hover p-10 rounded-lg text-secondary font-semibold text-xl">
            <LogoLight /> Die Rezeptwelt
          </p>
          <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
            Login
          </h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-hover text-white py-3 rounded-lg font-semibold hover:bg-primary transition duration-300">
              Login
            </button>
            <div className="text-center mt-4">
              <button type="button" className="text-hover hover:underline">
                Forgot Password?
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
