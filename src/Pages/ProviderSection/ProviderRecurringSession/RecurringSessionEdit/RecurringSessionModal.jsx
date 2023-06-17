import { Modal, Table } from "antd";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Nav } from "rsuite";
import { NavLink, Outlet } from "react-router-dom";
const RecurringSessionModal = ({ handleClose, open }) => {
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
              <div>
                <div className="container width-fix  mx-auto mb-5 mt-5">
                  <Nav appearance="tabs" justified className="mt-5 mb-5">
                    <NavLink
                      className={(navinfo) =>
                        navinfo.isActive
                          ? "rs-nav-item rs-nav-item-active font-medium text-[14px]"
                          : "rs-nav-item text-[14px] font-medium"
                      }
                      to={"Single-view"}
                    >
                      Single View
                      <span className="bg-orange-400 badge text-white ml-2 rounded-full text-[10px]">
                        view-1
                      </span>
                    </NavLink>

                    <NavLink
                      className={(navinfo) =>
                        navinfo.isActive
                          ? "rs-nav-item rs-nav-item-active font-medium text-[14px]"
                          : "rs-nav-item text-[14px] font-medium"
                      }
                      to={"day-view"}
                    >
                      Day View
                      <span className="bg-orange-400 badge text-white ml-2 text-[10px] rounded-full">
                        view-2
                      </span>
                    </NavLink>
                  </Nav>
                  <Outlet />
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
