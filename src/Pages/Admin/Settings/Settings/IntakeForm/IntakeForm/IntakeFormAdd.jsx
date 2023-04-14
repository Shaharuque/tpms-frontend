import { Modal } from "antd";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { IoCloseCircleOutline } from "react-icons/io5";

const IntakeFormAdd = ({ open, handleAddDocClose }) => {
  const { register, handleSubmit, reset } = useForm();
  const [file, setFile] = useState("");
  const handleFile = (e) => {
    console.log(e);
    setFile(e.target.value);
  };

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div>
      <Modal
        open={open}
        centered
        footer={null}
        bodyStyle={{ padding: "0" }}
        closable={false}
        className="box rounded-xl"
      >
        <div className="p-2">
          <div className="flex items-center justify-between">
            <h1 className="text-lg text-left text-orange-400 ">Add Intake</h1>
            <IoCloseCircleOutline
              onClick={handleAddDocClose}
              className="text-gray-600 text-2xl hover:text-primary"
            />
          </div>
          <div className="bg-gray-200 py-[1px] mt-3"></div>
          <div className="flex flex-wrap items-center gap-1">
            <div className=" ">
              <label className="label">
                <span className="text-gray-600">Browse Intake Form</span>
              </label>
              <input
                type="file"
                onChange={(e) => handleFile(e)}
                className=" rounded-sm ml-1 mt-2 text-sm"
              />
            </div>
          </div>
          <div className="bg-gray-200 py-[1px] mt-3"></div>
          <div className=" flex items-end justify-end mt-2">
            <button className=" pms-button mr-2" type="submit">
              Upload
            </button>

            <button className="pms-close-button" onClick={handleAddDocClose}>
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default IntakeFormAdd;
