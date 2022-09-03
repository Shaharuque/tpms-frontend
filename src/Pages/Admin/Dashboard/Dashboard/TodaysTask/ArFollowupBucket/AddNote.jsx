import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddNote = () => {
  const { register, handleSubmit, reset } = useForm();
  const [notes, setNotes] = useState("");
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5 mr-2 gap-2">
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-500 text-left">
                Aging Status
              </span>
            </label>
            <select
              className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
              {...register("again_status")}
            >
              <option value="name"> Payor </option>
              <option value="name"> Client </option>
            </select>
          </div>
          <div>
            {" "}
            <label className="label">
              <span className="label-text text-xs text-gray-500 text-left">
                Follow Up Date
              </span>
            </label>
            <input
              className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
              type="date"
              {...register("deposit_Date")}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-600 text-left">
                Notes
              </span>
            </label>
            <textarea
              onChange={(e) => setNotes(e.target.value)}
              name="comment"
              className="border text-xs p-2  ml-1 h-24 w-full"
            ></textarea>
          </div>
        </div>
        <button
          className=" py-2 mt-7 px-3 ml-3 text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
          type="submit"
        >
          Save
        </button>
        <button className="font-normal  py-2 mt-7 px-3 text-xs ml-3 bg-gradient-to-r from-red-600 to-red-400  hover:to-red-600 text-white rounded-md">
          Cancel
        </button>
      </form>
    </div>
  );
};

export default AddNote;
