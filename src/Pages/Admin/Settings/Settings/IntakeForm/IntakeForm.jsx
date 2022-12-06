import React, { useState } from "react";
import { ImDownload } from "react-icons/im";

const IntakeForm = () => {
  const [file, setFile] = useState("");
  const handleFile = (e) => {
    console.log(e);
    setFile(e.target.value);
  };
  const handleDelete = () => {
    // setFile("");
  };
  // console.log(file);
  return (
    <>
      <div className="flex items-center gap-1">
        <div className=" ">
          <label className="label">
            <span className=" label-font">Browse Intake Form</span>
          </label>
          <input
            type="file"
            onChange={(e) => handleFile(e)}
            className=" rounded-sm ml-1 mt-2 text-sm"
          />
        </div>
        <div className="mt-3">
          <div className=" flex items-end justify-start gap-3 mt-6">
            <button className=" pms-button " type="submit">
              Upload
            </button>

            <button className="pms-close-button" onClick={handleDelete}>
              Delete
            </button>
          </div>
          {/* submit  */}
        </div>
      </div>
      <div>
        {" "}
        <div className="text-green-500 green-box my-3 border border-gray-300 rounded-sm px-3 font-medium py-[10px]  text-xs w-full flex justify-between items-center gap-2">
          <span className="flex items-center gap-6">
            Download Intake Form.
            <button>
              <ImDownload className=" text-primary text-base" />
            </button>
          </span>
        </div>
      </div>
    </>
  );
};

export default IntakeForm;
