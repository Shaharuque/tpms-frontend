import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { useOutsideAlerter } from "../../../../../../CustomHooks/useDetectOutsideClick";
import { MdOutlineDashboard } from "react-icons/md";
import { Link } from "react-router-dom";
import { FiEdit2 } from "react-icons/fi";

const PaymentDepositAction = () => {
  const { ref, visible, setVisible } = useOutsideAlerter(false);
  const handleOpenAction = (e) => {
    e.preventDefault();
    setVisible(!visible);
  };
  return (
    <div ref={ref}>
      <div>
        <BsThreeDots
          onClick={handleOpenAction}
          className="text-secondary mx-auto text-sm"
        />
        {visible && (
          <div className="absolute bg-white border shadow-md px-3 py-2  right-[39px] w-[160px]">
            <Link
              to={"/admin/deposit-apply/223"}
              className="text-sm hover:text-secondary flex items-center mb-1 font-medium  gap-2"
            >
              <MdOutlineDashboard /> Apply Payment
            </Link>

            <Link
              to={"/admin/deposit-edit/23"}
              className="text-sm  hover:text-secondary flex items-center font-medium  gap-2"
            >
              <FiEdit2 /> Edit Deposit
            </Link>
            <br />
            <button className="text-sm hover:text-secondary flex items-center font-medium gap-2"></button>
            <br />
            <button className="text-sm hover:text-secondary flex items-center font-medium gap-2"></button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentDepositAction;
