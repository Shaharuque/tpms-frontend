import { Modal, Table } from "antd";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Nav } from "rsuite";
import { NavLink, Outlet } from "react-router-dom";
import SingleView from "./SingleView/SingleViewSection/SingleView";
import DayView from "./DayView/DayViewSection/DayView";

const Tab = ({ label, isActive, onClick }) => (
  <button
    className={`${
      isActive
        ? "inline-block p-2 px-6 rounded-t-lg  text-[#393C52] bg-gray-100 text-sm font-normal mb-[-2px] border border-b-0 border-t-4   border-t-[#089BAB]  "
        : " "
    } py-2 px-4 rounded-t-lg mr-2 `}
    onClick={onClick}
  >
    {label}
  </button>
);

const RecurringSessionModal = ({ handleClose, open }) => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div>
      <div>
        <Modal
          open={true} //aikhaney true na likey ekta state ana lagbey tar value 'true'
          centered
          width={1000}
          footer={null}
          bodyStyle={{ padding: "0" }}
          closable={false}
          className="box rounded-xl"
          // onClose={handleClose}
          // aria-labelledby="responsive-dialog-title"
        >
          <div className="px-5 py-2">
            <div className="flex items-center justify-end">
              <IoCloseCircleOutline
                onClick={handleClose}
                className="text-gray-600 text-2xl hover:text-primary"
              />
            </div>

            <div className="bg-gray-200 py-[1px] mt-3"></div>

            <form onSubmit={handleSubmit(onSubmit)}>
             

              <div className=" mt-5">
                <div className="flex border-b-2">
                  <Tab
                    label="Single View"
                    isActive={activeTab === 1}
                    onClick={() => handleTabClick(1)}
                  />
                  <Tab
                    label="Day View"
                    isActive={activeTab === 2}
                    onClick={() => handleTabClick(2)}
                  />
                </div>

                <div className="mt-5">
                  {/* Render the content based on the active tab */}
                  {activeTab === 1 && (
                    <div>
                      <SingleView></SingleView>
                    </div>
                  )}
                  {activeTab === 2 && (
                    <div>
                      <DayView></DayView>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-gray-200 py-[1px] mt-3"></div>
              <div className=" flex items-end justify-end mt-2">
                <button className=" pms-button mr-2" type="submit">
                  Save
                </button>

                <button className="pms-close-button" onClick={handleClose}>
                  Close
                </button>
              </div>
            </form>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default RecurringSessionModal;
