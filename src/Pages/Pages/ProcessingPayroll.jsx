import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import PayrollSubmission from "./Payroll/PayrollSubmission";
import ProcessingPAyroll from "./Payroll/ProcessingPAyroll";

const ProcessingPayroll = () => {
  const [toggle, setToggle] = useState(1);
  return (
    <>
      <h1 className="text-sm mb-5 text-orange-400">Payroll</h1>
      <Tabs>
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
      </Tabs>
    </>
  );
};

export default ProcessingPayroll;
