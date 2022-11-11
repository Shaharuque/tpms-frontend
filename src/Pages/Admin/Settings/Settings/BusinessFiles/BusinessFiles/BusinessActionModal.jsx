import * as React from "react";
import { useForm } from "react-hook-form";
import { Modal } from "antd";
import { IoCloseCircleOutline } from "react-icons/io5";
export default function BusinessActionModal({ handleClose, open }) {
  const { register, handleSubmit, reset } = useForm();

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
            <h1 className="text-lg text-left text-orange-400 ">
              Edit Document
            </h1>
            <IoCloseCircleOutline
              onClick={handleClose}
              className="text-gray-600 text-2xl hover:text-primary"
            />
          </div>
          <div className="bg-gray-200 py-[1px] mt-3"></div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex items-center gap-3 text-sm">
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

              <div>
                <label className="label">
                  <span className="modal-label-name">Upload File</span>
                </label>
                <input
                  type="file"
                  className=" py-[5px] mx-1 text-sm w-full"
                  {...register("fileName")}
                />
              </div>
            </div>
            <div className="bg-gray-200 py-[1px] mt-3"></div>
            <div className=" flex items-end justify-end mt-2">
              <button className=" pms-button mr-2" type="submit">
                Upload
              </button>

              <button className="pms-close-button" onClick={handleClose}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}
