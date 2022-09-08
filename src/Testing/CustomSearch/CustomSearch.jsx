import React from "react";
import { useState } from "react";

const CustomSearch = () => {
  const [clicked, setClicked] = useState(false);
  const [loader, setLoader] = useState(false);
  const clickHandler = () => {
    setClicked(true);
  };
  const handleClose = () => {
    setClicked(!clicked);
  };
  return (
    <div>
      <div className="cursor-pointer">
        <div className="bg-gradient-to-r from-secondary via-cyan-800 to-cyan-900">
          <div onClick={clickHandler} className=" px-4 flex items-center h-8">
            {/* <button
              onClick={() => setLoader(true)}
              className="bg-teal-600 px-2 text-white rounded-lg text-sm"
            >
              {loader ? <h1>Loading</h1> : "Search"}
            </button> */}
            <h1 className="text-lg my-1 ">Manage Sessions</h1>
          </div>
          {/* Upper div */}
          {clicked && (
            <div className=" p-4 flex justify-end">
              <div>
                <button
                  onClick={handleClose}
                  className="text-white border border-black rounded-lg"
                >
                  X
                </button>
              </div>
            </div>
          )}

          {/* Lower Div */}
          {/* {clicked && (
            <div className=" p-4 flex justify-between">
              <div className="flex flex-col">
                <label className="text-xs text-white">Name</label>
                <input
                  className="w-64 border-0 bg-[transparent] text-white"
                  type="text"
                  placeholder="Select Patient"
                />
              </div>
              <div></div>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default CustomSearch;
