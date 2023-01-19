import { Modal } from "antd";
import React from "react";
import { useForm } from "react-hook-form";
import { IoCloseCircleOutline } from "react-icons/io5";

const EditQuestionnaire = ({ open, handleClose }) => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div>
      {" "}
      <div>
        <Modal
          open={open}
          centered
          width={500}
          footer={null}
          bodyStyle={{ padding: "0" }}
          closable={false}
          className="box rounded-xl"
        >
          <div className="p-2">
            <div className="flex items-center justify-between">
              <h1 className="text-lg text-left text-orange-400 ">
                Add Program Category
              </h1>
              <IoCloseCircleOutline
                onClick={handleClose}
                className="text-gray-600 text-2xl hover:text-primary"
              />
            </div>
            <div className="bg-gray-200 py-[1px] mt-3"></div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex items-center gap-3 text-sm">
                <div>
                  <label className="label">
                    <span className="modal-label-name">Question</span>
                  </label>
                  <input
                    type="text"
                    placeholder="program_category"
                    name="program_category"
                    className="modal-input-field ml-1 w-full"
                    {...register("program_category")}
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="modal-label-name">Answer Type</span>
                  </label>
                  <select
                    className="modal-input-field ml-1 w-full"
                    {...register("type")}
                  >
                    <option value={0}>UnBillable</option>
                    <option value={1}>Billable</option>
                  </select>
                </div>
              </div>
              <div className="bg-gray-200 py-[1px] mt-3"></div>
              <div className=" flex items-end justify-end mt-2">
                <button className=" pms-button mr-2" type="submit">
                  Upload
                </button>

                <button className="pms-close-button" onClick={handleClose}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default EditQuestionnaire;
