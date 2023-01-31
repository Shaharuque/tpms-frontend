import TextArea from "antd/lib/input/TextArea";
import { motion } from "framer-motion";
import React from "react";

const AddNewFacilities = ({ register, setNote }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="px-2"
      style={{
        transition: "all .3s ease-out",
      }}
    >
      <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-4 my-3 mr-2 gap-x-6 gap-y-1">
        <div>
          <label className="label">
            <span className="label-font">
              Facilities Name<span className="text-rose-500">*</span>
            </span>
          </label>
          <input
            type="text"
            name="Facilities_Name"
            className="input-border  input-font w-full focus:outline-none py-[1px]"
            {...register("Facilities_Name")}
          />
        </div>
        <div>
          <label className="label">
            <span className="label-font">
              Main Contact Person<span className="text-rose-500">*</span>
            </span>
          </label>
          <input
            type="text"
            name="main_contact_person"
            className="input-border  input-font w-full focus:outline-none py-[1px]"
            {...register("main_contact_person")}
          />
        </div>
        <div>
          <label className="label">
            <span className="label-font">
              EIN<span className="text-rose-500">*</span>
            </span>
          </label>
          <input
            type="text"
            name="ein"
            className="input-border  input-font w-full focus:outline-none py-[1px]"
            {...register("ein")}
          />
        </div>
        <div>
          <label className="label">
            <span className="label-font">
              Facility Email<span className="text-rose-500">*</span>
            </span>
          </label>
          <input
            type="text"
            name="Facility_Email"
            className="input-border  input-font w-full focus:outline-none py-[1px]"
            {...register("Facility_Email")}
          />
        </div>
        <div className="flex items-center gap-2 ">
          <div className="w-full">
            <label className="label">
              <span className="label-font">Office Start Time</span>
            </label>
            <input
              type="text"
              name="start_time"
              className="input-border  input-font w-full focus:outline-none py-[1px]"
              {...register("start_time")}
            />
          </div>
          <div className="w-full">
            <label className="label">
              <span className="label-font">Office End Time</span>
            </label>
            <input
              type="text"
              name="main_contact_person"
              className="input-border  input-font w-full focus:outline-none py-[1px]"
              {...register("main_contact_person")}
            />
          </div>
        </div>
        <div>
          <label className="label">
            <span className="label-font">
              Service Area Miles<span className="text-rose-500">*</span>
            </span>
          </label>
          <input
            type="text"
            name="service_aria_miles"
            className="input-border  input-font w-full focus:outline-none py-[1px]"
            {...register("service_aria_miles")}
          />
        </div>
        <div>
          <label className="label">
            <span className="label-font">
              Default POS<span className="text-rose-500">*</span>
            </span>
          </label>
          <select
            className="input-border input-font w-full focus:outline-none "
            {...register("state")}
          >
            <option value="Speech Therapist">Speech Therapist</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <label className="label">
            <span className="label-font">
              NPI<span className="text-rose-500">*</span>
            </span>
          </label>
          <input
            type="text"
            name="service_aria_miles"
            className="input-border  input-font w-full focus:outline-none py-[1px]"
            {...register("service_aria_miles")}
          />
        </div>
        <div>
          <label className="label">
            <span className="label-font">
              Virtual Number For SMS<span className="text-rose-500">*</span>
            </span>
          </label>
          <input
            type="text"
            name="virtual_number_for_sms"
            className="input-border  input-font w-full focus:outline-none py-[1px]"
            {...register("virtual_number_for_sms")}
          />
        </div>
        <div>
          <label className="label">
            <span className="label-font">
              Default State<span className="text-rose-500">*</span>
            </span>
          </label>
          <input
            type="text"
            name="default_state"
            className="input-border  input-font w-full focus:outline-none py-[1px]"
            {...register("default_state")}
          />
        </div>
        <div>
          <label className="label">
            <span className="label-font">
              Taxonomy Code<span className="text-rose-500">*</span>
            </span>
          </label>
          <input
            type="number"
            name="taxonomy_code"
            className="input-border  input-font w-full focus:outline-none py-[1px]"
            {...register("taxonomy_code")}
          />
        </div>
        <div className=" flex items-center gap-x-2">
          <input type="checkbox" name="active" {...register("active")} />
          <label className="label">
            <span className="modal-label-name">Is Credential Facility</span>
          </label>
        </div>
        <div className="mt-3">
          <label className="label">
            <span className="label-font">Submit time sheet message</span>
          </label>
          <TextArea
            onChange={(e) => setNote(e.target.value)}
            rows={5}
            placeholder="Notes"
            size="large"
          />
        </div>
      </div>
      <div className="bg-gray-600 text-sm font-normal text-white w-full rounded-sm p-3">
        First Provider/Staff Details (required only during creation of facility)
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-4 my-3 mr-2 gap-x-6 gap-y-1">
        <div>
          <label className="label">
            <span className="label-font">
              Staff's First Name<span className="text-rose-500">*</span>
            </span>
          </label>
          <input
            type="text"
            name="first_name"
            className="input-border  input-font w-full focus:outline-none py-[1px]"
            {...register("first_name")}
          />
        </div>
        <div>
          <label className="label">
            <span className="label-font">
              Staff's Last Name<span className="text-rose-500">*</span>
            </span>
          </label>
          <input
            type="text"
            name="last_name"
            className="input-border  input-font w-full focus:outline-none py-[1px]"
            {...register("last_name")}
          />
        </div>
        <div>
          <label className="label">
            <span className="label-font">
              Staff's Email<span className="text-rose-500">*</span>
            </span>
          </label>
          <input
            type="text"
            name="ein"
            className="input-border  input-font w-full focus:outline-none py-[1px]"
            {...register("ein")}
          />
        </div>
        <div>
          <label className="label">
            <span className="label-font">Staff's DOB</span>
          </label>
          <input
            type="date"
            name="Facility_Email"
            className="input-border  input-font w-full focus:outline-none py-[1px]"
            {...register("Facility_Email")}
          />
        </div>

        <div>
          <label className="label">
            <span className="label-font">
              Staff's Gender<span className="text-rose-500">*</span>
            </span>
          </label>
          <input
            type="text"
            name="service_aria_miles"
            className="input-border  input-font w-full focus:outline-none py-[1px]"
            {...register("service_aria_miles")}
          />
        </div>
        <div>
          <label className="label">
            <span className="label-font">
              Staff's Phone<span className="text-rose-500">*</span>
            </span>
          </label>
          <select
            className="input-border input-font w-full focus:outline-none "
            {...register("state")}
          >
            <option value="Speech Therapist">Speech Therapist</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <label className="label">
            <span className="label-font">
              Staff's Fax<span className="text-rose-500">*</span>
            </span>
          </label>
          <input
            type="text"
            name="service_aria_miles"
            className="input-border  input-font w-full focus:outline-none py-[1px]"
            {...register("service_aria_miles")}
          />
        </div>
        <div>
          <label className="label">
            <span className="label-font">
              Staff's Account Password<span className="text-rose-500">*</span>
            </span>
          </label>
          <input
            type="text"
            name="virtual_number_for_sms"
            className="input-border  input-font w-full focus:outline-none py-[1px]"
            {...register("virtual_number_for_sms")}
          />
        </div>
      </div>

      <div className="my-5 ">
        <button className="pms-button" type="submit">
          Save Company Details
        </button>
      </div>
    </motion.div>
  );
};

export default AddNewFacilities;
