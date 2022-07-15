import React, { useState } from "react";
import DatePicker from "react-multi-date-picker";
import SimpleFileUpload from "react-simple-file-upload";

const ERemittance = () => {
  const [file, setFile] = useState();
  const [file2, setFile2] = useState();

  console.log(file);

  return (
    <div className="h-[100vh]">
      <h1 className="text-lg mb-5 text-orange-400">E-Remittance</h1>
      <div className="flex flex-wrap justify-around items-center">
        <SimpleFileUpload
          apiKey={`b7deee9a71131791da71b4a74e6169c2`}
          onSuccess={setFile}
        />
        <button className=" py-2 mt-7 px-3 ml-3 text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md">
          Import ERA
        </button>
        <SimpleFileUpload
          apiKey={`b7deee9a71131791da71b4a74e6169c2`}
          onSuccess={setFile2}
        />
      </div>
      <div className="flex flex-wrap justify-around items-center my-5 text-sm font-semibold">
        <div className="">
          <h4>Billed Amount :</h4>
          <h4>Amount Denied :</h4>
        </div>
        <div>
          <h4>Adjusted Amount :</h4>
          <h4>Net Payable :</h4>
        </div>
        <div>
          <h4>Pat Res Amount :</h4>
          <h4>Total Check Amount :</h4>
        </div>
      </div>
    </div>
  );
};

export default ERemittance;
