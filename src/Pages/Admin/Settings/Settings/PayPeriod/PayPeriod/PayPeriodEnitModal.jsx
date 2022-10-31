import { Modal } from "antd";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { IoCloseCircleOutline } from "react-icons/io5";

const PayPeriodEnitModal = ({ handleClose, open }) => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  //   console.log(editableRow);
  useEffect(() => {
    setTimeout(() => {
      reset({
        // description: `${row.original.description}`,
        // expiry_Date: `${row.original.upload_date}`,
      });
    }, 500);
  }, [reset]);
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
              Create/Edit Pay Period
            </h1>
            <IoCloseCircleOutline
              onClick={handleClose}
              className="text-gray-600 font-semibold  text-2xl hover:text-primary"
            />
          </div>
          <div className="bg-gray-200 py-[1px] mt-3"></div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-3 my-3 mr-2 gap-x-4 gap-y-4">
              <div>
                <label className="label">
                  <span className="modal-label-name">From Date</span>
                </label>
                <input
                  className="modal-input-field ml-1 w-full"
                  type="date"
                  {...register("check_Date")}
                />
              </div>
              <div>
                <label className="label">
                  <span className="modal-label-name">End Date</span>
                </label>
                <input
                  className="modal-input-field ml-1 w-full"
                  type="date"
                  {...register("check_Date")}
                />
              </div>
              <div>
                <label className="label">
                  <span className="modal-label-name">Check Date</span>
                </label>
                <input
                  className="modal-input-field ml-1 w-full"
                  type="date"
                  {...register("check_Date")}
                />
              </div>
              <div className="col-span-2">
                <label className="label">
                  <span className="modal-label-name">
                    After how many days staff can't submit time sheet?
                  </span>
                </label>
                <input
                  className="modal-input-field ml-1 w-full"
                  type="number"
                  {...register("time_sheet")}
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
  );
};

export default PayPeriodEnitModal;
