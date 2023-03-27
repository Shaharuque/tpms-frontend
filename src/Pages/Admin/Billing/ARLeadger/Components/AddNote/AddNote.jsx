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
              <option value="Corrected Claim">Corrected Claim</option>
              <option value="COB">COB</option>
              <option value="NCOF-Re-File">NCOF-Re-File</option>
              <option value="Appeal">Appeal</option>
              <option value="Reprocessing">Reprocessing</option>
              <option value="Medical Records">Medical Records</option>
              <option value="Payor Escalation">Payor Escalation</option>
              <option value="Provider Escalation">Provider Escalation</option>
              <option value="MG Escalations">MG Escalations</option>
              <option value="Write Off">Write Off</option>
              <option value="Overpayment">Overpayment</option>
              <option value="Timely Filing">Timely Filing</option>
              <option value="Paid to Patient">Paid to Patient</option>
              <option value="V-Mail/ Follow up">V-Mail/ Follow up</option>
              <option value="Paid">Paid</option>
              <option value="In Process">In Process</option>
              <option value="To call">To call</option>
              <option value="Authorization - Reprocess">
                Authorization - Reprocess
              </option>
              <option value="Maximum Benefit Reached - Reprocess">
                Maximum Benefit Reached - Reprocess
              </option>
              <option value="Authorization - Escalation">
                Authorization - Escalation
              </option>
              <option value="Maximum Benefit Reached - Escalation">
                Maximum Benefit Reached - Escalation
              </option>
              <option value="Need Followup">Need Followup</option>
              <option value="Appealed">Appealed</option>
              <option value="Claim sent back for reprocess">
                Claim sent back for reprocess
              </option>
              <option value="Claim submitted">Claim submitted</option>
              <option value="Sent to posting team">Sent to posting team</option>
              <option value="Rebill claim">Rebill claim</option>
              <option value="Duplicate - Reprocess">
                Duplicate - Reprocess
              </option>
              <option value="Coverage Terminated - Reprocess">
                Coverage Terminated - Reprocess
              </option>
              <option value="Coverage Terminated - Escalation">
                Coverage Terminated - Escalation
              </option>
              <option value="Set to pay">Set to pay</option>
              <option value="Lack of information">Lack of information</option>
              <option value="Predetermination - Reprocess">
                Predetermination - Reprocess
              </option>
              <option value="Predetermination - Escalation">
                Predetermination - Escalation
              </option>
              <option value="Non covered - reprocess">
                Non covered - reprocess
              </option>
              <option value="Non covered - Escalation">
                Non covered - Escalation
              </option>
              <option value="Requested EOB">Requested EOB</option>
              <option value="Awaiting for EOB">Awaiting for EOB</option>
              <option value="Patient Inactive - Reprocess">
                Patient Inactive - Reprocess
              </option>
              <option value="Patient Inactive - Escalation">
                Patient Inactive - Escalation
              </option>
              <option value="Copay issue">Copay issue</option>
              <option value="Out of Network - Reprocess">
                Out of Network - Reprocess
              </option>
              <option value="Out of Network - Escalation">
                Out of Network - Escalation
              </option>
              <option value="Under payment">Under payment</option>
              <option value="Additional Information - Reprocess">
                Additional Information - Reprocess
              </option>
              <option value="Additional information - escalation">
                Additional information - escalation
              </option>
              <option value="Medical records - Reprocess">
                Medical records - Reprocess
              </option>
              <option value="Medical records - Escalation">
                Medical records - Escalation
              </option>
              <option value="Invalid/Missing DX - Reprocess">
                Invalid/Missing DX - Reprocess
              </option>
              <option value="Invalid/Missing DX - Escalation">
                Invalid/Missing DX - Escalation
              </option>
              <option value="Invalid/Missing Modifier - Reprocess">
                Invalid/Missing Modifier - Reprocess
              </option>
              <option value="Invalid/Missing Modifier - Escalation">
                Invalid/Missing Modifier - Escalation
              </option>
              <option value="Need to Transmit">Need to Transmit</option>
              <option value="Credentialling issue - Escalation">
                Credentialling issue - Escalation
              </option>
              <option value="Paid not posted - Sent to posting team">
                Paid not posted - Sent to posting team
              </option>
              <option value="MR submitted">MR submitted</option>
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
