import React from "react";
import PayorExistingTable from "./PayorExistingTable/PayorExistingTable";
import PayorInfo from "./PayorInfo/PayorInfo";

const Payor = () => {
  return (
    <div className="sm:h-[100vh]">
      <div className="md:flex mb-2 items-center justify-between">
        <h1 className="text-lg my-2 font-medium text-orange-400">
          Add/Edit Payor
        </h1>

        <div>
          {/* <!-- The button to open modal --> */}
          <label htmlFor="pay-box" className="">
            <button className=" pms-button mr-2">+ Add New Payor</button>
          </label>
        </div>
      </div>
      <PayorInfo></PayorInfo>
      <div className="bg-gray-200 py-[1px] mt-3"></div>
      <PayorExistingTable></PayorExistingTable>
    </div>
  );
};

export default Payor;
