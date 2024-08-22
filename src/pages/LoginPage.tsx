import { useState } from "react";
import LogoLight from "../assets/LogoLight";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../Context/UserContext";
import supabaseClient from "../lib/supabaseClient";

const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const navigate = useNavigate();

  const userContext = useUserContext();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    const authResponse = await supabaseClient.auth.signInWithPassword({
      email,
      password,
    });

    if (authResponse.error) {
      console.error("Login error", authResponse.error.message);
      setErrorMessage(authResponse.error.message);
      return;
    }

    if (authResponse.data.user) {
      console.log("Useranmeldung erfolgreich", authResponse.data.user);
      setSuccessMessage("Login successful.");

      userContext?.setUser(authResponse.data.user);
      setTimeout(() => navigate("/"), 1000);
    }
  };

  const handleResetPassword = async (e: React.MouseEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    const resetResponse = await supabaseClient.auth.resetPasswordForEmail(
      email
    );

    if (resetResponse.error) {
      console.error(resetResponse.error.message);
      setErrorMessage(resetResponse.error.message);
      return;
    }

    if (resetResponse.data) {
      setSuccessMessage("Password reset link has been sent to your email.");
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 font-inter">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm flex flex-col justify-center ">
          <p className="flex justify-center items-center gap-8 mb-10 bg-hover p-10 rounded-lg text-secondary font-semibold text-xl">
            <LogoLight /> Die Rezeptwelt
          </p>
          <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
            Login
          </h2>
          <form onSubmit={handleLogin}>
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
              Login
            </button>
            <div className="text-center mt-4">
              <button
                type="button"
                className="text-hover hover:underline"
                onClick={handleResetPassword}>
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
