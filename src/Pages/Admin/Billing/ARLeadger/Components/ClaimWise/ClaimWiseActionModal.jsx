import { Modal } from "antd";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { IoCloseCircleOutline } from "react-icons/io5";
import ClaimWishComments from "./ClaimWiseComments/ClaimWiseComments";

const ClaimWishActionModal = ({ handleClose, open, row, record }) => {
  const { register, handleSubmit, reset } = useForm();
  const [notes, setNotes] = useState("");

  const onSubmit = (data) => {
    // console.log(record);
    reset();
  };
  console.log(row);
  useEffect(() => {
    setTimeout(() => {
      reset({
        // description: `${row.original.description}`,
        // expiry_Date: `${row.original.upload_date}`,
      });
    }, 500);
  }, [reset, row]);
  return (
    <div>
      {" "}
      <div>
        <Modal
          // fullScreen={fullScreen}
          open={open}
          centered
          width={700}
          footer={false}
          closable={false}
          bodyStyle={{ padding: "0" }}
          className="box rounded-md"
        >
          <div className="px-5 py-2 ">
            <div className="flex items-center justify-between">
              <h1 className="text-lg text-left text-orange-400 ">
                Claim History - {record.claim_no}
              </h1>
              <IoCloseCircleOutline
                onClick={handleClose}
                className="text-gray-600 font-semibold  text-2xl hover:text-primary"
              />
            </div>
            <div className="bg-gray-200 py-[1px] mt-3"></div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="">
                <div className="pr-2">
                  <label className="label">
                    <span className="label-text text-[15px] font-medium text-[#9b9b9b] text-left">
                      Notes
                    </span>
                  </label>
                  <textarea
                    {...register("notes")}
                    // onChange={(e) => setTextNotes(e.target.value)}
                    name="comment"
                    className="border border-gray-300 text-sm p-2  ml-1 h-24 w-full"
                  ></textarea>
                </div>
                <div className=" flex items-end justify-end mt-2">
                  <button className=" pms-button mr-2" type="submit">
                    Add Comment
                  </button>
                </div>
              </div>
              <div className="bg-gray-200 py-[1px] mt-3"></div>
              <div>
                <ClaimWishComments></ClaimWishComments>
              </div>

              <div className="bg-gray-200 py-[1px] mt-3"></div>
              <div className=" flex items-end justify-end mt-2">
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

export default ClaimWishActionModal;
