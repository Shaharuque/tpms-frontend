import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import TextArea from "antd/lib/input/TextArea";

const ContactDetailsTwo = ({ emergency, handleEmergencyDetails }) => {
  const [note, setNote] = useState("");

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div>
      <div>
        <h2
          onClick={handleEmergencyDetails}
          className=" mt-4 text-xs font-normal px-2 py-2 rounded-sm text-white bg-secondary"
        >
          Emergency Contact Details
        </h2>
        {emergency && (
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
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-5 my-3 mr-2 gap-x-4 gap-y-1">
                  {/* name  */}
                  <div>
                    <label className="label">
                      <span className="label-font">Contact Name</span>
                    </label>
                    <input
                      type="text"
                      name="contact_name"
                      className="input-border input-font w-full focus:outline-none"
                      {...register("contact_name")}
                    />
                  </div>
                  <div>
                    <label className="label">
                      <span className="label-font">Address1</span>
                    </label>
                    <input
                      type="text"
                      name="address1"
                      className="input-border input-font w-full focus:outline-none"
                      {...register("address1")}
                    />
                  </div>
                  <div>
                    <label className="label">
                      <span className="label-font">Address2</span>
                    </label>
                    <input
                      type="text"
                      name="address2"
                      className="input-border input-font w-full focus:outline-none"
                      {...register("address2")}
                    />
                  </div>
                  <div>
                    <label className="label">
                      <span className="label-font">City</span>
                    </label>
                    <input
                      type="text"
                      name="city"
                      className="input-border input-font w-full focus:outline-none"
                      {...register("city")}
                    />
                  </div>

                  <div>
                    <label className="label">
                      <span className="label-font">State</span>
                    </label>
                    <select
                      className="input-border input-font w-full focus:outline-none"
                      {...register("state")}
                    >
                      <option value="Speech Therapist">Speech Therapist</option>
                      <option value="female">Female</option>
                    </select>
                  </div>

                  <div>
                    <label className="label">
                      <span className="label-font">Zip</span>
                    </label>
                    <input
                      type="text"
                      name="zip"
                      className="input-border input-font w-full focus:outline-none"
                      {...register("zip")}
                    />
                  </div>
                  <div>
                    <label className="label">
                      <span className="label-font">Mobile</span>
                    </label>
                    <input
                      type="text"
                      name="mobile"
                      className="input-border input-font w-full focus:outline-none"
                      {...register("mobile")}
                    />
                  </div>
                  <div>
                    <label className="label">
                      <span className="label-font">Fax</span>
                    </label>
                    <input
                      type="text"
                      name="fax"
                      className="input-border input-font w-full focus:outline-none"
                      {...register("fax")}
                    />
                  </div>

                  <div>
                    <label className="label">
                      <span className="label-font">Main Phone</span>
                    </label>
                    <input
                      type="text"
                      name="main_phone"
                      className="input-border input-font w-full focus:outline-none"
                      {...register("main_phone")}
                    />
                  </div>
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 my-3 mr-2 gap-x-2 gap-y-1">
                  <div>
                    <label className="label">
                      <span className="label-font">Notes</span>
                    </label>
                    <TextArea
                      rows={4}
                      placeholder="maxLength is 6"
                      size="middle"
                      onChange={(e) => setNote(e.target.value)}
                    />
                  </div>
                </div>
                <div className="my-3">
                  <button className=" pms-button" type="submit">
                    Save Emergency Contact
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactDetailsTwo;
