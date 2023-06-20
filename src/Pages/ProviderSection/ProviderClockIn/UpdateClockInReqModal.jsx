import { Modal } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { providerIp } from "../../../Misc/BaseClient";
import useToken from "../../../CustomHooks/useToken";
import moment from "moment";

const UpdateClockInReqModal = ({ handleClose, open, reqId }) => {
  const { register, handleSubmit, reset } = useForm();
  const { token } = useToken();
  //console.log(reqId);

  const onSubmit = async (data) => {
    const payload = {
      id: reqId?.id || null,
      ...data,
    };
    console.log(payload);
    try {
      const response = await axios({
        method: "post",
        url: `${providerIp}/clock/update/clockin/reqs`,
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
        data: payload,
      });
      const result = response?.data;
      if (result) {
        handleClose();
        toast.success("successfully updated the clockin request", {
          position: "top-center",
          autoClose: 5000,
          theme: "dark",
          style: { fontSize: "12px" },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // you can do async server request and fill up form
    setTimeout(() => {
      reset({
        clockin_date: reqId?.punch_date || null,
        clockin_start_time: moment.utc(reqId?.time_in).utcOffset(360).format("HH:mm:ss") || null,
        clockin_end_time: moment.utc(reqId?.time_out).utcOffset(360).format("HH:mm:ss") || null,
        clockin_note: reqId?.note || null,
      });
    }, 0);
  }, [reset, reqId]);

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
        <div className="px-5 py-2">
          <div className="flex items-center justify-between">
            <h1 className="text-lg text-left text-orange-400 ">Edit Log Time</h1>
            <IoCloseCircleOutline onClick={handleClose} className="text-gray-600 text-2xl hover:text-primary" />
          </div>

          <div className="bg-gray-200 py-[1px] mt-3"></div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="label">
                <span className="modal-label-name">Date</span>
              </label>
              <input type="date" className="modal-input-field ml-1 w-full" {...register("clockin_date")} />
            </div>

            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-3 mr-2 gap-x-2 gap-y-1">
              <div>
                <label className="label">
                  <span className="modal-label-name">Clock In</span>
                </label>
                <input type="time" className="modal-input-field ml-1 w-full" {...register("clockin_start_time")} />
              </div>
              <div>
                {" "}
                <label className="label">
                  <span className="modal-label-name">Clock Out</span>
                </label>
                <input type="time" className="modal-input-field ml-1 w-full" {...register("clockin_end_time")} />
              </div>
            </div>
            <div className="">
              <label className="label">
                <span>Write Note Here:</span>
              </label>
              <textarea
                type="text"
                name="notes"
                rows={4}
                size="middle"
                className="border border-gray-400 rounded-md w-full focus:outline-none p-2 text-sm text-gray-6"
                {...register("clockin_note")}
              />
            </div>
            <div className=" flex items-end justify-end mt-2">
              <button className=" pms-button mr-2" type="submit">
                Update Log Time
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

export default UpdateClockInReqModal;
