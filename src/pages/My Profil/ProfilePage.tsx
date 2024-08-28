// import { useNavigate } from "react-router-dom";
// import { useProfileData } from "../../Context/ProfileContext";
// import { useUserContext } from "../../Context/UserContext";
// import LoginStatus from "../../components/LoginStatus";
// import supabaseClient from "../../lib/supabaseClient";
// import { useEffect, useState } from "react";

// const ProfilePage = () => {
//   const { profile, setProfile } = useProfileData();
//   const navigate = useNavigate();
//   const userContext = useUserContext();
//   const user = userContext?.user;

//   const [avatarFile, setAvatarFile] = useState<File | null>(null);
//   const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
//   const [uploading, setUploading] = useState<boolean>(false);

//   console.log(avatarUrl);

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
//       } else if (profileResponse.data) {
//         setProfile(profileResponse.data);

//         if (profileResponse.data.avatar_url) {
//           setAvatarUrl(profileResponse.data.avatar_url);
//         }
//       }
//     };

//     fetchUserProfile();
//   }, [user]);

//   const handleUpload = async () => {
//     if (!avatarFile) {
//       return;
//     }
//     setUploading(true);
//     const fileName = `${user.id}_${avatarFile.name}`;
//     const uploadAvatarResponse = await supabaseClient.storage
//       .from("avatars")
//       .upload(fileName, avatarFile, { upsert: true });

//     if (uploadAvatarResponse.error) {
//       console.error("Error uploading Avatar", uploadAvatarResponse.error);
//       setUploading(false);
//       return;
//     }

//     const publicUrlForAvatar = await supabaseClient.storage
//       .from("avatars")
//       .getPublicUrl(fileName);

//     if (!publicUrlForAvatar.data) {
//       console.error("Error getting publicUrl");
//       setUploading(false);
//       return;
//     }
//     const updateProfilesResponse = await supabaseClient
//       .from("profiles")
//       .update({ avatar_url: publicUrlForAvatar.data.publicUrl })
//       .eq("id", user.id);

//     if (updateProfilesResponse.error) {
//       console.error(
//         "Error setting avatar Url",
//         updateProfilesResponse.error.message
//       );
//       setUploading(false);
//       return;
//     } else {
//       console.log("Update in profiles table successful");
//       setAvatarUrl(publicUrlForAvatar.data.publicUrl);
//     }
//   };

//   if (!profile || !user) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div className="bg-bgMain h-screen">
//       <LoginStatus />

//       <section className="flex justify-center items-center text-tBase bg-bgMain ">
//         <div className="profile-overview p-6 bg-primary rounded-lg shadow-md  ">
//           <h1 className="text-2xl font-bold mb-4">Profile Overview</h1>
//           <div className="profile-details">
//             <p className="text-lg mb-2">
//               <strong>Vorname:</strong> {profile.first_name} "{profile.nickName}
//               "
//             </p>
//             <p className="text-lg mb-2">
//               <strong>Nachname:</strong> {profile.last_name}
//             </p>
//             <p className="text-lg mb-2">
//               <strong>Adresse:</strong>
//               <ul className="text-center">
//                 <li> {profile.street}</li>
//                 <li>
//                   {profile.postalCode} {profile.city}
//                 </li>
//               </ul>
//             </p>
//             <p className="text-lg mb-2">
//               <strong>Tel.:</strong> 0{profile.phone}
//             </p>
//             <p className="text-lg mb-2">
//               <strong>Email:</strong> {user?.email}
//             </p>
//             <p className="text-lg mb-2 text-sm">
//               <strong>Account Created:</strong>{" "}
//               {new Date(user.created_at).toLocaleString()}
//             </p>
//           </div>
//           <div>
//             {profile.avatar_url ? (
//               <img
//                 src={profile.avatar_url}
//                 className="w-64 h-64 rounded-full object-cover object-center border-4 border-white po"
//               />
//             ) : (
//               "No image"
//             )}
//           </div>
//           <div className="flex flex-col items-center mt-6">
//             <label className="text-base font-medium text-tBase mb-2">
//               <strong>Upload Image</strong>
//             </label>
//             <input
//               className="mt-4 mb-4"
//               type="file"
//               accept="image/*"
//               onChange={(e) => {
//                 if (e.target.files) {
//                   setAvatarFile(e.target.files[0]);
//                   console.log(avatarFile);
//                 }
//               }}
//             />
//             <button
//               onClick={handleUpload}
//               disabled={uploading}
//               className={`w-40 px-4 py-2 text-white font-semibold rounded-md transition-colors mt-6 mb-8 ${
//                 uploading
//                   ? "bg-sky-900 cursor-not-allowed"
//                   : "bg-sky-400 hover:bg-sky-900"
//               }`}>
//               {uploading ? "Uploading..." : "Upload"}
//             </button>
//           </div>
//           <div className="ml-6 flex justify-center">
//             <button
//               onClick={() => navigate(-1)}
//               className="w-40 px-4 py-2 text-white font-semibold rounded-md transition-colors mt-6 mb-8 bg-pink-400">
//               Back
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ProfilePage;
import { useNavigate } from "react-router-dom";
import { useProfileData } from "../../Context/ProfileContext";
import { useUserContext } from "../../Context/UserContext";
import LoginStatus from "../../components/LoginStatus";
import supabaseClient from "../../lib/supabaseClient";
import { useEffect, useState } from "react";

const ProfilePage = () => {
  const { profile, setProfile } = useProfileData();
  const navigate = useNavigate();
  const userContext = useUserContext();
  const user = userContext?.user;

  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);

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
      } else if (profileResponse.data) {
        setProfile(profileResponse.data);

        if (profileResponse.data.avatar_url) {
          setAvatarUrl(profileResponse.data.avatar_url);
        }
      }
    };

    fetchUserProfile();
  }, [user]);

  const handleUpload = async () => {
    if (!avatarFile) {
      return;
    }
    setUploading(true);
    const fileName = `${user.id}_${avatarFile.name}`;
    const uploadAvatarResponse = await supabaseClient.storage
      .from("avatars")
      .upload(fileName, avatarFile, { upsert: true });

    if (uploadAvatarResponse.error) {
      console.error("Error uploading Avatar", uploadAvatarResponse.error);
      setUploading(false);
      return;
    }

    const publicUrlForAvatar = await supabaseClient.storage
      .from("avatars")
      .getPublicUrl(fileName);

    if (!publicUrlForAvatar.data) {
      console.error("Error getting publicUrl");
      setUploading(false);
      return;
    }
    const updateProfilesResponse = await supabaseClient
      .from("profiles")
      .update({ avatar_url: publicUrlForAvatar.data.publicUrl })
      .eq("id", user.id);

    if (updateProfilesResponse.error) {
      console.error(
        "Error setting avatar Url",
        updateProfilesResponse.error.message
      );
      setUploading(false);
      return;
    } else {
      setAvatarUrl(publicUrlForAvatar.data.publicUrl);
    }
  };

  if (!profile || !user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="bg-bgMain min-h-screen flex flex-col p-4 text-tBase">
      <LoginStatus />

      <div className="flex flex-col p-4 items-center p-4">
        <section className="w-full max-w-3xl p-6 bg-primary rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-6 text-center text-tBase">
            Profile Overview
          </h1>

          <div className="profile-details space-y-4 mb-6 ">
            <p className="text-lg">
              <strong>First Name:</strong> {profile.first_name} "
              {profile.nickName}"
            </p>
            <p className="text-lg">
              <strong>Last Name:</strong> {profile.last_name}
            </p>
            <p className="text-lg">
              <strong>Address:</strong>
              <ul className="ml-4 space-y-1">
                <li>{profile.street}</li>
                <li>
                  {profile.postalCode} {profile.city}
                </li>
              </ul>
            </p>
            <p className="text-lg">
              <strong>Phone:</strong> 0{profile.phone}
            </p>
            <p className="text-lg">
              <strong>Email:</strong> {user?.email}
            </p>
            <p className="text-lg">
              <strong>Account Created:</strong>{" "}
              {new Date(user.created_at).toLocaleString()}
            </p>
          </div>

          <div className="flex flex-col items-center mb-6">
            {avatarUrl ? (
              <img
                src={avatarUrl}
                className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md"
              />
            ) : (
              <div className="w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center">
                No image
              </div>
            )}
            <label className="mt-4 mb-2 text-base font-medium ">
              <strong>Upload Image</strong>
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                if (e.target.files) {
                  setAvatarFile(e.target.files[0]);
                }
              }}
              className="mt-2 mb-4 text-sm "
            />
            <button
              onClick={handleUpload}
              disabled={uploading}
              className={`w-40 px-4 py-2 text-white font-semibold rounded-md transition-colors mt-2 ${
                uploading
                  ? "bg-sky-900 cursor-not-allowed"
                  : "bg-sky-400 hover:bg-sky-900"
              }`}>
              {uploading ? "Uploading..." : "Upload"}
            </button>
          </div>

          <div className="flex justify-center">
            <button
              onClick={() => navigate(-1)}
              className="w-40 px-4 py-2 text-white font-semibold rounded-md transition-colors bg-pink-400 hover:bg-pink-600">
              Back
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProfilePage;
