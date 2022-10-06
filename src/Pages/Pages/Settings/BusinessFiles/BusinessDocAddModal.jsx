import { Modal } from "antd";
import React from "react";
import { useForm } from "react-hook-form";

const BusinessDocAddModal = ({ open, handleAddDocClose }) => {
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
          <h1 className="text-lg text-left text-orange-400">Add Document</h1>
          <div className="divider mt-0"></div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex items-center gap-3 text-sm">
              <div>
                <label className="label">
                  <span className="label-text text-sm text-gray-600 text-left font-bold">
                    Description
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Description"
                  name="description"
                  className="border rounded-sm px-2 py-1 mx-1 text-sm w-full"
                  {...register("description")}
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text text-sm text-gray-600 text-left font-bold">
                    Upload File
                  </span>
                </label>
                <input
                  type="file"
                  className=" py-[5px] mx-1 text-sm w-full"
                  {...register("new_file")}
                />
              </div>
            </div>
            <div className="divider mb-0"></div>
            <div className="flex justify-end">
              {/* <input type="submit" /> */}
              <button
                className=" py-[5px] px-3 text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
                type="submit"
              >
                Upload
              </button>
              <button
                className="py-[5px] px-3 ml-3 text-xs font-normal bg-gradient-to-r  from-red-700 to-red-400  hover:to-red-700 text-white rounded-md"
                autoFocus
                onClick={handleAddDocClose}
              >
                CANCEL
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default BusinessDocAddModal;
