import React, { useEffect, useState } from "react";
import { TextField, Button, DialogActions } from "@mui/material";
import AddCptCodeActionModal from "../../Settings/Settings/AddCptCode/AddCptCode/AddCptCodeActionModal";
import { EVENTS } from "./events";
import { Dialog } from "@mui/material";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";

const CustomEditor = ({ scheduler }) => {
  const event = scheduler.edited;
  console.log(scheduler);

  const { register, handleSubmit, reset } = useForm();

  // Make your own form/state
  const [state, setState] = useState({
    title: event?.title || "",
    description: event?.description || "",
    name: event?.name || "",
    age: event?.age || "",
    gender: event?.gender || "",
    start: event?.start || "",
    end: event?.end || "",
  });
  const [error, setError] = useState(null);

  const handleChange = (value, name) => {
    setState((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  console.log(state);
  const handlesubmit = async (data) => {
    console.log(data);
    // Your own validation
    if (state.name.length === 0) {
      return setError({ ...error, name: "Min 3 letters" });
    }

    try {
      scheduler.loading(true);

      /**Simulate remote data saving */
      const added_updated_event = await new Promise((res) => {
        /**
         * Make sure the event have 4 mandatory fields
         * event_id: string|number
         * p: string
         * start: Date|string
         * end: Date|string
         */
        setTimeout(() => {
          res({
            event_id: event?.event_id || Math.random(),
            title: state.title,
            start: scheduler.state.start.value,
            end: scheduler.state.end.value,
            description: state.description,
            age: state.age,
            name: state.name,
            gender: state.gender,
          });
        }, 3000);
      });

      scheduler.onConfirm(added_updated_event, event ? "edit" : "create");
      scheduler.close();
    } finally {
      scheduler.loading(false);
    }
  };
  return (
    <div>
      <Dialog
        maxWidth="sm"
        open={true}
        aria-labelledby="responsive-dialog-title"
      >
        <div className="px-5 py-2 box">
          <div className="flex items-center justify-between gap-[60px] md:gap-[200px]">
            <h1 className="text-lg text-left text-orange-400 ">
              All Authorizations
            </h1>

            <IoCloseCircleOutline
              onClick={scheduler.close}
              className="text-gray-600 font-semibold  text-2xl hover:text-primary "
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-[15px] font-medium text-[#9b9b9b] text-left">
                Authorization-Number<span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="text"
              name="authorization_number"
              className="border text-gray-600 rounded-sm  text-[14px] font-medium ml-1 py-[1px] w-full focus:outline-none"
              value={state.title}
              onChange={(e) => handleChange(e.target.value, "title")}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-[15px] font-medium text-[#9b9b9b] text-left">
                Description<span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="text"
              name="Description"
              className="border text-gray-600 rounded-sm  text-[14px] font-medium ml-1 py-[1px] w-full focus:outline-none"
              value={state.description}
              onChange={(e) => handleChange(e.target.value, "description")}
            />
          </div>
          <label className="label">
            <span className="label-text text-[15px] font-medium text-[#9b9b9b] text-left">
              Patient<span className="text-red-500">*</span>
            </span>
          </label>
          <input
            type="text"
            className="border text-gray-600 rounded-sm  text-[14px] font-medium ml-1 py-[1px] w-full focus:outline-none"
            value={state.name}
            onChange={(e) => handleChange(e.target.value, "name")}
          />
          <label className="label">
            <span className="label-text text-[15px] font-medium text-[#9b9b9b] text-left">
              Age<span className="text-red-500">*</span>
            </span>
          </label>
          <input
            type="text"
            name="age"
            className="border text-gray-600 rounded-sm  text-[14px] font-medium ml-1 py-[1px] w-full focus:outline-none"
            value={state.age}
            onChange={(e) => handleChange(e.target.value, "age")}
          />
          <label className="label">
            <span className="label-text text-[15px] font-medium text-[#9b9b9b] text-left">
              Gender<span className="text-red-500">*</span>
            </span>
          </label>
          <input
            type="text"
            name="gender"
            className="border text-gray-600 rounded-sm  text-[14px] font-medium ml-1 py-[1px] w-full focus:outline-none"
            value={state.gender}
            onChange={(e) => handleChange(e.target.value, "gender")}
          />
          <div>
            <label className="label">
              <span className="label-text text-[15px] font-medium text-[#9b9b9b] text-left">
                Start<span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="time"
              name="start"
              className="border text-gray-600 rounded-sm  text-[14px] font-medium ml-1 py-[1px] w-full focus:outline-none"
              value={state?.start}
              onChange={(e) => handleChange(e.target.value, "start")}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-[15px] font-medium text-[#9b9b9b] text-left">
                End<span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="time"
              name="end"
              className="border text-gray-600 rounded-sm  text-[14px] font-medium ml-1 py-[1px] w-full focus:outline-none"
              value={state?.end}
              onChange={(e) => handleChange(e.target.value, "end")}
            />
          </div>

          <div className="modal-action">
            {/* <input type="submit" /> */}
            <button
              className=" py-[5px]  px-3 ml-3 text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
              onClick={handlesubmit}
            >
              Save
            </button>

            <button
              className=" py-[5px]  px-3 ml-3 text-xs font-normal bg-gradient-to-r  from-red-700 to-red-400  hover:to-red-700 text-white rounded-md"
              autoFocus
              onClick={scheduler.close}
            >
              CANCEL
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default CustomEditor;
