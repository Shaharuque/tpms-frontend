import { Modal } from "antd";
import React, { useEffect, useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import EditInsuranceSelect from "./EditInsuranceSelect";
import EditInsuranceTable from "./EditInsuranceTable";
import InsuranceBox from "./InsuranceEditBox/InsuranceBox";
import { useGetPayorSetupDetailsQuery } from "../../../../../../features/Settings_redux/insuranceSetup/insuranceSetupApi";
import useToken from "../../../../../../CustomHooks/useToken";

const InsuranceModal = ({ id, handleClose, open }) => {
  const [insuranceBox, setInsuranceBox] = useState(null);
  const { token } = useToken();
  console.log("clicked insurance", id);

  const { data: payorSetupDetails, isLoading: payorSetupLoading } = useGetPayorSetupDetailsQuery({
    token,
    data: {
      edit_id: id,
    },
  });
  console.log("payorSetupDetails", payorSetupDetails);

  useEffect(() => {
    if (!payorSetupLoading) {
      setInsuranceBox(payorSetupDetails?.payor_details);
    }
  }, [payorSetupDetails?.payor_details, payorSetupLoading]);

  return (
    <div>
      <Modal
        open={open} //aikhaney true na likey ekta state ana lagbey tar value 'true'
        centered
        footer={null}
        style={{
          top: 10,
          bottom: 20,
        }}
        width={700}
        closable={false}
        className="box rounded-xl"
        // onClose={handleClose}
      >
        <div className=" py-3">
          <div className="flex px-5 pb-3 items-center justify-between shadow-md border-b">
            <h1 className=" font-medium text-base">
              Edit Insurance -{" "}
              <span className="text-red-600">{payorSetupDetails?.payor_details?.payor_name}</span>{" "}
            </h1>
            <IoCloseCircleOutline
              onClick={handleClose}
              className="text-gray-600 text-2xl hover:text-primary"
            />
          </div>

          <div className="px-5 overflow-scroll h-[700px]">
            {insuranceBox && <InsuranceBox insuranceBox={insuranceBox}></InsuranceBox>}
            <EditInsuranceSelect
              insuranceBox={payorSetupDetails}
              payordetail={payorSetupDetails?.payor_details}
            ></EditInsuranceSelect>
            <EditInsuranceTable></EditInsuranceTable>
          </div>
          <div className="pt-3 flex justify-end items-end px-5 border-t shadow-t-md">
            <button onClick={handleClose} className="pms-close-button ">
              Close
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default InsuranceModal;
