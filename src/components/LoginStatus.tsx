import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../Context/UserContext";
import supabaseClient from "../lib/supabaseClient";

const LoginStatus = () => {
  const userContext = useUserContext();
  const user = userContext?.user;
  const navigate = useNavigate();

  const handleLogoutClicked = async (e: React.MouseEvent) => {
    e.preventDefault();

    const signoutResponse = await supabaseClient.auth.signOut();

    if (signoutResponse.error) {
      console.log("Logout error", signoutResponse.error);
    } else {
      userContext?.setUser(null);
      navigate("/login");
    }
  };

  return (
    <div className="text-tBase  flex items-center justify-end space-x-4 p-4 bg-gray-100 dark:bg-bgMain ">
      {user ? (
        <div className="flex items-center space-x-2">
          <span className="text-tBase">Welcome, {user.email}</span>
          <img
            alt=""
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
          />
          <button
            className="logout-button px-4 py-2 bg-primary text-white rounded hover:bg-hover transition"
            onClick={handleLogoutClicked}>
            Logout
          </button>
        </div>
      ) : (
        <Link to="/login">
          <button className="login-button px-4 py-2 bg-hover text-white rounded hover:bg-primary hover:text-black^ transition">
            Login
          </button>
        </Link>
      )}
    </div>
  );
};

export default LoginStatus;
