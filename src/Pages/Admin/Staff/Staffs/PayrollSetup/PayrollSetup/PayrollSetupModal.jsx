import { Modal, Switch } from "antd";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { IoCloseCircleOutline } from "react-icons/io5";

const PayrollSetupModal = ({ handleClose, open }) => {
  const [active, setActive] = useState(false);



  const { register, handleSubmit, reset } = useForm();
  const [value, setValue] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div>
      <div>
        <Modal
          open={true} //aikhaney true na likey ekta state ana lagbey tar value 'true'
          centered
          footer={null}
          bodyStyle={{ padding: "0" }}
          closable={false}
          className="box rounded-xl"
          // onClose={handleClose}
          // aria-labelledby="responsive-dialog-title"
        >
          <div className="px-5 py-2">
            <div className="flex items-center justify-between">
              <h1 className="text-lg text-left text-orange-400 ">Payroll</h1>
              <IoCloseCircleOutline
                onClick={handleClose}
                className="text-gray-600 text-2xl hover:text-primary"
              />
            </div>

            <div className="bg-gray-200 py-[1px] mt-3"></div>
            <div className="mt-3">
              <p className="text-xs text-gray-600 mt-1">
                The staff rates need to be setup before they can be scheduled
                for plan of care.
              </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-3 mr-2 gap-x-2 gap-y-1">
                <div>
                  <label className="label">
                    <span className="label-text text-xs text-gray-600 text-left">
                      Service
                    </span>
                  </label>
                  <select
                    className="border rounded-sm px-2 py-[4px] mx-1 text-xs w-full"
                    {...register(`service`)}
                  >
                    <option value="Speech Therapist">Speech Therapist</option>
                    <option value="female">Female</option>
                  </select>
                </div>

                <div>
                  <label className="label">
                    <span className="label-text text-xs text-gray-600 text-left">
                      Hourly Rate
                    </span>
                  </label>
                  <input
                    type="text"
                    name="hourly_rate"
                    className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                    {...register("hourly_rate")}
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text text-xs text-gray-600 text-left">
                      Milage Rate (cents/mile)
                    </span>
                  </label>
                  <input
                    type="text"
                    name="milage_Rate"
                    className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                    {...register("milage_rate")}
                  />
                </div>

                <div className="flex ml-1 mt-1 items-center">
                  {/* <input
                    type="checkbox"
                    name="service"
                    onClick={() => {
                      setValue(!value);
                    }}
                  /> */}
                  <Switch
                  size="small"
                  checked={active ? true : false}
                  onClick={() => setActive(!active)}
                />
                  <span className="text-xs ml-1  text-gray-600 font-normal">
                    Apply to All Service
                  </span>
                </div>
              </div>
              <div className="bg-gray-200 py-[1px] mt-3"></div>
              <div className=" flex items-end justify-end mt-2">
                <button
                  className=" py-[5px] font-normal px-3 mr-1 text-xs  bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-sm"
                  type="submit"
                >
                  Save
                </button>

                <button
                  className=" py-[5px]  px-3  text-xs font-normal bg-gradient-to-r  from-red-700 to-red-400  hover:to-red-700 text-white rounded-sm"
                  autoFocus
                  onClick={handleClose}
                >
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

export default PayrollSetupModal;
