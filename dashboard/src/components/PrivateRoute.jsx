import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, allowedRoles }) => {
  const { user, role } = useContext(AuthContext);

  if (!user) {
    return <Navigate to='/login' />;
  }

  if (allowedRoles && !allowedRoles.includes(role)) {
    return <Navigate to='/unauthorized' />;
  }

  return children;
};

export default PrivateRoute;
