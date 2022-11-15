import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
// import Loading from "../Loading/Loading";
import { headers } from "../Misc/BaseClient";

const RequireAuth = ({ children }) => {
  const { Authorization } = headers;
  const token = Authorization?.slice(6);
  let location = useLocation();

  const email = useSelector((state) => state.emailInfo.email);
  console.log("email stored in redux redirect auth:", email);

  //user k jokhn call kortesey tokhn tar status hobey loading so loading state a ekta spinner return korey diley ar reload ar sathey sathey log in page a niye jabey na
  //   if (token) {
  //     return <Navigate to="/admin"></Navigate>;
  //   }

  //if logged in user email not found after loging to account then it will redirect to login page
  //this solution pertially solved the problem not a good approach
  if (!token) {
    //Object.keys(email)?.length === 0 &&
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
