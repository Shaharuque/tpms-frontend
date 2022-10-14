import { Modal } from "antd";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { IoCloseCircleOutline } from "react-icons/io5";

const PatientLedgerActionModal = ({ handleClose, open, row }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  console.log(row);
  useEffect(() => {
    setTimeout(() => {
      reset({
        // description: `${row.original.description}`,
        // expiry_Date: `${row.original.upload_date}`,
      });
    }, 500);
  }, [reset, row]);
  return (
    <div>
      <div>
        <Modal
          // fullScreen={fullScreen}
          open={open}
          centered
          width={500}
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
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 my-5 mr-2 gap-1">
                <label className="label">
                  <span className="label-text text-xs text-gray-600 font-medium text-left">
                    Description
                  </span>
                </label>
                <select
                  className="border border-gray-300   col-span-2 rounded-sm px-2 py-[1px] mx-1 text-xs w-full"
                  {...register("patients")}
                >
                  <option value=""></option>
                  <option value="single">single</option>
                  <option value="married">married</option>
                </select>
                <label className="label">
                  <span className="label-text text-xs text-gray-600 font-medium text-left">
                    Follow Up Date
                  </span>
                </label>
                <div className=" col-span-2">
                  <input
                    type="date"
                    className="border border-gray-300 rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                    {...register("follow_Date")}
                  />
                </div>
                <label className="label">
                  <span className="label-text text-xs text-gray-600 font-medium text-left">
                    Worked Date
                  </span>
                </label>
                <div className=" col-span-2">
                  <input
                    type="date"
                    className="border border-gray-300 rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                    {...register("worked_Date")}
                  />
                </div>
                <label className="label">
                  <span className="label-text text-xs text-gray-600 font-medium text-left">
                    Notes
                  </span>
                </label>
                <div className=" col-span-2">
                  <textarea
                    name="comment"
                    className="border border-gray-300 text-sm p-1  ml-1 h-24 w-full"
                  ></textarea>
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
    </div>
  );
};

export default PatientLedgerActionModal;
