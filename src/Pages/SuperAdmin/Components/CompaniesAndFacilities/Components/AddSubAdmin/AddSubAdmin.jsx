import { Modal } from "antd";
import React from "react";
import { useForm } from "react-hook-form";
import { IoCloseCircleOutline } from "react-icons/io5";

const AddSubAdmin = ({ handleClose, open }) => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    // reset();
  };
  return (
    <div>
      {" "}
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
              Create Sub Admin
            </h1>
            <IoCloseCircleOutline
              onClick={handleClose}
              className="text-gray-600 font-semibold  text-2xl hover:text-primary"
            />
          </div>

          <div className="bg-gray-200 py-[1px] mt-3"></div>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* <div className=" flex items-center flex-wrap  my-5 mr-2 gap-6"> */}
            <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 my-3 mr-2 gap-x-2 gap-y-1">
              {/* name  */}
              <div>
                <label className="label">
                  <span className="modal-label-name">Facility</span>
                </label>
                <select
                  className="col-span-2 modal-input-field ml-1 w-full"
                  {...register("Facility")}
                >
                  <option value=""></option>
                  <option value="single">single</option>
                  <option value="married">married</option>
                </select>
              </div>
              <div>
                <label className="label">
                  <span className="modal-label-name">Select Admin(*)</span>
                </label>
                <select
                  className="col-span-2 modal-input-field ml-1 w-full"
                  {...register("adin")}
                >
                  <option value=""></option>
                  <option value="single">single</option>
                  <option value="married">married</option>
                </select>
              </div>
              {/* First_Name 1 */}
              <div>
                <label className="label">
                  <span className="modal-label-name">First Name</span>
                </label>
                <input
                  type="text"
                  name="First_Name"
                  className="modal-input-field ml-1 w-full"
                  {...register("First_Name")}
                />
              </div>
              <div>
                <label className="label">
                  <span className="modal-label-name">Last Name</span>
                </label>
                <input
                  type="text"
                  name="Last_Name"
                  className="modal-input-field ml-1 w-full"
                  {...register("Last_Name")}
                />
              </div>
              <div>
                <label className="label">
                  <span className="modal-label-name">Account Email</span>
                </label>
                <input
                  type="text"
                  name="Acount_email"
                  className="modal-input-field ml-1 w-full"
                  {...register("Acount_email")}
                />
              </div>
              <div>
                <label className="label">
                  <span className="modal-label-name">Password (*)</span>
                </label>
                <input
                  type="number"
                  name="Password (*)"
                  className="modal-input-field ml-1 w-full"
                  {...register("Password (*)")}
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

export default AddSubAdmin;
