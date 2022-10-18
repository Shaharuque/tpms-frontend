import React from "react";
import { Link } from "react-router-dom";

const FormsBuilder = () => {
  return (
    <div>
      <h1>from builder</h1>
      <button className="pms-button">
        <Link to={"/form-template"}>Demo Form</Link>
      </button>
    </div>
  );
};

export default FormsBuilder;
