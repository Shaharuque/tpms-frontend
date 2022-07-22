import { Dialog } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const AuthorizationEditModal = ({ handleClose, open, editableRow }) => {
  const { register, handleSubmit, reset } = useForm();
  const [notes, setNotes] = useState("");
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  //   console.log(editableRow);
  useEffect(() => {
    setTimeout(() => {
      reset({
        // description: `${row.original.description}`,
        // expiry_Date: `${row.original.upload_date}`,
      });
    }, 500);
  }, [reset, editableRow]);
  return (
    <div>
      {" "}
      <div>
        <div>
          <Dialog
            // fullScreen={fullScreen}
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
          >
            <div className="p-5 box ">
              <h1 className="text-lg text-left text-orange-400">
                Edit/Add Service
              </h1>
              <div className="divider"></div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 my-3 mr-2 gap-x-2 gap-y-1">
                  <div>
                    <label className="label">
                      <span className="label-text flex items-center text-xs text-gray-600 text-left">
                        Service
                        <span className="text-red-500">*</span>
                      </span>
                    </label>
                    <select
                      className="border rounded-sm px-2 py-[3px] mx-1 text-xs w-full"
                      {...register("service")}
                    >
                      <option value="single">single</option>
                      <option value="married">married</option>
                    </select>
                  </div>
                  <div>
                    <label className="label">
                      <span className="label-text flex items-center text-xs text-gray-600 text-left">
                        Service Sub-Type
                        <span className="text-red-500">*</span>
                      </span>
                    </label>
                    <select
                      className="border rounded-sm px-2 py-[3px] mx-1 text-xs w-full"
                      {...register("service_sub_type")}
                    >
                      <option value="single">single</option>
                      <option value="married">married</option>
                    </select>
                  </div>
                  <div>
                    <label className="label">
                      <span className="label-text flex items-center text-xs text-gray-600 text-left">
                        CPT Code
                        <span className="text-red-500">*</span>
                      </span>
                    </label>
                    <select
                      className="border rounded-sm px-2 py-[3px] mx-1 text-xs w-full"
                      {...register("cpt_code")}
                    >
                      <option value="single">single</option>
                      <option value="married">married</option>
                    </select>
                  </div>
                  <div className="flex gap-2">
                    <div>
                      <label className="label">
                        <span className="label-text text-xs text-gray-600 text-left">
                          M1
                        </span>
                      </label>
                      <input
                        type="text"
                        name="m1"
                        className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                        {...register("m1")}
                      />
                    </div>
                    <div>
                      <label className="label">
                        <span className="label-text text-xs text-gray-600 text-left">
                          M2
                        </span>
                      </label>
                      <input
                        type="text"
                        name="m2"
                        className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                        {...register("m2")}
                      />
                    </div>
                    <div>
                      <label className="label">
                        <span className="label-text text-xs text-gray-600 text-left">
                          M3
                        </span>
                      </label>
                      <input
                        type="text"
                        name="m3"
                        className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                        {...register("m3")}
                      />
                    </div>
                    <div>
                      <label className="label">
                        <span className="label-text text-xs text-gray-600 text-left">
                          M4
                        </span>
                      </label>
                      <input
                        type="text"
                        name="m4"
                        className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                        {...register("m4")}
                      />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div>
                      <label className="label">
                        <span className="label-text flex items-center text-xs text-gray-600 text-left">
                          Billed Per
                          <span className="text-red-500">*</span>
                        </span>
                      </label>
                      <select
                        className="border rounded-sm px-2 py-[3px] mx-1 text-xs w-full"
                        {...register("per_unit")}
                      >
                        <option value="single">single</option>
                        <option value="married">married</option>
                      </select>
                    </div>
                    <div className="mt-8">
                      <select
                        className="border rounded-sm px-2 py-[3px] mx-1 text-xs w-full"
                        {...register("minute")}
                      >
                        <option value="single">single</option>
                        <option value="married">married</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="label">
                      <span className="label-text text-xs text-gray-600 text-left">
                        Rate
                      </span>
                    </label>
                    <input
                      type="text"
                      name="rate"
                      className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                      {...register("rate")}
                    />
                  </div>
                </div>
                <div>
                  <label className="label">
                    <span className="label-text flex items-center text-xs text-gray-600 text-left">
                      Maximum Frequency allowed
                      <span className="text-red-500">*</span>
                    </span>
                  </label>
                  <div className="flex flex-wrap gap-1 border p-1">
                    <div className="border text-sm font-medium px-3">
                      Maximum
                    </div>
                    <div className="">
                      <select
                        className="border rounded-sm px-2 py-[3px] mx-1 text-xs w-full"
                        {...register("hours")}
                      >
                        <option value="hours">Hours</option>
                        <option value="married">married</option>
                      </select>
                    </div>
                    <div className="border text-sm font-medium px-3">Per</div>
                    <div className="">
                      <select
                        className="border rounded-sm px-2 py-[3px] mx-1 text-xs w-full"
                        {...register("hours")}
                      >
                        <option value="single">single</option>
                        <option value="married">married</option>
                      </select>
                    </div>
                    <div className="border text-sm font-medium px-3">Is</div>
                    <div className="">
                      <select
                        className="border rounded-sm px-2 py-[3px] mx-1 text-xs w-full"
                        {...register("hours")}
                      >
                        <option value="single">single</option>
                        <option value="married">married</option>
                      </select>
                    </div>

                    <div className="border text-sm font-medium px-3">And</div>
                  </div>
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
                  >
                    Notes
                  </textarea>
                </div>
                <div className="divider"></div>
                <div className="modal-action">
                  {/* <input type="submit" /> */}
                  <button
                    className=" py-[5px]  px-3 ml-3 text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
                    type="submit"
                  >
                    Save
                  </button>

                  <button
                    className=" py-[5px]  px-3 ml-3 text-xs font-normal bg-gradient-to-r  from-red-700 to-red-400  hover:to-red-700 text-white rounded-md"
                    autoFocus
                    onClick={handleClose}
                  >
                    CANCEL
                  </button>
                </div>
              </form>
            </div>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default AuthorizationEditModal;
