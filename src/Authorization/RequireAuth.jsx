import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Loading/Loading";
import { headers } from "../Misc/BaseClient";

const RequireAuth = ({ children }) => {
  const { Authorization } = headers;
  const token = Authorization?.slice(6);
  let location = useLocation();

  //user k jokhn call kortesey tokhn tar status hobey loading so loading state a ekta spinner return korey diley ar reload ar sathey sathey log in page a niye jabey na
  //   if (token) {
  //     return <Navigate to="/admin"></Navigate>;
  //   }

  console.log("token", token);
  console.log("what is token", !token);

  if (!token) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return children;
  //   return token ? <Outlet /> : <Navigate to="/" />;
};

export default RequireAuth;
