import { Modal, Switch } from "antd";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { IoCloseCircleOutline } from "react-icons/io5";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const CreatePatient = ({ handleClose, patientClicked }) => {
  const [active, setActive] = useState(false);
  const [phone, setPhone] = useState();
  console.log(patientClicked);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div>
      <Modal
        open={patientClicked} //aikhaney true na likey ekta state ana lagbey tar value 'true'
        centered
        footer={null}
        bodyStyle={{ padding: "0" }}
        width={500}
        closable={false}
        className="box rounded-xl "
      >
        <div className="px-5 py-2">
          <div className="flex items-center justify-between">
            <h1 className="text-lg text-left text-orange-400">
              Create Patient
            </h1>
            <div className="flex item-center gap-2">
              <div className="flex items-center gap-2">
                <Switch
                  color="default"
                  defaultChecked
                  size="small"
                  // onClick={handleBillable}
                />
                <label
                  className="form-check-label inline-block mt-[2px] text-sm"
                  htmlFor="flexSwitchCheckDefault"
                >
                  Email invaitation
                </label>
              </div>
              <IoCloseCircleOutline
                onClick={handleClose}
                className="text-gray-500 text-2xl hover:text-primary"
              />
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mb-1 mr-2 gap-1">
              <div>
                <label className="label">
                  <span className="modal-label-name">
                    First Name<span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  name="first_name"
                  className="modal-input-field ml-1 w-full"
                  {...register("first_name")}
                />
              </div>
              <div>
                <label className="label">
                  <span className="modal-label-name">
                    Last Name<span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  name="last_name"
                  className=" modal-input-field ml-1 w-full"
                  {...register("last_name")}
                />
              </div>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 my-1 mr-2 gap-1">
              <div>
                <label className="label">
                  <span className="modal-label-name">
                    DOB<span className="text-red-500">*</span>
                  </span>
                </label>

                <input
                  className=" modal-input-field ml-1 w-full"
                  name="dob"
                  type="date"
                  {...register("dob")}
                />
              </div>
              <div>
                <label className="label">
                  <span className="modal-label-name">
                    Gender<span className="text-red-500">*</span>
                  </span>
                </label>
                <select
                  className=" modal-input-field ml-1 w-full"
                  {...register("gender")}
                >
                  <option value=""></option>
                  <option value="single">single</option>
                  <option value="married">married</option>
                </select>
              </div>
              <div>
                <label className="label">
                  <span className="modal-label-name">
                    POS<span className="text-red-500">*</span>
                  </span>
                </label>
                <select
                  className="modal-input-field ml-1 w-full"
                  {...register("pos")}
                >
                  <option value=""></option>
                  <option value="single">single</option>
                  <option value="married">married</option>
                </select>
              </div>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-1 mr-2  gap-1">
              <div>
                <label className="label">
                  <span className="modal-label-name flex items-center gap-1">
                    Email Address
                    <AiOutlineQuestionCircle className="text-sm" />
                  </span>
                </label>
                <div className="flex items-center">
                  <input
                    type="text"
                    name="email_Address"
                    className="modal-input-field ml-1 w-3/4"
                    {...register("email_Address")}
                  />
                  <div>
                    <select
                      className="modal-input-field ml-1 w-full"
                      {...register("email")}
                    >
                      <option value=""></option>
                      <option value="work">Work</option>
                      <option value="home">Home</option>
                    </select>
                  </div>
                </div>
                <div className="flex ml-1 mt-2 items-center">
                  <input
                    type="checkbox"
                    // checked={value ? true : false}
                    name="patient"
                    // onClick={() => {
                    //   setValue(!value);
                    // }}
                  />{" "}
                  <span className="text-xs ml-1 text-gray-600 font-medium">
                    Send me an email reminder
                  </span>
                </div>
              </div>

              <div>
                <label className="label">
                  <span className="modal-label-name flex items-center gap-1">
                    Phone Number
                    <AiOutlineQuestionCircle className="text-sm" />
                  </span>
                </label>
                <div className="flex items-center">
                  {/* <input
                    type="text"
                    name="phone_number"
                    className="modal-input-field ml-1 w-3/4"
                    {...register("phone_number")}
                  /> */}
                  <div className="ModalPhoneInput">
                    <PhoneInput
                      country={"us"}
                      value={phone}  
                      onChange={(e) => {
                        console.log(e);
                        setPhone(e);
                      }}       
                    />
                  </div>
                  <div>
                    <select
                      className="modal-input-field ml-1 w-full"
                      {...register("phone")}
                    >
                      <option value=""></option>
                      <option value="work">Work</option>
                      <option value="home">Home</option>
                    </select>
                  </div>
                </div>
                <div>
                  <div className="flex ml-1 mt-2 items-center">
                    <input
                      type="checkbox"
                      // checked={value ? true : false}
                      name="patient"
                      // onClick={() => {
                      //   setValue(!value);
                      // }}
                    />{" "}
                    <span className="text-xs ml-1 text-gray-600 font-medium">
                      Send me a text message
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 py-[1px] mt-3"></div>

            <div className=" flex items-end justify-end mt-2">
              <button className=" pms-button mr-2" type="submit">
                Create & Continue
              </button>

              <button className="pms-close-button" onClick={handleClose}>
                Close
              </button>
            </div>
          </form>
        </div>
      </Modal>
      <hr />
    </div>
  );
};

export default CreatePatient;
