import { Modal } from "antd";
import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

const CreateAppointmentAvailability = ({ handleClose, open }) => {
  return (
    <div>
      <div>
        <Modal
          confirmLoading
          width={700}
          open={open}
          footer={false}
          closable={false}
          bodyStyle={{ padding: "0" }}
        >
          <div className="px-5 py-2 box ">
            <div className="flex items-center justify-between">
              <h1 className="text-lg text-left text-orange-400">
                Availability
              </h1>
              <IoCloseCircleOutline
                onClick={handleClose}
                className="text-gray-500 text-2xl hover:text-primary"
              />
            </div>
            <div className="bg-gray-200 py-[1px] mt-3"></div>
            <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-3 gap-2 mb-2 my-5">
              <div className="">
                <h1 className=" rounded-t-md font-medium text-[12px] text-center py-1 bg-secondary text-white">
                  Morning
                </h1>
                <div className="border grid grid-cols-2 mb-2 p-1 gap-1 shadow-sm">
                  <button className="available-button border">10:15 AM</button>
                  <button className="available-button border">10:00 PM</button>
                  <button className="available-button border">10:45 AM</button>
                </div>
              </div>
              <div className="">
                <h1 className=" rounded-t-md font-medium text-[12px] text-center py-1 bg-secondary text-white">
                  Afternoon
                </h1>
                <div className="border grid grid-cols-2 mb-2 p-1 gap-1 shadow-sm">
                  <button className="available-button border">10:15 AM</button>
                  <button className="available-button border">10:00 PM</button>
                </div>
              </div>
              <div className="">
                <h1 className=" rounded-t-md font-medium text-[12px] text-center py-1 bg-secondary text-white">
                  Evening
                </h1>
                <div className="border grid grid-cols-2 mb-2 p-1 gap-1 shadow-sm">
                  <button className="available-button border">10:15 AM</button>
                  <button className="available-button border">10:00 PM</button>
                  <button className="available-button border">10:45 AM</button>
                  <button className="available-button border">10:15 AM</button>
                  <button className="available-button border">10:00 PM</button>
                  <button className="available-button border">10:45 AM</button>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 py-[1px] mt-3"></div>
            <div className=" flex items-end justify-end mt-2">
              <button className="pms-close-button" onClick={handleClose}>
                Close
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default CreateAppointmentAvailability;
