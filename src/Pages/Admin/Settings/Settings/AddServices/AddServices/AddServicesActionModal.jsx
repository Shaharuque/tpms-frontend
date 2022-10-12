import { Modal } from "antd";
import * as React from "react";
// import Dialog from "@mui/material/Dialog";
import { useForm } from "react-hook-form";
export default function AddServicesActionModal({ handleClose, open, row }) {
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
      <Modal
        // fullScreen={fullScreen}
        open={open}
        centered
        footer={false}
        closable={false}
        bodyStyle={{ padding: "0" }}
        className="box rounded-lg"
      >
        <div className="p-3">
          {/* <h1>{row.original.place_of_Service}</h1> */}
          <h1 className="text-lg text-left text-orange-400">
            Add/Edit Service
          </h1>
          <div className="divider m-0"></div>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* <div className="flex items-center text-sm gap-5"> */}
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mr-2 gap-5">
              <div>
                <label className="label">
                  <span className="label-text text-xs text-gray-500 text-left">
                    Tx Type
                  </span>
                </label>
                <select
                  className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
                  {...register("tx_type")}
                >
                  <option value="Mr">Behavioral therapy</option>
                  <option value="Mrs">Physical Therapy</option>
                  <option value="Miss">Mental Health</option>
                </select>
              </div>
              <div>
                <label className="label">
                  <span className="label-text text-xs text-gray-500 text-left">
                    Service Type
                  </span>
                </label>
                <select
                  className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
                  {...register("service_type")}
                >
                  <option value="Mr">Billable</option>
                  <option value="Mrs">Unbillable</option>
                </select>
              </div>

              <div>
                <label className="label">
                  <span className="text-sm">Service</span>
                </label>
                <input
                  type="number"
                  placeholder="Service"
                  name="service"
                  className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
                  {...register("service")}
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text text-xs text-gray-500 text-left">
                    Billed Per
                  </span>
                </label>
                <select
                  className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
                  {...register("billed_per")}
                >
                  <option value="Mr">Behavioral therapy</option>
                  <option value="Mrs">Physical Therapy</option>
                  <option value="Miss">Mental Health</option>
                </select>
              </div>
              <div>
                <label className="label">
                  <span className="label-text text-xs text-gray-500 text-left">
                    Duration
                  </span>
                </label>
                <select
                  className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
                  {...register("duration")}
                >
                  <option value="Mr">5min</option>
                  <option value="Mrs">10min</option>
                </select>
              </div>

              <div>
                <label className="label">
                  <span className="text-sm">Mileage</span>
                </label>
                <input
                  type="number"
                  placeholder="Cpt Code"
                  name="Mileage"
                  className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
                  {...register("Mileage")}
                />
              </div>
            </div>
            <div className="divider mb-0"></div>
            <div className="mt-2 flex justify-end">
              {/* <input type="submit" /> */}
              <input
                type="submit"
                value={"SAVE"}
                className="px-3 py-1 bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
              />
              <button
                className="px-3 py-1 ml-2 bg-gradient-to-r from-red-700 to-red-400  hover:to-red-700 text-white rounded-md"
                autoFocus
                onClick={handleClose}
              >
                CANCEL
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}
