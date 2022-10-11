import { Modal } from "antd";
import React, { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import FederalDays from "./FederalDays";

const AddFederal = ({ handleClose, open }) => {
  const [value, setValue] = useState(false);

  const handlSwitch = () => {
    setValue(!value);
  };
  return (
    <div>
      <Modal
        // fullScreen={fullScreen}
        open={open}
        centered
        width={600}
        footer={value}
        closable={value}
        bodyStyle={{ padding: "0" }}
        className="box rounded-md"
      >
        <div className="px-5 py-2 ">
          <div className="flex items-center justify-between">
            <h1 className="text-lg text-left text-orange-400 ">
              Create Holiday
            </h1>
            <IoCloseCircleOutline
              onClick={handleClose}
              className="text-gray-600 font-semibold  text-2xl hover:text-primary"
            />
          </div>
          <div className="bg-gray-200 py-[1px] mt-3"></div>
          <div>
            <FederalDays value={true} handlSwitch={handlSwitch}></FederalDays>
            <FederalDays value={value} handlSwitch={handlSwitch}></FederalDays>
            <FederalDays value={true} handlSwitch={handlSwitch}></FederalDays>
            <FederalDays value={value} handlSwitch={handlSwitch}></FederalDays>
            <FederalDays value={value} handlSwitch={handlSwitch}></FederalDays>
            <FederalDays value={value} handlSwitch={handlSwitch}></FederalDays>
            <FederalDays value={value} handlSwitch={handlSwitch}></FederalDays>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AddFederal;
