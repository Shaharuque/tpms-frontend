import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { BsFileEarmark, BsPrinter } from "react-icons/bs";

const MPostingAction = ({ row }) => {
  return (
    <div>
      <div className="flex justify-center gap-1 text-primary">
        <Link to={"/"}>
          <MdOutlineDashboard />
        </Link>
        <Link to={"/billing/deposit-add"}>
          <FiEdit3 />
        </Link>
        <Link to={"/"}>
          <AiOutlineDelete />
        </Link>
        <Link to={"/"}>
          <BsFileEarmark />
        </Link>
        <Link to={"/"}>
          <BsPrinter />
        </Link>
      </div>
    </div>
  );
};

export default MPostingAction;
