import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { useForm } from "react-hook-form";

export default function VendorNumberSetupActionModal({ open, handleClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div>
      <div>
        {" "}
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogContent className="box">
            <div>
              <h1 className="text-lg  text-left text-orange-400">
                Edit Vendor Setup
              </h1>
              <div className="divider"></div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="w-full text-sm">
                  <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5 mr-2 gap-5">
                    <div>
                      <label className="label">
                        <span className="label-text text-xs text-gray-500 text-left">
                          Select Pay Period length
                        </span>
                      </label>
                      <select
                        className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
                        {...register("Length")}
                      >
                        <option value="Mr">Bi Weekly</option>
                        <option value="Mrs">Yearly</option>
                        <option value="Miss">Miss</option>
                        <option value="Dr">Dr</option>
                      </select>
                    </div>
                    <div>
                      <label className="label">
                        <span className="label-text text-xs text-gray-500 text-left">
                          Week Day
                        </span>
                      </label>
                      <select
                        className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
                        {...register("week_day")}
                      >
                        <option value="Mr">Sunday</option>
                        <option value="Mrs">Monday</option>
                        <option value="Miss">Tuesday</option>
                        <option value="Dr">Wednesday</option>
                      </select>
                    </div>
                    <div>
                      <label className="label">
                        <span className="label-text text-xs text-gray-500 text-left">
                          Select Year
                        </span>
                      </label>
                      <select
                        className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
                        {...register("year")}
                      >
                        <option value="Mr">2019</option>
                        <option value="Mrs">2020</option>
                        <option value="Miss">2021</option>
                        <option value="Dr">2022</option>
                      </select>
                    </div>

                    {/* staff_number  */}
                    <div className="mt-[-15px]">
                      {" "}
                      <label className="label">
                        <span className="label-text text-xs text-gray-500 text-left">
                          After how many days staff can't submit time sheet?
                        </span>
                      </label>
                      <input
                        type="number"
                        name="staff_number"
                        className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
                        {...register("staff_number")}
                      />
                    </div>
                    <div>
                      <label className="label">
                        <span className="label-text text-xs text-gray-500 text-left">
                          Check Date
                        </span>
                      </label>
                      <select
                        className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
                        {...register("week_day")}
                      >
                        <option value="Mr">Sunday</option>
                        <option value="Mrs">Monday</option>
                        <option value="Miss">Tuesday</option>
                        <option value="Dr">Wednesday</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="divider"></div>
                {/* submit box  */}

                {/* <input type="submit" /> */}

                <div className="modal-action">
                  {/* <input type="submit" /> */}
                  <input
                    type="submit"
                    value={"SAVE"}
                    className="px-5  py-2 bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
                  />
                  <button
                    className="px-5  bg-gradient-to-r from-red-700 to-red-400  hover:to-red-700 text-white rounded-md"
                    autoFocus
                    onClick={handleClose}
                  >
                    CANCEL
                  </button>
                </div>
              </form>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
