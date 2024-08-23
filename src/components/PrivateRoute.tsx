import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../Context/UserContext";

const PrivateRoute = () => {
  const userContext = useUserContext();
  const user = userContext?.user;
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
