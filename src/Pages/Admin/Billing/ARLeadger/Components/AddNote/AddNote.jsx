import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import useToken from "../../../../../../CustomHooks/useToken";

const AddNote = ({ selectedRowId, bulkNoteSave }) => {
  const [notes, setNotes] = useState(null);
  const { register, handleSubmit, reset } = useForm();
  const { token } = useToken();

  const onSubmit = (data) => {
    if (selectedRowId?.length > 0) {
      const payload = {
        ids: selectedRowId,
        ...data,
        notes,
      };
      bulkNoteSave({
        token,
        payload,
      });
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="my-5"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        {" "}
        <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 my-3 mr-2 gap-x-6 gap-y-1 ">
          <div>
            <label className="label">
              <span className=" flex items-center label-font  ">
                Aging Status
              </span>
            </label>
            <select
              {...register("category_name")}
              className="input-border input-font  w-full focus:outline-none"
            >
              <option value={0}></option>
              <option value="COB">COB</option>
              <option value="NCOF-Re-File">NCOF-Re-File</option>
              <option value="Appeal">Appeal</option>
              <option value="Reprocessing">Reprocessing</option>
              <option value="Medical Records">Medical Records</option>
              <option value="Payor Escalation">Payor Escalation</option>
              <option value="Provider Escalation">Provider Escalation</option>
            </select>
          </div>
          <div>
            <label className="label">
              <span className=" label-font">Follow Up Date</span>
            </label>
            <input
              type="date"
              name="follow-up-date"
              className="input-border input-font py-[1px] w-full focus:outline-none"
              {...register("followup_date")}
            />
          </div>
          <div>
            <label className="label">
              <span className=" label-font">Worked Date</span>
            </label>
            <input
              type="date"
              name="Worked Date"
              className="input-border input-font py-[1px] w-full focus:outline-none"
              {...register("worked_date")}
            />
          </div>
          <div className="sm:col-span-3">
            <label className="label">
              <span className="label-text text-[15px] font-medium text-[#9b9b9b] text-left">
                Notes
              </span>
            </label>
            <textarea
              // {...register("notes")}
              onChange={(e) => setNotes(e.target.value)}
              name="comment"
              className="border border-gray-300 text-sm p-2  ml-1 h-24 w-full sm:w-1/2"
            ></textarea>
          </div>
        </div>
        <div className="mx-1">
          <button className="pms-button " type="submit">
            Save
          </button>
          <button className="pms-close-button  mx-3" type="submit">
            Close
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default AddNote;
