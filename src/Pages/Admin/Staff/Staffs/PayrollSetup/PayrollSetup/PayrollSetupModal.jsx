import { Modal } from "antd";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { IoCloseCircleOutline } from "react-icons/io5";
import PyarollMultiSelect from "../../../../../Shared/CustomComponents/PyarollMultiSelect";

const PayrollSetupModal = ({ handleClose, open, services }) => {
  const [active, setActive] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const [value, setValue] = useState(false);
  //Multi select api data
  console.log("services data ", services);
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
              <p className="text-xs font-medium text-gray-600 mt-1">
                The staff rates need to be setup before they can be scheduled
                for plan of care.
              </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-3 mr-2 gap-x-2 gap-y-1">
                <div>
                  <label className="label">
                    <span className="modal-label-name">Service</span>
                  </label>
                  {/* <select
                    className="modal-input-field ml-1 w-full"
                    {...register(`service`)}
                  >
                    <option value="Speech Therapist">Speech Therapist</option>
                    <option value="female">Female</option>
                  </select> */}

                  <PyarollMultiSelect Alldata={services} />
                </div>

                <div>
                  <label className="label">
                    <span className="modal-label-name">Hourly Rate</span>
                  </label>
                  <input
                    type="text"
                    name="hourly_rate"
                    className="modal-input-field ml-1 w-full"
                    {...register("hourly_rate")}
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="modal-label-name">
                      Milage Rate (cents/mile)
                    </span>
                  </label>
                  <input
                    type="text"
                    name="milage_Rate"
                    className="modal-input-field ml-1 w-full"
                    {...register("milage_rate")}
                  />
                </div>

                <div className="flex ml-1 mt-8 gap-2 items-center">
                  <input
                    type="checkbox"
                    name="service"
                    onClick={() => {
                      setValue(!value);
                    }}
                  />
                  <span className="modal-label-name">Apply to All Service</span>
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
    </div>
  );
};

export default PayrollSetupModal;
