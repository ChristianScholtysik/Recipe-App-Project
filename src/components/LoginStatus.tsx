import { Link } from "react-router-dom";
import { useUserContext } from "../Context/UserContext";
import supabaseClient from "../lib/supabaseClient";

const LoginStatus = () => {
  const userContext = useUserContext();
  const user = userContext?.user;

  const handleLogoutClicked = async (e: React.MouseEvent) => {
    e.preventDefault();

    const signoutResponse = await supabaseClient.auth.signOut();

    if (signoutResponse.error) {
      console.log("Logout error", signoutResponse.error);
    } else {
      userContext?.setUser(null);
    }
  };

  return (
    <div className="login-status">
      {user ? (
        <div>
          <span>Welcome, {user.email}</span>
          <button className="logout-button" onClick={handleLogoutClicked}>
            Logout
          </button>
        </div>
      ) : (
        <Link to="/login">
          <button className="login-button">Login</button>
        </Link>
      )}
    </div>
  );
};

export default LoginStatus;
