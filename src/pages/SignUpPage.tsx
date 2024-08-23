import { useState } from "react";
import LogoLight from "../assets/LogoLight";
import { useNavigate } from "react-router-dom";
import supabaseClient from "../lib/supabaseClient";

const SignUpPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    const authResponse = await supabaseClient.auth.signUp({
      email,
      password,
      options: {
        data: {
          first_name: firstname,
          last_name: lastname,
        },
      },
    });

    if (authResponse.error) {
      console.error("Sign-up error", authResponse.error.message);
      setErrorMessage(authResponse.error.message);
      return;
    }

    if (authResponse.data.user) {
      console.log("User registration successful", authResponse.data.user);
      setSuccessMessage(
        "Sign-up successful. Please check your email to confirm your account."
      );

      setTimeout(() => navigate("/login"), 2000);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 font-inter">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm flex flex-col justify-center">
          <p className="flex justify-center items-center gap-8 mb-10 bg-hover p-10 rounded-lg text-secondary font-semibold text-xl">
            <LogoLight /> Die Rezeptwelt
          </p>
          <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
            Sign Up
          </h2>
          <form onSubmit={handleSignUp}>
            <div className="mb-4">
              <label
                htmlFor="firstname"
                className="block text-gray-700 font-medium mb-2">
                First Name
              </label>
              <input
                type="text"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                id="firstname"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Enter your first name"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="lastname"
                className="block text-gray-700 font-medium mb-2">
                Last Name
              </label>
              <input
                type="text"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                id="lastname"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Enter your last name"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Enter your password"
                required
              />
              {errorMessage && <p className="error-message">{errorMessage}</p>}
              {successMessage && (
                <p className="success-message">{successMessage}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-hover text-white py-3 rounded-lg font-semibold hover:bg-primary transition duration-300">
              Sign Up
            </button>
          </form>
          <div className="text-center mt-4">
            <button
              type="button"
              className="text-hover font-semibold hover:underline"
              onClick={() => navigate("/login")}>
              Already have an account? Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
