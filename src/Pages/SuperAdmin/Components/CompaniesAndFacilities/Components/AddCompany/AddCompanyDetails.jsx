import { Modal } from "antd";
import React from "react";
import { useForm } from "react-hook-form";
import { IoCloseCircleOutline } from "react-icons/io5";

const AddCompanyDetails = ({ handleClose, open }) => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div>
      {" "}
      <Modal
        // fullScreen={fullScreen}
        open={open}
        centered
        width={800}
        footer={false}
        closable={false}
        bodyStyle={{ padding: "0" }}
        className="box rounded-md"
      >
        <div className="px-5 py-2 ">
          <div className="flex items-center justify-between">
            <h1 className="text-lg text-left text-orange-400 ">
              Company details
            </h1>
            <IoCloseCircleOutline
              onClick={handleClose}
              className="text-gray-600 font-semibold  text-2xl hover:text-primary"
            />
          </div>

          <div className="bg-gray-200 py-[1px] mt-3"></div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" flex items-center gap-x-2">
              <input type="checkbox" name="active" {...register("active")} />
              <label className="label">
                <span className="modal-label-name">Active</span>
              </label>
            </div>
            {/* <div className=" flex items-center flex-wrap  my-5 mr-2 gap-6"> */}
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-3 mr-2 gap-x-2 gap-y-1">
              {/* name  */}
              <div>
                <label className="label">
                  <span className="modal-label-name">
                    Name <span className="text-rose-500">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  name="payor_name"
                  className="modal-input-field ml-1 w-full"
                  {...register("payor_name")}
                />
              </div>

              {/* address 1 */}
              <div>
                <label className="label">
                  <span className="modal-label-name">
                    Address <span className="text-rose-500">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  name="address"
                  className="modal-input-field ml-1 w-full"
                  {...register("address")}
                />
              </div>
              <div>
                <label className="label">
                  <span className="modal-label-name">
                    City <span className="text-rose-500">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  name="city"
                  className="modal-input-field ml-1 w-full"
                  {...register("city")}
                />
              </div>
              <div>
                <label className="label">
                  <span className="modal-label-name">
                    State <span className="text-rose-500">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  name="state"
                  className="modal-input-field ml-1 w-full"
                  {...register("state")}
                />
              </div>
              <div>
                <label className="label">
                  <span className="modal-label-name">
                    Zip <span className="text-rose-500">*</span>
                  </span>
                </label>
                <input
                  type="number"
                  name="zip"
                  className="modal-input-field ml-1 w-full"
                  {...register("zip")}
                />
              </div>
              {/* phone*/}
              <div>
                <label className="label">
                  <span className="modal-label-name">
                    Phone <span className="text-rose-500">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  name="Phone"
                  className="modal-input-field ml-1 w-full"
                  {...register("Phone")}
                />
              </div>
              {/* Email*/}
              <div>
                <label className="label">
                  <span className="modal-label-name">
                    Email <span className="text-rose-500">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  name="Email"
                  className="modal-input-field ml-1 w-full"
                  {...register("Email")}
                />
              </div>
              {/* Web_Address*/}
              <div>
                <label className="label">
                  <span className="modal-label-name">Web Site</span>
                </label>
                <input
                  type="text"
                  name="Web_Address"
                  className="modal-input-field ml-1 w-full"
                  {...register("Web_Address")}
                />
              </div>
            </div>

            <div className="bg-gray-200 py-[1px] mt-3"></div>
            <div className=" flex items-end justify-end mt-3">
              <button className=" pms-button mr-2" type="submit">
                Save Company Details
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

export default AddCompanyDetails;
