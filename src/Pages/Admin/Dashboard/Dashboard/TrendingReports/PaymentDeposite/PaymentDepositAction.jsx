import React, { useState } from "react";
import { BsFileEarmark, BsThreeDots } from "react-icons/bs";
import { useOutsideAlerter } from "../../../../../../CustomHooks/useDetectOutsideClick";
import { MdOutlineDashboard } from "react-icons/md";
import { RiDeleteBin4Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { FiEdit2, FiPrinter } from "react-icons/fi";

const PaymentDepositAction = () => {
  const [click, setClick] = useState(false);
  const { ref, visible, setVisible } = useOutsideAlerter(false);
  const handleOpenAction = (e) => {
    e.preventDefault();
    setVisible(!visible);
  };

  const handleDetails = () => {
    console.log("click");
    setClick(!click);
  };
  return (
    <div ref={ref}>
      <div>
        <BsThreeDots
          onClick={handleOpenAction}
          className="text-secondary mx-auto text-[13px]"
        />
        {visible && (
          <div className="absolute bg-white border shadow-md px-3 py-3  right-[39px] w-[160px]">
            <Link
              to={"/admin/deposit-apply/223"}
              className="text-[13px] hover:text-secondary flex items-center mb-1 font-medium  gap-2"
            >
              <MdOutlineDashboard /> Apply Payment
            </Link>

            <Link
              to={"/admin/deposit-edit/23"}
              className="text-[13px]  hover:text-secondary flex items-center font-medium  gap-2"
            >
              <FiEdit2 /> Edit Deposit
            </Link>

            <button className="text-[13px] hover:text-secondary flex items-center mt-[2px] font-medium gap-2">
              <RiDeleteBin4Line /> Delete Deposit
            </button>
            <Link
              to={"/admin/deposit-details/232"}
              onClick={handleDetails}
              className="text-[13px] hover:text-secondary flex items-center mt-[2px] font-medium gap-2"
            >
              <BsFileEarmark />
              Deposit Details
            </Link>
            <button className="text-[13px] hover:text-secondary flex items-center mt-[2px] font-medium gap-2">
              <FiPrinter /> Print Receipt
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentDepositAction;
