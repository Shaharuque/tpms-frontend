// Staff Birthday is not working
import moment from "moment";
import { Switch } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import useToken from "../../../../../CustomHooks/useToken";
import {
  useGetInfoQuery,
  useUpdateStaffMutation,
} from "../../../../../features/Stuff_redux/staff/staffApi";
import Loading from "../../../../../Loading/Loading";
import BoolConverter from "../../../../Shared/BoolConverter/BoolConverter";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
const Bio = () => {
  const { id } = useParams();
  const { token } = useToken();
  const [note, setNote] = useState("");
  const [session, setSession] = useState();
  const { register, handleSubmit, reset, control } = useForm();
  const [staffBirthday, setStaffBirthday] = useState();
  const [color, setColor] = useColor("hex", "#121212");
  const [open, setOpen] = useState(false);
  console.log(color.hex);

  //get satff info api
  const {
    data: staffData,
    isLoading: staffDataLoading,
    isSuccess,
  } = useGetInfoQuery({ token, id: id });
  console.log("staff data", staffData, staffDataLoading);
  //update staff api
  const [updateStaff, { isSuccess: updateSuccess, isError: updateError }] =
    useUpdateStaffMutation();
  const {
    caqh_id,
    first_name,
    middle_name,
    last_name,
    nickname,
    staff_birthday,
    ssn,
    office_email,
    office_phone,
    office_fax,
    driver_license,
    license_exp_date,
    hir_date_compnay,
    treatment_type,
    credential_type,
    individual_npi,
    is_active,
    taxonomy_code,
    terminated_date,
    title,
    language,
    gender,
    back_color,
    email_remainder,
    session_check,
    service_area_zip,
    notes,
  } = staffData?.employee_info || {};

  console.log("testing", notes);
  // gender: (Male = 1), (female = 2);
  //console.log("gender data from api", gender);

  // staff_birthday date convertion
  // How to convert 2021-07-14T00:00:00.000Z into a standard date in YYYY-MM-DD format
  const converted_date = moment(staff_birthday).utc().format("YYYY-MM-DD");

  useEffect(() => {
    setStaffBirthday(converted_date);
  }, [converted_date]);
  console.log("staff birthday", staffBirthday);

  //email_remainder, session_check
  // console.log(email_remainder, session_check);
  const [createSession, setCreateSession] = useState(
    BoolConverter(session_check)
  );
  const [emailReminder, setEmailReminder] = useState(
    BoolConverter(email_remainder)
  );
  useEffect(() => {
    setCreateSession(BoolConverter(session_check));
  }, [session_check]);
  useEffect(() => {
    setEmailReminder(BoolConverter(email_remainder));
  }, [email_remainder]);

  useEffect(() => {
    // you can do async server request and fill up form
    setTimeout(() => {
      reset({
        caqh_id: caqh_id,
        first_name: first_name,
        middle_name: middle_name,
        last_name: last_name,
        nickname: nickname,
        ssn: ssn,
        office_email: office_email,
        office_phone: office_phone,
        office_fax: office_fax,
        hir_date_compnay: hir_date_compnay,
        individual_npi: individual_npi,
        is_active: is_active,
        taxonomy_code: taxonomy_code,
        terminated_date: terminated_date,
        treatment_type: treatment_type,
        title: title,
        service_area_zip: service_area_zip,
        driver_license: driver_license,
        license_exp_date: license_exp_date,
        language: language,
        gender: String(gender),
        // notes: notes.slice(0, 6),
        session_check: session === true ? 2 : 1,
      });
    }, 0);
  }, [
    reset,
    caqh_id,
    first_name,
    middle_name,
    last_name,
    nickname,
    ssn,
    office_email,
    office_phone,
    office_fax,
    hir_date_compnay,
    individual_npi,
    is_active,
    taxonomy_code,
    terminated_date,
    treatment_type,
    title,
    driver_license,
    license_exp_date,
    language,
    service_area_zip,
    gender,
    session,
    // notes,
  ]);

  console.log(
    "after calling boolConverter",
    BoolConverter(emailReminder),
    BoolConverter(createSession)
  );

  const onSubmit = (data) => {
    // console.log(note);
    const payload = {
      employee_edit_id: id,
      caqh_id: data?.caqh_id,
      first_name: data?.first_name,
      middle_name: data?.middle_name,
      last_name: data?.last_name,
      nickname: data?.nickname,
      staff_birthday: staffBirthday,
      ssn: data?.ssn,
      // staff_other_id:data?.staff_other_id,
      office_email: data?.office_email,
      office_phone: data?.office_phone,
      office_fax: data?.office_fax,
      driver_license: data?.driver_license,
      license_exp_date: data?.license_exp_date,
      title: data?.title,
      hir_date_compnay: data?.hir_date_compnay,
      // credential_type:data?.credential_type,
      is_active: data.is_active,
      treatment_type: data?.treatment_type,
      individual_npi: data?.individual_npi,
      caqh_id: data?.caqh_id,
      service_area_zip: data?.service_area_zip,
      terminated_date: data?.terminated_date,
      language: data?.language,
      taxonomy_code: data?.taxonomy_code,
      gender: Number(data.gender),
      // military_service:data?.military_service,
      // therapist_bill:data?.therapist_bill,
      // is_staff_active:data?.is_staff_active,
      // enable_fource_creation: data?.enable_fource_creation,
      // has_catalsty_access: data?.has_catalsty_access,
      notes: data?.notes,
      // back_color: data?.back_color,
      // text_color:data?.text_color,
      session_check: BoolConverter(createSession),
      email_remainder: BoolConverter(emailReminder),
    };

    //update staff api call
    if (payload) {
      updateStaff({
        token,
        payload,
      });
    }
    console.log("payload", payload);
  };

  useEffect(() => {
    if (updateSuccess) {
      toast.success("Successfully updated", {
        position: "top-center",
        autoClose: 2000,
        theme: "dark",
      });
    } else if (updateError) {
      toast.error("Cann't be Updated", {
        position: "top-center",
        autoClose: 2000,
        theme: "dark",
      });
    }
  }, [updateSuccess, updateError]);

  if (staffDataLoading) {
    return <Loading></Loading>;
  }

  // let convertedStatus = session_check === 1 ? true : false;
  // console.log("convert ", convertedStatus, "raw api", session_check);
  return (
    <div className="sm:h-[100vh]">
      <h1 className="text-lg mt-2 text-left text-orange-400">Bio's</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 my-3 mr-2 gap-x-6 gap-y-3 ">
          {/* First Name with all the validation  */}
          <div>
            <label className="label">
              <span className=" label-font">
                First Name<span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="text"
              name="first_name"
              className="input-border input-font w-full focus:outline-none"
              {...register("first_name")}
            />
          </div>
          <div>
            <label className="label">
              <span className=" label-font">Middle Name</span>
            </label>
            <input
              type="text"
              name="middle_name"
              className="input-border input-font w-full focus:outline-none"
              {...register("middle_name")}
            />
          </div>
          <div>
            <label className="label">
              <span className=" label-font">
                Last Name<span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="text"
              name="last_name"
              className="input-border input-font w-full focus:outline-none"
              {...register("last_name")}
            />
          </div>
          <div>
            <label className="label">
              <span className=" label-font">Nick Name</span>
            </label>
            <input
              type="text"
              name="nickname"
              className="input-border input-font w-full focus:outline-none"
              {...register("nickname")}
            />
          </div>
          {/* DOB */}
          <div>
            <label className="label">
              <span className=" label-font">
                Date of Birth<span className="text-red-500">*</span>
              </span>
            </label>
            <input
              className="input-border input-font  w-full focus:outline-none"
              type="date"
              value={staffBirthday}
              onChange={(e) => setStaffBirthday(e.target.value)}
            />
            {/* <input
              className="input-border input-font w-full focus:outline-none"
              type="date"
              {...register("staff_birthday")}
            /> */}
          </div>
          <div>
            <label className="label">
              <span className=" label-font">SSN</span>
            </label>
            <input
              type="text"
              name="ssn"
              className="input-border input-font w-full focus:outline-none"
              {...register("ssn")}
            />
          </div>
          {/* phone & email  */}
          <div>
            <label className="label">
              <span className=" label-font">
                Office Phone <span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="text"
              name="office_phone"
              className="input-border input-font w-full focus:outline-none"
              {...register("office_phone")}
            />
          </div>
          <div>
            <label className="label">
              <span className=" label-font">
                Office Email<span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="text"
              name="office_email"
              className="input-border input-font w-full focus:outline-none"
              {...register("office_email")}
            />
          </div>
          <div>
            <label className="label">
              <span className=" label-font">
                Office Fax<span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="text"
              name="office_fax"
              className="input-border input-font w-full focus:outline-none"
              {...register("office_fax")}
            />
          </div>
          {/* driving license */}
          <div>
            <label className="label">
              <span className=" label-font">
                Drivers License & Expiration Date
              </span>
            </label>
            <input
              type="text"
              name="driver_license"
              className="input-border input-font w-full focus:outline-none"
              {...register("driver_license")}
            />
          </div>
          <div className="mt-[33px]">
            {" "}
            <input
              className="input-border input-font w-full focus:outline-none"
              type="date"
              {...register("license_exp_date")}
            />
          </div>
          <div>
            <label className="label">
              <span className=" label-font">Title</span>
            </label>
            <input
              type="text"
              name="title"
              className="input-border input-font w-full focus:outline-none"
              {...register("title")}
            />
          </div>
          <div className="">
            <label className="label">
              <span className=" label-font">Hiring Date with Company</span>
            </label>
            <input
              className="input-border input-font w-full focus:outline-none"
              type="date"
              {...register("hir_date_compnay")}
            />
          </div>
          <div>
            <label className="label">
              <span className=" label-font">Credential Type</span>
            </label>
            <select
              className="input-border input-font  w-full focus:outline-none"
              {...register("credential_type")}
            >
              <option value="Speech Therapist">Speech Therapist</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div>
            <label className="label">
              <span className=" label-font">
                Tx Type <span className="text-red-500">*</span>
              </span>
            </label>
            <select
              className="input-border input-font  w-full focus:outline-none"
              {...register("tx_type")}
            >
              <option value="Speech Therapist">Speech Therapist</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div>
            <label className="label">
              <span className=" label-font">Individual NPI</span>
            </label>
            <input
              type="text"
              name="individual_npi"
              className="input-border input-font w-full focus:outline-none"
              {...register("individual_npi")}
            />
          </div>
          <div>
            <label className="label">
              <span className=" label-font">CAQH Id</span>
            </label>
            <input
              type="text"
              name="caqh_id"
              className="input-border input-font w-full focus:outline-none"
              {...register("caqh_id")}
            />
          </div>
          <div>
            <label className="label">
              <span className=" label-font">Service Area Zip</span>
            </label>
            <input
              type="text"
              name="service_area_zip"
              className="input-border input-font w-full focus:outline-none"
              {...register("service_area_zip")}
            />
          </div>
          <div>
            <label className="label">
              <span className=" label-font">Termination Date</span>
            </label>
            <input
              className="input-border input-font w-full focus:outline-none"
              type="date"
              {...register("terminated_date")}
            />
          </div>
          <div>
            <label className="label">
              <span className=" label-font">Language(s)</span>
            </label>
            <input
              type="text"
              name="language"
              className="input-border input-font w-full focus:outline-none"
              {...register("language")}
            />
          </div>
          <div>
            <label className="label">
              <span className=" label-font">Taxonomy Code</span>
            </label>
            <input
              type="text"
              name="taxonomy_code"
              className="input-border input-font w-full focus:outline-none"
              {...register("taxonomy_code")}
            />
          </div>

          <div>
            <label className="label">
              <span className=" label-font">
                Gender <span className="text-red-500">*</span>
              </span>
            </label>
            <div className="flex items-center">
              <div className="flex ml-1 mt-1 items-center">
                <input type="radio" value={2} {...register("gender")} />
                <span className="text-sm ml-1 text-gray-600 font-medium">
                  female
                </span>
              </div>
              <div className="flex ml-1 mt-1 items-center">
                <input type="radio" value={1} {...register("gender")} />
                <span className="text-sm ml-1 text-gray-600 font-medium">
                  male
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 my-5">
              <Switch
                checked={createSession}
                onChange={() => setCreateSession(!createSession)}
                size="small"
              />
              <span>Create Session</span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 my-5">
              <Switch
                checked={emailReminder}
                onChange={() => setEmailReminder(!emailReminder)}
                size="small"
              />
              <span>Email Reminder</span>
            </div>
          </div>
          <div>
            <label className="label">
              <span className=" label-font">Background Color</span>
            </label>
            <div>
              <div className={`p-3 bg-[#e37a7a] w-full ml-1`}></div>
              {/* {open && ( */}
              {/* <ColorPicker
                width={200}
                height={100}
                color={color}
                onChange={setColor}
                hideHSV
                dark
                hideRGB
                hideHEX
              /> */}
              {/* )} */}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label className="label">
              <span className=" label-font">Notes</span>
            </label>
            <TextArea
              type="text"
              name="notes"
              rows={4}
              placeholder="maxLength is 6"
              size="middle"
              {...register("notes")}
            />
          </div>
        </div>

        <div>
          <button className=" pms-button mr-2" type="submit">
            Save
          </button>
          <button onClick={reset} className="pms-close-button">
            Close
          </button>
        </div>
      </form>
    </div>
  );
};

export default Bio;
