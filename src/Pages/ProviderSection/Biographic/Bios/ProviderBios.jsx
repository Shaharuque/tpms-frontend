import React from "react";
import person from "../../../Assets/user.png";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { providerIp } from "../../../../Misc/BaseClient";
import axios from "axios";
import useToken from "../../../../CustomHooks/useToken";
import { toast } from "react-toastify";

export const ProviderBios = () => {
  const [note, setNote] = useState("");
  const { token } = useToken();
  const [data, setdata] = useState(null);
  const { register, handleSubmit, reset } = useForm();

  // api call
  useEffect(() => {
    const getProviderData = async () => {
      try {
        const res = await axios({
          method: "POST",
          url: `http://localhost:8080/api/v1/provider/biographic`,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "x-auth-token": token || null,
          },
        });
        const data = res?.data;
        setdata(data);
        console.log("check data", data);
      } catch (error) {
        console.log(error);
      }
    };
    getProviderData();
  }, [token]);

  console.log("data", data);

  // destracture

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
  } = data?.employee || {};

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
        credential_type,
        title: title,
        service_area_zip: service_area_zip,
        driver_license: driver_license,
        license_exp_date: license_exp_date,
        language: language,
        gender: String(gender),
        notes: notes,
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
    credential_type,
    title,
    driver_license,
    license_exp_date,
    language,
    service_area_zip,
    gender,
    notes,
  ]);

  //select treatment boiler plate
  let treatmentSelect = null;
  if (data?.txTypes.length === 0) {
    treatmentSelect = <div className="text-red-700">Select Treatments</div>;
  } else if (data?.txTypes.length > 0) {
    treatmentSelect = (
      <>
        {data?.txTypes.map((treatment) => {
          return (
            <option key={treatment?.id} value={treatment?.id}>
              {treatment?.treatment_name}
            </option>
          );
        })}
      </>
    );
  }

  // credential type
  let credentialSelect = null;
  if (data?.assignType.length === 0) {
    credentialSelect = <div className="text-red-700">Select Credential Type</div>;
  } else if (data?.assignType.length > 0) {
    credentialSelect = (
      <>
        {data?.assignType.map((c) => {
          return (
            <option key={c?.id} value={c?.id}>
              {c?.type_name}
            </option>
          );
        })}
      </>
    );
  }

  const onSubmit = async (data) => {
    try {
      const res = await axios({
        method: "POST",
        url: "http://localhost:8080/api/v1/provider/biographic/biographic/update",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "x-auth-token": token || null,
        },
        data: data,
      });

      if (res?.data?.success === true) {
        toast.success(<h1 className="text-[12px]">{res?.data?.message}</h1>, {
          position: "top-center",
          autoClose: 5000,
          closeOnClick: true,
          theme: "dark",
        });
      }
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div>
        <h1 className="text-lg mt-2 text-left text-orange-400 p-2">Bio's</h1>
        <div className="div-img">
          <div>
            <img src={person} className=" h-40 " alt="Dami img not taken" />
          </div>
          <div>
            <div className="mb-3 w-76">
              <input className="form-control" type="file" id="formFile" />
            </div>
          </div>
        </div>

        {/**form .....start */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 my-3 mr-2 gap-x-6 gap-y-3 ">
            {/* First Name with all the validation  */}
            <div>
              <label className="label">
                <span className=" label-font">
                  First Name<span className="text-red-500">*</span>
                </span>
              </label>
              <input type="text" name="first_name" className="input-border input-font w-full focus:outline-none" {...register("first_name")} />
            </div>
            <div>
              <label className="label">
                <span className=" label-font">Middle Name</span>
              </label>
              <input type="text" name="middle_name" className="input-border input-font w-full focus:outline-none" {...register("middle_name")} />
            </div>
            <div>
              <label className="label">
                <span className=" label-font">
                  Last Name<span className="text-red-500">*</span>
                </span>
              </label>
              <input type="text" name="last_name" className="input-border input-font w-full focus:outline-none" {...register("last_name")} />
            </div>
            <div>
              <label className="label">
                <span className=" label-font">Nick Name</span>
              </label>
              <input type="text" name="nickname" className="input-border input-font w-full focus:outline-none" {...register("nickname")} />
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
                // value={staffBirthday}
                // onChange={(e) => setStaffBirthday(e.target.value)}
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
              <input type="text" name="ssn" className="input-border input-font w-full focus:outline-none" {...register("ssn")} />
            </div>
            {/* phone & email  */}
            <div>
              <label className="label">
                <span className=" label-font">
                  Office Phone <span className="text-red-500">*</span>
                </span>
              </label>
              <input type="text" name="office_phone" className="input-border input-font w-full focus:outline-none" {...register("office_phone")} />
            </div>
            <div>
              <label className="label">
                <span className=" label-font">
                  Office Email<span className="text-red-500">*</span>
                </span>
              </label>
              <input type="text" name="office_email" className="input-border input-font w-full focus:outline-none" {...register("office_email")} />
            </div>
            <div>
              <label className="label">
                <span className=" label-font">
                  Office Fax<span className="text-red-500">*</span>
                </span>
              </label>
              <input type="text" name="office_fax" className="input-border input-font w-full focus:outline-none" {...register("office_fax")} />
            </div>
            {/* driving license */}
            <div>
              <label className="label">
                <span className=" label-font">Drivers License & Expiration Date</span>
              </label>
              <input type="text" name="driver_license" className="input-border input-font w-full focus:outline-none" {...register("driver_license")} />
            </div>
            <div>
              <label className="label">
                <span className=" label-font">Title</span>
              </label>
              <input type="text" name="title" className="input-border input-font w-full focus:outline-none" {...register("title")} />
            </div>
            <div className="">
              <label className="label">
                <span className=" label-font">Hiring Date with Company</span>
              </label>
              <input className="input-border input-font w-full focus:outline-none" type="date" {...register("hir_date_compnay")} />
            </div>
            <div>
              <label className="label">
                <span className=" label-font">Credential Type</span>
              </label>
              <select className="input-border input-font  w-full focus:outline-none" {...register("credential_type")}>
                {credentialSelect}
              </select>
            </div>
            <div>
              <label className="label">
                <span className=" label-font">
                  Tx Type <span className="text-red-500">*</span>
                </span>
              </label>
              <select className="input-border input-font  w-full focus:outline-none" {...register("treatment_type")}>
                {treatmentSelect}
              </select>
            </div>
            <div>
              <label className="label">
                <span className=" label-font">Individual NPI</span>
              </label>
              <input type="text" name="individual_npi" className="input-border input-font w-full focus:outline-none" {...register("individual_npi")} />
            </div>
            <div>
              <label className="label">
                <span className=" label-font">CAQH Id</span>
              </label>
              <input type="text" name="caqh_id" className="input-border input-font w-full focus:outline-none" {...register("caqh_id")} />
            </div>
            <div>
              <label className="label">
                <span className=" label-font">Service Area Zip</span>
              </label>
              <input type="text" name="service_area_zip" className="input-border input-font w-full focus:outline-none" {...register("service_area_zip")} />
            </div>
            <div>
              <label className="label">
                <span className=" label-font">Termination Date</span>
              </label>
              <input className="input-border input-font w-full focus:outline-none" type="date" {...register("terminated_date")} />
            </div>
            <div>
              <label className="label">
                <span className=" label-font">Language(s)</span>
              </label>
              <input type="text" name="language" className="input-border input-font w-full focus:outline-none" {...register("language")} />
            </div>
            <div>
              <label className="label">
                <span className=" label-font">Taxonomy Code</span>
              </label>
              <input type="text" name="taxonomy_code" className="input-border input-font w-full focus:outline-none" {...register("taxonomy_code")} />
            </div>

            <div>
              <label className="label">
                <span className=" label-font">Default Timezone:</span>
              </label>
              <input type="text" name="taxonomy_code" className="input-border input-font w-full focus:outline-none" {...register("Default Timezone")} />
            </div>

            <div>
              <div>
                <label className="label">
                  <span className=" label-font">
                    Gender <span className="text-red-500">*</span>
                  </span>
                </label>
                <div className="flex items-center">
                  <div className="flex ml-1 mt-1 items-center">
                    <input type="radio" value={2} {...register("gender")} />
                    <span className="text-sm ml-1 text-gray-600 font-medium">female</span>
                  </div>
                  <div className="flex ml-1 mt-1 items-center">
                    <input type="radio" value={1} {...register("gender")} />
                    <span className="text-sm ml-1 text-gray-600 font-medium">male</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="my-5 col-span-4">
              <button className=" pms-button mr-2" type="submit">
                Save
              </button>
              <button onClick={reset} className="pms-close-button">
                Close
              </button>
            </div>
          </div>
        </form>
        {/**form ...end */}
      </div>
    </div>
  );
};
