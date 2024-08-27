import { useNavigate } from "react-router-dom";
import { useProfileData } from "../../Context/ProfileContext";
import { useUserContext } from "../../Context/UserContext";
import LoginStatus from "../../components/LoginStatus";

const ProfilePage = () => {
  const navigate = useNavigate();
  const profileContext = useProfileData();
  const profile = profileContext.profile;
  // const { profile } = useProfileData();
  const userContext = useUserContext();
  const user = userContext?.user;
  console.log(profile?.first_name);

  if (!profile || !user) {
    return <p>Loading...</p>;
  }
  return (
    <div className="bg-bgMain">
      <LoginStatus />

      <section className="flex justify-center items-center text-tBase bg-bgMain h-full">
        <div className="profile-overview p-6 bg-primary rounded-lg shadow-md h-full ">
          <h1 className="text-2xl font-bold mb-4">Profile Overview</h1>
          <div className="profile-details">
            <p className="text-lg mb-2">
              <strong>First Name:</strong> {profile.first_name}
            </p>
            <p className="text-lg mb-2">
              <strong>Last Name:</strong> {profile.last_name}
            </p>
            <p className="text-lg mb-2">
              <strong>Email:</strong> {user?.email}
            </p>
            <p className="text-lg mb-2">
              <strong>Account Created:</strong>{" "}
              {new Date(user.created_at).toLocaleString()}
            </p>
          </div>
          <div className="ml-6 flex">
            <img
              src="https://www.wdrmaus.de/elefantenseite/image_gen/elternseiten/der-elefant/elefanten-app/tipps-fuer-die-nutzung-der-app/ElefantenApp_Icon_w740.jpg"
              alt="User Avatar"
              className="w-64 h-64 rounded-full object-cover border-4 border-white"
            />
          </div>
          <button
            onClick={() => navigate(-1)}
            className="mb-8 px-4 py-2 text-white bg-pink-400 rounded-md hover:bg-primary-dark transition-colors flex ">
            Back
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;
