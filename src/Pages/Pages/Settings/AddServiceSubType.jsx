import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import AddServiceSubTypeTab from "./AddServiceSubType/AddServiceSubTypeTab";

const AddServiceSubType = () => {
  const [toggle, setToggle] = useState(1);
  return (
    <Tabs>
      <TabList className=" mb-5 ">
        <div className="flex flex-wrap  border">
          <Tab
            onClick={() => setToggle(1)}
            className={
              toggle === 1
                ? "py-2 px-6 active-tab  text-sm text-primary shadow-md"
                : "py-2 px-6 text-sm tab-box"
            }
          >
            Service/Activity Sub Types
          </Tab>

          {/* <Tab
            onClick={() => setToggle(2)}
            className={
              toggle === 2
                ? "py-2 px-6 active-tab  text-sm text-primary shadow-md"
                : "py-2 px-6  text-sm tab-box"
            }
          >
            Tab 2
          </Tab> */}
        </div>
      </TabList>

      <TabPanel>
        <AddServiceSubTypeTab></AddServiceSubTypeTab>
      </TabPanel>
    </Tabs>
  );
};

export default AddServiceSubType;
