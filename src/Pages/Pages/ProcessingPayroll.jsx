import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import PayrollSubmission from "./Payroll/PayrollSubmission";
import ProcessingPAyroll from "./Payroll/ProcessingPAyroll";
import { NavLink, Outlet } from "react-router-dom";
import { Nav } from "rsuite";

const ProcessingPayroll = () => {
  const [toggle, setToggle] = useState(1);
  return (
    <>
      <h1 className="text-sm mb-5 text-orange-400">Payroll</h1>
      <div className="container mx-auto mb-5 mt-5">
      <Nav appearance="tabs" justified className="mt-5 mb-5">
        <NavLink
          className={(navinfo) =>
            navinfo.isActive
              ? "rs-nav-item rs-nav-item-active font-normal text-xs"
              : "rs-nav-item text-xs font-normal"
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
              ? "rs-nav-item rs-nav-item-active font-normal text-xs"
              : "rs-nav-item text-xs font-normal"
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
              ? "rs-nav-item rs-nav-item-active font-normal text-xs"
              : "rs-nav-item text-xs font-normal"
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

      {/* <Tabs>
        <TabList className=" mb-5 ">
          <div className="flex flex-wrap ">
            <Tab
              onClick={() => setToggle(1)}
              className={
                toggle === 1
                  ? "py-2 px-6  text-sm text-primary font-normal  shadow-md"
                  : "py-2 px-6 text-sm tab-box font-normal "
              }
            >
              Processing Payroll
            </Tab>

            <Tab
              onClick={() => setToggle(2)}
              className={
                toggle === 2
                  ? "py-2 px-6   text-sm text-primary font-normal  shadow-md"
                  : "py-2 px-6 font-normal  text-sm tab-box"
              }
            >
              Payroll Submission and Check issued
            </Tab>
          </div>
        </TabList>

        <TabPanel>
          <ProcessingPAyroll></ProcessingPAyroll>
        </TabPanel>
        <TabPanel>
          <PayrollSubmission></PayrollSubmission>
        </TabPanel>
      </Tabs> */}
      
    </>
  );
};

export default ProcessingPayroll;
