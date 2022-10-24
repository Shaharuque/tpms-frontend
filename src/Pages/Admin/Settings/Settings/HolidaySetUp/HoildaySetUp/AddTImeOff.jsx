// Good practise of using textarea and focused input box
import { Modal } from "antd";
import React from "react";
import { useForm } from "react-hook-form";
import { IoCloseCircleOutline } from "react-icons/io5";
import TextArea from "antd/lib/input/TextArea";

const AddTImeOff = ({ handleClose, open }) => {
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
              Create Holiday
            </h1>
            <IoCloseCircleOutline
              onClick={handleClose}
              className="text-gray-600 font-semibold  text-2xl hover:text-primary"
            />
          </div>
          <div className="bg-gray-200 py-[1px] mt-3"></div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 2xl:grid-cols-1 my-3 mr-2 gap-x-4 gap-y-2">
              <div>
                <label className="label">
                  <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                    From Date
                  </span>
                </label>
                <input
                  className="border border-gray-300 text-gray-600 rounded-sm  text-[14px] ml-1 font-medium w-full focus:outline-teal-700 py-1 px-2"
                  type="date"
                  {...register("check_Date")}
                />
              </div>
              <div className="">
                <label className="label">
                  <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                    Notes
                  </span>
                </label>
                <TextArea maxLength={2} rows={7} size="medium" />
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

export default AddTImeOff;
