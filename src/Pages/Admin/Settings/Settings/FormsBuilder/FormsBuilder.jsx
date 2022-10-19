import React from "react";
import { Link } from "react-router-dom";

const FormsBuilder = () => {
  return (
    <div className="">
      <h1>from builder</h1>
      <button className="pms-button">
        <Link to={"/form-template"}>Demo Form</Link>
      </button>
      <div className="my-2"></div>

      <Link to={"/form-direct-service"}>
        <button className="pms-button">
          DIRECT-SERVICE PARENT TRAINING NOTE
        </button>
      </Link>
      <div className="my-2"></div>
      <Link to={"/Parent-training-session"}>
        <button className="pms-button">PARENT TRAINING SESSION NOTE</button>
      </Link>
      <div className="my-2"></div>
      <Link to={"/BCBA-trainee"}>
        <button className="pms-button">
          BCBA TRAINEE SUPERVISION MONTHLY FORM
        </button>
      </Link>
    </div>
  );
};

export default FormsBuilder;
