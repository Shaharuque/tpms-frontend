import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

const ContactDetailsTwo = () => {
  const [note, setNote] = useState("");
  const [tableOpen, setTableOpen] = useState(false);
  const handleTable = () => {
    setTableOpen(!tableOpen);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div>
      <div>
        <h2
          onClick={handleTable}
          className=" mt-4 text-xs font-normal px-2 py-2 rounded-sm text-white bg-secondary"
        >
          Emergency Contact Details
        </h2>
        {tableOpen && (
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
                <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 my-3 mr-2 gap-x-2 gap-y-1">
                  {/* name  */}
                  <div>
                    <label className="label">
                      <span className="label-text text-xs text-gray-600 text-left">
                        Contact Name
                      </span>
                    </label>
                    <input
                      type="text"
                      name="contact_name"
                      className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                      {...register("contact_name")}
                    />
                  </div>
                  <div>
                    <label className="label">
                      <span className="label-text text-xs text-gray-600 text-left">
                        Address1
                      </span>
                    </label>
                    <input
                      type="text"
                      name="address1"
                      className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                      {...register("address1")}
                    />
                  </div>
                  <div>
                    <label className="label">
                      <span className="label-text text-xs text-gray-600 text-left">
                        Address2
                      </span>
                    </label>
                    <input
                      type="text"
                      name="address2"
                      className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                      {...register("address2")}
                    />
                  </div>
                  <div>
                    <label className="label">
                      <span className="label-text text-xs text-gray-600 text-left">
                        City
                      </span>
                    </label>
                    <input
                      type="text"
                      name="city"
                      className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                      {...register("city")}
                    />
                  </div>

                  <div>
                    <label className="label">
                      <span className="label-text text-xs text-gray-600 text-left">
                        State
                      </span>
                    </label>
                    <select
                      className="border rounded-sm px-2 py-[4px] mx-1 text-xs w-full"
                      {...register("state")}
                    >
                      <option value="Speech Therapist">Speech Therapist</option>
                      <option value="female">Female</option>
                    </select>
                  </div>

                  <div>
                    <label className="label">
                      <span className="label-text text-xs text-gray-600 text-left">
                        Zip
                      </span>
                    </label>
                    <input
                      type="text"
                      name="zip"
                      className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                      {...register("zip")}
                    />
                  </div>
                  <div>
                    <label className="label">
                      <span className="label-text text-xs text-gray-600 text-left">
                        Mobile
                      </span>
                    </label>
                    <input
                      type="text"
                      name="mobile"
                      className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                      {...register("mobile")}
                    />
                  </div>
                  <div>
                    <label className="label">
                      <span className="label-text text-xs text-gray-600 text-left">
                        Fax
                      </span>
                    </label>
                    <input
                      type="text"
                      name="fax"
                      className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                      {...register("fax")}
                    />
                  </div>

                  <div>
                    <label className="label">
                      <span className="label-text text-xs text-gray-600 text-left">
                        Main Phone
                      </span>
                    </label>
                    <input
                      type="text"
                      name="main_phone"
                      className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                      {...register("main_phone")}
                    />
                  </div>
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 my-3 mr-2 gap-x-2 gap-y-1">
                  <div>
                    <label className="label">
                      <span className="label-text text-xs text-gray-600 text-left">
                        Notes
                      </span>
                    </label>
                    <textarea
                      onChange={(e) => setNote(e.target.value)}
                      name="comment"
                      className="border text-sm p-1 mt-1 ml-1 h-24 w-full"
                    >
                      Notes
                    </textarea>
                  </div>
                </div>
                <div className="my-3 ml-1">
                  <button
                    className=" py-[5px]  px-4  text-sm font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
                    type="submit"
                  >
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
