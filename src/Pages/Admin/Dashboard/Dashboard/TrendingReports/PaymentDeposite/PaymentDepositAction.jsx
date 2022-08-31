import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { useOutsideAlerter } from "../../../../../../CustomHooks/useDetectOutsideClick";
import { MdOutlineDashboard } from "react-icons/md";

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
          <div className="absolute bg-white border shadow-md px-3 py-4  right-[39px] w-[175px]">
            <button className="text-sm hover:text-secondary flex items-center font-normal  gap-2">
              <MdOutlineDashboard /> Apply Payment
            </button>
            <br />
            <button className="text-sm hover:text-secondary flex items-center font-normal gap-2"></button>
            <br />
            <button className="text-sm hover:text-secondary flex items-center font-normal gap-2"></button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentDepositAction;
