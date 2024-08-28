// import { Link, useNavigate } from "react-router-dom";
// import { useUserContext } from "../Context/UserContext";
// import supabaseClient from "../lib/supabaseClient";
// import { useProfileData } from "../Context/ProfileContext";
// import { useEffect } from "react";

// const LoginStatus = () => {
//   const userContext = useUserContext();
//   const user = userContext?.user;
//   // const profileContext = useProfileData();
//   // const profile = profileContext.profile;
//   const { profile, setProfile } = useProfileData();

//   const navigate = useNavigate();

//   const handleLogoutClicked = async (e: React.MouseEvent) => {
//     e.preventDefault();

//     const signoutResponse = await supabaseClient.auth.signOut();

//     if (signoutResponse.error) {
//       console.log("Logout error", signoutResponse.error);
//     } else {
//       userContext?.setUser(null);
//       navigate("/login");
//     }
//   };
//   if (!user) {
//     return;
//   }

//   useEffect(() => {
//     const fetchUserProfile = async () => {
//       const profileResponse = await supabaseClient
//         .from("profiles")
//         .select("*")
//         .eq("id", user.id)
//         .single();

//       if (profileResponse.error) {
//         console.error("Error getting profile:", profileResponse.error.message);
//       }
//       if (profileResponse.data) {
//         setProfile(profileResponse.data);
//         if (profileResponse.data.avatar_url) {
//           // setAvatarUrl(profileResponse.data.avatar_url);
//       }
//     };
//     fetchUserProfile();
//   }, [user, setProfile]);

//   return (
//     <div className="text-tBase flex items-center justify-end space-x-4 p-4 bg-bgMain sticky top-0 z-40">
//       {user ? (
//         <div className="relative flex items-center space-x-2">
//           <span className="text-tBase">Hallo, {profile?.first_name}</span>
//           <Link to="/profile">
//             <div className="relative group">
//               {profile?.avatar_url ? (
//                 <img
//                   alt="User Avatar"
//                   src={profile?.avatar_url}
//                   className="inline-block h-10 w-10 rounded-full ring-2 ring-white cursor-pointer object-cover object-center
//                   "
//                 />
//               ) : (
//                 "No image"
//               )}
//               {/* Custom Tooltip */}
//               <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-amber-600 text-white text-xs rounded py-1 px-2 whitespace-no-wrap z-50">
//                 Go to profile
//               </div>
//             </div>
//           </Link>
//           <button
//             className="logout-button px-4 py-2 bg-primary text-white rounded hover:bg-hover transition"
//             onClick={handleLogoutClicked}>
//             Logout
//           </button>
//         </div>
//       ) : (
//         <Link to="/login">
//           <button className="login-button px-4 py-2 bg-hover text-white rounded hover:bg-primary hover:text-black transition">
//             Login
//           </button>
//         </Link>
//       )}
//     </div>
//   );
// };

// export default LoginStatus;

import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../Context/UserContext";
import supabaseClient from "../lib/supabaseClient";
import { useProfileData } from "../Context/ProfileContext";
import { useEffect, useState } from "react";

const LoginStatus = () => {
  const userContext = useUserContext();
  const user = userContext?.user;
  const { profile, setProfile } = useProfileData();
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleLogoutClicked = async (e: React.MouseEvent) => {
    e.preventDefault();

    const signoutResponse = await supabaseClient.auth.signOut();

    if (!user) {
      return;
    }

    if (signoutResponse.error) {
      console.log("Logout error", signoutResponse.error);
    } else {
      userContext?.setUser(null);
      navigate("/login");
    }
  };

  useEffect(() => {
    if (!user) {
      return;
    }
    const fetchUserProfile = async () => {
      const profileResponse = await supabaseClient
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      if (profileResponse.error) {
        console.error("Error getting profile:", profileResponse.error.message);
      } else if (profileResponse.data) {
        setProfile(profileResponse.data);
        setAvatarUrl(profileResponse.data.avatar_url);
      }
    };

    if (user) {
      fetchUserProfile();
    }
  }, [user, setProfile]);

  return (
    <div className="text-tBase flex items-center justify-end space-x-4 p-4 bg-bgMain sticky top-0 z-40">
      {user ? (
        <div className="relative flex items-center space-x-2">
          <span className="text-tBase">Hallo, {profile?.first_name}</span>
          <Link to="/profile">
            <div className="relative group">
              {avatarUrl ? (
                <img
                  alt="User Avatar"
                  src={avatarUrl}
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white cursor-pointer object-cover object-center"
                />
              ) : (
                <div className="inline-block h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                  No image
                </div>
              )}
              {/* Custom Tooltip */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-amber-600 text-white text-xs rounded py-1 px-2 whitespace-no-wrap z-50">
                Go to profile
              </div>
            </div>
          </Link>
          <button
            className="px-4 py-2 bg-primary text-white rounded hover:bg-hover transition"
            onClick={handleLogoutClicked}>
            Logout
          </button>
        </div>
      ) : (
        <Link to="/login">
          <button className="px-4 py-2 bg-hover text-white rounded hover:bg-primary hover:text-black transition">
            Login
          </button>
        </Link>
      )}
    </div>
  );
};

export default LoginStatus;
