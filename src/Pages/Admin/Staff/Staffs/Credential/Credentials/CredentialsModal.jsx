import { Modal } from "antd";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { IoCloseCircleOutline } from "react-icons/io5";

const CredentialsModal = ({ handleClose, open, name }) => {
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
              <h1 className="text-lg text-left text-orange-400 ">Credential</h1>
              <IoCloseCircleOutline
                onClick={handleClose}
                className="text-gray-600 text-2xl hover:text-primary"
              />
            </div>

            <div className="bg-gray-200 py-[1px] mt-3"></div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-3 mr-2 gap-x-2 gap-y-1">
                <div>
                  <label className="label">
                    <span className="modal-label-name">Credential</span>
                  </label>
                  <select
                    className="modal-input-field ml-1 w-full"
                    {...register("credential")}
                  >
                    <option value="Speech Therapist">Speech Therapist</option>
                    <option value="female">Female</option>
                  </select>
                </div>

                <div>
                  <label className="label">
                    <span className="modal-label-name">Date Issued</span>
                  </label>
                  <input
                    type="date"
                    className="modal-input-field ml-1 w-full"
                    {...register("date_issue")}
                  />
                </div>
                <div>
                  {" "}
                  <label className="label">
                    <span className="modal-label-name">Expiry Date</span>
                  </label>
                  <input
                    type="date"
                    className="modal-input-field ml-1 w-full"
                    {...register("expiry_Date")}
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="modal-label-name">Upload File</span>
                  </label>
                  <input
                    type="file"
                    className=" px-2 py-[5px] mx-1 text-xs w-full"
                    {...register("fileName")}
                  />
                </div>
                <div className="flex ml-1 mt-1 items-center">
                  <input
                    type="checkbox"
                    name="patient"
                    onClick={() => {
                      setValue(!value);
                    }}
                  />
                  <span className="modal-label-name">
                    Credential Not Applicable
                  </span>
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

export default CredentialsModal;
