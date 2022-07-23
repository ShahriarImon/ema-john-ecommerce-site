import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { UserContext } from "../../App";

export default function PrivateRoute({ children }) {
  const location = useLocation();
  const [loggedinUser, setLoggedinUser] = useContext(UserContext);
  return loggedinUser.email ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
}

//  PrivateRoute;
