import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../Context/UserContext";
import supabaseClient from "../lib/supabaseClient";
import { useEffect } from "react";

import { useProfileData } from "../Context/ProfileContext";

const LoginStatus = () => {
  const userContext = useUserContext();
  const user = userContext?.user;
  const { profile, setProfile } = useProfileData();
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
  if (!user) {
    return;
  }

  useEffect(() => {
    const fetchUserProfile = async () => {
      const profileResponse = await supabaseClient
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      if (profileResponse.error) {
        console.error("Error getting profile:", profileResponse.error.message);
      }
      if (profileResponse.data) {
        setProfile(profileResponse.data);
      }
    };
    fetchUserProfile();
  }, [user, setProfile]);

  return (
    <div className="text-tBase flex items-center justify-end space-x-4 p-4 bg-gray-100 dark:bg-bgMain sticky top-0 z-20">
      {user ? (
        <div className="relative flex items-center space-x-2">
          <span className="text-tBase">Welcome, {profile?.first_name}</span>
          <Link to="/profile">
            <div className="relative group">
              <img
                alt="User Avatar"
                src="https://www.wdrmaus.de/elefantenseite/image_gen/elternseiten/der-elefant/elefanten-app/tipps-fuer-die-nutzung-der-app/ElefantenApp_Icon_w740.jpg"
                className="inline-block h-10 w-10 rounded-full ring-2 ring-white cursor-pointer"
              />
              {/* Custom Tooltip */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-amber-600 text-white text-xs rounded py-1 px-2 whitespace-no-wrap z-50">
                Go to profile
              </div>
            </div>
          </Link>
          <button
            className="logout-button px-4 py-2 bg-primary text-white rounded hover:bg-hover transition"
            onClick={handleLogoutClicked}>
            Logout
          </button>
        </div>
      ) : (
        <Link to="/login">
          <button className="login-button px-4 py-2 bg-hover text-white rounded hover:bg-primary hover:text-black transition">
            Login
          </button>
        </Link>
      )}
    </div>
  );
};

export default LoginStatus;
