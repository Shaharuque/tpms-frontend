import React, { memo, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Switch } from "antd";
import { AiOutlineCopy } from "react-icons/ai";
import { FiPlusCircle } from "react-icons/fi";
import axios from "axios";
import { baseIp } from "../../../../../../Misc/BaseClient";
import useToken from "../../../../../../CustomHooks/useToken";
import { toast } from "react-toastify";
import { getsettings } from "../../../../../../features/Settings_redux/settingSlice";
import { useDispatch, useSelector } from "react-redux";
import BoolConverter from "../../../../../Shared/BoolConverter/BoolConverter";

const NameLocationTable = ({ time, box33Open, handleTableOpen }) => {
  // console.log("box33 data", box_no_33);

  const { token } = useToken();
  const dispatch = useDispatch();

  //response from async action
  const data = useSelector((state) => state.settingInfo); //After action dispatched response can be received here
  console.log("settings data", data);

  //Some Important data showing below
  const loading = data?.loading;
  const settingDetails = data?.settingDetails;
  const box_no_32 = data?.settingDetails?.box_32 || [];
  const box_no_33 = data?.settingDetails?.setting_name_location;
  const pos = settingDetails?.pos;
  const box_32main = settingDetails?.box_32main;
  const working_hours = settingDetails?.setting_working_hour;
  // console.log(working_hours);

  console.log("bx32 check", box_no_33);

  const [emailReminder, setEmailReminder] = useState(
    BoolConverter(box_no_33?.email_reminder)
  );
  const [isCombo, setIsCombo] = useState(BoolConverter(box_no_33?.is_combo));

  useEffect(() => {
    setEmailReminder(BoolConverter(box_no_33?.email_reminder));
  }, [box_no_33?.email_reminder]);
  useEffect(() => {
    setIsCombo(BoolConverter(box_no_33?.is_combo));
  }, [box_no_33?.is_combo]);
  console.log("emailReminder", BoolConverter(emailReminder));
  console.log("isCombo", BoolConverter(isCombo));

  function extractTime(timestamp) {
    console.log("type check", typeof timestamp);
    if (typeof timestamp === "string") {
      const timeStr = timestamp.split("T")[1].split(".")[0];
      return timeStr;
    }
    return "";
  }

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const payload = {
      facility_name: data?.facility_name,
      address: data?.address,
      address_two: data?.address_two,
      city: data?.city,
      state: data?.state,
      zip: data?.zip,
      phone_one: data?.phone_one,
      short_code: data?.short_code,
      email: data?.email,
      ein: data?.ein,
      npi: data?.npi,
      taxonomy: data?.taxonomy,
      taxonomy_code: data?.taxonomy_code,
      contact_person: data?.contact_person,
      is_deafilt_facility: data?.is_deafilt_facility,
      start_time: data?.start_time,
      end_time: data?.end_time,
      service_area_miles: data?.service_area_miles,
      user_default_password: data?.user_default_password,
      default_pos: data?.default_pos,
      timezone: data?.timezone,
      ftp_username: data?.ftp_username,
      ftp_password: data?.ftp_password,
      is_combo: BoolConverter(isCombo),
      email_reminder: BoolConverter(emailReminder),
    };

    let res = await axios({
      method: "post",
      url: `${baseIp}/setting/update/name/location`,
      headers: {
        Accept: "application/json",
        "x-auth-token": token,
      },
      data: payload,
    });
    if (res?.data?.status === "success") {
      toast.success("successfully updated Box No 33 ", {
        position: "top-center",
        autoClose: 5000,
        closeOnClick: true,
        theme: "dark",
        style: { fontSize: "12px" },
      });
      dispatch(getsettings(token));
      reset();
    } else {
      toast.error(res?.data?.message, {
        position: "top-center",
        autoClose: 5000,
        closeOnClick: true,
        theme: "dark",
        style: { fontSize: "12px" },
      });
    }
  };

  // Editable value
  useEffect(() => {
    setTimeout(() => {
      reset({
        facility_name: box_no_33?.facility_name,
        address: box_no_33?.address,
        address_two: box_no_33?.address_two,
        city: box_no_33?.city,
        state: box_no_33?.state,
        zip: box_no_33?.zip,
        phone_one: box_no_33?.phone_one,
        short_code: box_no_33?.short_code,
        email: box_no_33?.email,
        ein: box_no_33?.ein,
        npi: box_no_33?.npi,
        taxonomy: box_no_33?.taxonomy,
        taxonomy_code: box_no_33?.taxonomy_code,
        contact_person: box_no_33?.contact_person,
        is_deafilt_facility: box_no_33?.is_deafilt_facility,
        start_time: box_no_33?.start_time,
        end_time: box_no_33?.end_time,
        service_area_miles: box_no_33?.service_area_miles,
        user_default_password: box_no_33?.user_default_password,
        default_pos: box_no_33?.default_pos,
        timezone: box_no_33?.timezone,
        ftp_username: box_no_33?.ftp_username,
        ftp_password: box_no_33?.ftp_password,
        // is_combo: box_no_33?.is_combo,
        // mon_end_time: time[0]?.mon_end_time,
      });
    }, 0);
  }, [box_no_33, time?.mon_end_time, reset]);

  // prefilled time
  useEffect(() => {
    setTimeout(() => {
      reset({
        mon_start_time: extractTime(time[0]?.mon_start_time),
        mon_end_time: extractTime(time[0]?.mon_end_time),
        tus_start: extractTime(time[0]?.tus_start),
        tus_end: extractTime(time[0]?.tus_end),
        wed_start: extractTime(time[0]?.wed_start),
        wed_end: extractTime(time[0]?.wed_end),
        thur_start: extractTime(time[0]?.thur_start),
        thur_end: extractTime(time[0]?.thur_end),
        fri_start: extractTime(time[0]?.fri_start),
        fri_end: extractTime(time[0]?.fri_end),
        sat_start: extractTime(time[0]?.sat_start),
        sat_end: extractTime(time[0]?.sat_end),
        sun_start: extractTime(time[0]?.sun_start),
        sun_end: extractTime(time[0]?.sun_end),
      });
    }, 100);
  }, [reset, time]);

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
                      Facility Name
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
                    <option value="AK">Alaska</option>
                    <option value="AL">Alabama</option>
                    <option value="AS">American Samoa</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District of Columbia</option>
                    <option value="FM">Federated States of Micronesia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="GU">Guam</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MH">Marshall Islands</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ" selected="">
                      New Jersey
                    </option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="MP">Northern Mariana Islands</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PW">Palau</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="PR">Puerto Rico</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VI">Virgin Islands</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                    <option value="AE">Armed Forces Africa</option>
                    <option value="AA">
                      Armed Forces Americas (except Canada)
                    </option>
                    <option value="AE">Armed Forces Canada</option>
                    <option value="AE">Armed Forces Europe</option>
                    <option value="AE">Armed Forces Middle East</option>
                    <option value="AP">Armed Forces Pacific</option>
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
                      Phone 1
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
                    {...register("default_pos")}
                  >
                    <option></option>
                    <option value="90" selected="">
                      School (90)
                    </option>
                    <option value="11">Office (11)</option>
                    <option value="99">Other (99)</option>
                    <option value="02">TelePhone (02)</option>
                    <option value="53">
                      Community Mental Health Center (53)
                    </option>
                    <option value="10">Telehealth in Home (10)</option>
                    <option value="390">new pos (390)</option>
                    <option value="4">new one pos (4)</option>
                    <option value="11">Telehealth In Home (11)</option>
                    <option value="42">School32 (42)</option>
                    <option value="555">Testing (555)</option>
                    <option value="100">testing2 (100)</option>
                    <option value="898">Social center (898)</option>
                    <option value="330">Cat Center (330)</option>
                    <option value="70">Testing3 (70)</option>
                    <option value="123">NewTsst (123)</option>
                    <option value="79">School-Compound (79)</option>
                    <option value="114">School (114)</option>
                    <option value="333">Home (333)</option>
                    <option value="85">River (85)</option>
                    <option value="39">Home Alone (39)</option>
                    <option value="155">Mewao (155)</option>
                    <option value="88">cat (88)</option>
                    <option value="22">Shinjon-china (22)</option>
                    <option value="35">new (35)</option>
                    <option value="11">School (11)</option>
                    <option value="444">Fertility center (444)</option>
                    <option value="99">Jakir (99)</option>
                    <option value="342">mmm (342)</option>
                    <option value="123">jj (123)</option>
                    <option value="124">MM (124)</option>
                    <option value="235">m43 (235)</option>
                    <option value="444">Tofael (444)</option>
                    <option value="45">Schooldwdawdawd (45)</option>
                    <option value="70">jahid (70)</option>
                    <option value="09">apple (09)</option>
                    <option value="1212">testing (1212)</option>
                    <option value="1212">testing (1212)</option>
                    <option value="2323">pavel (2323)</option>
                    <option value="2323">pavel (2323)</option>
                    <option value="857236">abcd (857236)</option>
                    <option value="8787">apple (8787)</option>
                    <option value="6574">hmk (6574)</option>
                    <option value="1111">hello (1111)</option>
                    <option value="998">hju (998)</option>
                    <option value="551">hel (551)</option>
                    <option value="1234">testing (1234)</option>
                    <option value="6667">apple (6667)</option>
                    <option value="1111">testing (1111)</option>
                    <option value="990">jji (990)</option>
                    <option value="99">hiij (99)</option>
                    <option value="99">hiij (99)</option>
                    <option value="44">Home (44)</option>
                    <option value="12">OX (12)</option>
                    <option value="12">Home new (12)</option>
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
                    {...register("timezone")}
                  >
                    <option value="0" disabled="">
                      Set a default timezone
                    </option>
                    <option value="Africa/Abidjan">
                      (UTC/GMT +00:00) Africa/Abidjan
                    </option>
                    <option value="Africa/Accra">
                      (UTC/GMT +00:00) Africa/Accra
                    </option>
                    <option value="Africa/Bamako">
                      (UTC/GMT +00:00) Africa/Bamako
                    </option>
                    <option value="Africa/Banjul">
                      (UTC/GMT +00:00) Africa/Banjul
                    </option>
                    <option value="Africa/Bissau">
                      (UTC/GMT +00:00) Africa/Bissau
                    </option>
                    <option value="Africa/Conakry">
                      (UTC/GMT +00:00) Africa/Conakry
                    </option>
                    <option value="Africa/Dakar">
                      (UTC/GMT +00:00) Africa/Dakar
                    </option>
                    <option value="Africa/Freetown">
                      (UTC/GMT +00:00) Africa/Freetown
                    </option>
                    <option value="Africa/Lome">
                      (UTC/GMT +00:00) Africa/Lome
                    </option>
                    <option value="Africa/Monrovia">
                      (UTC/GMT +00:00) Africa/Monrovia
                    </option>
                    <option value="Africa/Nouakchott">
                      (UTC/GMT +00:00) Africa/Nouakchott
                    </option>
                    <option value="Africa/Ouagadougou">
                      (UTC/GMT +00:00) Africa/Ouagadougou
                    </option>
                    <option value="Africa/Sao_Tome">
                      (UTC/GMT +00:00) Africa/Sao_Tome
                    </option>
                    <option value="America/Danmarkshavn">
                      (UTC/GMT +00:00) America/Danmarkshavn
                    </option>
                    <option value="America/Scoresbysund">
                      (UTC/GMT +00:00) America/Scoresbysund
                    </option>
                    <option value="Atlantic/Azores">
                      (UTC/GMT +00:00) Atlantic/Azores
                    </option>
                    <option value="Atlantic/Reykjavik">
                      (UTC/GMT +00:00) Atlantic/Reykjavik
                    </option>
                    <option value="Atlantic/St_Helena">
                      (UTC/GMT +00:00) Atlantic/St_Helena
                    </option>
                    <option value="UTC">(UTC/GMT +00:00) UTC</option>
                    <option value="Africa/Algiers">
                      (UTC/GMT +01:00) Africa/Algiers
                    </option>
                    <option value="Africa/Bangui">
                      (UTC/GMT +01:00) Africa/Bangui
                    </option>
                    <option value="Africa/Brazzaville">
                      (UTC/GMT +01:00) Africa/Brazzaville
                    </option>
                    <option value="Africa/Casablanca">
                      (UTC/GMT +01:00) Africa/Casablanca
                    </option>
                    <option value="Africa/Douala">
                      (UTC/GMT +01:00) Africa/Douala
                    </option>
                    <option value="Africa/El_Aaiun">
                      (UTC/GMT +01:00) Africa/El_Aaiun
                    </option>
                    <option value="Africa/Kinshasa">
                      (UTC/GMT +01:00) Africa/Kinshasa
                    </option>
                    <option value="Africa/Lagos">
                      (UTC/GMT +01:00) Africa/Lagos
                    </option>
                    <option value="Africa/Libreville">
                      (UTC/GMT +01:00) Africa/Libreville
                    </option>
                    <option value="Africa/Luanda">
                      (UTC/GMT +01:00) Africa/Luanda
                    </option>
                    <option value="Africa/Malabo">
                      (UTC/GMT +01:00) Africa/Malabo
                    </option>
                    <option value="Africa/Ndjamena">
                      (UTC/GMT +01:00) Africa/Ndjamena
                    </option>
                    <option value="Africa/Niamey">
                      (UTC/GMT +01:00) Africa/Niamey
                    </option>
                    <option value="Africa/Porto-Novo">
                      (UTC/GMT +01:00) Africa/Porto-Novo
                    </option>
                    <option value="Africa/Tunis">
                      (UTC/GMT +01:00) Africa/Tunis
                    </option>
                    <option value="Atlantic/Canary">
                      (UTC/GMT +01:00) Atlantic/Canary
                    </option>
                    <option value="Atlantic/Faroe">
                      (UTC/GMT +01:00) Atlantic/Faroe
                    </option>
                    <option value="Atlantic/Madeira">
                      (UTC/GMT +01:00) Atlantic/Madeira
                    </option>
                    <option value="Europe/Dublin">
                      (UTC/GMT +01:00) Europe/Dublin
                    </option>
                    <option value="Europe/Guernsey">
                      (UTC/GMT +01:00) Europe/Guernsey
                    </option>
                    <option value="Europe/Isle_of_Man">
                      (UTC/GMT +01:00) Europe/Isle_of_Man
                    </option>
                    <option value="Europe/Jersey">
                      (UTC/GMT +01:00) Europe/Jersey
                    </option>
                    <option value="Europe/Lisbon">
                      (UTC/GMT +01:00) Europe/Lisbon
                    </option>
                    <option value="Europe/London">
                      (UTC/GMT +01:00) Europe/London
                    </option>
                    <option value="Africa/Blantyre">
                      (UTC/GMT +02:00) Africa/Blantyre
                    </option>
                    <option value="Africa/Bujumbura">
                      (UTC/GMT +02:00) Africa/Bujumbura
                    </option>
                    <option value="Africa/Cairo">
                      (UTC/GMT +02:00) Africa/Cairo
                    </option>
                    <option value="Africa/Ceuta">
                      (UTC/GMT +02:00) Africa/Ceuta
                    </option>
                    <option value="Africa/Gaborone">
                      (UTC/GMT +02:00) Africa/Gaborone
                    </option>
                    <option value="Africa/Harare">
                      (UTC/GMT +02:00) Africa/Harare
                    </option>
                    <option value="Africa/Johannesburg">
                      (UTC/GMT +02:00) Africa/Johannesburg
                    </option>
                    <option value="Africa/Khartoum">
                      (UTC/GMT +02:00) Africa/Khartoum
                    </option>
                    <option value="Africa/Kigali">
                      (UTC/GMT +02:00) Africa/Kigali
                    </option>
                    <option value="Africa/Lubumbashi">
                      (UTC/GMT +02:00) Africa/Lubumbashi
                    </option>
                    <option value="Africa/Lusaka">
                      (UTC/GMT +02:00) Africa/Lusaka
                    </option>
                    <option value="Africa/Maputo">
                      (UTC/GMT +02:00) Africa/Maputo
                    </option>
                    <option value="Africa/Maseru">
                      (UTC/GMT +02:00) Africa/Maseru
                    </option>
                    <option value="Africa/Mbabane">
                      (UTC/GMT +02:00) Africa/Mbabane
                    </option>
                    <option value="Africa/Tripoli">
                      (UTC/GMT +02:00) Africa/Tripoli
                    </option>
                    <option value="Africa/Windhoek">
                      (UTC/GMT +02:00) Africa/Windhoek
                    </option>
                    <option value="Antarctica/Troll">
                      (UTC/GMT +02:00) Antarctica/Troll
                    </option>
                    <option value="Arctic/Longyearbyen">
                      (UTC/GMT +02:00) Arctic/Longyearbyen
                    </option>
                    <option value="Europe/Amsterdam">
                      (UTC/GMT +02:00) Europe/Amsterdam
                    </option>
                    <option value="Europe/Andorra">
                      (UTC/GMT +02:00) Europe/Andorra
                    </option>
                    <option value="Europe/Belgrade">
                      (UTC/GMT +02:00) Europe/Belgrade
                    </option>
                    <option value="Europe/Berlin">
                      (UTC/GMT +02:00) Europe/Berlin
                    </option>
                    <option value="Europe/Bratislava">
                      (UTC/GMT +02:00) Europe/Bratislava
                    </option>
                    <option value="Europe/Brussels">
                      (UTC/GMT +02:00) Europe/Brussels
                    </option>
                    <option value="Europe/Budapest">
                      (UTC/GMT +02:00) Europe/Budapest
                    </option>
                    <option value="Europe/Busingen">
                      (UTC/GMT +02:00) Europe/Busingen
                    </option>
                    <option value="Europe/Copenhagen">
                      (UTC/GMT +02:00) Europe/Copenhagen
                    </option>
                    <option value="Europe/Gibraltar">
                      (UTC/GMT +02:00) Europe/Gibraltar
                    </option>
                    <option value="Europe/Kaliningrad">
                      (UTC/GMT +02:00) Europe/Kaliningrad
                    </option>
                    <option value="Europe/Ljubljana">
                      (UTC/GMT +02:00) Europe/Ljubljana
                    </option>
                    <option value="Europe/Luxembourg">
                      (UTC/GMT +02:00) Europe/Luxembourg
                    </option>
                    <option value="Europe/Madrid">
                      (UTC/GMT +02:00) Europe/Madrid
                    </option>
                    <option value="Europe/Malta">
                      (UTC/GMT +02:00) Europe/Malta
                    </option>
                    <option value="Europe/Monaco">
                      (UTC/GMT +02:00) Europe/Monaco
                    </option>
                    <option value="Europe/Oslo">
                      (UTC/GMT +02:00) Europe/Oslo
                    </option>
                    <option value="Europe/Paris">
                      (UTC/GMT +02:00) Europe/Paris
                    </option>
                    <option value="Europe/Podgorica">
                      (UTC/GMT +02:00) Europe/Podgorica
                    </option>
                    <option value="Europe/Prague">
                      (UTC/GMT +02:00) Europe/Prague
                    </option>
                    <option value="Europe/Rome">
                      (UTC/GMT +02:00) Europe/Rome
                    </option>
                    <option value="Europe/San_Marino">
                      (UTC/GMT +02:00) Europe/San_Marino
                    </option>
                    <option value="Europe/Sarajevo">
                      (UTC/GMT +02:00) Europe/Sarajevo
                    </option>
                    <option value="Europe/Skopje">
                      (UTC/GMT +02:00) Europe/Skopje
                    </option>
                    <option value="Europe/Stockholm">
                      (UTC/GMT +02:00) Europe/Stockholm
                    </option>
                    <option value="Europe/Tirane">
                      (UTC/GMT +02:00) Europe/Tirane
                    </option>
                    <option value="Europe/Vaduz">
                      (UTC/GMT +02:00) Europe/Vaduz
                    </option>
                    <option value="Europe/Vatican">
                      (UTC/GMT +02:00) Europe/Vatican
                    </option>
                    <option value="Europe/Vienna">
                      (UTC/GMT +02:00) Europe/Vienna
                    </option>
                    <option value="Europe/Warsaw">
                      (UTC/GMT +02:00) Europe/Warsaw
                    </option>
                    <option value="Europe/Zagreb">
                      (UTC/GMT +02:00) Europe/Zagreb
                    </option>
                    <option value="Europe/Zurich">
                      (UTC/GMT +02:00) Europe/Zurich
                    </option>
                    <option value="Africa/Addis_Ababa">
                      (UTC/GMT +03:00) Africa/Addis_Ababa
                    </option>
                    <option value="Africa/Asmara">
                      (UTC/GMT +03:00) Africa/Asmara
                    </option>
                    <option value="Africa/Dar_es_Salaam">
                      (UTC/GMT +03:00) Africa/Dar_es_Salaam
                    </option>
                    <option value="Africa/Djibouti">
                      (UTC/GMT +03:00) Africa/Djibouti
                    </option>
                    <option value="Africa/Juba">
                      (UTC/GMT +03:00) Africa/Juba
                    </option>
                    <option value="Africa/Kampala">
                      (UTC/GMT +03:00) Africa/Kampala
                    </option>
                    <option value="Africa/Mogadishu">
                      (UTC/GMT +03:00) Africa/Mogadishu
                    </option>
                    <option value="Africa/Nairobi">
                      (UTC/GMT +03:00) Africa/Nairobi
                    </option>
                    <option value="Antarctica/Syowa">
                      (UTC/GMT +03:00) Antarctica/Syowa
                    </option>
                    <option value="Asia/Aden">
                      (UTC/GMT +03:00) Asia/Aden
                    </option>
                    <option value="Asia/Amman">
                      (UTC/GMT +03:00) Asia/Amman
                    </option>
                    <option value="Asia/Baghdad">
                      (UTC/GMT +03:00) Asia/Baghdad
                    </option>
                    <option value="Asia/Bahrain">
                      (UTC/GMT +03:00) Asia/Bahrain
                    </option>
                    <option value="Asia/Beirut">
                      (UTC/GMT +03:00) Asia/Beirut
                    </option>
                    <option value="Asia/Damascus">
                      (UTC/GMT +03:00) Asia/Damascus
                    </option>
                    <option value="Asia/Famagusta">
                      (UTC/GMT +03:00) Asia/Famagusta
                    </option>
                    <option value="Asia/Gaza">
                      (UTC/GMT +03:00) Asia/Gaza
                    </option>
                    <option value="Asia/Hebron">
                      (UTC/GMT +03:00) Asia/Hebron
                    </option>
                    <option value="Asia/Jerusalem">
                      (UTC/GMT +03:00) Asia/Jerusalem
                    </option>
                    <option value="Asia/Kuwait">
                      (UTC/GMT +03:00) Asia/Kuwait
                    </option>
                    <option value="Asia/Nicosia">
                      (UTC/GMT +03:00) Asia/Nicosia
                    </option>
                    <option value="Asia/Qatar">
                      (UTC/GMT +03:00) Asia/Qatar
                    </option>
                    <option value="Asia/Riyadh">
                      (UTC/GMT +03:00) Asia/Riyadh
                    </option>
                    <option value="Europe/Athens">
                      (UTC/GMT +03:00) Europe/Athens
                    </option>
                    <option value="Europe/Bucharest">
                      (UTC/GMT +03:00) Europe/Bucharest
                    </option>
                    <option value="Europe/Chisinau">
                      (UTC/GMT +03:00) Europe/Chisinau
                    </option>
                    <option value="Europe/Helsinki">
                      (UTC/GMT +03:00) Europe/Helsinki
                    </option>
                    <option value="Europe/Istanbul">
                      (UTC/GMT +03:00) Europe/Istanbul
                    </option>
                    <option value="Europe/Kiev">
                      (UTC/GMT +03:00) Europe/Kiev
                    </option>
                    <option value="Europe/Kirov">
                      (UTC/GMT +03:00) Europe/Kirov
                    </option>
                    <option value="Europe/Mariehamn">
                      (UTC/GMT +03:00) Europe/Mariehamn
                    </option>
                    <option value="Europe/Minsk">
                      (UTC/GMT +03:00) Europe/Minsk
                    </option>
                    <option value="Europe/Moscow">
                      (UTC/GMT +03:00) Europe/Moscow
                    </option>
                    <option value="Europe/Riga">
                      (UTC/GMT +03:00) Europe/Riga
                    </option>
                    <option value="Europe/Simferopol">
                      (UTC/GMT +03:00) Europe/Simferopol
                    </option>
                    <option value="Europe/Sofia">
                      (UTC/GMT +03:00) Europe/Sofia
                    </option>
                    <option value="Europe/Tallinn">
                      (UTC/GMT +03:00) Europe/Tallinn
                    </option>
                    <option value="Europe/Uzhgorod">
                      (UTC/GMT +03:00) Europe/Uzhgorod
                    </option>
                    <option value="Europe/Vilnius">
                      (UTC/GMT +03:00) Europe/Vilnius
                    </option>
                    <option value="Europe/Zaporozhye">
                      (UTC/GMT +03:00) Europe/Zaporozhye
                    </option>
                    <option value="Indian/Antananarivo">
                      (UTC/GMT +03:00) Indian/Antananarivo
                    </option>
                    <option value="Indian/Comoro">
                      (UTC/GMT +03:00) Indian/Comoro
                    </option>
                    <option value="Indian/Mayotte">
                      (UTC/GMT +03:00) Indian/Mayotte
                    </option>
                    <option value="Asia/Baku">
                      (UTC/GMT +04:00) Asia/Baku
                    </option>
                    <option value="Asia/Dubai">
                      (UTC/GMT +04:00) Asia/Dubai
                    </option>
                    <option value="Asia/Muscat">
                      (UTC/GMT +04:00) Asia/Muscat
                    </option>
                    <option value="Asia/Tbilisi">
                      (UTC/GMT +04:00) Asia/Tbilisi
                    </option>
                    <option value="Asia/Yerevan">
                      (UTC/GMT +04:00) Asia/Yerevan
                    </option>
                    <option value="Europe/Astrakhan">
                      (UTC/GMT +04:00) Europe/Astrakhan
                    </option>
                    <option value="Europe/Samara">
                      (UTC/GMT +04:00) Europe/Samara
                    </option>
                    <option value="Europe/Saratov">
                      (UTC/GMT +04:00) Europe/Saratov
                    </option>
                    <option value="Europe/Ulyanovsk">
                      (UTC/GMT +04:00) Europe/Ulyanovsk
                    </option>
                    <option value="Europe/Volgograd">
                      (UTC/GMT +04:00) Europe/Volgograd
                    </option>
                    <option value="Indian/Mahe">
                      (UTC/GMT +04:00) Indian/Mahe
                    </option>
                    <option value="Indian/Mauritius">
                      (UTC/GMT +04:00) Indian/Mauritius
                    </option>
                    <option value="Indian/Reunion">
                      (UTC/GMT +04:00) Indian/Reunion
                    </option>
                    <option value="Asia/Kabul">
                      (UTC/GMT +04:30) Asia/Kabul
                    </option>
                    <option value="Asia/Tehran">
                      (UTC/GMT +04:30) Asia/Tehran
                    </option>
                    <option value="Antarctica/Mawson">
                      (UTC/GMT +05:00) Antarctica/Mawson
                    </option>
                    <option value="Asia/Aqtau">
                      (UTC/GMT +05:00) Asia/Aqtau
                    </option>
                    <option value="Asia/Aqtobe">
                      (UTC/GMT +05:00) Asia/Aqtobe
                    </option>
                    <option value="Asia/Ashgabat">
                      (UTC/GMT +05:00) Asia/Ashgabat
                    </option>
                    <option value="Asia/Atyrau">
                      (UTC/GMT +05:00) Asia/Atyrau
                    </option>
                    <option value="Asia/Dushanbe">
                      (UTC/GMT +05:00) Asia/Dushanbe
                    </option>
                    <option value="Asia/Karachi">
                      (UTC/GMT +05:00) Asia/Karachi
                    </option>
                    <option value="Asia/Oral">
                      (UTC/GMT +05:00) Asia/Oral
                    </option>
                    <option value="Asia/Qyzylorda">
                      (UTC/GMT +05:00) Asia/Qyzylorda
                    </option>
                    <option value="Asia/Samarkand">
                      (UTC/GMT +05:00) Asia/Samarkand
                    </option>
                    <option value="Asia/Tashkent">
                      (UTC/GMT +05:00) Asia/Tashkent
                    </option>
                    <option value="Asia/Yekaterinburg">
                      (UTC/GMT +05:00) Asia/Yekaterinburg
                    </option>
                    <option value="Indian/Kerguelen">
                      (UTC/GMT +05:00) Indian/Kerguelen
                    </option>
                    <option value="Indian/Maldives">
                      (UTC/GMT +05:00) Indian/Maldives
                    </option>
                    <option value="Asia/Colombo">
                      (UTC/GMT +05:30) Asia/Colombo
                    </option>
                    <option value="Asia/Kolkata" selected="">
                      (UTC/GMT +05:30) Asia/Kolkata
                    </option>
                    <option value="Asia/Kathmandu">
                      (UTC/GMT +05:45) Asia/Kathmandu
                    </option>
                    <option value="Antarctica/Vostok">
                      (UTC/GMT +06:00) Antarctica/Vostok
                    </option>
                    <option value="Asia/Almaty">
                      (UTC/GMT +06:00) Asia/Almaty
                    </option>
                    <option value="Asia/Bishkek">
                      (UTC/GMT +06:00) Asia/Bishkek
                    </option>
                    <option value="Asia/Dhaka">
                      (UTC/GMT +06:00) Asia/Dhaka
                    </option>
                    <option value="Asia/Omsk">
                      (UTC/GMT +06:00) Asia/Omsk
                    </option>
                    <option value="Asia/Qostanay">
                      (UTC/GMT +06:00) Asia/Qostanay
                    </option>
                    <option value="Asia/Thimphu">
                      (UTC/GMT +06:00) Asia/Thimphu
                    </option>
                    <option value="Asia/Urumqi">
                      (UTC/GMT +06:00) Asia/Urumqi
                    </option>
                    <option value="Indian/Chagos">
                      (UTC/GMT +06:00) Indian/Chagos
                    </option>
                    <option value="Asia/Yangon">
                      (UTC/GMT +06:30) Asia/Yangon
                    </option>
                    <option value="Indian/Cocos">
                      (UTC/GMT +06:30) Indian/Cocos
                    </option>
                    <option value="Antarctica/Davis">
                      (UTC/GMT +07:00) Antarctica/Davis
                    </option>
                    <option value="Asia/Bangkok">
                      (UTC/GMT +07:00) Asia/Bangkok
                    </option>
                    <option value="Asia/Barnaul">
                      (UTC/GMT +07:00) Asia/Barnaul
                    </option>
                    <option value="Asia/Ho_Chi_Minh">
                      (UTC/GMT +07:00) Asia/Ho_Chi_Minh
                    </option>
                    <option value="Asia/Hovd">
                      (UTC/GMT +07:00) Asia/Hovd
                    </option>
                    <option value="Asia/Jakarta">
                      (UTC/GMT +07:00) Asia/Jakarta
                    </option>
                    <option value="Asia/Krasnoyarsk">
                      (UTC/GMT +07:00) Asia/Krasnoyarsk
                    </option>
                    <option value="Asia/Novokuznetsk">
                      (UTC/GMT +07:00) Asia/Novokuznetsk
                    </option>
                    <option value="Asia/Novosibirsk">
                      (UTC/GMT +07:00) Asia/Novosibirsk
                    </option>
                    <option value="Asia/Phnom_Penh">
                      (UTC/GMT +07:00) Asia/Phnom_Penh
                    </option>
                    <option value="Asia/Pontianak">
                      (UTC/GMT +07:00) Asia/Pontianak
                    </option>
                    <option value="Asia/Tomsk">
                      (UTC/GMT +07:00) Asia/Tomsk
                    </option>
                    <option value="Asia/Vientiane">
                      (UTC/GMT +07:00) Asia/Vientiane
                    </option>
                    <option value="Indian/Christmas">
                      (UTC/GMT +07:00) Indian/Christmas
                    </option>
                    <option value="Asia/Brunei">
                      (UTC/GMT +08:00) Asia/Brunei
                    </option>
                    <option value="Asia/Choibalsan">
                      (UTC/GMT +08:00) Asia/Choibalsan
                    </option>
                    <option value="Asia/Hong_Kong">
                      (UTC/GMT +08:00) Asia/Hong_Kong
                    </option>
                    <option value="Asia/Irkutsk">
                      (UTC/GMT +08:00) Asia/Irkutsk
                    </option>
                    <option value="Asia/Kuala_Lumpur">
                      (UTC/GMT +08:00) Asia/Kuala_Lumpur
                    </option>
                    <option value="Asia/Kuching">
                      (UTC/GMT +08:00) Asia/Kuching
                    </option>
                    <option value="Asia/Macau">
                      (UTC/GMT +08:00) Asia/Macau
                    </option>
                    <option value="Asia/Makassar">
                      (UTC/GMT +08:00) Asia/Makassar
                    </option>
                    <option value="Asia/Manila">
                      (UTC/GMT +08:00) Asia/Manila
                    </option>
                    <option value="Asia/Shanghai">
                      (UTC/GMT +08:00) Asia/Shanghai
                    </option>
                    <option value="Asia/Singapore">
                      (UTC/GMT +08:00) Asia/Singapore
                    </option>
                    <option value="Asia/Taipei">
                      (UTC/GMT +08:00) Asia/Taipei
                    </option>
                    <option value="Asia/Ulaanbaatar">
                      (UTC/GMT +08:00) Asia/Ulaanbaatar
                    </option>
                    <option value="Australia/Perth">
                      (UTC/GMT +08:00) Australia/Perth
                    </option>
                    <option value="Australia/Eucla">
                      (UTC/GMT +08:45) Australia/Eucla
                    </option>
                    <option value="Asia/Chita">
                      (UTC/GMT +09:00) Asia/Chita
                    </option>
                    <option value="Asia/Dili">
                      (UTC/GMT +09:00) Asia/Dili
                    </option>
                    <option value="Asia/Jayapura">
                      (UTC/GMT +09:00) Asia/Jayapura
                    </option>
                    <option value="Asia/Khandyga">
                      (UTC/GMT +09:00) Asia/Khandyga
                    </option>
                    <option value="Asia/Pyongyang">
                      (UTC/GMT +09:00) Asia/Pyongyang
                    </option>
                    <option value="Asia/Seoul">
                      (UTC/GMT +09:00) Asia/Seoul
                    </option>
                    <option value="Asia/Tokyo">
                      (UTC/GMT +09:00) Asia/Tokyo
                    </option>
                    <option value="Asia/Yakutsk">
                      (UTC/GMT +09:00) Asia/Yakutsk
                    </option>
                    <option value="Pacific/Palau">
                      (UTC/GMT +09:00) Pacific/Palau
                    </option>
                    <option value="Australia/Adelaide">
                      (UTC/GMT +09:30) Australia/Adelaide
                    </option>
                    <option value="Australia/Broken_Hill">
                      (UTC/GMT +09:30) Australia/Broken_Hill
                    </option>
                    <option value="Australia/Darwin">
                      (UTC/GMT +09:30) Australia/Darwin
                    </option>
                    <option value="Antarctica/DumontDUrville">
                      (UTC/GMT +10:00) Antarctica/DumontDUrville
                    </option>
                    <option value="Antarctica/Macquarie">
                      (UTC/GMT +10:00) Antarctica/Macquarie
                    </option>
                    <option value="Asia/Ust-Nera">
                      (UTC/GMT +10:00) Asia/Ust-Nera
                    </option>
                    <option value="Asia/Vladivostok">
                      (UTC/GMT +10:00) Asia/Vladivostok
                    </option>
                    <option value="Australia/Brisbane">
                      (UTC/GMT +10:00) Australia/Brisbane
                    </option>
                    <option value="Australia/Currie">
                      (UTC/GMT +10:00) Australia/Currie
                    </option>
                    <option value="Australia/Hobart">
                      (UTC/GMT +10:00) Australia/Hobart
                    </option>
                    <option value="Australia/Lindeman">
                      (UTC/GMT +10:00) Australia/Lindeman
                    </option>
                    <option value="Australia/Melbourne">
                      (UTC/GMT +10:00) Australia/Melbourne
                    </option>
                    <option value="Australia/Sydney">
                      (UTC/GMT +10:00) Australia/Sydney
                    </option>
                    <option value="Pacific/Chuuk">
                      (UTC/GMT +10:00) Pacific/Chuuk
                    </option>
                    <option value="Pacific/Guam">
                      (UTC/GMT +10:00) Pacific/Guam
                    </option>
                    <option value="Pacific/Port_Moresby">
                      (UTC/GMT +10:00) Pacific/Port_Moresby
                    </option>
                    <option value="Pacific/Saipan">
                      (UTC/GMT +10:00) Pacific/Saipan
                    </option>
                    <option value="Australia/Lord_Howe">
                      (UTC/GMT +10:30) Australia/Lord_Howe
                    </option>
                    <option value="Antarctica/Casey">
                      (UTC/GMT +11:00) Antarctica/Casey
                    </option>
                    <option value="Asia/Magadan">
                      (UTC/GMT +11:00) Asia/Magadan
                    </option>
                    <option value="Asia/Sakhalin">
                      (UTC/GMT +11:00) Asia/Sakhalin
                    </option>
                    <option value="Asia/Srednekolymsk">
                      (UTC/GMT +11:00) Asia/Srednekolymsk
                    </option>
                    <option value="Pacific/Bougainville">
                      (UTC/GMT +11:00) Pacific/Bougainville
                    </option>
                    <option value="Pacific/Efate">
                      (UTC/GMT +11:00) Pacific/Efate
                    </option>
                    <option value="Pacific/Guadalcanal">
                      (UTC/GMT +11:00) Pacific/Guadalcanal
                    </option>
                    <option value="Pacific/Kosrae">
                      (UTC/GMT +11:00) Pacific/Kosrae
                    </option>
                    <option value="Pacific/Norfolk">
                      (UTC/GMT +11:00) Pacific/Norfolk
                    </option>
                    <option value="Pacific/Noumea">
                      (UTC/GMT +11:00) Pacific/Noumea
                    </option>
                    <option value="Pacific/Pohnpei">
                      (UTC/GMT +11:00) Pacific/Pohnpei
                    </option>
                    <option value="Antarctica/McMurdo">
                      (UTC/GMT +12:00) Antarctica/McMurdo
                    </option>
                    <option value="Asia/Anadyr">
                      (UTC/GMT +12:00) Asia/Anadyr
                    </option>
                    <option value="Asia/Kamchatka">
                      (UTC/GMT +12:00) Asia/Kamchatka
                    </option>
                    <option value="Pacific/Auckland">
                      (UTC/GMT +12:00) Pacific/Auckland
                    </option>
                    <option value="Pacific/Fiji">
                      (UTC/GMT +12:00) Pacific/Fiji
                    </option>
                    <option value="Pacific/Funafuti">
                      (UTC/GMT +12:00) Pacific/Funafuti
                    </option>
                    <option value="Pacific/Kwajalein">
                      (UTC/GMT +12:00) Pacific/Kwajalein
                    </option>
                    <option value="Pacific/Majuro">
                      (UTC/GMT +12:00) Pacific/Majuro
                    </option>
                    <option value="Pacific/Nauru">
                      (UTC/GMT +12:00) Pacific/Nauru
                    </option>
                    <option value="Pacific/Tarawa">
                      (UTC/GMT +12:00) Pacific/Tarawa
                    </option>
                    <option value="Pacific/Wake">
                      (UTC/GMT +12:00) Pacific/Wake
                    </option>
                    <option value="Pacific/Wallis">
                      (UTC/GMT +12:00) Pacific/Wallis
                    </option>
                    <option value="Pacific/Chatham">
                      (UTC/GMT +12:45) Pacific/Chatham
                    </option>
                    <option value="Pacific/Apia">
                      (UTC/GMT +13:00) Pacific/Apia
                    </option>
                    <option value="Pacific/Enderbury">
                      (UTC/GMT +13:00) Pacific/Enderbury
                    </option>
                    <option value="Pacific/Fakaofo">
                      (UTC/GMT +13:00) Pacific/Fakaofo
                    </option>
                    <option value="Pacific/Tongatapu">
                      (UTC/GMT +13:00) Pacific/Tongatapu
                    </option>
                    <option value="Pacific/Kiritimati">
                      (UTC/GMT +14:00) Pacific/Kiritimati
                    </option>
                    <option value="Atlantic/Cape_Verde">
                      (UTC/GMT -01:00) Atlantic/Cape_Verde
                    </option>
                    <option value="America/Miquelon">
                      (UTC/GMT -02:00) America/Miquelon
                    </option>
                    <option value="America/Noronha">
                      (UTC/GMT -02:00) America/Noronha
                    </option>
                    <option value="America/Nuuk">
                      (UTC/GMT -02:00) America/Nuuk
                    </option>
                    <option value="Atlantic/South_Georgia">
                      (UTC/GMT -02:00) Atlantic/South_Georgia
                    </option>
                    <option value="America/St_Johns">
                      (UTC/GMT -02:30) America/St_Johns
                    </option>
                    <option value="America/Araguaina">
                      (UTC/GMT -03:00) America/Araguaina
                    </option>
                    <option value="America/Argentina/Buenos_Aires">
                      (UTC/GMT -03:00) America/Argentina/Buenos_Aires
                    </option>
                    <option value="America/Argentina/Catamarca">
                      (UTC/GMT -03:00) America/Argentina/Catamarca
                    </option>
                    <option value="America/Argentina/Cordoba">
                      (UTC/GMT -03:00) America/Argentina/Cordoba
                    </option>
                    <option value="America/Argentina/Jujuy">
                      (UTC/GMT -03:00) America/Argentina/Jujuy
                    </option>
                    <option value="America/Argentina/La_Rioja">
                      (UTC/GMT -03:00) America/Argentina/La_Rioja
                    </option>
                    <option value="America/Argentina/Mendoza">
                      (UTC/GMT -03:00) America/Argentina/Mendoza
                    </option>
                    <option value="America/Argentina/Rio_Gallegos">
                      (UTC/GMT -03:00) America/Argentina/Rio_Gallegos
                    </option>
                    <option value="America/Argentina/Salta">
                      (UTC/GMT -03:00) America/Argentina/Salta
                    </option>
                    <option value="America/Argentina/San_Juan">
                      (UTC/GMT -03:00) America/Argentina/San_Juan
                    </option>
                    <option value="America/Argentina/San_Luis">
                      (UTC/GMT -03:00) America/Argentina/San_Luis
                    </option>
                    <option value="America/Argentina/Tucuman">
                      (UTC/GMT -03:00) America/Argentina/Tucuman
                    </option>
                    <option value="America/Argentina/Ushuaia">
                      (UTC/GMT -03:00) America/Argentina/Ushuaia
                    </option>
                    <option value="America/Bahia">
                      (UTC/GMT -03:00) America/Bahia
                    </option>
                    <option value="America/Belem">
                      (UTC/GMT -03:00) America/Belem
                    </option>
                    <option value="America/Cayenne">
                      (UTC/GMT -03:00) America/Cayenne
                    </option>
                    <option value="America/Fortaleza">
                      (UTC/GMT -03:00) America/Fortaleza
                    </option>
                    <option value="America/Glace_Bay">
                      (UTC/GMT -03:00) America/Glace_Bay
                    </option>
                    <option value="America/Goose_Bay">
                      (UTC/GMT -03:00) America/Goose_Bay
                    </option>
                    <option value="America/Halifax">
                      (UTC/GMT -03:00) America/Halifax
                    </option>
                    <option value="America/Maceio">
                      (UTC/GMT -03:00) America/Maceio
                    </option>
                    <option value="America/Moncton">
                      (UTC/GMT -03:00) America/Moncton
                    </option>
                    <option value="America/Montevideo">
                      (UTC/GMT -03:00) America/Montevideo
                    </option>
                    <option value="America/Paramaribo">
                      (UTC/GMT -03:00) America/Paramaribo
                    </option>
                    <option value="America/Punta_Arenas">
                      (UTC/GMT -03:00) America/Punta_Arenas
                    </option>
                    <option value="America/Recife">
                      (UTC/GMT -03:00) America/Recife
                    </option>
                    <option value="America/Santarem">
                      (UTC/GMT -03:00) America/Santarem
                    </option>
                    <option value="America/Sao_Paulo">
                      (UTC/GMT -03:00) America/Sao_Paulo
                    </option>
                    <option value="America/Thule">
                      (UTC/GMT -03:00) America/Thule
                    </option>
                    <option value="Antarctica/Palmer">
                      (UTC/GMT -03:00) Antarctica/Palmer
                    </option>
                    <option value="Antarctica/Rothera">
                      (UTC/GMT -03:00) Antarctica/Rothera
                    </option>
                    <option value="Atlantic/Bermuda">
                      (UTC/GMT -03:00) Atlantic/Bermuda
                    </option>
                    <option value="Atlantic/Stanley">
                      (UTC/GMT -03:00) Atlantic/Stanley
                    </option>
                    <option value="America/Anguilla">
                      (UTC/GMT -04:00) America/Anguilla
                    </option>
                    <option value="America/Antigua">
                      (UTC/GMT -04:00) America/Antigua
                    </option>
                    <option value="America/Aruba">
                      (UTC/GMT -04:00) America/Aruba
                    </option>
                    <option value="America/Asuncion">
                      (UTC/GMT -04:00) America/Asuncion
                    </option>
                    <option value="America/Barbados">
                      (UTC/GMT -04:00) America/Barbados
                    </option>
                    <option value="America/Blanc-Sablon">
                      (UTC/GMT -04:00) America/Blanc-Sablon
                    </option>
                    <option value="America/Boa_Vista">
                      (UTC/GMT -04:00) America/Boa_Vista
                    </option>
                    <option value="America/Campo_Grande">
                      (UTC/GMT -04:00) America/Campo_Grande
                    </option>
                    <option value="America/Caracas">
                      (UTC/GMT -04:00) America/Caracas
                    </option>
                    <option value="America/Cuiaba">
                      (UTC/GMT -04:00) America/Cuiaba
                    </option>
                    <option value="America/Curacao">
                      (UTC/GMT -04:00) America/Curacao
                    </option>
                    <option value="America/Detroit">
                      (UTC/GMT -04:00) America/Detroit
                    </option>
                    <option value="America/Dominica">
                      (UTC/GMT -04:00) America/Dominica
                    </option>
                    <option value="America/Grand_Turk">
                      (UTC/GMT -04:00) America/Grand_Turk
                    </option>
                    <option value="America/Grenada">
                      (UTC/GMT -04:00) America/Grenada
                    </option>
                    <option value="America/Guadeloupe">
                      (UTC/GMT -04:00) America/Guadeloupe
                    </option>
                    <option value="America/Guyana">
                      (UTC/GMT -04:00) America/Guyana
                    </option>
                    <option value="America/Havana">
                      (UTC/GMT -04:00) America/Havana
                    </option>
                    <option value="America/Indiana/Indianapolis">
                      (UTC/GMT -04:00) America/Indiana/Indianapolis
                    </option>
                    <option value="America/Indiana/Marengo">
                      (UTC/GMT -04:00) America/Indiana/Marengo
                    </option>
                    <option value="America/Indiana/Petersburg">
                      (UTC/GMT -04:00) America/Indiana/Petersburg
                    </option>
                    <option value="America/Indiana/Vevay">
                      (UTC/GMT -04:00) America/Indiana/Vevay
                    </option>
                    <option value="America/Indiana/Vincennes">
                      (UTC/GMT -04:00) America/Indiana/Vincennes
                    </option>
                    <option value="America/Indiana/Winamac">
                      (UTC/GMT -04:00) America/Indiana/Winamac
                    </option>
                    <option value="America/Iqaluit">
                      (UTC/GMT -04:00) America/Iqaluit
                    </option>
                    <option value="America/Kentucky/Louisville">
                      (UTC/GMT -04:00) America/Kentucky/Louisville
                    </option>
                    <option value="America/Kentucky/Monticello">
                      (UTC/GMT -04:00) America/Kentucky/Monticello
                    </option>
                    <option value="America/Kralendijk">
                      (UTC/GMT -04:00) America/Kralendijk
                    </option>
                    <option value="America/La_Paz">
                      (UTC/GMT -04:00) America/La_Paz
                    </option>
                    <option value="America/Lower_Princes">
                      (UTC/GMT -04:00) America/Lower_Princes
                    </option>
                    <option value="America/Manaus">
                      (UTC/GMT -04:00) America/Manaus
                    </option>
                    <option value="America/Marigot">
                      (UTC/GMT -04:00) America/Marigot
                    </option>
                    <option value="America/Martinique">
                      (UTC/GMT -04:00) America/Martinique
                    </option>
                    <option value="America/Montserrat">
                      (UTC/GMT -04:00) America/Montserrat
                    </option>
                    <option value="America/Nassau">
                      (UTC/GMT -04:00) America/Nassau
                    </option>
                    <option value="America/New_York">
                      (UTC/GMT -04:00) America/New_York
                    </option>
                    <option value="America/Nipigon">
                      (UTC/GMT -04:00) America/Nipigon
                    </option>
                    <option value="America/Pangnirtung">
                      (UTC/GMT -04:00) America/Pangnirtung
                    </option>
                    <option value="America/Port-au-Prince">
                      (UTC/GMT -04:00) America/Port-au-Prince
                    </option>
                    <option value="America/Port_of_Spain">
                      (UTC/GMT -04:00) America/Port_of_Spain
                    </option>
                    <option value="America/Porto_Velho">
                      (UTC/GMT -04:00) America/Porto_Velho
                    </option>
                    <option value="America/Puerto_Rico">
                      (UTC/GMT -04:00) America/Puerto_Rico
                    </option>
                    <option value="America/Santiago">
                      (UTC/GMT -04:00) America/Santiago
                    </option>
                    <option value="America/Santo_Domingo">
                      (UTC/GMT -04:00) America/Santo_Domingo
                    </option>
                    <option value="America/St_Barthelemy">
                      (UTC/GMT -04:00) America/St_Barthelemy
                    </option>
                    <option value="America/St_Kitts">
                      (UTC/GMT -04:00) America/St_Kitts
                    </option>
                    <option value="America/St_Lucia">
                      (UTC/GMT -04:00) America/St_Lucia
                    </option>
                    <option value="America/St_Thomas">
                      (UTC/GMT -04:00) America/St_Thomas
                    </option>
                    <option value="America/St_Vincent">
                      (UTC/GMT -04:00) America/St_Vincent
                    </option>
                    <option value="America/Thunder_Bay">
                      (UTC/GMT -04:00) America/Thunder_Bay
                    </option>
                    <option value="America/Toronto">
                      (UTC/GMT -04:00) America/Toronto
                    </option>
                    <option value="America/Tortola">
                      (UTC/GMT -04:00) America/Tortola
                    </option>
                    <option value="America/Atikokan">
                      (UTC/GMT -05:00) America/Atikokan
                    </option>
                    <option value="America/Bahia_Banderas">
                      (UTC/GMT -05:00) America/Bahia_Banderas
                    </option>
                    <option value="America/Bogota">
                      (UTC/GMT -05:00) America/Bogota
                    </option>
                    <option value="America/Cancun">
                      (UTC/GMT -05:00) America/Cancun
                    </option>
                    <option value="America/Cayman">
                      (UTC/GMT -05:00) America/Cayman
                    </option>
                    <option value="America/Chicago">
                      (UTC/GMT -05:00) America/Chicago
                    </option>
                    <option value="America/Eirunepe">
                      (UTC/GMT -05:00) America/Eirunepe
                    </option>
                    <option value="America/Guayaquil">
                      (UTC/GMT -05:00) America/Guayaquil
                    </option>
                    <option value="America/Indiana/Knox">
                      (UTC/GMT -05:00) America/Indiana/Knox
                    </option>
                    <option value="America/Indiana/Tell_City">
                      (UTC/GMT -05:00) America/Indiana/Tell_City
                    </option>
                    <option value="America/Jamaica">
                      (UTC/GMT -05:00) America/Jamaica
                    </option>
                    <option value="America/Lima">
                      (UTC/GMT -05:00) America/Lima
                    </option>
                    <option value="America/Matamoros">
                      (UTC/GMT -05:00) America/Matamoros
                    </option>
                    <option value="America/Menominee">
                      (UTC/GMT -05:00) America/Menominee
                    </option>
                    <option value="America/Merida">
                      (UTC/GMT -05:00) America/Merida
                    </option>
                    <option value="America/Mexico_City">
                      (UTC/GMT -05:00) America/Mexico_City
                    </option>
                    <option value="America/Monterrey">
                      (UTC/GMT -05:00) America/Monterrey
                    </option>
                    <option value="America/North_Dakota/Beulah">
                      (UTC/GMT -05:00) America/North_Dakota/Beulah
                    </option>
                    <option value="America/North_Dakota/Center">
                      (UTC/GMT -05:00) America/North_Dakota/Center
                    </option>
                    <option value="America/North_Dakota/New_Salem">
                      (UTC/GMT -05:00) America/North_Dakota/New_Salem
                    </option>
                    <option value="America/Panama">
                      (UTC/GMT -05:00) America/Panama
                    </option>
                    <option value="America/Rainy_River">
                      (UTC/GMT -05:00) America/Rainy_River
                    </option>
                    <option value="America/Rankin_Inlet">
                      (UTC/GMT -05:00) America/Rankin_Inlet
                    </option>
                    <option value="America/Resolute">
                      (UTC/GMT -05:00) America/Resolute
                    </option>
                    <option value="America/Rio_Branco">
                      (UTC/GMT -05:00) America/Rio_Branco
                    </option>
                    <option value="America/Winnipeg">
                      (UTC/GMT -05:00) America/Winnipeg
                    </option>
                    <option value="America/Belize">
                      (UTC/GMT -06:00) America/Belize
                    </option>
                    <option value="America/Boise">
                      (UTC/GMT -06:00) America/Boise
                    </option>
                    <option value="America/Cambridge_Bay">
                      (UTC/GMT -06:00) America/Cambridge_Bay
                    </option>
                    <option value="America/Chihuahua">
                      (UTC/GMT -06:00) America/Chihuahua
                    </option>
                    <option value="America/Costa_Rica">
                      (UTC/GMT -06:00) America/Costa_Rica
                    </option>
                    <option value="America/Denver">
                      (UTC/GMT -06:00) America/Denver
                    </option>
                    <option value="America/Edmonton">
                      (UTC/GMT -06:00) America/Edmonton
                    </option>
                    <option value="America/El_Salvador">
                      (UTC/GMT -06:00) America/El_Salvador
                    </option>
                    <option value="America/Guatemala">
                      (UTC/GMT -06:00) America/Guatemala
                    </option>
                    <option value="America/Inuvik">
                      (UTC/GMT -06:00) America/Inuvik
                    </option>
                    <option value="America/Managua">
                      (UTC/GMT -06:00) America/Managua
                    </option>
                    <option value="America/Mazatlan">
                      (UTC/GMT -06:00) America/Mazatlan
                    </option>
                    <option value="America/Ojinaga">
                      (UTC/GMT -06:00) America/Ojinaga
                    </option>
                    <option value="America/Regina">
                      (UTC/GMT -06:00) America/Regina
                    </option>
                    <option value="America/Swift_Current">
                      (UTC/GMT -06:00) America/Swift_Current
                    </option>
                    <option value="America/Tegucigalpa">
                      (UTC/GMT -06:00) America/Tegucigalpa
                    </option>
                    <option value="America/Yellowknife">
                      (UTC/GMT -06:00) America/Yellowknife
                    </option>
                    <option value="Pacific/Easter">
                      (UTC/GMT -06:00) Pacific/Easter
                    </option>
                    <option value="Pacific/Galapagos">
                      (UTC/GMT -06:00) Pacific/Galapagos
                    </option>
                    <option value="America/Creston">
                      (UTC/GMT -07:00) America/Creston
                    </option>
                    <option value="America/Dawson">
                      (UTC/GMT -07:00) America/Dawson
                    </option>
                    <option value="America/Dawson_Creek">
                      (UTC/GMT -07:00) America/Dawson_Creek
                    </option>
                    <option value="America/Fort_Nelson">
                      (UTC/GMT -07:00) America/Fort_Nelson
                    </option>
                    <option value="America/Hermosillo">
                      (UTC/GMT -07:00) America/Hermosillo
                    </option>
                    <option value="America/Los_Angeles">
                      (UTC/GMT -07:00) America/Los_Angeles
                    </option>
                    <option value="America/Phoenix">
                      (UTC/GMT -07:00) America/Phoenix
                    </option>
                    <option value="America/Tijuana">
                      (UTC/GMT -07:00) America/Tijuana
                    </option>
                    <option value="America/Vancouver">
                      (UTC/GMT -07:00) America/Vancouver
                    </option>
                    <option value="America/Whitehorse">
                      (UTC/GMT -07:00) America/Whitehorse
                    </option>
                    <option value="America/Anchorage">
                      (UTC/GMT -08:00) America/Anchorage
                    </option>
                    <option value="America/Juneau">
                      (UTC/GMT -08:00) America/Juneau
                    </option>
                    <option value="America/Metlakatla">
                      (UTC/GMT -08:00) America/Metlakatla
                    </option>
                    <option value="America/Nome">
                      (UTC/GMT -08:00) America/Nome
                    </option>
                    <option value="America/Sitka">
                      (UTC/GMT -08:00) America/Sitka
                    </option>
                    <option value="America/Yakutat">
                      (UTC/GMT -08:00) America/Yakutat
                    </option>
                    <option value="Pacific/Pitcairn">
                      (UTC/GMT -08:00) Pacific/Pitcairn
                    </option>
                    <option value="America/Adak">
                      (UTC/GMT -09:00) America/Adak
                    </option>
                    <option value="Pacific/Gambier">
                      (UTC/GMT -09:00) Pacific/Gambier
                    </option>
                    <option value="Pacific/Marquesas">
                      (UTC/GMT -09:30) Pacific/Marquesas
                    </option>
                    <option value="Pacific/Honolulu">
                      (UTC/GMT -10:00) Pacific/Honolulu
                    </option>
                    <option value="Pacific/Rarotonga">
                      (UTC/GMT -10:00) Pacific/Rarotonga
                    </option>
                    <option value="Pacific/Tahiti">
                      (UTC/GMT -10:00) Pacific/Tahiti
                    </option>
                    <option value="Pacific/Midway">
                      (UTC/GMT -11:00) Pacific/Midway
                    </option>
                    <option value="Pacific/Niue">
                      (UTC/GMT -11:00) Pacific/Niue
                    </option>
                    <option value="Pacific/Pago_Pago">
                      (UTC/GMT -11:00) Pacific/Pago_Pago
                    </option>
                  </select>
                </div>
                <div className=" xl:mt-10 2xl:mt-5 items-start">
                  <div>
                    <Switch
                      checked={isCombo}
                      onChange={() => setIsCombo(!isCombo)}
                      size="small"
                    />
                    <span className="text-[14px]  font-medium text-gray-500 mx-3">
                      Combo Code
                    </span>
                  </div>
                </div>
                <div className=" xl:mt-10 2xl:mt-5 items-start">
                  <div>
                    <Switch
                      checked={emailReminder}
                      onChange={() => setEmailReminder(!emailReminder)}
                      size="small"
                    />
                    <span className="text-[14px]  font-medium text-gray-500 mx-3">
                      Email Reminders
                    </span>
                  </div>
                </div>
                {/* done  */}
              </div>

              {/* working hours  */}

              <div className="flex gap-2 flex-wrap">
                <div>
                  <h1 className="">Select Working Hours</h1>
                  <div className=" my-5 mr-2 gap-5">
                    <div className="flex flex-wrap items-center my-1 gap-2">
                      <h5 className="text-sm text-gray-600 w-[70px] mr-5 md:mr-0">
                        Monday
                      </h5>
                      <input
                        type="time"
                        // name="timeField"
                        // name="mon_start_time"
                        format="h:mm"
                        className="border rounded-sm px-2 py-[5px] mx-1 text-xs "
                        {...register("mon_start_time")}
                      />

                      <span className="text-sm text-gray-600">to</span>
                      <input
                        type="time"
                        name="mon_end_time"
                        className="border rounded-sm px-2 py-[5px] mx-1 text-xs "
                        {...register("mon_end_time")}
                      />
                      <span className="text-sm ">
                        <FiPlusCircle className="text-secondary" />
                      </span>
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
                      <span className="text-sm ">
                        <FiPlusCircle className="text-secondary" />
                      </span>
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
                      <span className="text-sm ">
                        <FiPlusCircle className="text-secondary" />
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center my-1 gap-2">
                      <h5 className="text-sm text-gray-600 w-[70px] mr-5 md:mr-0">
                        Thursday
                      </h5>
                      <input
                        type="time"
                        name="thur_start"
                        // defaultValue={"10,294,5"}
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
                      <span className="text-sm ">
                        <FiPlusCircle className="text-secondary" />
                      </span>
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
                      <span className="text-sm ">
                        <FiPlusCircle className="text-secondary" />
                      </span>
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
                      <span className="text-sm ">
                        <FiPlusCircle className="text-secondary" />
                      </span>
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
                      <span className="text-sm ">
                        <FiPlusCircle className="text-secondary" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className=" text-sm flex mt-10 gap-1 ">
                  <AiOutlineCopy className="text-secondary" /> Copy Times to all
                </div>
              </div>

              <div className="mt-2">
                {/* submit  */}
                <input
                  className="pms-button mb-3"
                  type="submit"
                  value={"Save Facility"}
                />
                <button className="pms-close-button ml-2">Close</button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default memo(NameLocationTable);
