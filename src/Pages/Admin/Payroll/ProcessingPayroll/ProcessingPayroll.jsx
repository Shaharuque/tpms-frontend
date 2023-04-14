import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Nav } from "rsuite";

const ProcessingPayroll = () => {
  return (
    <>
      <h1 className="text-[17px] font-semibold mb-5 text-orange-400">
        Payroll
      </h1>
      <div className="container mx-auto mb-5 mt-5 widthfix">
        <Nav appearance="tabs" justified className="mt-5 mb-5">
          <NavLink
            className={(navinfo) =>
              navinfo.isActive
                ? "rs-nav-item rs-nav-item-active font-medium text-[14px]"
                : "rs-nav-item text-[14px] font-medium"
            }
            to={"process-payroll"}
          >
            Processing Payroll
            <span className="bg-orange-400 badge text-white ml-2 rounded-full text-[10px]">
              step-1
            </span>
          </NavLink>

          <NavLink
            className={(navinfo) =>
              navinfo.isActive
                ? "rs-nav-item rs-nav-item-active font-medium text-[14px]"
                : "rs-nav-item text-[14px] font-medium"
            }
            to={"submit-payroll"}
          >
            Payroll Submission
            <span className="bg-orange-400 badge text-white ml-2 text-[10px] rounded-full">
              step-2
            </span>
          </NavLink>

          <NavLink
            className={(navinfo) =>
              navinfo.isActive
                ? "rs-nav-item rs-nav-item-active font-medium text-[14px]"
                : "rs-nav-item text-[14px] font-medium"
            }
            to={"completed-payroll"}
          >
            Processed Payroll
            <span className="bg-orange-400 badge text-white ml-2 text-[10px] rounded-full">
              step-3
            </span>
          </NavLink>
        </Nav>
        {/* <hr className="mb-5"></hr> */}
        <Outlet />
      </div>
    </>
  );
};

export default ProcessingPayroll;
