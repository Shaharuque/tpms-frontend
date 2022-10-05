import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";
import { AiOutlineDelete, AiOutlinePrinter } from "react-icons/ai";
import { BsFileEarmark, BsPrinter } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";

const MPostingAction = ({ id, depositDetailsHandler }) => {
  console.log(id);

  return (
    <div>
      {/* <div className="flex justify-center gap-1 text-primary">
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
      </div> */}

      <div>
        <div className=" bg-white py-2 border shadow-xl flex flex-col items-center z-30  w-[150px] rounded-sm">
          <Link to={`/admin/billing/deposit-apply/${id}`}>
            <button className="text-xs text-secondary px-2 py-1 mb-2 rounded-sm hover:text-white hover:bg-secondary flex items-center font-bold gap-1 w-[130px]">
              <MdOutlineDashboard className="text-sm" /> Apply Payment
            </button>
          </Link>
          <Link to={`/admin/billing/deposit-add/${id}`}>
            <button className="text-xs text-secondary px-2 py-1 mb-2 rounded-sm hover:text-white hover:bg-secondary flex items-center font-bold gap-1 w-[130px]">
              <BiEdit className="text-sm" /> Edit Deposit
            </button>
          </Link>
          <Link to="/">
            <button className="text-xs text-secondary px-2 py-1 mb-2 rounded-sm hover:text-white hover:bg-secondary flex items-center font-bold gap-1 w-[130px]">
              <AiOutlineDelete className="text-sm" /> Delete Deposit
            </button>
          </Link>

          <button
            onClick={depositDetailsHandler}
            className="text-xs text-secondary px-2 py-1 mb-2 rounded-sm hover:text-white hover:bg-secondary flex items-center font-bold gap-1 w-[130px]"
          >
            <BsFileEarmark className="text-sm" /> Deposit Details
          </button>

          <Link to="/">
            <button className="text-xs text-secondary px-2 py-1 mb-2 rounded-sm hover:text-white hover:bg-secondary flex items-center font-bold gap-1 w-[130px]">
              <AiOutlinePrinter className="text-sm" /> Print Receipt
            </button>
          </Link>
          <Link to="/">
            <button className="text-xs text-secondary  px-2 py-1 rounded-sm gap-1 hover:text-white hover:bg-secondary flex items-center font-bold w-[130px]">
              <BsFileEarmark className="text-sm" /> ERA Text File
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MPostingAction;
