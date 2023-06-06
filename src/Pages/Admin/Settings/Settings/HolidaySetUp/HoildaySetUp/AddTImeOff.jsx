// Good practise of using textarea and focused input box
import { Modal } from "antd";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Input } from "antd";
import { useHolidayAddMutation } from "../../../../../../features/Settings_redux/holidaySetup/holidaySetupApi";
import useToken from "../../../../../../CustomHooks/useToken";

const AddTImeOff = ({ handleClose, open }) => {
  const { register, handleSubmit, reset } = useForm();
  const [text, setText] = useState("");
  const { token } = useToken();

  const [holidayAdd, { isSuccess: holidayAddSuccess }] =
    useHolidayAddMutation();

  const onSubmit = (data) => {
    const payload = {
      ...data,
      description: text,
      holiday_name: text,
    };
    console.log(payload);
    holidayAdd({
      token,
      data: payload,
    });
  };

  useEffect(() => {
    if (holidayAddSuccess) {
      handleClose();
    }
  }, [holidayAddSuccess]);

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
              Create Holiday
            </h1>
            <IoCloseCircleOutline
              onClick={handleClose}
              className="text-gray-600 font-semibold  text-2xl hover:text-primary"
            />
          </div>
          <div className="bg-gray-200 py-[1px] mt-3"></div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 2xl:grid-cols-1 my-3 mr-2 gap-x-4 gap-y-2">
              <div>
                <label className="label">
                  <span className="modal-label-name">From Date</span>
                </label>
                <input
                  className="modal-input-field ml-1 w-full"
                  type="date"
                  {...register("holiday_date")}
                />
              </div>
              <div className="">
                <label className="label">
                  <span className="modal-label-name">Description</span>
                </label>
                <div className="ml-1">
                  <Input.TextArea
                    placeholder="Enter text here"
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                  />
                </div>
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

export default AddTImeOff;
