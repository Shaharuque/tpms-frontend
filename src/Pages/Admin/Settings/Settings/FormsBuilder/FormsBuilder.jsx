import React from "react";
import { Link } from "react-router-dom";

const FormsBuilder = () => {
  return (
    <div>
      <Link to={"/forms"}>
        <button className="pms-button">Forms</button>
      </Link>
      <div className="my-2"></div>
    </div>
  );
};

export default FormsBuilder;
