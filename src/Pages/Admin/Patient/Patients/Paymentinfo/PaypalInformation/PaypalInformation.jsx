import React from "react";
import {
  AiOutlineDownload,
  AiOutlineEye,
  AiOutlineHistory,
} from "react-icons/ai";
import { TbEditCircle } from "react-icons/tb";
import { Link } from "react-router-dom";

const PaypalInformation = () => {


  return (
    <div>
    {" "}
    <div>
      <div className=" bg-white py-2 border shadow-xl flex flex-col items-center z-30  w-[170px] rounded-sm">
        <Link to={`/admin`}>
          <button className="text-sm text-secondary px-1 py-1 mb-2 rounded-sm hover:text-white hover:bg-secondary flex items-center font-medium gap-1 w-[130px]">
            <AiOutlineEye className="text-base font-medium" /> View HCFA
          </button>
        </Link>
        <Link to={`/admin`}>
          <button className="text-sm text-secondary px-1 py-1 mb-2 rounded-sm hover:text-white hover:bg-secondary flex items-center font-medium gap-1 w-[130px]">
            <AiOutlineDownload className="text-base font-medium" /> Download
            EDI
          </button>
        </Link>
        <Link to="/">
          <button className="text-sm text-secondary px-1 py-1 mb-2 rounded-sm hover:text-white hover:bg-secondary flex items-center font-medium gap-1 w-[130px]">
            <AiOutlineHistory className="text-base font-medium" /> View
            History
          </button>
        </Link>

        <button
          // onClick={depositDetailsHandler}
          className="text-sm text-secondary px-1 py-1 mb-2 rounded-sm hover:text-white hover:bg-secondary flex items-center font-medium gap-1 w-[130px]"
        >
          <TbEditCircle className="text-base font-medium" /> Deposit Details
        </button>
      </div>
    </div>
  </div>
  )
  
  
};

export default PaypalInformation;