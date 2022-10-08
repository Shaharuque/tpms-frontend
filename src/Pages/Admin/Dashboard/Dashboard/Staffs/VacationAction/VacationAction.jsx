import React, { useState } from "react";
import { BsXCircle } from "react-icons/bs";
import { FiCheckCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

const VacationAction = () => {
  const [open, setOpen] = useState(false);
  const handleOpenAction = () => {
    setOpen(!open);
  };
  return (
    <div className="bg-white py-2 border shadow-xl flex flex-col items-center z-30  w-[130px] rounded-sm">
      <div>
        <Link
          className="text-xs text-secondary px-2 py-1 mb-[-6px] rounded-sm hover:text-white hover:bg-secondary flex items-center font-bold gap-1 w-[110px] border border-secondary"
          to={"/admin"}
        >
          <FiCheckCircle className="text-sm" />
          Approve
        </Link>
        <br />
        <Link
          className="text-xs text-secondary px-2 py-1
           rounded-sm hover:text-white hover:bg-secondary flex items-center font-bold gap-1 w-[110px] border border-secondary"
          to={"/admin"}
        >
          <BsXCircle className="text-sm" />
          Reject
        </Link>
      </div>
    </div>
  );
};

export default VacationAction;
