import { Modal } from "antd";
import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

const InsuranceModal = ({ handleClose, open }) => {
  return (
    <div>
      <Modal
        open={open} //aikhaney true na likey ekta state ana lagbey tar value 'true'
        centered
        footer={null}
        bodyStyle={{ padding: "0" }}
        width={500}
        closable={false}
        className="box rounded-xl"
        // onClose={handleClose}
        // aria-labelledby="responsive-dialog-title"
      >
        <div className="px-5 py-2">
          <div className="flex items-center justify-between">
            <IoCloseCircleOutline
              onClick={handleClose}
              className="text-gray-600 text-2xl hover:text-primary"
            />
          </div>
          <div className="bg-gray-200 py-[1px] mt-3">helllooooo</div>
        </div>
      </Modal>
    </div>
  );
};

export default InsuranceModal;
