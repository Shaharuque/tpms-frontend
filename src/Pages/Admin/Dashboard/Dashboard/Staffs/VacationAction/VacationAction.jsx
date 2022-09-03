import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";

const VacationAction = () => {
  const [open, setOpen] = useState(false);
  const handleOpenAction = () => {
    setOpen(!open);
  };
  return (
    <div>
      <BsThreeDots
        onClick={handleOpenAction}
        className="text-secondary mx-auto text-sm"
      />
      {open && (
        <div className="bg-white absolute right-12 mt-2 px-5 py-3">
          <Link className="text-xs hover:text-secondary" to={"/admin"}>
            Approve
          </Link>
          <br />
          <Link className="text-xs hover:text-secondary" to={"/admin"}>
            Reject
          </Link>
        </div>
      )}
    </div>
  );
};

export default VacationAction;
