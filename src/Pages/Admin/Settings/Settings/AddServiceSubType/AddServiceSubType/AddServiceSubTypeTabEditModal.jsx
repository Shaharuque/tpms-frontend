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
  // console.log("row", row.original.place_of_Service);
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
                    <span className="text-sm">Description</span>
                  </label>
                  <input
                    value={row.original.place_of_Service}
                    type="text"
                    placeholder="Description"
                    name="description"
                    className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
                    {...register("description")}
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
          ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* <div className="flex items-center text-sm gap-5"> */}
              <div className="">
                <div>
                  <label className="label">
                    <span className="text-sm">Description</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Description"
                    name="description"
                    className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
                    {...register("description")}
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
          )}
        </div>
      </Modal>
    </div>
  );
}
