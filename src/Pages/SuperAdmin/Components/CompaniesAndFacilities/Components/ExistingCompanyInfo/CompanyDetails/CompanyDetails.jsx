import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import AddNewFacilities from "./AddNewFacilities";

const CompanyDetails = ({
  companyDetails,
  handleCompanyDetails,
  setAddFacilities,
  addFacilities,
}) => {
  const { register, handleSubmit, reset } = useForm();
  const [note, setNote] = useState();
  const onSubmit = (data) => {
    console.log(data);
    console.log(note);
    reset();
  };
  return (
    <div>
      <h2
        onClick={() => {
          handleCompanyDetails();
          console.log(companyDetails);
        }}
        className=" mt-4 text-sm font-medium px-2 py-2 text-white bg-secondary rounded-sm"
      >
        Company Details
      </h2>
      {companyDetails && (
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
              <div className="px-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-5 my-3 mr-2 gap-x-6 gap-y-1">
                {/* name  */}
                <div>
                  <label className="label">
                    <span className="label-font">Name</span>
                  </label>
                  <input
                    type="text"
                    name="Name"
                    className="input-border  input-font w-full focus:outline-none py-[1px]"
                    {...register("Name")}
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-font">Address</span>
                  </label>
                  <input
                    type="text"
                    name="address2"
                    className="input-border input-font w-full focus:outline-none py-[1px]"
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
                    className="input-border input-font w-full focus:outline-none py-[1px]"
                    {...register("city")}
                  />
                </div>

                <div>
                  <label className="label">
                    <span className="label-font">State</span>
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
                    <span className="label-font">Zip</span>
                  </label>
                  <input
                    type="text"
                    name="zip"
                    className="input-border input-font w-full focus:outline-none py-[1px]"
                    {...register("zip")}
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-font">Email</span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    className="input-border input-font w-full focus:outline-none py-[1px]"
                    {...register("email")}
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-font">Website</span>
                  </label>
                  <input
                    type="text"
                    name="website"
                    className="input-border input-font w-full focus:outline-none py-[1px]"
                    {...register("website")}
                  />
                </div>
              </div>
              <div className="bg-gray-200 py-[1px] my-5"></div>
              {/* Add New Facilities */}
              <div className="">
                <div className="mx-3 flex items-center gap-x-2">
                  <input
                    type="checkbox"
                    onClick={() => setAddFacilities(!addFacilities)}
                    defaultChecked={addFacilities ? true : false}
                  />
                  <label className="label">
                    <span className="modal-label-name">Add New Facilities</span>
                  </label>
                </div>
                {addFacilities && (
                  <AddNewFacilities
                    setNote={setNote}
                    register={register}
                  ></AddNewFacilities>
                )}
              </div>
              {/* <div className="my-5 ">
                <button className="pms-button" type="submit">
                  Save Box 33
                </button>
              </div> */}
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default CompanyDetails;
