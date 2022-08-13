import React, { useState } from "react";
import { Link } from "react-router-dom";

const Staffs = () => {
  const [openStaff, setOpenStaff] = useState(false);
  return (
    <div className="h-[100vh]">
      <div className="flex items-center flex-wrap justify-between">
        <h1>Staffs part</h1>
        <button
          onClick={() => {
            setOpenStaff(!openStaff);
          }}
          className="px-5 mt-8 py-[5px] text-xs  bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
          type="submit"
        >
          Add Staff
        </button>
      </div>
      {openStaff && (
        <div className=" absolute bg-white border shadow-md px-3 py-4 font-normal text-sm right-9">
          <Link
            className="hover:text-primary my-2 "
            to={"/admin/create-staff/staff"}
          >
            Provider (Therapist)
          </Link>
          <br />
          <Link className="hover:text-primary my-2 " to={"#"}>
            Office Staff
          </Link>
        </div>
      )}
      <Link to={"/admin/staff"}> click here</Link>
    </div>
  );
};

export default Staffs;
