import React, { memo, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Switch } from "antd";

const NameLocationTable = ({ time, box33Open, handleTableOpen, box_no_33 }) => {
  console.log("box33 data", box_no_33);
  const [value, setValue] = useState(true);

  // console.log(time);
  // console.log(time?.mon_end_time);
  // timeChange

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    // reset();
  };

  // Editable value
  useEffect(() => {
    setTimeout(() => {
      reset({
        facility_name: box_no_33?.facility_name,
        address: box_no_33?.address,
        address_two: box_no_33?.address_two,
        city: box_no_33?.city,
        zip: box_no_33?.zip,
        phone_one: box_no_33?.phone_one,
        short_code: box_no_33?.short_code,
        email: box_no_33?.email,
        ein: box_no_33?.ein,
        npi: box_no_33?.npi,
        taxonomy_code: box_no_33?.taxonomy_code,
        contact_person: box_no_33?.contact_person,
        service_area_miles: box_no_33?.service_area_miles,
        ftp_username: box_no_33?.ftp_username,
        ftp_password: box_no_33?.ftp_password,
        // mon_end_time: time?.mon_end_time,
      });
    }, 0);
  }, [box_no_33, time?.mon_end_time, reset]);

  return (
    <div>
      {/* Child 33  */}
      <h2
        onClick={handleTableOpen}
        className=" mt-4 text-xs p-2 text-white bg-secondary"
      >
        Box No 33
      </h2>
      {box33Open && (
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
              <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 my-5 mr-2 gap-6">
                {/* name  */}
                <div>
                  <label className="label">
                    <span className="label-text text-[16px] font-medium text-[#9b9b9b] text-left">
                      Name
                    </span>
                  </label>
                  <input
                    type="text"
                    name="facility_name"
                    className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1 py-[1px] w-full focus:outline-none"
                    {...register("facility_name")}
                  />
                </div>
                {/* address 1 */}
                <div>
                  <label className="label">
                    <span className="label-text text-[16px] font-medium text-[#9b9b9b] text-left">
                      Address
                    </span>
                  </label>
                  <input
                    type="text"
                    name="address"
                    className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1 py-[1px] w-full focus:outline-none"
                    {...register("address")}
                  />
                </div>
                {/* address_two */}
                <div>
                  <label className="label">
                    <span className="label-text text-[16px] font-medium text-[#9b9b9b] text-left">
                      Address 2
                    </span>
                  </label>
                  <input
                    type="text"
                    name="address_two"
                    className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1 py-[1px] w-full focus:outline-none"
                    {...register("address_two")}
                  />
                </div>
                {/* city  */}
                <div>
                  <label className="label">
                    <span className="label-text text-[16px] font-medium text-[#9b9b9b] text-left">
                      City
                    </span>
                  </label>
                  <input
                    type="text"
                    name="city"
                    className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1 py-[1px] w-full focus:outline-none"
                    {...register("city")}
                  />
                </div>
                {/* state  */}
                <div>
                  <label className="label">
                    <span className="label-text text-[16px] font-medium text-[#9b9b9b] text-left">
                      State
                    </span>
                  </label>
                  <select
                    className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1  w-full focus:outline-none"
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
                  <label className="label">
                    <span className="label-text text-[16px] font-medium text-[#9b9b9b] text-left">
                      Zip
                    </span>
                  </label>
                  <input
                    type="number"
                    name="zip"
                    className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1 py-[1px] w-full focus:outline-none"
                    {...register("zip")}
                  />
                </div>
                {/* phone  */}
                <div>
                  <label className="label">
                    <span className="label-text text-[16px] font-medium text-[#9b9b9b] text-left">
                      Phone
                    </span>
                  </label>
                  <input
                    type="text"
                    name="phone_one"
                    className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1 py-[1px] w-full focus:outline-none"
                    {...register("phone_one")}
                  />
                </div>
                {/* short code  */}
                <div>
                  <label className="label">
                    <span className="label-text text-[16px] font-medium text-[#9b9b9b] text-left">
                      Short Code
                    </span>
                  </label>
                  <input
                    type="text"
                    name="short_code"
                    className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1 py-[1px] w-full focus:outline-none"
                    {...register("short_code")}
                  />
                </div>
                {/* email  */}
                <div>
                  <label className="label">
                    <span className="label-text text-[16px] font-medium text-[#9b9b9b] text-left">
                      Email
                    </span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1 py-[1px] w-full focus:outline-none"
                    {...register("email")}
                  />
                </div>
                {/* EIN */}
                <div>
                  <label className="label">
                    <span className="label-text text-[16px] font-medium text-[#9b9b9b] text-left">
                      EIN
                    </span>
                  </label>
                  <input
                    type="text"
                    name="ein"
                    className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1 py-[1px] w-full focus:outline-none"
                    {...register("ein")}
                  />
                </div>
                {/* NPI */}
                <div>
                  <label className="label">
                    <span className="label-text text-[16px] font-medium text-[#9b9b9b] text-left">
                      NPI
                    </span>
                  </label>
                  <input
                    type="text"
                    name="npi"
                    className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1 py-[1px] w-full focus:outline-none"
                    {...register("npi")}
                  />
                </div>
                {/* taxonomy */}
                <div>
                  <label className="label">
                    <span className="label-text text-[16px] font-medium text-[#9b9b9b] text-left">
                      Taxonomy
                    </span>
                  </label>
                  <input
                    type="text"
                    name="taxonomy_code"
                    className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1 py-[1px] w-full focus:outline-none"
                    {...register("taxonomy_code")}
                  />
                </div>
                {/* Contact person name  */}
                <div>
                  <label className="label">
                    <span className="label-text text-[16px] font-medium text-[#9b9b9b] text-left">
                      Contact Person
                    </span>
                  </label>
                  <input
                    type="text"
                    name="contact_person"
                    className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1 py-[1px] w-full focus:outline-none"
                    {...register("contact_person")}
                  />
                </div>
                {/* Service Area Miles */}
                <div>
                  <label className="label">
                    <span className="label-text text-[16px] font-medium text-[#9b9b9b] text-left">
                      Service Area Miles
                    </span>
                  </label>
                  <input
                    type="text"
                    name="service_area_miles"
                    className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1 py-[1px] w-full focus:outline-none"
                    {...register("service_area_miles")}
                  />
                </div>
                {/* SFTP Username */}
                <div>
                  <label className="label">
                    <span className="label-text text-[16px] font-medium text-[#9b9b9b] text-left">
                      SFTP Username
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="demo"
                    name="ftp_username"
                    className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1 py-[1px] w-full focus:outline-none"
                    {...register("ftp_username")}
                  />
                </div>
                {/* password  */}
                <div>
                  <label className="label">
                    <span className="label-text text-[16px] font-medium text-[#9b9b9b] text-left">
                      SFTP Password
                    </span>
                  </label>
                  <input
                    type="password"
                    name="ftp_password"
                    className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1 py-[1px] w-full focus:outline-none"
                    {...register("ftp_password")}
                  />
                </div>
                {/* Default POS  */}
                <div>
                  <label className="label">
                    <span className="label-text text-[16px] font-medium text-[#9b9b9b] text-left">
                      Default POS
                    </span>
                  </label>
                  <select
                    className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1  w-full focus:outline-none"
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
                    <span className="label-text text-[16px] font-medium text-[#9b9b9b] text-left">
                      Default Timezone:
                    </span>
                  </label>
                  <select
                    className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1  w-full focus:outline-none"
                    {...register("DefaultTime")}
                  >
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Miss">Miss</option>
                    <option value="Dr">Dr</option>
                  </select>
                </div>
                <div className=" xl:mt-10 2xl:mt-0 items-start">
                  <div>
                    <Switch
                      size="small"
                      checked={value ? true : false}
                      onClick={() => setValue(!value)}
                    />
                    <span className="text-[14px] font-medium text-gray-500 mx-3">
                      Combo Code
                    </span>
                  </div>
                </div>
                <div className=" xl:mt-10 2xl:mt-0 items-start">
                  <div>
                    <Switch
                      size="small"
                      checked={value ? true : false}
                      onClick={() => setValue(!value)}
                    />
                    <span className="text-[14px] font-medium text-gray-500 mx-3">
                      Email Reminders
                    </span>
                  </div>
                </div>
                {/* done  */}
              </div>

              {/* working hours  */}

              <div>
                <h1 className="">Select Working Hours</h1>
                <div className=" my-5 mr-2 gap-5">
                  <div className="flex flex-wrap items-center my-1 gap-2">
                    <h5 className="text-sm text-gray-600 w-[70px] mr-5 md:mr-0">
                      Monday
                    </h5>
                    <input
                      type="time"
                      name="mon_start_time"
                      // value={time?.mon_end_time}
                      format="h:mm A"
                      className="border rounded-sm px-2 py-[5px] mx-1 text-xs "
                      {...register("mon_start_time")}
                    />

                    <span className="text-sm text-gray-600">to</span>
                    <input
                      type="time"
                      name="mon_end_time"
                      format="h:mm A"
                      className="border rounded-sm px-2 py-[5px] mx-1 text-xs "
                      {...register("mon_end_time")}
                    />
                  </div>
                  <div className="flex flex-wrap items-center my-1 gap-2">
                    <h5 className="text-sm text-gray-600 w-[70px] mr-5 md:mr-0">
                      Tuesday
                    </h5>
                    <input
                      type="time"
                      name="tus_start"
                      className="border rounded-sm px-2 py-[5px] mx-1 text-xs "
                      {...register("tus_start")}
                    />

                    <span className="text-sm text-gray-600">to</span>
                    <input
                      type="time"
                      name="tus_end"
                      className="border rounded-sm px-2 py-[5px] mx-1 text-xs "
                      {...register("tus_end")}
                    />
                  </div>
                  <div className="flex flex-wrap items-center my-1 gap-2">
                    <h5 className="text-sm text-gray-600 w-[70px] mr-5 md:mr-0">
                      Wednesday
                    </h5>
                    <input
                      type="time"
                      name="wed_start"
                      className="border rounded-sm px-2 py-[5px] mx-1 text-xs "
                      {...register("wed_start")}
                    />

                    <span className="text-sm text-gray-600">to</span>
                    <input
                      type="time"
                      name="wed_end"
                      className="border rounded-sm px-2 py-[5px] mx-1 text-xs "
                      {...register("wed_end")}
                    />
                  </div>
                  <div className="flex flex-wrap items-center my-1 gap-2">
                    <h5 className="text-sm text-gray-600 w-[70px] mr-5 md:mr-0">
                      Thursday
                    </h5>
                    <input
                      type="time"
                      name="thur_start"
                      className="border rounded-sm px-2 py-[5px] mx-1 text-xs "
                      {...register("thur_start")}
                    />

                    <span className="text-sm text-gray-600">to</span>
                    <input
                      type="time"
                      name="thur_end"
                      className="border rounded-sm px-2 py-[5px] mx-1 text-xs "
                      {...register("thur_end")}
                    />
                  </div>
                  <div className="flex flex-wrap items-center my-1 gap-2">
                    <h5 className="text-sm text-gray-600 w-[70px] mr-5 md:mr-0">
                      Friday
                    </h5>
                    <input
                      type="time"
                      name="fri_start"
                      className="border rounded-sm px-2 py-[5px] mx-1 text-xs "
                      {...register("fri_start")}
                    />

                    <span className="text-sm text-gray-600">to</span>
                    <input
                      type="time"
                      name="fri_end"
                      className="border rounded-sm px-2 py-[5px] mx-1 text-xs "
                      {...register("fri_end")}
                    />
                  </div>
                  <div className="flex flex-wrap items-center my-1 gap-2">
                    <h5 className="text-sm text-gray-600 w-[70px] mr-5 md:mr-0">
                      Saturday
                    </h5>
                    <input
                      type="time"
                      name="sat_start"
                      className="border rounded-sm px-2 py-[5px] mx-1 text-xs "
                      {...register("sat_start")}
                    />

                    <span className="text-sm text-gray-600">to</span>
                    <input
                      type="time"
                      name="sat_end"
                      className="border rounded-sm px-2 py-[5px] mx-1 text-xs "
                      {...register("sat_end")}
                    />
                  </div>
                  <div className="flex flex-wrap items-center my-1 gap-2">
                    <h5 className="text-sm text-gray-600 w-[70px] mr-5 md:mr-0">
                      Sunday
                    </h5>
                    <input
                      type="time"
                      name="sun_start"
                      className="border rounded-sm px-2 py-[5px] mx-1 text-xs "
                      {...register("sun_start")}
                    />

                    <span className="text-sm text-gray-600">to</span>
                    <input
                      type="time"
                      name="sun_end"
                      className="border rounded-sm px-2 py-[5px] mx-1 text-xs "
                      {...register("sun_end")}
                    />
                  </div>
                </div>
              </div>

              {/* submit  */}
              <input className="pms-button mb-3" type="submit" value={"Save"} />
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default memo(NameLocationTable);
