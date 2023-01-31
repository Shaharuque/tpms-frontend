import { Modal } from "antd";
import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import GlobalMultiSelect from "../../../../../../../Shared/CustomComponents/GlobalMultiSelect";
import TagPatientTable from "./TagPatientTable";

const TagPatientModal = ({ open, handleTagPatientClose }) => {
  return (
    <div>
      <Modal
        open={open}
        centered
        footer={null}
        bodyStyle={{ padding: "0" }}
        closable={false}
        className="box rounded-xl"
      >
        <div className="p-2">
          <div className="flex items-center justify-between">
            <h1 className="text-lg text-left text-orange-400 ">Tag Patients</h1>
            <IoCloseCircleOutline
              onClick={handleTagPatientClose}
              className="text-gray-600 text-2xl hover:text-primary"
            />
          </div>
          <div className="bg-gray-200 py-[1px] mt-3"></div>
          <form>
            <div className="flex items-center gap-2 mx-2 my-4">
              <div>
                <label className="label">
                  <span className=" label-font">Select Patient(s)</span>
                </label>

                <div className="">
                  <div className="pt-[4px]">
                    <GlobalMultiSelect />
                  </div>
                </div>
              </div>
              <button className=" pms-button mt-6" type="submit">
                Tag
              </button>
            </div>
            <div>
              <TagPatientTable></TagPatientTable>
            </div>
            <div className="bg-gray-200 py-[1px] mt-3"></div>
            <div className=" flex items-end justify-end mt-2">
              <button
                className="pms-close-button"
                onClick={handleTagPatientClose}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default TagPatientModal;
