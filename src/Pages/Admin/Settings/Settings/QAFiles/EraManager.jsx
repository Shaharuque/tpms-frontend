import React, { useState } from "react";
import EDI from "./QAFile/EDI";
import ERA from "./QAFile/ERA";

const EraManager = () => {
  const [service, setService] = useState("");
  const [fileType, setFileType] = useState("");
  const [tableOpen, setTableOpen] = useState(false);

  const handleFileType = () => {
    if (fileType) {
      setTableOpen(true);
    }
  };

  // console.log(selectedFlatRows);

  return (
    <div className="h-[100vh]">
      <h1 className="text-lg my-2 text-orange-400">OA Files</h1>
      <div className="flex flex-wrap items-center my-3">
        <div className="w-1/2 md:w-[10%]">
          <label className="label">
            <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
              File Type
            </span>
          </label>
          <select
            onChange={(e) => {
              setFileType(e.target.value);
            }}
            name="fileType"
            className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1 py-[1px] w-full focus:outline-none"
          >
            <option value=""></option>
            <option value="ERA">ERA</option>
            <option value="EDI">EDI</option>
          </select>
        </div>
        <button
          onClick={handleFileType}
          className=" py-[5px] mt-8 ml-3  px-3 text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
        >
          GO
        </button>
      </div>
      {tableOpen && (
        <>
          {fileType === "ERA" ? <ERA></ERA> : <EDI></EDI>}
          <div className="flex items-center">
            <select
              onChange={(e) => setService(e.target.value)}
              name="type"
              className="input-border text-gray-600 rounded-sm mt-8 text-[14px] font-medium ml-1 py-[1px] w-1/2 md:w-[10%] focus:outline-none"
            >
              <option value="process era">Process ERA</option>
              <option value="reviewed">Reviewed</option>
              <option value="unreviewed">Unreviewed</option>
            </select>

            <button
              // onClick={submitHandle}
              className="px-3 mt-7 ml-4 text-sm py-1 bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
            >
              Go
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default EraManager;