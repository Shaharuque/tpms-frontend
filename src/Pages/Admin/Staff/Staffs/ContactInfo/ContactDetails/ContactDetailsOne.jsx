import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import TextArea from "antd/lib/input/TextArea";

const ContactDetailsOne = ({ contactDetails, handleContactDetails }) => {
  const [note, setNote] = useState("");
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  console.log(note);
  return (
    <div>
      {" "}
      <h2
        onClick={handleContactDetails}
        className=" mt-4 text-xs font-normal px-2 py-2 text-white bg-secondary rounded-sm"
      >
        Contact Details
      </h2>
      {contactDetails && (
        <div className="border">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="px-2"
            style={{
              transition: "all .3s ease-out",
            }}
          >
            {" "}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 my-3 mr-2 gap-x-4 gap-y-1">
                {/* name  */}
                <div>
                  <label className="label">
                    <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                      Address1
                    </span>
                  </label>
                  <input
                    type="text"
                    name="address1"
                    className="input-border text-gray-600 rounded-sm py-[1px] text-[14px] font-medium w-full ml-1 focus:outline-none"
                    {...register("address1")}
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                      Address2
                    </span>
                  </label>
                  <input
                    type="text"
                    name="address2"
                    className="input-border text-gray-600 rounded-sm py-[1px] text-[14px] font-medium w-full ml-1 focus:outline-none"
                    {...register("address2")}
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                      City
                    </span>
                  </label>
                  <input
                    type="text"
                    name="city"
                    className="input-border text-gray-600 rounded-sm py-[1px] text-[14px] font-medium w-full ml-1 focus:outline-none"
                    {...register("city")}
                  />
                </div>

                <div>
                  <label className="label">
                    <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                      State
                    </span>
                  </label>
                  <select
                    className="input-border text-gray-600 rounded-sm text-[14px] font-medium w-full ml-1 focus:outline-none"
                    {...register("state")}
                  >
                    <option value="Speech Therapist">Speech Therapist</option>
                    <option value="female">Female</option>
                  </select>
                </div>

                <div>
                  <label className="label">
                    <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                      Zip
                    </span>
                  </label>
                  <input
                    type="text"
                    name="zip"
                    className="input-border text-gray-600 rounded-sm py-[1px] text-[14px] font-medium w-full ml-1 focus:outline-none"
                    {...register("zip")}
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                      Mobile
                    </span>
                  </label>
                  <input
                    type="text"
                    name="mobile"
                    className="input-border text-gray-600 rounded-sm py-[1px] text-[14px] font-medium w-full ml-1 focus:outline-none"
                    {...register("mobile")}
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                      Fax
                    </span>
                  </label>
                  <input
                    type="text"
                    name="fax"
                    className="input-border text-gray-600 rounded-sm py-[1px] text-[14px] font-medium w-full ml-1 focus:outline-none"
                    {...register("fax")}
                  />
                </div>

                <div>
                  <label className="label">
                    <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                      Main Phone
                    </span>
                  </label>
                  <input
                    type="text"
                    name="main_phone"
                    className="input-border text-gray-600 rounded-sm py-[1px] text-[14px] font-medium w-full ml-1 focus:outline-none"
                    {...register("main_phone")}
                  />
                </div>
              </div>
              <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 my-3 mr-2 gap-x-2 gap-y-1">
                <div>
                  <label className="label">
                    <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                      Notes
                    </span>
                  </label>
                  <TextArea
                    rows={4}
                    size="middle"
                    onChange={(e) => setNote(e.target.value)}
                  />
                </div>
              </div>
              <div className="my-3 ">
                <button className="pms-button" type="submit">
                  Save Contact
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ContactDetailsOne;
