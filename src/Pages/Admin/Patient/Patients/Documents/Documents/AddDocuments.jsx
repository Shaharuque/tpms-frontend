import { Modal } from "antd";
import React from "react";
import { useForm } from "react-hook-form";
import { IoCloseCircleOutline } from "react-icons/io5";

const AddDocuments = ({ handleClose, open }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div>
      <Modal
        // fullScreen={fullScreen}
        open={open}
        centered
        width={600}
        footer={false}
        closable={false}
        bodyStyle={{ padding: "0" }}
        className="box rounded-md"
      >
        <div className="px-5 py-2 ">
          <div className="flex items-center justify-between">
            <h1 className="text-lg text-left text-orange-400 ">
              Edit Document
            </h1>
            <IoCloseCircleOutline
              onClick={handleClose}
              className="text-gray-600 font-semibold  text-2xl hover:text-primary"
            />
          </div>

          <div className="bg-gray-200 py-[1px] mt-3"></div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 my-3 mr-2 gap-x-2 gap-y-1">
              <div>
                <label className="label">
                  <span className="label-text text-xs text-gray-600 font-semibold text-left">
                    Description
                  </span>
                </label>
                <input
                  type="text"
                  name="description"
                  className="border-secondary border-b-2 rounded-sm py-[5px] mx-1 text-xs w-full focus:outline-none"
                  {...register("description")}
                />
              </div>

              <div>
                {" "}
                <label className="label">
                  <span className="label-text text-xs text-gray-600 font-semibold text-left">
                    Expiry Date
                  </span>
                </label>
                <input
                  type="date"
                  // className="border border-gray-300 rounded-sm py-[4px] mx-1 text-xs w-full"
                  className="border-secondary border-b-2 rounded-sm py-[4px] mx-1 text-xs w-full focus:outline-none"
                  {...register("expiry_Date")}
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text text-xs text-gray-600 font-semibold text-left">
                    Upload File
                  </span>
                </label>
                <input
                  type="file"
                  className=" py-[5px] mx-1 text-xs w-full"
                  {...register("fileName")}
                />
              </div>
            </div>
            <div className="bg-gray-200 py-[1px] mt-3"></div>
            <div className=" flex items-end justify-end mt-2">
              <button
                className=" py-[5px] font-normal px-3 mr-1 text-xs  bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-sm"
                type="submit"
              >
                Save
              </button>

              <button
                className=" py-[5px]  px-3  text-xs font-normal bg-gradient-to-r  from-red-700 to-red-400  hover:to-red-700 text-white rounded-sm"
                autoFocus
                onClick={handleClose}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default AddDocuments;