import React, { useState } from "react";
import CustomFileUploader from "../../../Shared/CustomComponents/CustomFileUploader";

const ERemittance = () => {
  const [file, setFile] = useState("");
  const [file2, setFile2] = useState("");

  console.log(file);
  console.log(file2);

  return (
    <div className="h-[100vh]">
      <h1 className="text-lg mb-5 text-orange-400">E-Remittance</h1>
      <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3  gap-x-6 gap-y-4 ">
        <div className="mx-auto">
          <CustomFileUploader
            signatureUpload={file}
            setSignatureUpload={setFile}
          ></CustomFileUploader>
          <div className="flex justify-center items-center">
            <h1 className="text-xs">Upload 835</h1>
          </div>
        </div>
        <div className="mx-auto">
          <button className="pms-button">Import ERA</button>
        </div>
        <div className="mx-auto">
          <CustomFileUploader
            signatureUpload={file2}
            setSignatureUpload={setFile2}
          ></CustomFileUploader>
          <div className="flex justify-center items-center">
            <h1 className="text-xs">Upload ERA text</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ERemittance;
