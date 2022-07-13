import React, { memo, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Switch } from "@mui/material";
import CustomTimePicker from "./CustomTimePicker";

const NameLocationTable = () => {
  const [tableOpen, setTableOpen] = useState(true);
  const [combo, setCombo] = useState(false);
  // const [value, onChange] = useState("");
  const [mondayFrom, setMondayFrom] = useState(null);
  const [mondayTo, setMondayTo] = useState(null);
  const [tueFrom, setTueFrom] = useState(null);
  const [tueTo, setTueTo] = useState(null);
  const [wedFrom, setWedFrom] = useState(null);
  const [wedTo, setWedTo] = useState(null);
  const [thuFrom, setThuFrom] = useState(null);
  const [thuto, setThuto] = useState(null);
  const [friFrom, setFriFrom] = useState(null);
  const [friTo, setFriTo] = useState(null);
  const [satFrom, setSatFrom] = useState(null);
  const [satTo, setSatTo] = useState(null);
  const [sunFrom, setSunFrom] = useState(null);
  const [sunTo, setSunTo] = useState(null);

  // timeChange
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

  // Editable value
  useEffect(() => {
    // you can do async server request and fill up form
    setTimeout(() => {
      reset({
        name: `ABC Behavioral Therapy Center`,
      });
    }, 2000);
  }, [reset]);
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
              <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-5 mr-2 gap-2">
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
                    className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                    {...register("name")}
                  />
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
                    className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                    {...register("address")}
                  />
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
                    className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                    {...register("addressTwo")}
                  />
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
                    className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                    {...register("city")}
                  />
                </div>
                {/* state  */}
                <div>
                  <label className="label">
                    <span className="label-text text-xs text-gray-500 text-left">
                      State
                    </span>
                  </label>
                  <select
                    className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
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
                    className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
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
                    className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
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
                    className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
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
                    className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                    {...register("email")}
                  />
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
                    className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
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
                    className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
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
                    className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
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
                    className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                    {...register("contactPerson")}
                  />
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
                    className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
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
                    className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
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
                    className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                    {...register("SFTP_Password")}
                  />
                </div>
                {/* Default POS  */}
                <div>
                  <label className="label">
                    <span className="label-text text-xs text-gray-500 text-left">
                      Default POS
                    </span>
                  </label>
                  <select
                    className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
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
                    className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                    {...register("DefaultTime")}
                  >
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Miss">Miss</option>
                    <option value="Dr">Dr</option>
                  </select>
                </div>

                <div className="mx-auto mt-10 items-start">
                  <div>
                    <Switch size="small" onClick={() => setCombo(!combo)} />
                    <label
                      className="form-check-label inline-block ml-2 text-sm text-gray-500"
                      htmlFor="flexSwitchCheckDefault"
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
                  <div className="flex flex-wrap items-center my-1 gap-2">
                    <h5 className="text-sm text-gray-600 w-20">Monday</h5>
                    <input
                      type="time"
                      name="MondayTo"
                      className="border rounded-sm px-2 py-[5px] mx-1 text-xs "
                      {...register("MondayTo")}
                    />

                    <span className="text-sm text-gray-600">to</span>
                    <input
                      type="time"
                      name="MondayFrom"
                      className="border rounded-sm px-2 py-[5px] mx-1 text-xs "
                      {...register("MondayFrom")}
                    />
                  </div>
                  <div className="flex flex-wrap items-center my-1 gap-2">
                    <h5 className="text-sm text-gray-600 w-20">Tuesday</h5>
                    <input
                      type="time"
                      name="TuesdayTo"
                      className="border rounded-sm px-2 py-[5px] mx-1 text-xs "
                      {...register("TuesdayTo")}
                    />

                    <span className="text-sm text-gray-600">to</span>
                    <input
                      type="time"
                      name="TuesdayFrom"
                      className="border rounded-sm px-2 py-[5px] mx-1 text-xs "
                      {...register("TuesdayFrom")}
                    />
                  </div>
                  <div className="flex flex-wrap items-center my-1 gap-2">
                    <h5 className="text-sm text-gray-600 w-20">Wednesday</h5>
                    <input
                      type="time"
                      name="WednesdayTo"
                      className="border rounded-sm px-2 py-[5px] mx-1 text-xs "
                      {...register("WednesdayTo")}
                    />

                    <span className="text-sm text-gray-600">to</span>
                    <input
                      type="time"
                      name="WednesdayFrom"
                      className="border rounded-sm px-2 py-[5px] mx-1 text-xs "
                      {...register("WednesdayFrom")}
                    />
                  </div>
                  <div className="flex flex-wrap items-center my-1 gap-2">
                    <h5 className="text-sm text-gray-600 w-20">Thursday</h5>
                    <input
                      type="time"
                      name="ThursdayTo"
                      className="border rounded-sm px-2 py-[5px] mx-1 text-xs "
                      {...register("ThursdayTo")}
                    />

                    <span className="text-sm text-gray-600">to</span>
                    <input
                      type="time"
                      name="ThursdayFrom"
                      className="border rounded-sm px-2 py-[5px] mx-1 text-xs "
                      {...register("ThursdayFrom")}
                    />
                  </div>
                  <div className="flex flex-wrap items-center my-1 gap-2">
                    <h5 className="text-sm text-gray-600 w-20">Friday</h5>
                    <input
                      type="time"
                      name="FridayTo"
                      className="border rounded-sm px-2 py-[5px] mx-1 text-xs "
                      {...register("FridayTo")}
                    />

                    <span className="text-sm text-gray-600">to</span>
                    <input
                      type="time"
                      name="FridayFrom"
                      className="border rounded-sm px-2 py-[5px] mx-1 text-xs "
                      {...register("FridayFrom")}
                    />
                  </div>
                  <div className="flex flex-wrap items-center my-1 gap-2">
                    <h5 className="text-sm text-gray-600 w-20">Saturday</h5>
                    <input
                      type="time"
                      name="SaturdayTo"
                      className="border rounded-sm px-2 py-[5px] mx-1 text-xs "
                      {...register("SaturdayTo")}
                    />

                    <span className="text-sm text-gray-600">to</span>
                    <input
                      type="time"
                      name="SaturdayFrom"
                      className="border rounded-sm px-2 py-[5px] mx-1 text-xs "
                      {...register("SaturdayFrom")}
                    />
                  </div>
                  <div className="flex flex-wrap items-center my-1 gap-2">
                    <h5 className="text-sm text-gray-600 w-20">Sunday</h5>
                    <input
                      type="time"
                      name="SundayTo"
                      className="border rounded-sm px-2 py-[5px] mx-1 text-xs "
                      {...register("SundayTo")}
                    />

                    <span className="text-sm text-gray-600">to</span>
                    <input
                      type="time"
                      name="SundayFrom"
                      className="border rounded-sm px-2 py-[5px] mx-1 text-xs "
                      {...register("SundayFrom")}
                    />
                  </div>
                </div>
              </div>

              {/* submit  */}
              <input
                className=" px-3 py-1 rounded-md text-sm font-normal bg-gradient-to-r from-secondary to-primary my-5 hover:to-secondary text-white "
                type="submit"
                value={"Save"}
              />
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default memo(NameLocationTable);
