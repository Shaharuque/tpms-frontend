import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import BatchingClaims from "./BillingManager/BatchingClaims";
import ManageClaims from "./BillingManager/ManageClaims";
import ProcessingClaim from "./BillingManager/ProcessingClaim";

const BillingManager = () => {
  const [toggle, setToggle] = useState(1);
  return (
    <Tabs>
      <TabList className=" mb-5 ">
        <div className="flex flex-wrap ">
          <Tab
            onClick={() => setToggle(1)}
            className={
              toggle === 1
                ? "py-2 px-6 active-tab  text-xs text-primary font-normal  shadow-md"
                : "py-2 px-6 text-xs tab-box font-normal "
            }
          >
            Processing Claim(s){" "}
            <span className="bg-orange-400 text-[10px] px-[4px] text-white ml-2 rounded-full">
              Step-1
            </span>
          </Tab>

          <Tab
            onClick={() => setToggle(2)}
            className={
              toggle === 2
                ? "py-2 px-6 active-tab  text-xs text-primary font-normal  shadow-md"
                : "py-2 px-6 font-normal  text-xs tab-box"
            }
          >
            Batching Claim(s){" "}
            <span className="bg-orange-400 ml-2 text-[10px] px-[4px] text-white rounded-full">
              Step-2
            </span>
          </Tab>
          <Tab
            onClick={() => setToggle(3)}
            className={
              toggle === 3
                ? "py-2 px-6 active-tab  text-xs text-primary font-normal  shadow-md"
                : "py-2 px-6 font-normal  text-xs tab-box"
            }
          >
            Manage Claim(s){" "}
            <span className="bg-orange-400 ml-2 text-[10px] px-[4px] text-white rounded-full">
              Step-3
            </span>
          </Tab>
        </div>
      </TabList>

      <TabPanel>
        <ProcessingClaim></ProcessingClaim>
      </TabPanel>
      <TabPanel>
        <BatchingClaims></BatchingClaims>
      </TabPanel>
      <TabPanel>
        <ManageClaims></ManageClaims>
      </TabPanel>
    </Tabs>
  );
};

export default BillingManager;
