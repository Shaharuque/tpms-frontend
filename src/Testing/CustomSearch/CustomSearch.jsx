import React from "react";
import { useState } from "react";
import CustomCard from "./CustomCard";

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
    <div className="bg-white">
      <div className="cursor-pointer">
        {/* Upper div */}
        {clicked && (
          <div className="bg-[#089BAB] p-4 flex justify-between">
            <div className="flex flex-col">
              <label className="text-xs text-white">Name</label>
              <input
                className="w-64 border-0 bg-[transparent] text-white"
                type="text"
                placeholder="Select Patient"
              />
            </div>
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

        <div
          onClick={clickHandler}
          className="bg-[#089BAB] px-4 flex items-center h-8"
        >
          <button
            onClick={() => setLoader(true)}
            className="bg-teal-600 px-2 text-white rounded-lg text-sm"
          >
            {loader ? <h1>Loading</h1> : "Search"}
          </button>
        </div>

        {/* Lower Div */}
        {clicked && (
          <div className="bg-[#089BAB] p-4 flex justify-between">
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
        )}
      </div>
      <CustomCard></CustomCard>
    </div>
    // <div className="w-full bg-gradient-to-r from-secondary to-primary">
    //   <div className=""></div>
    //   <form>
    //     {/* radio button */}
    //     <div>
    //       <input type="radio" name="" id="" className="pr-[5px]" />
    //       <label htmlFor="radio">One Way</label>
    //     </div>
    //   </form>
    // </div>
  );
};

export default CustomSearch;
