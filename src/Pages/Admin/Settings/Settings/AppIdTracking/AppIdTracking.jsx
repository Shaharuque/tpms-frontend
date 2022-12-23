import React, { useState } from "react";

const AppIdTracking = () => {
  const [aId, setAId] = useState();
  const handleId = (e) => {
    setAId(e.target.value);
  };
  return (
    <div className="p-2">
      <h1 className="text-[17px] mb-2 text-orange-400 font-semibold">
        Track Appointment with Appointment ID
      </h1>
      <div className="flex items-center flex-wrap gap-4">
        <div className=" ">
          <label className="label">
            <span className=" label-font">Appointment ID</span>
          </label>
          <input
            type="text"
            name="middle_name"
            className="input-border input-font py-[2px] w-full focus:outline-none"
            onClick={(e) => handleId(e)}
          />
        </div>
        <div className="">
          <div className=" flex items-end justify-start gap-3 mt-6">
            <button className=" pms-button " type="submit">
              Find
            </button>
          </div>
          {/* submit  */}
        </div>
      </div>
    </div>
  );
};

export default AppIdTracking;
