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
        <div>
          <label className="label">
            <span className="label-text text-xs text-gray-500 text-left">
              File Type
            </span>
          </label>
          <select
            onChange={(e) => {
              setFileType(e.target.value);
            }}
            name="fileType"
            className="border rounded-sm px-2 w-36 py-1 text-xs"
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
          <div>
            <select
              onChange={(e) => setService(e.target.value)}
              name="type"
              className="border rounded-sm px-2 w-36 py-[6px] text-xs "
            >
              <option value="process era">Process ERA</option>
              <option value="reviewed">Reviewed</option>
              <option value="unreviewed">Unreviewed</option>
            </select>
            <button
              // onClick={submitHandle}
              className="px-5 mt-7 ml-4 text-sm py-1 bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
            >
              Save
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default EraManager;
