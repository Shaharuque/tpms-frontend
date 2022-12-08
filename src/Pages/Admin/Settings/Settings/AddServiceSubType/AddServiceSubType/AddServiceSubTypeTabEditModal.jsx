import * as React from "react";
import { useForm } from "react-hook-form";
import { Modal } from "antd";
import { IoCloseCircleOutline } from "react-icons/io5";
export default function AddServiceSubTypeTabEditModal({
  handleClose,
  open,
  row,
}) {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  console.log("row", row);
  return (
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
              Add/Edit Service Sub Type
            </h1>
            <IoCloseCircleOutline
              onClick={handleClose}
              className="text-gray-600 font-semibold  text-2xl hover:text-primary"
            />
          </div>
          <div className="bg-gray-200 py-[1px] mt-3"></div>
          {row ? (
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* <div className="flex items-center text-sm gap-5"> */}
              <div className="">
                <div>
                  <label className="label">
                    <span className="modal-label-name">Description</span>
                  </label>
                  <input
                    value={row.last_name}
                    type="text"
                    placeholder="Description"
                    name="description"
                    className="modal-input-field ml-1 w-full"
                    {...register("description")}
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
          ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* <div className="flex items-center text-sm gap-5"> */}
              <div className="">
                <div>
                  <label className="label">
                    <span className="modal-label-name">Description</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Description"
                    name="description"
                    className="modal-input-field ml-1 w-full"
                    {...register("description")}
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
          )}
        </div>
      </Modal>
    </div>
  );
}
