import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";

const NameLocationTable = () => {
  const [tableOpen, setTableOpen] = useState(false);
  const [combo, setCombo] = useState(false);
  // const [value, onChange] = useState("");
  const [value, setValue] = useState(null);
  const handleChange = (newValue) => {
    setValue(newValue);
    console.log(newValue);
  };

  const handleTable = () => {
    setTableOpen(!tableOpen);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    console.log(combo);
  };
  console.log(errors);
  return (
    <div>
      <h2
        onClick={handleTable}
        className=" mt-4 text-xs p-2 text-white bg-secondary"
      >
        Box No 33
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
              <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-5 mr-2 gap-5">
                {/* name  */}
                <div>
                  {" "}
                  <label className="label">
                    <span className="label-text text-xs text-gray-500 text-left">
                      Name
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="ABC Behavioral Therapy Center"
                    name="name"
                    className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Name is required",
                      },
                    })}
                  />
                  <label className="label">
                    <span className="label-text-alt">
                      {" "}
                      {errors.name?.type === "required" && (
                        <p className=" text-red-500">{errors.name.message}</p>
                      )}
                    </span>
                  </label>
                </div>
                {/* address 1 */}
                <div>
                  {" "}
                  <label className="label">
                    <span className="label-text text-xs text-gray-500 text-left">
                      Address
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="ABC Behavioral Therapy Center"
                    name="address"
                    className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
                    {...register("address", {
                      required: {
                        value: true,
                        message: "Address is required",
                      },
                    })}
                  />
                  <label className="label">
                    <span className="label-text-alt">
                      {" "}
                      {errors.address?.type === "required" && (
                        <p className=" text-red-500">
                          {errors.address.message}
                        </p>
                      )}
                    </span>
                  </label>
                </div>
                <div>
                  {" "}
                  <label className="label">
                    <span className="label-text text-xs text-gray-500 text-left">
                      Address 2
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="ABC Behavioral Therapy Center"
                    name="addressTwo"
                    className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
                    {...register("addressTwo", {
                      required: {
                        value: true,
                        message: "Address is required",
                      },
                    })}
                  />
                  <label className="label">
                    <span className="label-text-alt">
                      {" "}
                      {errors.addressTwo?.type === "required" && (
                        <p className=" text-red-500">
                          {errors.addressTwo.message}
                        </p>
                      )}
                    </span>
                  </label>
                </div>
                {/* city  */}
                <div>
                  {" "}
                  <label className="label">
                    <span className="label-text text-xs text-gray-500 text-left">
                      City
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="ABC Behavioral Therapy Center"
                    name="city"
                    className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
                    {...register("city", {
                      required: {
                        value: true,
                        message: "City is required",
                      },
                    })}
                  />
                  <label className="label">
                    <span className="label-text-alt">
                      {" "}
                      {errors.city?.type === "required" && (
                        <p className=" text-red-500">{errors.city.message}</p>
                      )}
                    </span>
                  </label>
                </div>
                {/* state  */}
                <div>
                  <label className="label">
                    <span className="label-text text-xs text-gray-500 text-left">
                      State
                    </span>
                  </label>
                  <select
                    className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
                    {...register("state")}
                  >
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Miss">Miss</option>
                    <option value="Dr">Dr</option>
                  </select>
                </div>
                {/* Zip  */}
                <div>
                  {" "}
                  <label className="label">
                    <span className="label-text text-xs text-gray-500 text-left">
                      Zip
                    </span>
                  </label>
                  <input
                    type="number"
                    placeholder="ABC Behavioral Therapy Center"
                    name="zip"
                    className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
                    {...register("zip")}
                  />
                </div>
                {/* phone  */}
                <div>
                  {" "}
                  <label className="label">
                    <span className="label-text text-xs text-gray-500 text-left">
                      Phone
                    </span>
                  </label>
                  <input
                    type="number"
                    placeholder="ABC Behavioral Therapy Center"
                    name="phone"
                    className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
                    {...register("phone")}
                  />
                </div>
                {/* short code  */}
                <div>
                  {" "}
                  <label className="label">
                    <span className="label-text text-xs text-gray-500 text-left">
                      Short Code
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="ABC Behavioral Therapy Center"
                    name="shortCode"
                    className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
                    {...register("shortCode")}
                  />
                </div>
                {/* email  */}
                <div>
                  {" "}
                  <label className="label">
                    <span className="label-text text-xs text-gray-500 text-left">
                      Email
                    </span>
                  </label>
                  <input
                    type="email"
                    placeholder="ABC Behavioral Therapy Center"
                    name="shortCode"
                    className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email is required",
                      },
                      pattern: {
                        value: /@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                        message: "Provide a valid Email", // JS only: <p>error message</p> TS only support string
                      },
                    })}
                  />
                  <label className="label">
                    <span className="label-text-alt">
                      {" "}
                      {errors.email?.type === "required" && (
                        <p className=" text-red-500">{errors.email.message}</p>
                      )}
                      {errors.email?.type === "pattern" && (
                        <p className=" text-red-500">{errors.email.message}</p>
                      )}
                    </span>
                  </label>
                </div>
                {/* EIN */}
                <div>
                  {" "}
                  <label className="label">
                    <span className="label-text text-xs text-gray-500 text-left">
                      EIN
                    </span>
                  </label>
                  <input
                    type="number"
                    placeholder="ABC Behavioral Therapy Center"
                    name="EIN"
                    className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
                    {...register("EIN")}
                  />
                </div>
                {/* NPI */}
                <div>
                  {" "}
                  <label className="label">
                    <span className="label-text text-xs text-gray-500 text-left">
                      NPI
                    </span>
                  </label>
                  <input
                    type="number"
                    placeholder="ABC Behavioral Therapy Center"
                    name="NPI"
                    className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
                    {...register("NPI")}
                  />
                </div>
                {/* taxonomy */}
                <div>
                  {" "}
                  <label className="label">
                    <span className="label-text text-xs text-gray-500 text-left">
                      Taxonomy
                    </span>
                  </label>
                  <input
                    type="number"
                    placeholder="ABC Behavioral Therapy Center"
                    name="taxonomy"
                    className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
                    {...register("taxonomy")}
                  />
                </div>
                {/* Contact person name  */}
                <div>
                  {" "}
                  <label className="label">
                    <span className="label-text text-xs text-gray-500 text-left">
                      Contact Person
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="ABC Behavioral Therapy Center"
                    name="contactPerson"
                    className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
                    {...register("contactPerson", {
                      required: {
                        value: true,
                        message: "contact person name is required",
                      },
                    })}
                  />
                  <label className="label">
                    <span className="label-text-alt">
                      {" "}
                      {errors.contactPerson?.type === "required" && (
                        <p className=" text-red-500">
                          {errors.contactPerson.message}
                        </p>
                      )}
                    </span>
                  </label>
                </div>
                {/* Service Area Miles */}
                <div>
                  {" "}
                  <label className="label">
                    <span className="label-text text-xs text-gray-500 text-left">
                      Service Area Miles
                    </span>
                  </label>
                  <input
                    type="number"
                    placeholder="ABC Behavioral Therapy Center"
                    name="ServiceArea"
                    className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
                    {...register("serviceArea")}
                  />
                </div>
                {/* SFTP Username */}
                <div>
                  {" "}
                  <label className="label">
                    <span className="label-text text-xs text-gray-500 text-left">
                      SFTP Username
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="demo"
                    name="SFTP"
                    className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
                    {...register("SFTP")}
                  />
                </div>
                {/* password  */}
                <div>
                  {" "}
                  <label className="label">
                    <span className="label-text text-xs text-gray-500 text-left">
                      SFTP Password
                    </span>
                  </label>
                  <input
                    type="password"
                    placeholder="ABC Behavioral Therapy Center"
                    name="SFTP_Password"
                    className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
                    {...register("SFTP_Password", {
                      required: {
                        value: true,
                        message: "SFTP_Password is required",
                      },
                    })}
                  />
                  <label className="label">
                    <span className="label-text-alt">
                      {" "}
                      {errors.SFTP_Password?.type === "required" && (
                        <p className=" text-red-500">
                          {errors.password.message}
                        </p>
                      )}
                    </span>
                  </label>
                </div>
                {/* Default POS  */}
                <div>
                  <label className="label">
                    <span className="label-text text-xs text-gray-500 text-left">
                      Default POS
                    </span>
                  </label>
                  <select
                    className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
                    {...register("DefaultPOS")}
                  >
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Miss">Miss</option>
                    <option value="Dr">Dr</option>
                  </select>
                </div>
                {/* Default Timezone:  */}
                <div>
                  <label className="label">
                    <span className="label-text text-xs text-gray-500 text-left">
                      Default Timezone:
                    </span>
                  </label>
                  <select
                    className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
                    {...register("DefaultTime")}
                  >
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Miss">Miss</option>
                    <option value="Dr">Dr</option>
                  </select>
                </div>

                <div class="mx-auto mt-10 items-start">
                  <div class="form-check form-switch ">
                    <input
                      class="form-check-input appearance-none w-9  rounded-full float-left h-5 align-center bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                      onClick={() => setCombo(!combo)}
                    />
                    <label
                      class="form-check-label inline-block ml-2 text-sm text-gray-500"
                      for="flexSwitchCheckDefault"
                    >
                      Combo codes
                    </label>
                  </div>
                </div>

                {/* done  */}
              </div>
              <div>
                <h1 className="">Select Working Hours</h1>
                <div className=" my-5 mr-2 gap-5">
                  <div className="flex items-center">
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <TimePicker
                        label="Time"
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  </div>
                </div>
              </div>

              {/* submit  */}
              <input
                className="btn btn-primary bg-gradient-to-r from-secondary to-primary my-5 hover:to-secondary text-white "
                type="submit"
                value={"Create Account"}
              />
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default NameLocationTable;
