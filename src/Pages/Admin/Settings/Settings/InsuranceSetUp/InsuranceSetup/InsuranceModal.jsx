import { Modal } from "antd";
import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import EditInsuranceSelect from "./EditInsuranceSelect";
import EditInsuranceTable from "./EditInsuranceTable";
import InsuranceBox from "./InsuranceEditBox/InsuranceBox";

const InsuranceModal = ({ handleClose, open }) => {
  return (
    <div>
      <Modal
        open={open} //aikhaney true na likey ekta state ana lagbey tar value 'true'
        centered
        footer={null}
        bodyStyle={{ padding: "0" }}
        width={1000}
        closable={false}
        className="box rounded-xl"
        // onClose={handleClose}
        // aria-labelledby="responsive-dialog-title"
      >
        <div className=" py-3">
          <div className="flex px-5 pb-3 items-center justify-between shadow-md border-b">
            <h1 className=" font-medium text-base">
              Edit Insurance -{" "}
              <span className="text-red-600">Magellan Health Services</span>{" "}
            </h1>
            <IoCloseCircleOutline
              onClick={handleClose}
              className="text-gray-600 text-2xl hover:text-primary"
            />
          </div>

          <div className="px-5 overflow-scroll h-[700px]">
            <InsuranceBox></InsuranceBox>
            <EditInsuranceSelect></EditInsuranceSelect>
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
