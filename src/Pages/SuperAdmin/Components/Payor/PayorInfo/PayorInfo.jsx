import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Radio } from "antd";
import { Modal } from "antd";
import { IoCloseCircleOutline } from "react-icons/io5";

const PayorInfo = ({ handleClose, open }) => {
  const [planValue, setPlanValue] = useState(1);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setPlanValue(e.target.value);
  };
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    // reset();
  };
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
              Edit Document
            </h1>
            <IoCloseCircleOutline
              onClick={handleClose}
              className="text-gray-600 font-semibold  text-2xl hover:text-primary"
            />
          </div>

          <div className="bg-gray-200 py-[1px] mt-3"></div>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* <div className=" flex items-center flex-wrap  my-5 mr-2 gap-6"> */}
            <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 my-3 mr-2 gap-x-2 gap-y-1">
              {/* name  */}
              <div>
                <label className="label">
                  <span className="modal-label-name">Name</span>
                </label>
                <input
                  type="text"
                  name="payor_name"
                  className="modal-input-field ml-1 w-full"
                  {...register("payor_name")}
                />
              </div>
              {/* Payor*/}
              <div>
                <label className="label">
                  <span className="modal-label-name">Payor Id</span>
                </label>
                <input
                  type="text"
                  name="payor_id"
                  className="modal-input-field ml-1 w-full"
                  {...register("payor_id")}
                />
              </div>
              {/* address 1 */}
              <div>
                <label className="label">
                  <span className="modal-label-name">Address</span>
                </label>
                <input
                  type="text"
                  name="address"
                  className="modal-input-field ml-1 w-full"
                  {...register("address")}
                />
              </div>
              <div>
                <label className="label">
                  <span className="modal-label-name">City</span>
                </label>
                <input
                  type="text"
                  name="city"
                  className="modal-input-field ml-1 w-full"
                  {...register("city")}
                />
              </div>
              <div>
                <label className="label">
                  <span className="modal-label-name">State</span>
                </label>
                <input
                  type="text"
                  name="state"
                  className="modal-input-field ml-1 w-full"
                  {...register("state")}
                />
              </div>
              <div>
                <label className="label">
                  <span className="modal-label-name">Zip</span>
                </label>
                <input
                  type="number"
                  name="zip"
                  className="modal-input-field ml-1 w-full"
                  {...register("zip")}
                />
              </div>
            </div>
            <div className="flex items-center flex-wrap gap-5 my-5">
              <Radio.Group onChange={onChange} value={planValue}>
                <Radio value={1}>
                  <span className=" text-gray-600 rounded-sm  text-[14px] font-medium  ">
                    Is Plan Medicare
                  </span>
                </Radio>
                <Radio value={2}>
                  <span className=" text-gray-600 rounded-sm  text-[14px] font-medium  ">
                    Is Plan MedicaId
                  </span>
                </Radio>
                <Radio value={3}>
                  <span className=" text-gray-600 rounded-sm  text-[14px] font-medium  ">
                    Is Plan Champus
                  </span>
                </Radio>
                <Radio value={4}>
                  <span className=" text-gray-600 rounded-sm  text-[14px] font-medium  ">
                    Is Plan ChampVA
                  </span>
                </Radio>
                <Radio value={5}>
                  <span className=" text-gray-600 rounded-sm  text-[14px] font-medium  ">
                    Is Plan Group Health Plan
                  </span>
                </Radio>
                <Radio value={6}>
                  {" "}
                  <span className=" text-gray-600 rounded-sm  text-[14px] font-medium  ">
                    Plan FECA
                  </span>
                </Radio>
                <Radio value={7}>
                  {" "}
                  <span className=" text-gray-600 rounded-sm  text-[14px] font-medium  ">
                    Plan Other
                  </span>
                </Radio>
              </Radio.Group>
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

export default PayorInfo;
