import React from "react";
import { BsEyeFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const EraManagerAction = ({ row }) => {
  return (
    <div className="flex justify-center">
      <Link to={"/"}>
        <BsEyeFill className="text-primary" />
      </Link>
    </div>
  );
};

export default EraManagerAction;
