import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Modal, TimePicker } from "antd";

const EditSession = ({ handleClose, open }) => {
  const { register, handleSubmit, reset } = useForm();
  const [notes, setNotes] = useState("");
  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log(data);
    reset();
  };
  const onChange = (time, timeString) => {
    console.log(time, timeString);
  };
  //   console.log(editableRow);
  useEffect(() => {
    setTimeout(() => {
      reset({});
    }, 500);
  }, [reset]);
  return (
    <div>
      <div>
        <Modal
          open={open}
          centered
          footer={false}
          closable={false}
          bodyStyle={{ padding: "0" }}
          className="box rounded-lg"
        >
          <div className="px-5 py-2 ">
            <div className="flex items-center justify-between">
              <h1 className="text-lg text-left text-orange-400 ">
                Add Appointment
              </h1>
              <IoCloseCircleOutline
                onClick={handleClose}
                className="text-gray-600 text-2xl hover:text-primary"
              />
            </div>

            <div className="bg-gray-200 py-[1px] mt-3"></div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 my-5 mr-2 gap-1">
                <label className="label">
                  <span className="modal-label-name">Patient Name</span>
                </label>
                <select
                  className="col-span-2 modal-input-field ml-1 w-full"
                  {...register("patients")}
                >
                  <option value=""></option>
                  <option value="single">single</option>
                  <option value="married">married</option>
                </select>
                <label className="label">
                  <span className="modal-label-name">Auth</span>
                </label>
                <select
                  className="col-span-2 modal-input-field ml-1 w-full"
                  {...register("Auth")}
                >
                  <option value=""></option>
                  <option value="single">single</option>
                  <option value="married">married</option>
                </select>
                <label className="label">
                  <span className="modal-label-name">Service</span>
                </label>
                <select
                  className="col-span-2 modal-input-field ml-1 w-full"
                  {...register("service")}
                >
                  <option value=""></option>
                  <option value="single">single</option>
                  <option value="married">married</option>
                </select>
                <label className="label">
                  <span className="modal-label-name">Provider Name</span>
                </label>
                <select
                  className="col-span-2 modal-input-field ml-1 w-full"
                  {...register("provider")}
                >
                  <option value=""></option>
                  <option value="single">single</option>
                  <option value="married">married</option>
                </select>
                <label className="label">
                  <span className="modal-label-name">POS</span>
                </label>
                <select
                  className="col-span-2 modal-input-field ml-1 w-full"
                  {...register("pos")}
                >
                  <option value=""></option>
                  <option value="single">single</option>
                  <option value="married">married</option>
                </select>
                <label className="label">
                  <span className="modal-label-name">From Date</span>
                </label>
                <input
                  className="col-span-2 modal-input-field ml-1 w-full"
                  type="date"
                  {...register("check_Date")}
                />
                <label className="label">
                  <span className="modal-label-name">From Time</span>
                </label>
                <div className="grid col-span-2 grid-cols-1 md:grid-cols-1 lg:grid-cols-3 pl-1 gap-1">
                  <TimePicker
                    className="modal-input-field"
                    use12Hours
                    format="h:mm A"
                    onChange={onChange}
                  />
                  <div className="modal-label-name mt-2 mx-auto">To Time</div>
                  <TimePicker
                    className="modal-input-field"
                    use12Hours
                    format="h:mm A"
                    onChange={onChange}
                  />
                </div>
                <label className="label">
                  <span className="modal-label-name">Status</span>
                </label>
                <select
                  className="col-span-2 modal-input-field ml-1 w-full"
                  {...register("status")}
                >
                  <option value=""></option>
                  <option value="single">single</option>
                  <option value="married">married</option>
                </select>
              </div>

              <div className="bg-gray-200 py-[1px] mt-3"></div>
              <div className=" flex items-end justify-end mt-2">
                <button className=" pms-button mr-2" type="submit">
                  Save Changes
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

export default EditSession;
