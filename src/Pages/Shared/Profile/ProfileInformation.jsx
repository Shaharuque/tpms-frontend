import React, { useState } from "react";
import { useForm } from "react-hook-form";
import person from "../../Assets/user.png";
import { motion } from "framer-motion";

const ProfileInformation = () => {
  const { register, handleSubmit, reset } = useForm();
  const [profileImage, setProfileImage] = useState("");
  const onSubmit = (data) => {
    console.log(data);
    console.log(profileImage);
  };

  // image uploding code
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="div-img">
          <div>
            <img src={file || person} className=" h-40 " alt="alt" />
          </div>
          <div>
            <div className="my-3 ">
              <input
                className="form-control text-sm border border-gray-300"
                type="file"
                id="formFile"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        {/**/}
        <div className=" grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 my-3 mr-2 gap-x-3 gap-y-1">
          <div>
            <label className="label">
              <span className="pms-input-name">First Name</span>
            </label>
            <input
              type="text"
              name="first_name"
              className="modal-input-field ml-1 w-full"
              {...register("first_name")}
            />
          </div>
          <div>
            <label className="label">
              <span className="pms-input-name">Last Name</span>
            </label>
            <input
              type="text"
              name="last_name"
              className="modal-input-field ml-1 w-full"
              {...register("last_name")}
            />
          </div>
          <div>
            <label className="label">
              <span className="pms-input-name">City</span>
            </label>
            <input
              type="text"
              name="city"
              className="modal-input-field ml-1 w-full"
              {...register("city")}
            />
          </div>
          <div>
            <label className="label">
              <span className="pms-input-name">Country</span>
            </label>
            <select
              className="modal-input-field ml-1 w-full"
              {...register("country")}
            >
              <option value=""></option>
              <option value="Mrs">Mrs</option>
              <option value="Miss">Miss</option>
              <option value="Dr">Dr</option>
            </select>
          </div>
          <div>
            <label className="label">
              <span className="pms-input-name">State</span>
            </label>
            <select
              className="modal-input-field ml-1 w-full"
              {...register("state")}
            >
              <option value=""></option>
              <option value="Mrs">Mrs</option>
              <option value="Miss">Miss</option>
              <option value="Dr">Dr</option>
            </select>
          </div>
          <div>
            <label className="label">
              <span className="pms-input-name">Zip Code</span>
            </label>
            <input
              type="text"
              name="zip_code"
              className="modal-input-field ml-1 w-full"
              {...register("zip_code")}
            />
          </div>
          <div>
            <label className="label">
              <span className="pms-input-name">Gender</span>
            </label>
            <div className="flex items-center">
              <div className="flex ml-1 mt-1 items-center">
                <input
                  type="radio"
                  name="patient"
                  onClick={() => {
                    // setValue(!value);
                  }}
                />
                <span className="text-xs ml-1 text-gray-600 font-normal">
                  female
                </span>
              </div>
              <div className="flex ml-1 mt-1 items-center">
                <input
                  type="radio"
                  name="patient"
                  onClick={() => {
                    // setValue(!value);
                  }}
                />
                <span className="text-xs ml-1 text-gray-600 font-normal">
                  male
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 my-1 ml-1">
          <button className="pms-button mr-2" type="submit">
            Save
          </button>

          <button className="pms-close-button" autoFocus onClick={reset}>
            CANCEL
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default ProfileInformation;
