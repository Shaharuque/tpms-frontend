import React from "react";
import { useLocation } from "react-router-dom";
import LogInForm from "./LogInForm";
import ParticlesBg from "./ParticlesBg";

const LogIn = () => {
  let location = useLocation();
  //console.log("state from login", location);
  return (
    <div>
      <LogInForm from={location?.state}></LogInForm>
      <ParticlesBg></ParticlesBg>
    </div>
  );
};

export default LogIn;
