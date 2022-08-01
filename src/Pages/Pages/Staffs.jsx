import React from "react";
import { Link } from "react-router-dom";

const Staffs = () => {
  return (
    <div>
      <h1>Staffs part</h1>
      <Link to={"/admin/staff"}> click here</Link>
    </div>
  );
};

export default Staffs;
