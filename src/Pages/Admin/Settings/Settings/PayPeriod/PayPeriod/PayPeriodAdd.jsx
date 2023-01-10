import { Modal } from "antd";
import React from "react";
import { useForm } from "react-hook-form";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useAddPayperiodMutation } from "../../../../../../features/Settings_redux/payperiod/payperiodApi";

const PayPeriodAdd = ({ handleClose, open, token }) => {
  const { register, handleSubmit, reset } = useForm();
  //calling payperiod add api
  const [addPayperiod, { data: successData, isLoading, isSuccess }] =
    useAddPayperiodMutation();
  const onSubmit = (data) => {
    console.log(data);
    addPayperiod({
      token,
      data,
    });
    // reset();
  };

  console.log(successData, isSuccess);
  return (
    <div>
      <Modal
        // fullScreen={fullScreen}
        open={open}
        centered
        width={600}
        footer={false}
        closable={false}
        bodyStyle={{ padding: "0" }}
        className="box rounded-md"
      >
        <div className="px-5 py-2 ">
          <div className="flex items-center justify-between">
            <h1 className="text-lg text-left text-orange-400 ">
              Create/Edit Pay Period
            </h1>
            <IoCloseCircleOutline
              onClick={handleClose}
              className="text-gray-600 font-semibold  text-2xl hover:text-primary"
            />
          </div>
          <div className="bg-gray-200 py-[1px] mt-3"></div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-2 my-3 mr-2 gap-x-4 gap-y-4">
              <div>
                <label className="label">
                  <span className="modal-label-name">
                    Select Pay Period length
                  </span>
                </label>
                <select
                  className="modal-input-field ml-1 w-full"
                  {...register("period_length")}
                >
                  <option value={1}>Weekly</option>
                  <option value={4}>Bi-Weekly</option>
                  <option value={2}>From 1st & 15th Every Month</option>
                  <option value={5}>From 5th & 20th Every Month</option>
                  <option value={6}>From 5th & 20th Every Month</option>
                  <option value={3}>Monthly</option>
                </select>
              </div>
              <div>
                <label className="label">
                  <span className="modal-label-name">Week Day</span>
                </label>
                <select
                  className="modal-input-field ml-1 w-full"
                  {...register("week_day_name")}
                >
                  <option value="Sunday">Sunday</option>
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
                  <option value="Friday">Friday</option>
                  <option value="Saturday">Saturday</option>
                </select>
              </div>
              <div>
                <label className="label">
                  <span className="modal-label-name">Select year</span>
                </label>
                <select
                  className="modal-input-field ml-1 w-full"
                  {...register("year")}
                >
                  <option value="2019">2019</option>
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                </select>
              </div>
              <div>
                <label className="label">
                  <span className="modal-label-name">End Date</span>
                </label>
                <input
                  className="modal-input-field ml-1 w-full"
                  type="date"
                  {...register("end_date")}
                ></input>
              </div>
              <div className="mt-4">
                <label className="label">
                  <span className="modal-label-name">Check Date</span>
                </label>
                <select
                  className="modal-input-field ml-1 w-full"
                  {...register("check_date")}
                >
                  <option value="Sunday">Sunday</option>
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
                  <option value="Friday">Friday</option>
                  <option value="Saturday">Saturday</option>
                </select>
              </div>

              <div>
                <label className="label">
                  <span className="modal-label-name">
                    After how many days staff can't submit time sheet?
                  </span>
                </label>
                <input
                  className="modal-input-field ml-1 w-full"
                  type="number"
                  {...register("time_sheet")}
                ></input>
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

export default PayPeriodAdd;
