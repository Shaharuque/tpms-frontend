import { Modal } from "antd";
import React from "react";
import { useForm } from "react-hook-form";
import { IoCloseCircleOutline } from "react-icons/io5";

const EditCallLog = ({ handleClose, open }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <div>
        <Modal
          // fullScreen={fullScreen}
          open={open}
          centered
          width={450}
          footer={false}
          closable={false}
          bodyStyle={{ padding: "0" }}
          className="box rounded-md"
        >
          <div className="px-5 py-2 ">
            <div className="flex items-center justify-between">
              <h1 className="text-lg text-left text-orange-400 ">
                Add Call Log
              </h1>
              <IoCloseCircleOutline
                onClick={handleClose}
                className="text-gray-600 font-semibold  text-2xl hover:text-primary"
              />
            </div>

            <div className="bg-gray-200 py-[1px] mt-3"></div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className=" grid grid-cols-1 my-3 mr-2 gap-x-2 gap-y-1">
                <div>
                  <label className="label">
                    <span className="modal-label-name">Write Log Here:</span>
                  </label>
                  <textarea
                    {...register("notes")}
                    // onChange={(e) => setTextNotes(e.target.value)}
                    name="comment"
                    className="border border-gray-300 text-sm p-2  ml-1 h-24 w-full"
                  ></textarea>
                </div>

                <div>
                  <label className="label">
                    <span className="modal-label-name">Date</span>
                  </label>
                  <input
                    type="date"
                    // className="border border-gray-300 rounded-sm py-[4px] mx-1 text-xs w-full"
                    className="modal-input-field ml-1 w-full"
                    {...register("expiry_Date")}
                  />
                </div>
              </div>
              <div className="bg-gray-200 py-[1px] mt-3"></div>
              <div className=" flex items-end justify-end mt-2">
                <button className=" pms-button mr-2" type="submit">
                  Save
                </button>

                <button className="pms-close-button" onClick={handleClose}>
                  Close
                </button>
              </div>
            </form>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default EditCallLog;
