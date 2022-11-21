import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
const RequireAuth = ({ children }) => {
  const token = localStorage.getItem("adminToken") || null;
  console.log("token require auth", token);
  let location = useLocation();
  console.log("location", location);

  //const email = useSelector((state) => state.emailInfo.email);
  // console.log("email stored in redux redirect auth:", email);

  //if logged in user email not found after loging to account then it will redirect to login page
  if (!token) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return children;
};

export default RequireAuth;
